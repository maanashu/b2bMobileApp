import { StyleSheet } from 'react-native';
import { SH, SW, COLORS, SF } from '@/theme';
import { Fonts } from '@/assets';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  alignSelfCenter: {
    alignSelf: 'center',
  },
  logoimg: {
    height: SH(50),
    width: SW(100),
  },
  formContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    fontFamily: Fonts.SemiBold,
    fontSize: scale(12),
    color: COLORS.text,
    marginHorizontal: moderateScale(14),
  },
  mustText: {
    fontFamily: Fonts.Regular,
    fontSize: scale(10),
    color: COLORS.text,
    alignSelf: 'flex-start',
    marginHorizontal: moderateScale(14),
  },
  textField: {
    marginHorizontal: 20,
  },
  image: {
    height: SH(235),
    width: '100%',
    alignSelf: 'center',
  },
  inputStyle: {
    marginRight: SW(40),
    color: COLORS.black,
    fontSize: SF(14),
    fontFamily: Fonts.Italic,
    paddingHorizontal: SW(10),
    marginHorizontal: SW(12),
    height: SH(50),
    flex: 1,
  },
  wrapper: {
    marginHorizontal: SW(12),
    backgroundColor: COLORS.inputBorder,
    borderRadius: moderateScale(5),
    flexDirection: 'row',
    alignItems: 'center',
    height: SH(50),
  },
  imageStyle: {
    left: moderateScale(12),
    height: 16,
    width: 20,
  },
  inputStyle: {
    marginRight: SW(40),
    color: COLORS.black,
    fontSize: SF(14),
    fontFamily: Fonts.Italic,
    paddingHorizontal: SW(10),
    marginHorizontal: SW(12),
    height: SH(50),
    flex: 1,
  },
});
