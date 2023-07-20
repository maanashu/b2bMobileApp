import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  Image,
  Platform,
  TextInput,
  TouchableOpacity,
} from "react-native";

import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import DropDownPicker from "react-native-dropdown-picker";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import {
  getNaicsCode,
  getBusinessType,
  businessRegistration,
} from "@/actions/KycActions";
import { COLORS, SH } from "@/theme";
import { TYPES } from "@/Types/Types";
import { Fonts, backArrow, calendar, dropdownIcon } from "@/assets";
import { strings } from "@/localization";
import { getKyc } from "@/selectors/KycSelector";
import { GOOGLE_MAP } from "@/constants/ApiKeys";
import { goBack } from "@/navigation/NavigationRef";
import { getUser } from "@/selectors/UserSelectors";
import { getWalletUserProfile } from "@/actions/UserActions";
import { ScreenWrapper, Spacer, Button } from "@/components";
import { isLoadingSelector } from "@/selectors/StatusSelectors";
import { styles } from "@/screens/GetStarted/BusinessRegistration/BusinessRegistration.styles";
import { digits, emailReg } from "@/Utils/validators";
import { Loader } from "@/components/Loader";

export function BusinessRegistration({ handleScreenChange }) {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const getKycData = useSelector(getKyc);
  const getUserData = useSelector(getUser);
  const uuid = getUserData?.userProfile?.unique_uuid;
  const walletProfile = getUserData?.walletProfile;

  const [code, setCode] = useState("");
  const [id, setId] = useState("");
  const [empId, setEmpId] = useState("");
  const [city, setCity] = useState(walletProfile?.city ?? "");
  const [email, setEmail] = useState(walletProfile?.email ?? "");
  const [state, setState] = useState(walletProfile?.state ?? "");
  const [show, setShow] = useState(false);
  const [street, setStreet] = useState(walletProfile?.address ?? "");
  const [country, setCountry] = useState(walletProfile?.country ?? "");
  const [zipCode, setZipCode] = useState(walletProfile?.zip ?? "");
  const [date, setDate] = useState(
    moment(walletProfile?.dob).format("MM/DD/YYYY") ?? new Date()
  );
  const [naicsCode, setNaicsCode] = useState([]);
  const [stateCode, setStateCode] = useState(walletProfile?.state ?? "");
  const [appartment, setAppartment] = useState("");
  const [dateformat, setDateformat] = useState(
    moment(walletProfile?.dob).format("YYYY-MM-DD") ?? ""
  );
  const [countryCode, setCountryCode] = useState(walletProfile?.country ?? "");
  const [businessName, setBusinessName] = useState("");
  const [businessType, setBusinessType] = useState([]);
  const [businessWebsite, setBusinessWebsite] = useState("");
  const [doingBusinessAs, setDoingBusinessAs] = useState("");
  const [businessTypeValue, setBusinessTypeValue] = useState("");
  const [naicsCodeTypeValue, setNaicsCodeTypeValue] = useState("");
  const [businessOpenModal, setBusinessOpenModal] = useState(false);
  const [naicsCodeOpenModal, setNaicsCodeOpenModal] = useState(false);

  useEffect(() => {
    dispatch(getWalletUserProfile(uuid));
    dispatch(getBusinessType());
    dispatch(getNaicsCode());

    if (getKycData?.businessType?.length > 0) {
      const arr = [];
      getKycData?.businessType?.map((item, index) => {
        arr.push({
          key: index,
          label: item.label,
          value: item.name,
          id: item.uuid,
        });
        setBusinessType(arr);
      });
    }

    if (getKycData?.naicsCode) {
      const arr = [];
      getKycData?.naicsCode?.map((item, index) => {
        arr.push({
          key: index,
          label: item.subcategory,
          value: item.subcategory,
          code: item.code,
        });
        setNaicsCode(arr);
      });
    }
  }, [businessOpenModal, naicsCodeOpenModal]);

  useEffect(() => {
    ref.current?.setAddressText(walletProfile?.address);
  }, []);

  const customHeader = () => (
    <TouchableOpacity onPress={() => goBack()} style={styles.mainHeaderView}>
      <Image source={backArrow} style={styles.backIconStyle} />
      <Text style={styles.headerText}>{strings.businessReg.header}</Text>
    </TouchableOpacity>
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
      const fullDate = selectedMonth + " / " + selectedDay + " / " + year;
      const newDateFormat = year + "-" + selectedMonth + "-" + selectedDay;
      setDateformat(newDateFormat);
      setDate(fullDate);
    }
  };

  const getAddress = (details) => {
    for (var i = 0; i < details.length; i++) {
      if (details[i].types[0] == "country") {
        setCountry(details?.[i]?.long_name);
        setCountryCode(details?.[i]?.short_name);
      }

      if (details[i].types[0] == "postal_code") {
        setZipCode(details?.[i]?.long_name);
      }

      if (details[i].types[0] == "administrative_area_level_1") {
        setState(details?.[i]?.long_name);
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

  const submit = () => {
    if (!dateformat || dateformat === new Date() || date === new Date()) {
      Toast.show({
        position: "bottom",
        type: "error_toast",
        visibilityTime: 1500,
        text2: strings.validation.enterDate,
      });
    } else if (!empId) {
      Toast.show({
        position: "bottom",
        type: "error_toast",
        visibilityTime: 1500,
        text2: strings.validation.emptyEmployerNo,
      });
    } else if (empId && digits.test(empId) === false) {
      Toast.show({
        position: "bottom",
        type: "error_toast",
        visibilityTime: 1500,
        text2: strings.validation.invalidEmployerNo,
      });
    } else if (empId && empId.length < 9) {
      Toast.show({
        position: "bottom",
        type: "error_toast",
        visibilityTime: 1500,
        text2: strings.validation.invalidEmployerNo,
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
    } else if (!businessName) {
      Toast.show({
        position: "bottom",
        type: "error_toast",
        visibilityTime: 1500,
        text2: strings.validation.emptyBusinessName,
      });
    }
    // else if (businessName && characterReg.test(businessName) === false) {
    //   Toast.show({
    //     position: "bottom",
    //     type: "error_toast",
    //     visibilityTime: 1500,
    //     text2: strings.validation.invalidBusinessName,
    //   });
    // } else if (businessWebsite && websiteUrl.test(businessWebsite) === false) {
    //   Toast.show({
    //     position: "bottom",
    //     type: "error_toast",
    //     visibilityTime: 1500,
    //     text2: strings.validation.invalidBusinessWebsite,
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
        address_type: "home",
        address: street,
        city: city,
        state: state,
        zip: zipCode,
        country: countryCode,
        phone: getUserData?.phone?.phoneNumber,
        email: email,
        dob: dateformat,
        entity_name: businessName,
        business_type: businessTypeValue,
        business_type_uuid: id,
        business_website: businessWebsite,
        naics_code: naicsCodeTypeValue,
        business_registration_state: stateCode,
        doing_business_as: doingBusinessAs,
        employer_identification_number: empId,
      };
      dispatch(businessRegistration(data))
        .then(() => handleScreenChange(10))
        .catch((error) => console.log("b reg", error));
    }
  };

  const isLoading = useSelector((state) =>
    isLoadingSelector([TYPES.BUSINESS_REGISTRATION], state)
  );

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        {customHeader()}

        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps={"handled"}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <View>
            <Spacer space={SH(20)} />
            <View style={styles.fieldsView}>
              <Text style={styles.titleStyle}>
                {strings.businessReg.header}
              </Text>
            </View>

            <Spacer space={SH(20)} />
            <View style={styles.fieldsView}>
              <Text style={styles.labelStyle}>
                {strings.personalInformation.labelDob}
              </Text>

              <View style={styles.input}>
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
              </View>

              <DateTimePickerModal
                mode={"date"}
                isVisible={show}
                onConfirm={onChangeDate}
                onCancel={() => setShow(false)}
                maximumDate={new Date(moment().subtract(21, "years"))}
              />

              <TextInput
                maxLength={9}
                value={empId.trim()}
                secureTextEntry={true}
                returnKeyType={"done"}
                onChangeText={setEmpId}
                autoCapitalize={"none"}
                keyboardType={"number-pad"}
                style={styles.textFieldStyle}
                placeholderTextColor={COLORS.secondary}
                placeholder={strings.businessReg.employerIDNumber}
              />

              <TextInput
                value={email.trim()}
                returnKeyType={"done"}
                onChangeText={setEmail}
                autoCapitalize={"none"}
                style={styles.textFieldStyle}
                keyboardType={"email-address"}
                placeholderTextColor={COLORS.secondary}
                placeholder={strings.personalInformation.email}
                editable={false}
              />

              <TextInput
                returnKeyType={"done"}
                keyboardType={"default"}
                value={businessName.trim()}
                style={styles.textFieldStyle}
                onChangeText={setBusinessName}
                placeholderTextColor={COLORS.secondary}
                placeholder={strings.businessReg.businessName}
              />

              <TextInput
                returnKeyType={"done"}
                autoCapitalize={"none"}
                keyboardType={"default"}
                style={styles.textFieldStyle}
                value={businessWebsite.trim()}
                onChangeText={setBusinessWebsite}
                placeholderTextColor={COLORS.secondary}
                placeholder={strings.businessReg.businessWebsite}
              />

              <TextInput
                returnKeyType={"done"}
                keyboardType={"default"}
                style={styles.textFieldStyle}
                value={doingBusinessAs.trim()}
                onChangeText={setDoingBusinessAs}
                placeholderTextColor={COLORS.secondary}
                placeholder={strings.businessReg.doingBusiness}
              />

              <DropDownPicker
                ArrowUpIconComponent={() => (
                  <Image source={dropdownIcon} style={styles.dropDownIcon} />
                )}
                ArrowDownIconComponent={() => (
                  <Image source={dropdownIcon} style={styles.dropDownIcon} />
                )}
                containerStyle={[
                  styles.containerStyle,
                  { zIndex: Platform.OS === "ios" ? 6 : 20 },
                ]}
                setOpen={() => {
                  dispatch(getBusinessType());
                  setBusinessOpenModal(!businessOpenModal);
                }}
                items={businessType}
                open={businessOpenModal}
                style={styles.dropdown}
                value={businessTypeValue}
                setItems={setBusinessType}
                placeholder={strings.businessReg.businessType}
                setValue={setBusinessTypeValue}
                placeholderStyle={{
                  color: COLORS.secondary,
                  fontFamily: Fonts.Italic,
                }}
                listItemLabelStyle={styles.listItemStyle}
                labelStyle={styles.listItemStyle}
                onSelectItem={(item) => setId(item.id)}
              />

              <DropDownPicker
                ArrowUpIconComponent={() => (
                  <Image source={dropdownIcon} style={styles.dropDownIcon} />
                )}
                ArrowDownIconComponent={() => (
                  <Image source={dropdownIcon} style={styles.dropDownIcon} />
                )}
                containerStyle={[
                  styles.containerStyle,
                  { zIndex: Platform.OS === "ios" ? 3 : 12 },
                ]}
                setOpen={() => {
                  dispatch(getNaicsCode());
                  setNaicsCodeOpenModal(!naicsCodeOpenModal);
                }}
                items={naicsCode}
                open={naicsCodeOpenModal}
                style={styles.dropdown}
                value={naicsCodeTypeValue}
                setItems={setNaicsCode}
                setValue={setNaicsCodeTypeValue}
                placeholderStyle={{
                  color: COLORS.secondary,
                  fontFamily: Fonts.Italic,
                }}
                labelStyle={styles.listItemStyle}
                onSelectItem={(item) => setCode(item.id)}
                listItemLabelStyle={styles.listItemStyle}
                placeholder={strings.businessReg.naicsType}
              />

              <Spacer space={SH(16)} />
              <View>
                <Text style={styles.labelStyle}>
                  {strings.personalInformation.currentAddress}
                </Text>

                <Spacer space={SH(16)} />
                <GooglePlacesAutocomplete
                  ref={ref}
                  fetchDetails
                  autoFocus={false}
                  keepResultsAfterBlur={true}
                  textInputProps={{
                    placeholderTextColor: COLORS.secondary,
                    returnKeyType: "search",
                  }}
                  listViewDisplayed={true}
                  returnKeyType={"search"}
                  placeholder={strings.personalInformation.streetAddress}
                  enablePoweredByContainer={false}
                  query={{
                    language: "en",
                    type: "address",
                    components: "country:us",
                    key: GOOGLE_MAP.API_KEYS,
                  }}
                  onPress={(data, details) => {
                    setCity("");
                    setState("");
                    setZipCode("");
                    setCountry("");
                    setAppartment("");
                    ref.current?.setAddressText(
                      data.structured_formatting.main_text
                    );
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

              <Spacer space={SH(20)} />
              <Button
                onPress={submit}
                pending={isLoading}
                style={{ zIndex: -99 }}
                title={strings.buttonText.next}
              />
            </View>
            {isLoading ? <Loader message="Loading data ..." /> : null}

            <Spacer space={SH(20)} />
          </View>
        </KeyboardAwareScrollView>
      </View>
    </ScreenWrapper>
  );
}
