import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS } from "@/theme/Colors";
import { SF, SH, SW } from "@/theme/ScalerDimensions";
import { StyleSheet } from "react-native";
import { ms, s, verticalScale } from "react-native-size-matters";
import { goBack } from "@/navigation/NavigationRef";
import { Fonts, backArrow, coinStack, search } from "@/assets";
import { ShadowStyles } from "@/theme";
import { kFormatter } from "@/Utils/GlobalMethods";
import { getWallet } from "@/selectors/WalletSelector";
import { useSelector } from "react-redux";

export function NameHeaderCoins({
  title,
  backRequired,
  amount,
  onPress,
  searchRequired,
}) {
  const wallet = useSelector(getWallet);
  return (
    <View style={styles.header}>
      <View style={styles.headerInnerView}>
        {backRequired ? (
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
            onPress={onPress}
          >
            <Image
              resizeMode="contain"
              source={backArrow}
              style={{ height: 30, width: 30 }}
            />
            <Text style={styles.headerText}>{title}</Text>
          </TouchableOpacity>
        ) : (
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.headerText}>{title}</Text>
          </View>
        )}
        <View style={styles.rowView}>
          {searchRequired && (
            <TouchableOpacity>
              <Image
                resizeMode="contain"
                source={search}
                style={styles.searchIcon}
              />
            </TouchableOpacity>
          )}

          <TouchableOpacity
            style={styles.coinView}
            onPress={() => navigate(NAVIGATION.jbrWallet)}
          >
            <Text style={styles.balanceText}>
              {kFormatter(wallet?.getWalletBalance?.sila_balance) || 0}
            </Text>
            <Image
              source={coinStack}
              style={styles.coinIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
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
  coinView: {
    height: SH(29),
    paddingHorizontal: SW(8),
    backgroundColor: COLORS.primary,
    borderRadius: ms(20),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: SW(2),
  },
  coinIcon: {
    height: SH(16),
    width: SW(16),
    marginLeft: SW(1),
  },
  balanceText: {
    fontFamily: Fonts.SemiBold,
    color: COLORS.white,
    marginRight: SW(1),
    fontSize: SF(14),
  },
  rowView: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchIcon: {
    height: SH(30),
    width: SW(30),
    marginRight: SW(12),
  },
});
