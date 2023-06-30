import { Fonts } from "@/assets";
import { ShadowStyles } from "@/theme";
import { COLORS } from "@/theme/Colors";
import { SF, SH, SW } from "@/theme/ScalerDimensions";
import { StyleSheet } from "react-native";
import { ms, s, vs } from "react-native-size-matters";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 40,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingVertical: SH(5),
  },
  couponView: {
    backgroundColor: "#F1F1F1",
    paddingBottom: SH(10),
    borderRadius: ms(10),
    paddingTop: SH(20),
  },
  upperView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  upperText: {
    fontFamily: Fonts.SemiBold,
    color: COLORS.darkGrey,
    fontSize: ms(15),
  },
  smallText: {
    fontFamily: Fonts.Regular,
    color: "#626262",
    fontSize: ms(12),
  },
  mediumText: {
    fontFamily: Fonts.SemiBold,
    color: COLORS.darkGrey2,
  },
  tcText: {
    color: COLORS.primary,
    textAlign: "right",
    fontFamily: Fonts.SemiBold,
  },
  paddingView: {
    paddingHorizontal: SW(15),
  },
  bottomView: {
    paddingHorizontal: SW(15),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dashedLine: {
    borderBottomWidth: 1,
    borderStyle: "dashed",
    flex: 1,
    marginLeft: SW(15),
  },
  cutOutView: {
    backgroundColor: COLORS.white,
    width: SW(20),
    height: SW(20),
    borderRadius: SW(10),
    left: SW(10),
  },
  applyButton: {
    backgroundColor: COLORS.light_yellow,
    paddingHorizontal: SW(8),
    paddingVertical: SW(4),
    borderRadius: SW(5),
    justifyContent: "center",
    alignItems: "center",
  },
  applyText: {
    color: COLORS.white,
    fontFamily: Fonts.Regular,
    fontSize: SF(12),
  },
  EmptyComponentStyle: {
    alignItems: "center",
    justifyContent: "center",
  },
  EmptyComponentText: {
    fontFamily: Fonts.SemiBold,
    color: COLORS.darkGrey,
    fontSize: SF(20),
  },
});
