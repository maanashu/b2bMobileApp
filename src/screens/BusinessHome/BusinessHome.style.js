import { Fonts } from "@/assets";
import { ShadowStyles } from "@/theme";
import { COLORS } from "@/theme/Colors";
import { SF, SH, SW } from "@/theme/ScalerDimensions";
import { StyleSheet } from "react-native";
import { ms, s, verticalScale, vs } from "react-native-size-matters";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 40,
  },
  ShoesStyle: {
    width: 180,
    ...ShadowStyles.shadow2,
    borderRadius: 5,
    backgroundColor: COLORS.white,
    margin: 2,
    flex: 1,
    paddingVertical: SH(5),
  },

  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: ms(10),
  },
  ProductView: {
    borderRadius: 10,
    paddingVertical: SH(10),
    marginHorizontal: SW(5),
    backgroundColor: COLORS.placeholder,
    flex: 1,
    height: SH(180),

    paddingHorizontal: SW(10),
  },
  innerView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  secondView: {
    height: SH(85),
    width: SW(95),
    borderRadius: 5,
  },
  forwardIcon: {
    height: SH(10),
    width: SW(6),
    marginTop: SH(5),
  },
  item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: SH(2),
  },
  title: {
    fontSize: SF(12),
    fontFamily: Fonts.Regular,
    color: COLORS.darkGrey2,
  },
});
