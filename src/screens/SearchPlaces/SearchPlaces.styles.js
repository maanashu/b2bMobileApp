import { StyleSheet } from 'react-native';
import { SH, SW, COLORS, SF, ShadowStyles } from '@/theme';
import { Fonts } from '@/assets';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  rowCard: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    paddingVertical: SH(14),
    justifyContent: 'space-between',
    borderBottomColor: COLORS.input_bg,
    borderBottomWidth: 1,
   alignItems: 'center',
    paddingHorizontal: SW(10),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardName: {
    color: COLORS.black,
    fontFamily: Fonts.SemiBold,
    fontSize: scale(14),
  },
  subName: {
    color: COLORS.text,
    fontFamily: Fonts.Regular,
    fontSize: scale(12),
    alignSelf: 'center',
    width: 140,
  },
  mask: {
    tintColor: COLORS.primary,
    height: 10,
    width: 10,
    alignSelf: 'center',
    margin: 20,
  },
});
