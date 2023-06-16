import { Fonts } from "@/assets";
import { ShadowStyles } from "@/theme";
import { COLORS } from "@/theme/Colors";
import { SF, SH, SW } from "@/theme/ScalerDimensions";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  headerView: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: SH(10),
    paddingHorizontal: SW(20),
    justifyContent: "space-between",
    marginBottom: SH(2),
    ...ShadowStyles.shadow5,
    backgroundColor: COLORS.white,
  },
  rowView: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: SW(5),
  },
  headerIcon: {
    height: SW(28),
    width: SW(28),
    marginLeft: SW(20),
  },
  headerText: {
    fontSize: SF(16),
    fontFamily: Fonts.Medium,
    color: COLORS.darkGrey,
  },
  container: {
    flex: 1,
    paddingHorizontal: SW(10),
    paddingTop: SH(1),
  },
  rowAlignView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  messageButtonTop: {
    backgroundColor: COLORS.primary,
    paddingVertical: SH(8),
    paddingHorizontal: SW(12),
    borderRadius: SW(3),
  },
  messageTimeText: {
    color: COLORS.white,
    fontFamily: Fonts.Regular,
    fontSize: SF(13),
  },
  userPicStyle: {
    height: SW(50),
    width: SW(50),
    borderRadius: SW(25),
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
    fontSize: SF(14),
  },
});
