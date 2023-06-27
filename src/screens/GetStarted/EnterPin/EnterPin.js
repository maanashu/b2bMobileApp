import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import {
  CodeField,
  useBlurOnFulfill,
  useClearByFocusCell,
  Cursor,
} from "react-native-confirmation-code-field";
import { jobrSplash, blueLogo, backArrow } from "@/assets";
import { strings } from "@/localization";
import { NAVIGATION } from "@/constants";
import { SH, TextStyles, COLORS } from "@/theme";
import { goBack, navigate } from "@/navigation/NavigationRef";
import { Button, Spacer, ScreenWrapper } from "@/components";
import { styles } from "@/screens/GetStarted/EnterPin/EnterPin.styles";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "@/selectors/UserSelectors";
import { deviceLogin, login, TYPES } from "@/actions/UserActions";
import { isLoadingSelector } from "@/selectors/StatusSelectors";
import { Loader } from "@/components/Loader";
import { storage } from "@/storage";
import ReactNativeBiometrics, { BiometryTypes } from "react-native-biometrics";
const CELL_COUNT = 4;

export function EnterPin(params) {
  const route = params?.route?.params?.route;
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [prop, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const phoneNum = user?.phone?.phoneNumber;

  const rnBiometrics = new ReactNativeBiometrics({
    allowDeviceCredentials: true,
  });
  console.log("isstatus", user?.isStatus);
  useEffect(() => {
    getStorageData();
  }, []);

  const getStorageData = () => {
    storage.getMapAsync("biometric-data").then((res) => {
      console.log("resss===", res?.phoneNum);
      if (res?.phoneNum === phoneNum) {
        storage.getMapAsync("Biometric-status").then((res) => {
          if (res?.isStatus == true) {
            bioMetricLogin();
          }
        });

        // if (isBiometricEnabled || bioMetricsAvailable) {
        // alert("ok");
        // }
      }
    });
  };

  const bioMetricLogin = () => {
    rnBiometrics.isSensorAvailable().then((resultObject) => {
      const { available, biometryType } = resultObject;
      if (available && biometryType === BiometryTypes.TouchID) {
        checkBioMetricKeyExists();
      } else if (available && biometryType === BiometryTypes.FaceID) {
        checkBioMetricKeyExists();
      } else if (available && biometryType === BiometryTypes.Biometrics) {
        checkBioMetricKeyExists();
      } else {
        // alert('Biometrics not supported');
        setBioMetricsAvailable(false);
      }
    });
  };

  const checkBioMetricKeyExists = () => {
    rnBiometrics.biometricKeysExist().then((resultObject) => {
      const { keysExist } = resultObject;
      if (keysExist) {
        promptBioMetricSignin();
      } else {
        createKeys();
      }
    });
  };

  const promptBioMetricSignin = () => {
    let epochTimeSeconds = Math.round(new Date().getTime() / 1000).toString();
    let payload = epochTimeSeconds + "some message";
    rnBiometrics
      .createSignature({
        promptMessage: "Sign in",
        payload: payload,
      })
      .then((resultObject) => {
        const { success } = resultObject;
        if (success) {
          dispatch(deviceLogin(user?.screenName));
        } else {
        }
      })
      .catch((error) => console.log("eror:", error));
  };

  const createKeys = () =>
    rnBiometrics.createKeys().then(() => promptBioMetricSignin());

  const isLoading = useSelector((state) =>
    isLoadingSelector([TYPES.LOGIN], state)
  );

  const navigationHandler = () => {
    dispatch(
      login(
        value,
        user?.phone?.countryCode,
        user?.phone?.phoneNumber,
        user?.screenName
      )
    );
  };
  return (
    <ScreenWrapper>
      <View style={styles.headerContainer}>
        <View style={styles.displayFlex}>
          <TouchableOpacity onPress={() => goBack()}>
            <Image source={backArrow} style={styles.backArrow} />
          </TouchableOpacity>
          <Text style={styles.setPin}>{strings.auth.enterPin}</Text>
        </View>
      </View>

      <Spacer space={SH(54)} />

      <View style={styles.formContainer}>
        <Text style={styles.enterYourPin}>{strings.auth.enterYourPin}</Text>
        <Spacer space={SH(20)} />

        <CodeField
          ref={ref}
          {...prop}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.containerOtp}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({ index, symbol, isFocused }) => (
            <View
              onLayout={getCellOnLayoutHandler(index)}
              key={index}
              style={styles.cellRoot}
            >
              <Text style={styles.cellText}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            </View>
          )}
        />
      </View>
      <View style={{ flex: 1 }} />

      <Spacer space={SH(20)} />
      <Button
        onPress={navigationHandler}
        title={strings.auth.continue}
        textStyle={styles.text}
        style={styles.loginButton}
      />
      <Spacer space={SH(30)} />

      {isLoading ? <Loader message="Loading data ..." /> : null}
    </ScreenWrapper>
  );
}
