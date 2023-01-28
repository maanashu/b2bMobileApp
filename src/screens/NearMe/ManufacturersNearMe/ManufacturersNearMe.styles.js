import { SH, SW, SF, COLORS, ShadowStyles } from "@/theme";
import { Fonts } from "@/assets";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  headingText: {
    fontFamily: Fonts.MaisonMonoBold,
    fontSize: SF(20),
    color: COLORS.text,
    marginLeft: SW(10),
  },
  touchableView: {
    paddingHorizontal: SW(5),
    paddingVertical: SH(20),
    backgroundColor: COLORS.white,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rowView: {
    flexDirection: "row",
    alignItems: "center",
  },
  imgBackground: {
    borderRadius: SW(17.5),
    backgroundColor: COLORS.input_bg,
    padding: SW(5),
  },
  iconStyle: {
    height: SW(20),
    width: SW(20),
  },
  boldText: {
    fontFamily: Fonts.SemiBold,
    fontSize: SF(14),
    color: COLORS.darkGrey,
  },
  regularText: {
    fontFamily: Fonts.Regular,
    fontSize: SF(12),
    color: COLORS.light_grey,
  },
  bottomLine: {
    borderBottomWidth: 1,
    borderColor: COLORS.light_border,
  },
});
