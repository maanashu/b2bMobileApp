import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../ProductInquiry.styles";
import { goBack } from "@/navigation/NavigationRef";
import { backArrow, bellGrey, bagGrey, Fonts } from "@/assets";
import { s } from "react-native-size-matters";
import { COLORS } from "@/theme";

export function Header({ backRequired, title, bell, bag, onPress }) {
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
            <Text
              style={{
                fontSize: s(14),
                fontFamily: Fonts.SemiBold,
                color: COLORS.darkGrey,
                width: "70%",
              }}
            >
              {title}
            </Text>
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
