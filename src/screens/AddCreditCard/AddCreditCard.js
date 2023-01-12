import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { styles } from "./AddCreditCard.styles";
import { Button, ScreenWrapper, Spacer, TextField } from "@/components";
import { SH } from "@/theme/ScalerDimensions";
import { COLORS } from "@/theme/Colors";
import { useState } from "react";
import { goBack } from "@/navigation/NavigationRef";
import { ms } from "react-native-size-matters";
import { backArrow, selectedCheckBox, checkBox } from "@/assets";
import { strings } from "@/localization";
export function AddCreditCard() {
  const [agree, setagree] = useState(false);
  const [sameAddress, setSameAddress] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [holderName, setHolderName] = useState("");

  const CheckBox = () => {
    setagree(!agree);
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
              {strings.addCreditCard.addCreditCard}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.mainView}>
        <Text style={styles.headingsText}>
          {strings.addCreditCard.cardNumber}
        </Text>
        <TextField
          // value={cardNumber}
          keyboardType="numeric"
          placeholder={strings.addCreditCard.cardNumber}
          style={styles.cardInput}
        />

        <Spacer space={SH(10)} />

        <View style={styles.rowView}>
          <View style={{ width: "48%" }}>
            <Text style={styles.headingsText}>
              {strings.addCreditCard.expiry}
            </Text>
            <TextField
              value={expiryDate}
              keyboardType="numeric"
              placeholder={strings.addCreditCard.monthYear}
              style={styles.smallInput}
              returnKeyType="done"
              maxLength={5}
              onChangeText={(text) => {
                setExpiryDate(
                  text.length === 2 && !text.includes("/")
                    ? `${text.substring(0, 2)}/${text.substring(2)}`
                    : text
                );
              }}
            />
          </View>

          <View style={{ width: "48%" }}>
            <Text style={styles.headingsText}>{strings.addCreditCard.cvv}</Text>
            <TextField
              maxLength={3}
              keyboardType="numeric"
              placeholder={strings.addCreditCard.cvvNo}
              style={styles.smallInput}
            />
          </View>
        </View>

        <Spacer space={SH(10)} />

        <Text style={styles.headingsText}>
          {strings.addCreditCard.cardHolderName}
        </Text>
        <TextField
          placeholder={strings.addCreditCard.cardHolderName}
          style={styles.cardInput}
        />

        <Spacer space={SH(15)} />

        <Text style={styles.shippingText}>
          {strings.addCreditCard.sameShippingAddress}{" "}
        </Text>

        <Spacer space={SH(15)} />
        <View style={styles.yesNoView}>
          <View style={styles.selectView}>
            <TouchableOpacity
              onPress={() => setSameAddress("Yes")}
              style={{
                ...styles.outerDot,
                borderColor: sameAddress == "Yes" ? "#275AFF" : "grey",
              }}
            >
              <View
                style={{
                  ...styles.innerDot,
                  backgroundColor: sameAddress == "Yes" ? "#275AFF" : "white",
                }}
              ></View>
            </TouchableOpacity>
            <Text style={styles.shippingText}>{strings.addCreditCard.yes}</Text>
          </View>

          <View style={styles.selectView}>
            <TouchableOpacity
              onPress={() => setSameAddress("No")}
              style={{
                ...styles.outerDot,
                borderColor: sameAddress == "No" ? "#275AFF" : "grey",
              }}
            >
              <View
                style={{
                  ...styles.innerDot,
                  backgroundColor: sameAddress == "No" ? "#275AFF" : "white",
                }}
              ></View>
            </TouchableOpacity>
            <Text style={styles.shippingText}>{strings.addCreditCard.no}</Text>
          </View>
        </View>

        <Spacer space={SH(20)} />

        <View style={styles.saveCardView}>
          <TouchableOpacity onPress={CheckBox}>
            {agree ? (
              <Image
                source={selectedCheckBox}
                resizeMode="stretch"
                style={styles.selectedCheck}
              />
            ) : (
              <Image
                source={checkBox}
                resizeMode="stretch"
                style={styles.checkBoxStyle}
              />
            )}
          </TouchableOpacity>
          <Text style={styles.shippingText}>
            {strings.addCreditCard.saveCard}
          </Text>
        </View>

        <Spacer space={SH(10)} />

        <View style={{ paddingLeft: ms(30) }}>
          <Text>{strings.addCreditCard.agreement}</Text>
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
          }}
        >
          <Button title={strings.addCreditCard.addCard} />
        </View>
        <Spacer space={SH(10)} />
      </View>
    </ScreenWrapper>
  );
}
