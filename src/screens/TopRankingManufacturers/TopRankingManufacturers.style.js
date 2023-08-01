import { Fonts } from "@/assets";
import { ShadowStyles } from "@/theme";
import { COLORS } from "@/theme/Colors";
import { SF, SH, SW } from "@/theme/ScalerDimensions";
import { StyleSheet } from "react-native";
import { ms, s, verticalScale, vs } from "react-native-size-matters";
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
    paddingVertical: SH(5),
    width: "100%",
    backgroundColor: COLORS.inputBorder,
    paddingHorizontal: ms(10),
    position: "relative",
  },
  upperRowView: {
    paddingVertical: SH(10),
    paddingHorizontal: ms(10),
    flexDirection: "row",
    alignItems: "center",
  },
  topBoldText: {
    fontFamily: Fonts.SemiBold,
    color: COLORS.primary,
    fontSize: ms(20),
  },
  yewiView: {
    borderRadius: 10,
    paddingVertical: SH(11),
    backgroundColor: COLORS.white,
    ...ShadowStyles.shadow2,
    flex: 1,
    height: SH(207),
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
    ...ShadowStyles.shadow,
  },
  sendInquiryButton: {
    flex: 1,
    backgroundColor: COLORS.sky,
    height: ms(36),
    width: ms(121),
    borderRadius: ms(3),
    marginLeft: SW(15),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: ms(8),
  },
  sendInquiryText: {
    fontFamily: Fonts.SemiBold,
    color: COLORS.white,
    fontSize: ms(12),
  },
  sendInquiryIcon: {
    height: ms(15),
    width: ms(15),
  },
  upperHalfView: {
    flex: 1,
    paddingLeft: SW(10),
  },
  subtitleText: {
    fontFamily: Fonts.Regular,
    color: COLORS.light_grey,
    fontSize: SF(12),
    textAlign: "justify",
  },
  manufacturesBackground: {
    paddingVertical: SH(15),
    borderRadius: ms(5),
    ...ShadowStyles.shadow4,
    backgroundColor: COLORS.white,
    marginHorizontal: ms(5),
  },
});
