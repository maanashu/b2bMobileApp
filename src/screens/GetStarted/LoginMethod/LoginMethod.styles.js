import { StyleSheet, Dimensions } from "react-native";
import { SH, SW, COLORS, SF } from "@/theme";
import { Fonts } from "@/assets";
import { moderateScale } from "react-native-size-matters";
const windowWidth = Dimensions.get("window").width;
export const styles = StyleSheet.create({
  alignCenter: {
    alignSelf: "center",
  },
  logo: {
    width: SW(278),
    height: SH(104),
    resizeMode: "contain",
  },
  facelogo: {
    width: SW(250),
    height: SH(250),
    resizeMode: "contain",
  },
  touchIdView: {
    height: SW(280),
    width: SW(280),
    borderRadius: SW(140),
    borderWidth: 2,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderColor: COLORS.primary,
    backgroundColor: "rgba(229,240,255,0.3)",
  },
  touchIdStyle: {
    height: SW(120),
    width: SW(120),
    resizeMode: "contain",
    tintColor: COLORS.primary,
  },
});
