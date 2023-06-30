import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import React, { useRef } from "react";
import { styles } from "./AddShippingAddress.styles";
import { Button, ScreenWrapper, Spacer, TextField } from "@/components";
import { SH, SW } from "@/theme/ScalerDimensions";
import { COLORS } from "@/theme/Colors";
import { useState } from "react";
import { goBack } from "@/navigation/NavigationRef";
import Icon from "react-native-vector-icons/FontAwesome5";
import CountryPicker from "react-native-country-picker-modal";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { backArrow } from "@/assets";
import { strings } from "@/localization";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "@/selectors/UserSelectors";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { digits } from "@/Utils/validators";
import { addUserLocation, updateUserLocation } from "@/actions/UserActions";
export function AddShippingAddress(props) {
  const [flag, setFlag] = useState("US");
  const [countryCode, setCountryCode] = useState("+1");
  const [countryName, setCountryName] = useState("United States of America");
  const [mobileNumber, setMobileNumber] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [add1, setAdd1] = useState("");
  const [add2, setAdd2] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [appartment, setAppartment] = useState("");
  const [stateCode, setStateCode] = useState("");
  const [street, setStreet] = useState("");
  const dispatch = useDispatch();
  const ref = useRef();
  const saved = useSelector(getUser);

  const body = {
    place_id: saved?.savedAddress?.place_id,
    custom_address:
      saved?.savedAddress?.custom_address +
      ", " +
      city +
      ", " +
      saved?.savedAddress?.state +
      " " +
      zipCode,
    address_type: saved?.savedAddress?.address_type,
    district: saved?.savedAddress?.district,
    country: saved?.savedAddress?.country,
    formatted_address: saved?.savedAddress?.formatted_address,
    longitude: saved?.savedAddress?.longitude,
    latitude: saved?.savedAddress?.latitude,
    state: saved?.savedAddress?.state,
    // address_line_1: add1,
    // address_line_2: add2,
    postal_code: zipCode,
  };
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

  const submit = () => {
    if (mobileNumber && mobileNumber.length < 10) {
      Toast.show({
        position: "bottom",
        type: "error_toast",
        text2: strings.validation.phoneLength,
        visibilityTime: 2000,
      });
    } else if (mobileNumber && digits.test(mobileNumber) === false) {
      Toast.show({
        position: "bottom",
        type: "error_toast",
        text2: strings.validation.validPhone,
        visibilityTime: 2000,
      });
    } else if (!mobileNumber) {
      Toast.show({
        position: "bottom",
        type: "error_toast",
        visibilityTime: 1500,
        text2: strings.validation.enterPhone,
      });
    } else if (!firstName) {
      Toast.show({
        position: "bottom",
        type: "error_toast",
        visibilityTime: 1500,
        text2: strings.validation.firstName,
      });
    } else if (!lastName) {
      Toast.show({
        position: "bottom",
        type: "error_toast",
        visibilityTime: 1500,
        text2: strings.validation.lastNameerror,
      });
    } else if (!add1) {
      Toast.show({
        position: "bottom",
        type: "error_toast",
        visibilityTime: 1500,
        text2: strings.validation.enterStret,
      });
    } else if (!add2) {
      Toast.show({
        position: "bottom",
        type: "error_toast",
        visibilityTime: 1500,
        text2: strings.validation.enterapartment,
      });
    } else if (!zipCode) {
      Toast.show({
        position: "bottom",
        type: "error_toast",
        visibilityTime: 1500,
        text2: strings.validation.enterZip,
      });
    } else if (!city) {
      Toast.show({
        position: "bottom",
        type: "error_toast",
        visibilityTime: 1500,
        text2: strings.validation.selectCity,
      });
    } else if (props?.route?.params?.update) {
      dispatch(updateUserLocation(props?.route?.params?.id, body));
    } else {
      dispatch(addUserLocation(body));
    }
  };
  return (
    <ScreenWrapper style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={styles.header}>
        <View style={styles.headerInnerView}>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
            onPress={() => goBack()}
          >
            <Image
              resizeMode="contain"
              source={backArrow}
              style={{ height: 30, width: 30 }}
            />
            <Text style={styles.headerText}>
              {strings.AddShippingAddress.addShippingAddress}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <Spacer space={SH(10)} />
        {/* <TextField style={styles.countryInput} /> */}

        {/* <TextField
          style={styles.countryInput}
          value={countryName}
          onChangeText={(newText) => setCountryName(newText)}
        />
        <Spacer space={SH(15)} /> */}

        <View style={[styles.textInputView]}>
          <View style={styles.countryInnerView}>
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
              // value={phoneNumber}
              // onChangeText={onChangePhoneNumber}
              style={styles.textInputContainer}
              placeholder={strings.auth.mobilePlaceholder}
              placeholderTextColor={"#A7A7A7"}
              maxLength={10}
              onChangeText={(newText) => setMobileNumber(newText)}
            />
          </View>
        </View>

        <Spacer space={SH(20)} />

        <View style={styles.borderLine}></View>

        <Spacer space={SH(15)} />

        <View style={styles.nameView}>
          <View style={{ width: "48%" }}>
            <Text style={styles.headingText}>
              {strings.AddShippingAddress.firstName}
            </Text>
            <TextField
              style={styles.nameInput}
              placeholder={strings.AddShippingAddress.enterFirstName}
              onChangeText={(newText) => setFirstName(newText)}
            />
          </View>

          <View style={{ width: "48%" }}>
            <Text style={styles.headingText}>
              {strings.AddShippingAddress.lastname}
            </Text>
            <TextField
              style={styles.nameInput}
              placeholder={strings.AddShippingAddress.enterLastName}
              onChangeText={(newText) => setLastName(newText)}
            />
          </View>
        </View>

        <Spacer space={SH(15)} />

        <Text style={styles.headingText}>
          {strings.AddShippingAddress.address1}
        </Text>
        <TextField
          onChangeText={(newText) => setAdd1(newText)}
          style={styles.countryInput}
          placeholder={strings.AddShippingAddress.streets}
          placeholderTextColor={COLORS.secondary}
        />

        <Spacer space={SH(15)} />

        <Text style={styles.headingText}>
          {" "}
          {strings.AddShippingAddress.address2}
        </Text>
        <TextField
          style={styles.countryInput}
          placeholder={strings.AddShippingAddress.apartment}
          placeholderTextColor={COLORS.secondary}
          onChangeText={(newText) => setAdd2(newText)}
        />
        <Spacer space={SH(15)} />

        <View style={styles.nameView}>
          <View style={{ width: "48%" }}>
            <Text style={styles.headingText}>
              {strings.AddShippingAddress.zipcode}
            </Text>
            <TextField
              style={styles.nameInput}
              keyboardType="numeric"
              placeholder={"Enter your zip code"}
              onChangeText={(newText) => setZipCode(newText)}
            />
          </View>

          <View style={{ width: "48%" }}>
            <Text style={styles.headingText}>
              {" "}
              {strings.AddShippingAddress.city}
            </Text>
            <TextField
              style={styles.nameInput}
              placeholder={"Enter your city"}
              onChangeText={(newText) => setCity(newText)}
            />
          </View>
        </View>
        <Spacer space={SH(30)} />
      </ScrollView>
      <View
        style={{
          flex: 0.2,
          justifyContent: "flex-end",
          marginHorizontal: SW(20),
        }}
      >
        <Button title={strings.AddShippingAddress.save} onPress={submit} />
      </View>
      <Spacer space={SH(10)} />
    </ScreenWrapper>
  );
}
