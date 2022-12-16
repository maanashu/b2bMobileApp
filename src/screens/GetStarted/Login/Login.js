// helooooooooo

import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import {
  CodeField,
  useBlurOnFulfill,
  useClearByFocusCell,
  Cursor,
} from "react-native-confirmation-code-field";
import { jobrSplash, blueLogo, backArrow } from "@/assets";
import { strings } from "@/localization";
import { NAVIGATION } from "@/constants";
import { login } from "@/actions/AuthActions";
import { SH, TextStyles, COLORS } from "@/theme";
import { goBack, navigate } from "@/navigation/NavigationRef";
import { getAuthData } from "@/selectors/AuthSelector";
import { Button, Spacer, ScreenWrapper } from "@/components";
import { styles } from "@/screens/GetStarted/Login/Login.styles";
const CELL_COUNT = 4;

export function Login() {
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [prop, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <ScreenWrapper>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => goBack()}>
          <Image source={backArrow} style={styles.backArrow} />
        </TouchableOpacity>
      </View>

      <Spacer space={SH(54)} />
      <Image
        source={blueLogo}
        style={[styles.alignCenter, styles.logo]}
        resizeMode="contain"
      />

      <View style={styles.formContainer}>
        <Text style={[TextStyles.enterPin]}>{strings.auth.enterPin}</Text>
        <Spacer space={SH(20)} />

        <CodeField
          ref={ref}
          {...prop}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.containerOtp}
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
      </View>
      <View style={{ flex: 1 }} />
      <TouchableOpacity>
        <Text
          style={[
            TextStyles.subtext,
            styles.alignCenter,
            { color: COLORS.text },
          ]}
        >
          {strings.auth.forgotPin}
        </Text>
      </TouchableOpacity>
      <Spacer space={SH(20)} />
      <Button
        onPress={() => navigate(NAVIGATION.mobileNumber)}
        title={strings.login.button}
        textStyle={styles.text}
        style={styles.loginButton}
      />
      <Spacer space={SH(30)} />
    </ScreenWrapper>
  );
}
