import { StyleSheet, Dimensions } from "react-native";
import { SH, SW, COLORS, SF, ShadowStyles } from "@/theme";
import { Fonts, menuProfile } from "@/assets";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  maincontainer: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: COLORS.white,
    alignItems: "center",
    height: SH(50),
    paddingHorizontal: moderateScale(10),
    justifyContent: "space-between",
  },
  container: {
    backgroundColor: COLORS.white,
    height: SH(50),
    ...ShadowStyles.shadow,
    marginHorizontal: moderateScale(-12),
  },
  iconcontainer: {
    right: SW(10),
    position: "absolute",
    alignSelf: "center",
    backgroundColor: COLORS.primary,
    borderRadius: moderateScale(25),
    flexDirection: "row",
    paddingHorizontal: moderateScale(10),
    paddingVertical: verticalScale(5),
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: SF(14),
    color: COLORS.dark_gray,
    fontFamily: Fonts.SemiBold,
  },
  image: {
    // alignSelf: 'center',
    height: SH(20),
    width: SW(20),
    resizeMode: "contain",
  },
  subTitles: {
    fontSize: SF(14),
    color: COLORS.white,
    fontFamily: Fonts.Medium,
    alignSelf: "center",
    paddingHorizontal: 4,
  },

  headerIcon: {
    width: SW(28),
    height: SH(24),
  },
  coinContainer: {
    backgroundColor: COLORS.primary,
    flexDirection: "row",
    paddingVertical: verticalScale(4),
    paddingHorizontal: moderateScale(10),
    borderRadius: 16,
  },
  bodyContainer: {
    marginHorizontal: moderateScale(5),
    paddingHorizontal: SW(15),
  },
  flexRow: {
    // display:'flex',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.light_border,
    paddingHorizontal: moderateScale(8),
    paddingVertical: verticalScale(16),
  },
  contentRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  helpText: {
    fontSize: SF(14),
    color: COLORS.dark_gray,
    fontFamily: Fonts.Medium,
    paddingHorizontal: moderateScale(8),
  },
  reqButton: {
    fontSize: SF(9),
    color: COLORS.dark_gray,
    paddingVertical: verticalScale(3),
    paddingHorizontal: moderateScale(10),
    backgroundColor: COLORS.light_yellow,
    borderRadius: 8,
    marginHorizontal: moderateScale(8),
  },
  mask: {
    width: SW(20),
    height: SH(20),
    resizeMode: "contain",
  },
  line: {
    borderBottomColor: "#CACACA",
    borderBottomWidth: 1,
    marginHorizontal: SW(16),
  },
  text: {
    fontSize: SF(14),
    fontFamily: Fonts.Medium,
    color: COLORS.text,
    marginHorizontal: SW(16),
  },
  stext: {
    fontSize: SF(13),
    fontFamily: Fonts.Medium,
    color: COLORS.text,
    marginLeft: SW(16),
  },
  submit: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.primary,
    borderWidth: 1,
    paddingVertical: SH(12),
  },
  rowCard: {
    backgroundColor: COLORS.white,
    padding: SH(12),
    borderColor: COLORS.light_border,
    borderWidth: 1,
    justifyContent: "space-between",
    marginVertical: 6,
    borderRadius: 6,
  },
  linerow: {
    flexDirection: "row",

    marginHorizontal: 4,
  },
  padding: {
    marginHorizontal: 12,
  },
  formName: {
    color: COLORS.darkGrey,

    fontFamily: Fonts.SemiBold,
    fontSize: SF(15),
    marginHorizontal: SW(4),
  },
  subName: {
    color: COLORS.text,
    fontFamily: Fonts.Regular,
    fontSize: SF(11),
    marginHorizontal: SW(4),
  },
  row: {
    flexDirection: "row",
  },
});
