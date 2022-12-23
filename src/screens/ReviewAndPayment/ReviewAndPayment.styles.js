import { Fonts } from "@/assets";
import { ShadowStyles } from "@/theme";
import { COLORS } from "@/theme/Colors";
import { SF, SH, SW } from "@/theme/ScalerDimensions";
import { StyleSheet } from "react-native";

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
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: SW(20),
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
    backgroundColor: COLORS.inputBorder,
    ...ShadowStyles.shadow1,
    height: SH(100),
    borderRadius: 10,
  },
});
