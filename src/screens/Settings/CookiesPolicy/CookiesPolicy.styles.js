import { Fonts } from "@/assets";
import { ShadowStyles } from "@/theme";
import { COLORS } from "@/theme/Colors";
import { SF, SH, SW } from "@/theme/ScalerDimensions";
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
  privacyText: {
    fontFamily: Fonts.MaisonMonoBold,
    fontSize: ms(14),
    color: COLORS.darkGrey,
  },
  borderBottom: {
    borderBottomWidth: 1,
    paddingVertical: vs(5),
    borderColor: COLORS.termsBorder,
  },

  headingText: {
    fontFamily: Fonts.MaisonMonoBold,
    fontSize: ms(18),
    color: COLORS.darkGrey,
    paddingVertical: vs(5),
  },
  paraText: {
    fontFamily: Fonts.Regular,
    fontSize: ms(12),
    color: COLORS.darkGrey2,
    textAlign: "justify",
    lineHeight: vs(15),
  },
});
