import { Fonts } from "@/assets";
import { ShadowStyles } from "@/theme";
import { COLORS } from "@/theme/Colors";
import { SF, SH, SW } from "@/theme/ScalerDimensions";
import { Dimensions, StyleSheet } from "react-native";
import {
  moderateScale,
  ms,
  s,
  scale,
  verticalScale,
  vs,
} from "react-native-size-matters";
import { Colors } from "react-native/Libraries/NewAppScreen";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 40,
  },
  headerText: {
    fontFamily: Fonts.SemiBold,
    color: COLORS.black,
    fontSize: s(14),
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
  crossIcon: {
    height: SH(35),
    width: SW(40),
  },
  mainContainer: {
    backgroundColor: COLORS.white,
    paddingHorizontal: SW(18),
    paddingVertical: SH(5),
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
    backgroundColor: COLORS.activeTab,
    borderWidth: 0,
  },
  buttonTextStyle: {
    color: COLORS.white,
  },
  deliveryView: {
    backgroundColor: COLORS.inputBorder,
    height: SH(100),
    borderRadius: SH(12),
    justifyContent: "center",
    paddingHorizontal: SW(10),
    marginHorizontal: 1,
  },
  inputAddressView: {
    flex: 1.5,
    backgroundColor: COLORS.activeTab,
    marginTop: 5,
  },
  walletView: {
    flex: 1,
    backgroundColor: COLORS.activeTab,
    marginTop: 5,
  },
  flatlistView: {
    flex: 1,
    backgroundColor: COLORS.activeTab,
    marginTop: 5,
  },
  truckIcon: {
    height: SH(50),
    width: SW(50),
  },
  deliveryViewText: {
    paddingHorizontal: SW(10),
  },
  deliveryTime: {
    fontFamily: Fonts.MaisonRegular,
    margin: 1,
    color: COLORS.light_grey,
    fontSize: SF(14),
  },
  deliveryName: {
    color: COLORS.black,
    fontFamily: Fonts.Bold,
    margin: 1,
  },
  estimatedDelivery: {
    color: COLORS.grey,
    fontFamily: Fonts.Regular,
    margin: 1,
  },
  deliveryDays: {
    textDecorationLine: "underline",
    textDecorationColor: COLORS.black,
    color: COLORS.activeTab,
    margin: 1,
  },
  deliveryViewDirection: {
    flexDirection: "row",
    alignItems: "center",
  },
  addressView: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    justifyContent: "center",
    marginHorizontal: 1,

    paddingVertical: SH(10),
    paddingHorizontal: SW(10),
  },
  addIcon: {
    height: SH(25),
    width: SW(25),
    marginHorizontal: SW(5),
  },
  addAddressText: {
    color: COLORS.activeTab,
  },
  jobrWalletView: {
    backgroundColor: COLORS.white,
    ...ShadowStyles.shadow2,
    height: SH(100),
    borderRadius: 10,
    marginHorizontal: 1,
  },
  jbrText: {
    fontFamily: Fonts.Regular,
  },
  walletInfoView: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    justifyContent: "space-between",
  },
  walletInnerView: {
    flexDirection: "row",
    alignItems: "center",
  },
  walletIcons: {
    height: 25,
    width: 25,
    marginRight: SW(4),
  },
  orderedProductsView: {
    backgroundColor: COLORS.white,
    height: SH(300),
    flex: 1,
    borderRadius: 10,
    marginHorizontal: 1,
    ...ShadowStyles.shadow2,
    marginBottom: 1,
  },
  orderDetailsHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: SH(10),
    paddingHorizontal: SW(15),
  },
  ordetDetailsIcon: {
    height: SH(22),
    width: SW(22),
    marginRight: SW(5),
  },
  orderDetailsText: {
    fontFamily: Fonts.SemiBold,
    color: COLORS.black,
  },
  flatlistItems: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: SH(10),
  },
  quantityText: {
    color: COLORS.darkGrey2,
    fontFamily: Fonts.Regular,
    fontSize: SF(12),
  },
  lightText: {
    fontFamily: Fonts.Regular,
    color: COLORS.secondary,
  },
  borderLine: {
    borderBottomWidth: 0.5,
    borderColor: COLORS.secondary,
  },
  pricesView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  pricesText: {
    fontFamily: Fonts.Regular,
    color: COLORS.darkGrey,
  },
  deliveryPriceText: {
    fontFamily: Fonts.Regular,
    color: COLORS.activeTab,
    textDecorationLine: "underline",
    textDecorationColor: COLORS.activeTab,
  },
  totalPriceText: {
    fontFamily: Fonts.Bold,
    color: COLORS.darkGrey,
    fontSize: SF(15),
  },
  bottomButtonView: {
    flex: 1,
    justifyContent: "flex-end",

    marginBottom: SH(20),
  },
  missingAddressButton: {
    backgroundColor: COLORS.secondary,
    height: SH(75),
    borderRadius: 5,
  },
  missingAddressButtonView: {
    flex: 1,
    paddingHorizontal: SW(20),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  box: {
    height: SH(43),
    width: SW(60),
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.white,
    borderRadius: 14,
  },
  placeOrderText: {
    fontFamily: Fonts.Bold,
    color: COLORS.white,
    fontSize: SF(16),
  },
  rowContainer: {
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateScale(5),
  },
  Container: {
    backgroundColor: COLORS.white,
    borderTopLeftRadius: moderateScale(20),
    borderTopRightRadius: moderateScale(20),
    ...ShadowStyles.shadow,
    flex: 1,
  },

  iconcontainer: {
    alignSelf: "center",
    backgroundColor: COLORS.primary,
    borderRadius: ms(25),
    flexDirection: "row",
    paddingHorizontal: ms(10),
    paddingVertical: vs(5),
    justifyContent: "center",
  },

  mask: {
    tintColor: COLORS.primary,
    height: 16,
    width: 16,
    alignSelf: "center",
    margin: 10,
  },

  getName: {
    color: COLORS.white,
    fontFamily: Fonts.SemiBold,
    fontSize: s(13),
  },
  text: {
    color: COLORS.white,
    fontFamily: Fonts.Medium,
    fontSize: s(12),
  },

  formText: {
    fontFamily: Fonts.SemiBold,
    fontSize: s(14),
    color: COLORS.primary,
    alignSelf: "center",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowView: {
    flexDirection: "row",
    alignItems: "center",
  },

  img: {
    height: SH(24),
    width: Platform.OS == "ios" ? SW(24) : SW(22),
  },

  rowCard: {
    backgroundColor: COLORS.primary,
    borderRadius: ms(10),
    padding: ms(12),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowMainCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: ms(40),
    marginVertical: vs(5),
    borderWidth: 2,
    borderColor: COLORS.primary,
    padding: 5,
    justifyContent: "space-between",
    marginHorizontal: ms(20),
  },

  renderinput: {
    borderRadius: ms(35),
    paddingHorizontal: SH(20),
    paddingVertical: SH(15),
    flexDirection: "row",
    backgroundColor: COLORS.primary,
    width: 140,
  },
  alignSelf: {
    alignSelf: "center",
  },
  walletCorner: {
    // width:SW(110),
    // height:SW(110),
    width: 76,
    height: 90,
    resizeMode: "contain",
    borderTopRightRadius: 10,
    position: "absolute",
    top: 0,
    right: 0,
  },
  closeText: {
    color: COLORS.white,
    fontSize: SF(16),
    fontFamily: Fonts.SemiBold,
  },
  headingRowView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: ms(20),
  },
  walletText: {
    color: COLORS.black,
    fontFamily: Fonts.MaisonMonoBold,
    fontSize: vs(16),
  },
  coinIcon: {
    height: vs(40),
    width: ms(50),
  },
  referralView: {
    backgroundColor: COLORS.activeTab,
    height: vs(110),
    borderRadius: 10,
    flexDirection: "row",
  },
  refferalBigText: {
    marginTop: vs(7),
    color: COLORS.white,
    fontFamily: Fonts.SemiBold,
    fontSize: s(16),
  },
  refferalsmallText: {
    marginTop: vs(5),
    color: COLORS.white,
    fontFamily: Fonts.Regular,
    fontSize: s(12),
  },
  shareButton: {
    marginLeft: ms(20),
    borderWidth: 1,
    height: vs(25),
    width: ms(60),
    alignItems: "center",
    justifyContent: "center",
    borderColor: COLORS.white,
    borderRadius: 5,
  },
  shareText: { color: COLORS.white, fontFamily: Fonts.Regular },
  cornerImage: {
    position: "absolute",
    top: 0,
    right: 0,
    height: vs(80),
    width: ms(74),
  },
  agreementText: {
    color: COLORS.darkGrey2,
    fontFamily: Fonts.Regular,
    fontSize: s(11),
    textAlign: "justify",
  },
  scrollViewStyle: {
    backgroundColor: "white",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingTop: verticalScale(20),
  },
  modalCloseView: {
    backgroundColor: "#999999",
    paddingBottom: vs(10),
    paddingHorizontal: ms(20),
    alignItems: "flex-end",
  },
  textStyle: {
    fontFamily: Fonts.SemiBold,
    fontSize: ms(14),
    color: COLORS.white,
  },
  locationIcon: {
    tintColor: COLORS.primary,
    height: SH(30),
    width: SW(20),
  },
  map: {
    height: SH(75),
    width: SW(120),
    alignSelf: "center",
    justifyContent: "center",
  },
  shippingAddressTitle: {
    fontSize: SF(15),
    color: COLORS.darkGrey,
    fontFamily: Fonts.SemiBold,
  },
  addressText: {
    fontSize: SF(13),
    fontFamily: Fonts.Regular,
    color: COLORS.darkGrey2,
  },
  //modal
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalFilter: {
    position: "absolute",
    width: "86%",
    backgroundColor: "white",
    borderRadius: moderateScale(16),
  },
  formCont: {
    alignItems: "center",
    flex: 1,
  },
  subHeading: {
    fontSize: scale(24),
    fontFamily: Fonts.MaisonMonoBold,
    color: "#1FB3FF",
    alignItems: "center",
  },
  field: {
    fontSize: scale(14),
    fontFamily: Fonts.Medium,
    color: COLORS.text,
    alignItems: "center",
  },
  vectorImg: {
    height: SH(54),
    width: SW(40),
    tintColor: "#1FB3FF",
  },
  waitImg: {
    height: SH(54),
    width: SW(50),
  },
  subfieldHeading: {
    fontSize: scale(18),
    fontFamily: Fonts.MaisonMonoBold,
    color: COLORS.black,
    alignItems: "center",
  },
  formContent: {
    alignItems: "center",
    justifyContent: "center",
    padding: moderateScale(16),
    backgroundColor: "#1FB3FF",
    borderBottomEndRadius: moderateScale(16),
    borderBottomStartRadius: moderateScale(16),
  },
  fieldHeading: {
    fontSize: scale(14),
    fontFamily: Fonts.SemiBold,
    color: COLORS.white,
    alignItems: "center",
  },
  // modal end
});
