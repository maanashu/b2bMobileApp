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
  removeBankloaderStyle: {
    transform: [{ scale: 0.6 }],
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
  },
  addBankButton: {
    borderRadius: 5,
    marginBottom: 10,
    fontSize: SF(16),
    color: COLORS.white,
    textAlign: "center",
    alignItems: "center",
    marginHorizontal: SW(10),
    justifyContent: "center",
    paddingHorizontal: moderateScale(16),
    paddingVertical: moderateScale(14.5),
    fontFamily: Fonts.SemiBold,
    backgroundColor: COLORS.primary,
  },
  buttonView: {
    justifyContent: "flex-end",
    paddingVertical: SH(10),
  },

  wrapperStyle: {
    backgroundColor: "rgba(0,0,0,0.6)",
    width: "100%",
    alignSelf: "center",
  },
  containerStyle: {
    ...ShadowStyles.shadow,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: Dimensions.get("window").height / 3.2,
  },
  draggableIconStyle: {
    backgroundColor: COLORS.light_border,
  },
  alignSelfCenter: {
    alignSelf: "center",
  },
  cellRoot: {
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    width: SW(50),
    height: SW(50),
    borderRadius: SW(50),
    borderColor: COLORS.light_border,
    backgroundColor: COLORS.lightgray,
    marginHorizontal: SW(5),
  },
  cellText: {
    fontSize: SF(20),
    color: COLORS.black,
    fontFamily: Fonts.Medium,
  },
});
