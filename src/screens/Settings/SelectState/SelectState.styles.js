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
    paddingHorizontal: ms(10),
    flex: 1,
  },
  backgroundView: {
    backgroundColor: COLORS.placeholder,
    paddingHorizontal: ms(10),
    paddingVertical: vs(10),
    borderRadius: moderateScale(10),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputText: {
    paddingVertical: vs(5),
  },
  innerView: {
    flexDirection: "row",
    alignItems: "center",
  },
  flagStyle: {
    height: moderateScale(25),
    width: moderateScale(25),
    marginRight: ms(10),
  },
  forwardIcon: {
    height: vs(15),
    width: ms(20),
  },
  rowView: {
    flexDirection: "row",
    alignItems: "center",
  },
  backgroundViewHalf: {
    backgroundColor: COLORS.placeholder,
    paddingHorizontal: ms(10),
    paddingVertical: vs(10),
    borderRadius: moderateScale(10),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "40%",
  },
  nameView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nameInput: {
    backgroundColor: COLORS.inputBorder,
    height: SH(50),
    borderRadius: SW(5),
    alignItems: "center",
    justifyContent: "center",
  },
  headingText: {
    color: COLORS.darkGrey2,
    fontFamily: Fonts.Medium,
    fontSize: SF(15),
  },
});
