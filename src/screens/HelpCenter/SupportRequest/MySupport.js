import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Spacer } from "@/components";
import { strings } from "@/localization";
import { theme, SH, SW, COLORS, SF } from "@/theme";
import { Fonts } from "@/assets";
import { userPhoto } from "@/assets";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { NAVIGATION } from "@/constants";
import { navigate } from "@/navigation/NavigationRef";

export function MySupport() {
  return (
    <View style={styles.sopportContainer}>
      <TouchableOpacity onPress={() => navigate(NAVIGATION.supportDetails)}>
        <View style={styles.orderCon}>
          <Text style={styles.order}>{"#XD1256P67"}</Text>

          <TouchableOpacity>
            <Text style={styles.deliveredText}>
              {strings.helpCenter.pending}
            </Text>
          </TouchableOpacity>
        </View>

        <Spacer space={SH(10)} />

        <View style={styles.hr}></View>

        <Spacer space={SH(5)} />

        <View style={styles.secondCon}>
          <View style={styles.aboutPayment}>
            <Text style={styles.supportText}>{strings.helpCenter.subject}</Text>

            <Spacer space={SH(8)} />

            <Text style={styles.paymentIssue}>
              {strings.helpCenter.paymentIssue}
            </Text>

            <Spacer space={SH(5)} />

            <Text style={styles.description}>
              {strings.helpCenter.issueMessage}
            </Text>
          </View>

          <Spacer space={SH(5)} />

          <View style={styles.hr}></View>

          <Spacer space={SH(10)} />

          <View style={{ display: "flex", flexDirection: "column" }}>
            <Text style={styles.pickUpText}>
              {strings.helpCenter.lastRespond}
            </Text>

            <Spacer space={SH(8)} />

            <View style={{ display: "flex", flexDirection: "row" }}>
              <Image source={userPhoto} style={styles.manLogo} />
              <View style={{ paddingHorizontal: 7 }}>
                <Text style={styles.deliverManText}>{"Satomi D."}</Text>
                <Text style={styles.address}>{"13 Jun, 2022  |   12:25p"}</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  sopportContainer: {
    borderWidth: 1,
    borderColor: COLORS.light_border,
    width: "100%",
    paddingTop: SH(15),

    paddingBottom: SH(30),
    borderRadius: 15,
    padding: 15,
  },
  orderCon: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  order: {
    fontSize: SF(18),
    fontWeight: "700",
    color: COLORS.black,
    fontFamily: Fonts.MaisonRegular,
  },
  timeCon: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  time: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    borderWidth: 1,
    paddingVertical: verticalScale(5),
    paddingHorizontal: moderateScale(13),
    borderRadius: 14,
    borderColor: "#E1E8FF",
  },
  image: {
    width: SW(15),
    height: SW(15),
    marginVertical: verticalScale(2),
  },
  pendingBtn: {
    paddingVertical: verticalScale(5),
    paddingHorizontal: moderateScale(15),
    borderRadius: 14,
    textAlign: "center",
  },
  hr: {
    backgroundColor: COLORS.light_border,
    width: SW(315),
    height: SW(1),
    marginVertical: verticalScale(5),
  },
  pickupCon: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  firstCon: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  secondCon: {
    display: "flex",
    flexDirection: "column",
  },
  pickUpText: {
    fontWeight: "600",
    fontSize: SF(12),
    fontFamily: Fonts.Regular,
    color: COLORS.text,
  },
  address: {
    fontFamily: Fonts.Regular,
    fontSize: SF(12),
    color: COLORS.text,
  },
  manLogo: {
    width: SW(30),
    height: SW(30),
    marginVertical: verticalScale(4),
  },
  deliverManText: {
    fontFamily: Fonts.Regular,
    fontSize: SF(15),
    color: COLORS.black,
  },
  circleLogo: {
    width: SW(20),
    height: SW(20),
  },
  coloredLogo: {
    width: SW(22),
    height: SW(22),
  },
  verifiedLogo: {
    width: SW(17),
    height: SW(21),
  },
  lineArrow: {
    height: SH(50),
    width: SW(7),
  },
  verifiedCon: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  verifiedBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  verifiesText: {
    color: COLORS.dark_gray,
    fontSize: scale(12),
  },
  supportText: {
    fontSize: SF(12),
    fontFamily: Fonts.Regular,
    color: COLORS.text,
  },
  paymentIssue: {
    fontSize: SF(14),
    color: COLORS.text,
    fontFamily: Fonts.SemiBold,
  },
  description: {
    fontSize: SF(14),
    color: COLORS.text,
    fontFamily: Fonts.Regular,
  },
  deliveredText: {
    backgroundColor: COLORS.orange,
    paddingVertical: SH(3),
    paddingHorizontal: SW(10),
    borderRadius: 3,
    textAlign: "center",
    fontSize: SF(12),
    color: COLORS.blue,
    fontFamily: Fonts.Regular,
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: COLORS.blue,
  },
});
// import { View, Text } from "react-native";
// import React from "react";

// export function MySupport() {
//   return (
//     <View>
//       <Text>MySupport</Text>
//     </View>
//   );
// }
