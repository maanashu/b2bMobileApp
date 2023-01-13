import { Fonts } from "@/assets";
import { COLORS } from "@/theme/Colors";
import { SF, SH, SW } from "@/theme/ScalerDimensions";
import { Dimensions, StyleSheet } from "react-native";
import { ms, vs } from "react-native-size-matters";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  roundIcons: {
    height: SH(56),
    width: SW(56),
  },
  item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: SF(12),
    fontFamily: Fonts.Regular,
    color: COLORS.darkGrey2,
  },
  commonFlatlistTextBold: {
    fontSize: SF(14),
    color: COLORS.darkGrey,
    fontFamily: Fonts.Bold,
  },
  secondFlatlist: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: SH(2),
  },
  secondView: {
    height: SH(85),
    width: SW(100),
    borderRadius: 5,
  },
  horizontalView: {
    height: vs(160),
    width: "100%",
    backgroundColor: COLORS.inputBorder,
    borderRadius: ms(10),
    paddingHorizontal: ms(10),
    paddingTop: vs(10),
  },
  innerViewHorizontal: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  storeImg: {
    height: SH(140),
    width: Dimensions.get("window").width * 0.9,
    borderRadius: 10,
    alignSelf: "center",
  },
});
