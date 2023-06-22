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
    fontSize: SF(15),
    paddingHorizontal: 5,
  },
  Item: {
    borderRadius: SW(8),
  },
  headerText: {
    color: COLORS.darkGrey,
    fontFamily: Fonts.SemiBold,
    fontSize: SF(16),
    marginLeft: SW(5),
  },
  textView: {
    position: "absolute",
    bottom: 0,
    paddingBottom: SH(15),
    paddingHorizontal: SW(10),
  },
  sellerNameText: {
    color: "white",
    fontFamily: Fonts.SemiBold,
    fontSize: SF(16),
    marginLeft: SW(6),
  },
  startIcon: {
    height: SH(20),
    width: SH(20),
  },
  detailText: {
    marginLeft: SW(4),
    color: COLORS.white,
    fontFamily: Fonts.Regular,
    fontSize: SF(13),
  },
});
