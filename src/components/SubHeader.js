import { Image, Text, View } from "react-native";
import React from "react";
import { Spacer } from "@/components";
import { boxStar } from "@/assets";
import { Fonts } from "@/assets";
import { COLORS } from "@/theme/Colors";
import { SF, SH, SW } from "@/theme/ScalerDimensions";
import { StyleSheet } from "react-native";
import { ms, vs } from "react-native-size-matters";

export function SubHeader({ title, subTitle }) {
  return (
    <View style={styles.upperRowView}>
      <Image
        resizeMode="contain"
        source={boxStar}
        style={{ height: vs(72), width: ms(77) }}
      />
      <View style={styles.upperHalfView}>
        <Text style={styles.topBoldText}>{title}</Text>
        <Spacer space={SH(5)} />

        <Text style={styles.subtitleText}>{subTitle}</Text>
      </View>
    </View>
  );
}
export const styles = StyleSheet.create({
  upperView: {
    paddingVertical: SH(5),
    width: "100%",
    backgroundColor: COLORS.inputBorder,
    paddingHorizontal: ms(10),
  },
  upperRowView: {
    paddingTop: SH(5),
    paddingBottom: SH(50),
    paddingHorizontal: ms(10),
    flexDirection: "row",
    alignItems: "center",
  },
  topBoldText: {
    fontFamily: Fonts.SemiBold,
    color: COLORS.primary,
    fontSize: ms(20),
  },

  upperHalfView: {
    flex: 1,
    paddingLeft: SW(10),
  },
  subtitleText: {
    fontFamily: Fonts.Regular,
    color: COLORS.light_grey,
    fontSize: SF(12),
    textAlign: "justify",
  },
});
