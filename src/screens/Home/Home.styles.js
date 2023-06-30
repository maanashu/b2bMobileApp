import { Fonts } from "@/assets";
import { COLORS } from "@/theme/Colors";
import { SF, SH, SW } from "@/theme/ScalerDimensions";
import { StyleSheet } from "react-native";
import { ms, vs } from "react-native-size-matters";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tabButtonView: {
    borderRadius: 20,
    height: vs(25),
    width: ms(75),
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  headerStyle: {
    height: SH(50),
    backgroundColor: COLORS.white,
    paddingHorizontal: SW(20),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 999,
  },
  locationView: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  locationText: {
    color: COLORS.black,
    fontFamily: Fonts.SemiBold,
    fontSize: SF(13),
  },
  fullAddressView: {
    width: SW(150),
  },
  fullAddressText: {
    color: COLORS.black,
    fontFamily: Fonts.Regular,
    fontSize: SF(11),
  },
  locationIcon: {
    tintColor: COLORS.primary,
    height: ms(15),
    width: ms(15),
    marginRight: SW(5),
  },
  bagIcon: {
    height: ms(25),
    width: ms(25),
    marginRight: SW(15),
  },
  coinView: {
    height: SH(29),
    paddingHorizontal: SW(8),
    backgroundColor: COLORS.primary,
    borderRadius: ms(20),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: SW(5),
  },
  coinIcon: {
    height: SH(16),
    width: SW(16),
    marginLeft: SW(1),
  },
  balanceText: {
    fontFamily: Fonts.SemiBold,
    color: COLORS.white,
    marginRight: SW(1),
    fontSize: SF(14),
  },
  rowView: {
    flexDirection: "row",
    alignItems: "center",
  },
  downIcon: {
    height: ms(15),
    width: ms(15),
    marginLeft: SW(4),
    top: SH(2),
    tintColor: COLORS.darkGrey,
  },
  cartCountView: {
    backgroundColor: "red",
    height: SW(15),
    width: SW(15),
    borderRadius: SW(15),
    position: "absolute",
    left: SW(14),
    alignItems: "center",
    justifyContent: "center",
  },
});
