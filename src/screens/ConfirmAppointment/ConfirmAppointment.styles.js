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
  },
  appointmentHeading: {
    color: COLORS.black,
    fontFamily: Fonts.MaisonMono,
    fontSize: SF(25),
  },
  whenText: {
    color: COLORS.darkGrey,
    fontFamily: Fonts.Regular,
    fontSize: SF(17),
  },
  rowJustified: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rowAlign: {
    flexDirection: "row",
    alignItems: "center",
  },
  calenderIcon: {
    height: SH(25),
    width: SW(25),
    tintColor: COLORS.secondary,
  },
  clockIcon: {
    height: SH(25),
    width: SW(25),
    tintColor: COLORS.btnText,
  },
  infoText: {
    color: COLORS.darkGrey,
    fontFamily: Fonts.Regular,
    fontSize: SF(17),
  },
  bottomLine: {
    borderWidth: 0.5,
    borderColor: COLORS.termsBorder,
    marginTop: SH(10),
  },
  dateText: {
    color: COLORS.light_grey,
    fontFamily: Fonts.Regular,
    fontSize: SF(15),
  },
  buttonView: {
    justifyContent: "flex-end",
    flex: 1,
    marginBottom: SH(20),
  },
});
