import { Fonts } from "@/assets";
import { COLORS } from "@/theme/Colors";
import { SH, SF, SW } from "@/theme/ScalerDimensions";
import { StyleSheet } from "react-native";
import { moderateScale, ms } from "react-native-size-matters";

export const styles = StyleSheet.create({
  outerBorderView: {
    borderWidth: 1,
    borderColor: COLORS.light_border,
    paddingHorizontal: SW(10),
    paddingVertical: SH(20),
    borderRadius: 8,
  },
  headingText: {
    fontFamily: Fonts.Regular,
    fontSize: SF(14),
    color: COLORS.darkGrey,
  },
  productDetailHeading: {},
});
