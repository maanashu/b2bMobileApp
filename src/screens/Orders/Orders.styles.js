import { Fonts } from "@/assets";
import { COLORS, SF, SH, ShadowStyles, SW } from "@/theme";
import { StyleSheet } from "react-native";
import { ms, s, verticalScale, vs } from "react-native-size-matters";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: "center",
  },
  header: {
    height: SH(50),
    backgroundColor: COLORS.white,
    ...ShadowStyles.shadow1,
    paddingHorizontal: SW(20),
    justifyContent: "center",
  },
  headerInnerView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: COLORS.white,
    alignItems: "center",
  },
  headerText: {
    fontFamily: Fonts.SemiBold,
    color: COLORS.black,
    fontSize: s(14),
  },
  searchIcon: {
    height: vs(25),
  },
  crossIcon: {
    height: SH(35),
    width: SW(40),
  },
  topTabContainer: {
    flex: 1,
    paddingVertical: SH(5),
  },
  filterText: {
    fontFamily: Fonts.SemiBold,
    color: COLORS.white,
    marginRight: SW(1),
    fontSize: SF(14),
  },
  headerIconView: {
    height: SH(29),
    width: SW(50),
    backgroundColor: COLORS.primary,
    borderRadius: ms(20),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  filterIcon: {
    height: vs(16),
    width: ms(16),
    marginLeft: SW(1),
  },
  tabButtonView: {
    borderRadius: 20,
    height: SH(30),
    // width: SW(95),
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    paddingHorizontal: SW(10),
  },
});
