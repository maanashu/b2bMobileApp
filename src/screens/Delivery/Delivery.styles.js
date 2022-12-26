import { Fonts } from "@/assets";
import { COLORS } from "@/theme/Colors";
import { SF, SH, SW } from "@/theme/ScalerDimensions";
import { StyleSheet } from "react-native";
import { s } from "react-native-size-matters";

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
    elevation: 5,
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
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: SW(20),
    paddingVertical: SH(5),
  },
  deliveryView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  deliveryViewInnerView: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  fedExIcon: {
    height: SH(50),
    width: SW(40),
  },
  deliveryText: {
    color: COLORS.black,
    fontSize: SF(17),
    paddingHorizontal: SW(10),
  },
  outerDot: {
    borderWidth: 1,
    height: 20,
    width: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderColor: "gray",
  },
  innerDot: {
    height: 12,
    width: 12,
    backgroundColor: COLORS.grey,
    borderRadius: 6,
  },
  upsIcon: {
    height: SH(32),
    width: SW(40),
  },
  buttonView: {
    paddingHorizontal: SW(20),
    flex: 1,
    justifyContent: "flex-end",
    paddingVertical: SH(20),
  },
  doneButton: {
    borderWidth: 0,
  },
  buttonTextStyle: {
    color: COLORS.white,
  },
});
