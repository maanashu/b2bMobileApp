import { Fonts } from "@/assets";
import { ShadowStyles } from "@/theme";
import { COLORS } from "@/theme/Colors";
import { SF, SH, SW } from "@/theme/ScalerDimensions";
import { StyleSheet, Dimensions } from "react-native";
import {
  moderateScale,
  ms,
  s,
  scale,
  verticalScale,
  vs,
} from "react-native-size-matters";

export const styles = StyleSheet.create({
  cont: {
    flex: 1,
    backgroundColor: COLORS.grey,
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

  iconcontainer: {
    alignSelf: "center",
    backgroundColor: COLORS.primary,
    borderRadius: moderateScale(25),
    flexDirection: "row",
    paddingHorizontal: moderateScale(10),
    paddingVertical: verticalScale(5),
    justifyContent: "center",
  },

  mask: {
    tintColor: COLORS.primary,
    height: 16,
    width: 16,
    alignSelf: "center",
    margin: 10,
  },

  getName: {
    color: COLORS.white,
    fontFamily: Fonts.SemiBold,
    fontSize: scale(16),
  },
  text: {
    color: COLORS.white,
    fontFamily: Fonts.Medium,
    fontSize: scale(12),
  },

  formText: {
    fontFamily: Fonts.SemiBold,
    fontSize: scale(14),
    color: COLORS.primary,
    alignSelf: "center",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  img: {
    height: SH(24),
    width: Platform.OS == "ios" ? SW(24) : SW(22),
  },

  rowCard: {
    backgroundColor: COLORS.primary,
    borderRadius: moderateScale(10),
    padding: moderateScale(12),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowMainCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: moderateScale(40),
    marginVertical: verticalScale(5),
    borderWidth: 2,
    borderColor: COLORS.primary,
    padding: 5,
    justifyContent: "space-between",
    marginHorizontal: moderateScale(20),
  },

  renderinput: {
    borderRadius: moderateScale(35),
    paddingHorizontal: SH(20),
    paddingVertical: SH(15),
    flexDirection: "row",
    backgroundColor: COLORS.primary,
    width: 140,
  },
  alignSelf: {
    alignSelf: "center",
  },
  walletCorner: {
    // width:SW(110),
    // height:SW(110),
    width: 76,
    height: 90,
    resizeMode: "contain",
    borderTopRightRadius: 10,
    position: "absolute",
    top: 0,
    right: 0,
  },
  closeText: {
    color: COLORS.white,
    fontSize: SF(16),
    fontFamily: Fonts.SemiBold,
  },
  headingRowView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: ms(20),
  },
  walletText: {
    color: COLORS.black,
    fontFamily: Fonts.MaisonMonoBold,
    fontSize: vs(16),
  },
  coinIcon: {
    height: vs(40),
    width: ms(50),
  },
  referralView: {
    backgroundColor: COLORS.activeTab,
    height: vs(110),
    borderRadius: 10,
    flexDirection: "row",
  },
  refferalBigText: {
    marginTop: vs(7),
    color: COLORS.white,
    fontFamily: Fonts.SemiBold,
    fontSize: s(16),
  },
  refferalsmallText: {
    marginTop: vs(5),
    color: COLORS.white,
    fontFamily: Fonts.Regular,
    fontSize: s(12),
  },
  shareButton: {
    marginLeft: ms(20),
    borderWidth: 1,
    height: vs(25),
    width: ms(60),
    alignItems: "center",
    justifyContent: "center",
    borderColor: COLORS.white,
    borderRadius: 5,
  },
  shareText: { color: COLORS.white, fontFamily: Fonts.Regular },
  cornerImage: {
    position: "absolute",
    top: 0,
    right: 0,
    height: vs(80),
    width: ms(74),
  },
  agreementText: {
    color: COLORS.darkGrey2,
    fontFamily: Fonts.Regular,
    fontSize: s(11),
    textAlign: "justify",
  },
});
