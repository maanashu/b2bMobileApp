import { Fonts } from "@/assets";
import { ShadowStyles } from "@/theme";
import { COLORS } from "@/theme/Colors";
import { SF, SH, SW } from "@/theme/ScalerDimensions";
import { StyleSheet } from "react-native";
import {
  moderateScale,
  ms,
  s,
  verticalScale,
  vs,
} from "react-native-size-matters";
import { Colors } from "react-native/Libraries/NewAppScreen";

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
    ...ShadowStyles.shadow,
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
    fontSize: s(12),
  },
  searchIcon: {
    height: vs(25),
  },
  crossIcon: {
    height: SH(35),
    width: SW(40),
  },
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  filterText: {
    fontFamily: Fonts.Regular,
    color: COLORS.white,
  },
  headerIconView: {
    height: SH(35),
    width: SW(80),
    backgroundColor: COLORS.primary,
    borderRadius: ms(20),
    flexDirection: "row",
    paddingHorizontal: ms(10),
    alignItems: "center",
    justifyContent: "space-between",
  },
  filterIcon: {
    height: vs(22),
    width: ms(18),
  },
  tabButtonView: {
    borderRadius: 20,
    width: ms(65),
  },
  upperView: {
    flex: 1,
    height: vs(50),
    width: "100%",
    backgroundColor: COLORS.inputBorder,
    paddingHorizontal: ms(20),

    alignItems: "center",
  },
  topBoldText: {
    fontFamily: Fonts.Bold,
    color: COLORS.primary,
    fontSize: ms(25),
    marginLeft: ms(20),
  },
  certificationTab: {
    borderRadius: 10,
    paddingVertical: SH(10),
    backgroundColor: COLORS.white,
    ...ShadowStyles.shadow,
    flex: 1,
    height: SH(170),
    paddingHorizontal: SW(10),
    marginBottom: SW(2),
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
  sideIcons: {
    height: SH(24),
    width: SW(16),
    marginRight: SW(5),
  },
  claimNowIcon: {
    height: SH(24),
    width: SW(22),
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
  rowMainCard: {
    flex: 1,
    alignItems: "center",
    paddingTop: verticalScale(1),
    ...ShadowStyles.shadow2,
  },
  videoView: {
    width: "100%",
    flex: 1,
    paddingHorizontal: 20,
  },
  businessDetailView: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
  },
  businessDetailsHeading: {
    fontFamily: Fonts.SemiBold,
    fontSize: s(13),
    color: COLORS.darkGrey,
  },
  businessTab: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  businessText: {
    fontFamily: Fonts.Regular,
    fontSize: s(11),
    color: COLORS.darkGrey,
  },
  ratingView: {
    backgroundColor: COLORS.white,
    ...ShadowStyles.shadow2,
    width: "40%",
    borderRadius: 10,
    paddingHorizontal: moderateScale(5),
    paddingVertical: verticalScale(20),
    alignItems: "center",
  },
  ratingText: {
    fontFamily: Fonts.Bold,
    fontSize: s(25),
    color: COLORS.darkGrey,
  },
  totalRatingText: {
    fontFamily: Fonts.Regular,
    fontSize: s(15),
    color: COLORS.darkGrey,
  },
  videoStyle: {
    width: "100%",
    height: vs(150),
    borderRadius: ms(10),
  },
  companyReviewText: {
    fontFamily: Fonts.Regular,
    fontSize: s(11),
    color: COLORS.darkGrey,
  },
  certificationHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  businessStyle: {
    backgroundColor: COLORS.white,
    width: "56%",
    paddingHorizontal: ms(7),
    paddingVertical: vs(7),
    borderRadius: 10,
    ...ShadowStyles.shadow,
  },
  allVideosView: {
    height: vs(40),
    backgroundColor: COLORS.placeHolder,
    width: "100%",
    borderRadius: ms(5),
    paddingHorizontal: ms(10),
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  allVideosText: {
    color: COLORS.darkGrey,
    fontFamily: Fonts.SemiBold,
  },
  ShoesStyle: {
    height: vs(180),
    width: 180,
    ...ShadowStyles.shadow,
    borderRadius: 1,
    backgroundColor: COLORS.white,
    margin: 2,
    flex: 1,
    alignItems: "center",
  },
  bottomsheetHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headingText: {
    fontFamily: Fonts.SemiBold,
    color: COLORS.darkGrey,
    fontSize: moderateScale(18),
  },
  subHeadingText: {
    fontFamily: Fonts.SemiBold,
    color: COLORS.darkGrey,
    fontSize: moderateScale(14),
    paddingVertical: verticalScale(5),
  },
  detailText: {
    paddingVertical: verticalScale(5),
    color: COLORS.darkGrey,
    fontFamily: Fonts.Regular,
    fontSize: moderateScale(12),
  },
  detailTextView: {
    backgroundColor: COLORS.white,
    borderRadius: moderateScale(10),
    ...ShadowStyles.shadow2,
    marginHorizontal: moderateScale(1),
  },
  overviewView: {
    backgroundColor: COLORS.white,
    ...ShadowStyles.shadow2,
    borderRadius: moderateScale(10),
    marginHorizontal: moderateScale(1),
    paddingHorizontal: moderateScale(5),
  },
  ratingViewSheet: {
    flexDirection: "row",
    alignItems: "center",
    width: "65%",
    justifyContent: "space-between",
  },
  reviewsView: {
    paddingBottom: vs(5),

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  customerRatingView: {
    backgroundColor: COLORS.inputBorder,
    ...ShadowStyles.shadow2,
    borderRadius: moderateScale(10),
    marginHorizontal: moderateScale(1),
    paddingHorizontal: moderateScale(5),
    marginBottom: vs(10),
  },
  innerView: {
    flexDirection: "row",
    alignItems: "center",
  },
  customerReviewText: {
    fontFamily: Fonts.Regular,
    fontSize: ms(12),
    color: COLORS.darkGrey,
  },
  purchasedProductView: {
    backgroundColor: COLORS.white,
    borderRadius: ms(7),
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: ms(12),
    marginBottom: vs(10),
    height: vs(65),
    paddingHorizontal: ms(9),
    flex: 1,
    justifyContent: "space-between",
  },
  ratingTextstar: {
    fontFamily: Fonts.Regular,
    fontSize: ms(12),
    color: COLORS.darkGrey,
  },
});
