import { Fonts } from "@/assets";
import { COLORS, ShadowStyles } from "@/theme";
import { SH, SF, SW } from "@/theme/ScalerDimensions";
import { StyleSheet } from "react-native";
import { moderateScale, verticalScale } from "react-native-size-matters";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  innerView: {
    marginTop: SH(90),
    backgroundColor: COLORS.white,
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 10,
    shadowOpacity: 10,
    shadowRadius: 5,
    ...ShadowStyles.shadow,
  },
  mainImg: {
    marginTop: SH(10),
    height: SH(260),
    width: SW(242),
    position: "absolute",
    alignSelf: "center",
    resizeMode: "contain",
  },
  backImage: {
    width: SW(410),
    height: SW(250),
    position: "absolute",
    zIndex: -99,
    resizeMode: "contain",
    marginTop: verticalScale(30),
  },
  skipButton: {
    backgroundColor: COLORS.lightBlue,
    height: SW(24),
    width: SW(50),
    alignSelf: "flex-end",
    flexDirection: "row",
    marginRight: SW(20),
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  skipText: {
    color: COLORS.darkGrey,
    fontFamily: Fonts.Regular,
    fontSize: SF(12),
  },
  heading: {
    fontSize: SF(18),
    color: COLORS.black,
    // textAlign: "center",
    fontFamily: Fonts.MaisonMonoBold,
  },
  secondHeading: {
    fontSize: SF(14),
    color: COLORS.grey,
    fontFamily: Fonts.Regular,
  },
  item: {
    height: SH(36),
    marginVertical: 8,
    marginRight: 16,
    justifyContent: "center",
    backgroundColor: COLORS.placeHolder,
    borderColor: COLORS.lightSky,
    borderWidth: 1,
    borderRadius: 3,
  },
  title: {
    fontSize: SF(16),
    fontFamily: Fonts.Regular,
    paddingHorizontal: moderateScale(12),
    color: COLORS.btnText,
  },
  flatlistView: {
    marginTop: SH(15),
    flex: 1,
    paddingHorizontal: 20,
  },
  buttonStyle: {
    backgroundColor: COLORS.placeHolder,
    borderColor: "transparent",
    borderRadius: 5,
    height: SW(48),
    elevation: 2,
  },
  textStyle: {
    color: COLORS.btnText,
    fontFamily: Fonts.Regular,
  },
});
