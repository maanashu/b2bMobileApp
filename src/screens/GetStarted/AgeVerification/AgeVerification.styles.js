import { StyleSheet, Dimensions, Platform } from "react-native";
import { SH, SW, COLORS, SF } from "@/theme";
import { Fonts } from "@/assets";
import { moderateScale, scale } from "react-native-size-matters";

const windowHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  header: {
    fontSize: SF(20),
    color: COLORS.black,
    fontFamily: Fonts.SemiBold,
  },
  smallLightText: {
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
  bodyContainer: {
    height: windowHeight * 0.92,
    padding: SW(20),
  },
  smallDarkText: {
    fontSize: SF(14),
    color: COLORS.dark_gray,
    fontFamily: Fonts.SemiBold,
  },
  flexRowContainer: {
    // zIndex: 999,
    flexDirection: "row",
  },
  uploadIdCon: {
    zIndex: -200,
    borderWidth: 1,
    height: SH(190),
    borderRadius: 10,
    borderStyle: "dashed",
    justifyContent: "center",
    borderColor: COLORS.light_border,
    paddingHorizontal: moderateScale(10),
  },
  flexColumn: {
    flexDirection: "column",
  },
  accepttext: {
    fontSize: SF(12),
    color: COLORS.light_grey,
    fontFamily: Fonts.Regular,
  },
  cornerBorder: {
    width: SW(110),
    height: SH(74),
    resizeMode: "contain",
  },
  dummyIdCard: {
    top: 10,
    left: 10,
    width: SW(90),
    height: SH(54),
    position: "absolute",
    resizeMode: "contain",
  },
  takenImage: {
    width: SW(97),
    height: SH(72),
    alignSelf: "center",
    position: "absolute",
  },
  dropdown: {
    alignSelf: "center",
    fontFamily: Fonts.Italic,
    borderColor: "transparent",
    backgroundColor: "transparent",
  },
  containerStyle: {
    height: SH(30),
    borderWidth: 1,
    borderRadius: 7,
    justifyContent: "center",
    backgroundColor: COLORS.white,
    borderColor: COLORS.light_border,
  },
  arrowIconStyle: {
    width: SW(12),
    height: SW(12),
  },
  dropDownContainerStyle: {
    top: 30,
    elevation: 2,
    borderWidth: 0,
    borderRadius: 7,
    backgroundColor: COLORS.white,
    zIndex: Platform.OS === "ios" ? 100 : 1,
  },
  listItemStyle: {
    fontSize: SF(12),
    color: COLORS.dark_gray,
    fontFamily: Fonts.Regular,
  },
  selectedItemStyle: {
    fontSize: scale(12),
    color: COLORS.light_grey,
    fontFamily: Fonts.Regular,
  },
  placeholderTextStyle: {
    color: COLORS.secondary,
    fontFamily: Fonts.Italic,
  },
});
