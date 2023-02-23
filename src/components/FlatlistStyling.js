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
import { Fonts, headphones } from "@/assets";

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
        source={item}
        resizeMode="contain"
        style={{ height: SW(65), width: SW(65), marginHorizontal: 2 }}
      />
      <Text
        style={{
          fontSize: SF(10),
          color: COLORS.light_grey,
          fontFamily: Fonts.Regular,
        }}
      >
        MOQ 10
      </Text>
    </View>
  </>
);

export const renderCompanies = ({ item }) => {
  return (
    <>
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
          <CompanyDetailView />

          {/* <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: widthImage,
            }}
          >
            <Image
              source={item?.image1}
              resizeMode="contain"
              style={{ height: SW(65), width: SW(65) }}
            />
            <Image
              source={item?.image2}
              resizeMode="contain"
              style={{ height: SW(65), width: SW(65) }}
            />
            <Image
              source={item?.image3}
              resizeMode="contain"
              style={{ height: SW(65), width: SW(65) }}
            />
            <Image
              source={item?.image4}
              resizeMode="contain"
              style={{ height: SW(65), width: SW(65) }}
            />
          </View> */}
          <View style={{ alignItems: "center" }}>
            <FlatList
              data={imagesArray}
              renderItem={renderImages}
              numColumns={4}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </View>
    </>
  );
};
