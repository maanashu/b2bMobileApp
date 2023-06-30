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
  greyBackView: {
    backgroundColor: COLORS.backgroundGrey,
    paddingHorizontal: SW(15),
    paddingTop: SH(20),
    paddingBottom: SH(15),
    borderRadius: 8,
  },
  bigHeadings: {
    fontFamily: Fonts.MaisonMonoBold,
    color: COLORS.darkGrey,
    fontSize: SF(18),
  },
  semiHeader: {
    fontFamily: Fonts.MaisonMonoBold,
    color: COLORS.darkGrey,
    fontSize: SF(16),
    marginBottom: SH(15),
  },
  smallText: {
    fontFamily: Fonts.MaisonRegular,
    color: COLORS.light_grey,
    fontSize: SF(12),
    marginBottom: SH(1),
  },
  cartonText: {
    fontFamily: Fonts.Regular,
    color: COLORS.text,
    fontSize: SF(12),
    marginRight: SW(3),
  },
  priceText: {
    fontFamily: Fonts.SemiBold,
    color: COLORS.darkGrey,
    fontSize: SF(18),
  },
  rowView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputView: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    width: "100%",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: COLORS.light_border,
    height: SH(50),
  },
  dollarPrice: {
    fontFamily: Fonts.SemiBold,
    fontSize: SF(18),
    marginHorizontal: SW(5),
    marginBottom: SH(5),
    color: COLORS.darkGrey,
  },
  minOrderInput: {
    width: SW(77),
    borderRightWidth: 1,
    marginRight: SW(10),
    borderColor: COLORS.light_border,
  },
  offerpriceInput: {
    width: SW(70),
    borderRightWidth: 1,
    marginRight: SW(10),
    borderColor: COLORS.light_border,
  },
  rightLine: {
    borderRightWidth: 1,
    borderColor: COLORS.light_border,
  },
  bottomLine: {
    borderBottomWidth: 1,
    borderColor: COLORS.termsBorder,
  },
  dateField: {
    borderBottomWidth: 0,
    backgroundColor: "transparent",
    width: SW(270),
    paddingLeft: SW(10),
    fontSize: SW(12),
  },
  calendarIcon: {
    tintColor: COLORS.light_grey,
    height: SH(22),
    width: SW(22),
  },
  dateFieldView: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 6,
    height: SH(50),
  },
});
