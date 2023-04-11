import React, { useEffect, useState } from "react";
import { Text, View, useWindowDimensions, BackHandler } from "react-native";
import { ScreenWrapper } from "@/components";
import { COLORS } from "@/theme/Colors";
import { SF, SH, SW } from "@/theme/ScalerDimensions";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { Business, NearMe, Products } from "@/screens";
import { styles } from "./Home.styles";
import { Fonts } from "@/assets";
const Tab = createMaterialTopTabNavigator();
import { HomeHeader } from "@/components/HomeHeader";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NAVIGATION } from "@/constants";
import { getUser } from "@/selectors/UserSelectors";
import { useSelector } from "react-redux";
import ReactNativeBiometrics, {
  Biometrics,
  BiometryTypes,
} from "react-native-biometrics";

export function Home() {
  const layout = useWindowDimensions();
  const [showScreen, setShowScreen] = useState();

  const user = useSelector(getUser);
  // useEffect(() => {
  //   if (user?.isStatus === true) {
  //     // <Biometrics />;
  //     bioMetricLogin();
  //   }
  // }, []);

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
        const { success, error } = resultObject;
        if (success) {
          console.log("Device unlocked with PIN");
          setShowScreen(true);
          // Do something after successful PIN entry
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

  // /////////////////////////////////////

  const [routes] = React.useState([
    { key: "products", title: "Products" },
    { key: "business", title: "Services" },
    { key: "nearme", title: "Near me" },
  ]);

  const FirstRoute = () => <Products />;
  const SecondRoute = () => <Business />;
  const ThirdRoute = () => <NearMe />;

  const renderTabBar = (props) => {
    return (
      <TabBar
        contentContainerStyle={{
          paddingHorizontal: SW(40),
          justifyContent: "center",
        }}
        {...props}
        renderLabel={({ focused, route }) => {
          return (
            <View
              style={[
                styles.tabButtonView,
                {
                  borderColor: focused ? COLORS.primary : COLORS.light_border,
                },
                {
                  backgroundColor: focused
                    ? COLORS.primary
                    : COLORS.light_border,
                },
              ]}
            >
              <Text
                style={{
                  color: focused ? COLORS.white : COLORS.text,
                  textAlignVertical: "center",
                  fontFamily: focused ? Fonts.SemiBold : Fonts.Regular,
                  fontSize: SF(12),
                }}
              >
                {route.name}
              </Text>
            </View>
          );
        }}
        indicatorStyle={{ backgroundColor: COLORS.white }}
        style={{
          backgroundColor: COLORS.white,
          marginBottom: 1,
        }}
        pressColor={COLORS.white}
        tabStyle={{ width: "auto" }}
      />
    );
  };

  return (
    <ScreenWrapper>
      <HomeHeader />
      <View style={{ flex: 1 }}>
        <Tab.Navigator
          tabBar={(props) => renderTabBar(props)}
          swipeEnabled={false}
        >
          <Tab.Screen name={NAVIGATION.products} component={Products} />
          <Tab.Screen name={"Services"} component={Business} />
          <Tab.Screen name={NAVIGATION.nearMe} component={NearMe} />
        </Tab.Navigator>
      </View>
    </ScreenWrapper>
  );
}
