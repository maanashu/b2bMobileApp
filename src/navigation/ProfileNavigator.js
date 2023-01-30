import React from "react";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { NAVIGATION } from "@/constants";
import {
  AboutUs,
  AddCategories,
  AddCoupon,
  AddressDetails,
  Addresses,
  AddShippingLocation,
  Brands,
  BrandsProduct,
  BusinessCards,
  CompanyInfo,
  ContactUs,
  CookiesPolicy,
  CurrentCoupons,
  FaceIdPin,
  FavouriteList,
  Inquiries,
  JbrWallet,
  Manufacturers,
  MyCatalogue,
  MyOrders,
  MyPurchase,
  NearMe,
  NotificationSetting,
  PastCoupons,
  PrivacyPolicy,
  Profile,
  QrCode,
  SelectCity,
  SelectCountry,
  SelectedPreferance,
  SelectState,
  Settings,
  ShipTo,
  TellAboutBusiness,
  TermsConditions,
  TransactionHistory,
  UserInformation,
} from "@/screens";

const Stack = createNativeStackNavigator();

export function ProfileNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={NAVIGATION.profile}
        component={Profile}
        options={{ headerLargeTitle: false, headerShown: false }}
      />
      <Stack.Screen
        name={NAVIGATION.userInformation}
        component={UserInformation}
        options={{ headerLargeTitle: false, headerShown: false }}
      />
      <Stack.Screen
        name={NAVIGATION.qrCode}
        component={QrCode}
        options={{ headerLargeTitle: false, headerShown: false }}
      />
      <Stack.Screen
        name={NAVIGATION.companyInfo}
        component={CompanyInfo}
        options={{ headerLargeTitle: false, headerShown: false }}
      />
      <Stack.Screen
        name={NAVIGATION.settings}
        component={Settings}
        options={{ headerLargeTitle: false, headerShown: false }}
      />
      <Stack.Screen
        name={NAVIGATION.shipTo}
        component={ShipTo}
        options={{ headerLargeTitle: false, headerShown: false }}
      />
      <Stack.Screen
        name={NAVIGATION.addShippingLocation}
        component={AddShippingLocation}
        options={{ headerLargeTitle: false, headerShown: false }}
      />
      <Stack.Screen
        name={NAVIGATION.selectCountry}
        component={SelectCountry}
        options={{ headerLargeTitle: false, headerShown: false }}
      />
      <Stack.Screen
        name={NAVIGATION.selectState}
        component={SelectState}
        options={{ headerLargeTitle: false, headerShown: false }}
      />
      <Stack.Screen
        name={NAVIGATION.selectCity}
        component={SelectCity}
        options={{ headerLargeTitle: false, headerShown: false }}
      />
      <Stack.Screen
        name={NAVIGATION.notificationSetting}
        component={NotificationSetting}
        options={{ headerLargeTitle: false, headerShown: false }}
      />
      <Stack.Screen
        name={NAVIGATION.aboutUs}
        component={AboutUs}
        options={{ headerLargeTitle: false, headerShown: false }}
      />
      <Stack.Screen
        name={NAVIGATION.contactUs}
        component={ContactUs}
        options={{ headerLargeTitle: false, headerShown: false }}
      />
      <Stack.Screen
        name={NAVIGATION.privacyPolicy}
        component={PrivacyPolicy}
        options={{ headerLargeTitle: false, headerShown: false }}
      />
      <Stack.Screen
        name={NAVIGATION.cookiesPolicy}
        component={CookiesPolicy}
        options={{ headerLargeTitle: false, headerShown: false }}
      />
      <Stack.Screen
        name={NAVIGATION.termsConditions}
        component={TermsConditions}
        options={{ headerLargeTitle: false, headerShown: false }}
      />
      <Stack.Screen
        component={MyCatalogue}
        name={NAVIGATION.myCatalogue}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={AddCoupon}
        name={NAVIGATION.addCoupon}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={CurrentCoupons}
        name={NAVIGATION.currentCoupons}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={PastCoupons}
        name={NAVIGATION.pastCoupons}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={FaceIdPin}
        name={NAVIGATION.FaceIdPin}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={JbrWallet}
        name={NAVIGATION.jbrWallet}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={TransactionHistory}
        name={NAVIGATION.transactionHistory}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={Brands}
        name={NAVIGATION.brands}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={BrandsProduct}
        name={NAVIGATION.brandsProduct}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={Manufacturers}
        name={NAVIGATION.manufacturers}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={BusinessCards}
        name={NAVIGATION.businessCards}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={SelectedPreferance}
        name={NAVIGATION.selectedPreferance}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={TellAboutBusiness}
        name={NAVIGATION.tellAboutBusiness}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={AddCategories}
        name={NAVIGATION.addCategories}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={Addresses}
        name={NAVIGATION.addresses}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={AddressDetails}
        name={NAVIGATION.addressDetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={FavouriteList}
        name={NAVIGATION.favouriteList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={Inquiries}
        name={NAVIGATION.inquiries}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={NearMe}
        name={NAVIGATION.nearMe}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={MyPurchase}
        name={NAVIGATION.myPurchase}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={MyOrders}
        name={NAVIGATION.myOrders}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
