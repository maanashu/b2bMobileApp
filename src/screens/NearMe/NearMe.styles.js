import { SH, SW, SF, COLORS, ShadowStyles } from "@/theme";
import { Fonts } from "@/assets";
import { Platform, StyleSheet } from "react-native";

import { moderateScale, verticalScale } from "react-native-size-matters";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    ...ShadowStyles.shadow,
    paddingHorizontal: SW(20),
  },
  mapView: {
    height: "100%",
    width: "100%",
  },
  mainContainer: {
    paddingHorizontal: SW(20),
    paddingVertical: SW(20),
    flex: 1,
    width: "100%",
  },
  searchBar: {
    width: 100,
    flex: 1,
  },
  searchRowView: {
    width: SW(300),
    flexDirection: "row",
    paddingHorizontal: SW(20),
    alignItems: "center",
    justifyContent: "space-between",
  },
  filterView: {
    backgroundColor: COLORS.primary,
    height: SH(50),
    width: SW(90),
    borderRadius: SH(5),
    marginLeft: SW(10),
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: SW(13),
    justifyContent: "space-between",
  },
  absoluteView: {
    position: "absolute",
    width: "100%",
    paddingVertical: SH(20),
  },
  filterIcon: {
    height: SH(18),
    width: SW(18),
  },
  filterText: {
    color: COLORS.white,
    fontFamily: Fonts.SemiBold,
    fontSize: SF(16),
  },
  bottomAbsoluteView: {
    position: "absolute",
    flex: 1,
    marginTop: Platform.OS == "ios" ? SH(450) : SH(490),
    paddingHorizontal: SW(15),
  },
  bottomView: {
    ...ShadowStyles.shadow2,
    backgroundColor: COLORS.white,
    height: SH(105),
    width: SW(105),
    marginHorizontal: SW(5),
    borderRadius: SH(10),
    alignItems: "center",
    justifyContent: "center",
  },
  innerRowView: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconView: {
    padding: SW(5),
    backgroundColor: COLORS.lightBlue,
    borderRadius: SW(50),
    marginRight: SW(3),
  },
  bottomIcons: {
    height: SW(15),
    width: SW(15),
  },
  quantityText: {
    marginLeft: SW(3),
    fontFamily: Fonts.Bold,
    color: COLORS.primary,
    fontSize: SF(22),
  },
  typeText: {
    fontFamily: Fonts.Regular,
    fontSize: SF(13),
    marginTop: SH(5),
    color: COLORS.darkGrey,
  },
  middleView: {
    position: "absolute",
    backgroundColor: COLORS.text,
    paddingHorizontal: SW(15),
    paddingVertical: SH(5),
    marginTop: Platform.OS == "ios" ? SH(390) : SH(430),
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: SW(30),
  },
  locationIcon: {
    height: SW(30),
    width: SW(30),
  },
  nearMeTextSmall: {
    fontFamily: Fonts.Regular,
    color: COLORS.white,
    fontSize: SF(10),
  },
  nearMeTextBold: {
    fontFamily: Fonts.SemiBold,
    color: COLORS.white,
    fontSize: SF(14),
    marginTop: SH(5),
  },
});
