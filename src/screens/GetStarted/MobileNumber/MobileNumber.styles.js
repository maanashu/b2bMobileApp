import { StyleSheet, Dimensions } from "react-native";
import { SH, SW, COLORS, SF } from "@/theme";
import { Fonts } from "@/assets";
import { moderateScale } from "react-native-size-matters";
const windowWidth = Dimensions.get("window").width;
export const styles = StyleSheet.create({
  loginImg: {
    height: SH(200),
    width: SW(232),
    resizeMode: "contain",
    alignSelf: "center",
  },
  logoimg: {
    height: SH(50),
    width: SW(100),
  },
  alignSelfCenter: {
    alignSelf: "center",
  },

  textInputContainer: {
    backgroundColor: COLORS.placeHolder,
    paddingHorizontal: SW(10),
    color: COLORS.black,
    fontSize: SF(16),
    fontFamily: Fonts.Italic,
    width: SW(200),
  },
  textInputView: {
    paddingHorizontal: SW(12),
    borderWidth: 0,
    alignItems: "center",
    flexDirection: "row",
    height: SH(50),
    backgroundColor: COLORS.placeHolder,
    borderRadius: 5,
    marginTop: 16,
    width: windowWidth * 0.92,
    alignSelf: "center",
  },
  codeText: {
    color: COLORS.black,
    fontSize: SF(18),
    fontFamily: Fonts.Regular,
  },
  blueLogo: {
    width: SW(160),
    height: SH(60),
    resizeMode: "contain",
    alignSelf: "center",
  },
  enterMobile: {
    color: COLORS.text,
    fontSize: SF(24),
    fontFamily: Fonts.MaisonMonoBold,
    paddingHorizontal: moderateScale(20),
  },
  pleaseEnterMobile: {
    color: COLORS.darkGrey,
    fontSize: SF(16),
    fontFamily: Fonts.Regular,
    paddingHorizontal: moderateScale(20),
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
});
