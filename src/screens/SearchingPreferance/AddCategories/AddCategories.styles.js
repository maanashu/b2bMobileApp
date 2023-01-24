import { Fonts } from "@/assets";
import { ShadowStyles } from "@/theme";
import { COLORS } from "@/theme/Colors";
import { SH, SF, SW } from "@/theme/ScalerDimensions";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
    paddingVertical: SH(10),
    paddingHorizontal: SW(20),
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
  },
  heading: {
    color: COLORS.text,
    fontSize: SF(16),
  },
  smalltext: {
    color: COLORS.light_grey,
    fontSize: SF(14),
    marginLeft: SW(18),
  },
  item: {
    height: SH(36),
    marginVertical: 8,
    marginHorizontal: SW(9),
    backgroundColor: COLORS.placeholder,
    borderColor: COLORS.light_border,
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    borderRadius: 5,
    borderWidth: 0.5,
  },
  title: {
    fontSize: SF(14),
  },
  flatlistView: {
    marginTop: SH(15),
    flex: 1,
    paddingHorizontal: 20,
  },
  buttonStyle: {
    backgroundColor: COLORS.primary,
    borderRadius: 5,
    height: SH(50),
  },
  iconStyle: {
    height: SH(17),
    width: SW(17),
  },
  crossIcon: {
    height: SW(15),
    width: SW(15),
    marginTop: SH(2),
    tintColor: COLORS.light_grey,
  },
});
