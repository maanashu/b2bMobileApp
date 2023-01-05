import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { useColorScheme } from "react-native";
import { useSelector } from "react-redux";
import { AppNavigator } from "@/navigation/AppNavigator";
import { AuthNavigator } from "@/navigation/AuthNavigator";
import { getUser } from "@/selectors/UserSelectors";
import { theme } from "@/theme";
import { navigationRef } from "./NavigationRef";

export function RootNavigator() {
  const user = useSelector(getUser);
  const scheme = useColorScheme();

  return (
    <NavigationContainer ref={navigationRef} theme={theme[scheme]}>
      {!user ? <AppNavigator /> : <AuthNavigator />}
      {/* <AppNavigator /> */}
    </NavigationContainer>
  );
}
