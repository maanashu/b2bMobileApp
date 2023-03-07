import React, { useState } from "react";
import { View, Image, Text, TextInput } from "react-native";
import { useTheme } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome5";
import CountryPicker from "react-native-country-picker-modal";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { blueLogo, authImage } from "@/assets";
import { strings } from "@/localization";
import { COLORS, SF, SH } from "@/theme";
import { Spacer, Button, ScreenWrapper, Logo } from "@/components";
import { styles } from "@/screens/GetStarted/MobileNumber/MobileNumber.styles";
import { digits } from "@/Utils/validators";
import { sendOtp, TYPES } from "@/actions/UserActions";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "@/components/Loader";
import { isLoadingSelector } from "@/selectors/StatusSelectors";
import { Toast } from "react-native-toast-message/lib/src/Toast";

export function MobileNumber(props) {
  const dispatch = useDispatch();
  const { colors } = useTheme();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [flag, setFlag] = useState("US");
  const [countryCode, setCountryCode] = useState("+1");
  const param = props?.route?.params?.data;

  const onChangePhoneNumber = (phone) => setPhoneNumber(phone);

  const clearInputs = () => {
    alert("call");
    setPhoneNumber("");
  };

  const isLoading = useSelector((state) =>
    isLoadingSelector([TYPES.SEND_OTP], state)
  );

  const submit = () => {
    if (phoneNumber && phoneNumber.length >= 10 && digits.test(phoneNumber)) {
      console.log("flag------", flag);
      dispatch(sendOtp(phoneNumber, countryCode, param, flag));
    } else if (phoneNumber && phoneNumber.length < 10) {
      Toast.show({
        position: "bottom",
        type: "error_toast",
        text2: strings.validation.phoneLength,
        visibilityTime: 2000,
      });
    } else if (phoneNumber && digits.test(phoneNumber) === false) {
      Toast.show({
        position: "bottom",
        type: "error_toast",
        text2: strings.validation.validPhone,
        visibilityTime: 2000,
      });
    } else {
      Toast.show({
        position: "bottom",
        type: "error_toast",
        text2: strings.validation.enterPhone,
        visibilityTime: 2000,
      });
    }
  };
  return (
    <ScreenWrapper>
      <KeyboardAwareScrollView
        bounces={false}
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Spacer space={SH(54)} />
        <Image source={blueLogo} style={styles.blueLogo} />
        <Spacer space={SH(24)} />
        <Image style={styles.loginImg} source={authImage} />
        <Spacer space={SH(40)} />
        <Text style={styles.enterMobile}>{strings.auth.enterMobile}</Text>
        <Spacer space={SH(10)} />

        <Text style={styles.pleaseEnterMobile}>
          {strings.auth.pleaseEnterMobile}
        </Text>
        <Spacer space={SH(30)} />

        <View style={[styles.textInputView]}>
          <CountryPicker
            onSelect={(code) => {
              setFlag(code.cca2);
              if (code.callingCode !== []) {
                setCountryCode("+" + code.callingCode.flat());
              } else {
                setCountryCode("");
              }
            }}
            countryCode={flag}
            withFilter
            withCallingCode
          />
          <Icon
            name={"sort-down"}
            color="black"
            size={scale(8)}
            style={{ right: moderateScale(4), bottom: verticalScale(2) }}
          />

          <Text style={styles.codeText}>{countryCode}</Text>
          <TextInput
            returnKeyType="done"
            keyboardType="number-pad"
            value={phoneNumber}
            onChangeText={onChangePhoneNumber}
            style={styles.textInputContainer}
            placeholder={strings.auth.mobilePlaceholder}
            placeholderTextColor={"#A7A7A7"}
            maxLength={15}
          />
        </View>

        <View style={{ flex: 1 }} />

        <Spacer space={SH(32)} />
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
