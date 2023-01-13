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
    backgroundColor: COLORS.white,
    height: vs(130),
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
    flexDirection: "row",
  },
  upperView: {
    height: vs(120),
    width: "100%",
    backgroundColor: COLORS.inputBorder,
    paddingHorizontal: ms(20),
    flexDirection: "row",
    alignItems: "center",
  },
  topBoldText: {
    fontFamily: Fonts.Bold,
    color: COLORS.primary,
    fontSize: ms(25),
    marginLeft: ms(20),
  },
  yewiView: {
    borderRadius: 10,
    paddingVertical: SH(12),
    backgroundColor: COLORS.white,
    ...ShadowStyles.shadow2,
    flex: 1,
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
    marginLeft: SW(7),
  },
  yewiClock: {
    height: SH(10),
    width: SW(9),
    marginLeft: SW(8),
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
  sendInquiryButton: {
    backgroundColor: COLORS.sky,
    height: vs(34),
    width: ms(110),
    borderRadius: ms(3),
    marginLeft: ms(5),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: ms(8),
  },
  sendInquiryText: {
    fontFamily: Fonts.SemiBold,
    color: COLORS.white,
    fontSize: ms(10),
  },
  sendInquiryIcon: {
    height: vs(16),
    width: ms(19),
  },
  itemS: {
    backgroundColor: COLORS.white,
    borderColor: "blue",
    paddingVertical: SH(5),
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    margin: 2,
    borderRadius: 5,
    borderColor: COLORS.lightBlue,
    borderWidth: 1,
  },
});
