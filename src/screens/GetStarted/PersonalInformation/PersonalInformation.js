import React, { useState, useRef, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";

import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import { calendar } from "@/assets";
import { COLORS, SH, SW } from "@/theme";
import { TYPES } from "@/Types/Types";
import { NAVIGATION } from "@/constants";
import { strings } from "@/localization";
import { GOOGLE_MAP } from "@/constants/ApiKeys";
import { getUser as userSelector } from "@/selectors/UserSelectors";
import { ScreenWrapper, Spacer, Button } from "@/components";
import { isLoadingSelector } from "@/selectors/StatusSelectors";
import { getUser } from "@/actions/UserActions";
import { styles } from "@/screens/GetStarted/PersonalInformation/PersonalInformation.styles";
import { getKyc } from "@/selectors/KycSelector";
import { digits, emailReg } from "@/Utils/validators";
import { createWallet } from "@/actions/WalletActions";
import { Loader } from "@/components/Loader";
import { navigate } from "@/navigation/NavigationRef";

export function PersonalInformation() {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const getData = useSelector(userSelector);
  const getKycData = useSelector(getKyc);
  const id = getData?.user?.id || getData?.registered?.id;
  const firstname =
    getData?.user?.payload?.user_profiles?.firstname ??
    getData?.registerData?.firstname;
  const lastname =
    getData?.user?.payload?.user_profiles?.lastname ??
    getData?.registerData?.lastname;
  const phone =
    getData?.user?.payload?.user_profiles?.phone_no ??
    getData?.phone?.phoneNumber;

  const [ssn, setSsn] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState(
    getData?.registered?.email ?? getData?.user?.payload?.email
  );
  const [state, setState] = useState("");
  const [show, setShow] = useState(false);
  const [street, setStreet] = useState("");
  const [country, setCountry] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [date, setDate] = useState(
    getData?.registerData?.dob ?? getData?.user?.payload?.user_profiles?.dob
  );
  const [stateCode, setStateCode] = useState("");
  const [appartment, setAppartment] = useState("");
  const [dateformat, setDateformat] = useState(
    getData?.registerData?.dob ?? getData?.user?.payload?.user_profiles?.dob
  );
  const [countryCode, setCountryCode] = useState("");
  // const [individual, setIndividual] = useState(false);

  useEffect(() => {
    dispatch(getUser);
  }, []);
  console.log("checking email", email);
  console.log("checking dob", dateformat);

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
      const fullDate = selectedMonth + " / " + selectedDay + " / " + year;
      const newDateFormat = year + "-" + selectedMonth + "-" + selectedDay;
      setDateformat(newDateFormat);
      setDate(fullDate);
    }
  };

  const submit = async () => {
    if (!dateformat || dateformat === new Date() || date === new Date()) {
      Toast.show({
        position: "bottom",
        type: "error_toast",
        visibilityTime: 1500,
        text2: strings.validation.enterDate,
      });
    } else if (!ssn) {
      Toast.show({
        position: "bottom",
        type: "error_toast",
        visibilityTime: 1500,
        text2: strings.validation.enterSsn,
      });
    } else if (ssn && digits.test(ssn) === false) {
      Toast.show({
        position: "bottom",
        type: "error_toast",
        visibilityTime: 1500,
        text2: strings.validation.invalidSSN,
      });
    } else if (ssn && ssn.length < 9) {
      Toast.show({
        position: "bottom",
        type: "error_toast",
        visibilityTime: 1500,
        text2: "Please enter valid SSN Number",
      });
    } else if (!email) {
      Toast.show({
        position: "bottom",
        type: "error_toast",
        visibilityTime: 1500,
        text2: strings.validation.emptyEmail,
      });
    } else if (email && emailReg.test(email) === false) {
      Toast.show({
        position: "bottom",
        type: "error_toast",
        visibilityTime: 1500,
        text2: strings.validation.invalidEmail,
      });
    }
    // else if (individual === false && business === false) {
    //   Toast.show({
    //     position: "bottom",
    //     type: "error_toast",
    //     visibilityTime: 1500,
    //     text2: strings.validation.selectType,
    //   });
    // }
    else if (!street) {
      Toast.show({
        position: "bottom",
        type: "error_toast",
        visibilityTime: 1500,
        text2: strings.validation.enterStret,
      });
    } else if (!city) {
      Toast.show({
        position: "bottom",
        type: "error_toast",
        visibilityTime: 1500,
        text2: strings.validation.selectCity,
      });
    } else if (!state) {
      Toast.show({
        position: "bottom",
        type: "error_toast",
        visibilityTime: 1500,
        text2: strings.validation.selectState,
      });
    } else if (!zipCode) {
      Toast.show({
        position: "bottom",
        type: "error_toast",
        visibilityTime: 1500,
        text2: strings.validation.enterZip,
      });
    } else if (!country) {
      Toast.show({
        position: "bottom",
        type: "error_toast",
        visibilityTime: 1500,
        text2: strings.validation.country,
      });
    } else {
      const data = {
        first_name: firstname,
        last_name: lastname,
        phone: phone,
        dob: dateformat,
        ssn: ssn,
        address: street,
        appartment: appartment,
        city: city,
        state: state,
        zip: zipCode,
        country: country,
        email: email,
        countryCode: countryCode,
        stateCode: stateCode,
        type: "individual",
      };
      // const res = await dispatch(personalInformation(data));
      // if (res?.type === "PERSONALINFORMATION_SUCCESS") {
      //   dispatch(getWalletUserProfile());
      // }
      dispatch(createWallet(data));
      // console.log("body check->", data.country);
    }
  };

  const clearInput = () => {
    setSsn("");
    setDate("");
    setCity("");
    setState("");
    setStreet("");
    setCountry("");
    setZipCode("");
    setAppartment("");
    setEmail("");
  };

  const isLoading = useSelector((state) =>
    isLoadingSelector([TYPES.CREATE_WALLET_USER], state)
  );

  const getAddress = (details) => {
    for (var i = 0; i < details.length; i++) {
      if (details[i].types[0] == "country") {
        setCountry(details?.[i]?.short_name);
        setCountryCode(details?.[i]?.short_name);
      }

      if (details[i].types[0] == "postal_code") {
        setZipCode(details?.[i]?.long_name);
      }

      if (details[i].types[0] == "administrative_area_level_1") {
        setState(details?.[i]?.short_name);
        setStateCode(details?.[i]?.short_name);
      }

      if (
        details[i].types[0] == "administrative_area_level_2" ||
        details[i].types[0] == "administrative_area_level_3" ||
        details[i].types[0] == "locality"
      ) {
        setCity(details?.[i]?.long_name);
      }
    }
  };

  const crossHandler = () => {
    // dispatch(logout());
    navigate(NAVIGATION.splash);
  };

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <View style={styles.maincontainer}>
          <Text style={styles.header}>
            {strings.personalInformation.header}
          </Text>
          <View />

          <View style={styles.goBackView}>
            <TouchableOpacity onPress={crossHandler}>
              <Text style={styles.skipButton}>{strings.buttonText.skip}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps={"handled"}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <View>
            <Spacer space={SH(20)} />
            <View style={styles.fieldsView}>
              <Text style={styles.titleStyle}>
                {strings.personalInformation.title}
              </Text>
            </View>

            <Spacer space={SH(20)} />
            <View style={styles.fieldsView}>
              <Text style={styles.labelStyle}>
                {strings.personalInformation.labelDob}
              </Text>

              <TouchableOpacity
                style={styles.input}
                onPress={() => setShow(!show)}
              >
                <Image source={calendar} style={styles.calendarImage} />

                <TextInput
                  value={date}
                  editable={false}
                  returnKeyType={"done"}
                  pointerEvents={"none"}
                  autoCapitalize={"none"}
                  placeholderTextColor={COLORS.secondary}
                  placeholder={strings.personalInformation.placeholder}
                  style={[
                    styles.textInputStyles,
                    { color: date ? COLORS.black : COLORS.secondary },
                  ]}
                />
              </TouchableOpacity>

              <DateTimePickerModal
                mode={"date"}
                isVisible={show}
                onConfirm={onChangeDate}
                onCancel={() => setShow(false)}
                maximumDate={new Date(moment().subtract(21, "years"))}
              />

              <TextInput
                maxLength={9}
                value={ssn?.trim()}
                onChangeText={setSsn}
                secureTextEntry={true}
                returnKeyType={"done"}
                autoCapitalize={"none"}
                keyboardType={"number-pad"}
                style={styles.textFieldStyle}
                placeholderTextColor={COLORS.secondary}
                placeholder={strings.personalInformation.ssn}
              />

              <TextInput
                value={email}
                returnKeyType={"done"}
                onChangeText={setEmail}
                autoCapitalize={"none"}
                style={styles.textFieldStyle}
                keyboardType={"email-address"}
                placeholderTextColor={COLORS.darkGrey}
                placeholder={strings.personalInformation.email}
              />

              {/* <Spacer space={SH(16)} />
              <View>
                <Text style={styles.labelStyle}>
                  {strings.personalInformation.type}
                </Text>

                <View style={styles.checkboxRow}>
                  <View>
                    {individual ? (
                      <View style={styles.maleCheckStyle}>
                        <TouchableOpacity
                          style={styles.maleCheckbox}
                          onPress={() => {
                            setIndividual(!individual), setBusiness(false);
                          }}
                        >
                          <IonIcon
                            size={19}
                            name={"checkbox"}
                            color={COLORS.text}
                          />
                        </TouchableOpacity>
                        <Text
                          style={[styles.labelStyle2, styles.checkboxLabel]}
                        >
                          {strings.personalInformation.individual}
                        </Text>
                      </View>
                    ) : (
                      <View style={styles.maleCheckStyle}>
                        <TouchableOpacity
                          style={styles.maleCheckbox}
                          onPress={() => {
                            setIndividual(!individual), setBusiness(false);
                          }}
                        >
                          <Image
                            source={unchecked}
                            style={styles.checkboxStyle}
                          />
                        </TouchableOpacity>
                        <Text
                          style={[styles.labelStyle2, styles.checkboxLabel]}
                        >
                          {strings.personalInformation.individual}
                        </Text>
                      </View>
                    )}
                  </View>

                  <View style={{ marginLeft: 20 }}>
                    {business ? (
                      <View style={styles.maleCheckStyle}>
                        <TouchableOpacity
                          style={styles.maleCheckbox}
                          onPress={() => setBusiness(!business)}
                        >
                          <IonIcon
                            size={19}
                            name={"checkbox"}
                            color={COLORS.text}
                          />
                        </TouchableOpacity>
                        <Text
                          style={[styles.labelStyle2, styles.checkboxLabel]}
                        >
                          {strings.personalInformation.business}
                        </Text>
                      </View>
                    ) : (
                      <View style={styles.maleCheckStyle}>
                        <TouchableOpacity
                          style={styles.maleCheckbox}
                          onPress={() => {
                            setBusiness(!business), setIndividual(false);
                          }}
                        >
                          <Image
                            source={unchecked}
                            style={styles.checkboxStyle}
                          />
                        </TouchableOpacity>
                        <Text
                          style={[styles.labelStyle2, styles.checkboxLabel]}
                        >
                          {strings.personalInformation.business}
                        </Text>
                      </View>
                    )}
                  </View>
                </View>
              </View> */}

              <Spacer space={SH(16)} />
              {/* <View>
                <Text style={styles.labelStyle}>
                  {strings.personalInformation.gender}
                </Text>

                <View style={styles.checkboxRow}>
                  <View>
                    {male ? (
                      <View style={styles.maleCheckStyle}>
                        <TouchableOpacity
                          style={styles.maleCheckbox}
                          onPress={() => {
                            setMale(!male), setFemale(false);
                          }}
                        >
                          <IonIcon
                            size={19}
                            name={"checkbox"}
                            color={COLORS.text}
                          />
                        </TouchableOpacity>
                        <Text
                          style={[styles.labelStyle2, styles.checkboxLabel]}
                        >
                          {strings.personalInformation.male}
                        </Text>
                      </View>
                    ) : (
                      <View style={styles.maleCheckStyle}>
                        <TouchableOpacity
                          style={styles.maleCheckbox}
                          onPress={() => {
                            setMale(!male), setFemale(false);
                          }}
                        >
                          <Image
                            source={unchecked}
                            style={styles.checkboxStyle}
                          />
                        </TouchableOpacity>
                        <Text
                          style={[styles.labelStyle2, styles.checkboxLabel]}
                        >
                          {strings.personalInformation.male}
                        </Text>
                      </View>
                    )}
                  </View>

                  <View style={{ marginLeft: 20 }}>
                    {female ? (
                      <View style={styles.maleCheckStyle}>
                        <TouchableOpacity
                          style={styles.maleCheckbox}
                          onPress={() => setFemale(!female)}
                        >
                          <IonIcon
                            size={19}
                            name={"checkbox"}
                            color={COLORS.text}
                          />
                        </TouchableOpacity>
                        <Text
                          style={[styles.labelStyle2, styles.checkboxLabel]}
                        >
                          {strings.personalInformation.female}
                        </Text>
                      </View>
                    ) : (
                      <View style={styles.maleCheckStyle}>
                        <TouchableOpacity
                          style={styles.maleCheckbox}
                          onPress={() => {
                            setFemale(!female), setMale(false);
                          }}
                        >
                          <Image
                            source={unchecked}
                            style={styles.checkboxStyle}
                          />
                        </TouchableOpacity>
                        <Text
                          style={[styles.labelStyle2, styles.checkboxLabel]}
                        >
                          {strings.personalInformation.female}
                        </Text>
                      </View>
                    )}
                  </View>
                </View>
              </View>

              <Spacer space={SH(16)} /> */}
              <View>
                <Text style={styles.labelStyle}>
                  {strings.personalInformation.currentAddress}
                </Text>

                <Spacer space={SH(16)} />
                <GooglePlacesAutocomplete
                  ref={ref}
                  fetchDetails
                  autoFocus={false}
                  listViewDisplayed={true}
                  returnKeyType={"search"}
                  placeholder={"Street Address"}
                  enablePoweredByContainer={false}
                  query={{
                    language: "en",
                    type: "address",
                    components: "country:us",
                    key: GOOGLE_MAP.API_KEYS,
                  }}
                  onPress={(data, details) => {
                    // console.log("details: " + JSON.stringify(details));
                    setCity("");
                    setState("");
                    setZipCode("");
                    setCountry("");
                    setAppartment("");
                    getAddress(details.address_components);
                    setStreet(data.structured_formatting.main_text);
                  }}
                  styles={{
                    container: styles.placesContainerStyle,
                    textInput: styles.googlePlacesTextField,
                    textInputContainer: styles.textInputContainerStyle,
                    predefinedPlacesDescription: styles.predefinedStyles,
                  }}
                />

                <TextInput
                  value={appartment}
                  returnKeyType={"done"}
                  autoCapitalize={"none"}
                  onChangeText={setAppartment}
                  style={styles.textFieldStyle}
                  placeholderTextColor={COLORS.secondary}
                  placeholder={strings.personalInformation.appart}
                />

                <TextInput
                  value={city}
                  returnKeyType={"done"}
                  onChangeText={setCity}
                  autoCapitalize={"none"}
                  style={styles.textFieldStyle}
                  placeholderTextColor={COLORS.secondary}
                  placeholder={strings.personalInformation.city}
                />

                <TextInput
                  value={state}
                  returnKeyType={"done"}
                  autoCapitalize={"none"}
                  onChangeText={setState}
                  style={styles.textFieldStyle}
                  placeholderTextColor={COLORS.secondary}
                  placeholder={strings.personalInformation.state}
                />

                <TextInput
                  maxLength={6}
                  value={zipCode}
                  returnKeyType={"done"}
                  autoCapitalize={"none"}
                  onChangeText={setZipCode}
                  keyboardType={"number-pad"}
                  style={styles.textFieldStyle}
                  placeholderTextColor={COLORS.secondary}
                  placeholder={strings.personalInformation.zip}
                />

                <TextInput
                  value={country}
                  returnKeyType={"done"}
                  autoCapitalize={"none"}
                  onChangeText={setCountry}
                  style={styles.textFieldStyle}
                  placeholderTextColor={COLORS.secondary}
                  placeholder={strings.personalInformation.country}
                />
              </View>

              <Spacer space={SH(40)} />
            </View>

            <Spacer space={SH(50)} />
          </View>
        </KeyboardAwareScrollView>
        <View style={{ justifyContent: "flex-end", padding: SW(20) }}>
          <Button
            onPress={submit}
            pending={isLoading}
            style={{ zIndex: -99 }}
            title={strings.buttonText.next}
          />
        </View>
        {isLoading ? <Loader message="Loading data ..." /> : null}
      </View>
    </ScreenWrapper>
  );
}
