import { Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { styles } from "./NearMe.styles";

export default function Component({ source, count, title, style, onPress }) {
  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={1}
        style={styles.bottomView}
      >
        <View style={styles.innerRowView}>
          <View style={styles.iconView}>
            <Image
              source={source}
              resizeMode="contain"
              style={styles.bottomIcons}
            />
          </View>

          <Text style={[styles.quantityText, style]}>{count}</Text>
        </View>

        <Text style={styles.typeText}>{title}</Text>
      </TouchableOpacity>
    </>
  );
}
