import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS } from "@/theme/Colors";
import { SH, SW } from "@/theme/ScalerDimensions";
import { StyleSheet } from "react-native";
import { ms, s, verticalScale } from "react-native-size-matters";
import { goBack } from "@/navigation/NavigationRef";
import { Fonts, coinStack } from "@/assets";
import { ShadowStyles } from "@/theme";

export function NameHeaderCoins({ title, back, amount, onPress }) {
  return (
    <View style={styles.header}>
      <View style={styles.headerInnerView}>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
          onPress={onPress}
        >
          <Image
            resizeMode="contain"
            source={back}
            style={{ height: 30, width: 30 }}
          />
          <Text style={styles.headerText}>{title}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.primary,
            borderRadius: ms(20),
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: ms(6),
            paddingVertical: verticalScale(3),
            justifyContent: "center",
            width: SW(50),
          }}
        >
          <Text
            style={{
              fontFamily: Fonts.SemiBold,
              color: COLORS.white,
              fontSize: ms(14),
              marginLeft: ms(2),
            }}
          >
            {amount}
          </Text>
          <Image
            resizeMode="contain"
            source={coinStack}
            style={styles.crossIcon}
          />
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
    ...ShadowStyles.shadow2,
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
  crossIcon: {
    height: SH(17),
    width: SW(17),
  },
});
