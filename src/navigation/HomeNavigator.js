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
  Categories,
  Chatting,
  Delivery,
  FaceIdPin,
  Home,
  MakeAnOffer,
  MyPurchase,
  NearMeOptions,
  NewProducts,
  OnBoarding,
  PaymentMethod,
  ProductInquiry,
  ReviewAndPayment,
  SendAnOffer,
  SendInquiry,
  StartOrder,
  TopRankingManufacturers,
} from "@/screens";
import { ScreenNavigator } from "./ScreenNavigator";
import { strings } from "@/localization";

const Stack = createNativeStackNavigator();

export function HomeNavigator() {
  return (
    <Stack.Navigator initialRouteName={NAVIGATION.onboarding}>
      <Stack.Screen
        component={OnBoarding}
        name={NAVIGATION.onboarding}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={Categories}
        name={NAVIGATION.categories}
        options={{ headerShown: false }}
      />
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
      <Stack.Screen
        component={Chatting}
        name={NAVIGATION.chatting}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={MakeAnOffer}
        name={NAVIGATION.makeAnOffer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={SendAnOffer}
        name={NAVIGATION.sendAnOffer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={NearMeOptions}
        name={NAVIGATION.nearMeOptions}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={MyPurchase}
        name={NAVIGATION.myPurchase}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
