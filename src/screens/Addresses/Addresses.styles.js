import { Fonts } from "@/assets";
import { ShadowStyles } from "@/theme";
import { COLORS } from "@/theme/Colors";
import { SH, SF, SW } from "@/theme/ScalerDimensions";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconStyle: {
    height: SW(27),
    width: SW(27),
  },
  bottomLine: {
    borderBottomWidth: 1,
    marginTop: SH(15),
    marginBottom: SH(15),
    borderColor: COLORS.light_border,
  },
  innerView: {
    flexDirection: "row",
    alignItems: "center",
  },
  smallText: {
    color: COLORS.text,
    fontFamily: Fonts.Regular,
    marginLeft: SW(8),
  },
  container: {
    paddingHorizontal: SW(10),
  },
  placeText: {
    color: COLORS.text,
    fontFamily: Fonts.SemiBold,
    marginLeft: SW(8),
  },
});
