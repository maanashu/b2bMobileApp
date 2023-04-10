import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  BackHandler,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  Button,
  Header,
  NameHeader,
  ScreenWrapper,
  Spacer,
} from "@/components";
import { styles } from "./Register.styles";
import { backArrow, calendar } from "@/assets";
import { strings } from "@/localization";
import { COLORS, SH } from "@/theme";
import moment from "moment";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "@/selectors/UserSelectors";
import { register } from "@/actions/UserActions";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { isLoadingSelector } from "@/selectors/StatusSelectors";
import { TYPES } from "@/Types/Types";
import { Loader } from "@/components/Loader";
import { emailReg } from "@/Utils/validators";

export function Register() {
  const dispatch = useDispatch();
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

  const isLoading = useSelector((state) =>
    isLoadingSelector([TYPES.REGISTER], state)
  );

  const onChangeDate = (selectedDate) => {
    setShow(false);
    const month = selectedDate.getMonth() + 1;
    const selectedMonth = month < 10 ? "0" + month : month;
    const day = selectedDate.getDate();
    const selectedDay = day < 10 ? "0" + day : day;
    console.log("date console", selectedDay);

    const year = selectedDate.getFullYear();
    const fullDate = year + "-" + selectedMonth + "-" + selectedDay;
    const newDateFormat = year + "-" + selectedMonth + "-" + selectedDay;
    setDateformat(newDateFormat);
    setDate(fullDate);
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => true
    );
    return () => backHandler.remove();
  }, []);

  const data = {
    username: username,
    firstname: firstname,
    lastname: lastname,
    email: email,
    dob: dateformat,
    pin: pin,
    confirmPin: confirmPin,
    code: countryCode,
    phone: phoneNumber,
  };

  const submit = () => {
    if (!username) {
      Toast.show({
        text2: strings.validation.enterUserName,
        position: "bottom",
        type: "error_toast",
        visibilityTime: 1500,
      });
      return;
    }
    if (!firstname) {
      Toast.show({
        text2: strings.validation.firstName,
        position: "bottom",
        type: "error_toast",
        visibilityTime: 1500,
      });
      return;
    }
    if (!lastname) {
      Toast.show({
        text2: strings.validation.lastNameerror,
        position: "bottom",
        type: "error_toast",
        visibilityTime: 1500,
      });
      return;
    } else if (!email) {
      Toast.show({
        position: "bottom",
        type: "error_toast",
        visibilityTime: 1500,
        text2: strings.validation.emptyEmail,
      });
      return;
    } else if (email && emailReg.test(email) === false) {
      Toast.show({
        position: "bottom",
        type: "error_toast",
        visibilityTime: 1500,
        text2: strings.validation.invalidEmail,
      });
      return;
    }
    // if (!ValidateUserName(username)) return;
    // if (!ValidateName(firstname)) return;
    // if (!ValidateName(lastname)) return;

    if (!new Date()) {
    }
    if (!pin) {
      Toast.show({
        text2: strings.validation.enter4digit,
        position: "bottom",
        type: "error_toast",
        visibilityTime: 1500,
      });

      return;
    }
    if (!confirmPin) {
      Toast.show({
        text2: strings.validation.conformPin,
        position: "bottom",
        type: "error_toast",
        visibilityTime: 1500,
      });

      return;
    }
    if (pin != confirmPin) {
      Toast.show({
        text2: strings.validation.pinNotMatch,
        position: "bottom",
        type: "error_toast",
        visibilityTime: 1500,
      });

      return;
    } else {
      dispatch(register(data));
    }
  };

  return (
    <ScreenWrapper>
      <NameHeader title={"Register"} />
      <KeyboardAwareScrollView>
        <View style={styles.mainContainer}>
          <Text style={styles.headingBoldText}>{"Username"}</Text>
          <TextInput
            autoCapitalize="none"
            returnKeyType="done"
            onChangeText={setusername}
            placeholder={strings.personalInformation.userName}
            placeholderTextColor={COLORS.secondary}
            style={styles.textFieldStyle}
          />

          <Spacer space={SH(15)} />

          <Text style={styles.headingBoldText}>{"First Name"}</Text>

          <TextInput
            autoCapitalize="none"
            returnKeyType="done"
            onChangeText={setfirstname}
            placeholder={strings.personalInformation.firstName}
            placeholderTextColor={COLORS.secondary}
            style={styles.textFieldStyle}
          />

          <Spacer space={SH(15)} />

          <Text style={styles.headingBoldText}>{"Last Name"}</Text>

          <TextInput
            autoCapitalize="none"
            returnKeyType="done"
            onChangeText={setlastname}
            placeholder={strings.personalInformation.lastName}
            placeholderTextColor={COLORS.secondary}
            style={styles.textFieldStyle}
          />

          <Spacer space={SH(15)} />

          <Text style={styles.headingBoldText}>{"Email"}</Text>

          <TextInput
            autoCapitalize="none"
            returnKeyType="done"
            onChangeText={setEmail}
            placeholder={strings.personalInformation.email}
            placeholderTextColor={COLORS.secondary}
            style={styles.textFieldStyle}
            keyboardType="email-address"
          />

          <Spacer space={SH(15)} />
          <Text style={styles.headingBoldText}>{"Date of Birth"}</Text>

          <TouchableOpacity style={styles.input} onPress={() => setShow(true)}>
            <Image source={calendar} style={styles.calendarImage} />
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

          <TextInput
            autoCapitalize="none"
            returnKeyType="done"
            placeholder={strings.personalInformation.enterPin}
            placeholderTextColor={COLORS.secondary}
            keyboardType="numeric"
            onChangeText={setpin}
            style={styles.textFieldStyle}
            maxLength={4}
          />

          <Spacer space={SH(15)} />

          <Text style={styles.headingBoldText}>{"Re-enter Security Pin"}</Text>

          <TextInput
            autoCapitalize="none"
            returnKeyType="done"
            placeholder={strings.personalInformation.reEnterPin}
            placeholderTextColor={COLORS.darkGrey}
            keyboardType="numeric"
            onChangeText={setconfirmPin}
            style={styles.textFieldStyle}
            maxLength={4}
          />

          <Spacer space={SH(15)} />

          <Text style={styles.headingBoldText}>{"Phone number"}</Text>

          <View style={[styles.textFieldStyle, { justifyContent: "center" }]}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.inputText}>
                {countryCode}
                <Text>
                  {" "}
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

          <Spacer space={SH(15)} />

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
            />
          </View>
        </View>
        {isLoading ? <Loader message="Loading data ..." /> : null}
      </KeyboardAwareScrollView>
    </ScreenWrapper>
  );
}
