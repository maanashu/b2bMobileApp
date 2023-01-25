import { Fonts } from "@/assets";
import { StyleSheet } from "react-native";

export const TextStyles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "700",
  },
  text: {
    fontSize: 16,
    fontWeight: "300",
    fontFamily: Fonts.Regular,
  },
  label: {
    fontSize: 16,
    fontFamily: Fonts.SemiBold,
  },
  error: {
    fontSize: 14,
    fontWeight: "400",
  },
});
