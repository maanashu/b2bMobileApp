import { StyleSheet } from "react-native";
import { SH, SW, COLORS, ShadowStyles, SF } from "@/theme";
import { Fonts } from "@/assets";
import { moderateScale, ms, vs } from "react-native-size-matters";

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
    paddingHorizontal: ms(10),
  },
  ShoesStyle: {
    width: 180,
    ...ShadowStyles.shadow2,
    borderRadius: 5,
    backgroundColor: COLORS.white,
    margin: 2,
    flex: 1,
    paddingVertical: SH(5),
  },
  filerView: {
    paddingHorizontal: SW(5),
    backgroundColor: COLORS.primary,
    paddingVertical: SH(2),
    flexDirection: "row",
    alignItems: "center",
    width: "20%",
    borderRadius: moderateScale(20),
    justifyContent: "space-evenly",
    alignSelf: "flex-end",
  },
  filterIcon: {
    height: ms(20),
    width: ms(20),
  },
  filterText: {
    fontFamily: Fonts.Regular,
    fontSize: SF(14),
    color: COLORS.white,
  },

  titleBoldText: {
    fontFamily: Fonts.SemiBold,
    fontSize: ms(12),
    color: COLORS.darkGrey,
    paddingHorizontal: ms(5),
  },
  titleRegularText: {
    fontFamily: Fonts.Regular,
    fontSize: ms(12),
    color: COLORS.darkGrey,
    paddingHorizontal: ms(10),
  },
  bagsQuantityText: {
    alignSelf: "flex-start",
    fontFamily: Fonts.Regular,
    paddingLeft: ms(5),
    fontSize: ms(10),
    color: COLORS.darkGrey,
    marginTop: vs(2),
  },
});
