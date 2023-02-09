import React, { useEffect, useState } from "react";
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
import { SH, TextStyles, COLORS } from "@/theme";
import { goBack, navigate } from "@/navigation/NavigationRef";
import { Button, Spacer, ScreenWrapper } from "@/components";
import { styles } from "@/screens/GetStarted/EnterPin/EnterPin.styles";
import { useDispatch, useSelector } from "react-redux";
import { getUser as getUserSelector } from "@/selectors/UserSelectors";
import { getUser as getUserAction } from "@/actions/UserActions";
import { getCategorySelector } from "@/selectors/CategorySelectors";
const CELL_COUNT = 4;

export function EnterPin() {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [prop, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const phoneNumber = useSelector(getUserSelector);
  console.log("user reducer data" + phoneNumber);

  useEffect(() => {
    dispatch(getUserAction);
  }, []);

  return (
    <ScreenWrapper>
      <View style={styles.headerContainer}>
        <View style={styles.displayFlex}>
          <TouchableOpacity onPress={() => goBack()}>
            <Image source={backArrow} style={styles.backArrow} />
          </TouchableOpacity>
          <Text style={styles.setPin}>{strings.auth.setPin}</Text>
        </View>
        <Text style={styles.cancel}>{strings.auth.cancel}</Text>
      </View>

      <Spacer space={SH(54)} />

      <View style={styles.formContainer}>
        <Text style={styles.enterYourPin}>{strings.auth.enterYourPin}</Text>
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

      <Spacer space={SH(20)} />
      <Button
        onPress={() => navigate(NAVIGATION.reEnterPin)}
        title={strings.auth.continue}
        textStyle={styles.text}
        style={styles.loginButton}
      />
      <Spacer space={SH(30)} />
    </ScreenWrapper>
  );
}
