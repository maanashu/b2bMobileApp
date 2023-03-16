import React from "react";
import { hide } from "react-native-bootsplash";
import { enableScreens } from "react-native-screens";
import { Provider, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/store";
import { RootNavigator } from "@/navigation";
import { useEffect } from "react";
import { COLORS, SF, SH, SW } from "./theme";
import { error, Fonts, success } from "./assets";
import Toast, { BaseToast } from "react-native-toast-message";

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
  }, []);

  // useEffect(() => {  //   Orientation.lockToLandscape();  // }, []);

  return (
    <Provider store={store}>
      <PersistGate onBeforeLift={hide} persistor={persistor}>
        <RootNavigator />
        <Toast config={toastConfig} ref={(ref) => Toast.setRef(ref)} />
      </PersistGate>
    </Provider>
  );
}
