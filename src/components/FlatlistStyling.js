import { useTheme } from "@react-navigation/native";
import PropTypes from "prop-types";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, SH, SW, TextStyles } from "@/theme";
import { styles } from "@/screens/TopTabScreens/Business/Business.style";
import { CompanyDetailView } from "./CompanyDetailView";

export const renderWholesale = ({ item }) => {
  return (
    <>
      <View style={{ flex: 1, width: "100%" }}>
        <Image
          source={item.image}
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
