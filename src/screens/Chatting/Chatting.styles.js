import { Fonts } from "@/assets";
import { ShadowStyles } from "@/theme";
import { COLORS } from "@/theme/Colors";
import { SF, SH, SW } from "@/theme/ScalerDimensions";
import { StyleSheet } from "react-native";
import { moderateScale, ms, s, vs } from "react-native-size-matters";

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
    ...ShadowStyles.shadow2,
    paddingHorizontal: SW(20),
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  HeaderNameText: {
    fontFamily: Fonts.SemiBold,
    fontSize: SF(14),
    color: COLORS.darkGrey,
  },
  headerCompanyName: {
    fontFamily: Fonts.Regular,
    fontSize: SF(11),
  },
  mainContainer: {
    marginVertical: SH(5),
    flex: 1,
    backgroundColor: COLORS.white,
  },
  chatViewContainer: {
    marginHorizontal: SW(20),
    flex: 1,
    backgroundColor: COLORS.white,
  },
  chattingIcon: {
    height: 25,
    width: 25,
    marginRight: SW(8),
  },
  bottomOptionsView: {
    marginTop: SH(15),
    backgroundColor: COLORS.inputBorder,
    paddingHorizontal: SW(20),
    paddingVertical: SH(20),
  },
  optionText: {
    textAlign: "center",
    fontFamily: Fonts.MaisonRegular,
    fontSize: SF(11),
    color: COLORS.light_grey,
  },
  crossIconView: {
    alignItems: "flex-end",
  },
  iconStyle: {
    height: SW(30),
    width: SW(30),
  },
  cameraView: {
    flexDirection: "row",
    alignItems: "center",
  },
  cameraText: {
    fontFamily: Fonts.SemiBold,
    fontSize: SF(16),
    paddingHorizontal: SW(10),
    color: COLORS.darkGrey,
  },
  cameraIcons: {
    tintColor: "black",
    height: SW(25),
    width: SW(30),
  },
  borderline: {
    borderBottomWidth: 1,
    borderColor: COLORS.placeHolder,
    marginVertical: SH(10),
  },
  quickReplyText: {
    fontFamily: Fonts.Regular,
    color: COLORS.darkGrey,
    fontSize: SF(16),
  },
  sendIcon: {
    height: SW(32),
    width: SW(32),
    marginRight: SW(10),
    marginBottom: SH(11),
  },
  inputToolbarStyle: {
    borderWidth: 1,
    borderRadius: SW(22),
    borderTopWidth: 1,
    borderTopColor: "black",
    height: 50,
    justifyContent: "center",
  },
  renderOptionsView: {
    justifyContent: "space-between",
    flex: 1,
  },
  align: {
    alignItems: "center",
  },
  messageProps: {
    height: 100,
    borderRadius: 20,
    margin: SH(5),
  },
  waitingText: {
    paddingHorizontal: SW(30),
    textAlign: "center",
    fontFamily: Fonts.Regular,
    fontSize: SF(12),
    color: COLORS.darkGrey,
  },
  scheduleButton: {
    width: SW(140),
    height: SH(50),
    borderWidth: 1.5,
    borderColor: COLORS.primary,
    backgroundColor: COLORS.white,
    borderRadius: 10,
  },
  buttonText: {
    fontFamily: Fonts.Bold,
    color: COLORS.primary,
    fontSize: SF(14),
  },
  fileView: {
    flexDirection: "row",
    alignItems: "center",
  },
  filesIcon: {
    height: ms(30),
    width: ms(30),
    marginRight: ms(10),
  },
  filesText: {
    fontFamily: Fonts.SemiBold,
    color: COLORS.darkGrey,
    fontSize: SF(15),
  },
  userPic: {
    height: ms(50),
    width: ms(50),
  },
  cardView: {
    flexDirection: "row",
    paddingHorizontal: ms(10),
  },
  userNameText: {
    fontFamily: Fonts.SemiBold,
    color: COLORS.black,
    fontSize: SF(16),
    paddingBottom: vs(4),
  },
  cardDetailText: {
    fontFamily: Fonts.Regular,
    color: COLORS.darkGrey,
    fontSize: SF(12),
    paddingVertical: vs(4),
  },
  userDetailView: {
    paddingLeft: ms(15),
  },
  rowView: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardIcons: {
    height: ms(18),
    width: ms(18),
    marginRight: ms(5),
  },
  SendButtonStyle: {
    borderWidth: 1,
    borderColor: COLORS.primary,
    width: ms(80),
    height: vs(30),
    backgroundColor: COLORS.white,
  },
  sendButtonText: {
    fontFamily: Fonts.Bold,
    color: COLORS.primary,
    fontSize: SF(12),
  },
  VoiceText: {
    fontFamily: Fonts.SemiBold,
    color: COLORS.black,
    alignSelf: "center",
    fontSize: SF(18),
  },
  micIcon: {
    height: ms(50),
    width: ms(50),
    alignSelf: "center",
  },
  pdfBackView: {
    backgroundColor: COLORS.inputBorder,
    paddingVertical: vs(10),
    paddingHorizontal: moderateScale(10),
    marginBottom: vs(7),
    borderRadius: moderateScale(8),
  },
  pdfRowView: {
    flexDirection: "row",
    alignItems: "center",
  },
  pdfIcon: {
    height: ms(25),
    width: ms(25),
    marginRight: ms(7),
  },
  addLocationIcon: {
    alignItems: "flex-start",
    height: ms(25),
    width: ms(25),
  },
  addLocationView: {
    alignSelf: "flex-start",
    alignItems: "center",
    paddingLeft: ms(15),
  },
  addLocationText: {
    fontFamily: Fonts.MaisonRegular,
    color: COLORS.light_grey,
    fontSize: SF(12),
  },
  translationHeadingText: {
    fontFamily: Fonts.Regular,
    fontSize: SF(14),
    color: COLORS.black,
  },
  translationText: {
    fontFamily: Fonts.Regular,
    fontSize: SF(13),
    color: COLORS.text,
    marginLeft: SW(18),
  },
  autoDetectView: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: SW(10),
    paddingVertical: SH(2),
    marginTop: SH(10),
    ...ShadowStyles.shadow2,
  },
  outgoingMessageview: {
    flexDirection: "row",
    paddingLeft: SW(10),
    alignItems: "center",
    paddingVertical: SH(2),
    marginTop: SH(10),
    ...ShadowStyles.shadow2,
  },
});
