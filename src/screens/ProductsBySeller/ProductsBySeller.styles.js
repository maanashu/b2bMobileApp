import { Fonts } from "@/assets";
import { ShadowStyles } from "@/theme";
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
    fontSize: s(14),
  },
  crossIcon: {
    height: SH(35),
    width: SW(40),
  },
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: SW(20),
    paddingVertical: SH(5),
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

  priceText: {
    color: COLORS.primary,
    fontFamily: Fonts.SemiBold,
    fontSize: SF(16),
    paddingLeft: SW(7),
  },
  categoryText: {
    color: COLORS.primary,
    fontFamily: Fonts.Regular,
    fontSize: SF(12),
  },
  categoryImages: {
    height: SW(22),
    width: SW(22),
    borderRadius: 11,
    marginRight: SW(2),
  },
  categoryTouchableView: {
    paddingLeft: SW(10),
    height: SH(40),
  },
  rowView: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: SW(8),
    paddingVertical: SH(5),
    borderRadius: SW(20),
  },

  servicesText: {
    color: COLORS.darkGrey,
    paddingVertical: SH(5),
    fontSize: SF(22),
  },
  ShoesStyle: {
    width: 180,
    ...ShadowStyles.shadow2,
    borderRadius: 1,
    backgroundColor: COLORS.white,
    margin: SW(6),
    flex: 1 / 2,
    paddingBottom: SH(10),
    borderTopLeftRadius: SW(10),
    borderTopRightRadius: SW(10),
  },
  productsTitle: {
    fontFamily: Fonts.SemiBold,
    fontSize: ms(12),
    color: COLORS.darkGrey,
    paddingHorizontal: ms(12),
  },
  productSubTitle: {
    fontFamily: Fonts.Regular,
    fontSize: ms(12),
    color: COLORS.darkGrey,
    paddingHorizontal: ms(12),
    marginVertical: SH(2),
  },
  productsQuantity: {
    alignSelf: "flex-start",
    fontFamily: Fonts.Regular,
    paddingLeft: ms(12),
    fontSize: ms(9),
    color: COLORS.darkGrey,
    marginTop: vs(2),
  },
});
