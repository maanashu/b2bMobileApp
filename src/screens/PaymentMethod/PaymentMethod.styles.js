import { Fonts } from "@/assets";
import { ShadowStyles } from "@/theme";
import { COLORS } from "@/theme/Colors";
import { SF, SH, SW } from "@/theme/ScalerDimensions";
import { StyleSheet, Dimensions } from "react-native";
import {
  moderateScale,
  ms,
  s,
  verticalScale,
  vs,
} from "react-native-size-matters";
const windowWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  mainView: {
    paddingHorizontal: SW(20),
    flex: 1,
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
  balanceText: {
    color: COLORS.black,
    fontFamily: Fonts.SemiBold,
    fontSize: SF(18),
  },

  InnerbalanceView: {
    height: vs(60),
    width: "100%",
    backgroundColor: COLORS.inputBorder,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: ms(10),
    borderRadius: 15,
  },
  coinView: {
    backgroundColor: COLORS.primary,
    height: vs(30),
    borderRadius: vs(30),
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: SW(10),
    justifyContent: "space-between",
  },
  coinStackIcon: {
    height: SH(20),
    width: SW(20),
  },
  coinText: {
    color: COLORS.white,
    fontFamily: Fonts.SemiBold,
    fontSize: vs(14),
  },
  backgroundView: {
    backgroundColor: COLORS.white,
    paddingHorizontal: SW(10),
    paddingVertical: SH(15),
    borderRadius: SW(5),
    ...ShadowStyles.shadow5,
    marginHorizontal: SW(1),
    marginTop: SH(1),
    height: SH(130),
  },
  smallDetailHeadings: {
    color: COLORS.black,
    fontFamily: Fonts.SemiBold,
    fontSize: SF(13),
  },
  smallDetailText: {
    color: COLORS.black,
    fontFamily: Fonts.Regular,
    fontSize: SF(12),
  },
  bankIcon: {
    height: SH(25),
    width: SH(25),
    bottom: SH(2),
  },
  iconBackground: {
    backgroundColor: COLORS.inputBorder,
    height: SH(50),
    width: SH(50),
    borderRadius: SH(25),
    justifyContent: "center",
    alignItems: "center",
  },
  bottomLine: {
    borderBottomWidth: SH(0.5),
    borderColor: COLORS.text,
  },
  rowJustifiedView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bottomText: {
    fontFamily: Fonts.Regular,
    color: COLORS.light_grey,
    fontSize: SF(12),
  },
  loaderStyle: {
    transform: [{ scale: 0.6 }],
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
  },
});
