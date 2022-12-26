import { Fonts } from "@/assets";
import { ShadowStyles } from "@/theme";
import { COLORS } from "@/theme/Colors";
import { SF, SH, SW } from "@/theme/ScalerDimensions";
import { StyleSheet } from "react-native";
import { s } from "react-native-size-matters";

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
    elevation: 5,
    paddingHorizontal: SW(20),
    justifyContent: "center",
  },
  headerInnerView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignItems: "center",
  },
  crossIcon: {
    height: SH(35),
    width: SW(40),
  },
  mainContainer: {
    backgroundColor: COLORS.white,
    paddingHorizontal: SW(18),
    paddingVertical: SH(5),
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
  buttonView: {
    paddingHorizontal: SW(20),
    flex: 1,
    justifyContent: "flex-end",
    paddingVertical: SH(20),
  },
  doneButton: {
    backgroundColor: COLORS.activeTab,
    borderWidth: 0,
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
  addressView: {
    backgroundColor: COLORS.inputBorder,
    height: SH(60),
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 1,
  },
  addIcon: {
    height: SH(25),
    width: SW(25),
    marginHorizontal: SW(5),
  },
  addAddressText: {
    color: COLORS.activeTab,
  },
  jobrWalletView: {
    backgroundColor: COLORS.white,
    ...ShadowStyles.shadow2,
    height: SH(100),
    borderRadius: 10,
    marginHorizontal: 1,
  },
  jbrText: {
    fontFamily: Fonts.Regular,
  },
  walletInfoView: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    justifyContent: "space-between",
  },
  walletInnerView: {
    flexDirection: "row",
    alignItems: "center",
  },
  walletIcons: {
    height: 25,
    width: 25,
    marginRight: SW(4),
  },
  orderedProductsView: {
    backgroundColor: COLORS.white,
    height: SH(300),
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
    color: COLORS.black,
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
    marginHorizontal: SW(20),
    marginBottom: SH(20),
  },
  missingAddressButton: {
    backgroundColor: COLORS.secondary,
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
    height: SH(40),
    width: SW(48),
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: COLORS.white,
    borderRadius: 8,
  },
  placeOrderText: {
    fontFamily: Fonts.Bold,
    color: COLORS.white,
    fontSize: SF(16),
  },
});
