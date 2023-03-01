import { Fonts } from "@/assets";
import { ShadowStyles } from "@/theme";
import { COLORS } from "@/theme/Colors";
import { SF, SH, SW } from "@/theme/ScalerDimensions";
import { StyleSheet } from "react-native";
import { ms, s, vs } from "react-native-size-matters";

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
  filterText: {
    fontFamily: Fonts.Regular,
    color: COLORS.white,
  },
  headerIconView: {
    height: SH(35),
    width: SW(80),
    backgroundColor: COLORS.primary,
    borderRadius: ms(20),
    flexDirection: "row",
    paddingHorizontal: ms(10),
    alignItems: "center",
    justifyContent: "space-between",
  },
  filterIcon: {
    height: vs(22),
    width: ms(18),
  },
  tabButtonView: {
    borderRadius: 20,
    width: ms(65),
  },
  upperView: {
    paddingVertical: SH(5),
    width: "100%",
    backgroundColor: COLORS.inputBorder,
    paddingHorizontal: ms(10),
  },

  priceText: {
    color: COLORS.primary,
    fontFamily: Fonts.SemiBold,
    fontSize: SF(16),
    paddingLeft: SW(12),
  },
  categoryText: {
    color: COLORS.primary,
    fontFamily: Fonts.Regular,
    fontSize: SF(12),
  },
  categoryImages: {
    height: SW(22),
    width: SW(22),
    borderRadius: 11,
    marginRight: SW(2),
  },
  categoryTouchableView: {
    paddingLeft: SW(10),
    height: SH(40),
  },
  rowView: {
    flexDirection: "row",
    alignItems: "center",
  },
  subCategoryTextStyle: {
    color: COLORS.text,
    fontFamily: Fonts.Regular,
    fontSize: SF(16),
  },
  subCatTouchableView: {
    flexDirection: "row",
    paddingVertical: SH(10),
    alignItems: "center",
  },
  subCatImages: {
    height: SW(30),
    width: SW(30),
    borderRadius: SW(15),
  },
  modalContainer: {
    paddingVertical: SH(10),
    backgroundColor: COLORS.white,
    padding: SW(10),
    borderRadius: SW(10),
    ...ShadowStyles.shadow5,
  },
  servicesText: {
    color: COLORS.darkGrey,
    paddingVertical: SH(5),
    fontSize: SF(22),
  },
  rowCard: {
    flexDirection: "row",
    backgroundColor: COLORS.white,
    padding: SH(16),
    justifyContent: "space-between",
    borderBottomColor: COLORS.input_bg,
    borderBottomWidth: 1,
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  img: {
    height: SH(39),
    width: SW(36),
  },
  emptyImg: {
    height: SW(40),
    width: SW(40),
    borderWidth: SH(1),
    borderRadius: SW(20),
    borderColor: COLORS.black,
  },
  subName: {
    color: COLORS.text,
    fontFamily: Fonts.Medium,
    fontSize: SH(14),
    alignSelf: "center",
  },
});
