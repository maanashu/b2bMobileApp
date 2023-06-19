import { SH, SW, SF, COLORS, ShadowStyles } from "@/theme";
import { Fonts } from "@/assets";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
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
    backgroundColor: "white",
    paddingBottom: SH(15),
    width: SW(130),
    alignItems: "center",
    borderRadius: SW(8),
  },
});
