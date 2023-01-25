import { Fonts } from "@/assets";
import { ShadowStyles } from "@/theme";
import { COLORS } from "@/theme/Colors";
import { SH, SF, SW } from "@/theme/ScalerDimensions";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mapView: {
    width: "100%",
    height: "100%",
  },
  sheetContainer: {
    paddingHorizontal: SW(20),
    paddingVertical: SH(20),
  },
  headingText: {
    fontFamily: Fonts.SemiBold,
    color: COLORS.darkGrey,
    fontSize: SF(18),
  },
  rowView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftView: {
    flexDirection: "row",
    alignItems: "center",
  },
  rightView: {},
  addressIcon: {
    tintColor: COLORS.primary,
    height: SH(20),
    width: SW(20),
    marginRight: SW(10),
  },
  addressText: {
    fontFamily: Fonts.Regular,
    color: COLORS.text,
    fontSize: SF(14),
  },
  placeholderText: {
    fontFamily: Fonts.Italic,
  },
  placeholder: {
    borderBottomWidth: 0,
    backgroundColor: COLORS.placeHolder,
    paddingHorizontal: SW(15),
    paddingVertical: SH(10),
    borderRadius: 4,
    fontSize: SF(16),
  },
  subHeadingText: {
    fontFamily: Fonts.SemiBold,
    color: COLORS.darkGrey,
    fontSize: SF(16),
  },
  iconsStyle: {
    ...ShadowStyles.shadow2,
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: SW(50),
    marginHorizontal: SW(15),
    padding: SH(5),
  },
  bottomIcons: {
    height: SH(35),
    width: SH(35),
  },
  pinLocation: {
    position: "absolute",
    height: SH(50),
    width: SW(50),
    marginTop: SH(200),
    marginLeft: SW(180),
  },
  modalBackground: {
    backgroundColor: "white",
    paddingVertical: SH(20),
    paddingHorizontal: SW(15),
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  modalHeader: {
    borderBottomWidth: 1,
    paddingHorizontal: SW(15),
    borderColor: COLORS.light_border,
    paddingVertical: SH(15),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: COLORS.input_bg,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  closeIcon: {
    height: SH(30),
    width: SW(30),
    tintColor: COLORS.darkGrey,
  },
  modalHeaderText: {
    color: COLORS.darkGrey,
    fontFamily: Fonts.MaisonRegular,
    fontSize: SF(18),
  },
  lineText: {
    color: COLORS.text,
    fontFamily: Fonts.SemiBold,
    marginBottom: SH(5),
  },
  topPlaceHolders: {
    paddingHorizontal: SW(15),
    fontSize: SF(14),
    backgroundColor: COLORS.placeHolder,
    borderBottomWidth: 0,
    borderRadius: 4,
    paddingVertical: SH(10),
  },
  nameView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
