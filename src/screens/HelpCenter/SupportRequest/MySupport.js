import React from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { ScreenWrapper, Spacer } from "@/components";
import { strings } from "@/localization";
import { theme, SH, SW, COLORS, SF } from "@/theme";
import { Fonts } from "@/assets";
import { userPhoto } from "@/assets";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { NAVIGATION } from "@/constants";
import { navigate } from "@/navigation/NavigationRef";
import { useDispatch, useSelector } from "react-redux";
import { SupportSelector } from "@/selectors/SupportSelectors";
export function MySupport() {
  const dispatch = useDispatch();

  const supportList = useSelector(SupportSelector);
  console.log("support list", supportList?.support);
  const array = supportList?.support;

  const renderComItem = ({ item }) => {
    const agentProfile = item?.user_id_details?.profile_photo;
    const name =
      item?.user_id_details?.firstname + " " + item?.user_id_details?.lastname;
    const date = new Date(item?.created_at);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const getTime = date.getHours();
    const getMin = date.getMinutes();
    const time = getTime > 12 ? "pm" : "am";
    const finalDateTime =
      day +
      " " +
      month +
      " " +
      year +
      " " +
      " " +
      "|" +
      " " +
      getTime +
      ":" +
      getMin +
      time;
    return (
      <View style={{ flexDirection: "row" }}>
        <Image
          source={agentProfile ? { uri: agentProfile } : Images.userPic}
          style={styles.manLogo}
        />
        <View style={{ paddingHorizontal: 7 }}>
          <Text style={styles.deliverManText}>{name}</Text>
          <Text style={styles.address}>{finalDateTime}</Text>
        </View>
      </View>
    );
  };

  const renderItem = ({ item, index }) => {
    const a = item?.track_number;
    const result = a.slice(0, 8);
    const track = result.toUpperCase();
    return (
      <>
        <View style={styles.sopportContainer}>
          <View style={styles.orderCon}>
            <Text style={styles.order}>{"#" + track}</Text>

            <View>
              <Text style={styles.deliveredText}>
                {item?.status?.name === "Unresponse"
                  ? "Pending"
                  : item?.status?.name}
              </Text>
            </View>
          </View>

          <Spacer space={SH(10)} />

          <View style={styles.hr}></View>

          <Spacer space={SH(5)} />

          <View style={styles.secondCon}>
            <View style={styles.aboutPayment}>
              <Text style={styles.supportText}>
                {strings.helpCenter.subject}
              </Text>

              <Spacer space={SH(8)} />

              <Text style={styles.paymentIssue}>{item?.subject?.name}</Text>

              <Spacer space={SH(5)} />

              <Text style={styles.description}>{item?.notes}</Text>
            </View>

            <Spacer space={SH(5)} />

            {/* <View style={{ display: "flex", flexDirection: "column" }}>
                <Text style={styles.pickUpText}>
                  {strings.helpCenter.lastRespond}
                </Text>

                <Spacer space={SH(8)} />

                <View style={{ display: "flex", flexDirection: "row" }}>
                  <Image source={userPhoto} style={styles.manLogo} />
                  <View style={{ paddingHorizontal: 7 }}>
                    <Text style={styles.deliverManText}>{"Satomi D."}</Text>
                    <Text style={styles.address}>
                      {"13 Jun, 2022  |   12:25p"}
                    </Text>
                  </View>
                </View>
              </View> */}

            {item?.support_comments?.length > 0 ? (
              <View style={styles.hr}></View>
            ) : null}

            {item?.support_comments?.length > 0 ? (
              <Text style={styles.pickUpText}>
                {strings.mySupport.lastRespond}
              </Text>
            ) : null}

            <Spacer space={SH(5)} />
            <View style={{ display: "flex", flexDirection: "column" }}>
              <Spacer space={SH(18)} backgroundColor={COLORS.transparent} />

              {item?.support_comments?.length > 0 ? (
                <FlatList
                  data={item?.support_comments}
                  renderItem={renderComItem}
                />
              ) : null}
            </View>
          </View>
        </View>

        <Spacer space={SH(10)} />
      </>
    );
  };

  const renderEmptyContainer = () => {
    return (
      <View
        style={
          array?.length > 0 ? styles.emptyListViewStyle : styles.emptyListView
        }
      >
        <Text style={styles.emptyListText}>
          {strings.successMessages.emptyList}
        </Text>
      </View>
    );
  };
  return (
    <ScreenWrapper>
      <View>
        <FlatList
          contentContainerStyle={{
            justifyContent: array?.length > 0 ? "flex-start" : "center",
          }}
          data={array}
          extraData={array}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={renderEmptyContainer}
          ListHeaderComponent={() => (
            <View
              style={{ marginTop: 10, backgroundColor: COLORS.transparent }}
            />
          )}
        />
      </View>
    </ScreenWrapper>
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
    backgroundColor: COLORS.white,
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
