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
        component={AppNavigator}
        name={"HomeScreen"}
        options={{ headerShown: false }}
      />

      {/* <Stack.Screen
        component={ProductInquiry}
        name={NAVIGATION.productInquiry}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={SendInquiry}
        name={NAVIGATION.sendInquiry}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        component={StartOrder}
        name={NAVIGATION.startOrder}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={Delivery}
        name={NAVIGATION.delivery}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={ReviewAndPayment}
        name={NAVIGATION.reviewAndPayment}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={AddShippingAddress}
        name={NAVIGATION.addShippingAddress}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        component={PaymentMethod}
        name={NAVIGATION.paymentMethod}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={AddCreditCard}
        name={NAVIGATION.addCreditCard}
        options={{ headerShown: false }}
      /> */}

      {/* <Stack.Screen
        component={OnBoarding}
        name={NAVIGATION.onboarding}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={Login}
        name={NAVIGATION.login}
        options={{ headerShown: false }}
      /> */}
    </Stack.Navigator>
  );
}
