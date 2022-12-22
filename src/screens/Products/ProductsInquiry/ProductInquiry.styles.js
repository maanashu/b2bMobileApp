import { Fonts } from "@/assets";
import { COLORS } from "@/theme/Colors";
import { SF, SH, SW } from "@/theme/ScalerDimensions";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 40,
  },
  formContainer: {
    borderRadius: 5,
    padding: 20,
    width: "100%",
  },
  favIcon: {
    height: SH(24),
    width: SW(24),
    marginRight: SW(20),
  },
  header: {
    height: SH(50),
    backgroundColor: COLORS.white,
    elevation: 5,
    paddingHorizontal: SW(20),
    justifyContent: "center",
  },
  item: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.blue,
    borderRadius: 1,
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    margin: 2,
    borderRadius: 5,
    elevation: 2,
  },
  itemS: {
    backgroundColor: COLORS.white,
    borderColor: "blue",
    borderRadius: 1,
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    margin: 2,
    borderRadius: 5,
  },
  priceTitle: {
    color: COLORS.blue,
    fontSize: SF(25),
  },
  buttons: {
    height: 40,
    width: SW(110),
  },
  bigIcon: {
    height: SH(40),
    width: SW(175),
  },
  yewiView: {
    borderRadius: 10,
    paddingVertical: SH(10),
    backgroundColor: COLORS.placeholder,
    elevation: 3,
    flex: 1,
    height: SH(140),
    paddingHorizontal: SW(10),
  },
  yewiInnerView: {
    flexDirection: "row",
    marginHorizontal: SW(5),
  },
  thirdView: {
    height: SH(74),
    width: SW(74),
    borderRadius: 5,
  },
  logoYewi: {
    height: SH(36),
    width: SW(36),
  },
  yewiHeadingText: {
    color: COLORS.black,
    fontSize: SF(16),
  },
  certified: {
    height: SH(16),
    width: SW(39),
  },
  yewiIcons: {
    height: SH(14),
    width: SW(10),
    marginLeft: SW(5),
  },
  yewiSmallText: {
    fontSize: SF(11),
  },
  yewistar: {
    height: SH(9),
    width: SW(9),
    marginLeft: SW(5),
  },
  yewiClock: {
    height: SH(10),
    width: SW(9),
    marginLeft: SW(5),
  },
  sideIcons: {
    height: SH(24),
    width: SW(16),
    marginRight: SW(5),
  },
  forward: {
    height: SH(20),
    width: SW(10),
    marginHorizontal: SW(7),
  },
  checks: {
    height: SH(17),
    width: SW(15),
  },
  borderTop: {
    margin: 5,
    borderTopWidth: 1,
    borderTopColor: COLORS.termsBorder,
  },
  numRating: {
    height: 35,
    width: 120,
  },
  starRating: {
    height: 35,
    width: "100%",
  },
  viewAll: {
    alignItems: "flex-end",
    paddingHorizontal: SW(20),
  },
  viewImage: {
    height: SH(40),
    width: SW(80),
    justifyContent: "flex-end",
  },
  ratingView: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
  },
  iconView: {
    flexDirection: "row",
    alignItems: "center",
  },
  trade: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    alignItems: "center",
  },
  sideIconView: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconStyling: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    alignItems: "center",
  },
  starBadge: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },
  iconCenter: {
    flexDirection: "row",
    alignItems: "center",
  },
  yewiSmallView: {
    flexDirection: "row",
    alignItems: "center",
  },
  yewiDirection: {
    paddingHorizontal: SW(5),
    flexDirection: "row",
    alignItems: "center",
  },
  midView: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
  },
  queryIcons: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-evenly",
  },
  mainView: {
    elevation: 5,
    backgroundColor: COLORS.white,
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: SH(15),
  },
  belowImage: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  semiBoldtext: {
    color: COLORS.black,
    fontSize: SF(22),
  },
  productDetail: {
    flexDirection: "row",
  },
  questions: {
    color: COLORS.text,
    fontSize: SF(14),
  },
  productAnswer: {
    color: COLORS.black,
    fontSize: SF(14),
    fontFamily: Fonts.Bold,
  },
  ShoesStyle: {
    height: 190,
    width: 190,
    elevation: 2,
    borderRadius: 1,
    backgroundColor: COLORS.white,
    margin: 2,
    flex: 1,
    alignItems: "center",
  },
  recommended: {
    color: COLORS.black,
    fontSize: SF(18),
    paddingHorizontal: SW(5),
  },
});
