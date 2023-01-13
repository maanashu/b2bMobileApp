import { Fonts } from "@/assets";
import { ShadowStyles } from "@/theme";
import { COLORS } from "@/theme/Colors";
import { SF, SH, SW } from "@/theme/ScalerDimensions";
import { StyleSheet } from "react-native";
import { moderateScale, ms, s, vs } from "react-native-size-matters";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 40,
  },
  formContainer: {
    borderRadius: 5,
    padding: 20,
    width: "100%",
  },
  favIcon: {
    height: SH(20),
    width: SW(20),
    marginRight: SW(22),
  },

  item: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.blue,
    borderRadius: 1,
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    margin: 2,
    borderRadius: 5,
    ...ShadowStyles.shadow2,
  },
  itemS: {
    backgroundColor: COLORS.white,
    borderColor: "blue",
    borderRadius: 1,
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    margin: 2,
    borderRadius: 5,
  },
  priceTitle: {
    color: COLORS.blue,
    fontSize: SF(25),
  },
  buttons: {
    height: SW(40),
    width: SW(110),
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: COLORS.sky,
    borderRadius: 3,
    justifyContent: "center",
  },
  buttonIcon: {
    height: ms(17),
    width: ms(17),
  },
  plusButtonIcon: {
    height: ms(12),
    width: ms(12),
  },
  headerText: {
    fontFamily: Fonts.SemiBold,

    color: COLORS.darkGrey2,
    fontSize: ms(14),
  },
  orderText: {
    fontFamily: Fonts.SemiBold,
    fontSize: ms(11),
    color: COLORS.white,
  },
  productHeading: {
    color: COLORS.darkGrey,
    fontFamily: Fonts.Bold,
    fontSize: ms(16),
  },
  productSubHeading: {
    fontFamily: Fonts.Regular,
    fontSize: ms(11),
  },
  chatText: {
    fontFamily: Fonts.SemiBold,
    fontSize: ms(11),
    color: COLORS.primary,
  },
  chatbutton: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    height: 40,
    width: SW(108),
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 3,
  },
  bigIcon: {
    height: vs(15),
    width: ms(20),
  },
  addToBagIcon: {
    height: SH(40),
    width: SW(165),
    backgroundColor: COLORS.sky,
    borderRadius: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buyNowIcon: {
    height: SH(40),
    width: SW(165),
    backgroundColor: COLORS.primary,
    borderRadius: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  smallIcons: {
    fontFamily: Fonts.Regular,
    fontSize: ms(11),
    color: COLORS.white,
  },
  yewiView: {
    borderRadius: 10,
    paddingVertical: SH(10),
    backgroundColor: COLORS.placeholder,
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
    fontSize: SF(14),
    fontFamily: Fonts.SemiBold,
  },
  certified: {
    height: SH(16),
    width: SW(39),
  },
  yewiIcons: {
    height: SH(14),
    width: SW(14),
    marginLeft: SW(5),
  },
  yewiSmallText: {
    fontSize: SF(10),
    fontFamily: Fonts.Regular,
  },
  yewistar: {
    height: SH(10),
    width: SW(10),
    marginLeft: SW(7),
  },
  yewiClock: {
    height: SH(10),
    width: SW(11),
    marginLeft: SW(5),
  },
  sideIcons: {
    height: SH(24),
    width: SW(16),
    marginRight: SW(5),
  },
  claimNowIcon: {
    height: SH(24),
    width: SW(22),
  },
  tradeIcon: {
    height: SH(24),
    width: SW(20),
    marginRight: SW(5),
  },
  forward: {
    height: SH(20),
    width: SW(10),
    marginHorizontal: SW(7),
  },
  checks: {
    height: SH(17),
    width: SW(15),
    marginRight: ms(3),
  },
  borderTop: {
    margin: 5,
    borderTopWidth: 1,
    borderTopColor: COLORS.termsBorder,
  },
  numRating: {
    height: 35,
    width: 120,
  },
  starRating: {
    height: 35,
    width: "100%",
  },
  viewAll: {
    alignItems: "flex-end",
    paddingHorizontal: SW(5),
    backgroundColor: COLORS.termsBorder,
    width: SW(90),
    alignSelf: "flex-end",
    height: SH(40),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  viewImage: {
    height: SH(60),
    width: SW(80),
    justifyContent: "flex-end",
  },
  ratingView: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
  },
  iconView: {
    flexDirection: "row",
    alignItems: "center",
  },
  trade: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    alignItems: "center",
  },
  sideIconView: {
    flexDirection: "row",
    alignItems: "center",
  },
  reviewText: {
    fontFamily: Fonts.SemiBold,
    color: COLORS.darkGrey2,
  },
  iconStyling: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    alignItems: "center",
  },
  starBadge: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },
  iconCenter: {
    flexDirection: "row",
    alignItems: "center",
  },
  yewiSmallView: {
    flexDirection: "row",
    alignItems: "center",
  },
  yewiDirection: {
    paddingHorizontal: SW(5),
    flexDirection: "row",
    alignItems: "center",
  },
  midView: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
  },
  queryIcons: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
  },
  mainView: {
    ...ShadowStyles.shadow2,
    backgroundColor: COLORS.white,
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: SH(15),
  },
  belowImage: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  semiBoldtext: {
    color: COLORS.black,
    fontSize: SF(21),
    fontFamily: Fonts.SemiBold,
  },
  productDetail: {
    flexDirection: "row",
  },
  detailText: {
    fontFamily: Fonts.Regular,
    color: COLORS.darkGrey,
    fontSize: ms(12),
  },
  questions: {
    color: COLORS.text,
    fontSize: SF(14),
    fontFamily: Fonts.Regular,
  },
  productAnswer: {
    color: COLORS.black,
    fontSize: SF(14),
    fontFamily: Fonts.Bold,
  },

  header: {
    height: SH(50),
    backgroundColor: COLORS.white,

    paddingHorizontal: SW(20),
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
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
    height: SH(27),
    width: SW(35),
    color: COLORS.black,
  },
  ShoesStyle: {
    width: 180,
    ...ShadowStyles.shadow2,
    borderRadius: 4,
    backgroundColor: COLORS.white,
    margin: 2,
    flex: 1,
    alignItems: "center",
    paddingVertical: SH(5),
  },
  recommended: {
    color: COLORS.black,
    fontSize: SF(18),
    paddingHorizontal: SW(5),
    fontFamily: Fonts.SemiBold,
  },
  companyServicesText: {
    fontFamily: Fonts.Regular,
    fontSize: SF(13),
    color: COLORS.darkGrey2,
    marginHorizontal: ms(5),
  },
  companyServicesBoldText: {
    fontFamily: Fonts.SemiBold,
    color: COLORS.black,
    fontSize: ms(12),
    marginHorizontal: ms(5),
  },
  paginationBoxStyle: {
    position: "absolute",
    bottom: 0,
    padding: 0,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
  imageComponentStyle: {
    borderRadius: 15,
    width: "85%",
    marginTop: 5,
  },
  boldTextStyle: {
    fontFamily: Fonts.Bold,
    color: COLORS.darkGrey,
    fontSize: ms(30),
  },
  simpleText: {
    fontFamily: Fonts.Regular,
    color: COLORS.darkGrey,
    fontSize: ms(25),
  },
  upperButtons: {
    alignItems: "center",
    justifyContent: "center",
    height: SH(50),
  },
  primaryColorText: {
    color: COLORS.primary,
    fontSize: SF(16),
    fontFamily: Fonts.SemiBold,
  },
  smallText: {
    color: COLORS.darkGrey2,
    fontSize: SF(12),
    fontFamily: Fonts.Regular,
  },
  starProduct: {
    flexDirection: "row",
    flex: 1,
    width: "100%",
  },
  viewAllText: {
    fontFamily: Fonts.Regular,
    color: COLORS.black,
    fontSize: SF(16),
  },
  shoeQuantityText: {
    fontFamily: Fonts.Regular,
    color: COLORS.light_grey,
    fontSize: SF(10),
  },
  shoesTextTitle: {
    paddingRight: 5,
    fontFamily: Fonts.SemiBold,
    color: COLORS.darkGrey,
  },
  shoesSubTitle: {
    paddingRight: 5,
    fontFamily: Fonts.Regular,
    color: COLORS.darkGrey,
  },
  aboutCompanyView: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: SH(5),
    justifyContent: "space-between",
  },
  aboutCompanyText: {
    fontFamily: Fonts.Regular,
    fontSize: SF(12),
    color: COLORS.darkGrey,
  },
  buttonView: {
    flexDirection: "row",
    alignItems: "center",
  },
  followButton: {
    paddingHorizontal: SW(5),
    paddingVertical: SH(2),
    backgroundColor: COLORS.blue,
    borderRadius: 5,
    marginRight: SW(10),
  },
  followText: {
    fontFamily: Fonts.Regular,
    fontSize: SF(14),
    color: COLORS.white,
  },
  visitButton: {
    paddingHorizontal: SW(5),
    paddingVertical: SH(3),
    backgroundColor: COLORS.white,
    borderRadius: 5,
    marginRight: SW(10),
  },
  visitText: {
    fontFamily: Fonts.Regular,
    fontSize: SF(14),
    color: COLORS.primary,
  },
});
