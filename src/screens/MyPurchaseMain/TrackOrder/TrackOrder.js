import React, { useEffect, useRef, useState } from "react";
import { View, Image, Text, TouchableOpacity, Dimensions } from "react-native";
import { NameHeaderCoins, ScreenWrapper, Spacer } from "@/components";
import { styles } from "./TrackOrder.styles";
import { COLORS, SH, SW } from "@/theme";
import { strings } from "@/localization";
import { mapViewLogo, ordersIcon, roundBlank, roundCheck } from "@/assets";
import { orderSelector } from "@/selectors/OrderSelector";
import { useDispatch, useSelector } from "react-redux";
import { Components } from "./Components";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

export function TrackOrder({ route }) {
  const { width, height } = Dimensions.get("window");
  const mapRef = useRef();
  const dispatch = useDispatch();
  const order = useSelector(orderSelector);

  const ASPECT_RATIO = width / height;
  const LATITUDE_DELTA = 0.4689;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

  const [isModalVisible, setisModalVisible] = useState("");

  useEffect(() => {
    setisModalVisible(true);
  }, []);

  const currentStatus = (item) => {
    if (order?.getOneOrderDetail?.status >= 1) {
      return strings?.trackOrder?.orderProcessing;
    } else if (order?.getOneOrderDetail?.status >= 2) {
      return strings?.trackOrder?.preparingYourOrder;
    } else if (order?.getOneOrderDetail?.status >= 3) {
      return strings?.trackOrder?.readyToPickup;
    } else if (order?.getOneOrderDetail?.status >= 4) {
      return strings?.trackOrder?.pickedUp;
    } else if (order?.getOneOrderDetail?.status >= 5) {
      return strings?.trackOrder?.delivered;
    } else if (order?.getOneOrderDetail?.status >= 6) {
      return strings?.trackOrder?.pickedByCsutomer;
    } else if (order?.getOneOrderDetail?.status >= 7) {
      return strings?.trackOrder?.cancelled;
    }
  };
  return (
    <ScreenWrapper>
      <NameHeaderCoins title={strings.trackOrder.trackYourOrder} backRequired />
      <View style={styles.mainContainer}>
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
          // region={{
          //   latitude:
          //     order?.getOneOrderDetail?.seller_details?.current_address
          //       ?.latitude,
          //   longitude:
          //     order?.getOneOrderDetail?.seller_details?.current_address
          //       ?.longitude,
          //   latitudeDelta: LATITUDE_DELTA,
          //   longitudeDelta: LONGITUDE_DELTA,
          // }}
          style={styles.map}
        >
          {/* <Marker
            coordinate={{
              latitude:
                order?.getOneOrderDetail?.seller_details?.current_address
                  ?.latitude,
              longitude:
                order?.getOneOrderDetail?.seller_details?.current_address
                  ?.longitude,
            }}
          />
          <Marker
            coordinate={{
              latitude:
                order?.getOneOrderDetail?.user_details?.current_address
                  ?.latitude,
              longitude:
                order?.getOneOrderDetail?.user_details?.current_address
                  ?.longitude,
            }}
          />
          <MapViewDirections
            origin={{
              latitude:
                order?.getOneOrderDetail?.seller_details?.current_address
                  ?.latitude,
              longitude:
                order?.getOneOrderDetail?.seller_details?.current_address
                  ?.longitude,
            }}
            destination={{
              latitude:
                order?.getOneOrderDetail?.user_details?.current_address
                  ?.latitude,
              longitude:
                order?.getOneOrderDetail?.user_details?.current_address
                  ?.longitude,
            }}
            apikey={PROVIDER_GOOGLE}
            strokeWidth={3}
            strokeColor={COLORS.primary}
          /> */}
        </MapView>

        <View style={{ position: "absolute", alignSelf: "center" }}>
          <View
            style={[
              styles.mainModal,
              { marginTop: isModalVisible == true ? SH(133) : SH(523) },
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
                <Components
                  title={strings?.trackOrder?.delivered}
                  source={
                    order?.getOneOrderDetail?.status >= 5
                      ? roundCheck
                      : roundBlank
                  }
                  tintColor={
                    order?.getOneOrderDetail?.status >= 5
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
                  title={strings?.trackOrder?.preparingYourOrder}
                  source={
                    order?.getOneOrderDetail?.status >= 2
                      ? roundCheck
                      : roundBlank
                  }
                  tintColor={
                    order?.getOneOrderDetail?.status >= 2
                      ? COLORS.primary
                      : COLORS.secondary
                  }
                />
                <Components
                  title={strings?.trackOrder?.orderProcessing}
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
                <Components
                  title={strings?.trackOrder?.madepayment}
                  source={
                    order?.getOneOrderDetail?.status >= 0
                      ? roundCheck
                      : roundBlank
                  }
                  tintColor={
                    order?.getOneOrderDetail?.status >= 0
                      ? COLORS.primary
                      : COLORS.secondary
                  }
                />
              </View>
            ) : (
              <View style={{ paddingHorizontal: SW(15) }}>
                <View style={{ flexDirection: "row", marginBottom: SH(30) }}>
                  <View
                    style={{ alignItems: "center", justifyContent: "flex-end" }}
                  >
                    <Image
                      source={roundCheck}
                      resizeMode="contain"
                      style={styles.checkLogo}
                    />
                  </View>

                  <View style={styles.textAlignStyle}>
                    <Text
                      style={[styles.titleText, { color: COLORS.darkGrey }]}
                    >
                      {currentStatus(order?.getOneOrderDetail)}
                    </Text>
                    {/* <Text style={[styles.statusText, { color: COLORS.text }]}>
                      {item.status}
                    </Text> */}
                  </View>
                </View>
              </View>
            )}
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
}
