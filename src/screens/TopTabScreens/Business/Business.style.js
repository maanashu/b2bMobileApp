import { Fonts } from "@/assets";
import { ShadowStyles } from "@/theme";
import { COLORS } from "@/theme/Colors";
import { SF, SH, SW } from "@/theme/ScalerDimensions";
import { Dimensions, StyleSheet } from "react-native";
import { ms, vs } from "react-native-size-matters";

const fullWidth = Dimensions.get("window").width * 0.98;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  roundIcons: {
    height: SH(56),
    width: SW(54),
    borderRadius: SW(10),
  },
  item: {
    alignItems: "center",
    padding: SH(2),
    marginBottom: SH(8),
    justifyContent: "space-between",
    marginVertical: 8,
    flex: 1 / 4,
  },
  title: {
    fontSize: SF(12),
    fontFamily: Fonts.Regular,
    color: COLORS.darkGrey2,
    marginTop: SH(5),
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
    fontSize: ms(10),
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
  allButton: {
    backgroundColor: COLORS.white,
    ...ShadowStyles.shadow2,
    borderRadius: SW(10),
    alignItems: "center",
    justifyContent: "center",
  },
  allIcon: {
    height: SH(56),
    width: SW(54),
  },
  rowViewJustify: {
    paddingHorizontal: SW(20),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  marginRightStyle: {
    marginRight: 2,
  },
  recommendedScrollView: {
    width: fullWidth,
    paddingHorizontal: SW(12),
  },
  categoryTouchableView: {
    paddingLeft: SW(10),
    height: SH(40),
  },
  upperView: {
    paddingVertical: SH(5),
    width: "100%",
    paddingHorizontal: ms(10),
  },
});
