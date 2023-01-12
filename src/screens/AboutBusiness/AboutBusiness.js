import {
  Image,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
  FlatList,
} from "react-native";
import React from "react";
import { styles } from "./AboutBusiness.style";
import { ScreenWrapper, Spacer } from "@/components";
import { SF, SH, SW } from "@/theme/ScalerDimensions";
import { COLORS } from "@/theme/Colors";
import {
  Fonts,
  yewiLogo,
  yewiCertified,
  location,
  star,
  clock,
  backArrow,
} from "@/assets";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { BusinessHome, BusinessProducts, BusinessProfile } from "@/screens";
import { moderateScale, ms } from "react-native-size-matters";
import { Header } from "@/components/Header";
import { string } from "prop-types";
import { strings } from "@/localization";

export function AboutBusiness() {
  const layout = useWindowDimensions();

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
        indicatorStyle={{ backgroundColor: COLORS.primary, width: "0.5%" }}
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
      <Header back={backArrow} />
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
            <View style={styles.yewiInnerView}>
              <Image
                source={yewiLogo}
                resizeMode="contain"
                style={styles.logoYewi}
              />
              <View style={{ paddingHorizontal: SW(10) }}>
                <Text style={styles.yewiHeadingText}>
                  Yiwu Leqi E-Commerce Firm
                </Text>
                <View style={styles.yewiSmallView}>
                  <Image
                    source={yewiCertified}
                    resizeMode="contain"
                    style={styles.certified}
                  />
                  <View style={styles.yewiDirection}>
                    <Image
                      source={location}
                      resizeMode="contain"
                      style={styles.yewiIcons}
                    />
                    <Text style={styles.yewiSmallText}> Miami, USA</Text>
                    <Image
                      source={star}
                      resizeMode="contain"
                      style={styles.yewistar}
                    />
                    <Text style={styles.yewiSmallText}> 4.5</Text>
                    <Image
                      source={clock}
                      resizeMode="contain"
                      style={styles.yewiClock}
                    />
                    <Text style={styles.yewiSmallText}> Since 2022</Text>
                  </View>
                </View>
              </View>
            </View>

            <Spacer space={SH(20)} />

            <FlatList
              data={Data}
              renderItem={SecondItem}
              keyExtractor={(item) => item.id}
              //   extraData={product}
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
