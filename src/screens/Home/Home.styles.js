import { Fonts } from "@/assets";
import { COLORS } from "@/theme/Colors";
import { SF, SH, SW } from "@/theme/ScalerDimensions";
import { StyleSheet } from "react-native";
import { ms, vs } from "react-native-size-matters";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tabButtonView: {
    borderRadius: 20,
    height: vs(25),
    width: ms(75),
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
});
