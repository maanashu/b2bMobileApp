import { Fonts } from "@/assets";
import { ShadowStyles } from "@/theme";
import { COLORS } from "@/theme/Colors";
import { SF, SH, SW } from "@/theme/ScalerDimensions";
import { StyleSheet, Dimensions } from "react-native";
import { moderateScale, s } from "react-native-size-matters";
const windowWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 40,
  },
  headerText: {
    fontFamily: Fonts.SemiBold,
    color: COLORS.black,
    fontSize: s(14),
  },
  header: {
    height: SH(50),
    backgroundColor: COLORS.white,
  ...ShadowStyles.shadow2,
    paddingHorizontal: SW(20),
    justifyContent: "center",
  },
  headerInnerView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignItems: "center",
  },
  mainView: {},
  scrollView: {
    backgroundColor: COLORS.white,
    flex: 1,
    paddingHorizontal: SW(20),
    paddingVertical: SH(20),
  },
  countryInput: {
    borderBottomWidth: 0,
    backgroundColor: COLORS.inputBorder,
    height: SH(50),
    borderRadius: SW(5),
  },
  borderLine: {
    borderBottomWidth: 1,
    borderColor: COLORS.inputBorder,
  },
  nameView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nameInput: {
    borderBottomWidth: 0,
    backgroundColor: COLORS.inputBorder,
    height: SH(50),
    borderRadius: SW(5),
  },
  headingText: {
    color: COLORS.darkGrey2,
    fontFamily: Fonts.Medium,
    fontSize: SF(15),
  },
  textInputView: {
    paddingHorizontal: SW(12),
    borderWidth: 0,
    alignItems: "center",
    flexDirection: "row",
    height: SH(50),
    backgroundColor: COLORS.placeHolder,
    borderRadius: 5,
    marginTop: 16,
    width: windowWidth * 0.92,
    alignSelf: "center",
    alignItems: "center",
  },
  codeText: {
    color: COLORS.black,
    fontSize: SF(14),
    fontFamily: Fonts.Regular,
  },
  textInputContainer: {
    backgroundColor: COLORS.inputBorder,
    paddingHorizontal: SW(10),
    color: COLORS.black,
    fontSize: SF(16),
    fontFamily: Fonts.Italic,
    width: "100%",
    marginLeft: SW(10),
  },
});
