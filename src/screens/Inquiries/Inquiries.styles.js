import { SH, SW, SF, COLORS, ShadowStyles } from "@/theme";
import { Fonts } from "@/assets";
import { StyleSheet } from "react-native";

import { moderateScale, verticalScale } from "react-native-size-matters";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    ...ShadowStyles.shadow,
    paddingHorizontal: SW(20),
  },
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: SW(15),
  },
  userPicStyle: {
    height: SW(50),
    width: SW(50),
  },
  chatView: {
    flexDirection: "row",
  },
  chatinnerView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bottomLine: {
    borderWidth: 0.5,
    borderColor: COLORS.input_bg,
    marginBottom: SH(20),
  },
  businessText: {
    fontFamily: Fonts.SemiBold,
    color: COLORS.darkGrey,
    fontSize: SF(16),
  },
  timeText: {
    fontFamily: Fonts.Regular,
    color: COLORS.darkGrey,
    fontSize: SF(14),
    marginRight: SW(10),
  },
  positionText: {
    fontFamily: Fonts.Italic,
    color: COLORS.light_grey,
    fontSize: SF(13),
  },
  nameText: {
    fontFamily: Fonts.Regular,
    color: COLORS.light_grey,
    fontSize: SF(15),
  },
});
