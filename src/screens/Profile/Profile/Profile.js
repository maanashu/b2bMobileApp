import { useTheme } from "@react-navigation/native";
import React from "react";
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
import { SH } from "@/theme";
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
  profileLogo,
  question,
  quote,
  search,
  searchDoc,
  settings,
  shippingAddressIcon,
} from "@/assets";
import { ms } from "react-native-size-matters";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";

const Data = [
  {
    id: 1,
    icon: ordersIcon,
    title: strings.profile.myPurchase,
    openIcon: forward,
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
  },
  {
    id: 4,
    icon: discount,
    title: strings.profile.myCoupons,
    openIcon: forward,
  },
  {
    id: 5,
    icon: heartIcon,
    title: strings.profile.favouriteList,
    openIcon: forward,
  },
  {
    id: 6,
    icon: searchDoc,
    title: strings.profile.searchingPreference,
    openIcon: forward,
  },
  {
    id: 7,
    icon: shippingAddressIcon,
    title: strings.profile.shippingAddress,
    openIcon: forward,
  },
  {
    id: 8,
    icon: jobrWallet,
    title: strings.profile.jbrWallet,
    openIcon: forward,
  },
  {
    id: 9,
    icon: jobrWallet,
    title: strings.profile.paymentMethods,
    openIcon: forward,
  },
  {
    id: 10,
    icon: businessCard,
    title: strings.profile.businessCard,
    openIcon: forward,
  },
  {
    id: 11,
    icon: catalogue,
    title: strings.profile.myCatalogs,
    openIcon: forward,
  },
  {
    id: 12,
    icon: helpCenter,
    title: strings.profile.helpCenter,
    openIcon: forward,
  },
  {
    id: 13,
    icon: settings,
    title: strings.profile.settings,
    openIcon: forward,
  },
];

export function Profile() {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  const logoutUser = () => {
    dispatch(logout());
  };
  const navigationHandler = (item) => {
    if (item.title === strings.profile.myPurchase) {
      navigate(NAVIGATION.myPurchase);
    } else if (item.title === strings.profile.settings) {
      navigate(NAVIGATION.settings);
    } else if (item.title === strings.profile.myCatalogs) {
      navigate(NAVIGATION.myCatalogue);
    } else if (item.title === strings.profile.myCoupons) {
      navigate(NAVIGATION.addCoupon);
    } else if (item.title === strings.profile.jbrWallet) {
      navigate(NAVIGATION.jbrWallet);
    } else if (item.title === strings.profile.businessCard) {
      navigate(NAVIGATION.businessCards);
    } else if (item.title === strings.profile.searchingPreference) {
      navigate(NAVIGATION.selectedPreferance);
    } else if (item.title === strings.profile.shippingAddress) {
      navigate(NAVIGATION.addresses);
    } else if (item.title === strings.profile.paymentMethods) {
      navigate(NAVIGATION.paymentMethod);
    } else if (item.title === strings.profile.favouriteList) {
      navigate(NAVIGATION.favouriteList);
    } else if (item.title === strings.profile.inquiries) {
      navigate(NAVIGATION.inquiries);
    }
  };

  const ProfileData = ({ item, index }) => (
    <View>
      <TouchableOpacity
        onPress={() => navigationHandler(item)}
        style={styles.profileOptions}
      >
        <View style={styles.innerRowView}>
          <Image
            source={item.icon}
            style={styles.iconStyle}
            resizeMode="stretch"
          />
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
            <TouchableOpacity style={styles.headerIconView}>
              <Text style={styles.filterText}>0</Text>
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
        <TouchableOpacity
          onPress={() => navigate(NAVIGATION.userInformation)}
          style={styles.userView}
        >
          <Image
            source={profileLogo}
            resizeMode="stretch"
            style={{ height: ms(50), width: ms(50) }}
          />
          <View style={styles.userInnerView}>
            <View style={styles.usernameRowView}>
              <Text style={styles.usernameText}>
                {strings.profile.username}
              </Text>

              <TouchableOpacity>
                <Image
                  source={forward}
                  style={styles.forwardIcon}
                  resizeMode="stretch"
                />
              </TouchableOpacity>
            </View>

            <View style={styles.mapIconView}>
              <Image
                source={pinPoint}
                resizeMode="stretch"
                style={{ height: ms(20), width: ms(20) }}
              />
              <Text style={styles.addressText}>{strings.profile.address}</Text>
            </View>

            <Text style={styles.manufacturerText}>
              {strings.profile.manufacturer}
            </Text>
          </View>
        </TouchableOpacity>

        <Spacer space={SH(20)} />

        <FlatList
          data={Data}
          renderItem={ProfileData}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />

        <Spacer space={SH(30)} />

        {user ? (
          <Button
            title={strings.profile.logout}
            onPress={logoutUser}
            style={styles.buttonStyle}
            textStyle={styles.buttonText}
          />
        ) : (
          <View></View>
        )}
      </ScrollView>
    </ScreenWrapper>
  );
}
