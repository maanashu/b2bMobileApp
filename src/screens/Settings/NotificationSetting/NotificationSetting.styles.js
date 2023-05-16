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
    backgroundColor: COLORS.placeHolder,
    marginHorizontal: SW(20),
    paddingVertical: SH(20),
    height: SH(60),
    paddingHorizontal: SW(15),
  },
  bottomLine: {
    borderBottomWidth: SH(0.5),
    borderColor: COLORS.termsBorder,
  },
});
