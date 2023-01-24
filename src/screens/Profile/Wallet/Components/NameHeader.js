import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS } from "@/theme/Colors";
import { SF, SH, SW } from "@/theme/ScalerDimensions";
import { StyleSheet } from "react-native";
import { s } from "react-native-size-matters";
import { goBack } from "@/navigation/NavigationRef";
import { Fonts } from "@/assets";
import { ShadowStyles } from "@/theme";
import { style } from "deprecated-react-native-prop-types/DeprecatedViewPropTypes";

export function Header({ title, back, subTitle }) {
  return (
    <View style={styles.header}>
      <View style={styles.headerInnerView}>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
          onPress={() => goBack()}
        >
          <Image
            resizeMode="contain"
            source={back}
            style={{ height: 25, width: 25 }}
          />
          <View>
            <Text style={styles.headerText}>{title}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyText}>Buy</Text>
        </TouchableOpacity>
      </View>
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
    height: SH(50),
    backgroundColor: COLORS.white,
    ...ShadowStyles.shadow,
    paddingHorizontal: SW(20),
    justifyContent: "center",
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
});
