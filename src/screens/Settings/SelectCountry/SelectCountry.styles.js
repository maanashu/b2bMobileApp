import { Fonts } from "@/assets";
import { ShadowStyles } from "@/theme";
import { COLORS } from "@/theme/Colors";
import { SF, SH, SW } from "@/theme/ScalerDimensions";
import { StyleSheet, Dimensions } from "react-native";
import {
  moderateScale,
  ms,
  s,
  verticalScale,
  vs,
} from "react-native-size-matters";
const windowWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  mainView: {
    paddingHorizontal: ms(20),
    flex: 1,
  },
  backgroundView: {
    paddingHorizontal: ms(10),
    paddingVertical: vs(5),
    backgroundColor: COLORS.placeholder,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: ms(10),
  },
  textStyle: {
    paddingHorizontal: ms(10),
  },
  flagIcon: {
    height: ms(30),
    width: ms(30),
  },
});
