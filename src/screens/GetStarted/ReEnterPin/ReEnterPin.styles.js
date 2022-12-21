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
    // fontSize:SF(14)
  },
  loginText: {
    color: COLORS.white,
    fontSize: SF(14),
  },
  headerContainer: {
    height: SH(54),
    // justifyContent: "center",
    // borderWidth:1,
    ...ShadowStyles.shadow,
    backgroundColor: COLORS.white,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: moderateScale(10),
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
  modalView: {
    width: windowWidth * 0.8,
    height: SH(266),
    backgroundColor: COLORS.white,
    borderRadius: 15,
    alignSelf: "center",
    alignItems: "center",
  },
  logIn: {
    width: windowWidth * 0.8,
    backgroundColor: COLORS.sky,
    height: SH(46),
    borderRadius: 0,
    borderBottomLeftRadius: 15,
    borderBottomEndRadius: 15,
    borderColor: COLORS.sky,
  },
  done: {
    fontFamily: Fonts.MaisonMonoBold,
    color: COLORS.sky,
    fontSize: SF(24),
  },
  youVerified: {
    fontFamily: Fonts.Regular,
    color: COLORS.grey,
    fontSize: SF(14),
  },
  newPinSet: {
    fontFamily: Fonts.MaisonMonoBold,
    color: COLORS.darkGrey,
    fontSize: SF(18),
  },
  Verified: {
    width: SW(54),
    height: SH(54),
    resizeMode: "contain",
  },
});
