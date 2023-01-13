import { Fonts } from "@/assets";
import { ShadowStyles } from "@/theme";
import { COLORS } from "@/theme/Colors";
import { SF, SH, SW } from "@/theme/ScalerDimensions";
import { Dimensions, StyleSheet } from "react-native";
import { ms, vs } from "react-native-size-matters";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  roundIcons: {
    height: SH(56),
    width: SW(56),
  },
  item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: SH(2),
  },
  title: {
    fontSize: SF(12),
    fontFamily: Fonts.Regular,
    color: COLORS.darkGrey2,
  },
  commonFlatlistText: {
    fontSize: SF(14),
    color: COLORS.light_grey,
    fontFamily: Fonts.Regular,
  },
  yiwuPriceText: {
    fontSize: SF(14),
    color: COLORS.darkGrey,
    fontFamily: Fonts.SemiBold,
  },
  yiwuItemTitleText: {
    fontSize: SF(12),
    color: COLORS.light_grey,
    fontFamily: Fonts.Regular,
  },
  ProductView: {
    borderRadius: 10,
    paddingVertical: SH(10),
    marginHorizontal: SW(20),
    backgroundColor: COLORS.placeholder,
    flex: 1,
    height: SH(180),

    paddingHorizontal: SW(10),
  },
  innerView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: SW(25),
  },
  secondView: {
    height: SH(85),
    width: SW(100),
    borderRadius: 5,
  },
  forwardIcon: {
    height: SH(10),
    width: SW(6),
    marginTop: SH(5),
  },
  smallText: {
    color: COLORS.text,
    fontSize: SF(14),
    fontFamily: Fonts.Regular,
  },
  yewiView: {
    borderRadius: 10,
    paddingVertical: SH(10),
    marginHorizontal: SW(20),
    backgroundColor: COLORS.white,
    ...ShadowStyles.shadow2,
    flex: 1,
    height: SH(210),
    paddingHorizontal: SW(10),
  },
  yewiInnerView: {
    flexDirection: "row",
    marginHorizontal: SW(5),
  },
  thirdView: {
    height: SH(74),
    width: SW(74),
    borderRadius: 5,
  },
  logoYewi: {
    height: SH(36),
    width: SW(36),
  },
  yewiHeadingText: {
    color: COLORS.black,
    fontSize: SF(15),
    fontFamily: Fonts.SemiBold,
  },
  certified: {
    height: SH(16),
    width: SW(39),
  },
  yewiIcons: {
    height: SH(14),
    width: SW(10),
    marginLeft: SW(5),
  },
  yewiSmallText: {
    fontSize: SF(10),
    fontFamily: Fonts.Regular,
  },
  yewistar: {
    height: SH(9),
    width: SW(9),
    marginLeft: SW(5),
  },
  yewiClock: {
    height: SH(10),
    width: SW(9),
    marginLeft: SW(5),
  },
  ShoesStyle: {
    width: 180,
    ...ShadowStyles.shadow2,
    borderRadius: 1,
    backgroundColor: COLORS.white,
    margin: 2,
    flex: 1,
    paddingVertical: SH(10),
  },
  productsTitle: {
    fontFamily: Fonts.SemiBold,
    fontSize: ms(12),
    color: COLORS.darkGrey,
    paddingHorizontal: ms(12),
  },
  productSubTitle: {
    fontFamily: Fonts.Regular,
    fontSize: ms(12),
    color: COLORS.darkGrey,
    paddingHorizontal: ms(12),
  },
  productsQuantity: {
    alignSelf: "flex-start",
    fontFamily: Fonts.Regular,
    paddingLeft: ms(12),
    fontSize: ms(9),
    color: COLORS.darkGrey,
    marginTop: vs(2),
  },
  priceText: {
    color: COLORS.primary,
    fontFamily: Fonts.SemiBold,
    fontSize: SF(16),
    paddingLeft: SW(12),
  },
  categoryText: {
    color: COLORS.primary,
    fontFamily: Fonts.Regular,
    fontSize: SF(12),
  },
  storeImg: {
    height: SH(140),
    width: Dimensions.get("window").width * 0.9,
    borderRadius: 10,
    alignSelf: "center",
  },
});
