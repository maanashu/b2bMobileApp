import { Fonts } from "@/assets";
import { ShadowStyles } from "@/theme";
import { COLORS } from "@/theme/Colors";
import { SF, SH, SW } from "@/theme/ScalerDimensions";
import { StyleSheet, Dimensions } from "react-native";
import {
  moderateScale,
  ms,
  s,
  verticalScale,
  vs,
} from "react-native-size-matters";
const windowWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  mainView: {
    paddingHorizontal: ms(20),
    flex: 1,
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
    fontSize: ms(14),
    color: COLORS.darkGrey,
  },
  coinView: {
    backgroundColor: COLORS.primary,
    height: vs(25),
    width: ms(55),
    borderRadius: vs(30),
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: ms(7),
    justifyContent: "space-between",
  },
  coinStackIcon: {
    height: vs(17),
  },
  coinText: {
    color: COLORS.white,
    fontFamily: Fonts.SemiBold,
    fontSize: vs(12),
  },
  profileOptions: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: ms(8),
    paddingHorizontal: ms(10),
    paddingVertical: vs(10),
    ...ShadowStyles.shadow2,
    justifyContent: "space-between",
    marginHorizontal: ms(1),
  },
  innerRowView: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconStyle: {
    height: ms(20),
    width: ms(20),
  },
  forwardIcon: {
    height: ms(15),
    width: ms(8),
  },
  titleText: {
    fontFamily: Fonts.Regular,
    color: COLORS.darkGrey,
  },
  backgroundView: {
    backgroundColor: COLORS.placeholder,
    paddingHorizontal: ms(10),
    paddingVertical: vs(10),
    borderRadius: ms(10),
  },
});
