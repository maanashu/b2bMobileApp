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
    ...ShadowStyles.shadow2,
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
    fontSize: SF(20),
  },
  itemFullName: {
    color: COLORS.black,
    fontSize: SF(16),
    marginTop: SH(4),
    paddingHorizontal: SW(5),
  },
  headingView: {
    flexDirection: "row",
    alignItems: "center",
  },
  item: {
    flexDirection: "row",
  },
  shoes: {
    height: SH(65),
    width: SW(66.4),
  },
  counterView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: SW(20),
    alignItems: "center",
  },
  counterButtonView: {
    height: SH(40),
    width: SW(120),
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
    fontSize: SF(25),
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
    fontSize: SF(20),
  },
  selectSizeView: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  selectSizetext: {
    color: COLORS.black,
    fontSize: SF(15),
  },
  rowView: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonView: {
    justifyContent: "flex-end",
    flex: 1,
  },
  checkoutButton: {
    backgroundColor: COLORS.activeTab,
    borderRadius: 10,
    borderWidth: 0,
  },
  checkoutButtonText: {
    color: COLORS.white,
  },
});
