import React, { useEffect } from "react";
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
import { useSelector } from "react-redux";
import { getUser } from "@/selectors/UserSelectors";

export function Home() {
  const layout = useWindowDimensions();
  const user = useSelector(getUser);

  // useEffect(() => {
  //   const backAction = () => {
  //     // Exit the app if the user is on the home screen
  //     BackHandler.exitApp();
  //   };

  //   const backHandler = BackHandler.addEventListener(
  //     "hardwareBackPress",
  //     backAction
  //   );

  //   return () => backHandler.remove();
  // }, []);

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
          {user?.user?.payload?.token && (
            <Tab.Screen name={NAVIGATION.nearMe} component={NearMe} />
          )}
        </Tab.Navigator>
      </View>
    </ScreenWrapper>
  );
}
