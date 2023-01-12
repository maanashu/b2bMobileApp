import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "@react-navigation/native";
import React from "react";
import { TabBarIcon } from "@/components";
import { NAVIGATION } from "@/constants";
import { HomeNavigator } from "@/navigation/HomeNavigator";
import { ProfileNavigator } from "@/navigation/ProfileNavigator";
import { bottomHome, bottomMyJobr } from "@/assets";
import { Image } from "react-native";
import { AuthNavigator } from "./AuthNavigator";
import { COLORS } from "@/theme";

const Tab = createBottomTabNavigator();

export function AppNavigator() {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: { borderTopWidth: 0 },

        tabBarIcon: ({ color }) => (
          <TabBarIcon color={color} routeName={route.name} />
        ),
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
