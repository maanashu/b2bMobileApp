import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect } from "react";
import { BackHandler, useColorScheme } from "react-native";
import { useSelector } from "react-redux";
import { AppBottom } from "@/navigation/AppNavigator";
import { AuthNavigator } from "@/navigation/AuthNavigator";
import { getUser } from "@/selectors/UserSelectors";
import { theme } from "@/theme";
import { navigationRef } from "./NavigationRef";
import ReactNativeBiometrics, { BiometryTypes } from "react-native-biometrics";
import { Biometrics } from "@/components";

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
  //     console.log("BIOMETRICS_RESULT--" + JSON.stringify(resultObject));
  //     const { available, biometryType } = resultObject;

  //     if (available && biometryType === BiometryTypes.TouchID) {
  //       console.log("TouchID is supported");
  //       checkBioMetricKeyExists();
  //     } else if (available && biometryType === BiometryTypes.FaceID) {
  //       console.log("FaceID is supported");
  //       checkBioMetricKeyExists();
  //     } else if (available && biometryType === BiometryTypes.Biometrics) {
  //       console.log("Biometrics is supported");
  //       checkBioMetricKeyExists();
  //     } else {
  //       console.log("Biometrics not supported");
  //     }
  //   });
  // };
  // const checkBioMetricKeyExists = () => {
  //   rnBiometrics.biometricKeysExist().then((resultObject) => {
  //     const { keysExist } = resultObject;
  //     if (keysExist) {
  //       console.log("Keys exist");
  //       promptBioMetricSignin();
  //     } else {
  //       console.log("Keys do not exist or were deleted");
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
  //         console.log(signature);
  //         // dispatch(deviceLogin());
  //         //  verifySignatureWithServer(signature, payload);
  //       }
  //     })
  //     .catch((error) => console.log("erorr-->>", error));
  // };

  // const createKeys = () => {
  //   rnBiometrics.createKeys().then((resultObject) => {
  //     const { publicKey } = resultObject;
  //     console.log(publicKey);
  //     promptBioMetricSignin();
  //     // sendPublicKeyToServer(publicKey);
  //   });
  // };

  // const deleteKeys = () => {
  //   rnBiometrics.deleteKeys().then((resultObject) => {
  //     const { keysDeleted } = resultObject;

  //     if (keysDeleted) {
  //       console.log("Successful deletion");
  //     } else {
  //       console.log(
  //         "Unsuccessful deletion because there were no keys to delete"
  //       );
  //     }
  //   });
  // };

  return (
    <NavigationContainer ref={navigationRef} theme={theme[scheme]}>
      {/* {!user ? <AppNavigator /> : <AuthNavigator />} */}
      {/* <AuthNavigator /> */}

      <AppBottom />
    </NavigationContainer>
  );
}
