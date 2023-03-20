import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import { Fonts } from "@/assets";
import { COLORS, SF, SH, ShadowStyles, SW } from "@/theme";

export const styles = StyleSheet.create({
  headerRowView: {
    flexDirection: "row",
    width: Dimensions.get("window").width,
    ...ShadowStyles.shadow,
    backgroundColor: COLORS.white,
    height: SH(50),
    alignSelf: "center",
    alignItems: "center",
  },
  requestTitleStyle: {
    color: COLORS.dark_gray,
    fontSize: SF(16),
    fontFamily: Fonts.SemiBold,
    paddingLeft: SW(15),
  },
  container: {
    flex: 1,
    marginTop: SH(10),
    padding: SW(20),
  },
  requestKycButton: {
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end",
    flexDirection: "row",
    padding: SH(10),
    borderRadius: 5,
  },
  requestButtonText: {
    color: COLORS.white,
    fontSize: SF(16),
    fontFamily: Fonts.SemiBold,
  },
  verificationMsgStyle: {
    color: COLORS.text,
    fontSize: SF(13),
    fontFamily: Fonts.Regular,
  },
  reviewStatusContainer: {
    flexDirection: "row",
    width: Dimensions.get("window").width,
    marginTop: SH(50),
    backgroundColor: COLORS.white,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-between",
  },
  refreshView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    right: 20,
    backgroundColor: COLORS.transparent,
  },
  refreshIcon: {
    width: SW(18),
    height: SW(18),
    resizeMode: "contain",
    tintColor: COLORS.text,
  },
  refreshText: {
    fontFamily: Fonts.SemiBold,
    fontSize: SF(16),
    color: COLORS.primary,
    paddingLeft: 4,
  },
  statusViewStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: SW(10),
  },
  continueButtonStyle: {
    width: SW(100),
    borderWidth: 1,
    // height: SH(40),
    alignSelf: "flex-end",
    position: "absolute",
    borderWidth: 0,
    bottom: 10,
    backgroundColor: COLORS.transparent,
  },
  continueButtonText: {
    fontFamily: Fonts.SemiBold,
    fontSize: SF(12),
    color: COLORS.primary,
  },
});
