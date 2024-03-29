import { Fonts } from "@/assets";
import { ShadowStyles } from "@/theme";
import { COLORS } from "@/theme/Colors";
import { SF, SH, SW } from "@/theme/ScalerDimensions";
import { Dimensions, StyleSheet } from "react-native";
import { moderateScale, verticalScale } from "react-native-size-matters";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    ...ShadowStyles.shadow2,
    paddingHorizontal: SW(10),
  },
  maincontainer: {
    flexDirection: "row",
    backgroundColor: COLORS.white,
    alignItems: "center",
    height: SH(50),
  },
  iconcontainer: {
    backgroundColor: COLORS.primary,
    borderRadius: moderateScale(20),
    paddingHorizontal: moderateScale(12),
    paddingVertical: verticalScale(5),
    position: "absolute",
    right: SW(10),
  },
  subTitles: {
    fontSize: SF(14),
    color: COLORS.white,
    fontFamily: Fonts.Regular,
    alignSelf: "flex-end",
  },
  title: {
    fontSize: SF(16),
    color: COLORS.dark_gray,
    fontFamily: Fonts.SemiBold,
  },
  balanceCon: {
    marginTop: SH(20),

    width: SW(346),
    height: SH(180),
    borderRadius: 10,
    padding: 10,
    alignSelf: "center",
    backgroundColor: COLORS.white,
    ...ShadowStyles.shadow2,
  },
  mainBal: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  jbrlogo: {
    width: SW(50),
    height: SW(50),
  },
  balanceLabel: {
    color: COLORS.dark_gray,
    fontFamily: Fonts.Regular,
    fontSize: SF(14),
  },
  balance: {
    fontWeight: "500",
    fontSize: SF(22),
    fontFamily: Fonts.MaisonRegular,
    color: COLORS.black,
  },
  balanceSmallText: {
    fontWeight: "500",
    fontSize: SF(16),
    fontFamily: Fonts.MaisonRegular,
    color: COLORS.black,
  },
  earnView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: verticalScale(20),
  },
  earnBtn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  earnlogo: {
    width: SW(16),
    height: SW(16),
  },
  earnText: {
    fontFamily: Fonts.Regular,
    fontSize: SF(14),
    marginTop: 4,
    fontWeight: "400",
    color: COLORS.text,
  },
  kebabmenu: {
    width: SW(16),
    height: SW(16),
  },
  delHiStText: {
    fontSize: SF(18),
    fontFamily: Fonts.MaisonRegular,
    color: COLORS.text,
  },
  medalCon: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: SW(105),
    height: SH(62),
    borderRadius: 5,
    paddingVertical: verticalScale(9),
    backgroundColor: COLORS.placeholder,
  },

  medalText: {
    fontSize: SF(14),
    fontFamily: Fonts.Regular,
    color: COLORS.dark_gray,
  },
  returnCount: {
    fontFamily: Fonts.Regular,
    fontSize: SF(16),
    fontWeight: "700",
    color: COLORS.text,
  },
  trofie: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  trofieimg: {
    width: SW(16),
    height: SW(15),
    marginRight: 2,
  },
  bgEarn: {
    width: SW(24),
    height: SW(24),
    resizeMode: "contain",
    marginTop: 4,
  },
  deliveryFeeText: {
    color: "#14171A",
    fontSize: SF(14),
    fontFamily: Fonts.SemiBold,
  },
  balanceText: {
    color: COLORS.dark_gray,
    fontSize: SF(14),
    fontFamily: Fonts.Regular,
  },
  dateTime: {
    color: COLORS.text,
    fontSize: SF(10),
  },
  tranHisCon: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    paddingVertical: verticalScale(9),
    borderBottomColor: "#F5F5F5",
    marginHorizontal: 5,
  },
  closeText: {
    textAlign: "right",
    color: COLORS.white,
    fontSize: SF(16),
    fontFamily: Fonts.SemiBold,
    paddingHorizontal: SW(16),
    paddingVertical: SH(15),
  },
  mainView: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: COLORS.white,
  },
  transferBalanceText: {
    textAlign: "center",
    color: COLORS.text,
    fontSize: SF(18),
    fontFamily: Fonts.MaisonRegular,
    paddingVertical: SH(15),
  },
  hr: {
    backgroundColor: COLORS.light_border,
    width: SW(340),
    height: SW(1),
    alignSelf: "center",
  },
  fieldHr: {
    backgroundColor: COLORS.lightgray,
    width: SW(340),
    height: SW(1),
    alignSelf: "center",
  },
  amountView: {
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: SH(10),
  },
  dollarSign: {
    textAlignVertical: "top",
    bottom: 10,
    color: COLORS.black,
    fontSize: SF(20),
    fontFamily: Fonts.Regular,
  },
  dollarAmount: {
    color: COLORS.black,
    fontSize: SF(70),
    fontFamily: Fonts.SemiBold,
  },
  balanceDesc: {
    color: COLORS.dark_gray,
    fontSize: SF(18),
    fontFamily: Fonts.Regular,
    textAlign: "center",
    paddingVertical: SH(10),
  },
  paymentMethodView: {
    width: SW(328),
    height: SH(62),
    borderWidth: 1,
    borderColor: COLORS.lightBlue,
    alignSelf: "center",
    borderRadius: 5,
    marginTop: SH(20),
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  feeView: {
    width: SW(328),
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginTop: SH(30),
    paddingBottom: 10,
  },
  feeText: {
    color: COLORS.black,
    fontSize: SF(16),
    fontFamily: Fonts.Regular,
  },
  instantImage: {
    width: SW(18),
    height: SH(20),
    resizeMode: "contain",
    paddingLeft: SW(20),
  },
  instantText: {
    color: COLORS.dark_gray,
    fontSize: SF(16),
    fontFamily: Fonts.SemiBold,
    paddingLeft: SH(16),
  },
  arrowImage: {
    width: SW(15),
    height: SH(15),
    resizeMode: "contain",
    // right:20
  },
  instantDesc: {
    color: COLORS.text,
    fontSize: SF(11),
    fontFamily: Fonts.Regular,
    paddingLeft: SH(16),
  },
  imageTextView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: SW(50),
  },
  description: {
    color: COLORS.text,
    fontSize: SF(12),
    fontFamily: Fonts.Regular,
    paddingHorizontal: SH(20),
    paddingTop: SH(20),
  },
  buttonStyle: {
    width: SW(328),
    backgroundColor: COLORS.textInputBackground,
    alignSelf: "center",
    marginTop: SH(36),
  },
  modalImages: {
    width: SW(16),
    height: SW(16),
    resizeMode: "contain",
  },
  modalText: {
    fontFamily: Fonts.Regular,
    fontSize: SF(12),
    color: COLORS.dark_gray,
    paddingLeft: SW(3),
  },
  popupMainView: {
    alignSelf: "flex-end",
    top: SH(40),
    right: SH(3),
    width: SW(135),
    height: SH(70),
    position: "absolute",
    ...ShadowStyles.shadow2,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    paddingVertical: SH(16),
    marginTop: SH(80),
    borderRadius: SW(5),
  },
  transferView: {
    flexDirection: "row",
    paddingVertical: SH(8),
    paddingHorizontal: SW(5),
  },
  paymentMainView: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: SH(30),
    width: SW(340),
    alignSelf: "center",
    borderBottomWidth: 1,
    paddingBottom: SH(11),
    borderBottomColor: COLORS.lightgray,
  },
  paymentImageStyle: {
    width: SW(20),
    height: SH(16),
    resizeMode: "contain",
  },
  paymentTextStyle: {
    fontFamily: Fonts.Regular,
    fontSize: SF(14),
    color: COLORS.dark_gray,
    paddingLeft: SW(10),
  },
  rightArrowView: {
    alignSelf: "flex-end",
    alignItems: "flex-end",
  },
  leftView: {
    flexDirection: "row",
    width: SW(320),
  },
  labelText: {
    fontSize: SF(14),
    fontFamily: Fonts.SemiBold,
    color: COLORS.text,
    textAlignVertical: "center",
  },
  txtField: {
    width: SW(340),
    fontSize: SF(13),
    fontFamily: Fonts.Regular,
    fontStyle: "italic",
    borderColor: "transparent",
    height: SH(48),
    ...ShadowStyles.shadow2,
    borderRadius: 5,
    paddingLeft: SW(10),
    backgroundColor: COLORS.textInputBackground,
  },
  cardNumberView: {
    width: SW(340),
    alignSelf: "center",
    justifyContent: "center",
  },
  expiryTextField: {
    width: SW(160),
    fontSize: SF(13),
    fontFamily: Fonts.Regular,
    fontStyle: "italic",
    borderColor: "transparent",
    height: SH(48),
    ...ShadowStyles.shadow2,
    borderRadius: 5,
    paddingLeft: SW(10),
    backgroundColor: COLORS.textInputBackground,
  },
  rowView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  checkboxImage: {
    width: SW(20),
    height: SW(20),
    resizeMode: "contain",
    alignSelf: "center",
  },
  checkboxView: {
    height: SW(25),
    width: SW(25),
    justifyContent: "center",
    alignItems: "center",
  },
  descText: {
    fontFamily: Fonts.Regular,
    fontSize: SF(11),
    color: COLORS.text,
    paddingLeft: SW(48),
    paddingRight: SW(20),
  },
  transferButton: {
    width: SW(328),
    backgroundColor: COLORS.primary,
    alignSelf: "center",
    bottom: SH(40),
  },
  addBalanceView: {
    paddingHorizontal: SW(20),
    paddingVertical: SH(10),
  },
  addBalanceText: {
    color: COLORS.primary,
    fontFamily: Fonts.SemiBold,
    fontSize: SF(15),
  },
  modalContainerStyle: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: SW(20),
    paddingVertical: SH(15),
    marginTop: SH(100),
    marginBottom: SH(100),
    // height: 500,
    // position: "absolute",
    // width: "100%",
  },

  crossView: {
    alignSelf: "flex-end",
  },
  cross: {
    fontSize: SF(20),
    color: COLORS.darkGrey,
  },
  enterAmountText: {
    alignSelf: "center",
    color: COLORS.darkGrey,
    fontSize: SF(16),
  },
  amountInput: {
    borderBottomWidth: 0,
    backgroundColor: COLORS.placeHolder,
    width: SW(150),
    alignSelf: "center",
    paddingHorizontal: SW(20),
    paddingVertical: SW(10),
    height: SH(50),
    borderRadius: SW(5),
  },
  bankAccountsView: {
    borderWidth: 1,
    borderRadius: SW(5),
    paddingHorizontal: SW(15),
    paddingVertical: SH(10),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bankDetailsText: {
    color: COLORS.darkGrey,
    fontSize: SF(15),
    fontFamily: Fonts.Regular,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkIconstyle: {
    height: SW(20),
    width: SW(20),
  },
  modalButtonView: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: SH(20),
  },
  menuIconView: {
    // marginTop: SH(23),
  },
  menuIcon: {
    height: SH(25),
    width: SW(25),
    padding: SH(5),
  },
  checkMarkIcon: {
    height: SH(120),
    width: SW(120),
    tintColor: COLORS.primary,
  },
  transactionDetailView: {
    justifyContent: "flex-end",
    paddingHorizontal: SW(20),
    marginHorizontal: SW(15),
    flex: 1,
    paddingVertical: SH(20),
    alignItems: "center",
    backgroundColor: COLORS.input_bg,
    borderRadius: SW(10),
  },
  transferTypeSmallText: {
    color: COLORS.primary,
    fontFamily: Fonts.Regular,
    fontSize: SF(15),
  },
  orderPaymentDateText: {
    fontFamily: Fonts.Regular,
    fontSize: SF(12),
    color: COLORS.darkGrey,
  },
  transactionIdHeadingText: {
    fontFamily: Fonts.SemiBold,
    fontSize: SF(12),
    color: COLORS.black,
  },
  transactionIdText: {
    fontFamily: Fonts.Regular,
    fontSize: SF(12),
    color: COLORS.black,
  },
  topViewDetail: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: SW(20),
  },
  paymentTypeHeadingText: {
    color: COLORS.primary,
    fontFamily: Fonts.Bold,
    fontSize: SF(28),
  },
  transactionAmountText: {
    color: COLORS.darkGrey,
    fontFamily: Fonts.MaisonMonoBold,
    fontSize: SF(25),
  },
});
