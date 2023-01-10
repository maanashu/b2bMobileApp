import { Fonts } from "@/assets";
import { ShadowStyles } from "@/theme";
import { COLORS } from "@/theme/Colors";
import { SF, SH, SW } from "@/theme/ScalerDimensions";
import { StyleSheet } from "react-native";
import { ms, s } from "react-native-size-matters";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 40,
  },

  header: {
    height: SH(50),
    backgroundColor: COLORS.white,
    ...ShadowStyles.shadow2,
    paddingHorizontal: SW(20),
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  HeaderNameText: {
    fontFamily: Fonts.SemiBold,
    fontSize: SF(14),
    color: COLORS.darkGrey,
  },
  headerCompanyName: {
    fontFamily: Fonts.Regular,
    fontSize: SF(11),
  },
  mainContainer: {
    marginHorizontal: SW(20),
    marginVertical: SH(5),
    flex: 1,
    backgroundColor: COLORS.white,
  },
  chattingIcon: {
    height: 35,
    width: 35,
    marginRight: SW(8),
  },
});
