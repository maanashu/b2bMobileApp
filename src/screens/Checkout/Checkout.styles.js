import { Fonts } from "@/assets";
import { ShadowStyles } from "@/theme";
import { COLORS } from "@/theme/Colors";
import { SF, SH, SW } from "@/theme/ScalerDimensions";
import { StyleSheet } from "react-native";
import {
  moderateScale,
  ms,
  s,
  verticalScale,
  vs,
} from "react-native-size-matters";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 40,
  },
  headerText: {
    fontFamily: Fonts.SemiBold,
    color: COLORS.black,
    fontSize: s(14),
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
  },
  crossIcon: {
    height: SH(20),
    width: SW(20),
  },
  mainContainer: {
    backgroundColor: COLORS.white,
    paddingHorizontal: SW(18),
    paddingVertical: SH(5),
    flex: 1,
  },
  deliveryViewInnerView: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  fedExIcon: {
    height: SH(50),
    width: SW(40),
  },
  deliveryText: {
    color: COLORS.black,
    fontSize: SF(17),
    paddingHorizontal: SW(10),
  },
  outerDot: {
    borderWidth: 1,
    height: 20,
    width: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderColor: "gray",
  },
  innerDot: {
    height: 12,
    width: 12,
    backgroundColor: COLORS.grey,
    borderRadius: 6,
  },
  upsIcon: {
    height: SH(32),
    width: SW(40),
  },

  buttonTextStyle: {
    color: COLORS.white,
  },
  deliveryView: {
    backgroundColor: COLORS.inputBorder,
    height: SH(100),
    borderRadius: SH(12),
    justifyContent: "center",
    paddingHorizontal: SW(10),
    marginHorizontal: 1,
  },
  inputAddressView: {
    flex: 1.5,
    backgroundColor: COLORS.activeTab,
    marginTop: 5,
  },
  walletView: {
    flex: 1,
    backgroundColor: COLORS.activeTab,
    marginTop: 5,
  },
  flatlistView: {
    flex: 1,
    backgroundColor: COLORS.activeTab,
    marginTop: 5,
  },
  truckIcon: {
    height: SH(50),
    width: SW(50),
  },
  deliveryViewText: {
    paddingHorizontal: SW(10),
  },
  deliveryTime: {
    fontFamily: Fonts.MaisonRegular,
    margin: 1,
  },
  deliveryName: {
    color: COLORS.black,
    fontFamily: Fonts.Bold,
    margin: 1,
  },
  estimatedDelivery: {
    color: COLORS.grey,
    fontFamily: Fonts.Regular,
    margin: 1,
  },
  deliveryDays: {
    textDecorationLine: "underline",
    textDecorationColor: COLORS.black,
    color: COLORS.activeTab,
    margin: 1,
  },
  deliveryViewDirection: {
    flexDirection: "row",
    alignItems: "center",
  },

  borderLine: {
    borderBottomWidth: 0.5,
    borderColor: COLORS.secondary,
  },
  pricesView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  pricesText: {
    fontFamily: Fonts.Regular,
    color: COLORS.darkGrey,
  },
  deliveryPriceText: {
    fontFamily: Fonts.Regular,
    color: COLORS.activeTab,
    textDecorationLine: "underline",
    textDecorationColor: COLORS.activeTab,
  },
  totalPriceText: {
    fontFamily: Fonts.Bold,
    color: COLORS.darkGrey,
    fontSize: SF(15),
  },
  bottomButtonView: {
    flex: 1,
    justifyContent: "flex-end",
  },
  subtotalBackground: {
    backgroundColor: COLORS.placeHolder,
    padding: SW(10),
    borderRadius: SW(5),
    paddingVertical: SH(15),
    paddingHorizontal: SW(15),
  },
  subtotalView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  missingAddressButton: {
    backgroundColor: COLORS.primary,
    height: SH(60),
    borderRadius: 5,
  },
  missingAddressButtonView: {
    flex: 1,
    paddingHorizontal: SW(20),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  box: {
    height: SH(43),
    width: SW(60),
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.white,
    borderRadius: 14,
  },
  placeOrderText: {
    fontFamily: Fonts.Bold,
    color: COLORS.green,
    fontSize: SF(16),
  },
  rowContainer: {
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateScale(5),
  },
  Container: {
    backgroundColor: COLORS.white,
    borderTopLeftRadius: moderateScale(20),
    borderTopRightRadius: moderateScale(20),
    ...ShadowStyles.shadow,
    flex: 1,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  textStyle: {
    fontFamily: Fonts.SemiBold,
    fontSize: ms(14),
    color: COLORS.white,
  },
  productImageStyle: {
    height: SH(50),
    width: SW(50),
  },

  productsInnerView: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    marginLeft: SW(10),
  },
  productView: {
    flexDirection: "row",
    padding: SW(12),
    borderWidth: SH(1),
    borderRadius: SW(5),
    marginHorizontal: 1,
    borderColor: COLORS.input_bg,
    flex: 1,
  },
  secondaryText: {
    fontFamily: Fonts.Regular,
    fontSize: SF(13),
    color: COLORS.light_grey,
    bottom: SH(5),
  },
  secondaryDetailText: {
    fontFamily: Fonts.Regular,
    fontSize: SF(12),
    color: COLORS.light_grey,
  },
  productNameText: {
    fontFamily: Fonts.SemiBold,
    fontSize: SF(11.5),
    color: COLORS.darkGrey,
  },
  crossView: {
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  counterView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: SW(12),
    alignItems: "center",
  },
  counterButtonView: {
    height: SH(25),
    width: SW(60),
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLORS.termsBorder,
  },
  decrementButton: {
    color: COLORS.black,
    fontSize: SF(16),
  },
  incrementButton: {
    color: COLORS.black,
    fontSize: SF(16),
  },
  selectedNumber: {
    color: COLORS.black,
    fontSize: SF(13),
  },
  decrementView: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: SH(2),
    height: "100%",
    width: SW(30),
  },
  incrementView: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: SH(1),
    height: "100%",
    width: SW(30),
  },
  applyCouponBackground: {
    backgroundColor: COLORS.placeHolder,
    flex: 1,
    paddingVertical: SH(20),
    paddingHorizontal: SW(15),
    borderRadius: SW(5),
  },
  rightArrowStyle: {
    tintColor: "black",
    height: SW(15),
    width: SW(15),
  },
  ApplyCouponHeading: {
    fontFamily: Fonts.SemiBold,
    color: COLORS.darkGrey,
    fontSize: SF(15),
  },
  ApplyCouponHeadingText: {
    fontFamily: Fonts.Regular,
    color: COLORS.darkGrey,
    fontSize: SF(12),
  },
  totalText: {
    color: "black",
    fontFamily: Fonts.SemiBold,
    fontSize: SF(15),
  },
  feeText: {
    color: COLORS.darkGrey2,
    fontFamily: Fonts.Regular,
    fontSize: SF(15),
  },
});
