import {
  Image,
  Keyboard,
  RefreshControl,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
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
import PlaidLink from "react-native-plaid-link-sdk";
import { Toast } from "react-native-toast-message/lib/src/Toast.js";
import RBSheet from "react-native-raw-bottom-sheet";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

export function PaymentMethod() {
  const CELL_COUNT = 4;
  const dispatch = useDispatch();
  const wallet = useSelector(getWallet);
  const kyc = useSelector(getKyc);
  const user = useSelector(getUser);
  var plaid = kyc?.plaidToken ?? [];
  const ref = useRef();
  const codeRef = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [value, setValue] = useState("");
  const [removeBankIndex, setRemoveBankIndex] = useState("");
  const [removeBankId, setRemoveBankId] = useState("");

  const [prop, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  useEffect(() => {
    if (!kyc?.plaidToken) {
      dispatch(getPlaidToken());
    }
  }, []);
  const body = {
    token: user?.user?.payload?.token,
    account_name: removeBankId,
  };
  const securityPin = user?.user?.payload?.user_profiles?.security_pin;
  const [showBalance, setShowBalance] = useState("");
  const [balance, setBalance] = useState();
  const [refreshing, setRefreshing] = useState(false);

  const isCheckingBalance = useSelector((state) =>
    isLoadingSelector([TYPES.CHECK_BALANCE], state)
  );
  const isRemovingBank = useSelector((state) =>
    isLoadingSelector([TYPES.DELETE_BANK_ACCOUNTS], state)
  );
  const isLinkingNewBank = useSelector((state) =>
    isLoadingSelector([TYPES.LINK_BANK_ACCOUNT], state)
  );

  const handleRemoveBankAccount = (id, index) => {
    setRemoveBankIndex(index);
    setRemoveBankId(id);
    ref.current.open();
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
    }
  };
  const onPressHandler = async (success) => {
    if (success) {
      dispatch(linkBankAccount(success.publicToken))
        .then((res) => dispatch(getBankAccounts()))
        .catch((error) => {});
    }
  };
  const confirmRemove = async (success) => {
    if (value?.length === 4) {
      if (value === securityPin) {
        ref.current.close();
        dispatch(deleteBankAccounts(body))
          .then(() => {
            setRemoveBankIndex("");
            setRemoveBankId("");
            setValue("");
          })
          .catch(() => {
            setRemoveBankIndex("");
            setRemoveBankId("");
            setValue("");
          });
      } else {
        alert("Security pin did not match");
      }
    } else {
      alert("Please Enter correct security pin");
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
      <NameHeader title={"Your Bank Accounts"} back />

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
      {isLinkingNewBank && (
        <View style={styles.loaderViewStyle}>
          <ActivityIndicator size="large" color={COLORS.primary} />
        </View>
      )}
      <RBSheet
        ref={ref}
        closeOnDragDown={false}
        animationType={"slide"}
        closeOnPressMask={true}
        customStyles={{
          wrapper: styles.wrapperStyle,
          container: styles.containerStyle,
          draggableIcon: styles.draggableIconStyle,
        }}
      >
        <View style={{ paddingHorizontal: SW(20), paddingVertical: SH(30) }}>
          <Text
            style={{
              fontFamily: Fonts.SemiBold,
              fontSize: SF(16),
              color: COLORS.darkGrey,
            }}
          >
            Confirm pin to remove account
          </Text>
          <Spacer space={SH(30)} />
          <CodeField
            ref={codeRef}
            {...prop}
            value={value}
            autoFocus={true}
            returnKeyType={"done"}
            cellCount={CELL_COUNT}
            onChangeText={setValue}
            keyboardType={"number-pad"}
            textContentType={"oneTimeCode"}
            onSubmitEditing={Keyboard.dismiss}
            rootStyle={styles.alignSelfCenter}
            renderCell={({ index, symbol, isFocused }) => (
              <View
                key={index}
                style={styles.cellRoot}
                onLayout={getCellOnLayoutHandler(index)}
              >
                <Text style={styles.cellText}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              </View>
            )}
          />
          <Spacer space={SH(50)} />

          <Button
            title={"Remove Account"}
            style={{ alignSelf: "flex-end" }}
            onPress={confirmRemove}
          />
        </View>
      </RBSheet>
    </ScreenWrapper>
  );
}
