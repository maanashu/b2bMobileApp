import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { styles } from "../StartOrder.styles";

export function CountSix({ OnPressIncrease, OnPressDecrease, text }) {
  return (
    <View style={styles.innerCounterView}>
      <Text style={styles.shoeNumber}>6</Text>
      <View style={styles.counterButtonView}>
        <TouchableOpacity
          onPress={OnPressDecrease}
          style={styles.decrementView}
        >
          <Text style={styles.decrementButton}>-</Text>
        </TouchableOpacity>
        <Text style={styles.selectedNumber}>{text}</Text>
        <TouchableOpacity
          onPress={OnPressIncrease}
          style={styles.incrementView}
        >
          <Text style={styles.incrementButton}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export function CountSeven({ OnPressIncrease, OnPressDecrease, text }) {
  return (
    <View style={styles.innerCounterView}>
      <Text style={styles.shoeNumber}>7</Text>
      <View style={styles.counterButtonView}>
        <TouchableOpacity
          onPress={OnPressDecrease}
          style={styles.decrementView}
        >
          <Text style={styles.decrementButton}>-</Text>
        </TouchableOpacity>
        <Text style={styles.selectedNumber}>{text}</Text>
        <TouchableOpacity
          onPress={OnPressIncrease}
          style={styles.incrementView}
        >
          <Text style={styles.incrementButton}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export function CountSevenFive({ OnPressIncrease, OnPressDecrease, text }) {
  return (
    <View style={styles.innerCounterView}>
      <Text style={styles.shoeNumber}>7.5</Text>
      <View style={styles.counterButtonView}>
        <TouchableOpacity
          onPress={OnPressDecrease}
          style={styles.decrementView}
        >
          <Text style={styles.decrementButton}>-</Text>
        </TouchableOpacity>
        <Text style={styles.selectedNumber}>{text}</Text>
        <TouchableOpacity
          onPress={OnPressIncrease}
          style={styles.incrementView}
        >
          <Text style={styles.incrementButton}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export function CountEight({ OnPressIncrease, OnPressDecrease, text }) {
  return (
    <View style={styles.innerCounterView}>
      <Text style={styles.shoeNumber}>8</Text>
      <View style={styles.counterButtonView}>
        <TouchableOpacity
          onPress={OnPressDecrease}
          style={styles.decrementView}
        >
          <Text style={styles.decrementButton}>-</Text>
        </TouchableOpacity>
        <Text style={styles.selectedNumber}>{text}</Text>
        <TouchableOpacity
          onPress={OnPressIncrease}
          style={styles.incrementView}
        >
          <Text style={styles.incrementButton}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export function CountEightFive({ OnPressIncrease, OnPressDecrease, text }) {
  return (
    <View style={styles.innerCounterView}>
      <Text style={styles.shoeNumber}>8.5</Text>
      <View style={styles.counterButtonView}>
        <TouchableOpacity
          onPress={OnPressDecrease}
          style={styles.decrementView}
        >
          <Text style={styles.decrementButton}>-</Text>
        </TouchableOpacity>
        <Text style={styles.selectedNumber}>{text}</Text>
        <TouchableOpacity
          onPress={OnPressIncrease}
          style={styles.incrementView}
        >
          <Text style={styles.incrementButton}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export function CountNine({ OnPressIncrease, OnPressDecrease, text }) {
  return (
    <View style={styles.innerCounterView}>
      <Text style={styles.shoeNumber}>9</Text>
      <View style={styles.counterButtonView}>
        <TouchableOpacity
          onPress={OnPressDecrease}
          style={styles.decrementView}
        >
          <Text style={styles.decrementButton}>-</Text>
        </TouchableOpacity>
        <Text style={styles.selectedNumber}>{text}</Text>
        <TouchableOpacity
          onPress={OnPressIncrease}
          style={styles.incrementView}
        >
          <Text style={styles.incrementButton}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export function CountNineFive({ OnPressIncrease, OnPressDecrease, text }) {
  return (
    <View style={styles.innerCounterView}>
      <Text style={styles.shoeNumber}>9.5</Text>
      <View style={styles.counterButtonView}>
        <TouchableOpacity
          onPress={OnPressDecrease}
          style={styles.decrementView}
        >
          <Text style={styles.decrementButton}>-</Text>
        </TouchableOpacity>
        <Text style={styles.selectedNumber}>{text}</Text>
        <TouchableOpacity
          onPress={OnPressIncrease}
          style={styles.incrementView}
        >
          <Text style={styles.incrementButton}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export function CountTen({ OnPressIncrease, OnPressDecrease, text }) {
  return (
    <View style={styles.innerCounterView}>
      <Text style={styles.shoeNumber}>10</Text>
      <View style={styles.counterButtonView}>
        <TouchableOpacity
          onPress={OnPressDecrease}
          style={styles.decrementView}
        >
          <Text style={styles.decrementButton}>-</Text>
        </TouchableOpacity>
        <Text style={styles.selectedNumber}>{text}</Text>
        <TouchableOpacity
          onPress={OnPressIncrease}
          style={styles.incrementView}
        >
          <Text style={styles.incrementButton}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
