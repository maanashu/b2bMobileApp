import { SH, SW, COLORS, SF, ShadowStyles } from "@/theme";
import { Fonts } from "@/assets";
import { StyleSheet } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

export const styles = StyleSheet.create({
  containers: {
    flex: 1,
    backgroundColor: "#ffffff",
    // borderWidth:2,
    // marginVertical:verticalScale(10)
  },
  maincontainer: {
    display: "flex",
    flexDirection: "row",
    // backgroundColor: COLORS.white,
    alignItems: "center",
    height: SH(50),
    paddingHorizontal: SW(10),
    justifyContent: "space-between",
  },
  container: {
    backgroundColor: COLORS.white,
    height: SH(50),
    ...ShadowStyles.shadow,
  },
  headerTitle: {
    fontSize: SF(14),
    color: COLORS.dark_gray,
    fontFamily: Fonts.SemiBold,
  },
  pickUpText: {
    fontWeight: "600",
    fontSize: scale(12),
    fontFamily: Fonts.Regular,
    color: COLORS.darkGray,
  },
  image: {
    // alignSelf: 'center',
    height: SH(25),
    width: SW(25),
  },
  supporterCon: {
    padding: 12,
  },
  manLogo: {
    width: SW(45),
    height: SW(45),
  },
  agentLogo: {
    width: SW(30),
    height: SW(30),
    marginVertical: verticalScale(2),
  },
  deliverManText: {
    fontFamily: Fonts.SemiBold,
    fontSize: scale(14),
    color: COLORS.black,
  },
  address: {
    fontFamily: Fonts.Regular,
    fontSize: scale(12),
    fontWeight: "400",
  },
  supporterText: {
    fontSize: SF(16),
    color: "#3C444D",
    fontFamily: Fonts.Regular,
  },
  supporterTime: {
    fontSize: SF(12),
    color: COLORS.black,
    fontFamily: Fonts.Regular,
  },
  // supporterCon:{
  //   borderBottomWidth: 2,
  //   borderBottomColor:COLORS.light_border,
  //   paddingVertical:verticalScale(9),
  // }
  hr: {
    backgroundColor: COLORS.light_border,
    width: SW(340),
    height: SW(1),
    marginVertical: verticalScale(5),
  },
  popupMainView: {
    alignSelf: "flex-end",
    top: SH(20),
    right: SH(10),
    width: SW(255),
    height: SH(290),
    position: "absolute",
    elevation: 5,
    backgroundColor: COLORS.white,
    // justifyContent: 'center',
    padding: 12,
    zIndex: 5,
    borderRadius: 15,
    flex: 1,
  },
  agentpopupMainView: {
    alignSelf: "flex-end",
    top: SH(325),
    right: SH(10),
    width: SW(255),
    height: SH(240),
    position: "absolute",
    elevation: 5,
    backgroundColor: COLORS.placeHolder,
    // justifyContent: 'center',
    padding: 12,
    zIndex: 5,
    borderRadius: 15,
  },
  aboutSupporter: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  supporterNum: {
    fontSize: SF(14),
    color: COLORS.text,
    fontFamily: Fonts.Regular,
    paddingHorizontal: moderateScale(5),
  },
  callIcon: {
    width: SW(25),
    height: SH(25),
    tintColor: COLORS.primary,
    resizeMode: "contain",
  },
  supporterLogo: {
    width: SW(20),
    height: SH(20),
    tintColor: COLORS.primary,
    marginVertical: verticalScale(1),
    resizeMode: "contain",
  },
  modelHr: {
    backgroundColor: COLORS.light_border,
    width: SW(230),
    height: SW(1),
    marginVertical: verticalScale(10),
  },
  totalTicket: {
    fontSize: SF(12),
    fontFamily: Fonts.SemiBold,
    color: COLORS.primary,
  },
  aboutTicket: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  ticketText: {
    fontSize: SF(12),
    fontFamily: Fonts.Regular,
    color: COLORS.text,
  },
  ticketCount: {
    color: COLORS.black,
    fontFamily: Fonts.SemiBold,
  },
  agentName: {
    fontSize: SF(14),
    color: COLORS.black,
    fontFamily: Fonts.Regular,
  },
  asignText: {
    color: COLORS.black,
    fontSize: SF(12),
    fontFamily: Fonts.SemiBold,
  },
  agentTicket: {
    fontSize: SF(12),
    color: COLORS.black,
    fontFamily: Fonts.Regular,
    alignItems: "center",
  },
  alsoAgent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
