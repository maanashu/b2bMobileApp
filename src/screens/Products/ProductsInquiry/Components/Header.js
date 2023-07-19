import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { styles } from "../ProductInquiry.styles";
import { goBack } from "@/navigation/NavigationRef";
import { backArrow, bellGrey, bagGrey } from "@/assets";

export function Header({ backRequired, bell, bag, onPress }) {
  return (
    <View style={styles.header}>
      <View style={styles.headerInnerView}>
        {backRequired && (
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
            onPress={() => goBack()}
          >
            <Image
              resizeMode="contain"
              source={backArrow}
              style={{ height: 30, width: 30 }}
            />
          </TouchableOpacity>
        )}
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity>
          <Image resizeMode="contain" source={bell} style={styles.crossIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image resizeMode="contain" source={bag} style={styles.crossIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
