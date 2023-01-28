import { SH, SW, SF, COLORS, ShadowStyles } from "@/theme";
import { Fonts } from "@/assets";
import { StyleSheet } from "react-native";

import {
  moderateScale,
  ms,
  verticalScale,
  vs,
} from "react-native-size-matters";

export const styles = StyleSheet.create({
  tabButtonView: {
    borderRadius: 20,
    height: SH(30),
    // width: SW(95),
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    paddingHorizontal: SW(10),
  },
  headingText: {
    fontFamily: Fonts.Bold,
    fontSize: SF(20),
    color: COLORS.darkGrey,
  },
  touchableView: {
    paddingHorizontal: SW(10),
    paddingVertical: SH(20),
    backgroundColor: COLORS.white,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rowView: {
    flexDirection: "row",
    alignItems: "center",
  },
  imgBackground: {
    borderRadius: SW(17.5),
    backgroundColor: COLORS.input_bg,
    padding: SW(5),
  },
  iconStyle: {
    height: SW(20),
    width: SW(20),
  },
  boldText: {
    fontFamily: Fonts.SemiBold,
    fontSize: SF(14),
    color: COLORS.darkGrey,
  },
  regularText: {
    fontFamily: Fonts.Regular,
    fontSize: SF(12),
    color: COLORS.light_grey,
  },
  bottomLine: {
    borderBottomWidth: 1,
    borderColor: COLORS.light_border,
  },
});
