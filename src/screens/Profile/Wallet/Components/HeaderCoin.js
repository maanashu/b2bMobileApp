import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS } from "@/theme/Colors";
import { SF, SH, SW } from "@/theme/ScalerDimensions";
import { StyleSheet } from "react-native";
import { ms, s, vs } from "react-native-size-matters";
import { goBack } from "@/navigation/NavigationRef";
import { backArrow, coinStack, Fonts } from "@/assets";
import { ShadowStyles } from "@/theme";
import { style } from "deprecated-react-native-prop-types/DeprecatedViewPropTypes";
import { useSelector } from "react-redux";
import { getWallet } from "@/selectors/WalletSelector";

export function HeaderCoin({ title, back, amount }) {
  const wallet = useSelector(getWallet);
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
            style={{ height: 20, width: 20 }}
          />
          <View>
            <Text style={styles.headerText}>{title}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.coinButton}>
          <Text style={styles.buyText}>
            {" "}
            {Math.floor(
              wallet?.getWalletBalance?.sila_balance / 100 || 0
            ).toFixed()}
          </Text>
          <Image
            style={styles.coinStyle}
            resizeMode="contain"
            source={coinStack}
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
    marginBottom: SH(1),
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
    fontSize: s(12),
  },
  coinButton: {
    height: SH(29),
    width: SW(50),
    backgroundColor: COLORS.primary,
    borderRadius: ms(20),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: SW(5),
  },
  buyText: {
    fontFamily: Fonts.SemiBold,
    color: COLORS.white,
    marginRight: SW(1),
  },
  coinStyle: {
    height: vs(16),
    width: ms(16),
    marginLeft: SW(1),
  },
});
