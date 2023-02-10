import { Fonts } from "@/assets";
import { ShadowStyles } from "@/theme";
import { COLORS } from "@/theme/Colors";
import { SF, SH, SW } from "@/theme/ScalerDimensions";
import { StyleSheet } from "react-native";
import { ms, s, vs } from "react-native-size-matters";

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
    paddingHorizontal: SW(20),
    paddingTop: SH(1),
  },
});
