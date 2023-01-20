import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  getFocusedRouteNameFromRoute,
  useTheme,
} from "@react-navigation/native";
import React from "react";
import { TabBarIcon } from "@/components";
import { NAVIGATION } from "@/constants";
import { HomeNavigator } from "@/navigation/HomeNavigator";
import { ProfileNavigator } from "@/navigation/ProfileNavigator";
import {
  bottomHome,
  bottomMyJobr,
  bottomOrders,
  bottomProducts,
} from "@/assets";
import { Image } from "react-native";
import { AuthNavigator } from "./AuthNavigator";
import { COLORS } from "@/theme";
import { ProductNavigator } from "./ProductNavigator";

const Tab = createBottomTabNavigator();

export function AppNavigator() {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: ((route) => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? "";
          if (routeName === NAVIGATION.chatting) {
            return { display: "none" };
          }
          return { borderTopWidth: 0 };
        })(route),
      })}
      tabBarOptions={{
        activeTintColor: COLORS.black,
        inactiveTintColor: COLORS.light_grey,
      }}
    >
      <Tab.Screen
        name={NAVIGATION.home}
        component={HomeNavigator}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Image
              color={color}
              source={bottomHome}
              style={{ height: 24, width: 24 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name={NAVIGATION.productInquiry}
        component={ProductNavigator}
        options={{
          headerShown: false,
          tabBarLabel: "Products",
          tabBarIcon: ({ color, size }) => (
            <Image
              resizeMode="contain"
              color={color}
              source={bottomProducts}
              style={{ height: 22, width: 22 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name={NAVIGATION.profile}
        component={ProfileNavigator}
        options={{
          headerShown: false,
          tabBarLabel: "My Jobr",
          tabBarIcon: ({ color, size }) => (
            <Image
              resizeMode="contain"
              color={color}
              source={bottomMyJobr}
              style={{ height: 22, width: 22 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
