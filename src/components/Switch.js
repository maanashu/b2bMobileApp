import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Fonts } from "@/assets";
import { COLORS } from "@/theme/Colors";
import { SF, SH, SW } from "@/theme/ScalerDimensions";
import { StyleSheet, Dimensions } from "react-native";

export function Switch({
  onPress,
  source,
  title,
  iconStyle,
  resizeMode,
  TextStyle,
}) {
  return (
    <View style={styles.rowView}>
      <Text style={[styles.textStyle, TextStyle]}>{title}</Text>
      <TouchableOpacity onPress={onPress}>
        <Image
          source={source}
          resizeMode={resizeMode}
          style={[styles.switchIcon, iconStyle]}
        />
      </TouchableOpacity>
    </View>
  );
}

export const styles = StyleSheet.create({
  rowView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  switchIcon: {
    height: SH(15),
    width: SW(25),
  },
  textStyle: {
    fontFamily: Fonts.Regular,
    fontSize: SF(14),
    color: COLORS.text,
  },
});
