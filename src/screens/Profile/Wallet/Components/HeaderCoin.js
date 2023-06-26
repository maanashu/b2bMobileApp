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
import { kFormatter } from "@/Utils/GlobalMethods";

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
          <View style={{ width: "75%" }}>
            <Text numberOfLines={1} style={styles.headerText}>
              {title}
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.coinButton}>
          <Text style={styles.buyText}>
            {" "}
            {kFormatter(wallet?.getWalletBalance?.sila_balance) || 0}
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
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontFamily: Fonts.SemiBold,
    color: COLORS.black,
    fontSize: SF(13),
  },
  coinButton: {
    height: SH(29),
    paddingHorizontal: SW(5),
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
