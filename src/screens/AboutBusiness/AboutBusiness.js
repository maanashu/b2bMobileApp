import {
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { styles } from "./AboutBusiness.style";
import {
  CompanyDetailView,
  ScreenWrapper,
  SearchHeader,
  Spacer,
} from "@/components";
import { SF, SH } from "@/theme/ScalerDimensions";
import { COLORS } from "@/theme/Colors";
import { Fonts, yewiLogo, backArrow, ProfileUser } from "@/assets";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { BusinessHome, BusinessProducts, BusinessProfile } from "@/screens";
import { moderateScale, ms } from "react-native-size-matters";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneManufactureDetails } from "@/actions/UserActions";
import { getUser } from "@/selectors/UserSelectors";
import { getProductSelector } from "@/selectors/ProductSelectors";

export function AboutBusiness(props) {
  const layout = useWindowDimensions();
  const dispatch = useDispatch();
  const user =useSelector(getProductSelector);
  console.log(
    "useruseruser",
    JSON.stringify(props.route?.params?.sellerDetails)
  );
  console.log("prop==s", user?.savedManufacturerDetail);

  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    { key: "Home", title: "Home" },
    { key: "Products", title: "Products" },
    { key: "Profile", title: "Profile" },
  ]);

  const FirstRoute = () => <BusinessHome />;
  const SecondRoute = () => <BusinessProducts />;
  const ThirdRoute = () => <BusinessProfile />;

  const renderScene = SceneMap({
    Home: FirstRoute,
    Products: SecondRoute,
    Profile: ThirdRoute,
  });
  const renderTabBar = (props) => {
    return (
      <TabBar
        {...props}
        renderLabel={({ focused, route }) => {
          return (
            <View
              style={[
                styles.tabButtonView,
                {
                  borderColor: focused ? COLORS.primary : COLORS.light_border,
                },
              ]}
            >
              <Text
                style={{
                  color: focused ? COLORS.primary : COLORS.text,
                  textAlignVertical: "center",
                  fontFamily: focused ? Fonts.SemiBold : Fonts.Regular,
                  fontSize: moderateScale(10),
                  marginLeft: ms(12),
                }}
              >
                {route.title}
              </Text>
            </View>
          );
        }}
        indicatorStyle={{ backgroundColor: COLORS.primary, width: "0.3%" }}
        style={{
          elevation: 0,
          backgroundColor: COLORS.inputBorder,
        }}
        pressColor={COLORS.white}
        tabStyle={{ width: "auto" }}
      />
    );
  };

  const Data = [
    {
      id: "1",
      Heading: ">1h",
      text: "Response Time",
    },
    {
      id: "2",
      Heading: "100%",
      text: "On-delivery",
    },
    {
      id: "3",
      Heading: "105",
      text: "Order delivery",
    },
  ];

  const SecondItem = ({ item, onPress }) => (
    <TouchableOpacity style={styles.itemS}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: COLORS.primary,
            fontSize: SF(16),
            fontFamily: Fonts.SemiBold,
          }}
        >
          {item.Heading}
        </Text>
        <Text
          style={{
            color: COLORS.darkGrey2,
            fontSize: SF(12),
            fontFamily: Fonts.Regular,
          }}
        >
          {item.text}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScreenWrapper style={{ flex: 1, backgroundColor: COLORS.white }}>
      <SearchHeader back={backArrow} />
      <View showsVerticalScrollIndicator={false} style={styles.mainContainer}>
        <View
          style={{
            flex: 1,
            paddingHorizontal: ms(20),
            backgroundColor: COLORS.inputBorder,
          }}
        >
          <Spacer space={SH(20)} />
          <View style={styles.yewiView}>
            <CompanyDetailView
              profilePhoto={
                user?.user_profiles?.profile_photo
                  ? user?.user_profiles?.profile_photo
                  : ProfileUser
              }
              title={
                user?.user_profiles?.organization_name
                  ? user?.user_profiles?.organization_name
                  : "Seller"
              }
              locationText={`${user?.current_location?.city},`}
              rating={user?.sellerRating?.rating}
              country={user?.current_location?.country}
            />

            <Spacer space={SH(15)} />

            <FlatList
              showsVerticalScrollIndicator={false}
              data={Data}
              renderItem={SecondItem}
              keyExtractor={(item) => item.id}
              numColumns={3}
            />
          </View>
        </View>
      </View>
      <TabView
        swipeEnabled={false}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={renderTabBar}
      />
      <Spacer space={SH(10)} />
    </ScreenWrapper>
  );
}
