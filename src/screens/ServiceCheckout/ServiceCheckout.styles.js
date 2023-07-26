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
    marginBottom: 2,
  },
  subtotalBackground: {
    backgroundColor: COLORS.placeHolder,
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
    borderRadius: moderateScale(5),
    height: SH(81),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: SW(5),
  },
  missingAddressButtonView: {
    flex: 1,
    paddingHorizontal: SW(10),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  box: {
    borderWidth: 1,
    borderRadius: moderateScale(14),
    borderColor: COLORS.green,
    height: SH(46),
    width: SW(65),
    justifyContent: "center",
    alignItems: "center",
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
    alignItems: "center",
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
    fontSize: SF(15),
    color: COLORS.darkGrey,
  },
  crossView: {
    alignItems: "flex-end",
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
  appliedCouponBackground: {
    backgroundColor: COLORS.placeHolder,
    flex: 1,
    paddingBottom: SH(20),
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
  rowView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  boxStyling: {
    borderWidth: 1,
    height: SH(30),
    width: SW(85),
    borderRadius: SW(5),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: SW(10),
  },
  couponDataText: {
    color: COLORS.darkGrey,
    fontFamily: Fonts.Regular,
  },
  couponIcons: {
    height: SH(20),
    width: SW(20),
    marginTop: SH(10),
  },
  productPriceText: {
    color: COLORS.black,
    fontFamily: Fonts.Regular,
    fontSize: SF(13),
  },
  bookingView: {
    borderRadius: moderateScale(10),
    height: SH(86),
    backgroundColor: COLORS.inputBorder,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: SW(15),
  },
  calenderIconStyle: {
    height: SH(61),
    width: SW(66),
  },
  appointmentTimeHeading: {
    color: COLORS.light_grey,
    fontFamily: Fonts.MaisonMono,
    fontSize: SF(11),
  },
  dateText: {
    fontFamily: Fonts.SemiBold,
    fontSize: SF(17),
    color: COLORS.darkGrey,
  },
  timeText: {
    fontFamily: Fonts.Regular,
    fontSize: SF(12),
    color: COLORS.darkGrey2,
  },
  selectText: {
    fontFamily: Fonts.Regular,
    fontSize: SF(12),
    color: COLORS.primary,
    textDecorationLine: "underline",
  },
  rowAlign: {
    flexDirection: "row",
    alignItems: "center",
  },
  timingsView: {
    backgroundColor: COLORS.placeHolder,
    alignItems: "center",
    flex: 1 / 3,
    borderWidth: 1,
    marginBottom: SH(7),
    marginHorizontal: SW(2),
    borderRadius: 3,
    width: SW(55),
    height: SH(25),
    justifyContent: "center",
  },
  timingText: {
    fontFamily: Fonts.Regular,
    fontSize: SF(10),
  },
  dayText: {
    color: COLORS.black,
  },
});
