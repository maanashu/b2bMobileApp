import { StyleSheet, Dimensions } from "react-native";
import { Fonts } from "@/assets";
import { COLORS, SF, SH, SW, ShadowStyles } from "@/theme";
import { verticalScale, moderateScale, scale } from "react-native-size-matters";
import { RotateInDownLeft } from "react-native-reanimated";
const windowWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.white,
    padding: SW(20),
  },
  headingBoldText: {
    color: COLORS.darkGrey2,
    fontFamily: Fonts.SemiBold,
    fontSize: SF(12),
  },

  titleStyle: {
    textAlign: "left",
    fontSize: SF(18),
    fontFamily: Fonts.SemiBold,
    color: COLORS.black,
  },

  inputText: {
    fontSize: SF(13),
    fontFamily: Fonts.Regular,
    color: COLORS.black,
  },

  fieldsView: {
    width: SW(340),
    alignSelf: "center",
  },
  labelStyle: {
    fontFamily: Fonts.SemiBold,
    fontSize: SF(14),
    color: COLORS.text,
  },
  labelStyle2: {
    fontFamily: Fonts.Regular,
    fontSize: SF(14),
    color: COLORS.text,
  },
  input: {
    backgroundColor: COLORS.placeholder,
    borderColor: COLORS.placeholder,
    marginTop: verticalScale(5),
    paddingHorizontal: SW(15),
    alignItems: "center",
    borderRadius: 5,
    flexDirection: "row",
    height: SH(48),
  },
  calendarImage: {
    width: SW(20),
    height: SW(20),
    resizeMode: "contain",
  },
  textInputStyles: {
    width: SW(250),
    fontSize: scale(12),
    fontFamily: Fonts.Italic,
    marginLeft: SW(15),
    borderColor: COLORS.placeholder,
    height: SH(48),
  },
  textFieldStyle: {
    backgroundColor: COLORS.placeholder,
    borderColor: COLORS.transparent,
    marginTop: verticalScale(5),
    paddingVertical: verticalScale(10),
    paddingHorizontal: moderateScale(10),
    fontSize: scale(12),
    borderRadius: 5,
    fontFamily: Fonts.Italic,
    height: SH(48),
    color: COLORS.darkGrey,
  },
  googlePlacesTextField: {
    backgroundColor: COLORS.placeholder,
    borderColor: COLORS.transparent,
    fontSize: scale(12),
    borderRadius: 5,
    fontFamily: Fonts.Italic,
    height: SH(48),
  },
  countryField: {
    backgroundColor: COLORS.placeholder,
    borderColor: COLORS.transparent,
    marginTop: verticalScale(10),
    paddingVertical: verticalScale(10),
    paddingHorizontal: moderateScale(10),
    fontSize: scale(12),
    borderRadius: 5,
    height: SH(48),
    color: COLORS.black,
  },
  dropDownIcon: {
    width: SW(5),
    height: SW(5),
    resizeMode: "contain",
    paddingRight: 30,
  },
  dropDownIcon2: {
    width: SW(5),
    height: SW(5),
    resizeMode: "contain",
    paddingRight: 30,
    transform: [{ rotate: "180deg" }],
  },
  dropdown: {
    width: SW(340),
    alignSelf: "center",
    backgroundColor: COLORS.placeholder,
    borderColor: COLORS.transparent,
    borderWidth: 0,
    // marginVertical: verticalScale(1),
    zIndex: Platform.OS === "ios" ? 100 : 0,
    fontFamily: Fonts.Italic,
  },
  containerStyle: {
    width: SW(340),
    borderWidth: 0,
    alignSelf: "center",
    marginTop: verticalScale(10),
  },
  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: SH(10),
  },
  maleCheckStyle: {
    flexDirection: "row",
    alignItems: "center",
  },
  maleCheckbox: {
    height: SW(25),
    width: SW(25),
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxStyle: {
    width: SW(20),
    height: SW(20),
    resizeMode: "contain",
    alignSelf: "center",
  },
  femaleCheckStyle: {
    flexDirection: "row",
    marginLeft: SW(80),
  },
  checkboxLabel: {
    paddingLeft: SH(8),
    textAlignVertical: "center",
  },
  nextButton: {
    bottom: SH(40),
    alignSelf: "center",
  },
  placeholderTextStyle: {
    color: COLORS.placeholderText,
    fontFamily: Fonts.Italic,
  },
  labelTextStyle: {
    color: COLORS.dark_gray,
    fontSize: SF(16),
    fontFamily: Fonts.Regular,
  },
  maincontainer: {
    flexDirection: "row",
    backgroundColor: COLORS.white,
    alignItems: "center",
    height: SH(50),
    width: windowWidth,
    paddingHorizontal: moderateScale(15),
    marginRight: -20,
    justifyContent: "space-between",
    ...ShadowStyles.shadow,
  },
  headerIcon: {
    width: SW(28),
    height: SH(24),
    // marginHorizontal: moderateScale(5),
  },
  header: {
    color: COLORS.dark_gray,
    fontSize: SF(14),
    fontFamily: Fonts.SemiBold,
  },
});
