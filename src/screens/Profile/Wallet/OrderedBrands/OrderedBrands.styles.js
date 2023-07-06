import { StyleSheet } from "react-native";
import { SH, SW, COLORS, ShadowStyles, SF } from "@/theme";
import { Fonts } from "@/assets";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

export const styles = StyleSheet.create({
  rowCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: moderateScale(5),
    marginVertical: SH(5),
    padding: moderateScale(12),
    borderBottomColor: COLORS.placeholder,
    borderBottomWidth: 1,
    justifyContent: "space-between",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  mainRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  img: {
    height: SH(44),
    width: SW(40),
  },
  jimg: {
    height: SH(34),
    width: SW(30),
  },

  cardName: {
    color: COLORS.dark_gray,
    fontFamily: Fonts.SemiBold,
    fontSize: scale(16),
  },

  subName: {
    color: "#626262",
    fontFamily: Fonts.Medium,
    fontSize: scale(10),
    paddingVertical: verticalScale(4),
  },
  padding: {
    paddingHorizontal: 10,
  },
  container: {
    backgroundColor: COLORS.white,
    ...ShadowStyles.shadow2,
    paddingHorizontal: SW(20),
  },
  maincontainer: {
    flexDirection: "row",
    backgroundColor: COLORS.white,
    alignItems: "center",
    height: SH(50),
  },
  title: {
    fontSize: SF(16),
    color: COLORS.dark_gray,
    fontFamily: Fonts.SemiBold,
  },
});
