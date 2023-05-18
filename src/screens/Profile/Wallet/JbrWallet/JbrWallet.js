import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  RefreshControl,
} from "react-native";
import { styles } from "./JbrWallet.styles";
import { Button, ScreenWrapper, Spacer, TextField } from "@/components";
import { Header } from "../Components/NameHeader";
import { COLORS, SH, SW } from "@/theme";
import { jbrLogo, downleft, downright, uparrow, backArrow } from "@/assets";
import { strings } from "@/localization";
import { transactionHistory } from "@/constants/flatlistData";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";
import { useDispatch, useSelector } from "react-redux";
import {
  addWalletBalanceApi,
  getWalletBalance,
  redeemMoney,
} from "@/actions/WalletActions";
import { getWallet } from "@/selectors/WalletSelector";
import { getUser } from "@/selectors/UserSelectors";
import Modal from "react-native-modal";
import { getKyc } from "@/selectors/KycSelector";
import { getBankAccounts } from "@/actions/KycActions";
import { simpleCheck } from "@/assets";
import { isLoadingSelector } from "@/selectors/StatusSelectors";
import { TYPES } from "@/Types/Types";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { Loader } from "@/components/Loader";

export function JbrWallet() {
  const dispatch = useDispatch();
  const wallet = useSelector(getWallet);
  const user = useSelector(getUser);
  const accounts = useSelector(getKyc);

  const [isAddBalanceModal, setIsAddBalanceModal] = useState(false);
  const [redeemBalanceModal, setRedeemBalanceModal] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState("");
  const [amount, setamount] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  // console.log("redeem->" + wallet?.redeem);

  const isLoading = useSelector((state) =>
    isLoadingSelector([TYPES.ADD_BALANCE], state)
  );
  const walletLoading = useSelector((state) =>
    isLoadingSelector([TYPES.GET_WALLET_BALANCE], state)
  );
  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getWalletBalance());
    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  };
  useEffect(() => {
    dispatch(getWalletBalance());
    dispatch(getBankAccounts());
  }, []);
  const dollarToCents = (dollarValue) => {
    const centsValue = dollarValue * 100;
    return centsValue;
  };
  const valueInCents = dollarToCents(amount);
  const valueInDollars = Math.floor(valueInCents);
  // console.log("---->" + valueInDollars);
  const onEnterAmount = (data) => {
    const regex = /^\d*\.?\d{0,2}$/;
    if (regex.test(data)) {
      setamount(data);
    }
    if (accounts?.bankAccounts?.length === 1) {
      setSelectedAccount(accounts?.bankAccounts[0]);
    }
  };
  const renderItem = ({ item }) => (
    <View style={styles.tranHisCon}>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <Image source={item.image} style={styles.bgEarn} />
        <TouchableOpacity
          onPress={() => navigate(NAVIGATION.transactionHistory)}
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: 6,
          }}
        >
          <Text style={styles.deliveryFeeText}>{item.title}</Text>
          <Text style={styles.dateTime}>{item.date}</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.balanceText}>{item.balance}</Text>
    </View>
  );
  const renderBankAccounts = ({ item }) => {
    return (
      <>
        <TouchableOpacity
          style={[
            styles.bankAccountsView,
            {
              borderColor:
                selectedAccount == item ? COLORS.primary : COLORS.darkGrey,
            },
          ]}
          onPress={() => setSelectedAccount(item)}
        >
          <View>
            <View style={styles.row}>
              <Text style={styles.bankDetailsText}>
                {item?.account_owner_name}
              </Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.bankDetailsText}>{"Account number:  "}</Text>
              <Text style={styles.bankDetailsText}>{item?.account_number}</Text>
            </View>
          </View>

          <View>
            {selectedAccount == item && (
              <Image
                resizeMode="contain"
                source={simpleCheck}
                style={styles.checkIconstyle}
              />
            )}
          </View>
        </TouchableOpacity>
        <Spacer space={SH(10)} />
      </>
    );
  };
  const addMoneyHandler = () => {
    if (amount == undefined) {
      Toast.show({
        position: "bottom",
        type: "error_toast",
        text2: strings.validation.enterAmount,
        visibilityTime: 2000,
      });
    } else if (amount <= 0) {
      Toast.show({
        position: "bottom",
        type: "error_toast",
        text2: strings.validation.enterAmount,
        visibilityTime: 2000,
      });
    } else if (!selectedAccount) {
      Toast.show({
        position: "bottom",
        type: "error_toast",
        text2: strings.validation.selectBank,
        visibilityTime: 2000,
      });
    } else {
      dispatch(
        addWalletBalanceApi(valueInDollars, selectedAccount?.account_name)
      );
      setIsAddBalanceModal(false);
    }
  };
  const redeemMoneyHandler = () => {
    1;
    if (amount == undefined) {
      Toast.show({
        position: "bottom",
        type: "error_toast",
        text2: strings.validation.enterAmount,
        visibilityTime: 2000,
      });
    } else if (amount <= 0) {
      Toast.show({
        position: "bottom",
        type: "error_toast",
        text2: strings.validation.enterAmount,
        visibilityTime: 2000,
      });
    } else if (!selectedAccount) {
      Toast.show({
        position: "bottom",
        type: "error_toast",
        text2: strings.validation.selectBank,
        visibilityTime: 2000,
      });
    } else {
      dispatch(redeemMoney(valueInDollars, selectedAccount?.account_name));
      setRedeemBalanceModal(false);
    }
  };
  return (
    <ScreenWrapper style={{ flex: 1, backgroundColor: COLORS.white }}>
      <>
        <Header back={backArrow} title={strings.profile.jbrWallet}  />
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <View style={styles.balanceCon}>
            <Spacer space={SH(10)} backgroundColor={COLORS.white} />
            <View style={styles.mainBal}>
              <View style={{ flexDirection: "row" }}>
                <Image source={jbrLogo} style={styles.jbrlogo} />
                <View
                  style={{
                    flexDirection: "column",
                    marginLeft: 8,
                  }}
                >
                  <Text style={styles.balanceLabel}>
                    {strings.jbrWallet.availableBalance}
                  </Text>
                  <Text style={styles.balance}>
                    {strings.jbrWallet.JBR}{" "}
                    {Math.floor(
                      wallet?.getWalletBalance?.sila_balance / 100
                    ).toFixed(2)}
                  </Text>
                </View>
              </View>
            </View>
            <Spacer space={SH(30)} />
            <View style={styles.earnView}>
              <TouchableOpacity onPress={() => alert("coming soon")}>
                <View style={styles.earnBtn}>
                  <Image source={downleft} style={styles.earnlogo} />
                  <Text style={styles.earnText}>{strings.jbrWallet.added}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => alert("coming soon")}>
                <View style={styles.earnBtn}>
                  <Image source={uparrow} style={styles.earnlogo} />
                  <Text style={styles.earnText}>
                    {strings.jbrWallet.purchases}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => alert("coming soon")}>
                <View style={styles.earnBtn}>
                  <Image source={downright} style={styles.earnlogo} />
                  <Text style={styles.earnText}>{strings.jbrWallet.earn}</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <Spacer space={SH(15)} />

          <View style={styles.rowView}>
            <TouchableOpacity
              style={styles.addBalanceView}
              onPress={() => {
                setIsAddBalanceModal(true);
                setSelectedAccount("");
                setamount("");
              }}
            >
              <Text style={styles.addBalanceText}>{"Add Balance +"}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.addBalanceView}
              onPress={() => {
                setRedeemBalanceModal(true);
                setSelectedAccount("");
                setamount("");
              }}
            >
              <Text style={styles.addBalanceText}>{"Redeem money"}</Text>
            </TouchableOpacity>
          </View>

          <Spacer space={SH(5)} />

          {/* ********DeliveryHistory start********** */}
          <View style={{ paddingHorizontal: SW(20) }}>
            <Text style={styles.delHiStText}>
              {strings.jbrWallet.buyingCapacity}
            </Text>
            <Spacer space={SH(15)} />

            <View style={styles.rowView}>
              <TouchableOpacity
                style={[styles.medalCon, styles.bronze]}
                onPress={() => navigate(NAVIGATION.brands)}
              >
                <Text style={[styles.returnCount]}>{"5"}</Text>
                <Text style={styles.medalText}>{strings.jbrWallet.brands}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.medalCon, styles.deliver]}
                onPress={() => navigate(NAVIGATION.brandsProduct)}
              >
                <Text style={[styles.returnCount]}>{"19"}</Text>
                <Text style={styles.medalText}>
                  {strings.jbrWallet.products}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.medalCon, styles.return]}
                onPress={() => navigate(NAVIGATION.manufacturers)}
              >
                <Text style={styles.returnCount}>{"3"}</Text>
                <Text style={styles.medalText}>
                  {strings.jbrWallet.manfacturer}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <Spacer space={SH(30)} />
          {/* ********DeliveryHistory end********** */}

          {/* ********TransactionHistory start********** */}
          <View style={{ flex: 1, paddingHorizontal: SW(20) }}>
            <Text style={styles.delHiStText}>
              {strings.jbrWallet.transactionHistory}
            </Text>
            <Spacer space={SH(10)} />

            <FlatList
              data={transactionHistory}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </ScrollView>
        {walletLoading ? <Loader message="Loading data..." /> : null}

        <Modal
          isVisible={isAddBalanceModal}
          backdropOpacity={0.5}
          backdropColor="#D8D8D8"
          onBackdropPress={() => setIsAddBalanceModal(false)}
          onBackButtonPress={() => setIsAddBalanceModal(false)}
        >
          <View
            style={styles.modalContainerStyle}
            showsVerticalScrollIndicator={false}
          >
            <TouchableOpacity
              onPress={() => setIsAddBalanceModal(false)}
              style={styles.crossView}
            >
              <Text style={styles.cross}>X</Text>
            </TouchableOpacity>

            <Text style={styles.enterAmountText}>{"Enter amount"}</Text>

            <Spacer space={SH(8)} />

            <TextField
              style={styles.amountInput}
              onChangeText={(text) => {
                onEnterAmount(text);
              }}
              keyboardType="numeric"
              value={amount}
            />

            <Spacer space={SH(20)} />
            {/* <TouchableOpacity style={styles.bankAccountsView}>
              <Text>{"Bank account"}</Text>
            </TouchableOpacity> */}
            <FlatList
              data={accounts?.bankAccounts}
              extraData={accounts?.bankAccounts}
              keyExtractor={(item) => item.id}
              renderItem={renderBankAccounts}
            />
            <View style={styles.modalButtonView}>
              <Button title={"Add"} onPress={addMoneyHandler} />
            </View>
          </View>
        </Modal>

        <Modal
          isVisible={redeemBalanceModal}
          backdropOpacity={0.5}
          backdropColor="#D8D8D8"
          onBackdropPress={() => setRedeemBalanceModal(false)}
          onBackButtonPress={() => setRedeemBalanceModal(false)}
        >
          <View
            style={styles.modalContainerStyle}
            showsVerticalScrollIndicator={false}
          >
            <TouchableOpacity
              onPress={() => setRedeemBalanceModal(false)}
              style={styles.crossView}
            >
              <Text style={styles.cross}>X</Text>
            </TouchableOpacity>

            <Text style={styles.enterAmountText}>{"Enter amount"}</Text>

            <Spacer space={SH(8)} />

            <TextField
              style={styles.amountInput}
              onChangeText={(text) => {
                onEnterAmount(text);
              }}
              value={amount}
            />

            <Spacer space={SH(20)} />
            {/* <TouchableOpacity style={styles.bankAccountsView}>
              <Text>{"Bank account"}</Text>
            </TouchableOpacity> */}
            <FlatList
              data={accounts?.bankAccounts}
              extraData={accounts?.bankAccounts}
              keyExtractor={(item) => item.id}
              renderItem={renderBankAccounts}
            />
            <View style={styles.modalButtonView}>
              <Button title={"Redeem"} onPress={redeemMoneyHandler} />
            </View>
          </View>
        </Modal>
      </>
    </ScreenWrapper>
  );
}
