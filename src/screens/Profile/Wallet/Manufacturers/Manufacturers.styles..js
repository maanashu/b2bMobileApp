import { StyleSheet } from "react-native";
import { SH, SW, COLORS, ShadowStyles, SF } from "@/theme";
import { Fonts } from "@/assets";
import { ms } from "react-native-size-matters";

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
    paddingHorizontal: ms(15),
  },
  itemS: {
    backgroundColor: COLORS.white,
    borderColor: "blue",
    borderRadius: 1,
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    margin: 2,
    borderRadius: 2,
  },
  upperButtons: {
    alignItems: "center",
    justifyContent: "center",
    height: SH(50),
  },
  primaryColorText: {
    color: COLORS.primary,
    fontSize: SF(16),
    fontFamily: Fonts.SemiBold,
  },
  smallText: {
    color: COLORS.darkGrey2,
    fontSize: SF(12),
    fontFamily: Fonts.Regular,
  },
  yewiView: {
    borderRadius: 10,
    paddingVertical: SH(10),
    backgroundColor: COLORS.placeholder,
    ...ShadowStyles.shadow2,
    flex: 1,
    paddingHorizontal: SW(10),
  },
  yewiInnerView: {
    flexDirection: "row",
    marginHorizontal: SW(5),
  },
  aboutCompanyView: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: SH(5),
    justifyContent: "space-between",
  },
  aboutCompanyText: {
    fontFamily: Fonts.Regular,
    fontSize: SF(13),
    color: COLORS.darkGrey,
  },
  buttonView: {
    flexDirection: "row",
    alignItems: "center",
  },
  followButton: {
    paddingHorizontal: SW(10),
    paddingVertical: SH(5),
    backgroundColor: COLORS.primary,
    borderRadius: 3,
    marginRight: SW(10),
  },
  followText: {
    fontFamily: Fonts.Regular,
    fontSize: SF(12),
    color: COLORS.green,
  },
  visitButton: {
    paddingHorizontal: SW(8),
    paddingVertical: SH(5),
    backgroundColor: COLORS.white,
    borderRadius: 3,
    marginRight: SW(10),
  },
  visitText: {
    fontFamily: Fonts.Regular,
    fontSize: SF(12),
    color: COLORS.primary,
  },
});
