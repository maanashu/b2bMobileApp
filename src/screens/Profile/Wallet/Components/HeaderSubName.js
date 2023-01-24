import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS } from "@/theme/Colors";
import { SF, SH, SW } from "@/theme/ScalerDimensions";
import { StyleSheet } from "react-native";
import { s } from "react-native-size-matters";
import { goBack } from "@/navigation/NavigationRef";
import { backArrow, Fonts } from "@/assets";
import { ShadowStyles } from "@/theme";

export function HeaderSubName({ title, subTitle }) {
  return (
    <View style={styles.header}>
      <View style={styles.headerInnerView}>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
          onPress={() => goBack()}
        >
          <Image
            resizeMode="contain"
            source={backArrow}
            style={{ height: 25, width: 25 }}
          />
          <View>
            <Text style={styles.headerText}>{title}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text style={styles.subHeaderText}>{subTitle}</Text>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 40,
  },

  header: {
    height: SH(65),
    backgroundColor: COLORS.white,
    ...ShadowStyles.shadow,
    paddingHorizontal: SW(20),
    justifyContent: "center",
    paddingTop: SH(5),
  },
  headerInnerView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontFamily: Fonts.SemiBold,
    color: COLORS.black,
    fontSize: s(14),
  },
  buyButton: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: SW(10),
    paddingVertical: SH(5),
    borderRadius: SW(20),
    width: SW(50),
    alignItems: "center",
  },
  buyText: {
    color: COLORS.white,
    fontFamily: Fonts.Regular,
    fontSize: SF(14),
  },
  subHeaderText: {
    color: COLORS.light_grey,
    fontFamily: Fonts.Regular,
    fontSize: SF(12),
  },
});
