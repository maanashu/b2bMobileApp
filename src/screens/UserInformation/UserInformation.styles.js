import { Fonts } from "@/assets";
import { COLORS, SF, SH, ShadowStyles, SW } from "@/theme";
import { Dimensions, StyleSheet } from "react-native";
import { ms, s, verticalScale, vs } from "react-native-size-matters";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  sheetContainer: {
    flex: 1,
    padding: 24,
    backgroundColor: "grey",
  },
  wrapperStyle: {
    backgroundColor: "rgba(0,0,0,0.6)",
    width: "100%",
    alignSelf: "center",
  },
  containerStyle: {
    ...ShadowStyles.shadow,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: Dimensions.get("window").height / 2.5,
  },
  draggableIconStyle: {
    backgroundColor: COLORS.light_border,
  },
  title: {
    textAlign: "center",
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
  headerText: {
    fontFamily: Fonts.SemiBold,
    color: COLORS.black,
    fontSize: s(14),
  },
  crossIcon: {
    height: SH(35),
    width: SW(40),
  },
  filterIcon: {
    height: verticalScale(25),
    width: ms(25),
  },
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: ms(20),
  },

  headerIconView: {
    height: SH(35),
    width: SW(60),
    backgroundColor: COLORS.primary,
    borderRadius: ms(20),
    flexDirection: "row",
    paddingHorizontal: ms(10),
    alignItems: "center",
    justifyContent: "space-between",
  },

  tabButtonView: {
    borderRadius: 20,
    width: ms(65),
  },
  upperView: {
    height: vs(120),
    width: "100%",
    backgroundColor: COLORS.inputBorder,
    paddingHorizontal: ms(20),
    flexDirection: "row",
    alignItems: "center",
  },
  topBoldText: {
    fontFamily: Fonts.Bold,
    color: COLORS.primary,
    fontSize: ms(25),
    marginLeft: ms(20),
  },
  mainHeadingText: {
    color: COLORS.darkGrey,
    fontFamily: Fonts.MaisonMonoBold,
    fontSize: ms(18),
  },
  personalInfoView: {
    paddingVertical: verticalScale(15),
    paddingLeft: ms(18),
    backgroundColor: COLORS.white,
    borderRadius: ms(10),
    ...ShadowStyles.shadow2,
    marginHorizontal: ms(1),
  },
  profileOptions: {},

  mainRowView: { flexDirection: "row", alignItems: "center" },
  rowView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconStyle: {
    height: SH(20),
    width: SH(20),
    marginRight: ms(7),
  },
  headingText: {
    fontFamily: Fonts.Regular,
    color: COLORS.light_grey,
    fontSize: ms(14),
    marginBottom: vs(3),
  },
  titleText: {
    color: COLORS.darkGrey,
    fontFamily: Fonts.Regular,
    fontSize: ms(16),
  },
  imageBackground: {
    alignSelf: "center",
    height: ms(150),
    width: ms(150),
    borderRadius: ms(150),
    justifyContent: "flex-end",
    backgroundColor: COLORS.placeholder,
  },
  UserImageBackground: {
    alignSelf: "center",
    height: ms(150),
    width: ms(150),
    borderRadius: ms(150),
  },
  modalBackground: {
    padding: SW(30),
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 12,
  },
  closeView: {
    alignItems: "flex-end",
    marginTop: -23,
    marginBottom: SH(10),
    marginRight: -22,
  },
  closeIcon: {
    height: SH(20),
    width: SH(20),
  },
  userImageStyle: {
    alignSelf: "center",
    height: ms(150),
    width: ms(150),
    borderRadius: ms(75),
  },
  editProfileView: {
    position: "absolute",
    right: SW(5),
    bottom: SH(20),
    backgroundColor: COLORS.primary,
    height: SW(20),
    width: SW(20),
    borderRadius: SW(10),
    justifyContent: "center",
    alignItems: "center",
  },
  pencilIcon: {
    height: SH(15),
    tintColor: COLORS.white,
  },
  alignSelfCenter: {
    alignSelf: "center",
  },
  row: {
    flexDirection: "row",
  },
  cellRoot: {
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    width: SW(50),
    height: SW(50),
    borderRadius: SW(50),
    borderColor: COLORS.light_border,
    backgroundColor: COLORS.lightgray,
    marginHorizontal: SW(5),
  },
  cellText: {
    fontSize: SF(20),
    color: COLORS.black,
    fontFamily: Fonts.Medium,
  },

  labelTextStyle: {
    fontSize: SF(14),
    color: COLORS.text,
    fontFamily: Fonts.Regular,
    paddingHorizontal: SW(34),
  },
  emailTextInputStyle: {
    height: SH(50),
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.light_border,
    color: COLORS.black,
    paddingLeft: 10,
    fontFamily: Fonts.Regular,
    top: 10,
  },
  verifyEmailText: {
    color: COLORS.primary,
    fontSize: SF(12),
    fontFamily: Fonts.Regular,
  },
  verifyCheck: {
    height: SH(22),
    width: SH(22),
  },
});
