import { StyleSheet, Dimensions } from "react-native";
import { SH, SW, SF, COLORS } from "@/theme";
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
    width: SW(48),
    height: SW(48),
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
  },
  text: {
    color: COLORS.white,
  },
  headerContainer: {
    height: SH(54),
    justifyContent: "center",
  },
  backArrow: {
    widtrh: SW(20),
    height: SH(20),
    resizeMode: "contain",
  },
});
