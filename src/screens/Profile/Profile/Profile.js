import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  Platform,
} from "react-native";
import { useDispatch } from "react-redux";
import { logout } from "@/actions/UserActions";
import {
  Button,
  LoginModal,
  NameHeaderCoins,
  ScreenWrapper,
  Spacer,
} from "@/components";
import { strings } from "@/localization";
import { styles } from "./Profile.styles";
import { COLORS, SH, SW } from "@/theme";
import { getUser } from "@/selectors/UserSelectors";
import { useSelector } from "react-redux";

import {
  businessCard,
  catalogue,
  discount,
  forward,
  heartIcon,
  helpCenter,
  jobrWallet,
  ordersIcon,
  pinPoint,
  question,
  quote,
  searchDoc,
  settings,
  shippingAddressIcon,
  userIcon,
} from "@/assets";
import { ms } from "react-native-size-matters";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";
import { logoutOrder } from "@/actions/OrderAction";
import { logoutWallet } from "@/actions/WalletActions";
import { getCategorySelector } from "@/selectors/CategorySelectors";
import { getCoupons } from "@/actions/ProductActions";
import { Alert } from "react-native";
import DeviceInfo from "react-native-device-info";
import LinearGradient from "react-native-linear-gradient";
import FastImage from "react-native-fast-image";
import { isLoadingSelector } from "@/selectors/StatusSelectors";
import { TYPES } from "@/Types/Types";

export function Profile() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const token = user?.user?.payload?.token;
  const categoryData = useSelector(getCategorySelector);
  const profile_photo = user?.getUserProfile?.user_profiles?.profile_photo;
  const ProdChecker = DeviceInfo.getBuildNumber();
  const buildVersion = DeviceInfo.getVersion();
  const [openModal, setOpenModal] = useState(false);
  const getScreen = () => {
    if (!user?.user?.payload?.token) {
      return 0;
    } else if (user?.getUserProfile?.user_profiles?.wallet_steps === 0) {
      return 3;
    } else if (user?.getUserProfile?.user_profiles?.wallet_steps === 1) {
      return 4;
    } else if (user?.getUserProfile?.user_profiles?.wallet_steps === 1.1) {
      return 5;
    } else if (user?.getUserProfile?.user_profiles?.wallet_steps === 4) {
      return 6;
    }
  };
  const screen = getScreen();
  const logoutUser = () => {
    Alert.alert("Confirmation", "Are you sure you want to logout?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Yes",
        onPress: () => {
          dispatch(logout());
          dispatch(logoutOrder());
          dispatch(logoutWallet());
        },
      },
    ]);
  };
  const body = {
    category_id: categoryData?.categoryList?.data?.[0]?.id,
  };

  useEffect(() => {
    dispatch(getCoupons(body));
  }, []);
  useEffect(() => {
    setOpenModal(false);
  }, [navigation]);
  const isLoading = useSelector((state) =>
    isLoadingSelector([TYPES.DEVICE_REGISTER], state)
  );

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
      icon: ordersIcon,
      title: strings.profile.myServices,
      openIcon: forward,
    },
    {
      id: 3,
      icon: quote,
      title: strings.profile.requestQuotation,
      openIcon: forward,
    },
    {
      id: 4,
      icon: question,
      title: strings.profile.inquiries,
      openIcon: forward,
      navigation: NAVIGATION.inquiries,
    },
    {
      id: 5,
      icon: discount,
      title: strings.profile.myCoupons,
      openIcon: forward,
      navigation: NAVIGATION.addCoupon,
    },
    {
      id: 6,
      icon: heartIcon,
      title: strings.profile.favouriteList,
      openIcon: forward,
      navigation: NAVIGATION.favouriteList,
    },
    {
      id: 7,
      icon: searchDoc,
      title: strings.profile.searchingPreference,
      openIcon: forward,
      navigation: NAVIGATION.selectedPreferance,
    },
    {
      id: 8,
      icon: shippingAddressIcon,
      title: strings.profile.shippingAddress,
      openIcon: forward,
      navigation: NAVIGATION.addresses,
    },
    {
      id: 9,
      icon: jobrWallet,
      title: strings.profile.jbrWallet,
      openIcon: forward,
      navigation: NAVIGATION.jbrWallet,
    },
    {
      id: 10,
      icon: jobrWallet,
      title: strings.profile.paymentMethods,
      openIcon: forward,
      navigation: NAVIGATION.paymentMethod,
    },
    {
      id: 11,
      icon: businessCard,
      title: strings.profile.businessCard,
      openIcon: forward,
      navigation: NAVIGATION.businessCards,
    },
    {
      id: 12,
      icon: catalogue,
      title: strings.profile.myCatalogs,
      openIcon: forward,
      navigation: NAVIGATION.catalogues,
    },
    {
      id: 13,
      icon: helpCenter,
      title: strings.profile.helpCenter,
      openIcon: forward,
      navigation: NAVIGATION.helpCenter,
    },
    {
      id: 14,
      icon: settings,
      title: strings.profile.settings,
      openIcon: forward,
      navigation: NAVIGATION.settings,
    },
  ];
  const navigationHandler = (item) => {
    const titlesToCheckModal = [
      strings.profile.jbrWallet,
      strings.profile.paymentMethods,
      strings.profile.favouriteList,
      strings.profile.myPurchase,
      strings.profile.shippingAddress,
      strings.profile.myCatalogs,
    ];
    if (item?.navigation) {
      if (titlesToCheckModal.includes(item.title)) {
        const shouldOpenModal =
          !user?.user?.payload?.token || [3, 4, 5, 6].includes(screen);
        if (shouldOpenModal) {
          setOpenModal(true);
        } else {
          navigate(item?.navigation);
        }
      } else {
        navigate(item?.navigation);
      }
    }
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
              style={styles.iconStyle(index)}
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
      <NameHeaderCoins title={"My Jobr"} searchRequired />

      <ScrollView
        style={styles.mainContainer}
        showsVerticalScrollIndicator={false}
      >
        {token && (
          <>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => navigate(NAVIGATION.userInformation)}
              style={styles.userView}
            >
              {profile_photo ? (
                <LinearGradient
                  colors={["#275AFF", "#1CD3FF"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.linearBorderStyle}
                >
                  <View
                    style={{
                      backgroundColor: COLORS.white,
                      borderRadius: SW(40),
                    }}
                  >
                    <FastImage
                      source={{ uri: profile_photo }}
                      resizeMode="contain"
                      style={styles.profilePhotoStyle}
                    />
                  </View>
                </LinearGradient>
              ) : (
                <LinearGradient
                  colors={["#275AFF", "#1CD3FF"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.linearBorderStyle}
                >
                  <View
                    style={{
                      backgroundColor: COLORS.white,
                      borderRadius: SW(40),
                    }}
                  >
                    <Image
                      source={userIcon}
                      resizeMode="contain"
                      style={styles.userIconStyle}
                    />
                  </View>
                </LinearGradient>
              )}

              <View style={styles.userInnerView}>
                <View style={styles.usernameRowView}>
                  <Text style={styles.usernameText}>
                    {`${user?.getUserProfile?.user_profiles?.firstname}${" "}${
                      user?.getUserProfile?.user_profiles?.lastname
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
                        ", " +
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

        {token && (
          <>
            <Spacer space={SH(10)} />

            <Button
              title={strings.profile.logout}
              onPress={logoutUser}
              style={styles.buttonStyle}
              textStyle={styles.buttonText}
            />
          </>
        )}

        <Spacer space={SH(5)} />

        <Text style={styles.subName}>
          {Platform.OS === "ios"
            ? `V ${ProdChecker}(${buildVersion})`
            : `Version 1.0(1)`}
        </Text>
        <Spacer space={SH(30)} />
      </ScrollView>
      <View>
        <LoginModal
          isVisible={openModal}
          closeModal={setOpenModal}
          setScreen={screen}
        />
      </View>
    </ScreenWrapper>
  );
}
