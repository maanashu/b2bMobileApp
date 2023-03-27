import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { styles } from "../StartOrder.styles";
import { Spacer } from "@/components";
import { SH } from "@/theme";

export function Counter({ OnPressIncrease, size, OnPressDecrease, text }) {
  return (
    <>
      <View style={styles.innerCounterView}>
        <View style={{ width: "50%" }}>
          <Text style={styles.shoeNumber}>{size}</Text>
        </View>
        <View style={styles.counterButtonView}>
          <TouchableOpacity
            onPress={OnPressDecrease}
            style={styles.decrementView}
          >
            <Text style={styles.decrementButton}>-</Text>
          </TouchableOpacity>
          <Text style={styles.selectedNumber}>{text || 0}</Text>
          <TouchableOpacity
            onPress={OnPressIncrease}
            style={styles.incrementView}
          >
            <Text style={styles.incrementButton}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Spacer space={SH(20)} />
    </>
  );
}
