import { Fonts } from "@/assets";
import { ShadowStyles } from "@/theme";
import { COLORS } from "@/theme/Colors";
import { SF, SH, SW } from "@/theme/ScalerDimensions";
import { StyleSheet } from "react-native";
import { ms, s, verticalScale, vs } from "react-native-size-matters";
import { Colors } from "react-native/Libraries/NewAppScreen";

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
    ...ShadowStyles.shadow2,
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
    paddingVertical: SH(5),
    width: "100%",
    backgroundColor: COLORS.inputBorder,
    paddingHorizontal: ms(10),
  },
  upperRowView: {
    paddingVertical: SH(10),
    paddingHorizontal: ms(10),
    flexDirection: "row",
    alignItems: "center",
  },
  topBoldText: {
    fontFamily: Fonts.SemiBold,
    color: COLORS.primary,
    fontSize: ms(20),
  },
  backgroundView: {
    paddingHorizontal: SW(15),
    paddingVertical: SH(15),
    borderRadius: SW(8),
    ...ShadowStyles.shadow2,
  },
  organizationText: {
    color: COLORS.dark_gray,
    fontFamily: Fonts.Bold,
    fontSize: SF(18),
  },
  secondaryText: {
    color: COLORS.grey,
    fontFamily: Fonts.Regular,
    fontSize: SF(14),
  },
  rowView: {
    flexDirection: "row",
    alignItems: "center",
  },
  imageStyle: {
    height: SW(90),
    width: SW(85),
    borderRadius: SW(5),
  },
  Icons: {
    height: SW(15),
    width: SW(15),
  },
});
