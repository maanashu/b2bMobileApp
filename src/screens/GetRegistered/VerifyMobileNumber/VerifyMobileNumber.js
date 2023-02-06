import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { Button, Spacer, ScreenWrapper } from '@/components';
import { strings } from '@/localization';
import { styles } from '@/screens/GetStarted/Verify/Verify.styles';
import { SH, TextStyles, COLORS } from '@/theme';
import { Fonts, verify, verifyImage} from '@/assets';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
  CodeField,
  useBlurOnFulfill,
  useClearByFocusCell,
  Cursor,
} from 'react-native-confirmation-code-field';
import { navigate } from '@/navigation/NavigationRef';
import { NAVIGATION } from '@/constants';

const CELL_COUNT = 5;

export function Verify() {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [prop, getCellOnLayoutHandler] = useClearByFocusCell({ value, setValue });



  return (
    <ScreenWrapper>
      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Spacer space={SH(90)} />
        <Image
          style={styles.loginImg}
          source={verifyImage}
        />
        <Spacer space={SH(40)} />
        <Text
          style={styles.verifyYour}>
          {strings.auth.verifyNumber}
        </Text>
        <Text
          style={[styles.verifyYour, {fontFamily: Fonts.MaisonMonoBold}]}>
          {strings.auth.phoneNumber}
        </Text>
        <Spacer space={SH(30)} />

        <Text
          style={styles.enterOtpCode}>
         {strings.auth.enterOtp}
        </Text>

        <Spacer space={SH(20)} />
        <CodeField
          ref={ref}
          {...prop}
          value={value} 
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={[styles.alignSelfCenter]}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({ index, symbol, isFocused }) => (
            <View
              onLayout={getCellOnLayoutHandler(index)}
              key={index}
              style={styles.cellRoot}
            >
              <Text style={styles.cellText}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            </View>
          )}
        />

        <View style={{ flex: 1 }} />
        <Spacer space={SH(34)} />

        <View style={[styles.row, styles.alignSelfCenter]}>
          <Text  style={styles.enterOtpCode}>
            {strings.auth.dontReceiveCode}
          </Text>
          <TouchableOpacity>
            <Text   style={[styles.enterOtpCode, styles.resend]}>
            {strings.auth.resend}
            </Text>
          </TouchableOpacity>
        </View>

        <Spacer space={SH(20)} />

        <Button
          title={strings.auth.continue}
          textStyle={styles.text}
          style={styles.loginButton}
          onPress={() =>navigate(NAVIGATION.enterPin)}
        />
      </KeyboardAwareScrollView>
      <Spacer space={SH(30)}/>
    </ScreenWrapper>
  );
}
