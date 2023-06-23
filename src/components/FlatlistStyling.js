import { useTheme } from "@react-navigation/native";
import PropTypes from "prop-types";
import React from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS, SF, SH, ShadowStyles, SW, TextStyles } from "@/theme";
import { styles } from "@/screens/TopTabScreens/Business/Business.style";
import { CompanyDetailView } from "./CompanyDetailView";
import { Spacer } from "./Spacer";
import FastImage from "react-native-fast-image";
import { Fonts, headphones, yewiLogo } from "@/assets";
import { strings } from "@/localization";

const width = Dimensions.get("window").width * 0.8;
const widthImage = Dimensions.get("window").width * 0.75;

const imagesArray = [headphones, headphones, headphones, headphones];

export const renderWholesale = ({ item }) => {
  return (
    <>
      <View style={{ flex: 1 }}>
        <Spacer space={SH(10)} />

        <Image
          source={{ uri: item?.image1 }}
          resizeMode="cover"
          style={{
            width: "80%",
            height: SH(60),
            alignSelf: "center",
            borderRadius: 5,
          }}
        />
      </View>
    </>
  );
};

const renderImages = ({ item }) => (
  <>
    <View
      style={{
        alignItems: "center",
      }}
    >
      <Image
        source={{ uri: item }}
        resizeMode="cover"
        style={{
          height: SW(64),
          width: SW(64),
          marginHorizontal: 2,
        }}
      />
      <Text
        style={{
          fontSize: SF(10),
          color: COLORS.light_grey,
          fontFamily: Fonts.Regular,
        }}
      >
        {"MOQ 10"}
      </Text>
    </View>
    <Spacer horizontal />
  </>
);

export const renderCompanies = ({ item }) => {
  return (
    <>
      {item?.user_profiles?.organization_name && (
        <View style={{ flex: 1, marginHorizontal: 10 }}>
          <View
            style={{
              backgroundColor: COLORS.white,
              width: width,
              ...ShadowStyles.shadow2,
              paddingVertical: SH(8),
              paddingHorizontal: SW(10),
              borderRadius: 8,
              marginBottom: SH(1),
              marginRight: SW(1),
            }}
          >
            <CompanyDetailView
              title={item?.user_profiles?.organization_name}
              profilePhoto={item?.user_profiles?.banner_image}
              locationText={item?.user_profiles?.overview?.[0]?.country}
            />
            <View style={{ alignItems: "flex-start", marginTop: SH(5) }}>
              <FlatList
                data={item?.user_profiles?.manufacturer_images}
                renderItem={renderImages}
                numColumns={4}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>
        </View>
      )}
    </>
  );
};

export const renderNoData = ({ item }) => (
  <>
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        style={{
          color: COLORS.primary,
          fontFamily: Fonts.Regular,
          fontSize: SF(16),
        }}
      >
        {strings.STATIC.noDataFound}
      </Text>
    </View>
  </>
);
