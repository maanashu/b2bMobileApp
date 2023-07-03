import React from "react";
import { hide } from "react-native-bootsplash";
import { enableScreens } from "react-native-screens";
import { Provider, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/store";
import { RootNavigator } from "@/navigation";
import { useEffect } from "react";
import { COLORS, SF, SH, SW } from "./theme";
import { error, Fonts, jbrLogo, success } from "./assets";
import Toast, { BaseToast } from "react-native-toast-message";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import AsyncStorage from "@react-native-async-storage/async-storage";
import messaging from "@react-native-firebase/messaging";
import notifee, {
  AndroidColor,
  AndroidImportance,
  AuthorizationStatus,
  EventType,
} from "@notifee/react-native";
import { Alert } from "react-native";
import { NAVIGATION } from "./constants";
import { navigate } from "./navigation/NavigationRef";

enableScreens();

const toastConfig = {
  success_toast: ({ text1, text2, ...rest }) => (
    <BaseToast
      {...rest}
      style={{
        borderLeftColor: "green",
        zIndex: 999,
        borderLeftColor: "green",
      }}
      contentContainerstyle={{ paddingHorizontal: SW(15) }}
      leadingIcon={success}
      text2Style={{
        fontSize: SF(14),
        color: "green",
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
        borderLeftColor: "red",
      }}
      contentContainerstyle={{ paddingHorizontal: SW(15) }}
      leadingIcon={error}
      text2Style={{
        fontSize: SF(14),
        color: "red",
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
    try {
      requestUserPermission();
      getFCMToken();
      createChannelId();
      messaging().onMessage(onMessageReceived);
      messaging().setBackgroundMessageHandler(onMessageReceived);
    } catch (error) {}
    backgroundNotification();

    return notifee.onForegroundEvent(({ type, detail }) => {
      switch (type) {
        case EventType.DISMISSED:
          break;
        case EventType.PRESS:
          if (detail.notification?.title === "Order Placed!") {
            navigate(NAVIGATION.notificationSetting, { screen: "track" });
          } else if (detail?.notification?.title === "Order Accepted!") {
            navigate(NAVIGATION.notificationSetting, { screen: "track" });
          } else {
            navigate(NAVIGATION.notificationSetting, { screen: "track" });
          }
          break;
      }
    });
  });

  const showAlert = () => {
    Alert.alert(
      "Confirmation",
      "Enable notifications",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: enableNotifications,
        },
      ],
      { cancelable: false }
    );
  };
  const enableNotifications = () => {
    notifee.openNotificationSettings();
  };
  const getFCMToken = async () => {
    const fcmToken = await AsyncStorage.getItem("token");
    if (!fcmToken) {
      try {
        const token = await messaging().getToken();
        await AsyncStorage.setItem("token", token);
        console.log("fcmtoken", token);
      } catch (error) {}
    }
  };

  const createChannelId = async () => {
    notifee
      .createChannel({
        id: "jobr_b2b",
        name: "JOBR B2B",
        importance: AndroidImportance.HIGH,
      })
      .then((channelId) => {});
  };

  async function requestUserPermission() {
    const settings = await notifee.requestPermission();

    if (settings.authorizationStatus >= AuthorizationStatus.AUTHORIZED) {
    } else {
      showAlert();
    }
  }

  function backgroundNotification() {
    return notifee.onBackgroundEvent(async ({ type, detail }) => {
      switch (type) {
        case EventType.DISMISSED:
          break;
        // case EventType.PRESS:
        //   if (detail.notification?.title === "Order Placed!") {
        //     navigate(NAVIGATION.notificationSetting, { screen: "track" });
        //   } else if (detail?.notification?.title === "Order Accepted!") {
        //     navigate(NAVIGATION.notificationSetting, { screen: "track" });
        //   } else {
        //     navigate(NAVIGATION.notificationSetting, { screen: "track" });
        //   }
        //   break;
      }
    });
  }
  function onMessageReceived(message) {
    notifee.displayNotification({
      title: message.notification.title,
      body: message.notification.body,
      android: {
        channelId: "jobr_b2b",
      },
    });
  }

  // useEffect(() => {  //   Orientation.lockToLandscape();  // }, []);

  return (
    <Provider store={store}>
      <PersistGate onBeforeLift={hide} persistor={persistor}>
        <BottomSheetModalProvider>
          <RootNavigator />
          <Toast config={toastConfig} ref={(ref) => Toast.setRef(ref)} />
        </BottomSheetModalProvider>
      </PersistGate>
    </Provider>
  );
}
