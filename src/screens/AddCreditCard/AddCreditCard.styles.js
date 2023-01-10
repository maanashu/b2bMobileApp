import { Fonts } from "@/assets";
import { ShadowStyles } from "@/theme";
import { COLORS } from "@/theme/Colors";
import { SF, SH, SW } from "@/theme/ScalerDimensions";
import { StyleSheet, Dimensions } from "react-native";
import { moderateScale, ms, s, vs } from "react-native-size-matters";
const windowWidth = Dimensions.get("window").width;

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
    marginBottom: 5,
  },
  headerInnerView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignItems: "center",
  },
  mainView: {
    flex: 1,
    paddingHorizontal: ms(20),
    backgroundColor: COLORS.white,
    paddingVertical: vs(20),
  },
  cardInput: {
    borderBottomWidth: 0,
    backgroundColor: COLORS.inputBorder,
    height: vs(48),
    borderRadius: s(5),
  },
  headingsText: {
    color: COLORS.darkGrey2,
    fontFamily: Fonts.Regular,
    fontSize: s(14),
    marginBottom: vs(2),
  },
  rowView: {
    flexDirection: "row",

    justifyContent: "space-between",
  },
  smallInput: {
    height: vs(48),
    borderRadius: s(5),
    borderBottomWidth: 0,
    backgroundColor: COLORS.placeHolder,
  },
  selectView: {
    flexDirection: "row",
    alignItems: "center",
  },
  outerDot: {
    height: ms(20),
    width: ms(20),
    borderRadius: ms(10),
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    marginRight: ms(5),
  },
  innerDot: {
    height: ms(12),
    width: ms(12),
    borderRadius: ms(6),
    backgroundColor: "red",
  },
  shippingText: {
    fontFamily: Fonts.Regular,
    color: COLORS.text,
    fontSize: s(13),
  },
  yesNoView: {
    flexDirection: "row",
    alignItems: "center",
    width: "35%",
    justifyContent: "space-between",
  },
  saveCardView: {
    flexDirection: "row",
    alignItems: "center",
  },
});
