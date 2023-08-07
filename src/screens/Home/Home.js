import React, { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";
import { LoginModal, ScreenWrapper } from "@/components";
import { COLORS } from "@/theme/Colors";
import { SF, SW } from "@/theme/ScalerDimensions";
import { TabBar } from "react-native-tab-view";
import { Business, NearMe, Products, Services } from "@/screens";
import { styles } from "./Home.styles";
import { Fonts } from "@/assets";
const Tab = createMaterialTopTabNavigator();
import { HomeHeader } from "@/components/HomeHeader";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NAVIGATION } from "@/constants";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "@/selectors/UserSelectors";
import { navigate } from "@/navigation/NavigationRef";
import ModalsContext from "@/context/ModalsContext";
import { storage } from "@/storage";

export function Home() {
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  const { openBioMetricSetupModal } = useContext(ModalsContext).biometric;
  const [openModal, setOpenModal] = useState(false);
  const phoneNum = user?.phone?.phoneNumber;

  const currentLocation = user?.user?.payload?.user_profiles?.current_address;
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

  const userLocation = () => {
    if (user?.user?.payload?.token) {
      if (user?.savedAddress) {
        return `${user?.savedAddress?.state}, ${user?.savedAddress?.country}`;
      } else {
        return `${user?.user?.payload?.user_profiles?.current_address?.state}, ${user?.user?.payload?.user_profiles?.current_address?.country}`;
      }
    } else {
      return "Add Address";
    }
  };

  const fl = () => {
    if (user?.user?.payload?.token) {
      if (user?.savedAddress) {
        return user?.savedAddress?.custom_address;
      } else {
        return `${currentLocation?.street_address}, ${currentLocation?.city}, ${currentLocation?.state} ${currentLocation?.zipcode}`;
      }
    } else {
      return " ";
    }
  };
  const loginFunction = () => {
    // dispatch(previousScreen(NAVIGATION.home));
    // navigate(NAVIGATION.splash);
    setOpenModal(true);
  };

  const getScreen = () => {
    if (!user?.user?.payload?.token) {
      return 0;
    } else if (user?.getUserProfile?.user_profiles?.wallet_steps === 0) {
      return 3;
    } else if (user?.getUserProfile?.user_profiles?.wallet_steps === 1) {
      return 4;
    } else if (user?.getUserProfile?.user_profiles?.wallet_steps === 1.1) {
      return 5;
    } else if (user?.getUserProfile?.user_profiles?.wallet_steps === 4) {
      return 6;
    }
  };
  const screen = getScreen();
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
    const shouldOpenModal =
      !user?.user?.payload?.token || [3, 4, 5, 6].includes(screen);
    if (shouldOpenModal) {
      setOpenModal(true);
    } else {
      navigate(NAVIGATION.jbrWallet);
    }
  };
  return (
    <ScreenWrapper>
      <HomeHeader
        userLocation={userLocation()}
        // onPress={() =>
        //   !user?.user?.payload?.token
        //     ? loginFunction()
        //     : navigate(NAVIGATION.selectAddress)
        // }
        fullAddress={fl()}
        onCoinPress={handleCoinPress}
      />
      <View style={{ flex: 1 }}>
        <Tab.Navigator
          tabBar={(props) => renderTabBar(props)}
          swipeEnabled={false}
        >
          <Tab.Screen name={NAVIGATION.products} component={Products} />
          <Tab.Screen name={"Services"} component={Services} />
          {user?.user?.payload?.token && (
            <Tab.Screen name={NAVIGATION.nearMe} component={NearMe} />
          )}
        </Tab.Navigator>
      </View>
      <View>
        <LoginModal
          isVisible={openModal}
          closeModal={setOpenModal}
          setScreen={screen}
        />
      </View>
    </ScreenWrapper>
  );
}
