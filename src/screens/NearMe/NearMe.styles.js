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
    width: SW(290),
    flexDirection: "row",
    paddingHorizontal: SW(20),
    alignItems: "center",
    justifyContent: "space-between",
  },
  filterView: {
    backgroundColor: COLORS.primary,
    height: SH(50),
    width: SW(100),
    borderRadius: SH(5),
    marginLeft: SW(10),
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: SW(18),
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
});
