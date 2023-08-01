import React, { useEffect, useRef, useState } from "react";
import { View, Image, Text, FlatList, TouchableOpacity } from "react-native";
import { Button, NameHeaderCoins, ScreenWrapper, Spacer } from "@/components";
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
import { useSelector } from "react-redux";
import { getUser } from "@/selectors/UserSelectors";
import { getWallet } from "@/selectors/WalletSelector";
import { orderSelector } from "@/selectors/OrderSelector";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";
import { NAVIGATION } from "@/constants";
import { Components } from "./Components";
import MapView, { Marker, PROVIDER_GOOGLE, Polyline } from "react-native-maps";
import { Dimensions } from "react-native";
import MapViewDirections from "react-native-maps-directions";

export function TrackPlacedOrder({ route }) {
  const { width, height } = Dimensions.get("window");
  const mapRef = useRef();
  const navigation = useNavigation();
  const user = useSelector(getUser);
  const wallet = useSelector(getWallet);
  const order = useSelector(orderSelector);
  const [isModalVisible, setisModalVisible] = useState("");

  const inputDate = order?.getOneOrderDetail?.created_at;
  const formattedDate = moment(inputDate).format("DD MMM, YYYY || hh:mm A");

  const ASPECT_RATIO = width / height;
  const LATITUDE_DELTA = 0.4689;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

  const sourceCoordinate = {
    latitude: user?.savedAddress?.latitude,
    longitude: user?.savedAddress?.longitude,
  };
  const destinationCoordinates =
    order?.getOneOrderDetail?.seller_details?.seller_location;
  const destinationCoordinate = {
    latitude: destinationCoordinates?.[1],
    longitude: destinationCoordinates?.[0],
  };
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

  const renderCurrentStatus = ({ item, index }) => (
    <>
      <View style={{ flexDirection: "row", marginBottom: SH(3) }}>
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
        </View>
      </View>
    </>
  );
  const polylineCoordinates = [sourceCoordinate, destinationCoordinate];
  return (
    <ScreenWrapper>
      <NameHeaderCoins backRequired title={strings.trackOrder.trackYourOrder} />
      <View style={styles.mainContainer}>
        <View>
          {/* <Image
            source={trackingMap}
            resizeMode="cover"
            style={{ width: "100%", height: "100%" }}
          /> */}
        </View>
        <MapView
          ref={mapRef}
          provider={PROVIDER_GOOGLE}
          showsCompass
          zoomEnabled
          showsMyLocationButton
          // initialRegion={{
          //   latitude: latitude,
          //   longitude: longitude,
          //   latitudeDelta: 0.00722,
          //   longitudeDelta: 0.00721,
          // }}
          region={{
            latitude: user?.savedAddress?.latitude,
            longitude: user?.savedAddress?.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
          style={styles.map}
        >
          <Marker coordinate={sourceCoordinate} />
          <Marker coordinate={destinationCoordinate} />
          <MapViewDirections
            origin={{
              latitude: user?.savedAddress?.latitude,
              longitude: user?.savedAddress?.longitude,
            }}
            destination={{
              latitude: destinationCoordinates?.[1],
              longitude: destinationCoordinates?.[0],
            }}
            apikey={PROVIDER_GOOGLE}
            strokeWidth={3}
            strokeColor={COLORS.primary}
          />
        </MapView>

        <View style={{ position: "absolute", alignSelf: "center" }}>
          <View
            style={[
              styles.mainModal,
              { marginTop: isModalVisible == true ? SH(230) : SH(500) },
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
            {/* {allStatus()}
             */}
            {isModalVisible ? (
              <>
                <Components
                  title={strings?.trackOrder?.delivered}
                  source={
                    order?.getOneOrderDetail?.status === 5
                      ? roundCheck
                      : roundBlank
                  }
                  tintColor={
                    order?.getOneOrderDetail?.status === 5
                      ? COLORS.primary
                      : COLORS.secondary
                  }
                />
                <Components
                  title={strings?.trackOrder?.pickedUp}
                  source={
                    order?.getOneOrderDetail?.status >= 4
                      ? roundCheck
                      : roundBlank
                  }
                  tintColor={
                    order?.getOneOrderDetail?.status >= 4
                      ? COLORS.primary
                      : COLORS.secondary
                  }
                />
                <Components
                  title={strings?.trackOrder?.readyToPickup}
                  source={
                    order?.getOneOrderDetail?.status >= 3
                      ? roundCheck
                      : roundBlank
                  }
                  tintColor={
                    order?.getOneOrderDetail?.status >= 3
                      ? COLORS.primary
                      : COLORS.secondary
                  }
                />
                <Components
                  title={strings?.trackOrder?.orderAccepted}
                  source={
                    order?.getOneOrderDetail?.status >= 1
                      ? roundCheck
                      : roundBlank
                  }
                  tintColor={
                    order?.getOneOrderDetail?.status >= 1
                      ? COLORS.primary
                      : COLORS.secondary
                  }
                />
              </>
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
          <Button
            title={"Go to Homepage"}
            onPress={() =>
              navigation.reset({
                index: 0,
                routes: [{ name: NAVIGATION.home }],
              })
            }
          />
        </View>
      </View>
    </ScreenWrapper>
  );
}
