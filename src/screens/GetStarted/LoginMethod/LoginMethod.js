import React from "react";
import { View, Image, Platform } from "react-native";
import { blueLogo, faceIdIcon, fingerprintLogin } from "@/assets";
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
      console.log("BIOMETRICS_RESULT--" + JSON.stringify(resultObject));
      const { available, biometryType } = resultObject;

      if (available && biometryType === BiometryTypes.TouchID) {
        console.log("TouchID is supported");
        checkBioMetricKeyExists();
      } else if (available && biometryType === BiometryTypes.FaceID) {
        console.log("FaceID is supported");
        checkBioMetricKeyExists();
      } else if (available && biometryType === BiometryTypes.Biometrics) {
        console.log("Biometrics is supported");
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
  const isLoading = useSelector((state) =>
    isLoadingSelector([TYPES.LOGIN], state)
  );
  const promptBioMetricSignin = () => {
    let epochTimeSeconds = Math.round(new Date().getTime() / 1000).toString();
    let payload = epochTimeSeconds + "some message";
    rnBiometrics
      .createSignature({
        promptMessage: "Sign in",
        payload: payload,
      })
      .then((resultObject) => {
        const { success, signature } = resultObject;

        if (success) {
          dispatch(deviceLogin());
          //  verifySignatureWithServer(signature, payload);
        }
      })
      .catch((error) => console.log("erorr-->>", error));
  };

  const createKeys = () => {
    rnBiometrics.createKeys().then((resultObject) => {
      const { publicKey } = resultObject;
      promptBioMetricSignin();
      // sendPublicKeyToServer(publicKey);
    });
  };

  const deleteKeys = () => {
    rnBiometrics.deleteKeys().then((resultObject) => {
      const { keysDeleted } = resultObject;

      if (keysDeleted) {
        console.log("Successful deletion");
      } else {
        console.log(
          "Unsuccessful deletion because there were no keys to delete"
        );
      }
    });
  };
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
