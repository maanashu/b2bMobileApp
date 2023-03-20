import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import PlaidLink from "react-native-plaid-link-sdk";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { login } from "@/actions/UserActions";
import {
  getPlaidToken,
  getBankAccounts,
  linkBankAccount,
} from "@/actions/KycActions";
import { Images } from "@/assets";
import { COLORS, SH, SW } from "@/theme";
import { NAVIGATION } from "@/constants";
import { strings } from "@/localization";
import { Button, Spacer } from "@/components";
import { getUser } from "@/selectors/UserSelectors";
import { navigate } from "@/navigation/NavigationRef";

import { styles } from "./ConnectBank.styles";
import { getKyc } from "@/selectors/KycSelector";

export function ConnectBank(props) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const getData = useSelector(getUser);
  const getKycData = useSelector(getKyc);
  var plaid = getKycData?.plaidToken;
  const param = props?.route?.params?.screen;

  const [isLoading, setIsLoading] = useState(false);

  const getPlaidTokenHandler = () => dispatch(getPlaidToken());

  const onPressHandler = async (success) => {
    setIsLoading(true);
    if (success) {
      const res = await dispatch(linkBankAccount(success.publicToken));

      if (
        res?.type === "LINK_BANK_ACCOUNT_SUCCESS" ||
        (res?.payload?.link?.msg === "Linked bank account!" &&
          param === "bankList")
      ) {
      } else {
        navigation.reset({
          index: 0,
          routes: [{ name: NAVIGATION.bottomTab }],
        });
      }

      if (getKycData?.linkBank?.status === "SUCCESS") {
        dispatch(getBankAccounts(param));
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    if (getKycData?.linkBank?.status === "SUCCESS") {
      dispatch(getBankAccounts());
      setIsLoading(false);
    }
  }, [getKycData?.linkBank?.status === "SUCCESS"]);

  const ChangeButtonView = () => {
    if (Object.keys(plaid).length !== 0) {
      return (
        <PlaidLink
          tokenConfig={{ token: plaid }}
          onExit={(exit) => alert("Unable to add bank account")}
          onSuccess={(success) => onPressHandler(success)}
        >
          <Text style={styles.submit}>{strings.card.addBank}</Text>
        </PlaidLink>
      );
    } else {
      return (
        <Button
          pending={isLoading}
          title={strings.kyc.continue}
          onPress={getPlaidTokenHandler}
          style={{ marginHorizontal: SW(10) }}
        />
      );
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemMainView}>
      <View>
        <View style={styles.accountView}>
          <Text style={styles.labelStyle}>{strings.payment.accountNo}</Text>
          <Text style={styles.valueStyle}>{item.account_number}</Text>
        </View>

        <View style={styles.accountView}>
          <Text style={styles.labelStyle}>{strings.payment.accountHolder}</Text>
          <Text style={styles.valueStyle}>{item.account_owner_name}</Text>
        </View>
      </View>
    </View>
  );

  const renderHeaderItem = () => <View></View>;

  const footerComponent = () => {
    if (Object.keys(plaid).length > 0) {
      return (
        <View>
          <PlaidLink
            tokenConfig={{ token: plaid }}
            onExit={(exit) => console.log("exit====", exit)}
            onSuccess={(success) => onPressHandler(success)}
          >
            <Text style={styles.addBankAccount}>{strings.bank.clickToAdd}</Text>
          </PlaidLink>
        </View>
      );
    } else {
      return (
        <View>
          <TouchableOpacity onPress={() => getPlaidTokenHandler()}>
            <Text style={styles.addBankAccount}>
              {strings.bank.addBankAccount}
            </Text>
          </TouchableOpacity>
        </View>
      );
    }
  };

  const emptyComponent = () => <Text>{strings.bank.noBankAccount}</Text>;

  const loginHandler = () => {
    const data = {
      pin: getData?.userProfile?.user_profiles?.security_pin,
      phone_no: getData?.userProfile?.user_profiles?.phone_no,
      phone_code: getData?.userProfile?.user_profiles?.phone_code,
    };
    dispatch(login(data));
  };

  const customHeader = () => {
    return (
      <View style={styles.headerMainView}>
        <TouchableOpacity
          onPress={() =>
            param === "bankList"
              ? navigate(NAVIGATION.bottomTab)
              : navigate(NAVIGATION.ageVerification)
          }
        >
          <Image source={Images.backIcon2} style={styles.backIconStyle} />
        </TouchableOpacity>
        <Text style={styles.headerTextStyle}>{strings.bank.header}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      {param === "bankList" ? (
        <View style={styles.innerContainer}>
          {customHeader()}

          <Spacer space={SH(20)} />
          {getKycData?.bankAccounts.length > 0 ? (
            <FlatList
              renderItem={renderItem}
              data={getKycData.bankAccounts}
              ListEmptyComponent={emptyComponent}
              ListFooterComponent={footerComponent}
              ListHeaderComponent={renderHeaderItem}
              contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
            />
          ) : (
            footerComponent()
          )}

          {isLoading ? (
            <View
              style={[styles.loader, { backgroundColor: "rgba(0,0,0,0.5)" }]}
            >
              <ActivityIndicator
                size={"large"}
                animating={isLoading}
                style={styles.loader}
                color={COLORS.primary}
              />
            </View>
          ) : null}
        </View>
      ) : (
        <View style={styles.innerContainer}>
          {customHeader()}

          {getKycData?.bankAccounts.length > 0 ? (
            <FlatList
              data={getKycData.bankAccounts}
              renderItem={renderItem}
              ListHeaderComponent={renderHeaderItem}
              contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
            />
          ) : (
            <View style={styles.uploadedView}>
              <Image source={Images.blueChecked} />
              <Text style={styles.uploadedText}>{strings.bank.uploaded}</Text>
            </View>
          )}

          {isLoading ? (
            <View
              style={[styles.loader, { backgroundColor: "rgba(0,0,0,0.5)" }]}
            >
              <ActivityIndicator
                size={"large"}
                animating={isLoading}
                style={styles.loader}
                color={COLORS.primary}
              />
            </View>
          ) : null}

          <View style={{ flex: 1 }} />

          {ChangeButtonView()}

          {getKycData?.bankAccounts.length > 0 ? (
            <Button
              pending={isLoading}
              onPress={loginHandler}
              title={strings.kyc.continue}
              style={{ marginHorizontal: SW(10) }}
            />
          ) : null}
        </View>
      )}
    </SafeAreaView>
  );
}
