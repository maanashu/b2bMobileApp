import React from "react";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { NAVIGATION } from "@/constants";
import {
  Splash,
  Login,
  MobileNumber,
  Verify,
  EnterPin,
  ReEnterPin,
  PersonalInformation,
  AgeVerification,
  CheckAndRequestKYC,
  Register,
  LoginMethod,
} from "@/screens";
import { AppNavigator } from "./AppNavigator";

const Stack = createNativeStackNavigator();

export function AuthNavigator() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        component={Splash}
        name={NAVIGATION.splash}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        component={Login}
        name={NAVIGATION.login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={MobileNumber}
        name={NAVIGATION.mobileNumber}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={Verify}
        name={NAVIGATION.verify}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={EnterPin}
        name={NAVIGATION.enterPin}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={ReEnterPin}
        name={NAVIGATION.reEnterPin}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={PersonalInformation}
        name={NAVIGATION.personalInformation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={LoginMethod}
        name={NAVIGATION.loginMethod}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={Register}
        name={NAVIGATION.register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={CheckAndRequestKYC}
        name={NAVIGATION.checkAndRequestKYC}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={AgeVerification}
        name={NAVIGATION.ageVerification}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
