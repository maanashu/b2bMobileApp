import { SH, SW, SF, COLORS, ShadowStyles } from "@/theme";
import { Fonts } from "@/assets";
import { StyleSheet } from "react-native";

import {
  moderateScale,
  ms,
  scale,
  verticalScale,
} from "react-native-size-matters";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    ...ShadowStyles.shadow2,
    paddingHorizontal: SW(20),
  },

  tabBtn: {
    borderWidth: 1,
    borderRadius: Platform.OS == "ios" ? 16 : 20,
    overflow: "hidden",
    paddingVertical: 7,
    paddingHorizontal: 8,
    fontSize: SF(12),
    fontFamily: Fonts.Regular,
    marginHorizontal: -7,
  },
  cardView: {
    marginHorizontal: SW(15),
    borderWidth: 1,
    marginBottom: SH(10),
    borderRadius: SH(8),
    paddingVertical: SH(15),
    borderColor: COLORS.light_border,
    paddingHorizontal: SW(10),
  },
  userPic: {
    height: ms(25),
    width: ms(25),
  },
  userNameText: {
    fontFamily: Fonts.SemiBold,
    color: COLORS.black,
    marginLeft: SW(8),
  },
  detailText: {
    color: COLORS.darkGrey,
    marginLeft: SW(8),
    fontFamily: Fonts.Regular,
    fontSize: SF(13),
  },
  iconsStyle: {
    height: ms(17),
    width: ms(17),
  },
  detailRowView: {
    flexDirection: "row",
    alignItems: "center",
  },
  typeText: {
    color: COLORS.primary,
    marginLeft: SW(8),
    fontFamily: Fonts.Regular,
    fontSize: SF(13),
  },
  endButton: {
    alignItems: "flex-end",
    marginRight: SW(10),
  },
  filter: {
    backgroundColor: COLORS.light_grey,
    paddingHorizontal: SW(17),
    paddingVertical: SH(5),
    flexDirection: "row",
    alignItems: "center",
    width: SW(90),
    marginLeft: SW(20),
    borderRadius: SH(20),
    justifyContent: "space-between",
  },
  filterText: {
    fontFamily: Fonts.Regular,
    color: COLORS.white,
    fontSize: SF(14),
  },
  filterIconStyle: {
    height: ms(16),
    width: ms(16),
  },
});
