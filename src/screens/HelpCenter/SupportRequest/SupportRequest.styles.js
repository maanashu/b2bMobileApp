import { StyleSheet, Dimensions } from "react-native";
import { SH, SW, COLORS, SF, ShadowStyles } from "@/theme";
import { Fonts } from "@/assets";
import { moderateScale, verticalScale } from "react-native-size-matters";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  maincontainer: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: COLORS.white,
    alignItems: "center",
    height: SH(50),
    paddingHorizontal: moderateScale(10),
    justifyContent: "space-between",
  },
  container: {
    backgroundColor: COLORS.white,
    height: SH(50),
    ...ShadowStyles.shadow,
    marginHorizontal: moderateScale(-12),
  },
  iconcontainer: {
    right: SW(10),
    position: "absolute",
    alignSelf: "center",
    backgroundColor: COLORS.primary,
    borderRadius: moderateScale(25),
    flexDirection: "row",
    paddingHorizontal: moderateScale(10),
    paddingVertical: verticalScale(5),
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: SF(14),
    color: COLORS.dark_gray,
    fontFamily: Fonts.SemiBold,
  },
  image: {
    // alignSelf: 'center',
    height: SH(20),
    width: SW(20),
    resizeMode: "contain",
  },
  subTitles: {
    fontSize: SF(14),
    color: COLORS.white,
    fontFamily: Fonts.Medium,
    alignSelf: "center",
    paddingHorizontal: 4,
  },

  headerIcon: {
    width: SW(28),
    height: SH(24),
  },
  coinContainer: {
    backgroundColor: COLORS.primary,
    flexDirection: "row",
    paddingVertical: verticalScale(4),
    paddingHorizontal: moderateScale(10),
    borderRadius: 16,
  },
  bodyContainer: {
    marginHorizontal: moderateScale(5),
  },
  tabButtonView: {
    borderWidth: 1,
    borderRadius: 7,
    marginBottom: SH(8),
    paddingVertical: 6,
    justifyContent: "center",
  },

  tabView: {
    marginVertical: verticalScale(8),
  },
});
