import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  FlatList,
  useWindowDimensions,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { NameHeader, ScreenWrapper, Spacer, TextField } from "@/components";
import { styles } from "./Pending.styles";
import { COLORS, SF, SH, ShadowStyles, SW } from "@/theme";
import { transactionHistory } from "@/constants/flatlistData";
import { HeaderCoin } from "../../Profile/Wallet/Components/HeaderCoin";
import { strings } from "@/localization";
import { CompanyView } from "../../Profile/Wallet/Manufacturers/Components/CompanyView";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";
import {
  backArrow,
  filter,
  Fonts,
  forward,
  loactionPinFilled,
  location,
  manufactureLogo,
  nearMeMap,
  puma1,
  puma5,
  Shoes2,
  shoesBusiness,
  shopLight,
  wareHouseLogo,
  whiteShoes,
  womenShoes,
  yewiLogo,
} from "@/assets";

export function Pending() {
  const data = [
    {
      id: 1,
      productImage: womenShoes,
      companyLogo: yewiLogo,
      companyName: "Yiwu Leqi E-Commerce Firm",
      productName: "PUMA Men's Tazon 6 Wide Sneaker",
      quantity: "5000 Pairs",
      price: "US$ 1.4",
      orderedAmount: "USD $7056.00",
      date: "14 Jun, 21:33",
    },
    {
      id: 2,
      productImage: Shoes2,
      companyLogo: yewiLogo,
      companyName: "Yiwu Leqi E-Commerce Firm",
      productName: "Men Sneakers Men Shoes Lightweight Running Shoes",
      quantity: "5000 Pairs",
      price: "US$ 1.4",
      orderedAmount: "USD $7056.00",
      date: "14 Jun, 21:33",
    },
  ];

  const renderItem = ({ item, index }) => (
    <>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: COLORS.light_border,
          paddingVertical: SH(10),
          paddingHorizontal: SH(10),
          borderRadius: SH(5),
          marginBottom: SH(15),
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={item.companyLogo}
            resizeMode="contain"
            style={{ height: SW(25), width: SW(25), marginRight: SW(10) }}
          />
          <Text
            style={{
              fontFamily: Fonts.SemiBold,
              fontSize: SF(14),
              color: COLORS.black,
            }}
          >
            {item.companyName}
          </Text>
        </View>

        <Spacer space={SH(10)} />
        <View style={styles.bottomLine}></View>

        <View style={{ flexDirection: "row" }}>
          <Image
            source={item.productImage}
            resizeMode="contain"
            style={{ height: SW(70), width: SW(70) }}
          />

          <View style={{ flex: 1, marginTop: SH(10), marginLeft: SW(5) }}>
            <Text
              style={{
                fontFamily: Fonts.Regular,
                fontSize: SF(13),
                color: COLORS.text,
              }}
            >
              {item.productName}
            </Text>

            <Spacer space={SH(6)} />

            <Text
              style={{
                fontFamily: Fonts.SemiBold,
                fontSize: SF(12),
                color: COLORS.darkGrey,
              }}
            >
              {item.price} x <Text>{item.quantity}</Text>
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: SW(5),
          }}
        >
          <Text
            style={{
              fontFamily: Fonts.Regular,
              fontSize: SF(11),
              color: COLORS.black,
            }}
          >
            {item.date}
          </Text>
          <Text
            style={{
              fontFamily: Fonts.Regular,
              fontSize: SF(11),
              color: COLORS.black,
            }}
          >
            Ordered amount:{" "}
            <Text
              style={{
                fontFamily: Fonts.SemiBold,
                fontSize: SF(12),
                color: COLORS.darkGrey,
              }}
            >
              {item.orderedAmount}
            </Text>
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );

  return (
    <ScreenWrapper>
      <View
        style={{
          paddingHorizontal: SW(20),
          width: "100%",
        }}
      >
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </ScreenWrapper>
  );
}
