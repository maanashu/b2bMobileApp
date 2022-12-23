import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { styles } from "./ReviewAndPayment.styles";
import { Spacer } from "@/components";
import { SH, SW } from "@/theme/ScalerDimensions";
import { COLORS } from "@/theme/Colors";
import { useState } from "react";
import { goBack } from "@/navigation/NavigationRef";
import {
  backArrow,
  coins,
  deliveryTruck,
  addSquareBox,
  addSquare,
  jobrRound,
  walletIcon,
} from "@/assets";
import { strings } from "@/localization";
export function ReviewAndPayment() {
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
            <Text>{strings.delivery.reviewAndPayment}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              resizeMode="contain"
              source={coins}
              style={styles.crossIcon}
            />
          </TouchableOpacity>
        </View>
      </View>

      <Spacer space={SH(10)} />
      <ScrollView style={styles.mainContainer}>
        <View style={styles.deliveryView}>
          <View style={styles.deliveryViewDirection}>
            <View>
              <Image
                resizeMode="contain"
                style={styles.truckIcon}
                source={deliveryTruck}
              />
            </View>
            <View style={styles.deliveryViewText}>
              <Text style={styles.deliveryTime}>Delivery time</Text>
              <Text style={styles.deliveryName}>Express shipping</Text>
              <Text style={styles.estimatedDelivery}>
                Estimated Delivery{" "}
                <Text style={styles.deliveryDays}> 3-5 Days</Text>
              </Text>
            </View>
          </View>
        </View>
        <Spacer space={SH(15)} />
        <View style={styles.addressView}>
          <View>
            <Image
              resizeMode="contain"
              source={addSquareBox}
              style={styles.addIcon}
            />
          </View>
          <View>
            <Text style={styles.addAddressText}>Add shipping address</Text>
          </View>
        </View>
        <Spacer space={SH(15)} />
        <View style={styles.jobrWalletView}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 10,
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                resizeMode="contain"
                source={walletIcon}
                style={{ height: 25, width: 25, marginRight: SW(2) }}
              />
              <Text>Balance</Text>
            </View>

            <Image
              resizeMode="contain"
              source={addSquare}
              style={{ height: 25, width: 25, marginRight: SW(2) }}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 10,
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                resizeMode="contain"
                source={jobrRound}
                style={{ height: 25, width: 25, marginRight: SW(5) }}
              />
              <Text>JBR</Text>
            </View>

            <Image
              resizeMode="contain"
              source={addSquare}
              style={{ height: 25, width: 25, marginRight: SW(2) }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
