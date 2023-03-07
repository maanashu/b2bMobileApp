import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { Button, Spacer, ScreenWrapper } from "@/components";
import { strings } from "@/localization";
import { styles } from "@/screens/GetStarted/Verify/Verify.styles";
import { SH, TextStyles, COLORS } from "@/theme";
import { Fonts, verify, verifyImage } from "@/assets";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  CodeField,
  useBlurOnFulfill,
  useClearByFocusCell,
  Cursor,
} from "react-native-confirmation-code-field";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "@/selectors/UserSelectors";
import { isLoadingSelector } from "@/selectors/StatusSelectors";
import { TYPES } from "@/Types/Types";
import { verifyOtp } from "@/actions/UserActions";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { Loader } from "@/components/Loader";

const CELL_COUNT = 5;

export function Verify(params) {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  console.log("skvbkbfvkfbea", user);

  const id = params?.route?.params?.id;
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [prop, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const submit = () => {
    if (!value) {
      Toast.show({
        position: "bottom",
        type: "error_toast",
        text2: "strings.validation.enterOtp",
      });
      return;
    } else if (value && value.length < 5) {
      Toast.show({
        position: "bottom",
        type: "error_toast",
        text2: "strings.validation.invalidOtp",
      });
    } else {
      dispatch(verifyOtp(id, value));
    }
  };

  const isLoading = useSelector((state) =>
    isLoadingSelector([TYPES.VERIFY_OTP], state)
  );

  return (
    <ScreenWrapper>
      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Spacer space={SH(90)} />
        <Image style={styles.loginImg} source={verifyImage} />
        <Spacer space={SH(40)} />
        <Text style={styles.verifyYour}>{strings.auth.verifyNumber}</Text>
        <Text style={[styles.verifyYour, { fontFamily: Fonts.MaisonMonoBold }]}>
          {strings.auth.phoneNumber}
        </Text>
        <Spacer space={SH(30)} />

        <Text style={styles.enterOtpCode}>{strings.auth.enterOtp}</Text>

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
          <Text style={styles.enterOtpCode}>
            {strings.auth.dontReceiveCode}
          </Text>
          <TouchableOpacity>
            <Text style={[styles.enterOtpCode, styles.resend]}>
              {strings.auth.resend}
            </Text>
          </TouchableOpacity>
        </View>

        <Spacer space={SH(20)} />

        <Button
          title={strings.auth.continue}
          textStyle={styles.text}
          style={styles.loginButton}
          onPress={submit}
        />
      </KeyboardAwareScrollView>
      <Spacer space={SH(30)} />
      {isLoading ? <Loader message="Loading data ..." /> : null}
    </ScreenWrapper>
  );
}
