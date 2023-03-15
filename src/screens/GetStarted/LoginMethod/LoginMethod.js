import React from "react";
import { View, Image, Platform } from "react-native";
import {
  blueLogo,
  faceIdIcon,
  fingerPrint,
  fingerprintLogin,
  Shoes2,
} from "@/assets";
import { COLORS, SH, SW } from "@/theme";
import { Spacer, Button, ScreenWrapper } from "@/components";
import { styles } from "./LoginMethod.styles";
import { deviceLogin, TYPES } from "@/actions/UserActions";
import { useDispatch, useSelector } from "react-redux";
import ReactNativeBiometrics, { BiometryTypes } from "react-native-biometrics";
import { isLoadingSelector } from "@/selectors/StatusSelectors";
import { strings } from "@/localization";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";
import { Loader } from "@/components/Loader";

export function LoginMethod(props) {
  const dispatch = useDispatch();
  const rnBiometrics = new ReactNativeBiometrics({
    allowDeviceCredentials: true,
  });

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
        console.log("Biometrics not supported");
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
          dispatch(deviceLogin());
        }
      })
      .catch((error) => console.log("erorr-->>", error));
  };

  const createKeys = () =>
    rnBiometrics.createKeys().then(() => promptBioMetricSignin());

  const isLoading = useSelector((state) =>
    isLoadingSelector([TYPES.LOGIN], state)
  );

  return (
    <ScreenWrapper>
      <Spacer space={SH(54)} />

      <Image source={blueLogo} style={[styles.alignCenter, styles.logo]} />

      <Spacer space={SH(38)} />
      {Platform.OS === "ios" ? (
        <View style={styles.touchIdView}>
          <Image source={faceIdIcon} style={styles.touchIdStyle} />
        </View>
      ) : (
        <Image
          source={fingerprintLogin}
          style={[styles.alignCenter, styles.facelogo]}
        />
      )}

      <View style={{ flex: 1, padding: SW(20), justifyContent: "flex-end" }}>
        <Button
          pending={isLoading}
          onPress={bioMetricLogin}
          title={strings.login.scanbutton}
        />

        <Spacer space={SH(20)} />
        <Button
          title={strings.login.pinbutton}
          textStyle={{ color: COLORS.black }}
          onPress={() => navigate(NAVIGATION.enterPin)}
          style={{ backgroundColor: COLORS.inputBorder }}
        />
      </View>
      {isLoading ? <Loader message="Loading data ..." /> : null}
    </ScreenWrapper>
  );
}
