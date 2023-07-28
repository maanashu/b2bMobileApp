import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  BackHandler,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Button, NameHeader, ScreenWrapper, Spacer } from "@/components";
import { styles } from "./Register.styles";
import {
  calendar,
  email_chat,
  lock_light,
  phoneCall,
  userIcon,
} from "@/assets";
import { strings } from "@/localization";
import { COLORS, SH, SW } from "@/theme";
import moment from "moment";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "@/selectors/UserSelectors";
import { getUserProfile, register } from "@/actions/UserActions";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { isLoadingSelector } from "@/selectors/StatusSelectors";
import { TYPES } from "@/Types/Types";
import { Loader } from "@/components/Loader";
import { emailReg } from "@/Utils/validators";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import CustomToast from "@/components/CustomToast";

export function Register({ handleScreenChange }) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const user = useSelector(getUser);

  const Defmonth = new Date().getMonth() + 1;
  const selectedDefMonth = Defmonth < 10 ? "0" + Defmonth : Defmonth;

  const Defday = new Date().getDate();
  const selectedDefDay = Defday < 10 ? "0" + Defday : Defday;
  const defyear = new Date().getFullYear();

  const [show, setShow] = useState(false);
  // const [date, setDate] = useState(
  //   defyear + " - " + selectedDefMonth + " - " + selectedDefDay
  // );
  const [dateformat, setDateformat] = useState("");
  const [date, setDate] = useState("");
  const [username, setusername] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setEmail] = useState("");
  const [pin, setpin] = useState("");
  const [confirmPin, setconfirmPin] = useState("");
  const [countryCode, setcountryCode] = useState(user?.phone?.countryCode);
  const [phoneNumber, setphoneNumber] = useState(user?.phone?.phoneNumber);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("");

  const isLoading = useSelector((state) =>
    isLoadingSelector([TYPES.REGISTER], state)
  );

  const onChangeDate = (selectedDate) => {
    const currentDate = moment().format("MM/DD/YYYY");
    const selected = moment(selectedDate).format("MM/DD/YYYY");
    if (currentDate === selected) {
      setShow(false);
      const fullDate = new Date(moment(selectedDate).subtract(21, "years"));
      const changedDate = moment(fullDate).format("MM / DD / YYYY");
      const newDateFormat = moment(fullDate).format("YYYY-MM-DD");
      setDateformat(newDateFormat);
      setDate(changedDate);
    } else {
      setShow(false);
      const month = selectedDate.getMonth() + 1;
      const selectedMonth = month < 10 ? "0" + month : month;
      const day = selectedDate.getDate();
      const selectedDay = day < 10 ? "0" + day : day;
      const year = selectedDate.getFullYear();
      const fullDate = year + "-" + selectedMonth + "-" + selectedDay;
      const newDateFormat = year + "-" + selectedMonth + "-" + selectedDay;
      setDateformat(newDateFormat);
      setDate(fullDate);
    }
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => true
    );
    return () => backHandler.remove();
  }, []);
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
  const data = {
    username: username,
    firstname: firstname?.trim(),
    lastname: lastname?.trim(),
    email: email,
    dob: dateformat,
    pin: pin,
    confirmPin: confirmPin,
    code: user?.phone?.countryCode,
    phone: user?.phone?.phoneNumber?.trim(),
  };
  const handleRegister = async () => {
    const token = await AsyncStorage.getItem("token");
    dispatch(register(data, token, navigation))
      .then((res) => {
        dispatch(getUserProfile(res?.payload?.uuid));
        handleScreenChange(3);
      })
      .catch(() => {});
  };

  const submit = () => {
    if (!username) {
      showToast(strings.validation.enterUserName, "error", 2000);
    }
    if (!firstname) {
      showToast(strings.validation.firstName, "error", 2000);
    }
    if (!lastname) {
      showToast(strings.validation.lastNameerror, "error", 2000);
    } else if (!email) {
      showToast(strings.validation.emptyEmail, "error", 2000);
    } else if (email && emailReg.test(email) === false) {
      showToast(strings.validation.invalidEmail, "error", 2000);
    }
    // if (!ValidateUserName(username)) return;
    // if (!ValidateName(firstname)) return;
    // if (!ValidateName(lastname)) return;

    if (!new Date()) {
    }
    if (!pin) {
      showToast(strings.validation.enter4digit, "error", 2000);
    }
    if (!confirmPin) {
      showToast(strings.validation.conformPin, "error", 2000);
    }
    if (pin != confirmPin) {
      showToast(strings.validation.pinNotMatch, "error", 2000);
    } else {
      handleRegister();
    }
  };

  return (
    <ScreenWrapper>
      <NameHeader title={"Register"} />
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainContainer}>
          <Text style={styles.headingBoldText}>{"Username"}</Text>
          <View style={styles.IconTextFieldStyleView}>
            <Image
              source={userIcon}
              resizeMode="contain"
              style={styles.textFieldIcon}
            />
            <TextInput
              autoCapitalize="none"
              returnKeyType="done"
              onChangeText={setusername}
              placeholder={strings.personalInformation.userName}
              placeholderTextColor={COLORS.secondary}
              style={styles.IconTextFieldStyle}
            />
          </View>

          <Spacer space={SH(15)} />

          <Text style={styles.headingBoldText}>{"First Name"}</Text>

          <View style={styles.IconTextFieldStyleView}>
            <Image
              source={userIcon}
              resizeMode="contain"
              style={styles.textFieldIcon}
            />
            <TextInput
              autoCapitalize="none"
              returnKeyType="done"
              onChangeText={setfirstname}
              placeholder={strings.personalInformation.firstName}
              placeholderTextColor={COLORS.secondary}
              style={styles.IconTextFieldStyle}
            />
          </View>

          <Spacer space={SH(15)} />

          <Text style={styles.headingBoldText}>{"Last Name"}</Text>

          <View style={styles.IconTextFieldStyleView}>
            <Image
              source={userIcon}
              resizeMode="contain"
              style={styles.textFieldIcon}
            />
            <TextInput
              autoCapitalize="none"
              returnKeyType="done"
              onChangeText={setlastname}
              placeholder={strings.personalInformation.lastName}
              placeholderTextColor={COLORS.secondary}
              style={styles.IconTextFieldStyle}
            />
          </View>

          <Spacer space={SH(15)} />

          <Text style={styles.headingBoldText}>{"Email"}</Text>

          <View style={styles.IconTextFieldStyleView}>
            <Image
              source={email_chat}
              resizeMode="contain"
              style={[
                styles.textFieldIcon,
                { height: SH(22), width: SW(22), marginLeft: SW(2.7) },
              ]}
            />
            <TextInput
              autoCapitalize="none"
              returnKeyType="done"
              onChangeText={setEmail}
              placeholder={strings.personalInformation.email}
              placeholderTextColor={COLORS.secondary}
              style={styles.IconTextFieldStyle}
              keyboardType="email"
            />
          </View>

          <Spacer space={SH(15)} />
          <Text style={styles.headingBoldText}>{"Date of Birth"}</Text>

          <TouchableOpacity style={styles.input} onPress={() => setShow(true)}>
            <Image
              source={calendar}
              style={styles.calendarImage}
              resizeMode="contain"
            />
            <TextInput
              editable={false}
              autoCapitalize="none"
              returnKeyType="done"
              placeholderTextColor={COLORS.secondary}
              placeholder={strings.personalInformation.placeholder}
              value={date}
              defaultValue={date}
              style={[
                styles.textInputStyles,
                { color: date ? COLORS.black : COLORS.secondary },
              ]}
            />
          </TouchableOpacity>

          <Spacer space={SH(15)} />

          <Text style={styles.headingBoldText}>{"Security Pin"}</Text>

          <View style={styles.IconTextFieldStyleView}>
            <Image
              source={lock_light}
              resizeMode="contain"
              style={[
                styles.textFieldIcon,
                { height: SH(22), width: SW(22), marginLeft: SW(2.7) },
              ]}
            />
            <TextInput
              autoCapitalize="none"
              returnKeyType="done"
              placeholder={strings.personalInformation.enterPin}
              placeholderTextColor={COLORS.secondary}
              keyboardType="numeric"
              onChangeText={setpin}
              style={styles.IconTextFieldStyle}
              maxLength={4}
            />
          </View>

          <Spacer space={SH(15)} />

          <Text style={styles.headingBoldText}>{"Re-enter Security Pin"}</Text>

          <View style={styles.IconTextFieldStyleView}>
            <Image
              source={lock_light}
              resizeMode="contain"
              style={[
                styles.textFieldIcon,
                { height: SH(22), width: SW(22), marginLeft: SW(2.7) },
              ]}
            />
            <TextInput
              autoCapitalize="none"
              returnKeyType="done"
              placeholder={strings.personalInformation.reEnterPin}
              placeholderTextColor={COLORS.secondary}
              keyboardType="numeric"
              onChangeText={setconfirmPin}
              style={styles.IconTextFieldStyle}
              maxLength={4}
            />
          </View>

          <Spacer space={SH(15)} />

          <Text style={styles.headingBoldText}>{"Phone number"}</Text>

          <View style={[styles.textFieldStyle, { justifyContent: "center" }]}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={phoneCall}
                resizeMode="contain"
                style={[
                  styles.textFieldIcon,
                  { height: SH(22), width: SW(22), marginLeft: SW(2.7) },
                ]}
              />
              <Text style={styles.inputText}>
                {countryCode}
                <Text>
                  {"  "}
                  {phoneNumber}
                </Text>
              </Text>
            </View>
          </View>

          {/* <TextInput
            autoCapitalize="none"
            returnKeyType="done"
            placeholder={"country Code"}
            placeholderTextColor={COLORS.darkGrey}
            onChangeText={setcountryCode}
            style={styles.textFieldStyle}
          />

          <TextInput
            autoCapitalize="none"
            returnKeyType="done"
            placeholder={"phone number"}
            placeholderTextColor={COLORS.darkGrey}
            keyboardType="numeric"
            onChangeText={setphoneNumber}
            style={styles.textFieldStyle}
          /> */}

          <Spacer space={SH(5)} />

          <DateTimePickerModal
            isVisible={show}
            mode="date"
            maximumDate={new Date(moment().subtract(21, "years"))}
            onConfirm={onChangeDate}
            onCancel={() => setShow(false)}
          />
          <Spacer space={SH(15)} />

          <View style={{ justifyContent: "flex-end", flex: 1 }}>
            <Button
              title={strings.buttonText.submit}
              onPress={() => {
                submit();
              }}
              style={styles.loginButton}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
      {isLoading ? <Loader message="Registering ..." /> : null}
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
