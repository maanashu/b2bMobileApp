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
    paddingHorizontal: SW(20),
    justifyContent: "center",
  },
  headerInnerView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  crossIcon: {
    height: SH(25),
    width: SW(25),
  },
  mainView: {
    flex: 1,
    paddingHorizontal: SW(20),
    paddingVertical: SH(20),
  },
  itemName: {
    backgroundColor: COLORS.light_blue,
    height: SH(45),
    justifyContent: "center",
    paddingHorizontal: SW(20),
    borderRadius: 10,
  },
  itemNameText: {
    color: COLORS.black,
    fontSize: SF(16),
  },
  itemColorHeading: {
    color: COLORS.black,
    fontSize: SF(18),
  },
  itemFullName: {
    color: COLORS.black,
    fontSize: SF(14),
    marginTop: SH(4),
    paddingHorizontal: SW(5),
  },
  headingView: {
    flexDirection: "row",
    alignItems: "center",
  },
  item: {
    flex: 1 / 5,
    borderRadius: SW(2),
  },
  shoes: {
    height: SH(65),
    width: SW(58),
  },
  counterView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: SW(12),
    alignItems: "center",
  },
  counterButtonView: {
    height: SH(40),
    width: SW(111),
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLORS.black,
  },
  decrementButton: {
    color: COLORS.black,
    fontSize: SF(30),
  },
  incrementButton: {
    color: COLORS.black,
    fontSize: SF(20),
  },
  selectedNumber: {
    color: COLORS.black,
    fontSize: SF(16),
  },
  decrementView: {
    justifyContent: "center",
    alignItems: "center",

    marginBottom: 5,
    height: "100%",
    width: SW(30),
  },
  incrementView: {
    justifyContent: "center",
    alignItems: "center",

    height: "100%",
    width: SW(30),
  },
  shoeNumber: {
    color: COLORS.black,
    fontSize: SF(16),
  },

  buttonView: {
    justifyContent: "flex-end",
    paddingHorizontal: 20,
  },
  checkoutButton: {
    backgroundColor: COLORS.activeTab,
    borderRadius: 5,
    borderWidth: 0,
    height: SH(55),
  },
  checkoutButtonText: {
    color: COLORS.white,
  },
  boldTextHeading: {
    fontFamily: Fonts.Bold,
    fontSize: SF(16),
    color: COLORS.darkGrey,
  },
  RegularTextHeading: {
    fontFamily: Fonts.Regular,
    fontSize: SF(16),
    color: COLORS.darkGrey,
  },
  innerCounterView: {
    paddingLeft: SW(40),
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    alignItems: "center",
    marginBottom: SH(10),
  },

  upperView: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },
  subHeadingView: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: SW(15),
    marginBottom: SH(-30),
  },
  bundleItems: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.blue,
    borderRadius: 1,
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    margin: 2,
    borderRadius: 5,
    borderWidth: 0.5,
  },
  upperButtons: {
    alignItems: "center",
    justifyContent: "center",
    height: SH(50),
  },
  primaryColorText: {
    color: COLORS.primary,
    fontSize: SF(16),
    fontFamily: Fonts.SemiBold,
  },
  smallText: {
    color: COLORS.darkGrey2,
    fontSize: SF(12),
    fontFamily: Fonts.Regular,
  },
  rowAlign: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
  },
});
