import { StyleSheet, Dimensions } from "react-native";
import { Fonts } from "@/assets";
import { COLORS, SF, SH, SW, ShadowStyles } from "@/theme";
import { verticalScale, moderateScale, scale } from "react-native-size-matters";
import { RotateInDownLeft } from "react-native-reanimated";
const windowWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  titleStyle: {
    fontSize: SF(18),
    textAlign: "left",
    color: COLORS.black,
    fontFamily: Fonts.SemiBold,
  },
  fieldsView: {
    width: SW(340),
    alignSelf: "center",
  },
  labelStyle: {
    fontSize: SF(14),
    color: COLORS.text,
    fontFamily: Fonts.SemiBold,
  },
  labelStyle2: {
    fontSize: SF(14),
    color: COLORS.text,
    fontFamily: Fonts.Regular,
  },
  loader: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignSelf: "center",
    position: "absolute",
  },
  skipButton: {
    color: COLORS.primary,
  },
  input: {
    height: SH(48),
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: SW(15),
    marginTop: verticalScale(10),
    borderColor: COLORS.placeholder,
    backgroundColor: COLORS.placeholder,
  },
  calendarImage: {
    width: SW(20),
    height: SW(20),
    resizeMode: "contain",
  },
  textInputStyles: {
    height: SH(48),
    width: SW(250),
    marginLeft: SW(15),
    fontSize: scale(12),
    fontFamily: Fonts.Italic,
    borderColor: COLORS.placeholder,
  },
  textFieldStyle: {
    height: SH(48),
    borderRadius: 5,
    fontSize: scale(12),
    fontFamily: Fonts.Italic,
    marginTop: verticalScale(10),
    borderColor: COLORS.transparent,
    paddingVertical: verticalScale(10),
    backgroundColor: COLORS.placeholder,
    paddingHorizontal: moderateScale(10),
    color: COLORS.darkGrey,
  },
  googlePlacesTextField: {
    height: SH(48),
    borderRadius: 5,
    fontSize: scale(12),
    fontFamily: Fonts.Italic,
    borderColor: COLORS.transparent,
    backgroundColor: COLORS.placeholder,
  },
  countryField: {
    height: SH(48),
    borderRadius: 5,
    fontSize: scale(12),
    color: COLORS.black,
    marginTop: verticalScale(10),
    borderColor: COLORS.transparent,
    paddingVertical: verticalScale(10),
    backgroundColor: COLORS.placeholder,
    paddingHorizontal: moderateScale(10),
  },
  dropDownIcon: {
    width: SW(5),
    height: SW(5),
    paddingRight: 30,
    resizeMode: "contain",
  },
  dropDownIcon2: {
    width: SW(5),
    height: SW(5),
    paddingRight: 30,
    resizeMode: "contain",
    transform: [{ rotate: "180deg" }],
  },
  dropdown: {
    borderWidth: 0,
    width: SW(340),
    alignSelf: "center",
    fontFamily: Fonts.Italic,
    borderColor: COLORS.transparent,
    backgroundColor: COLORS.placeholder,
    zIndex: Platform.OS === "ios" ? 100 : 0,
  },
  containerStyle: {
    width: SW(340),
    borderWidth: 0,
    alignSelf: "center",
    marginTop: verticalScale(10),
  },
  checkboxRow: {
    marginTop: SH(10),
    flexDirection: "row",
    alignItems: "center",
  },
  maleCheckStyle: {
    flexDirection: "row",
    alignItems: "center",
  },
  maleCheckbox: {
    width: SW(25),
    height: SW(25),
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxStyle: {
    width: SW(20),
    height: SW(20),
    alignSelf: "center",
    resizeMode: "contain",
  },
  femaleCheckStyle: {
    marginLeft: SW(80),
    flexDirection: "row",
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
    color: COLORS.secondary,
    fontFamily: Fonts.Italic,
  },
  labelTextStyle: {
    fontSize: SF(16),
    color: COLORS.dark_gray,
    fontFamily: Fonts.Regular,
  },
  maincontainer: {
    height: SH(50),
    marginRight: -20,
    width: windowWidth,
    alignItems: "center",
    flexDirection: "row",
    ...ShadowStyles.shadow,
    backgroundColor: COLORS.white,
    justifyContent: "space-between",
    paddingHorizontal: moderateScale(15),
  },
  headerIcon: {
    width: SW(28),
    height: SH(24),
    resizeMode: "contain",
  },
  goBackView: {
    flexDirection: "row",
    alignItems: "center",
  },
  header: {
    fontSize: SF(14),
    color: COLORS.dark_gray,
    fontFamily: Fonts.SemiBold,
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
  predefinedStyles: {
    color: COLORS.light_blue,
  },
});
