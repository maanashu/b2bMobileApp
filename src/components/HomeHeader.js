import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { styles } from "@/screens/Home/Home.styles";
import { bagGrey, coinStack, dropdownIcon, location } from "@/assets";

export function HomeHeader({}) {
  return (
    <View style={styles.headerStyle}>
      <View style={styles.locationView}>
        <Image
          source={location}
          style={styles.locationIcon}
          resizeMode="contain"
        />
        <TouchableOpacity style={styles.rowView}>
          <Text style={styles.locationText}>Miami,Florida,USA</Text>
          <Image
            source={dropdownIcon}
            style={styles.downIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image source={bagGrey} style={styles.bagIcon} resizeMode="contain" />

        <View style={styles.coinView}>
          <Text style={styles.balanceText}>0</Text>
          <Image
            source={coinStack}
            style={styles.coinIcon}
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
}
