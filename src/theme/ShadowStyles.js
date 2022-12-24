import { StyleSheet } from "react-native";

/*
 * generated with https://ethercreative.github.io/react-native-shadow-generator/
 * to get the same shadow on both platforms
 */
export const ShadowStyles = StyleSheet.create({
  shadow: {
    elevation: 8,
    shadowColor: Platform.OS == "ios" ? "#ababab" : "#000000",
    shadowRadius: 1.41,
    shadowOpacity: 0.4,
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  shadow1: {
    elevation: 8,
    shadowColor: Platform.OS == "ios" ? "#ababab" : "#ababab",
    shadowRadius: 1.41,
    shadowOpacity: 0.4,
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  shadow2: {
    elevation: 3,
    shadowColor: "#ababab",
    shadowRadius: 1.41,
    shadowOpacity: 0.4,
    shadowOffset: {
      width: 0,
      height: 10,
    },
  },
  shadow4: {
    elevation: 8,
    shadowColor: "#ababab",
    shadowRadius: 1.41,
    shadowOpacity: 0.4,
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
});
