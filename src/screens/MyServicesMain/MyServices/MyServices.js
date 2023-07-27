import React, { useEffect } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { ScrollView, View, Text, BackHandler } from "react-native";
import { NameHeaderCoins, ScreenWrapper, Spacer } from "@/components";
import { Search } from "@/components/Search";
import { Fonts } from "@/assets";
import { strings } from "@/localization";
import { COLORS, SH, SW } from "@/theme";
import { goBack, navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";
import { Pending } from "@/screens/MyServicesMain/Pending/Pending";
import { Processing } from "@/screens/MyServicesMain/Processing/Processing";
import { Completed } from "@/screens/MyServicesMain/Completed/Completed";
import { Refund } from "@/screens/MyServicesMain//Refund/Refund";
import { Cancelled } from "@/screens/MyServicesMain//Cancelled/Cancelled";

const Tab = createMaterialTopTabNavigator();

const ScrollableTabBar = (props) => {
  const { state, navigation } = props;
  useEffect(() => {
    const handleBackButton = () => {
      navigation.navigate(NAVIGATION.home);

      return true;
    };

    BackHandler.addEventListener("hardwareBackPress", handleBackButton);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackButton);
    };
  }, [navigation]);
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      style={{ flexGrow: 0.01 }}
    >
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: SW(15),
          height: 50,
        }}
      >
        {state.routes.map((route, index) => {
          const label = route.name;
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <View
              key={route.key}
              style={{
                paddingHorizontal: SW(15),
                backgroundColor: isFocused
                  ? COLORS.primary
                  : COLORS.placeHolder,
                height: SH(30),
                borderRadius: SW(20),
                marginHorizontal: SW(5),
                alignItems: "center",
                justifyContent: "center",
                marginTop: SH(20),
              }}
            >
              <Text
                onPress={onPress}
                style={{ color: isFocused ? COLORS.white : COLORS.darkGrey }}
              >
                {label}
              </Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export function MyServices() {
  return (
    <>
      <ScreenWrapper>
        <NameHeaderCoins
          backRequired
          title={strings.myServices.myServices}
          onPress={() => navigate(NAVIGATION.home)}
        />
        <Spacer space={SH(5)} />
        <Search
          placeholder={strings.business.searchHere}
          styling={{ fontFamily: Fonts.Regular }}
        />

        <Tab.Navigator tabBar={(props) => <ScrollableTabBar {...props} />}>
          <Tab.Screen name="Pending" component={Pending} />
          <Tab.Screen name="Processing" component={Processing} />
          <Tab.Screen name="Completed" component={Completed} />
          <Tab.Screen name="Refund" component={Refund} />
          <Tab.Screen name="Cancelled" component={Cancelled} />
        </Tab.Navigator>
      </ScreenWrapper>
    </>
  );
}
