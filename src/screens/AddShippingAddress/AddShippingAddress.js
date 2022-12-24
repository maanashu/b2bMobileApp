import {
  FlatList,
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
import { SF, SH, SW } from "@/theme/ScalerDimensions";
import { COLORS } from "@/theme/Colors";
import { useState } from "react";
import { goBack } from "@/navigation/NavigationRef";
import Icon from "react-native-vector-icons/FontAwesome5";
import CountryPicker from "react-native-country-picker-modal";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import {
  backArrow,
  coins,
  deliveryTruck,
  addSquareBox,
  addSquare,
  jobrRound,
  walletIcon,
  orderDetails,
  Fonts,
  forwardArrowWhite,
} from "@/assets";
import { strings } from "@/localization";
export function AddShippingAddress() {
  const [flag, setFlag] = useState("US");
  const [countryCode, setCountryCode] = useState("+1");

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
            <Text>{strings.AddShippingAddress.addShippingAddress}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.scrollView}>
        <Spacer space={SH(10)} />
        {/* <TextField style={styles.countryInput} /> */}

        <TextField style={styles.countryInput} />
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
          />
        </View>

        <Spacer space={SH(20)} />

        <View style={styles.borderLine}></View>

        <Spacer space={SH(15)} />

        <View style={styles.nameView}>
          <View style={{ width: "48%" }}>
            <Text style={styles.headingText}>First name</Text>
            <TextField
              style={styles.nameInput}
              placeholder={"Enter your first name"}
            />
          </View>

          <View style={{ width: "48%" }}>
            <Text style={styles.headingText}>Last name</Text>
            <TextField
              style={styles.nameInput}
              placeholder={"Enter your last name"}
            />
          </View>
        </View>

        <Spacer space={SH(15)} />

        <Text style={styles.headingText}>Address line 1</Text>
        <TextField
          style={styles.countryInput}
          placeholder={"Streets,building"}
          placeholderTextColor={COLORS.secondary}
        />

        <Spacer space={SH(15)} />

        <Text style={styles.headingText}>Address line 2</Text>
        <TextField
          style={styles.countryInput}
          placeholder={"Apartment optional"}
          placeholderTextColor={COLORS.secondary}
        />
        <Spacer space={SH(15)} />

        <View style={styles.nameView}>
          <View style={{ width: "48%" }}>
            <Text style={styles.headingText}>Zip code</Text>
            <TextField
              style={styles.nameInput}
              placeholder={"Enter your zip code"}
            />
          </View>

          <View style={{ width: "48%" }}>
            <Text style={styles.headingText}>City</Text>
            <TextField
              style={styles.nameInput}
              placeholder={"Enter your city"}
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
        <Button title={strings.AddShippingAddress.save} />
      </View>
      <Spacer space={SH(10)} />
    </View>
  );
}
