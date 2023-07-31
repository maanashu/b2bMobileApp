import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  BackHandler,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import {
  Fonts,
  calendar,
  cross,
  email_verification,
  unchecked,
} from "@/assets";
import { COLORS, SF, SH, SW, ShadowStyles } from "@/theme";
import { TYPES } from "@/Types/Types";
import { NAVIGATION } from "@/constants";
import { strings } from "@/localization";
import IonIcon from "react-native-vector-icons/Ionicons";
import { GOOGLE_MAP } from "@/constants/ApiKeys";
import { getUser as userSelector } from "@/selectors/UserSelectors";
import { ScreenWrapper, Spacer, Button } from "@/components";
import { isLoadingSelector } from "@/selectors/StatusSelectors";
import {
  getUser,
  getUserProfile,
  getWalletUserProfile,
  login,
} from "@/actions/UserActions";
import { styles } from "@/screens/GetStarted/PersonalInformation/PersonalInformation.styles";
import { getKyc } from "@/selectors/KycSelector";
import { digits, emailReg } from "@/Utils/validators";
import { createWallet } from "@/actions/WalletActions";
import { Loader } from "@/components/Loader";
import { navigate } from "@/navigation/NavigationRef";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import RBSheet from "react-native-raw-bottom-sheet";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { requestKyc } from "@/actions/KycActions";
import CustomToast from "@/components/CustomToast";

export function PersonalInformation({
  closeModal,
  handleScreenChange,
  ...params
}) {
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const ref = useRef(null);
  const refRBSheet = useRef();
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
  const phoneCode =
    getData?.user?.payload?.user_profiles?.phone_code ??
    getData?.registerData?.code;
  const phone =
    getData?.user?.payload?.user_profiles?.phone_no ||
    getData?.phone?.phoneNumber;
  const email = getData?.registerData?.email || getData?.user?.payload?.email;
  const dateformat =
    getData?.registerData?.dob || getData?.user?.payload?.user_profiles?.dob;

  const [ssn, setSsn] = useState("");
  const [city, setCity] = useState("");
  const [male, setMale] = useState("");
  const [female, setFemale] = useState("");
  // const [email, setEmail] = useState(getData?.registerData?.email);
  const [state, setState] = useState("");
  const [show, setShow] = useState(false);
  const [street, setStreet] = useState("");
  const [country, setCountry] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [date, setDate] = useState(getData?.registerData?.dob);
  const [stateCode, setStateCode] = useState("");
  const [appartment, setAppartment] = useState("");
  // const [dateformat, setDateformat] = useState(getData?.registerData?.dob);
  const [countryCode, setCountryCode] = useState("");
  const [individual, setIndividual] = useState(false);
  const [business, setBusiness] = useState(false);
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("");

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
  useEffect(() => {
    dispatch(getUser);
  }, [isFocused]);
  const handleBackButton = () => {
    if (params?.route?.params?.route === "kyc") {
      navigate(NAVIGATION.productInquiry);
    }
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackButton);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", handleBackButton);
  }, []);

  const crossHandler = async () => {
    if (getData?.user?.payload?.token) {
      dispatch(getUserProfile(getData?.registered?.uuid));
      closeModal();
    } else {
      const fcmtoken = await AsyncStorage.getItem("token");

      dispatch(
        login(
          getData?.registerData?.pin ||
            getData?.user?.payload?.user_profiles?.security_pin,
          getData?.phone?.countryCode,
          getData?.phone?.phoneNumber,
          getData?.screenName,
          fcmtoken
        )
      ).then(() => closeModal());
    }
  };

  const submit = async () => {
    if (!dateformat) {
      showToast(strings.validation.enterDate, "error", 2000);
    } else if (!ssn) {
      showToast(strings.validation.enterSsn, "error", 2000);
    } else if (ssn && digits.test(ssn) === false) {
      showToast(strings.validation.invalidSSN, "error", 2000);
    } else if (ssn && ssn.length < 9) {
      showToast("Please enter valid SSN Number", "error", 2000);
    } else if (!email) {
      showToast(strings.validation.emptyEmail, "error", 2000);
    } else if (email && emailReg.test(email) === false) {
    } else if (individual === false && business === false) {
      showToast(strings.validation.selectType, "error", 2000);
    } else if (male === false && female === false) {
      showToast(strings.validation.selectGender, "error", 2000);
    } else if (!street) {
      showToast(strings.validation.enterStret, "error", 2000);
    } else if (!city) {
      showToast(strings.validation.selectCity, "error", 2000);
    } else if (!state) {
      showToast(strings.validation.selectState, "error", 2000);
    } else if (!zipCode) {
      showToast(strings.validation.enterZip, "error", 2000);
    } else if (!country) {
      showToast(strings.validation.country, "error", 2000);
    } else if (!phone) {
      showToast("Phone code required", "error", 2000);
    } else {
      const data = {
        first_name: firstname.trim(),
        last_name: lastname.trim(),
        phone_code: phoneCode,
        phone: phone,
        dob:
          getData?.registerData?.dob ||
          getData?.user?.payload?.user_profiles?.dob,
        ssn: ssn,
        gender: male ? "male" : "female",
        address: street,
        appartment: appartment,
        city: city,
        state: state,
        zip: zipCode,
        country: country,
        email: email || getData?.user?.payload?.email,
        countryCode: countryCode,
        stateCode: stateCode,
        type: individual ? "individual" : "business",
        latitude: latitude,
        longitude: longitude,
      };
      dispatch(createWallet(data))
        .then(() => {
          dispatch(getUserProfile(getData?.registered?.uuid));
          dispatch(
            getWalletUserProfile(
              getData?.registered?.uuid || getData?.user?.payload?.uuid
            )
          );
          handleScreenChange(4);
          dispatch(requestKyc());
        })
        .catch(() => {});
    }
  };

  const isLoading = useSelector((state) =>
    isLoadingSelector([TYPES.CREATE_WALLET_USER], state)
  );
  const isLoginLoader = useSelector((state) =>
    isLoadingSelector([TYPES.LOGIN], state)
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

              <View style={styles.input} onPress={() => setShow(!show)}>
                <Image source={calendar} style={styles.calendarImage} />

                <Spacer space={SH(5)} horizontal />

                <Text
                  style={{ color: COLORS.darkGrey, fontFamily: Fonts.Regular }}
                >
                  {dateformat}
                </Text>
              </View>

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

              <Spacer space={SH(12)} />

              <View
                style={{
                  backgroundColor: COLORS.inputBorder,
                  paddingHorizontal: SW(10),
                  paddingVertical: SH(13),
                  borderRadius: SW(5),
                }}
              >
                <Text
                  style={{ color: COLORS.darkGrey, fontFamily: Fonts.Regular }}
                >
                  {email}
                </Text>
              </View>
              <Spacer space={SH(16)} />
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
              </View>

              <Spacer space={SH(16)} />
              <View>
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
                    setCity("");
                    setState("");
                    setZipCode("");
                    setCountry("");
                    setAppartment("");
                    getAddress(details.address_components);
                    setStreet(data.structured_formatting.main_text);
                    setLatitude(details.geometry.location.lat);
                    setLongitude(details.geometry.location.lng);
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

              <Spacer space={SH(10)} />
            </View>
          </View>
        </KeyboardAwareScrollView>
        <View style={{ justifyContent: "flex-end", padding: SW(20) }}>
          <Button
            onPress={submit}
            style={{ zIndex: -99 }}
            title={strings.buttonText.next}
          />
        </View>
        {isLoading ? <Loader message="Loading data ..." /> : null}
        {isLoginLoader ? <Loader message="Loading data ..." /> : null}

        <RBSheet
          ref={refRBSheet}
          customStyles={{
            wrapper: {
              // backgroundColor: "transparent",
              opacity: 1,
            },
            container: {
              borderTopLeftRadius: SW(15),
              borderTopRightRadius: SW(15),
              ...ShadowStyles.shadow4,
            },
          }}
        >
          <>
            <View style={styles.bottomSheetHeader}>
              <Text style={styles.emailVerText}>
                {strings.personalInformation.emailVerification}
              </Text>
              <TouchableOpacity onPress={() => refRBSheet.current.close()}>
                <Image
                  source={cross}
                  resizeMode="contain"
                  style={styles.crossIcon}
                />
              </TouchableOpacity>
            </View>

            <Spacer space={SH(20)} />

            <Text style={styles.emailAddressHeading}>
              {strings.personalInformation.emailAddress}
            </Text>
            <Spacer space={SH(35)} />
            <View style={{ paddingHorizontal: SW(25) }}>
              <View
                style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
              >
                <View
                  style={{
                    flex: 1,
                    borderWidth: SW(1),
                    borderRadius: SW(5),
                    borderColor: COLORS.termsBorder,
                    height: SH(55),
                    paddingHorizontal: SW(10),
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={email_verification}
                    resizeMode="contain"
                    style={{
                      height: SW(20),
                      width: SW(20),
                      alignSelf: "center",
                    }}
                  />
                  <Spacer horizontal space={SW(10)} />
                  <TextInput
                    placeholder="Email address"
                    value={email}
                    style={{ fontSize: SF(15), fontFamily: Fonts.Regular }}
                  />
                </View>
              </View>
            </View>
            <View style={styles.bottomSheetButtonView}>
              <Button title={"Verify"} />
            </View>
          </>
        </RBSheet>
      </View>
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
