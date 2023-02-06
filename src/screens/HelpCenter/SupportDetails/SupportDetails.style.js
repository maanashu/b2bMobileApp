import { SH, SW, COLORS, SF, ShadowStyles } from '@/theme';
import { Fonts } from '@/assets';
import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  containers: {
    flex: 1,
    backgroundColor: '#fff',
    // borderWidth:2,
    // marginVertical:verticalScale(10)
  },
  maincontainer: {
    display: 'flex',
    flexDirection: 'row',
    // backgroundColor: COLORS.white,
    alignItems: 'center',
    height: SH(50),
    paddingHorizontal: moderateScale(10),
    justifyContent: 'space-between',
  },
  container: {
    backgroundColor: COLORS.white,
    height: SH(50),
    ...ShadowStyles.shadow,
    marginHorizontal: moderateScale(-12),
  },
  headerTitle: {
    fontSize: SF(14),
    color: COLORS.dark_gray,
    fontFamily: Fonts.SemiBold,
  },
  pickUpText: {
    fontWeight: '600',
    fontSize: scale(12),
    fontFamily: Fonts.Regular,
    color: COLORS.darkGray,
  },
  image: {
    // alignSelf: 'center',
    height: SH(20),
    width: SW(20),
    resizeMode: 'contain',
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
    fontWeight: '400',
  },
  supporterText: {
    fontSize: SF(16),
    color: '#3C444D',
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
    alignSelf: 'flex-end',
    top: SH(10),
    right: SH(0),
    width: SW(255),
    height: SH(269),
    position: 'absolute',
    elevation: 5,
    backgroundColor: COLORS.white,
    // justifyContent: 'center',
    padding: 12,
    zIndex: 5,
    borderRadius: 15,
  },
  agentpopupMainView: {
    alignSelf: 'flex-end',
    top: SH(290),
    right: SH(0),
    width: SW(255),
    height: SH(230),
    position: 'absolute',
    elevation: 5,
    backgroundColor: COLORS.inputBorder,
    // justifyContent: 'center',
    padding: 12,
    zIndex: 5,
    borderRadius: 15,
  },
  aboutSupporter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    // alignItems:'center'
  },
  supporterNum: {
    fontSize: SF(12),
    color: COLORS.text,
    fontFamily: Fonts.Regular,
    paddingHorizontal: moderateScale(8),
  },
  supporterLogo: {
    width: SW(15),
    height: SH(15),
    tintColor: COLORS.primary,
    marginVertical: verticalScale(1),
    resizeMode: 'contain',
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
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    alignItems: 'center',
  },
  alsoAgent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
