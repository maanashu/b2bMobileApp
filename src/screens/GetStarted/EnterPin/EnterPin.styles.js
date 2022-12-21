import { StyleSheet, Dimensions } from "react-native";
import { SH, SW, SF, COLORS, ShadowStyles } from "@/theme";
import { Fonts } from "@/assets";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  formContainer: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  alignCenter: {
    alignSelf: "center",
  },

  logo: {
    height: SH(104),
    width: SW(278),
  },
  cellRoot: {
    backgroundColor: COLORS.placeHolder,
    height: moderateScale(50),
    width: moderateScale(50),
    // height: moderateScale(50),
    // width: moderateScale(50),
    borderRadius: moderateScale(50),
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: COLORS.lightSky,
    marginHorizontal: moderateScale(5),
  },
  cellText: {
    fontFamily: Fonts.Medium,
    fontSize: scale(20),
    color: COLORS.black,
  },
  enterPin: {
    fontFamily: Fonts.Regular,
    fontSize: SF(16),
    color: COLORS.grey,
  },
  loginButton: {
    backgroundColor: COLORS.primary,
    borderColor: "transparent",
    height: SH(54),
    width: windowWidth * 0.92,
    alignSelf: "center",
  },
  text: {
    color: COLORS.white,
  },
  headerContainer: {
    height: SH(54),
    ...ShadowStyles.shadow,
    backgroundColor: COLORS.white,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: moderateScale(10),
    // borderWidth: 1,
    width: windowWidth,
    alignSelf: "center",
  },
  backArrow: {
    width: SW(20),
    height: SH(20),
    resizeMode: "contain",
  },
  displayFlex: {
    flexDirection: "row",
    alignItems: "center",
  },
  setPin: {
    fontFamily: Fonts.SemiBold,
    color: COLORS.darkGrey,
    fontSize: SF(16),
  },
  cancel: {
    fontFamily: Fonts.Regular,
    color: COLORS.primary,
    fontSize: SF(12),
  },
  enterYourPin: {
    fontFamily: Fonts.Regular,
    color: COLORS.grey,
    fontSize: SF(16),
  },
});
