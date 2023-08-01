import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import {
  CodeField,
  useBlurOnFulfill,
  useClearByFocusCell,
  Cursor,
} from "react-native-confirmation-code-field";
import { backArrow, blueLogo } from "@/assets";
import { strings } from "@/localization";
import { COLORS, SH, ShadowStyles, TextStyles } from "@/theme";
import {
  Button,
  Spacer,
  ScreenWrapper,
  TextField,
  NameHeader,
} from "@/components";
import { styles } from "./Login.styles";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "@/selectors/UserSelectors";
import { deviceLogin, login } from "@/actions/UserActions";
import { isLoadingSelector } from "@/selectors/StatusSelectors";
import { Loader } from "@/components/Loader";
import { storage } from "@/storage";
import ReactNativeBiometrics, { BiometryTypes } from "react-native-biometrics";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { TYPES } from "@/Types/Types";
import CustomToast from "@/components/CustomToast";
import { goBack } from "@/navigation/NavigationRef";
const CELL_COUNT = 4;

export function Login({
  goBackScreen,
  handleScreenChange,
  disableModal,
  routeData,
  ...params
}) {
  const route = params?.route?.params?.route;
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [prop, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("");

  const showToast = (message, type, autoHideDuration) => {
    setToastVisible(true);
    setToastMessage(message);
    setToastType(type);

    setTimeout(() => {
      setToastVisible(false);
    }, autoHideDuration);
  };
  const hideToast = () => {
    setToastVisible(false);
  };
  const phoneNum = user?.phone?.phoneNumber;

  const rnBiometrics = new ReactNativeBiometrics({
    allowDeviceCredentials: true,
  });
  useEffect(() => {
    getStorageData();
  }, []);

  const getStorageData = () => {
    storage.getMapAsync("biometric-data").then((res) => {
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
          dispatch(deviceLogin(user?.screenName))
            .then(() => disableModal())
            .catch(() => {});
        }
      })
      .catch(() => {});
  };

  const createKeys = () =>
    rnBiometrics.createKeys().then(() => promptBioMetricSignin());

  const isLoading = useSelector((state) =>
    isLoadingSelector([TYPES.LOGIN], state)
  );

  const navigationHandler = async () => {
    if (value?.length == 4) {
      const fcmtoken = await AsyncStorage.getItem("token");
      dispatch(
        login(
          value,
          user?.phone?.countryCode,
          user?.phone?.phoneNumber,
          user?.screenName,
          fcmtoken
        )
      )
        .then(() => disableModal())
        .catch((error) => showToast(error?.msg, "error", 2000));
    } else {
      showToast("Enter valid pin", "error", 2000);
    }
  };
  return (
    <ScreenWrapper>
      <NameHeader
        back
        backNavi={() => handleScreenChange(1)}
        title={strings?.login?.enterPin}
      />

      <Spacer space={SH(54)} />
      <Image
        source={blueLogo}
        style={[styles.alignCenter, styles.logo]}
        resizeMode="contain"
      />

      <View style={styles.formContainer}>
        <Text style={[TextStyles.enterPin]}>{strings.auth.enterPin}</Text>
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
      <TouchableOpacity
        onPress={() => handleScreenChange(1, { key: "forgot" })}
      >
        <Text
          style={[
            TextStyles.subtext,
            styles.alignCenter,
            { color: COLORS.text },
          ]}
        >
          {strings.auth.forgotPin}
        </Text>
      </TouchableOpacity>
      <Spacer space={SH(20)} />
      <Button
        onPress={navigationHandler}
        title={strings.login.button}
        textStyle={styles.text}
        style={styles.loginButton}
      />
      <Spacer space={SH(30)} />
      <CustomToast
        visible={toastVisible}
        message={toastMessage}
        type={toastType}
        autoHideDuration={2000}
        onHide={hideToast}
      />
      {isLoading ? <Loader message="Logging in ..." /> : null}
    </ScreenWrapper>
  );
}
