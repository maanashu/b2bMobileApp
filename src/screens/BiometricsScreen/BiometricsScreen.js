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
    if (Platform.OS === "android") {
      const handleAppStateChange = (nextAppState) => {
        if (
          appState.match(/inactive|background/) &&
          nextAppState === "active" &&
          route.name === "BiometricsScreen"
        ) {
          // Run your function here based on the app state
          bioMetricLogin();
        }
        setAppState(nextAppState);
        AppState.addEventListener("change", handleAppStateChange);

        return () => {
          AppState.removeEventListener("change", handleAppStateChange);
        };
      };
    }
  }, [appState]);

  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);

  // Biometrics function
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
          navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [{ name: NAVIGATION.home }],
            })
          );

          // Do something after successful PIN entry
        } else if (resultObject?.error === "User cancellation") {
          BackHandler.exitApp();

          // Handle cancelled biometric prompt
        } else {
          // Handle failed PIN entry
        }
      });
  };
  const createKeys = () => {
    rnBiometrics.createKeys().then((resultObject) => {
      const { publicKey } = resultObject;
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
