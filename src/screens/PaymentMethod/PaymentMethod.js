import { Image, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
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
import { deleteBankAccounts } from "@/actions/KycActions.js";
import { getUser } from "@/selectors/UserSelectors.js";
import { checkBankBalance } from "@/actions/WalletActions.js";
import { TYPES } from "@/Types/Types.js";
import { isLoadingSelector } from "@/selectors/StatusSelectors.js";
import { ActivityIndicator } from "react-native";
import { COLORS } from "@/theme/Colors.js";
export function PaymentMethod() {
  const dispatch = useDispatch();
  const wallet = useSelector(getWallet);
  const kyc = useSelector(getKyc);
  const user = useSelector(getUser);

  const [showBalance, setShowBalance] = useState("");
  const [balance, setBalance] = useState();
  const bankBalance = wallet?.bankBalance;
  const isCheckingBalance = useSelector((state) =>
    isLoadingSelector([TYPES.CHECK_BALANCE], state)
  );

  const handleRemoveBankAccount = (id) => {
    const body = {
      token: user?.user?.payload?.token,
      account_name: id,
    };
    dispatch(deleteBankAccounts(body));
  };
  const handleCheckBalance = (id, index) => {
    setShowBalance(index);
    dispatch(checkBankBalance(id)).then((res) =>
      setBalance(res?.payload?.bankBalance?.available_balance)
    );
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
            <TouchableOpacity
              onPress={() => handleRemoveBankAccount(item.account_name)}
            >
              <Text style={styles.bottomText}>{"Remove accont"}</Text>
            </TouchableOpacity>

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
      {user?.user?.payload?.token ? (
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

          <Spacer space={SH(30)} />
          <View style={{}}>
            <FlatList
              data={kyc?.bankAccounts}
              extraData={kyc?.bankAccounts}
              renderItem={renderBanks}
            />
          </View>
          <Spacer space={SH(30)} />

          {/* <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            paddingVertical: SH(10),
          }}
        >
          <Button title={strings.paymentMethod.paynow} />
        </View> */}
          <Spacer space={SH(15)} />
        </View>
      ) : (
        <View style={{ padding: 20 }}>
          <Text
            style={{
              color: COLORS.darkGrey,
              fontFamily: Fonts.SemiBold,
              fontSize: SF(20),
            }}
          >
            Please login to see your bank accounts
          </Text>
        </View>
      )}
    </ScreenWrapper>
  );
}
