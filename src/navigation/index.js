import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect } from "react";
import { BackHandler, useColorScheme } from "react-native";
import { useSelector } from "react-redux";
import { AppBottom } from "@/navigation/AppNavigator";
import { getUser } from "@/selectors/UserSelectors";
import { theme } from "@/theme";
import { navigationRef } from "./NavigationRef";
import ReactNativeBiometrics, { BiometryTypes } from "react-native-biometrics";
import { Biometrics } from "@/components";
import Modals from "./Modals";

export function RootNavigator() {
  const scheme = useColorScheme();

  const user = useSelector(getUser);
  // useEffect(() => {
  //   if (user?.isStatus === true) {
  //     // <Biometrics />;
  //     bioMetricLogin();
  //   }

  //   const backHandler = BackHandler.addEventListener(
  //     "hardwareBackPress",
  //     () => true
  //   );
  //   return () => backHandler.remove();
  // }, []);

  // const rnBiometrics = new ReactNativeBiometrics({
  //   allowDeviceCredentials: true,
  // });

  // const bioMetricLogin = () => {
  //   rnBiometrics.isSensorAvailable().then((resultObject) => {
  //     const { available, biometryType } = resultObject;

  //     if (available && biometryType === BiometryTypes.TouchID) {
  //       checkBioMetricKeyExists();
  //     } else if (available && biometryType === BiometryTypes.FaceID) {
  //       checkBioMetricKeyExists();
  //     } else if (available && biometryType === BiometryTypes.Biometrics) {
  //       checkBioMetricKeyExists();
  //     } else {
  //     }
  //   });
  // };
  // const checkBioMetricKeyExists = () => {
  //   rnBiometrics.biometricKeysExist().then((resultObject) => {
  //     const { keysExist } = resultObject;
  //     if (keysExist) {
  //       promptBioMetricSignin();
  //     } else {
  //       createKeys();
  //     }
  //   });
  // };

  // const promptBioMetricSignin = () => {
  //   let epochTimeSeconds = Math.round(new Date().getTime() / 1000).toString();
  //   let payload = epochTimeSeconds + "some message";
  //   rnBiometrics
  //     .createSignature({
  //       promptMessage: "Sign in",
  //       payload: payload,
  //     })
  //     .then((resultObject) => {
  //       const { success, signature } = resultObject;

  //       if (success) {
  //         // dispatch(deviceLogin());
  //         //  verifySignatureWithServer(signature, payload);
  //       }
  //     })
  //     .catch((error) => );
  // };

  // const createKeys = () => {
  //   rnBiometrics.createKeys().then((resultObject) => {
  //     const { publicKey } = resultObject;
  //     promptBioMetricSignin();
  //     // sendPublicKeyToServer(publicKey);
  //   });
  // };

  // const deleteKeys = () => {
  //   rnBiometrics.deleteKeys().then((resultObject) => {
  //     const { keysDeleted } = resultObject;

  //     if (keysDeleted) {
  //
  //     } else {
  //
  //     }
  //   });
  // };

  return (
    <NavigationContainer ref={navigationRef} theme={theme[scheme]}>
      <Modals>
        <AppBottom />
      </Modals>
    </NavigationContainer>
  );
}
