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
    height: SW(56),
    width: SW(56),
    borderRadius: SW(50),
  },
  item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: SH(2),
    marginBottom: SH(8),
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
    height: SH(185),
    width: Dimensions.get("window").width * 0.9,
    borderRadius: 10,
    alignSelf: "center",
  },
  swiperView: {
    paddingTop: SH(10),
    paddingBottom: SH(30),
  },
  rowView: {
    flexDirection: "row",
    alignItems: "center",
  },
  boldText: {
    fontFamily: Fonts.Bold,
    fontSize: ms(14),
    color: COLORS.darkGrey,
  },
  regularText: {
    fontFamily: Fonts.Regular,
    fontSize: ms(12),
    color: COLORS.darkGrey2,
  },
  iconStyle: {
    height: vs(15),
    width: vs(15),
  },
  swiperStyle: {
    width: Dimensions.get("window").width,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  paddingView: {
    paddingHorizontal: ms(20),
  },
});
