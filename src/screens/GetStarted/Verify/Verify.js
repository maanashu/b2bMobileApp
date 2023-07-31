import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { Button, Spacer, ScreenWrapper } from "@/components";
import { strings } from "@/localization";
import { styles } from "@/screens/GetStarted/Verify/Verify.styles";
import { SH } from "@/theme";
import { Fonts, verifyImage } from "@/assets";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  CodeField,
  useBlurOnFulfill,
  useClearByFocusCell,
  Cursor,
} from "react-native-confirmation-code-field";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "@/selectors/UserSelectors";
import { isLoadingSelector } from "@/selectors/StatusSelectors";
import { TYPES } from "@/Types/Types";
import { sendOtp, verifyOtp } from "@/actions/UserActions";
import { Loader } from "@/components/Loader";
import { useNavigation } from "@react-navigation/native";
import CustomToast from "@/components/CustomToast";

const CELL_COUNT = 5;

export function Verify({ handleScreenChange, data, ...params }) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const user = useSelector(getUser);

  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("");
  const id = params?.route?.params?.id || data?.id;
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [prop, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const [mobileNumber, setmobileNumber] = useState(user?.phone?.phoneNumber);
  const [countryCode, setcountryCode] = useState(user?.phone?.countryCode);
  const submit = () => {
    if (!value) {
      showToast(strings.validation.enterOtp, "error", 2000);
    } else if (value && value.length < 5) {
      showToast(strings.validation.invalidOtp, "error", 2000);
    } else {
      dispatch(verifyOtp(id, value, navigation))
        .then(() => handleScreenChange(8))
        .catch((error) => {});
    }
  };
  const showToast = (message, type, autoHideDuration) => {
    setToastVisible(true);
    setToastMessage(message);
    setToastType(type);

    setTimeout(() => {
      setToastVisible(false);
    }, autoHideDuration);
  };
  const hideToast = () => {
    setToastVisible(false);
  };

  const isLoading = useSelector((state) =>
    isLoadingSelector([TYPES.VERIFY_OTP], state)
  );
  const resendOtp = () => {
    dispatch(sendOtp(mobileNumber, countryCode));
  };

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
          <TouchableOpacity onPress={resendOtp}>
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
      <CustomToast
        visible={toastVisible}
        message={toastMessage}
        type={toastType}
        autoHideDuration={2000}
        onHide={hideToast}
      />
    </ScreenWrapper>
  );
}
