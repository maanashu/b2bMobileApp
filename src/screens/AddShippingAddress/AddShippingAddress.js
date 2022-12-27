import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import React from "react";
import { styles } from "./AddShippingAddress.styles";
import { Button, Spacer, TextField } from "@/components";
import { SH, SW } from "@/theme/ScalerDimensions";
import { COLORS } from "@/theme/Colors";
import { useState } from "react";
import { goBack, navigate } from "@/navigation/NavigationRef";
import Icon from "react-native-vector-icons/FontAwesome5";
import CountryPicker from "react-native-country-picker-modal";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { backArrow } from "@/assets";
import { strings } from "@/localization";
import { NAVIGATION } from "@/constants";
export function AddShippingAddress({ route }) {
  const [flag, setFlag] = useState("US");
  const [countryCode, setCountryCode] = useState("+1");
  const [countryName, setCountryName] = useState("United States of America");
  const [mobileNumber, setMobileNumber] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [streetAddressStreet, setStreetAddressStreet] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [city, setCity] = useState("");

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
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

      <ScrollView style={styles.scrollView}>
        <Spacer space={SH(10)} />
        {/* <TextField style={styles.countryInput} /> */}

        <TextField
          style={styles.countryInput}
          value={countryName}
          onChangeText={(newText) => setCountryName(newText)}
        />
        <Spacer space={SH(15)} />

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
            // value={phoneNumber}
            // onChangeText={onChangePhoneNumber}
            style={styles.textInputContainer}
            placeholder={strings.auth.mobilePlaceholder}
            placeholderTextColor={"#A7A7A7"}
            maxLength={15}
            onChangeText={(newText) => setMobileNumber(newText)}
          />
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
          onChangeText={(newText) => setStreetAddress(newText)}
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
          onChangeText={(newText) => setStreetAddressStreet(newText)}
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
      </ScrollView>
      <Spacer space={SH(10)} />
      <View
        style={{
          flex: 0.2,
          justifyContent: "flex-end",
          marginHorizontal: SW(20),
        }}
      >
        <Button
          title={strings.AddShippingAddress.save}
          onPress={() =>
            navigate(NAVIGATION.reviewAndPayment, { countryname: countryName })
          }
        />
      </View>
      <Spacer space={SH(10)} />
    </View>
  );
}
