import { SH, SW, SF, COLORS, ShadowStyles } from "@/theme";
import { Fonts } from "@/assets";
import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  bottomLine: {
    borderBottomWidth: 1,
    borderColor: COLORS.light_border,
    marginVertical: SH(10),
  },
  mainModal: {
    backgroundColor: COLORS.white,
    width: SW(340),
    borderRadius: SW(5),
    marginTop: SH(100),
    paddingVertical: SH(15),
  },
  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: SW(15),
    justifyContent: "space-between",
  },
  headingText: {
    marginLeft: SW(3),
    color: COLORS.darkGrey,
    fontFamily: Fonts.SemiBold,
    fontSize: SF(16),
  },
  buttonView: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    paddingHorizontal: SW(14),
    paddingVertical: SH(6),
    borderRadius: SW(5),
  },
  mapLogoStyle: {
    height: SW(18),
    width: SW(18),
    marginRight: SW(3),
    tintColor: COLORS.white,
  },
  buttonSmallText: {
    marginLeft: SW(3),
    color: COLORS.white,
    fontFamily: Fonts.Regular,
    fontSize: SF(14),
  },
  subHeadingText: {
    color: COLORS.darkGrey,
    fontFamily: Fonts.Regular,
    fontSize: SF(16),
    paddingLeft: SW(15),
  },
  checkLogo: {
    height: SW(22),
    width: SW(22),
  },
  titleText: {
    fontFamily: Fonts.SemiBold,
  },
  statusText: {
    fontFamily: Fonts.Regular,
  },
  textAlignStyle: {
    alignItems: "flex-start",
    justifyContent: "flex-end",
    marginLeft: SW(10),
  },
  map: {
    height: height,
    width: width,
    alignSelf: "center",
  },
});
