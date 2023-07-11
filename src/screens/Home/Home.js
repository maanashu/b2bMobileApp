import React, { useContext, useEffect } from "react";
import { Text, View, useWindowDimensions, BackHandler } from "react-native";
import { ScreenWrapper } from "@/components";
import { COLORS } from "@/theme/Colors";
import { SF, SW } from "@/theme/ScalerDimensions";
import { TabBar } from "react-native-tab-view";
import { Business, NearMe, Products } from "@/screens";
import { styles } from "./Home.styles";
import { Fonts } from "@/assets";
const Tab = createMaterialTopTabNavigator();
import { HomeHeader } from "@/components/HomeHeader";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NAVIGATION } from "@/constants";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "@/selectors/UserSelectors";
import { navigate } from "@/navigation/NavigationRef";
import { previousScreen } from "@/actions/GlobalActions";
import { getWalletBalance } from "@/actions/WalletActions";
import ModalsContext from "@/context/ModalsContext";
import { storage } from "@/storage";

export function Home() {
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  const { openBioMetricSetupModal } = useContext(ModalsContext).biometric;
  const phoneNum = user?.phone?.phoneNumber;
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
  const userLocation = user?.savedAddress
    ? `${user?.savedAddress?.state}, ${user?.savedAddress?.country}`
    : "Add Address";
  const loginFunction = () => {
    dispatch(previousScreen(NAVIGATION.home));
    navigate(NAVIGATION.splash);
  };
  // useEffect(() => {
  //   dispatch(getWalletBalance());
  //   if (user?.user?.payload?.token) {
  //     if (!user?.user?.payload?.user_profiles?.is_biometric) {
  //       openBioMetricSetupModal();
  //     }
  //   }
  // }, [user?.user]);
  useEffect(() => {
    getStorageData();
  }, [user?.user]);

  const getStorageData = () => {
    storage.getMapAsync("biometric-data").then((res) => {
      if (user?.user) {
        if (res?.phoneNum != phoneNum) {
          openBioMetricSetupModal();
        }
      }
    });
  };
  const handleCoinPress = () => {
    if (user?.user?.payload?.token) {
      navigate(NAVIGATION.jbrWallet);
    } else {
      navigate(NAVIGATION.splash);
    }
  };
  return (
    <ScreenWrapper>
      <HomeHeader
        userLocation={userLocation}
        onPress={() =>
          !user?.user?.payload?.token
            ? loginFunction()
            : navigate(NAVIGATION.selectAddress)
        }
        fullAddress={user?.savedAddress?.custom_address}
        onCoinPress={handleCoinPress}
      />
      <View style={{ flex: 1 }}>
        <Tab.Navigator
          tabBar={(props) => renderTabBar(props)}
          swipeEnabled={false}
        >
          <Tab.Screen name={NAVIGATION.products} component={Products} />
          <Tab.Screen name={"Services"} component={Business} />
          {user?.user?.payload?.token && (
            <Tab.Screen name={NAVIGATION.nearMe} component={NearMe} />
          )}
        </Tab.Navigator>
      </View>
    </ScreenWrapper>
  );
}
