import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  TextInput,
} from "react-native";
import { Spacer, ScreenWrapper, Header } from "@/components";
import { strings } from "@/localization";
import { styles } from "./PastOrders.styles";
import { SH, COLORS, SF } from "@/theme";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { backArrow, Fonts } from "@/assets";
import { HeaderCoin } from "@/screens/Profile/Wallet/Components/HeaderCoin";

const retailData = [
  {
    name: "Miami smoke",
    subName: "Marlboro Red Gold,Marlboro White",
    id: 1,
  },
  {
    name: "Miami smoke",
    subName: "Marlboro Red Gold,Marlboro White",
    id: 2,
  },
];

export function PastOrders() {
  const renderdataItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        style={styles.rowCard}
        onPress={() => {
          navigate(NAVIGATION.helpWithOrders);
        }}
      >
        <View style={styles.row}>
          <View>
            <Text style={[styles.formName]}>{item.name}</Text>
            <Spacer space={SH(4)} />
            <Text style={[styles.subName]}>{item.subName}</Text>
            <Spacer space={SH(4)} />
          </View>
        </View>

        <Spacer space={SH(4)} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={[styles.subName, { marginTop: 10 }]}>
            {"14 Jun,20:12"}
          </Text>
          <Text
            style={{
              fontFamily: Fonts.Regular,
              color: COLORS.white,
              fontSize: SF(10),
              borderRadius: Platform.OS == "ios" ? 6 : 4,
              overflow: "hidden",
              backgroundColor: COLORS.blue,
              paddingVertical: 6,
              paddingHorizontal: 10,
              alignSelf: "center",
            }}
          >
            {"Delivered"}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScreenWrapper>
      <HeaderCoin back={backArrow} title="Get help with my orders" amount={0} />

      <View style={styles.bodyContainer}>
        <Spacer space={SH(10)} />
        <FlatList
          data={retailData}
          renderItem={renderdataItem}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          bounces={false}
          // horizontal={true}
        />
      </View>
    </ScreenWrapper>
  );
}
