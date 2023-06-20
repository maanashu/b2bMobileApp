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
  mainContainer: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    // paddingHorizontal: SW(20),
    paddingVertical: SH(5),
  },
  inputCoupon: {
    borderBottomWidth: 0,
    backgroundColor: COLORS.placeholder,
    borderRadius: ms(5),
    paddingVertical: SH(10),
    paddingHorizontal: SW(15),
  },
  Button: {
    borderWidth: 1,
    backgroundColor: COLORS.white,
    borderColor: COLORS.primary,
    height: SH(45),
  },
  buttonTextStyle: {
    color: COLORS.primary,
  },
  tabButtonView: {
    borderRadius: 20,
    width: ms(55),
  },
  upperView: {
    paddingVertical: SH(5),
    width: "100%",
    backgroundColor: "#F9F9F9",
    paddingHorizontal: ms(10),
  },
  rowView: {
    flexDirection: "row",
    alignItems: "center",
  },
  categoryTouchableView: {
    paddingLeft: SW(10),
  },
  categoryImages: {
    height: SW(22),
    width: SW(22),
    borderRadius: 11,
    marginRight: SW(2),
  },
  sectionHeaderName: {
    color: COLORS.darkGrey,
    fontSize: SF(18),
    fontFamily: Fonts.Regular,
  },
  productImageStyle: {
    height: SH(120),
    width: SW(100),
  },
  productName: {
    color: COLORS.darkGrey,
    fontFamily: Fonts.Regular,
    fontSize: SF(15),
    paddingHorizontal: 5,
  },
  Item: {
    backgroundColor: "white",
    paddingBottom: SH(15),
    width: SW(130),
    alignItems: "center",
    borderRadius: SW(8),
  },
  couponView: {
    paddingHorizontal: 20,
    backgroundColor: "#F9F9F9",
  },
  addCoupon: {
    textAlign: "center",
    fontSize: SF(11),
    fontFamily: Fonts.Medium,
    color: COLORS.primary,
    marginLeft: SW(8),
  },
  coupon: {
    width: SW(16),
    aspectRatio: 1,
    resizeMode: "contain",
  },
  addCouponView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  seprator: {
    width: SW(1),
    height: SH(34),
    backgroundColor: COLORS.silver,
  },
  text2: {
    textAlign: "center",
    fontSize: SF(9),
    fontFamily: Fonts.MaisonMono,
    color: COLORS.darkGrey2,
  },
  text: {
    textAlign: "center",
    fontSize: SF(13),
    fontFamily: Fonts.SemiBold,
    color: COLORS.darkGrey,
  },
  subContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    alignSelf: "center",
    paddingVertical: SH(10),
    marginHorizontal: SW(16),
    marginTop: SH(16),
    borderRadius: SW(5),
    alignItems: "center",
  },
  flex: {
    flex: 1,
  },
});
