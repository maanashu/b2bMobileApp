import { Fonts } from "@/assets";
import { ShadowStyles } from "@/theme";
import { COLORS } from "@/theme/Colors";
import { SF, SH, SW } from "@/theme/ScalerDimensions";
import { Dimensions, StyleSheet } from "react-native";
import { ms, s, vs } from "react-native-size-matters";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  roundIcons: {
    height: SH(56),
    width: SW(54),
    borderRadius: SW(10),
  },
  item: {
    alignItems: "center",
    padding: SH(2),
    marginBottom: SH(8),
    justifyContent: "space-between",
    marginVertical: SH(8),
    flex: 1 / 4,
  },
  itemS: {
    padding: SH(2),
    marginBottom: SH(10),
    marginBottom: 4,
    margin: SH(8),
    flex: 1 / 3,
  },
  title: {
    fontSize: SF(12),
    fontFamily: Fonts.Regular,
    color: COLORS.darkGrey2,
    marginTop: SH(5),
  },
  commonFlatlistText: {
    fontSize: SF(14),
    color: COLORS.light_grey,
    fontFamily: Fonts.Regular,
    paddingLeft: SW(2),
    textAlign: "center",
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
    flex: 1 / 3,
    paddingHorizontal: SW(10),
  },
  innerView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: SW(5),
  },
  secondView: {
    height: SH(75),
    width: SW(100),
    borderRadius: 5,
  },
  forwardIcon: {
    height: SH(15),
    width: SW(15),
    marginTop: SH(3),
  },
  smallText: {
    color: COLORS.text,
    fontSize: SF(15),
    fontFamily: Fonts.Regular,
  },
  yewiView: {
    borderRadius: 10,
    paddingTop: SH(15),
    paddingBottom: SH(5),
    marginHorizontal: SW(20),
    backgroundColor: COLORS.white,
    ...ShadowStyles.shadow2,
    flex: 1,
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
    ...ShadowStyles.shadow4,
    borderRadius: s(5),
    backgroundColor: COLORS.white,
    margin: 2,
    flex: 1 / 2,
  },
  productsTitle: {
    fontFamily: Fonts.SemiBold,
    fontSize: ms(12),
    color: COLORS.darkGrey,
    paddingHorizontal: ms(12),
    marginTop: SH(4),
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
    height: SH(185),
    width: Dimensions.get("window").width * 0.9,
    borderRadius: 10,
    alignSelf: "center",
  },
  headingText: {
    color: COLORS.black,
    fontSize: SF(16),
    fontFamily: Fonts.SemiBold,
  },
  bottomListView: {
    paddingHorizontal: ms(20),
    paddingVertical: vs(10),
    flex: 1,
  },
  swiperView: {
    paddingTop: SH(10),
    paddingBottom: SH(30),
  },
  allButton: {
    backgroundColor: COLORS.white,
    ...ShadowStyles.shadow2,
    borderRadius: SW(10),
    alignItems: "center",
    justifyContent: "center",
  },
  allIcon: {
    height: SH(56),
    width: SW(54),
  },
  headerText: {
    color: COLORS.darkGrey,
    fontSize: SF(16),
    fontFamily: Fonts.SemiBold,
    marginLeft: SW(6),
  },
  forwardIconStyle: {
    height: SH(15),
    width: SW(15),
    marginTop: SH(3),
  },
  forwarIconStyle: {
    height: SH(15),
    width: SH(15),
  },
});
