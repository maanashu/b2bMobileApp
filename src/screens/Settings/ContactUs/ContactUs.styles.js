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
    fontFamily: Fonts.Regular,
    color: COLORS.darkGrey,
    paddingLeft: ms(10),
    fontSize: ms(14),
  },
  iconStyle: {
    height: ms(20),
    width: ms(20),
  },
  headingText: {
    fontFamily: Fonts.Regular,
    fontSize: ms(12),
  },
});
