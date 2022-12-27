import { Fonts } from "@/assets";
import { COLORS } from "@/theme/Colors";
import { SH, SF, SW } from "@/theme/ScalerDimensions";
import { StyleSheet } from "react-native";
import { moderateScale, ms } from "react-native-size-matters";

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,

    backgroundColor: COLORS.white,
  },
  headerText: {
    fontFamily: Fonts.SemiBold,
    fontSize: ms(14),
    color: COLORS.darkGrey,
  },
  mainView: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: SW(10),
  },
  yewiView: {
    borderRadius: 10,
    paddingVertical: SH(10),
    backgroundColor: COLORS.placeholder,
    paddingHorizontal: SW(5),
    height: SH(190),
    paddingHorizontal: SW(10),
  },
  yewiInnerView: {
    flexDirection: "row",
  },
  thirdView: {
    height: SH(74),
    width: SW(74),
    borderRadius: 5,
  },
  logoYewi: {
    height: SH(36),
    width: SW(36),
  },
  yewiHeadingText: {
    color: COLORS.black,
    fontSize: SF(14),
    fontFamily: Fonts.SemiBold,
  },
  certified: {
    height: SH(16),
    width: SW(39),
  },
  yewiIcons: {
    height: SH(14),
    width: SW(10),
    marginLeft: SW(5),
  },
  yewiSmallText: {
    fontSize: SF(10),
    fontFamily: Fonts.Regular,
    color: COLORS.light_grey,
  },
  yewistar: {
    height: SH(9),
    width: SW(9),
    marginLeft: SW(5),
  },
  yewiClock: {
    height: SH(10),
    width: SW(9),
    marginLeft: SW(5),
  },
  sideIcons: {
    height: SH(24),
    width: SW(16),
    marginRight: SW(5),
  },
  forward: {
    height: SH(20),
    width: SW(10),
    marginHorizontal: SW(7),
  },
  checks: {
    height: SH(17),
    width: SW(15),
  },
  borderTop: {
    margin: 5,
    borderTopWidth: 1,
    borderTopColor: COLORS.termsBorder,
  },
  numRating: {
    height: 35,
    width: 120,
  },
  starRating: {
    height: 35,
    width: "100%",
  },
  viewAll: {
    alignItems: "flex-end",
    paddingHorizontal: SW(20),
  },
  viewImage: {
    height: SH(40),
    width: SW(80),
    justifyContent: "flex-end",
  },
  ratingView: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
  },
  iconView: {
    flexDirection: "row",
    alignItems: "center",
  },
  trade: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    alignItems: "center",
  },
  sideIconView: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconStyling: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    alignItems: "center",
  },
  starBadge: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },
  iconCenter: {
    flexDirection: "row",
    alignItems: "center",
  },
  yewiSmallView: {
    flexDirection: "row",
    alignItems: "center",
  },
  yewiDirection: {
    paddingHorizontal: SW(5),
    flexDirection: "row",
    alignItems: "center",
  },
  topButtons: {
    height: SH(40),
    width: SW(100),
    borderRadius: 5,
  },
  topButtonView: {
    flexDirection: "row",
    paddingHorizontal: 5,
    justifyContent: "space-between",
  },
  topButtonRight: {
    marginRight: 5,
    height: SH(40),
    width: SW(90),
    borderRadius: 5,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
  },
  topButtonLeft: {
    marginRight: 5,
    height: SH(40),
    width: SW(90),
    borderRadius: 5,
    backgroundColor: COLORS.sky,
    justifyContent: "center",
    alignItems: "center",
  },
  leftButtonText: {
    fontFamily: Fonts.Regular,
    fontSize: ms(13),
    color: COLORS.white,
  },
  rightButtonText: {
    fontFamily: Fonts.Regular,
    fontSize: ms(13),
    color: COLORS.primary,
  },
  topView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  productImage: {
    height: 80,
    width: 350,
    marginLeft: -50,
    borderRadius: 5,
  },
  QuantityView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  quantityInput: {
    width: SW(150),
    backgroundColor: COLORS.placeholder,
    borderRadius: 8,
    height: SH(52),
    marginVertical: 0,
    borderBottomWidth: 0,
  },
  productQuantityText: {
    color: COLORS.black,
    fontSize: SF(13),
    marginBottom: SH(5),
    fontFamily: Fonts.SemiBold,
  },
  input: {
    borderBottomWidth: 0,
    backgroundColor: COLORS.placeholder,
    borderRadius: 5,
    height: SH(280),
  },
  dashedView: {
    width: "100%",
    height: SH(80),
    borderStyle: "dashed",
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: COLORS.activeTab,
  },
  uploadPicture: {
    height: SH(50),
    width: "100%",
    resizeMode: "stretch",
  },
  storedPic: {
    height: SH(80),
    width: SW(80),
    marginHorizontal: SW(5),
    marginBottom: SH(15),
  },
  modalBackground: {
    padding: SW(30),
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 12,
  },
  closeView: {
    alignItems: "flex-end",
    marginTop: -23,
    marginBottom: SH(10),
    marginRight: -22,
  },
  closeIcon: {
    height: SH(20),
    width: SH(20),
  },
  agreeText: {
    color: COLORS.black,
    fontSize: SF(12),
    fontFamily: Fonts.SemiBold,
    fontWeight: "500",
    flex: 1,
    flexWrap: "wrap",
  },
  certifiedIcon: {
    height: SH(30),
    width: SW(40),
    marginHorizontal: SW(2),
  },
  galleryImage: {
    height: SH(32),
    width: SW(30),
  },
  importPicture: {
    height: SH(22),
    width: SW(20),
    marginHorizontal: SW(5),
  },
  addHereText: {
    color: COLORS.darkGrey,
    fontFamily: Fonts.Regular,
  },
  lastText: {
    fontFamily: Fonts.Regular,
    fontSize: moderateScale(11),
  },
});
