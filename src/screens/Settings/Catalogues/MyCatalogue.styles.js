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
    paddingHorizontal: SW(20),
    flex: 1,
  },
  logoView: {
    alignItems: "center",
  },
  logoStyle: {
    height: ms(150),
    width: ms(150),
  },
  jobrText: {
    fontFamily: Fonts.MaisonMonoBold,
    fontSize: ms(24),
    color: COLORS.darkGrey,
  },
  paraText: {
    fontFamily: Fonts.MaisonRegular,
    fontSize: ms(12),
    color: COLORS.darkGrey,
    textAlign: "justify",
    lineHeight: ms(17),
  },
  tabButtonView: {
    borderRadius: 20,
    height: SH(30),
    // width: SW(95),
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    paddingHorizontal: SW(10),
    flex: 1,
    margin: 4,
  },

  topTabContainer: {
    flex: 1,
    paddingVertical: SH(5),
  },
  noCatalogText: {
    fontFamily: Fonts.SemiBold,
    fontSize: SF(18),
    color: COLORS.darkGrey,
  },
});
