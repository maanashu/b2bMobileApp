import React from "react";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { NAVIGATION } from "@/constants";
import {
  AddCreditCard,
  AddMoneyToWallet,
  AddShippingAddress,
  Delivery,
  Home,
  PaymentMethod,
  ProductInquiry,
  ReviewAndPayment,
  SendInquiry,
  StartOrder,
} from "@/screens";

const Stack = createNativeStackNavigator();

export function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={NAVIGATION.home}
        component={Home}
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
        component={AddMoneyToWallet}
        name={NAVIGATION.addMoneyToWallet}
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
    </Stack.Navigator>
  );
}
