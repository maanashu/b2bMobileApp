import React, { useEffect, useRef } from "react";
import { View, Text, Modal, StyleSheet, Animated, Image } from "react-native";
import {
  Fonts,
  error,
  greenCheck,
  simpleCheck,
  simpleClose,
  success,
} from "@/assets"; // Replace with the path to your Fonts
import { COLORS, SF, SH, SW, ShadowStyles } from "@/theme"; // Replace with the path to your theme
import Icon from "react-native-vector-icons/FontAwesome"; // Replace with your preferred icon library

const CustomToast = ({
  visible,
  message,
  type,
  autoHideDuration = 2000, // Default auto-hide duration: 2000 ms
  onHide,
}) => {
  const animationDuration = 400;
  const slideAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      Animated.timing(slideAnim, {
        toValue: 1,
        duration: animationDuration,
        useNativeDriver: true,
      }).start();
      setTimeout(() => {
        onHide();
      }, autoHideDuration);
    } else {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: animationDuration,
        useNativeDriver: true,
      }).start();
    }
  }, [visible, onHide, autoHideDuration, slideAnim]);

  if (!visible) return null;

  return (
    <Modal
      transparent
      visible={visible}
      animationType="slide"
      onRequestClose={() => {}}
    >
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.toastView,
            {
              backgroundColor: COLORS.white,
              transform: [
                {
                  translateY: slideAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [SW(120), 0], // Adjust this value to set the sliding distance
                  }),
                },
              ],
            },
          ]}
        >
          <View
            style={{
              backgroundColor: type === "success" ? "green" : "#F44336",
              width: SW(5),
              height: "100%",
              borderTopLeftRadius: 5,
              borderBottomLeftRadius: 5,
            }}
          ></View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ width: "90%", marginLeft: SW(5) }}>
              <Text
                style={[
                  styles.message,
                  { color: type === "success" ? "green" : "#F44336" },
                ]}
              >
                {message}
              </Text>
            </View>
            {type === "success" ? (
              <View style={styles.successIconView}>
                <Image
                  source={greenCheck} // Replace with the path to your success image
                  style={styles.successIcon}
                  resizeMode="contain"
                />
              </View>
            ) : (
              <View style={styles.errorIconView}>
                <Image
                  source={simpleClose} // Replace with the path to your error image
                  style={styles.errorIcon}
                  resizeMode="contain"
                />
              </View>
            )}
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: SW(25),
  },
  toastView: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    width: "95%",
    ...ShadowStyles.shadow,
    height: SH(60),
  },
  message: {
    marginLeft: 8,
    fontSize: SF(14),
    marginRight: SW(5),
    fontFamily: Fonts.SemiBold,
  },
  successIcon: {
    tintColor: COLORS.white,
    height: SH(20),
    width: SH(20),
  },
  errorIcon: {
    tintColor: COLORS.white,
    height: SH(20),
    width: SH(20),
  },
  errorIconView: {
    backgroundColor: "#F44336",
    height: SH(22),
    width: SH(22),
    borderRadius: SH(11),
    justifyContent: "center",
    alignItems: "center",
  },
  successIconView: {
    backgroundColor: "green",
    height: SH(22),
    width: SH(22),
    borderRadius: SH(11),
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CustomToast;
