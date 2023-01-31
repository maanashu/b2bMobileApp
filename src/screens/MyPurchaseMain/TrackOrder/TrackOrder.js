import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Modal,
} from "react-native";
import {
  Button,
  CompanyDetailView,
  NameHeader,
  ScreenWrapper,
  Spacer,
} from "@/components";
import { styles } from "./TrackOrder.styles";
import { COLORS, SF, SH, SW } from "@/theme";
import { strings } from "@/localization";
import {
  backArrow,
  chatNow,
  dashedLineUp,
  deliveryMap,
  deliveryTruck,
  Fonts,
  forward,
  location,
  mapViewLogo,
  orderDetails,
  ordersIcon,
  roundBlank,
  roundCheck,
  trackingMap,
} from "@/assets";
import { HeaderCoin } from "@/screens/Profile/Wallet/Components/HeaderCoin";

export function TrackOrder({ route }) {
  const [isModalVisible, setisModalVisible] = useState("");

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
      title: strings.trackOrder.madepayment,
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

  const renderCurrentStatus = ({ item, index }) => (
    <>
      <View style={{ flexDirection: "row", marginBottom: SW(5) }}>
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
            {isModalVisible ? (
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
            )}
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
}
