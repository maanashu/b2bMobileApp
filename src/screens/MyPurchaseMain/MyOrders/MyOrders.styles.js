import { SH, SW, SF, COLORS, ShadowStyles } from "@/theme";
import { Fonts } from "@/assets";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  orderStatus: {
    backgroundColor: COLORS.placeHolder,
    paddingVertical: SH(15),
    paddingHorizontal: SW(10),
    borderRadius: SW(5),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  mainContainer: {
    paddingHorizontal: SW(20),
    flex: 1,
  },
  statusText: {
    fontFamily: Fonts.SemiBold,
    color: COLORS.darkGrey,
    fontSize: SF(11),
  },
  statusInnerView: {
    alignItems: "center",
    width: "32%",
  },
  bottomStatusBar: {
    borderBottomWidth: 4,
    borderColor: COLORS.primary,
    width: "100%",
    borderRadius: 10,
  },
  statusHeading: {
    color: COLORS.rose,
    fontFamily: Fonts.SemiBold,
    fontSize: SF(18),
  },
  quoteText: {
    color: COLORS.text,
    fontFamily: Fonts.Regular,
    fontSize: SF(14),
  },
  companyBackground: {
    backgroundColor: COLORS.placeHolder,
    paddingBottom: SH(25),
    paddingTop: SH(12),
    paddingHorizontal: SW(10),
    borderRadius: SW(7),
  },
  companyInnerView: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: SW(5),
    justifyContent: "space-between",
  },
  chatIcon: {
    tintColor: COLORS.light_grey,
    height: SW(25),
    width: SW(25),
  },
  deliveryView: {
    backgroundColor: COLORS.inputBorder,
    height: SH(100),
    borderRadius: SH(12),
    justifyContent: "center",
    paddingHorizontal: SW(10),
    marginHorizontal: 1,
  },
  deliveryViewDirection: {
    flexDirection: "row",
    alignItems: "center",
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
    fontSize: SF(12),
    color: COLORS.light_grey,
  },
  deliveryName: {
    color: COLORS.black,
    fontFamily: Fonts.Bold,
    fontSize: SF(18),
    margin: 1,
  },
  estimatedDelivery: {
    fontSize: SF(13),
    color: COLORS.text,
    fontFamily: Fonts.Regular,
    margin: 1,
  },
  deliveryDays: {
    textDecorationLine: "underline",
    textDecorationColor: COLORS.black,
    fontSize: SF(14),
    color: COLORS.activeTab,
    margin: 1,
  },
  elevatedView: {
    paddingVertical: SH(20),
    paddingHorizontal: SW(10),
    ...ShadowStyles.shadow2,
    marginHorizontal: SW(1),
    height: SH(350),
    borderRadius: SW(8),
    backgroundColor: COLORS.white,
  },

  boldHeading: {
    color: COLORS.darkGrey,
    fontFamily: Fonts.Bold,
    fontSize: SF(16),
    marginLeft: SW(5),
  },
  deliveryPinIcon: {
    tintColor: COLORS.text,
    height: SW(20),
    width: SW(20),
  },
  addressTypeText: {
    fontFamily: Fonts.SemiBold,
    fontSize: SF(16),
    color: COLORS.text,
    marginBottom: SH(3),
  },
  adressText: {
    fontFamily: Fonts.Regular,
    color: COLORS.text,
    fontSize: SF(14),
    marginBottom: SH(2),
  },
  bottomLine: {
    borderBottomWidth: SH(0.5),
    borderColor: COLORS.termsBorder,
  },
  rowView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  forwardIcon: {
    height: SW(25),
    width: SW(25),
  },
  orderedProductsView: {
    backgroundColor: COLORS.white,
    height: SH(400),
    flex: 1,
    borderRadius: 10,
    marginHorizontal: 1,
    ...ShadowStyles.shadow2,
    marginBottom: 1,
  },
  orderDetailsHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: SH(10),
    paddingHorizontal: SW(15),
  },
  ordetDetailsIcon: {
    height: SH(22),
    width: SW(22),
    marginRight: SW(5),
  },
  orderDetailsText: {
    fontFamily: Fonts.SemiBold,
    color: COLORS.primary,
  },
  flatlistItems: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: SH(10),
  },
  quantityText: {
    color: COLORS.darkGrey2,
    fontFamily: Fonts.Regular,
    fontSize: SF(12),
  },
  lightText: {
    fontFamily: Fonts.Regular,
    color: COLORS.secondary,
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
    fontSize: SF(12),
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
  borderLine: {
    borderBottomWidth: 0.5,
    borderColor: COLORS.secondary,
  },
  pricesTextSemi: {
    fontFamily: Fonts.SemiBold,
    color: COLORS.darkGrey,
    fontSize: SF(13),
  },
  trackOrderButton: {
    backgroundColor: COLORS.darkGrey,
    height: SH(50),
  },
});
