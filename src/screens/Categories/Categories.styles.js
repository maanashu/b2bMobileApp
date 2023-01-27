import { Fonts } from "@/assets";
import { ShadowStyles } from "@/theme";
import { COLORS } from "@/theme/Colors";
import { SH, SF, SW } from "@/theme/ScalerDimensions";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,

    backgroundColor: COLORS.white,
  },
  container: {
    marginTop: SH(80),
    backgroundColor: COLORS.white,
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: SH(10),
    paddingHorizontal: SW(20),
    ...ShadowStyles.shadow2,
  },

  skipButton: {
    backgroundColor: "#E5F0FF",
    height: SH(24),
    width: SW(50),
    alignSelf: "flex-end",
    flexDirection: "row",
    marginRight: SW(2),
    borderRadius: 3,
    alignItems: "center",
  },
  skipText: {
    color: COLORS.black,
    marginLeft: SW(10),
    fontFamily: Fonts.SemiBold,
    fontSize: SF(12),
  },
  mainHeading: {
    color: COLORS.black,
    fontSize: SF(22),
    fontFamily: Fonts.Bold,
    marginLeft: SW(8),
  },
  heading: {
    color: COLORS.text,
    marginLeft: SW(8),
    fontSize: SF(16),
  },
  smalltext: {
    color: COLORS.light_grey,
    fontSize: SF(14),
    marginLeft: SW(8),
  },
  item: {
    height: SH(40),
    width: SW(103),
    marginVertical: 8,
    marginHorizontal: 4,
    borderColor: COLORS.light_border,
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    borderRadius: 4,
    borderWidth: 0.5,
  },
  title: {
    fontSize: SF(10),
    fontFamily: Fonts.Regular,
    color: COLORS.text,
  },
  flatlistView: {
    marginTop: SH(15),
    flex: 1,
    paddingHorizontal: 20,
  },
  buttonStyle: {
    backgroundColor: COLORS.placeholder,
    borderColor: COLORS.placeholder,
    borderRadius: 5,
    height: SH(50),
  },
  iconStyle: {
    height: SH(17),
    width: SW(17),
  },
});
