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
    backgroundColor: "white",
    paddingVertical: SH(10),
  },
  placeText: {
    color: COLORS.text,
    fontFamily: Fonts.SemiBold,
    marginLeft: SW(8),
  },
  buttonView: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: SW(20),
  },
  hiddenItem: {
    height: SH(70),
    justifyContent: "center",
    paddingHorizontal: SW(10),
    marginLeft: SW(50),
    alignItems: "flex-end",
  },
  deleteButtonText: {
    color: COLORS.white,
    fontFamily: Fonts.Regular,
    fontSize: SF(12),
  },
  deleteIcon: {
    height: SH(60),
    width: SH(60),
  },
});
