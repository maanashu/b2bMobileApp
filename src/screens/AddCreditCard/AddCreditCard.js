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
import { styles } from "./AddCreditCard.styles";
import { Button, Spacer, TextField } from "@/components";
import { SF, SH, SW } from "@/theme/ScalerDimensions";
import { COLORS } from "@/theme/Colors";
import { useState } from "react";
import { goBack, navigate } from "@/navigation/NavigationRef";
import Icon from "react-native-vector-icons/FontAwesome5";
import CountryPicker from "react-native-country-picker-modal";
import {
  moderateScale,
  ms,
  scale,
  verticalScale,
} from "react-native-size-matters";
import {
  backArrow,
  coins,
  selectedCheckBox,
  checkBox,
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
import { NAVIGATION } from "@/constants";
export function AddCreditCard() {
  const [agree, setagree] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [holderName, setHolderName] = useState("");

  const CheckBox = () => {
    setagree(!agree);
  };

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
              keyboardType="numeric"
              placeholder={strings.addCreditCard.monthYear}
              style={styles.smallInput}
            />
          </View>

          <View style={{ width: "48%" }}>
            <Text style={styles.headingsText}>{strings.addCreditCard.cvv}</Text>
            <TextField
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
            <TouchableOpacity style={styles.outerDot}>
              <View style={styles.innerDot}></View>
            </TouchableOpacity>
            <Text style={styles.shippingText}>{strings.addCreditCard.yes}</Text>
          </View>

          <View style={styles.selectView}>
            <TouchableOpacity style={styles.outerDot}>
              <View style={styles.innerDot}></View>
            </TouchableOpacity>
            <Text style={styles.shippingText}>{strings.addCreditCard.no}</Text>
          </View>
        </View>

        <Spacer space={SH(20)} />

        <View style={styles.saveCardView}>
          <TouchableOpacity onPress={CheckBox}>
            <Image
              style={{
                height: ms(20),
                width: ms(20),
                marginRight: ms(10),
              }}
              source={agree ? selectedCheckBox : checkBox}
            />
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
    </View>
  );
}
