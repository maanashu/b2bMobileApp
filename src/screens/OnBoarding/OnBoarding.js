import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { Config } from 'react-native-config';
import { useSelector } from 'react-redux';
import { TextStyles } from '@/theme';
import { getUser } from '@/selectors/UserSelectors';
import { styles } from '@/screens/Home/Home.styles';
import { strings } from '@/localization';
import { Fonts } from '@/assets';

export function OnBoarding() {
  return (
    <View style={styles.container}>
      <Text style={[TextStyles.title]}>
        {/* {strings.home.message} {user?.username} */}
      </Text>
      <Text style={{fontFamily: Fonts.Bold}}>
        dlgjhoirtjgiojgi
      </Text>
    </View>
  );
}
