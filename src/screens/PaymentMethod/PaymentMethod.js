import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { styles } from "./PaymentMethod.styles.js";
import { Button, Spacer } from "@/components";
import { SH } from "@/theme/ScalerDimensions";
import { useState } from "react";
import { goBack, navigate } from "@/navigation/NavigationRef";
import { vs } from "react-native-size-matters";
import {
  backArrow,
  coinStack,
  applePay,
  creditCard,
  debitCard,
  bank,
  forward,
} from "@/assets";
import { strings } from "@/localization";
import { NAVIGATION } from "@/constants";
export function PaymentMethod() {
  const [flag, setFlag] = useState("US");
  const [countryCode, setCountryCode] = useState("+1");

  return (
    <View style={styles.container}>
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
              {strings.paymentMethod.paymentMethod}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <Spacer space={SH(10)} />

      <View style={styles.mainView}>
        <View style={styles.InnerbalanceView}>
          <Text style={styles.balanceText}>
            {strings.paymentMethod.availableBalance}
          </Text>

          <View style={styles.coinView}>
            <Text style={styles.coinText}>0</Text>
            <Image
              resizeMode="contain"
              source={coinStack}
              style={styles.coinStackIcon}
            />
          </View>
        </View>

        <Spacer space={SH(30)} />

        <View style={styles.applePayView}>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.appleIconView}>
              <Image
                resizeMode="contain"
                source={applePay}
                style={styles.appleSmallIcon}
              />
            </View>
            <Text style={styles.paymentMethodText}>
              {strings.paymentMethod.applePay}
            </Text>
          </View>
          <TouchableOpacity>
            <Image
              resizeMode="contain"
              source={forward}
              style={styles.appleIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.bottomLine}></View>

        <Spacer space={SH(10)} />

        <View style={styles.applePayView}>
          <View style={{ flexDirection: "row" }}>
            <Image source={creditCard} style={styles.icons} />
            <Text style={styles.paymentMethodText}>
              {strings.paymentMethod.addCreditCard}
            </Text>
          </View>
          <TouchableOpacity onPress={() => navigate(NAVIGATION.addCreditCard)}>
            <Image
              resizeMode="contain"
              source={forward}
              style={styles.appleIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.bottomLine}></View>

        <Spacer space={SH(10)} />

        <View style={styles.applePayView}>
          <View style={{ flexDirection: "row" }}>
            <Image source={debitCard} style={styles.icons} />
            <Text style={styles.paymentMethodText}>
              {strings.paymentMethod.addDebitCard}
            </Text>
          </View>
          <TouchableOpacity>
            <Image
              resizeMode="contain"
              source={forward}
              style={styles.appleIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.bottomLine}></View>

        <Spacer space={SH(7)} />

        <View style={styles.applePayView}>
          <View style={{ flexDirection: "row" }}>
            <Image resizeMode="contain" source={bank} style={styles.bankIcon} />
            <Text style={styles.paymentMethodText}>
              {strings.paymentMethod.connectBank}
            </Text>
          </View>
          <TouchableOpacity>
            <Image
              resizeMode="contain"
              source={forward}
              style={styles.appleIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.bottomLine}></View>

        <Spacer space={SH(10)} />

        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            paddingVertical: vs(10),
          }}
        >
          <Button title={strings.paymentMethod.paynow} />
        </View>
        <Spacer space={SH(15)} />
      </View>
    </View>
  );
}
