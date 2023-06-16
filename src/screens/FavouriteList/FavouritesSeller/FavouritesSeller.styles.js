import { SH, SW, SF, COLORS } from "@/theme";
import { Fonts } from "@/assets";
import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  iconStyle: {
    height: SH(18),
    width: SW(18),
    marginRight: SW(5),
  },
  rowAlign: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: SH(2),
  },
  secondaryText: {
    fontFamily: Fonts.Regular,
    color: COLORS.white,
  },
  name: {
    color: COLORS.white,
    fontFamily: Fonts.Bold,
    fontSize: SF(18),
    left: SW(3),
  },
  bottomView: {
    position: "absolute",
    bottom: SH(16),
    left: SW(16),
  },
  imgBG: {
    height: SH(180),
    width: Dimensions.get("window").width - SW(20),
    alignSelf: "center",
    marginHorizontal: SW(20),
    borderRadius: SW(10),
    overflow: "hidden",
  },
});
