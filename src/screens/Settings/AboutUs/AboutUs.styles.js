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
    alignItems: "center",
  },
  logoView: {
    alignItems: "center",
  },
  logoStyle: {
    height: ms(150),
    width: ms(150),
  },
  jobrText: {
    fontFamily: Fonts.MaisonMonoBold,
    fontSize: ms(24),
    color: COLORS.darkGrey,
  },
  paraText: {
    fontFamily: Fonts.MaisonRegular,
    fontSize: ms(12),
    color: COLORS.darkGrey,
    textAlign: "justify",
    lineHeight: ms(17),
  },
});
