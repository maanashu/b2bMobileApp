import { Fonts } from "@/assets";
import { COLORS } from "@/theme/Colors";
import { SF, SH, SW } from "@/theme/ScalerDimensions";
import { StyleSheet } from "react-native";
import { ms, s, vs } from "react-native-size-matters";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 40,
  },

  header: {
    height: SH(50),
    backgroundColor: COLORS.white,
    elevation: 5,
    paddingHorizontal: SW(20),
    justifyContent: "center",
  },
  headerInnerView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontFamily: Fonts.SemiBold,
    color: COLORS.black,
    fontSize: s(12),
  },
  searchIcon: {
    height: vs(25),
  },
  crossIcon: {
    height: SH(35),
    width: SW(40),
  },
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  filterText: {
    fontFamily: Fonts.Regular,
    color: COLORS.white,
  },
  headerIconView: {
    height: SH(35),
    width: SW(80),
    backgroundColor: COLORS.primary,
    borderRadius: ms(20),
    flexDirection: "row",
    paddingHorizontal: ms(10),
    alignItems: "center",
    justifyContent: "space-between",
  },
  filterIcon: {
    height: vs(22),
    width: ms(18),
  },
  tabButtonView: {
    borderRadius: 20,
    width: ms(65),
  },
  upperView: {
    height: vs(120),
    width: "100%",
    backgroundColor: COLORS.inputBorder,
    paddingHorizontal: ms(20),
    flexDirection: "row",
    alignItems: "center",
  },
  topBoldText: {
    fontFamily: Fonts.Bold,
    color: COLORS.primary,
    fontSize: ms(25),
    marginLeft: ms(20),
  },
});
