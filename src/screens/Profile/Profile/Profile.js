import { useTheme } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import { useDispatch } from "react-redux";
import { logout } from "@/actions/UserActions";
import { Button, ScreenWrapper, Spacer } from "@/components";
import { strings } from "@/localization";
import { styles } from "./Profile.styles";
import { COLORS, SH } from "@/theme";
import { getUser } from "@/selectors/UserSelectors";
import { useSelector } from "react-redux";

import {
  businessCard,
  catalogue,
  coinStack,
  discount,
  forward,
  heartIcon,
  helpCenter,
  jobrWallet,
  ordersIcon,
  pinPoint,
  question,
  quote,
  search,
  searchDoc,
  settings,
  shippingAddressIcon,
  userIcon,
  userPhoto,
} from "@/assets";
import { ms } from "react-native-size-matters";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";
import { getWallet } from "@/selectors/WalletSelector";
import { logoutOrder } from "@/actions/OrderAction";
import { logoutWallet } from "@/actions/WalletActions";
import { kFormatter } from "@/Utils/GlobalMethods";
import { getCategorySelector } from "@/selectors/CategorySelectors";
import { getCoupons } from "@/actions/ProductActions";

export function Profile() {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const wallet = useSelector(getWallet);
  const token = user?.user?.payload?.token;
  const profile_photo =
    user?.user?.payload?.user_profiles?.profile_photo ||
    user?.getUserProfile?.user_profiles?.profile_photo;

  const categoryData = useSelector(getCategorySelector);
  const categoryId = categoryData?.categoryList?.data?.[0]?.id;

  console.log("location", user?.user?.payload?.user_profiles?.current_address);

  const logoutUser = () => {
    dispatch(logout());
    dispatch(logoutOrder());
    dispatch(logoutWallet());
  };
  const body = {
    category_id: categoryData?.categoryList?.data?.[0]?.id,
  };

  useEffect(() => {
    dispatch(getCoupons(body));
  }, []);

  const Data = [
    {
      id: 1,
      icon: ordersIcon,
      title: strings.profile.myPurchase,
      openIcon: forward,
      navigation: NAVIGATION.myPurchase,
    },
    {
      id: 2,
      icon: quote,
      title: strings.profile.requestQuotation,
      openIcon: forward,
    },
    {
      id: 3,
      icon: question,
      title: strings.profile.inquiries,
      openIcon: forward,
      navigation: NAVIGATION.inquiries,
    },
    {
      id: 4,
      icon: discount,
      title: strings.profile.myCoupons,
      openIcon: forward,
      navigation: NAVIGATION.addCoupon,
    },
    {
      id: 5,
      icon: heartIcon,
      title: strings.profile.favouriteList,
      openIcon: forward,
      navigation: NAVIGATION.favouriteList,
    },
    {
      id: 6,
      icon: searchDoc,
      title: strings.profile.searchingPreference,
      openIcon: forward,
      navigation: NAVIGATION.selectedPreferance,
    },
    {
      id: 7,
      icon: shippingAddressIcon,
      title: strings.profile.shippingAddress,
      openIcon: forward,
      navigation: NAVIGATION.addresses,
    },
    {
      id: 8,
      icon: jobrWallet,
      title: strings.profile.jbrWallet,
      openIcon: forward,
      navigation: !user?.user?.payload?.token
        ? NAVIGATION.noWalletScreen
        : NAVIGATION.jbrWallet,
    },
    {
      id: 9,
      icon: jobrWallet,
      title: strings.profile.paymentMethods,
      openIcon: forward,
      navigation: NAVIGATION.paymentMethod,
    },
    {
      id: 10,
      icon: businessCard,
      title: strings.profile.businessCard,
      openIcon: forward,
      navigation: NAVIGATION.businessCards,
    },
    {
      id: 11,
      icon: catalogue,
      title: strings.profile.myCatalogs,
      openIcon: forward,
      navigation: NAVIGATION.myCatalogue,
    },
    {
      id: 12,
      icon: helpCenter,
      title: strings.profile.helpCenter,
      openIcon: forward,
      navigation: NAVIGATION.helpCenter,
    },
    {
      id: 13,
      icon: settings,
      title: strings.profile.settings,
      openIcon: forward,
      navigation: NAVIGATION.settings,
    },
  ];
  const navigationHandler = (item) => {
    navigate(item.navigation);
  };

  const ProfileData = ({ item, index }) => (
    <View>
      <TouchableOpacity
        onPress={() => navigationHandler(item)}
        style={styles.profileOptions}
      >
        <View style={styles.innerRowView}>
          {index == 4 ? (
            <Image
              source={item.icon}
              style={[styles.iconStyle, { height: ms(17), width: ms(17) }]}
              resizeMode="stretch"
            />
          ) : (
            <Image
              source={item.icon}
              style={styles.iconStyle}
              resizeMode="stretch"
            />
          )}
          <View style={{ paddingLeft: ms(10) }}>
            <Text style={styles.titleText}>{item.title}</Text>
          </View>
        </View>

        <Image
          source={item.openIcon}
          style={styles.forwardIcon}
          resizeMode="stretch"
        />
      </TouchableOpacity>
      <Spacer space={SH(5)} />
    </View>
  );

  return (
    <ScreenWrapper style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerInnerView}>
          <Text style={styles.headerText}>{strings.profile.myJobr}</Text>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity>
              <Image
                resizeMode="contain"
                source={search}
                style={styles.searchIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.headerIconView}
              onPress={() => navigate(NAVIGATION.jbrWallet)}
            >
              <Text style={styles.filterText}>
                {kFormatter(wallet?.getWalletBalance?.sila_balance) || 0}
              </Text>
              <Image
                resizeMode="contain"
                source={coinStack}
                style={styles.filterIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <ScrollView
        style={styles.mainContainer}
        showsVerticalScrollIndicator={false}
      >
        {token && (
          <>
            <TouchableOpacity
              onPress={() => navigate(NAVIGATION.userInformation)}
              style={styles.userView}
            >
              {profile_photo ? (
                <Image
                  source={{ uri: profile_photo }}
                  resizeMode="stretch"
                  style={{
                    height: ms(50),
                    width: ms(50),
                    borderRadius: ms(25),
                  }}
                />
              ) : (
                <Image
                  source={userIcon}
                  resizeMode="contain"
                  style={{
                    height: ms(30),
                    width: ms(30),
                    tintColor: COLORS.darkGrey,
                  }}
                />
              )}

              <View style={styles.userInnerView}>
                <View style={styles.usernameRowView}>
                  <Text style={styles.usernameText}>
                    {`${user?.user?.payload?.user_profiles?.firstname}${" "}${
                      user?.user?.payload?.user_profiles?.lastname
                    }`}
                  </Text>

                  <TouchableOpacity>
                    <Image
                      source={forward}
                      style={styles.forwardIcon}
                      resizeMode="stretch"
                    />
                  </TouchableOpacity>
                </View>
                {user?.user?.payload?.user_profiles?.current_address && (
                  <View style={styles.mapIconView}>
                    <Image
                      source={pinPoint}
                      resizeMode="stretch"
                      style={{ height: ms(20), width: ms(20) }}
                    />
                    <Text style={styles.addressText}>
                      {user?.user?.payload?.user_profiles?.current_address
                        ?.street_address +
                        " " +
                        user?.user?.payload?.user_profiles?.current_address
                          ?.state +
                        " ," +
                        user?.user?.payload?.user_profiles?.current_address
                          ?.zipcode}
                    </Text>
                  </View>
                )}

                <Text style={styles.manufacturerText}>
                  {user?.user?.payload?.user_profiles?.seller_type === null
                    ? "Retailer"
                    : user?.user?.payload?.user_profiles?.seller_type}
                </Text>
              </View>
            </TouchableOpacity>
            <Spacer space={SH(20)} />
          </>
        )}

        <FlatList
          data={Data}
          renderItem={ProfileData}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />

        <Spacer space={SH(30)} />

        {token && (
          <Button
            title={strings.profile.logout}
            onPress={logoutUser}
            style={styles.buttonStyle}
            textStyle={styles.buttonText}
          />
        )}
      </ScrollView>
    </ScreenWrapper>
  );
}
