import { Fonts } from "@/assets";
import { ShadowStyles } from "@/theme";
import { COLORS } from "@/theme/Colors";
import { SF, SH, SW } from "@/theme/ScalerDimensions";
import { StyleSheet, Dimensions } from "react-native";
import { moderateScale, s, scale } from "react-native-size-matters";
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
    fontSize: SW(12),
    paddingLeft: SW(10),
    color: COLORS.darkGrey,
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
    paddingLeft: SW(10),

    borderBottomWidth: 0,
    backgroundColor: COLORS.inputBorder,
    height: SH(50),
    borderRadius: SW(5),
    fontSize: SW(12),
    color: COLORS.darkGrey,
  },
  headingText: {
    color: COLORS.darkGrey2,
    fontFamily: Fonts.Medium,
    fontSize: SF(15),
  },
  textInputView: {
    paddingHorizontal: SW(12),
    marginHorizontal: SW(50),
    borderWidth: 0,
    alignItems: "center",
    height: SH(50),
    backgroundColor: COLORS.placeHolder,
    borderRadius: SW(5),
    width: "100%",
    flex: 1,
    alignSelf: "center",
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
    fontSize: SW(12),
    marginLeft: SW(10),
    marginTop: SH(3),
  },
  countryInnerView: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    paddingLeft: SW(35),
  },
  placesContainerStyle: {
    borderWidth: 0,
    borderRadius: 5,
    backgroundColor: COLORS.placeholder,
  },
  textInputContainerStyle: {
    borderTopWidth: 0,
    borderBottomWidth: 0,
    backgroundColor: "rgba(0,0,0,0)",
  },
  googlePlacesTextField: {
    height: SH(48),
    borderRadius: 5,
    fontSize: scale(12),
    fontFamily: Fonts.Italic,
    borderColor: COLORS.transparent,
    backgroundColor: COLORS.placeholder,
  },
  predefinedStyles: {
    color: COLORS.light_blue,
  },
  crossIcon: {
    height: SW(25),
    width: SW(25),
    tintColor: COLORS.darkGrey,
  },
});
