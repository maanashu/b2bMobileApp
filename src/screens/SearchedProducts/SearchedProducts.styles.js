import { SH, SW, SF, COLORS, ShadowStyles } from "@/theme";
import { Fonts } from "@/assets";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9F9F9",
  },
  sectionHeaderName: {
    color: COLORS.darkGrey,
    fontSize: SF(18),
    fontFamily: Fonts.Regular,
  },
  productImageStyle: {
    height: SH(120),
    width: SW(150),
  },
  productName: {
    color: COLORS.darkGrey,
    fontFamily: Fonts.Regular,
    fontSize: SF(13),
    paddingHorizontal: 5,
    width: "90%",
  },
  priceText: {
    color: COLORS.primary,
    fontFamily: Fonts.SemiBold,
    fontSize: SF(15),
    alignSelf: "flex-start",
    paddingHorizontal: SW(12),
  },
  Item: {
    backgroundColor: "white",
    paddingBottom: SH(15),
    width: SW(120),
    alignItems: "center",
    borderRadius: SW(8),
    flex: 1 / 2,
    margin: 5,
  },
  headerText: {
    color: COLORS.darkGrey,
    fontFamily: Fonts.SemiBold,
    fontSize: SF(16),
    marginLeft: SW(5),
  },
});
