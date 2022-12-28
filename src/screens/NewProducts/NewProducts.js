import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { styles } from "./NewProducts.style";
import { Button, Spacer } from "@/components";
import { SH } from "@/theme/ScalerDimensions";
import { COLORS } from "@/theme/Colors";
import { useState } from "react";
import { goBack, navigate } from "@/navigation/NavigationRef";
import { backArrow, jobr, dhl, ups, coins, fedEx } from "@/assets";
import { strings } from "@/localization";
import { NAVIGATION } from "@/constants";
export function NewProducts() {
  const [selectedId, setSelectedId] = useState("");

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
              {strings.newProducts.newProducts}
            </Text>
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

      <View style={styles.mainContainer}>
        <Text>gidhidsu</Text>
      </View>
    </View>
  );
}
