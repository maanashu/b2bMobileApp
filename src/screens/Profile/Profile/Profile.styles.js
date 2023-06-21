import { Fonts } from "@/assets";
import { COLORS, SF, SH, ShadowStyles, SW } from "@/theme";
import { StyleSheet } from "react-native";
import { ms, s, verticalScale, vs } from "react-native-size-matters";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: "center",
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
    backgroundColor: COLORS.white,
    alignItems: "center",
  },
  headerText: {
    fontFamily: Fonts.SemiBold,
    color: COLORS.black,
    fontSize: s(14),
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
    paddingHorizontal: ms(20),
    paddingVertical: SH(15),
  },
  filterText: {
    fontFamily: Fonts.SemiBold,
    color: COLORS.white,
    marginRight: SW(1),
    fontSize: SF(14),
  },
  headerIconView: {
    height: SH(29),
    paddingHorizontal: SW(8),
    backgroundColor: COLORS.primary,
    borderRadius: ms(20),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: SW(0.5),
    marginTop: SH(0.5),
  },
  filterIcon: {
    height: vs(16),
    width: ms(16),
    marginLeft: SW(1),
    marginTop: SH(0.5),
  },
  tabButtonView: {
    borderRadius: 20,
    width: ms(65),
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
  userView: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: ms(8),
    paddingHorizontal: ms(10),
    paddingVertical: vs(10),
    ...ShadowStyles.shadow2,
    marginHorizontal: ms(1),
  },
  userInnerView: {
    marginLeft: ms(10),
    flex: 1,
  },
  usernameText: {
    fontFamily: Fonts.SemiBold,
    color: COLORS.darkGrey,
    fontSize: ms(14),
  },
  addressText: {
    fontFamily: Fonts.Regular,
    color: COLORS.light_grey,
    fontSize: ms(10),
    width: "80%",
  },
  manufacturerText: {
    fontFamily: Fonts.SemiBold,
    color: COLORS.darkGrey,
    fontSize: ms(12),
    marginTop: vs(2),
  },
  profileOptions: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: ms(8),
    paddingHorizontal: ms(10),
    paddingVertical: vs(10),
    ...ShadowStyles.shadow2,
    justifyContent: "space-between",
    marginHorizontal: ms(1),
  },
  innerRowView: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconStyle: {
    height: ms(20),
    width: ms(20),
  },
  forwardIcon: {
    height: ms(17),
    width: ms(17),
  },
  buttonStyle: {
    height: verticalScale(40),
    borderWidth: 1,
    borderColor: COLORS.termsBorder,
    backgroundColor: COLORS.white,
    marginBottom: vs(15),
  },
  buttonText: {
    color: COLORS.darkGrey,
  },
  titleText: {
    fontFamily: Fonts.Regular,
    color: COLORS.darkGrey,
  },
  usernameRowView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  mapIconView: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: vs(2),
    left: SW(-2),
  },
});
