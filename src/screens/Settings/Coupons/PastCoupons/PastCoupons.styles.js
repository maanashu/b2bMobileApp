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
    paddingHorizontal: SW(10),
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
});
