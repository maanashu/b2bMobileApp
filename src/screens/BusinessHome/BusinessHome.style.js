import { Fonts } from "@/assets";
import { ShadowStyles } from "@/theme";
import { COLORS } from "@/theme/Colors";
import { SF, SH, SW } from "@/theme/ScalerDimensions";
import { Dimensions, StyleSheet } from "react-native";
import { ms, s, verticalScale, vs } from "react-native-size-matters";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 40,
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

  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: ms(10),
  },
  ProductView: {
    borderRadius: 10,
    paddingVertical: SH(10),
    marginHorizontal: SW(5),
    backgroundColor: COLORS.placeholder,
    flex: 1,
    height: SH(180),

    paddingHorizontal: SW(10),
  },
  innerView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  secondView: {
    height: SH(85),
    width: "100%",
    borderRadius: 5,
  },
  forwardIcon: {
    height: SH(10),
    width: SW(6),
    marginTop: SH(5),
  },
  item: {
    flex: 1 / 3,
    justifyContent: "center",
    alignItems: "center",
    padding: SH(2),
    backgroundColor: COLORS.white,
    marginHorizontal: ms(4),
    paddingHorizontal: ms(6),
    paddingVertical: ms(6),
    borderRadius: ms(5),
  },
  title: {
    fontSize: SF(12),
    fontFamily: Fonts.Regular,
    color: COLORS.darkGrey2,
  },
  storeImg: {
    height: SH(140),
    // width: Dimensions.get("window").width * 0.9,
    borderRadius: 10,
    alignSelf: "center",
    width: SW(310),
  },
  subTitleText: {
    fontFamily: Fonts.Regular,
    fontSize: SF(14),
  },
  titleText: {
    fontFamily: Fonts.SemiBold,
    fontSize: ms(12),
    color: COLORS.darkGrey,
    paddingHorizontal: ms(10),
  },
  moqText: {
    alignSelf: "flex-start",
    fontFamily: Fonts.Regular,
    paddingLeft: ms(10),
    fontSize: ms(9),
    color: COLORS.darkGrey,
    marginTop: vs(5),
  },
  swiperView: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginRight: 10,
  },
  commonFlatlistText: {
    fontFamily: Fonts.Regular,
    fontSize: ms(12),
    paddingHorizontal: ms(2),
    marginLeft: ms(5),
    color: COLORS.darkGrey,
  },
  noDataText: {
    color: COLORS.black,
    fontSize: SF(18),
    fontFamily: Fonts.SemiBold,
    justifyContent: "center",
    alignSelf: "center",
  },
  viewHeadingText: {
    color: COLORS.black,
    fontSize: SF(16),
    fontFamily: Fonts.SemiBold,
  },
});
