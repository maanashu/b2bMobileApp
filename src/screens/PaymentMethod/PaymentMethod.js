import {
  BackHandler,
  Image,
  RefreshControl,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./PaymentMethod.styles.js";
import { Button, NameHeader, ScreenWrapper, Spacer } from "@/components";
import { SF, SH, SW } from "@/theme/ScalerDimensions";
import { Fonts, bank, coinStack } from "@/assets";
import { strings } from "@/localization";
import { kFormatter } from "@/Utils/GlobalMethods.js";
import { getWallet } from "@/selectors/WalletSelector.js";
import { useDispatch, useSelector } from "react-redux";
import { getKyc } from "@/selectors/KycSelector.js";
import { FlatList } from "react-native";
import {
  deleteBankAccounts,
  getBankAccounts,
  getPlaidToken,
  linkBankAccount,
} from "@/actions/KycActions.js";
import { getUser } from "@/selectors/UserSelectors.js";
import { checkBankBalance, getWalletBalance } from "@/actions/WalletActions.js";
import { TYPES } from "@/Types/Types.js";
import { isLoadingSelector } from "@/selectors/StatusSelectors.js";
import { ActivityIndicator } from "react-native";
import { COLORS } from "@/theme/Colors.js";
import { NAVIGATION } from "@/constants/navigation.js";
import { navigate } from "@/navigation/NavigationRef.js";
import PlaidLink from "react-native-plaid-link-sdk";
import { Toast } from "react-native-toast-message/lib/src/Toast.js";

export function PaymentMethod(params) {
  const dispatch = useDispatch();
  const wallet = useSelector(getWallet);
  const kyc = useSelector(getKyc);
  const user = useSelector(getUser);
  var plaid = kyc?.plaidToken ?? [];
  useEffect(() => {
    if (!kyc?.plaidToken) {
      dispatch(getPlaidToken());
    }
  }, []);

  const [showBalance, setShowBalance] = useState("");
  const [removeBankIndex, setRemoveBankIndex] = useState("");
  const [balance, setBalance] = useState();
  const [refreshing, setRefreshing] = useState(false);

  const isCheckingBalance = useSelector((state) =>
    isLoadingSelector([TYPES.CHECK_BALANCE], state)
  );
  const isRemovingBank = useSelector((state) =>
    isLoadingSelector([TYPES.DELETE_BANK_ACCOUNTS], state)
  );

  const { navigation } = params;
  useEffect(() => {
    const handleBackButton = () => {
      navigate(NAVIGATION.home, { screen: NAVIGATION.profile });
      return true;
    };

    BackHandler.addEventListener("hardwareBackPress", handleBackButton);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackButton);
    };
  }, [navigation]);

  const handleRemoveBankAccount = (id, index) => {
    const body = {
      token: user?.user?.payload?.token,
      account_name: id,
    };
    setRemoveBankIndex(index);
    dispatch(deleteBankAccounts(body));
  };
  const handleCheckBalance = (id, index) => {
    setShowBalance(index);
    dispatch(checkBankBalance(id)).then((res) =>
      setBalance(res?.payload?.bankBalance?.available_balance)
    );
  };
  const onRefresh = () => {
    setRefreshing(true);
    setRemoveBankIndex("");
    setShowBalance("");
    dispatch(getWalletBalance());
    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  };
  const ChangeButtonView = () => {
    if (Object?.keys(plaid)?.length !== 0) {
      return (
        <PlaidLink
          tokenConfig={{ token: plaid }}
          onExit={(exit) =>
            Toast.show({
              text2: "Adding bank Cancelled",
              position: "bottom",
              type: "error_toast",
              visibilityTime: 2000,
            })
          }
          onSuccess={(success) => onPressHandler(success)}
        >
          <Text style={styles.addBankButton}>{strings.card.addBank}</Text>
        </PlaidLink>
      );
    } else {
      return (
        <Button title={strings.kyc.continue} style={{ alignSelf: "center" }} />
      );
    }
  };
  const onPressHandler = async (success) => {
    if (success) {
      dispatch(linkBankAccount(success.publicToken))
        .then((res) => dispatch(getBankAccounts()))
        .catch((error) => {});
    }
  };
  const renderBanks = ({ item, index }) => {
    return (
      <>
        <View style={styles.backgroundView}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={styles.iconBackground}>
              <Image
                source={item?.bank_logo ? { uri: item?.bank_logo } : bank}
                resizeMode="contain"
                style={styles.bankIcon}
              />
            </View>
            <View style={{ alignItems: "flex-start", left: SW(10) }}>
              <Text style={styles.smallDetailHeadings}>
                {"A/c No. :  "}
                <Text style={styles.smallDetailText}>
                  {item?.account_number}
                </Text>
              </Text>
              <Text style={styles.smallDetailHeadings}>
                {"A/c Holder Name : "}
                <Text style={styles.smallDetailText}>
                  {item?.account_owner_name}
                </Text>
              </Text>
              <Text style={styles.smallDetailHeadings}>
                {"Bank Name : "}
                <Text style={styles.smallDetailText}>{item?.bank_name}</Text>
              </Text>
            </View>
          </View>
          <Spacer space={SH(15)} />
          <View style={styles.bottomLine} />
          <Spacer space={SH(15)} />

          <View style={styles.rowJustifiedView}>
            {removeBankIndex === index && isRemovingBank ? (
              <View>
                <ActivityIndicator
                  size="small"
                  color={COLORS.primary}
                  style={styles.removeBankloaderStyle}
                />
              </View>
            ) : (
              <TouchableOpacity
                onPress={() =>
                  handleRemoveBankAccount(item.account_name, index)
                }
              >
                <Text style={styles.bottomText}>{"Remove accont"}</Text>
              </TouchableOpacity>
            )}

            {index === showBalance && isCheckingBalance ? (
              <ActivityIndicator
                size="small"
                color={COLORS.primary}
                style={styles.loaderStyle}
              />
            ) : (
              <View>
                {balance && index === showBalance ? (
                  <Text style={styles.bottomText}>{"$" + balance}</Text>
                ) : (
                  <TouchableOpacity
                    onPress={() =>
                      handleCheckBalance(item?.account_name, index)
                    }
                  >
                    <Text style={styles.bottomText}>{"Check Balance"}</Text>
                  </TouchableOpacity>
                )}
              </View>
            )}
          </View>
        </View>
        <Spacer space={SH(15)} />
      </>
    );
  };

  return (
    <ScreenWrapper style={styles.container}>
      <NameHeader
        title={"Your Bank Accounts"}
        back
        backNavi={() =>
          navigation.navigate(NAVIGATION.home, { screen: NAVIGATION.profile })
        }
      />

      <Spacer space={SH(10)} />

      <View style={styles.mainView}>
        <View style={styles.InnerbalanceView}>
          <Text style={styles.balanceText}>
            {strings.paymentMethod.availableBalance}
          </Text>

          <View style={styles.coinView}>
            <Text style={styles.coinText}>
              {kFormatter(wallet?.getWalletBalance?.sila_balance) || 0}
            </Text>
            <Image
              resizeMode="contain"
              source={coinStack}
              style={styles.coinStackIcon}
            />
          </View>
        </View>
        <Spacer space={SH(20)} />

        <FlatList
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          showsVerticalScrollIndicator={false}
          data={kyc?.bankAccounts}
          extraData={kyc?.bankAccounts}
          renderItem={renderBanks}
        />
        <View style={styles.buttonView}>{ChangeButtonView()}</View>
      </View>
    </ScreenWrapper>
  );
}
