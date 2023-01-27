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
  container: {
    backgroundColor: COLORS.white,
    ...ShadowStyles.shadow,
    paddingHorizontal: SW(20),
  },
  tabButtonView: {
    borderRadius: 20,
    height: SH(30),
    // width: SW(95),
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    paddingHorizontal: SW(10),
  },
});
