import { StyleSheet, Dimensions } from "react-native";
import { COLORS, SH, SW, SF } from "@/theme";
import { Fonts } from "@/assets";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

const windowWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  verifyImg: {
    height: SH(200),
    width: SW(230),
  },
  loginImg: {
    height: SH(200),
    width: SW(232),
    resizeMode: "contain",
    alignSelf: "center",
  },

  alignSelfCenter: {
    alignSelf: "center",
  },

  row: {
    flexDirection: "row",
  },

  cellRoot: {
    backgroundColor: COLORS.placeHolder,
    height: moderateScale(50),
    width: moderateScale(50),
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
  verifyYour: {
    fontFamily: Fonts.MaisonRegular,
    fontSize: SF(30),
    color: COLORS.darkGrey,
    alignSelf: "center",
  },
  enterOtpCode: {
    fontFamily: Fonts.Regular,
    fontSize: SF(16),
    color: COLORS.darkGrey,
    alignSelf: "center",
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
  resend: {
    fontFamily: Fonts.SemiBold,
    fontSize: SF(16),
    color: COLORS.primary,
  },
  loaderStyle: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
});
