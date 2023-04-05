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
    backgroundColor: COLORS.placeHolder,
    paddingBottom: SH(10),
    borderRadius: ms(10),
    paddingTop: SH(20),
    opacity: 0.4,
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
});
