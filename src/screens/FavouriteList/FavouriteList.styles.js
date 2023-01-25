import { SH, SW, SF, COLORS, ShadowStyles } from "@/theme";
import { Fonts } from "@/assets";
import { StyleSheet } from "react-native";

import { moderateScale, verticalScale } from "react-native-size-matters";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    ...ShadowStyles.shadow,
    paddingHorizontal: SW(20),
  },
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: SW(15),
  },
});
