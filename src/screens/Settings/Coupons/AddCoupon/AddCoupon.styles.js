import { Fonts } from "@/assets";
import { ShadowStyles } from "@/theme";
import { COLORS } from "@/theme/Colors";
import { SF, SH, SW } from "@/theme/ScalerDimensions";
import { StyleSheet } from "react-native";
import { ms, s } from "react-native-size-matters";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 40,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: SW(20),
    paddingVertical: SH(5),
  },
  inputCoupon: {
    borderBottomWidth: 0,
    backgroundColor: COLORS.placeholder,
    borderRadius: ms(5),
    paddingVertical: SH(10),
    paddingHorizontal: SW(15),
  },
  Button: {
    borderWidth: 1,
    backgroundColor: COLORS.white,
    borderColor: COLORS.primary,
    height: SH(45),
  },
  buttonTextStyle: {
    color: COLORS.primary,
  },
  tabButtonView: {
    borderRadius: 20,
    width: ms(55),
  },
});
