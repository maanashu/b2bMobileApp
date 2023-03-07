// import React, { useState, useRef, useEffect } from "react";
// import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";

// import moment from "moment";
// import { useDispatch, useSelector } from "react-redux";
// import IonIcon from "react-native-vector-icons/Ionicons";
// import { Toast } from "react-native-toast-message/lib/src/Toast";
// import DateTimePickerModal from "react-native-modal-datetime-picker";
// import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
// import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

// import { Images } from "@/assets";
// import { COLORS, SH } from "@/theme";
// import { TYPES } from "@/Types/Types";
// import { strings } from "@/localization";
// import { GOOGLE_MAP } from "@/constants/ApiKeys";
// import { getUser, getuser } from "@/selectors/UserSelectors";
// import { digits, emailReg } from "@/Utils/validators";
// import { goBack } from "@/navigation/NavigationRef";
// import { ScreenWrapper, Spacer, Button } from "@/components";
// import { isLoadingSelector } from "@/selectors/StatusSelectors";
// import { personalInformation } from "@/actions/UserActions";

// import { styles } from "@/screens/GetStarted/PersonalInformation/PersonalInformation.styles";

// export function PersonalInformation(props) {
//   const dispatch = useDispatch();
//   const getData = useSelector(getUser);
//   const id = getData?.user?.id || getData?.registered?.id;
//   const firstname = getData?.userProfile?.firstname;
//   const lastname = getData?.userProfile?.lastname;
//   const phone = getData?.phoneData?.phoneNumber;
//   const driverSteps = getData?.userProfile?.driver_steps;
//   const driver_steps = driverSteps !== null ? driverSteps : 0;
//   const [date, setDate] = useState(new Date());
//   const [show, setShow] = useState(false);
//   const [ssn, setSsn] = useState("");
//   const [male, setMale] = useState(false);
//   const [female, setFemale] = useState(false);
//   const [street, setStreet] = useState("");
//   const [appartment, setAppartment] = useState("");
//   const [zipCode, setZipCode] = useState("");
//   const [city, setCity] = useState("");
//   const [state, setState] = useState("");
//   const [country, setCountry] = useState("");
//   const [dateformat, setDateformat] = useState("");
//   const [email, setEmail] = useState("");
//   const [stateCode, setStateCode] = useState("");
//   const [countryCode, setCountryCode] = useState("");
//   const ref = useRef(null);

//   useEffect(() => {
//     dispatch(getUser(id));
//   }, [id]);

//   const onChangeDate = (selectedDate) => {
//     setShow(false);
//     const month = selectedDate.getMonth() + 1;
//     const selectedMonth = month < 10 ? "0" + month : month;
//     const day = selectedDate.getDate();
//     const year = selectedDate.getFullYear();
//     const fullDate = selectedMonth + " / " + day + " / " + year;
//     const newDateFormat = year + "-" + selectedMonth + "-" + day;
//     setDateformat(newDateFormat);
//     setDate(fullDate);
//   };

//   const submit = () => {
//     if (!dateformat || dateformat === new Date() || date === new Date()) {
//       Toast.show({
//         position: "bottom",
//         type: "error_toast",
//         text2: strings.validation.enterDate,
//         visibilityTime: 1500,
//       });
//     } else if (!ssn) {
//       Toast.show({
//         position: "bottom",
//         type: "error_toast",
//         text2: strings.validation.enterSsn,
//         visibilityTime: 1500,
//       });
//     } else if (ssn && digits.test(ssn) === false) {
//       Toast.show({
//         position: "bottom",
//         type: "error_toast",
//         text2: strings.validation.invalidSSN,
//         visibilityTime: 1500,
//       });
//     } else if (ssn && ssn.length < 9) {
//       Toast.show({
//         position: "bottom",
//         type: "error_toast",
//         text2: "Please enter valid SSN Number",
//         visibilityTime: 1500,
//       });
//     } else if (!email) {
//       Toast.show({
//         position: "bottom",
//         type: "error_toast",
//         text2: "strings.validation.emptyEmail",
//         visibilityTime: 1500,
//       });
//     } else if (email && emailReg.test(email) === false) {
//       Toast.show({
//         position: "bottom",
//         type: "error_toast",
//         text2: "strings.validation.invalidEmail",
//         visibilityTime: 1500,
//       });
//     } else if (male === false && female === false) {
//       Toast.show({
//         position: "bottom",
//         type: "error_toast",
//         text2: "strings.validation.selectGender",
//         visibilityTime: 1500,
//       });
//     } else if (!street) {
//       Toast.show({
//         position: "bottom",
//         type: "error_toast",
//         text2: "strings.validation.enterStret",
//         visibilityTime: 1500,
//       });
//     } else if (!city) {
//       Toast.show({
//         position: "bottom",
//         type: "error_toast",
//         text2: "strings.validation.selectCity",
//         visibilityTime: 1500,
//       });
//     } else if (!state) {
//       Toast.show({
//         position: "bottom",
//         type: "error_toast",
//         text2: "strings.validation.selectState",
//         visibilityTime: 1500,
//       });
//     } else if (!zipCode) {
//       Toast.show({
//         position: "bottom",
//         type: "error_toast",
//         text2: "strings.validation.enterZip",
//         visibilityTime: 1500,
//       });
//     } else if (!country) {
//       Toast.show({
//         position: "bottom",
//         type: "error_toast",
//         text2: "strings.validation.country",
//         visibilityTime: 1500,
//       });
//     } else {
//       const data = {
//         first_name: firstname,
//         last_name: lastname,
//         phone: phone,
//         dob: dateformat,
//         ssn: ssn,
//         gender: male ? "male" : "female",
//         address: street,
//         appartment: appartment,
//         city: city,
//         state: state,
//         zip: zipCode,
//         country: country,
//         email: email,
//         countryCode: countryCode,
//         stateCode: stateCode,
//       };
//       dispatch(personalInformation(data, driver_steps));
//       clearInput();
//     }
//   };

//   const clearInput = () => {
//     setDate("");
//     setSsn("");
//     setCity("");
//     setStreet("");
//     setAppartment("");
//     setState("");
//     setCountry("");
//     setZipCode("");
//     setFemale(false);
//     setMale(false);
//   };

//   const isLoading = useSelector((state) =>
//     isLoadingSelector([TYPES.PERSONALINFORMATION], state)
//   );

//   const getAddress = (details) => {
//     console.log("details----", details);
//     for (var i = 0; i < details.length; i++) {
//       if (details[i].types[0] == "country") {
//         setCountry(details?.[i]?.long_name);
//         setCountryCode(details?.[i]?.short_name);
//       }

//       if (details[i].types[0] == "postal_code") {
//         setZipCode(details?.[i]?.long_name);
//       }

//       if (details[i].types[0] == "administrative_area_level_1") {
//         setState(details?.[i]?.long_name);
//         setStateCode(details?.[i]?.short_name);
//       }

//       if (
//         details[i].types[0] == "administrative_area_level_2" ||
//         details[i].types[0] == "administrative_area_level_3" ||
//         details[i].types[0] == "locality"
//       ) {
//         setCity(details?.[i]?.long_name);
//       }
//     }
//   };

//   return (
//     <ScreenWrapper>
//       <View style={styles.container}>
//         <View style={styles.maincontainer}>
//           <Text style={styles.header}>
//             {strings.personalInformation.header}
//           </Text>
//           <View />
//           <View style={{ flexDirection: "row", alignItems: "center" }}>
//             <TouchableOpacity onPress={() => goBack()}>
//               <Image
//                 source={Images.crossButton}
//                 resizeMode="contain"
//                 style={styles.headerIcon}
//               />
//             </TouchableOpacity>
//           </View>
//         </View>

//         <KeyboardAwareScrollView
//           contentContainerStyle={{ flexGrow: 1 }}
//           keyboardShouldPersistTaps="handled"
//           showsVerticalScrollIndicator={false}
//         >
//           <View>
//             <Spacer space={SH(20)} />

//             <View style={styles.fieldsView}>
//               <Text style={styles.titleStyle}>
//                 {strings.personalInformation.title}
//               </Text>
//             </View>

//             <Spacer space={SH(20)} />
//             <View style={styles.fieldsView}>
//               <Text style={styles.labelStyle}>
//                 {strings.personalInformation.labelDob}
//               </Text>

//               <TouchableOpacity
//                 style={styles.input}
//                 onPress={() => setShow(!show)}
//               >
//                 <Image source={Images.calender} style={styles.calendarImage} />

//                 <TextInput
//                   editable={false}
//                   autoCapitalize="none"
//                   returnKeyType="done"
//                   placeholderTextColor={COLORS.secondary}
//                   placeholder={strings.personalInformation.placeholder}
//                   value={date}
//                   style={[
//                     styles.textInputStyles,
//                     { color: date ? COLORS.black : COLORS.secondary },
//                   ]}
//                 />
//               </TouchableOpacity>

//               <DateTimePickerModal
//                 isVisible={show}
//                 mode="date"
//                 maximumDate={new Date(moment().subtract(21, "years"))}
//                 onConfirm={onChangeDate}
//                 onCancel={() => setShow(false)}
//               />

//               <TextInput
//                 autoCapitalize="none"
//                 returnKeyType="done"
//                 onChangeText={setSsn}
//                 placeholder={strings.personalInformation.ssn}
//                 placeholderTextColor={COLORS.secondary}
//                 value={ssn.trim()}
//                 secureTextEntry={true}
//                 keyboardType="number-pad"
//                 style={styles.textFieldStyle}
//                 maxLength={9}
//               />

//               <TextInput
//                 autoCapitalize="none"
//                 returnKeyType="done"
//                 onChangeText={setEmail}
//                 placeholder={strings.personalInformation.email}
//                 placeholderTextColor={COLORS.secondary}
//                 value={email.trim()}
//                 keyboardType="email-address"
//                 style={styles.textFieldStyle}
//               />

//               <Spacer space={SH(16)} />

//               <View>
//                 <Text style={styles.labelStyle}>
//                   {strings.personalInformation.gender}
//                 </Text>

//                 <View style={styles.checkboxRow}>
//                   <View>
//                     {male ? (
//                       <View style={styles.maleCheckStyle}>
//                         <TouchableOpacity
//                           style={styles.maleCheckbox}
//                           onPress={() => {
//                             setMale(!male), setFemale(false);
//                           }}
//                         >
//                           <IonIcon
//                             name="checkbox"
//                             size={19}
//                             color={COLORS.text}
//                           />
//                         </TouchableOpacity>
//                         <Text
//                           style={[styles.labelStyle2, styles.checkboxLabel]}
//                         >
//                           {strings.personalInformation.male}
//                         </Text>
//                       </View>
//                     ) : (
//                       <View style={styles.maleCheckStyle}>
//                         <TouchableOpacity
//                           style={styles.maleCheckbox}
//                           onPress={() => {
//                             setMale(!male), setFemale(false);
//                           }}
//                         >
//                           <Image
//                             source={Images.unchecked}
//                             style={styles.checkboxStyle}
//                           />
//                         </TouchableOpacity>
//                         <Text
//                           style={[styles.labelStyle2, styles.checkboxLabel]}
//                         >
//                           {strings.personalInformation.male}
//                         </Text>
//                       </View>
//                     )}
//                   </View>

//                   <View style={{ marginLeft: 20 }}>
//                     {female ? (
//                       <View style={styles.maleCheckStyle}>
//                         <TouchableOpacity
//                           style={styles.maleCheckbox}
//                           onPress={() => setFemale(!female)}
//                         >
//                           <IonIcon
//                             name="checkbox"
//                             size={19}
//                             color={COLORS.text}
//                           />
//                         </TouchableOpacity>
//                         <Text
//                           style={[styles.labelStyle2, styles.checkboxLabel]}
//                         >
//                           {strings.personalInformation.female}
//                         </Text>
//                       </View>
//                     ) : (
//                       <View style={styles.maleCheckStyle}>
//                         <TouchableOpacity
//                           style={styles.maleCheckbox}
//                           onPress={() => {
//                             setFemale(!female), setMale(false);
//                           }}
//                         >
//                           <Image
//                             source={Images.unchecked}
//                             style={styles.checkboxStyle}
//                           />
//                         </TouchableOpacity>
//                         <Text
//                           style={[styles.labelStyle2, styles.checkboxLabel]}
//                         >
//                           {strings.personalInformation.female}
//                         </Text>
//                       </View>
//                     )}
//                   </View>
//                 </View>
//               </View>

//               <Spacer space={SH(16)} />
//               <View>
//                 <Text style={styles.labelStyle}>
//                   {strings.personalInformation.currentAddress}
//                 </Text>

//                 <Spacer space={SH(16)} />
//                 {/* <GooglePlacesAutocomplete
//                   ref={ref}
//                   fetchDetails
//                   autoFocus={false}
//                   returnKeyType={"search"}
//                   placeholder={"Street Address"}
//                   enablePoweredByContainer={false}
//                   query={{
//                     key: GOOGLE_MAP.API_KEYS,
//                     language: "en",
//                     type: "address",
//                     components: "country:us",
//                   }}
//                   onPress={(data, details) => {
//                     console.log("data---", JSON.stringify(data));
//                     setCity("");
//                     setState("");
//                     setAppartment("");
//                     setZipCode("");
//                     setCountry("");
//                     getAddress(details.address_components);
//                     setStreet(data.structured_formatting.main_text);
//                   }}
//                   listViewDisplayed={true}
//                   styles={{
//                     container: {
//                       borderWidth: 0,
//                       borderRadius: 5,
//                       backgroundColor: COLORS.placeholder,
//                     },
//                     textInputContainer: {
//                       backgroundColor: "rgba(0,0,0,0)",
//                       borderTopWidth: 0,
//                       borderBottomWidth: 0,
//                     },
//                     textInput: styles.googlePlacesTextField,
//                     predefinedPlacesDescription: {
//                       color: COLORS.light_blue,
//                     },
//                   }}
//                 /> */}

//                 <TextInput
//                   autoCapitalize="none"
//                   returnKeyType="done"
//                   onChangeText={setAppartment}
//                   placeholder={strings.personalInformation.appart}
//                   placeholderTextColor={COLORS.secondary}
//                   value={appartment}
//                   style={styles.textFieldStyle}
//                 />

//                 <TextInput
//                   autoCapitalize="none"
//                   returnKeyType="done"
//                   onChangeText={setCity}
//                   placeholder={strings.personalInformation.city}
//                   placeholderTextColor={COLORS.secondary}
//                   value={city}
//                   style={styles.textFieldStyle}
//                 />

//                 <TextInput
//                   autoCapitalize="none"
//                   returnKeyType="done"
//                   onChangeText={setState}
//                   placeholder={strings.personalInformation.state}
//                   placeholderTextColor={COLORS.secondary}
//                   value={state}
//                   style={styles.textFieldStyle}
//                 />

//                 <TextInput
//                   autoCapitalize="none"
//                   keyboardType="number-pad"
//                   returnKeyType="done"
//                   onChangeText={setZipCode}
//                   placeholder={strings.personalInformation.zip}
//                   placeholderTextColor={COLORS.secondary}
//                   value={zipCode}
//                   maxLength={6}
//                   style={styles.textFieldStyle}
//                 />

//                 <TextInput
//                   autoCapitalize="none"
//                   returnKeyType="done"
//                   onChangeText={setCountry}
//                   placeholder={strings.personalInformation.country}
//                   value={country}
//                   placeholderTextColor={COLORS.secondary}
//                   style={styles.textFieldStyle}
//                 />
//               </View>

//               <Spacer space={SH(60)} />
//               <Button
//                 onPress={submit}
//                 title={strings.personalInformation.button}
//                 style={{ zIndex: -99 }}
//                 pending={isLoading}
//               />
//             </View>

//             <Spacer space={SH(50)} />
//           </View>
//         </KeyboardAwareScrollView>
//       </View>
//     </ScreenWrapper>
//   );
// }

import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { Button, NameHeader, ScreenWrapper, Spacer } from "@/components";
import { styles } from "./PersonalInformation.styles";
import { backArrow, calendar } from "@/assets";
import { strings } from "@/localization";
import { COLORS, SH } from "@/theme";
import moment from "moment";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useSelector } from "react-redux";
import { getUser } from "@/selectors/UserSelectors";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";

export function PersonalInformation() {
  const user = useSelector(getUser);

  const [show, setShow] = useState(false);
  const [date, setDate] = useState(
    new Date().getDate() +
      " / " +
      parseInt(new Date().getMonth() + 1) +
      " / " +
      new Date().getFullYear()
  );
  const [dateformat, setDateformat] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setcountryCode] = useState(user?.phone?.countryCode);
  const [phoneNumber, setphoneNumber] = useState(user?.phone?.phoneNumber);

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

  return (
    <ScreenWrapper>
      <NameHeader back={backArrow} title={"Personal Information"} />
      <KeyboardAwareScrollView>
        <View style={styles.mainContainer}>
          <Text style={styles.headingBoldText}>{"Username"}</Text>
          <TextInput
            autoCapitalize="none"
            returnKeyType="done"
            // onChangeText={setEmail}
            placeholder={strings.personalInformation.userName}
            placeholderTextColor={COLORS.secondary}
            style={styles.textFieldStyle}
          />

          <Spacer space={SH(15)} />

          <Text style={styles.headingBoldText}>{"First Name"}</Text>

          <TextInput
            autoCapitalize="none"
            returnKeyType="done"
            // onChangeText={setEmail}
            placeholder={strings.personalInformation.firstName}
            placeholderTextColor={COLORS.secondary}
            style={styles.textFieldStyle}
          />

          <Spacer space={SH(15)} />

          <Text style={styles.headingBoldText}>{"Last Name"}</Text>

          <TextInput
            autoCapitalize="none"
            returnKeyType="done"
            // onChangeText={setEmail}
            placeholder={strings.personalInformation.lastName}
            placeholderTextColor={COLORS.secondary}
            style={styles.textFieldStyle}
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
            style={styles.textFieldStyle}
          />

          <Spacer space={SH(15)} />

          <Text style={styles.headingBoldText}>{"Re-enter Security Pin"}</Text>

          <TextInput
            autoCapitalize="none"
            returnKeyType="done"
            placeholder={strings.personalInformation.reEnterPin}
            placeholderTextColor={COLORS.darkGrey}
            keyboardType="numeric"
            style={styles.textFieldStyle}
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
              onPress={() => navigate(NAVIGATION.startOrder)}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ScreenWrapper>
  );
}
