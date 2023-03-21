import { Dimensions, Platform, StyleSheet } from "react-native";
import { moderateScale, scale } from "react-native-size-matters";

import { Fonts } from "@/assets";
import { COLORS, SF, SH, ShadowStyles, SW } from "@/theme";

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: SW(20),
    paddingBottom: SW(20),
  },
  headerMainView: {
    height: SH(60),
    paddingLeft: 10,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    ...ShadowStyles.shadow,
    backgroundColor: COLORS.white,
    width: Dimensions.get("window").width,
  },
  backIconStyle: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  headerTextStyle: {
    fontSize: SF(16),
    color: COLORS.dark_gray,
    fontFamily: Fonts.SemiBold,
  },
  uploadedView: {
    width: "100%",
    marginTop: SH(150),
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  uploadedText: {
    color: COLORS.text,
    paddingTop: SH(20),
    fontSize: scale(16),
    fontFamily: Fonts.SemiBold,
  },
  loginText: {
    color: COLORS.text,
    fontSize: scale(12),
    fontFamily: Fonts.SemiBold,
    marginHorizontal: moderateScale(14),
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textField: {
    flex: 1,
    marginHorizontal: -20,
  },
  dropdown: {
    alignSelf: "center",
    fontFamily: Fonts.Italic,
    borderColor: COLORS.transparent,
    backgroundColor: COLORS.transparent,
  },
  containerStyle: {
    height: SH(50),
    width: SW(330),
    borderWidth: 0,
    borderRadius: 7,
    alignSelf: "center",
    justifyContent: "center",
    borderColor: COLORS.light_border,
    backgroundColor: COLORS.inputBorder,
  },
  arrowIconStyle: {
    width: SW(12),
    height: SW(12),
  },
  dropDownContainerStyle: {
    top: SH(50),
    elevation: 8,
    borderRadius: 7,
    borderWidth: 0.2,
    backgroundColor: COLORS.white,
    zIndex: Platform.OS === "ios" ? 100 : 1,
  },
  listItemStyle: {
    fontSize: SF(12),
    color: COLORS.dark_gray,
    fontFamily: Fonts.Regular,
  },
  selectedItemStyle: {
    fontSize: scale(14),
    color: COLORS.black,
    fontFamily: Fonts.Regular,
  },
  placeholderTextStyle: {
    color: COLORS.secondary,
    fontFamily: Fonts.Italic,
  },
  submit: {
    borderRadius: 5,
    marginBottom: 10,
    fontSize: SF(16),
    color: COLORS.white,
    textAlign: "center",
    alignItems: "center",
    marginHorizontal: SW(10),
    justifyContent: "center",
    padding: moderateScale(16),
    fontFamily: Fonts.SemiBold,
    backgroundColor: COLORS.primary,
  },
  itemMainView: {
    width: "95%",
    borderWidth: 0,
    borderRadius: 8,
    marginTop: SH(10),
    alignSelf: "center",
    paddingVertical: SH(20),
    paddingHorizontal: SW(10),
    borderColor: COLORS.termsBorder,
    backgroundColor: COLORS.white,
    ...ShadowStyles.shadow,
  },
  headingText: {
    fontSize: SF(16),
    paddingTop: SH(20),
    color: COLORS.black,
    paddingHorizontal: SW(10),
    fontFamily: Fonts.SemiBold,
  },
  loader: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignSelf: "center",
    position: "absolute",
  },
  accountView: {
    paddingLeft: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  labelStyle: {
    fontSize: SF(14),
    color: COLORS.inactiveTab,
    fontFamily: Fonts.SemiBold,
  },
  valueStyle: {
    fontSize: SF(12),
    color: COLORS.inactiveTab,
    fontFamily: Fonts.Regular,
  },
  bottomRowView: {
    paddingTop: SH(10),
    paddingHorizontal: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  addBankAccount: {
    paddingTop: 20,
    paddingLeft: 5,
    fontSize: SF(16),
    color: COLORS.primary,
    fontFamily: Fonts.SemiBold,
  },
  addBankAccountView: {
    marginTop: 40,
    paddingLeft: 10,
  },
});
