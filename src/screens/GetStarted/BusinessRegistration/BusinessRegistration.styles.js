import { Dimensions, StyleSheet } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

import { Fonts } from "@/assets";
import { COLORS, SF, SH, ShadowStyles, SW } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainHeaderView: {
    height: SH(48),
    paddingLeft: SW(20),
    alignSelf: "center",
    alignItems: "center",
    flexDirection: "row",
    ...ShadowStyles.shadow,
    backgroundColor: COLORS.white,
    width: Dimensions.get("window").width,
  },
  backIconStyle: {
    left: 5,
    width: SW(30),
    height: SW(30),
    // position: 'absolute',
    resizeMode: "contain",
    tintColor: COLORS.black,
  },
  headerText: {
    fontSize: SF(14),
    paddingLeft: SW(15),
    color: COLORS.dark_gray,
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
    tintColor: COLORS.secondary,
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
    color: COLORS.black,
    fontSize: scale(12),
    fontFamily: Fonts.Italic,
    marginTop: verticalScale(10),
    borderColor: COLORS.transparent,
    paddingVertical: verticalScale(10),
    backgroundColor: COLORS.placeholder,
    paddingHorizontal: moderateScale(10),
  },
  googlePlacesTextField: {
    height: SH(48),
    borderRadius: 5,
    color: COLORS.black,
    fontSize: scale(12),
    fontFamily: Fonts.Italic,
    borderColor: COLORS.transparent,
    backgroundColor: COLORS.placeholder,
  },
  dropDownIcon: {
    width: SW(5),
    height: SW(5),
    paddingRight: 30,
    resizeMode: "contain",
  },
  dropdown: {
    borderWidth: 0,
    width: SW(340),
    alignSelf: "center",
    fontFamily: Fonts.Italic,
    borderColor: COLORS.transparent,
    backgroundColor: COLORS.placeholder,
    zIndex: Platform.OS === "ios" ? 100 : -12,
  },
  containerStyle: {
    width: SW(340),
    borderWidth: 0,
    alignSelf: "center",
    marginTop: verticalScale(10),
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
  listItemStyle: {
    fontSize: SF(14),
    color: COLORS.black,
    fontFamily: Fonts.Italic,
  },
});
