import React, { useState } from 'react';
import { View, Text } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { SH } from '@/theme';
import { Images } from '@/assets';
import { TYPES } from '@/Types/Types';
import { strings } from '@/localization';
import { register } from '@/actions/UserActions';
import { characterReg } from '@/utils/validators';
import { getuser } from '@/selectors/UserSelectors';
import { isLoadingSelector } from '@/selectors/StatusSelectors';
import { Spacer, Button, TextField, ScreenWrapper, Logo } from '@/components';

import { styles } from '@/screens/GetStarted/Register/Register.styles';

export function Register() {
  const dispatch = useDispatch();
  const getData = useSelector(getuser);
  const phone = getData?.phoneData?.phoneNumber;
  const code = getData?.phoneData?.countryCode;

  const [username, setUsername] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [pin, setPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');

  const isLoading = useSelector(state =>
    isLoadingSelector([TYPES.REGISTER], state)
  );

  const submit = () => {
    if (!username) {
      Toast.show({
        position: 'bottom',
        type: 'error_toast',
        text2: strings.validation.enterUserName,
        visibilityTime: 1500,
      });
    } else if (
      username.trim() &&
      characterReg.test(username.trim()) === false
    ) {
      Toast.show({
        position: 'bottom',
        type: 'error_toast',
        text2: strings.validation.validUserName,
        visibilityTime: 1500,
      });
    } else if (!firstname) {
      Toast.show({
        position: 'bottom',
        type: 'error_toast',
        text2: strings.validation.firstName,
        visibilityTime: 1500,
      });
    } else if (
      firstname.trim() &&
      characterReg.test(firstname.trim()) === false
    ) {
      Toast.show({
        position: 'bottom',
        type: 'error_toast',
        text2: strings.validation.validFirstName,
        visibilityTime: 1500,
      });
    } else if (!lastname) {
      Toast.show({
        position: 'bottom',
        type: 'error_toast',
        text2: strings.validation.lastNameerror,
        visibilityTime: 1500,
      });
    } else if (
      lastname.trim() &&
      characterReg.test(lastname.trim()) === false
    ) {
      Toast.show({
        position: 'bottom',
        type: 'error_toast',
        text2: strings.validation.validlastName,
        visibilityTime: 1500,
      });
    } else if (!pin) {
      Toast.show({
        position: 'bottom',
        type: 'error_toast',
        text2: strings.validation.enterPin,
        visibilityTime: 1500,
      });
    } else if (pin && pin.length < 4) {
      Toast.show({
        position: 'bottom',
        type: 'error_toast',
        text2: strings.validation.enter4digit,
        visibilityTime: 1500,
      });
    } else if (!confirmPin) {
      Toast.show({
        position: 'bottom',
        type: 'error_toast',
        text2: strings.validation.conformPin,
        visibilityTime: 1500,
      });
    } else if (confirmPin && confirmPin.length < 4) {
      Toast.show({
        position: 'bottom',
        type: 'error_toast',
        text2: strings.validation.enter4digit,
        visibilityTime: 1500,
      });
    } else if (pin != confirmPin) {
      Toast.show({
        position: 'bottom',
        type: 'error_toast',
        text2: strings.validation.pinNotMatch,
        visibilityTime: 1500,
      });
    } else {
      const data = {
        username: username,
        firstname: firstname,
        lastname: lastname,
        pin: pin,
        confirmPin: confirmPin,
        phone: phone,
        code: code,
      };
      dispatch(register(data));
      clearInput();
    }
  };

  const clearInput = () => {
    setUsername('');
    setFirstname('');
    setLastname('');
    setPin('');
    setConfirmPin();
  };

  return (
    <ScreenWrapper>
      <KeyboardAwareScrollView
        bounces={false}
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Spacer space={SH(34)} />
        <Logo />
        <Spacer space={SH(34)} />

        <Text style={styles.loginText}>{strings.login.username}</Text>
        <Spacer space={SH(10)} />

        <TextField
          onChangeText={text => setUsername(text)}
          label={strings.login.usernameLabel}
          value={username.trim()}
          image={Images.user}
          returnKeyType="next"
          keyboardType="name-phone-pad"
        />

        <Spacer space={SH(16)} />
        <Text style={styles.loginText}>{strings.login.firstname}</Text>
        <Spacer space={SH(10)} />

        <TextField
          onChangeText={text => setFirstname(text)}
          label={strings.login.firstnameLabel}
          value={firstname.trim()}
          image={Images.user}
          returnKeyType="next"
          keyboardType="name-phone-pad"
        />

        <Spacer space={SH(16)} />
        <Text style={styles.loginText}>{strings.login.lastname}</Text>
        <Spacer space={SH(10)} />

        <TextField
          onChangeText={text => setLastname(text)}
          label={strings.login.lastnameLabel}
          value={lastname.trim()}
          image={Images.user}
          returnKeyType="next"
          keyboardType="default"
        />

        <Spacer space={SH(16)} />
        <Text style={styles.loginText}>{strings.login.pin}</Text>
        <Spacer space={SH(10)} />

        <TextField
          onChangeText={setPin}
          label={strings.login.pinLabel}
          value={pin}
          image={Images.lock}
          returnKeyType="next"
          keyboardType="numeric"
          maxLength={4}
        />

        <Spacer space={SH(10)} />
        <Text style={styles.mustText}>{strings.login.must}</Text>
        <Spacer space={SH(20)} />
        <Text style={styles.loginText}>{strings.login.confirmpin}</Text>
        <Spacer space={SH(10)} />

        <TextField
          onChangeText={setConfirmPin}
          label={strings.login.pinLabel}
          value={confirmPin}
          image={Images.lock}
          returnKeyType="done"
          keyboardType="numeric"
          maxLength={4}
        />

        <View style={{ flex: 1 }} />
        <Spacer space={SH(50)} />
        <Button
          onPress={submit}
          title={strings.login.nextbutton}
          pending={isLoading}
        />
      </KeyboardAwareScrollView>
    </ScreenWrapper>
  );
}
