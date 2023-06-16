import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  getFocusedRouteNameFromRoute,
  useIsFocused,
  useTheme,
} from "@react-navigation/native";
import React, { useEffect } from "react";
import { NAVIGATION } from "@/constants";
import {
  bottomchat,
  bottomProducts,
  Fonts,
  jobrBottomIcon,
  ordersIcon,
  ProfileUser,
} from "@/assets";
import { Image, Platform, Text } from "react-native";
import { COLORS, SF, SH, ShadowStyles, SW } from "@/theme";
import {
  AboutBusiness,
  AboutUs,
  AddCategories,
  AddCoupon,
  AddCreditCard,
  AddressDetails,
  Addresses,
  AddShippingAddress,
  AddShippingLocation,
  AgeVerification,
  BiometricsScreen,
  Brands,
  BrandsProduct,
  BrandsSellers,
  BusinessCards,
  BusinessHome,
  BusinessKyc,
  BusinessProducts,
  BusinessProfile,
  BusinessRegistration,
  Chatting,
  CheckAndRequestKYC,
  Checkout,
  CompanyInfo,
  ConfirmOrder,
  ConnectBank,
  ContactUs,
  CookiesPolicy,
  CurrentCoupons,
  Delivery,
  EnterPin,
  FaceIdPin,
  Faq,
  FaqVerified,
  FavouriteList,
  FavouritesProduct,
  FavouritesSeller,
  HelpCenter,
  HelpWithOrders,
  Home,
  Inquiries,
  JbrWallet,
  LoginMethod,
  MakeAnOffer,
  Manufacturers,
  Messages,
  MobileNumber,
  MyCatalogue,
  MyOrders,
  MyPurchase,
  NearMe,
  NearMeOptions,
  NeedMoreHelp,
  NewProducts,
  NotificationSetting,
  NoWalletScreen,
  OrderedStatus,
  Orders,
  PastCoupons,
  PastOrders,
  PaymentMethod,
  PersonalInformation,
  PrivacyPolicy,
  ProductInquiry,
  ProductsBySeller,
  Profile,
  QrCode,
  RateExperience,
  RecomendedWholesalers,
  ReEnterPin,
  Register,
  ReviewAndPayment,
  SearchPlaces,
  SelectAddress,
  SelectCity,
  SelectCountry,
  SelectedPreferance,
  SelectState,
  SendAnOffer,
  SendInquiry,
  Settings,
  ShipTo,
  Splash,
  StartOrder,
  SubCategories,
  SupportDetails,
  SupportRequest,
  TellAboutBusiness,
  TermsConditions,
  TopRankingManufacturers,
  TrackOrder,
  TrackPlacedOrder,
  TransactionHistory,
  UserInformation,
  Verify,
} from "@/screens";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { AuthNavigator } from "./AuthNavigator";
import { useSelector } from "react-redux";
import { getUser } from "@/selectors/UserSelectors";

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

export function AppNavigator() {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: ((route) => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? "";

          return {
            borderTopWidth: 0,
            height: Platform.OS == "ios" ? SH(70) : SH(60),
            paddingBottom: Platform.OS == "ios" ? SH(20) : SH(15),
            ...ShadowStyles.shadow4,
            backgroundColor: COLORS.white,
            marginLeft: SH(-4.5),
          };
        })(route),
      })}
    >
      <Tab.Screen
        name={NAVIGATION.home}
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused, color, size }) => (
            <Text
              style={{
                color: focused ? COLORS.darkGrey : COLORS.light_grey,
                fontFamily: Fonts.MaisonMono,
                fontSize: SF(10),
                marginTop: SH(-5),
              }}
            >
              {"Home"}
            </Text>
          ),
          tabBarIcon: ({ color, size, focused }) => (
            <Image
              color={color}
              source={jobrBottomIcon}
              resizeMode="contain"
              style={{
                height: SW(15),
                width: SW(15),
                tintColor: focused ? COLORS.primary : COLORS.light_grey,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name={NAVIGATION.newProducts}
        component={NewProducts}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused, color, size }) => (
            <Text
              style={{
                color: focused ? COLORS.darkGrey : COLORS.light_grey,
                fontFamily: Fonts.MaisonMono,
                marginTop: SH(-5),
                fontSize: SF(10),
              }}
            >
              {"Products"}
            </Text>
          ),
          tabBarIcon: ({ color, size, focused }) => (
            <Image
              resizeMode="contain"
              color={color}
              source={bottomProducts}
              style={{
                height: SH(24),
                width: SW(24),
                tintColor: focused && COLORS.primary,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name={NAVIGATION.messages}
        component={Messages}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused, color, size }) => (
            <Text
              style={{
                color: focused ? COLORS.darkGrey : COLORS.light_grey,
                fontFamily: Fonts.MaisonMono,
                marginTop: SH(-5),
                fontSize: SF(10),
              }}
            >
              {"Messages"}
            </Text>
          ),
          tabBarIcon: ({ color, size, focused }) => (
            <Image
              resizeMode="contain"
              color={color}
              source={bottomchat}
              style={{
                height: SH(25),
                width: SW(25),
                tintColor: focused && COLORS.primary,
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name={NAVIGATION.orders}
        component={Orders}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused, color, size }) => (
            <Text
              style={{
                color: focused ? COLORS.darkGrey : COLORS.light_grey,
                fontFamily: Fonts.MaisonMono,
                marginTop: SH(-5),
                fontSize: SF(10),
              }}
            >
              {"Orders"}
            </Text>
          ),
          tabBarIcon: ({ color, size, focused }) => (
            <Image
              resizeMode="contain"
              color={color}
              source={ordersIcon}
              style={{
                height: SH(19),
                width: SW(19),
                tintColor: focused && COLORS.primary,
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name={NAVIGATION.profile}
        component={Profile}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused, color, size }) => (
            <Text
              style={{
                color: focused ? COLORS.darkGrey : COLORS.light_grey,
                fontFamily: Fonts.MaisonMono,
                marginTop: SH(-5),
                fontSize: SF(10),
              }}
            >
              {"My Jobr"}
            </Text>
          ),
          tabBarIcon: ({ color, size, focused }) => (
            <Image
              resizeMode="contain"
              color={color}
              source={ProfileUser}
              style={{
                height: SH(22),
                width: SW(22),
                tintColor: focused && COLORS.primary,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export function AppBottom() {
  const isFocused = useIsFocused();
  const user = useSelector(getUser);

  useEffect(() => {}, [isFocused]);
  return (
    <Stack.Navigator
      initialRouteName={
        user?.isStatus === true ? NAVIGATION.biometricsScreen : NAVIGATION.home
      }
    >
      <Stack.Screen
        name={NAVIGATION.home}
        component={AppNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={NAVIGATION.subCategories}
        component={SubCategories}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={NAVIGATION.biometricsScreen}
        component={BiometricsScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={NAVIGATION.settings}
        component={Settings}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={NAVIGATION.helpCenter}
        component={HelpCenter}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        component={SupportRequest}
        name={NAVIGATION.supportRequest}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={PastOrders}
        name={NAVIGATION.pastOrders}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={HelpWithOrders}
        name={NAVIGATION.helpWithOrders}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={NeedMoreHelp}
        name={NAVIGATION.needMoreHelp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={Faq}
        name={NAVIGATION.faq}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={FaqVerified}
        name={NAVIGATION.faqVerified}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={SupportDetails}
        name={NAVIGATION.supportDetails}
        options={{ headerShown: false }}
      />
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
        component={ConfirmOrder}
        name={NAVIGATION.confirmOrder}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={Checkout}
        name={NAVIGATION.checkout}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={TrackOrder}
        name={NAVIGATION.trackOrder}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={RateExperience}
        name={NAVIGATION.rateExperience}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={SearchPlaces}
        name={NAVIGATION.searchPlaces}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={TrackPlacedOrder}
        name={NAVIGATION.trackPlacedOrder}
        options={{ headerShown: false }}
      />

      {/* Home navigator start */}
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
        component={BrandsSellers}
        name={NAVIGATION.brandsSellers}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={RecomendedWholesalers}
        name={NAVIGATION.recomendedWholesalers}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={ProductsBySeller}
        name={NAVIGATION.productsBySeller}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={OrderedStatus}
        name={NAVIGATION.orderedStatus}
        options={{ headerShown: false }}
      />
      {/* Home navigator ends here */}

      {/* Auth Navigator starts here*/}
      <Stack.Screen
        component={Splash}
        name={NAVIGATION.splash}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        component={AuthNavigator}
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
        component={BusinessKyc}
        name={NAVIGATION.businessKyc}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={AgeVerification}
        name={NAVIGATION.ageVerification}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={ConnectBank}
        name={NAVIGATION.connectBank}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={BusinessRegistration}
        name={NAVIGATION.businessRegistration}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={NoWalletScreen}
        name={NAVIGATION.noWalletScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={SelectAddress}
        name={NAVIGATION.selectAddress}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        component={FavouritesProduct}
        name={NAVIGATION.favouritesProduct}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        component={FavouritesSeller}
        name={NAVIGATION.favouritesSeller}
        options={{ headerShown: false }}
      />

      {/* Auth Navigator ends here */}
    </Stack.Navigator>
  );
}
