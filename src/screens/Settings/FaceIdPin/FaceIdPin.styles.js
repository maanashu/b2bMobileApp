import { Fonts } from "@/assets";
import { SF, SH, SW, COLORS, ShadowStyles } from "@/theme";
import { StyleSheet, Dimensions } from "react-native";
import {
  moderateScale,
  ms,
  s,
  verticalScale,
  vs,
} from "react-native-size-matters";
const windowWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  mainView: {
    paddingHorizontal: ms(20),
    flex: 1,
  },
  rowView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  switchIcon: {
    height: SH(15),
    width: SW(25),
  },
  textStyle: {
    fontFamily: Fonts.Regular,
    fontSize: SF(14),
    color: COLORS.text,
  },
  topNotiView: {
    borderWidth: 1,
    paddingHorizontal: SW(20),
    paddingVertical: SH(15),
    borderRadius: 10,
    borderColor: COLORS.light_border,
  },
  faceIconStyle: {
    height: SH(100),
    width: SW(100),
    alignSelf: "center",
  },
  headingBold: {
    fontFamily: Fonts.SemiBold,
    fontSize: SF(16),
    color: COLORS.secondary,
    marginBottom: SH(10),
  },
  bottomLine: {
    borderBottomWidth: SH(0.5),
    borderColor: COLORS.termsBorder,
  },
  smallText: {
    fontFamily: Fonts.Regular,
    fontSize: SF(13),
    color: COLORS.light_grey,
  },
  arrowStyle: {
    height: SH(12),
    width: SW(10),
    tintColor: COLORS.light_grey,
  },
  pinButton: {
    paddingHorizontal: SW(20),
    ...ShadowStyles.shadow2,
    backgroundColor: COLORS.white,
    borderRadius: 6,
    paddingHorizontal: SH(20),
    paddingVertical: SH(15),
  },
  bottomTexts: {
    fontFamily: Fonts.Regular,
    fontSize: SF(16),
    color: COLORS.darkGrey,
  },
});
