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
  Splash,
  StartOrder,
  SubCategories,
  TopRankingManufacturers,
} from "@/screens";
import { ScreenNavigator } from "./ScreenNavigator";
import { strings } from "@/localization";

const Stack = createNativeStackNavigator();

export function NewNavi() {
  return (
    <Stack.Navigator initialRouteName={NAVIGATION.splash}>
      <Stack.Screen
        component={Splash}
        name={NAVIGATION.splash}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
