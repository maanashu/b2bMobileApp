import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { styles } from "./PaymentMethod.styles.js";
import {
  Button,
  NameHeader,
  NameHeaderCoins,
  ScreenWrapper,
  Spacer,
} from "@/components";
import { SH, SW } from "@/theme/ScalerDimensions";
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
import { kFormatter } from "@/Utils/GlobalMethods.js";
import { getWallet } from "@/selectors/WalletSelector.js";
import { useSelector } from "react-redux";
export function PaymentMethod() {
  const wallet = useSelector(getWallet);

  return (
    <ScreenWrapper style={styles.container}>
      <NameHeader title={"Payment Methods"} back />

      <Spacer space={SH(10)} />

      <View style={styles.mainView}>
        <View style={styles.InnerbalanceView}>
          <Text style={styles.balanceText}>
            {strings.paymentMethod.availableBalance}
          </Text>

          <View style={styles.coinView}>
            <Text style={styles.coinText}>
              {kFormatter(wallet?.getWalletBalance?.sila_balance) || 0}
            </Text>
            <Image
              resizeMode="contain"
              source={coinStack}
              style={styles.coinStackIcon}
            />
          </View>
        </View>

        <Spacer space={SH(30)} />
        <View style={{ paddingHorizontal: SW(10) }}>
          <Text></Text>
        </View>
        <Spacer space={SH(30)} />

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
    </ScreenWrapper>
  );
}
