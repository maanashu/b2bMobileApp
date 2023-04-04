import { Fonts } from "@/assets";
import { COLORS } from "@/theme/Colors";
import { SH, SF, SW } from "@/theme/ScalerDimensions";
import { StyleSheet } from "react-native";
import { moderateScale, ms } from "react-native-size-matters";

export const styles = StyleSheet.create({
  outerBorderView: {
    borderWidth: 1,
    borderColor: COLORS.light_border,
    paddingHorizontal: SW(10),
    paddingTop: SH(20),
    paddingBottom: SH(15),
    borderRadius: 8,
  },
  headingText: {
    fontFamily: Fonts.Regular,
    fontSize: SF(15),
    color: COLORS.darkGrey2,
    paddingLeft: SW(3),
  },
  productDetailHeading: {},
  marlboroPicStyle: {
    flex: 1,
    height: SH(200),
    width: "100%",
    alignSelf: "center",
  },
  headingMaisonText: {
    fontFamily: Fonts.MaisonRegular,
    color: COLORS.light_grey,
    marginBottom: SH(5),
    fontSize: SF(16),
  },
  maisonProductDetailHeading: {
    fontFamily: Fonts.MaisonRegular,
    color: COLORS.darkGrey,
    marginBottom: SH(8),
    paddingLeft: SW(3),
  },
  ProductDetailHeading: {
    fontFamily: Fonts.MaisonRegular,
    color: COLORS.text,
    paddingLeft: SW(3),
    marginBottom: SH(15),
  },
  buttonStyle: {
    height: SH(50),
  },
  dropDownStyle: {
    width: SW(310),
    alignSelf: "center",
    borderRadius: SW(5),
  },
  buttonTextStyle: {
    flex: 1,
    alignSelf: "center",
    color: COLORS.darkGrey,
    fontSize: SF(14),
    fontFamily: Fonts.Italic,
  },
});
