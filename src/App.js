import React from "react";
import { hide } from "react-native-bootsplash";
import { enableScreens } from "react-native-screens";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/store";
import { RootNavigator } from "@/navigation";
import { useEffect } from "react";
import { COLORS, SF, SH, SW } from "./theme";
import { error, Fonts, success } from "./assets";
import Toast, { BaseToast } from "react-native-toast-message";
import ReactNativeBiometrics, { BiometryTypes } from "react-native-biometrics";

enableScreens();

const toastConfig = {
  success_toast: ({ text1, text2, ...rest }) => (
    <BaseToast
      {...rest}
      style={{
        borderLeftColor: COLORS.green,
        zIndex: 999,
        borderLeftColor: COLORS.green,
      }}
      contentContainerstyle={{ paddingHorizontal: SW(15) }}
      leadingIcon={success}
      text2Style={{
        fontSize: SF(14),
        color: COLORS.green,
        fontFamily: Fonts.SemiBold,
      }}
      text1={text1}
      text2={text2}
      trailingIconStyle={{
        height: SH(15),
        aspectRatio: 1,
        marginRight: SW(16),
      }}
      leadingIconStyle={{ height: SH(26), aspectRatio: 1 }}
      onTrailingIconpress={() => Toast.hide()}
      text2NumberOfLines={2}
    />
  ),
  error_toast: ({ text1, text2, ...rest }) => (
    <BaseToast
      {...rest}
      style={{
        borderLeftColor: COLORS.pinklight,
        zIndex: 999,
        borderLeftColor: COLORS.black,
      }}
      contentContainerstyle={{ paddingHorizontal: SW(15) }}
      leadingIcon={error}
      text2Style={{
        fontSize: SF(14),
        color: COLORS.black,
        fontFamily: Fonts.SemiBold,
      }}
      text1={text1}
      text2={text2}
      trailingIconStyle={{
        height: SH(15),
        aspectRatio: 1,
        marginRight: SW(16),
      }}
      leadingIconStyle={{ height: SH(26), aspectRatio: 1 }}
      onTrailingIconpress={() => Toast.hide()}
      text2NumberOfLines={2}
    />
  ),
};
export function App() {
  useEffect(() => {
    // return async () => await AsyncStorage.removeItem("acceptOrder");

    bioMetricLogin();
  }, []); // useEffect(() => {  //   Orientation.lockToLandscape();  // }, []);

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
          console.log(signature);
          dispatch(deviceLogin());
          //  verifySignatureWithServer(signature, payload);
        }
      })
      .catch((error) => console.log("erorr-->>", error));
  };

  const createKeys = () => {
    rnBiometrics.createKeys().then((resultObject) => {
      const { publicKey } = resultObject;
      console.log(publicKey);
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
    <Provider store={store}>
      <PersistGate onBeforeLift={hide} persistor={persistor}>
        <RootNavigator />
        <Toast config={toastConfig} ref={(ref) => Toast.setRef(ref)} />
      </PersistGate>
    </Provider>
  );
}
