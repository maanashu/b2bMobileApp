import { Fonts } from "@/assets";
import { ShadowStyles } from "@/theme";
import { COLORS } from "@/theme/Colors";
import { SH, SF, SW } from "@/theme/ScalerDimensions";
import { Dimensions, StyleSheet } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  map: {
    height: height / 2,
    width: width,
    alignSelf: "center",
  },
  rowCard: {
    backgroundColor: COLORS.white,
    borderRadius: moderateScale(5),
    paddingHorizontal: moderateScale(12),
    // paddingVertical: moderateScale(10),
    // position: 'absolute',
    // bottom: Platform.OS == 'ios' ? SH(40) : 0,
    marginBottom: moderateScale(24),
    width: "100%",
  },
  bottom: {
    borderBottomColor: COLORS.light_border,
    borderBottomWidth: 1,
    width: SW(50),
    alignSelf: "center",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subrow: {
    flexDirection: "row",
    width: width / 1.5,
    minHeight: SH(50),
    marginBottom: SH(10),
  },
  img: {
    height: SH(26),
    width: SW(26),
    margin: SH(5),
  },
  padding: {
    marginHorizontal: SW(10),
  },
  subName: {
    color: COLORS.dark_gray,
    fontFamily: Fonts.Medium,
    fontSize: scale(12),
  },
  textField: {
    color: COLORS.black,
    fontSize: SF(14),
    fontFamily: Fonts.Italic,
    marginHorizontal: SW(12),
    backgroundColor: COLORS.placeholder,
    borderBottomWidth: 0,
    paddingHorizontal: SW(10),
    height: SH(55),
    borderRadius: SW(5),
  },
  cardName: {
    color: COLORS.dark_gray,
    fontFamily: Fonts.Bold,
    fontSize: scale(14),
    padding: 3,
  },
  label: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  bluehomeImg: {
    backgroundColor: COLORS.primary,
    borderRadius: 50,
    padding: 10,
    ...ShadowStyles.shadow,
  },
  homeImg: {
    backgroundColor: COLORS.white,
    borderRadius: 50,
    padding: 10,
    ...ShadowStyles.shadow,
  },
  labelName: {
    color: COLORS.dark_gray,
    fontFamily: Fonts.MaisonRegular,
    fontSize: scale(10),
    alignSelf: "center",
    marginVertical: 4,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    backgroundColor: "rgba(0,0,0,0.25)",
  },
  modalFilter: {
    position: "absolute",
    width: "90%",
    backgroundColor: COLORS.white,
    borderRadius: moderateScale(20),
    ...ShadowStyles.shadow,
  },
  formContent: {
    borderTopLeftRadius: moderateScale(20),
    borderTopRightRadius: moderateScale(20),
    backgroundColor: COLORS.inputBorder,
    padding: verticalScale(16),
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.light_border,
  },
  fieldHeading: {
    fontSize: scale(18),
    fontFamily: Fonts.MaisonMonoBold,
    color: COLORS.black,
    alignSelf: "center",
  },
  loginText: {
    fontFamily: Fonts.SemiBold,
    fontSize: scale(12),
    color: COLORS.text,
    marginHorizontal: moderateScale(14),
  },
  submit: {
    marginHorizontal: moderateScale(14),
  },
});
