import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { styles } from "../NotificationSetting.styles";

export function Switch({ onPress, source, title }) {
  return (
    <View style={styles.rowView}>
      <Text style={styles.textStyle}>{title}</Text>
      <TouchableOpacity onPress={onPress}>
        <Image source={source} style={styles.switchIcon} />
      </TouchableOpacity>
    </View>
  );
}
