import React, { useEffect, useRef, useState } from "react";
import {
  View,
  useWindowDimensions,
  Image,
  LogBox,
  BackHandler,
  AppState,
  Platform,
} from "react-native";
import { ScreenWrapper } from "@/components";
import { jobrRound } from "@/assets";
const Tab = createMaterialTopTabNavigator();
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NAVIGATION } from "@/constants";
import { getUser } from "@/selectors/UserSelectors";
import { useSelector } from "react-redux";
import ReactNativeBiometrics, { BiometryTypes } from "react-native-biometrics";
import { navigate } from "@/navigation/NavigationRef";
import { CommonActions, useRoute } from "@react-navigation/native";

export function BiometricsScreen({ navigation }) {
  const route = useRoute();
  console.log("Screen name:", route.name);
  const layout = useWindowDimensions();
  const [showScreen, setShowScreen] = useState();

  const user = useSelector(getUser);
  useEffect(() => {
    if (user?.isStatus === true && route.name === "BiometricsScreen") {
      bioMetricLogin();
    }
  }, []);
  const [appState, setAppState] = useState(AppState.currentState);

  useEffect(() => {
    if (Platform.OS===""){
    const handleAppStateChange = (nextAppState) => {
      if (appState.match(/inactive|background/) && nextAppState === "active"&& route.name === "BiometricsScreen") {
        // Run your function here based on the app state
        bioMetricLogin();
      }
      setAppState(nextAppState);
      AppState.addEventListener("change", handleAppStateChange);

    return () => {
      AppState.removeEventListener("change", handleAppStateChange);
    };
    }}

    
  }, [appState]);

  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);

  console.log("user--->", user?.isStatus);

  // Biometrics function
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
        console.log("Keys exist");
        promptBioMetricSignin();
      } else {
        console.log("Keys do not exist or were deleted");
        createKeys();
      }
    });
  };
  // useEffect(() => {
  //   const backAction = () => {
  //     return true;
  //   };
  //   const backHandler = BackHandler.addEventListener(
  //     "hardwareBackPress",
  //     backAction
  //   );

  //   return () => backHandler.remove();
  // }, []);
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
  //         console.log("set true");
  //         setShowScreen(true);
  //         // dispatch(deviceLogin());
  //         //  verifySignatureWithServer(signature, payload);
  //       }
  //     })
  //     .catch((error) => console.log("erorr-->>", error));
  // };

  const promptBioMetricSignin = () => {
    rnBiometrics
      .simplePrompt({
        promptMessage: "Please enter device PIN",
        fallbackOnPasscode: true,
        onPartialSuccess: (enteredPin) => {
          console.log("Entering PIN: ", enteredPin);
        },
      })
      .then((resultObject) => {
        const { success, error, message } = resultObject;
        if (success) {
          console.log("Device unlocked with PIN", success);
          setShowScreen(true);
          // navigate(NAVIGATION.home);
          navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [{ name: NAVIGATION.home }],
            })
          );

          // Do something after successful PIN entry
        } else if (resultObject?.error === "User cancellation") {
          // console.log("User cancelled the biometric prompt");
          // console.log("result: ", resultObject);
          console.log("cacneled");
          BackHandler.exitApp();

          // Handle cancelled biometric prompt
        } else {
          console.log("PIN entry failed: " + error);
          // Handle failed PIN entry
        }
      });
  };
  const createKeys = () => {
    rnBiometrics.createKeys().then((resultObject) => {
      const { publicKey } = resultObject;
      console.log(publicKey);
      promptBioMetricSignin();
      // sendPublicKeyToServer(publicKey);
    });
  };
  //

  // const [appState, setAppState] = useState(AppState.currentState);

  // const handleAppStateChange = (nextAppState) => {
  //   if (appState.match(/inactive|background/) && nextAppState === "active") {
  //     // This block of code will execute when the app is reopened
  //     // Call your function here
  //   }
  //   bioMetricLogin();
  //   setAppState(nextAppState);
  // };

  // useEffect(() => {
  //   const subscription = AppState.addEventListener(
  //     "change",
  //     handleAppStateChange
  //   );
  //   return () => {
  //     subscription.remove();
  //   };
  // }, []);

  // /////////////////////////////////////

  return (
    <ScreenWrapper>
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Image source={jobrRound} />
      </View>
    </ScreenWrapper>
  );
}
