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

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SW(20),
    paddingTop: SW(20),
  },
  selectServiceText: {
    color: COLORS.darkGrey2,
    fontFamily: Fonts.SemiBold,
    fontSize: SF(18),
  },
  rowAlignView: {
    flexDirection: "row",
    alignItems: "center",
  },
  rowView: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  rowJustifiedView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  requiredText: {
    color: COLORS.primary,
    fontFamily: Fonts.Regular,
    fontSize: SF(13),
    backgroundColor: COLORS.lightBlue,
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(5),
    borderRadius: moderateScale(12),
  },
  bottomLine: {
    borderBottomWidth: 1,
    borderColor: COLORS.input_bg,
  },
  checkBoxStyle: {
    // height: SH(15),
    // width: SW(15),
    // tintColor: COLORS.primary,
    top: SH(2),
  },
  serviceNameText: {
    color: COLORS.darkGrey,
    fontFamily: Fonts.SemiBold,
    fontSize: SF(16),
  },
  servicePriceText: {
    color: COLORS.darkGrey2,
    fontFamily: Fonts.Regular,
    fontSize: SF(14),
    marginTop: SH(2),
  },
  serviceImageStyle: {
    height: SH(50),
    width: SW(50),
    borderRadius: SW(5),
  },
});
