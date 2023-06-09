import React, { useEffect, useState } from "react";
import { View, Image, Text, FlatList, TouchableOpacity } from "react-native";
import { Button, ScreenWrapper, Spacer } from "@/components";
import { styles } from "./TrackPlacedOrder.styles";
import { COLORS, SH, SW } from "@/theme";
import { strings } from "@/localization";
import {
  dashedLineUp,
  mapViewLogo,
  ordersIcon,
  roundBlank,
  roundCheck,
  trackingMap,
} from "@/assets";
import { HeaderCoin } from "@/screens/Profile/Wallet/Components/HeaderCoin";
import { useSelector } from "react-redux";
import { getUser } from "@/selectors/UserSelectors";
import { getWallet } from "@/selectors/WalletSelector";
import { orderSelector } from "@/selectors/OrderSelector";
import moment from "moment";

export function TrackPlacedOrder({ route }) {
  const user = useSelector(getUser);
  const wallet = useSelector(getWallet);
  const order = useSelector(orderSelector);
  const [isModalVisible, setisModalVisible] = useState("");

  const inputDate = order?.getOneOrderDetail?.created_at;
  const formattedDate = moment(inputDate).format("DD MMM, YYYY || hh:mm A");

  useEffect(() => {
    setisModalVisible(true);
  }, []);

  const CurrentStatus = [
    {
      id: 1,
      title: strings.trackOrder.orderProcessing,
      status: "21 Jun,2022  | 10:30 am",
      statusLogo: roundCheck,
    },
  ];

  const Data = [
    {
      id: 1,
      title: strings.trackOrder.verifyCode,
      status: "---- ----",
      statusLogo: roundBlank,
    },
    {
      id: 2,
      title: strings.trackOrder.delivery,
      status: strings.trackOrder.withTenMin,
      statusLogo: roundBlank,
    },
    {
      id: 3,
      title: strings.trackOrder.inWarehouse,
      status: strings.trackOrder.withTenMin,
      statusLogo: roundBlank,
    },
    {
      id: 4,
      title: strings.trackOrder.productPickup,
      status: strings.trackOrder.withTenMin,
      statusLogo: roundBlank,
    },
    {
      id: 5,
      title: strings.trackOrder.pickedByDhl,
      status: strings.trackOrder.withTenMin,
      statusLogo: roundBlank,
    },
    {
      id: 6,
      title: strings.trackOrder.orderProcessing,
      status: "21 Jun,2022  | 10:30 am",
      statusLogo: roundCheck,
    },
    {
      id: 7,
      title: strings.trackOrder.orderAccepted,
      status: "21 Jun,2022  | 10:30 am",
      statusLogo: roundCheck,
    },
  ];

  const renderItem = ({ item, index }) => {
    return (
      <>
        <View style={{ flexDirection: "row", marginBottom: SW(5) }}>
          <View style={{ alignItems: "center" }}>
            {index === 0 ? null : (
              <Image
                source={dashedLineUp}
                resizeMode="contain"
                style={{
                  height: SH(45),
                  width: SW(20),
                  tintColor: index <= 4 ? COLORS.secondary : COLORS.primary,
                }}
              />
            )}
            {index >= 5 ? (
              <Image
                source={roundCheck}
                resizeMode="contain"
                style={styles.checkLogo}
              />
            ) : (
              <Image
                source={roundBlank}
                resizeMode="contain"
                style={styles.checkLogo}
              />
            )}
          </View>

          <View style={styles.textAlignStyle}>
            <Text
              style={[
                styles.titleText,
                { color: index <= 4 ? COLORS.secondary : COLORS.darkGrey },
              ]}
            >
              {item.title}
            </Text>
            <Text
              style={[
                styles.statusText,
                { color: index <= 4 ? COLORS.secondary : COLORS.text },
              ]}
            >
              {item.status}
            </Text>
          </View>
        </View>
      </>
    );
  };
  const allStatus = () => {
    return (
      <>
        <View style={{ flexDirection: "row", marginBottom: SW(5) }}>
          <View style={{ alignItems: "center" }}>
            <Image
              source={dashedLineUp}
              resizeMode="contain"
              style={{
                height: SH(45),
                width: SW(20),
                tintColor:
                  order?.getOneOrderDetail?.status > 0
                    ? COLORS.primary
                    : "grey",
              }}
            />

            <Image
              source={
                order?.getOneOrderDetail?.status > 0 ? roundCheck : roundBlank
              }
              resizeMode="contain"
              style={styles.checkLogo}
            />
          </View>

          <View style={styles.textAlignStyle}>
            <Text style={[styles.titleText, { color: COLORS.darkGrey }]}>
              {strings.trackOrder.orderAccepted}
            </Text>
            <Text style={[styles.statusText]}>{formattedDate}</Text>
          </View>
        </View>
      </>
    );
  };
  const renderCurrentStatus = ({ item, index }) => (
    <>
      <View style={{ flexDirection: "row", marginBottom: SH(42) }}>
        <View style={{ alignItems: "center", justifyContent: "flex-end" }}>
          <Image
            source={roundCheck}
            resizeMode="contain"
            style={styles.checkLogo}
          />
        </View>

        <View style={styles.textAlignStyle}>
          <Text style={[styles.titleText, { color: COLORS.darkGrey }]}>
            {item.title}
          </Text>
          <Text style={[styles.statusText, { color: COLORS.text }]}>
            {item.status}
          </Text>
        </View>
      </View>
    </>
  );

  return (
    <ScreenWrapper>
      <HeaderCoin title={strings.trackOrder.trackYourOrder} amount={"0"} />

      <View style={styles.mainContainer}>
        <View>
          <Image
            source={trackingMap}
            resizeMode="cover"
            style={{ width: "100%", height: "100%" }}
          />
        </View>

        <View style={{ position: "absolute", alignSelf: "center" }}>
          <View
            style={[
              styles.mainModal,
              { marginTop: isModalVisible == true ? SH(100) : SH(520) },
            ]}
          >
            <View style={styles.modalHeader}>
              <Text style={styles.headingText}>
                {strings.trackOrder.orderStatus}
              </Text>

              <TouchableOpacity
                style={styles.buttonView}
                onPress={() => setisModalVisible(!isModalVisible)}
              >
                <Image
                  source={isModalVisible == true ? mapViewLogo : ordersIcon}
                  resizeMode="contain"
                  style={styles.mapLogoStyle}
                />
                <Text style={styles.buttonSmallText}>
                  {isModalVisible == true
                    ? strings.trackOrder.map
                    : strings.trackOrder.order}
                </Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.subHeadingText}>
              {strings.trackOrder.preparingYourOrder}
            </Text>

            <Spacer space={SH(5)} />

            <View style={styles.bottomLine}></View>

            <Spacer space={SH(5)} />
            {/* {isModalVisible ? (
              <View style={{ paddingHorizontal: SW(15) }}>
                <FlatList
                  renderItem={renderItem}
                  data={Data}
                  keyExtractor={(item) => item.id}
                />
              </View>
            ) : (
              <View style={{ paddingHorizontal: SW(15) }}>
                <FlatList
                  renderItem={renderCurrentStatus}
                  data={CurrentStatus}
                  keyExtractor={(item) => item.id}
                />
              </View>
            )} */}
            {allStatus()}
          </View>
        </View>
        <Spacer />
        <View
          style={{
            position: "absolute",
            flex: 1,
            top: SH(700),
            width: "100%",
            paddingHorizontal: SW(20),
          }}
        >
          <Button title={"Go to Homepage"} />
        </View>
      </View>
    </ScreenWrapper>
  );
}
