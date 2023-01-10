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
    paddingHorizontal: ms(20),
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
    fontSize: s(18),
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
    width: ms(60),
    borderRadius: vs(30),
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: ms(10),
    justifyContent: "space-between",
  },
  coinStackIcon: {
    height: vs(20),
  },
  coinText: {
    color: COLORS.white,
    fontFamily: Fonts.SemiBold,
    fontSize: vs(14),
  },
  applePayView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  appleIcon: {
    height: vs(13),
    width: ms(40),
  },
  paymentMethodText: {
    color: COLORS.darkGrey,
    marginLeft: ms(10),
    fontSize: ms(14),
  },
  bottomLine: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.termsBorder,
    marginBottom: vs(10),
    marginTop: vs(5),
  },
  icons: {
    height: vs(18),
    width: ms(25),
    marginRight: ms(10),
  },
  bankIcon: {
    height: vs(22),
    width: ms(25),
    marginRight: ms(10),
  },
  appleIconView: {
    height: vs(18),
    width: ms(25),

    alignItems: "center",
    justifyContent: "center",
  },
  appleSmallIcon: {
    height: vs(18),
    width: ms(24),
  },
  headerText: {
    fontFamily: Fonts.SemiBold,
    color: COLORS.black,
    fontSize: s(14),
  },
});
