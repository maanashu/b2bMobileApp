import React from "react";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { NAVIGATION } from "@/constants";
import {
  AboutBusiness,
  AddCreditCard,
  AddShippingAddress,
  BusinessHome,
  BusinessProducts,
  BusinessProfile,
  Delivery,
  Home,
  NewProducts,
  OnBoarding,
  PaymentMethod,
  ProductInquiry,
  ReviewAndPayment,
  SendInquiry,
  StartOrder,
  TopRankingManufacturers,
} from "@/screens";
import { AuthNavigator } from "./AuthNavigator";

const Stack = createNativeStackNavigator();

export function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={NAVIGATION.home}
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
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
      />
      <Stack.Screen
        component={NewProducts}
        name={NAVIGATION.newProducts}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={TopRankingManufacturers}
        name={NAVIGATION.topRankingManufacturers}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={AboutBusiness}
        name={NAVIGATION.aboutBusiness}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={BusinessHome}
        name={NAVIGATION.businessHome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={BusinessProducts}
        name={NAVIGATION.businessProducts}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={BusinessProfile}
        name={NAVIGATION.businessProfile}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
