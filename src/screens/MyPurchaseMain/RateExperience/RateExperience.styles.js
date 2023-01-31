import { SH, SW, SF, COLORS, ShadowStyles } from "@/theme";
import { Fonts } from "@/assets";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: SW(20),
    flex: 1,
  },
  bottomLine: {
    borderBottomWidth: 1,
    borderColor: COLORS.light_border,
    marginVertical: SH(10),
  },
  headingText: {
    fontFamily: Fonts.SemiBold,
    color: COLORS.text,
    fontSize: SF(22),
  },
  subHeadingText: {
    fontFamily: Fonts.Regular,
    color: COLORS.text,
    fontSize: SF(14),
  },
  ratingRowView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  ratingText: {
    fontFamily: Fonts.Regular,
    color: COLORS.text,
    fontSize: SF(15),
  },
  semiBoldText: {
    fontFamily: Fonts.SemiBold,
    color: COLORS.text,
    fontSize: SF(16),
  },
  inputStyle: {
    paddingVertical: SH(15),
    paddingHorizontal: SW(15),
    borderWidth: 1,
    borderBottomWidth: 1,
    height: SH(130),
    textAlignVertical: "top",
  },
  buttonStyle: {
    backgroundColor: COLORS.placeHolder,
  },
});
