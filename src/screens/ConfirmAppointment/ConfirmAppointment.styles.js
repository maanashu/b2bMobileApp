import { Fonts } from "@/assets";
import { ShadowStyles } from "@/theme";
import { COLORS } from "@/theme/Colors";
import { SF, SH, SW } from "@/theme/ScalerDimensions";
import { tintColor } from "deprecated-react-native-prop-types/DeprecatedImagePropType";
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
  loaderStyle: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  rightArrowStyle: {
    height: SH(13),
    width: SW(13),
    tintColor: COLORS.btnText,
  },
  dayText: {
    color: COLORS.black,
  },
  timingsView: {
    backgroundColor: COLORS.placeHolder,
    alignItems: "center",
    flex: 1 / 3,
    borderWidth: 1,
    marginBottom: SH(7),
    marginHorizontal: SW(2),
    borderRadius: 3,
    width: SW(55),
    height: SH(25),
    justifyContent: "center",
  },
  timingText: {
    fontFamily: Fonts.Regular,
    fontSize: SF(10),
  },
});
