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
    marginVertical: SH(5),
    flex: 1,
    backgroundColor: COLORS.white,
  },
  chatViewContainer: {
    marginHorizontal: SW(20),
    flex: 1,
    backgroundColor: COLORS.white,
  },
  chattingIcon: {
    height: 25,
    width: 25,
    marginRight: SW(8),
  },
  bottomOptionsView: {
    marginTop: SH(15),
    backgroundColor: COLORS.inputBorder,
    paddingHorizontal: SW(20),
    paddingVertical: SH(20),
  },
  optionText: {
    textAlign: "center",
    fontFamily: Fonts.MaisonRegular,
    fontSize: SF(11),
    color: COLORS.light_grey,
  },
  crossIconView: {
    alignItems: "flex-end",
  },
  iconStyle: {
    height: SW(30),
    width: SW(30),
  },
  cameraView: {
    flexDirection: "row",
    alignItems: "center",
  },
  cameraText: {
    fontFamily: Fonts.SemiBold,
    fontSize: SF(16),
    paddingHorizontal: SW(10),
    color: COLORS.darkGrey,
  },
  cameraIcons: {
    tintColor: "black",
    height: SW(25),
    width: SW(30),
  },
  borderline: {
    borderBottomWidth: 1,
    borderColor: COLORS.placeHolder,
    marginVertical: SH(10),
  },
  quickReplyText: {
    fontFamily: Fonts.Regular,
    color: COLORS.darkGrey,
    fontSize: SF(16),
  },
});
