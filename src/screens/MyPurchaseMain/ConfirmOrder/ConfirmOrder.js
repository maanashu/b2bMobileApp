import React, { useRef } from "react";
import {
  View,
  Image,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import {
  Button,
  CompanyDetailView,
  NameHeader,
  ScreenWrapper,
  Spacer,
} from "@/components";
import { styles } from "./ConfirmOrder.styles";
import { COLORS, SF, SH, SW } from "@/theme";
import { strings } from "@/localization";
import {
  backArrow,
  chatNow,
  deliveryMap,
  deliveryTruck,
  forward,
  location,
  orderDetails,
  yewiLogo,
} from "@/assets";
import { goBack, navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";
import { useDispatch, useSelector } from "react-redux";
import { orderSelector } from "@/selectors/OrderSelector";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { getUser } from "@/selectors/UserSelectors";
import { changeOrderStatus, getOrderList } from "@/actions/OrderAction";
import { TYPES } from "@/Types/Types";
import { isLoadingSelector } from "@/selectors/StatusSelectors";
import { Loader } from "@/components/Loader";

export function ConfirmOrder({ route }) {
  const dispatch = useDispatch();

  const order = useSelector(orderSelector);
  const user = useSelector(getUser);
  const mapRef = useRef();
  const { width, height } = Dimensions.get("window");
  const ASPECT_RATIO = width / height;
  const LATITUDE_DELTA = 0.005;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

  const destinationCoordinates = order?.getOneOrderDetail?.coordinates;

  const isStatusChanging = useSelector((state) =>
    isLoadingSelector([TYPES.CHANGE_ORDER_STATUS], state)
  );
  const isLoading = useSelector((state) =>
    isLoadingSelector([TYPES.GET_ORDER_DETAILS], state)
  );
  console.log("check lat ", order?.getOneOrderDetail);
  console.log("check lat ", user?.user?.payload?.token);

  const headerText = (item) => {
    if (item?.status === 0) {
      return "To Be Confirmed";
    } else if (item?.status === 1) {
      return "Processing";
    } else if (item?.status === 5) {
      return "Completed";
    }
  };
  const deliveryService = (item) => {
    if (item?.shipping_service_id === 1) {
      return "Fedex Express Shipping";
    } else if (item?.shipping_service_id === 2) {
      return "UPS Priority Shipping";
    } else if (item?.shipping_service_id === 3) {
      return "DHL Standard Shipping";
    } else if (item?.shipping_service_id === 4) {
      return "USPS Standard shipping";
    }
  };
  const render = (item) => {
    return (
      <View>
        <View style={styles.flatlistItems}>
          <View style={{ width: "75%" }}>
            <Text numberOfLines={1} style={styles.quantityText}>
              {item?.qty}
              <Text style={styles.lightText}> x </Text>
              <Text style={[styles.quantityText, {}]}>
                {item.product_details?.name}
              </Text>
              <Text style={styles.lightText}> ({item.type})</Text>
            </Text>
          </View>

          <Text style={styles.quantityText}>$ {item?.qty * item?.price}</Text>
        </View>
      </View>
    );
  };

  return (
    <ScreenWrapper>
      <NameHeader title={strings.myPurchase.orderDetails} back={backArrow} />

      <ScrollView
        style={styles.mainContainer}
        showsVerticalScrollIndicator={false}
      >
        <Spacer space={SH(15)} />
        {order?.getOneOrderDetail?.status == 0 && (
          <>
            <View style={styles.rowView}>
              <Text style={styles.statusHeading}>
                {headerText(order?.getOneOrderDetail)}
              </Text>
              <View
                style={{
                  backgroundColor: COLORS.primary,
                  borderRadius: SW(5),
                }}
              >
                <Text
                  style={{
                    paddingVertical: SH(4),
                    paddingHorizontal: SW(12),
                    color: COLORS.white,
                  }}
                >
                  {"Paid"}
                </Text>
              </View>
            </View>

            <Spacer space={SH(15)} />

            <Text style={styles.quoteText}>{strings.myPurchase.quote}</Text>

            <Spacer space={SH(20)} />
          </>
        )}

        <View style={styles.companyBackground}>
          <View style={styles.companyInnerView}>
            <Text>{"Buyer"}</Text>
            <TouchableOpacity>
              <Image
                source={chatNow}
                resizeMode="contain"
                style={styles.chatIcon}
              />
            </TouchableOpacity>
          </View>

          <Spacer space={SH(15)} />
          <CompanyDetailView
            title={"Yiwu Leqi E-Commerce Firm"}
            profilePhoto={yewiLogo}
            locationText={"Miami, USA"}
          />
        </View>

        <Spacer space={SH(20)} />

        <View style={styles.deliveryView}>
          <View style={styles.deliveryViewDirection}>
            <View>
              <Image
                resizeMode="contain"
                style={styles.truckIcon}
                source={deliveryTruck}
              />
            </View>
            <View style={styles.deliveryViewText}>
              <Text style={styles.deliveryTime}>
                {strings.reviewAndPayment.deliveryTime}
              </Text>
              <Text style={styles.deliveryName}>
                {deliveryService(order?.getOneOrderDetail)}
              </Text>
              <Text style={styles.estimatedDelivery}>
                {strings.reviewAndPayment.estimatedDelivery}{" "}
                <Text style={styles.deliveryDays}>
                  {" "}
                  {strings.reviewAndPayment.workingdays}
                </Text>
              </Text>
            </View>
          </View>
        </View>

        <Spacer space={SH(15)} />

        <View style={styles.elevatedView} pointerEvents="none">
          <View style={styles.deliveryViewDirection}>
            <Image
              style={styles.deliveryPinIcon}
              source={location}
              resizeMode="contain"
            />
            <Text style={styles.boldHeading}>Delivery Address</Text>
          </View>

          <Spacer space={SH(5)} />

          <View>
            <MapView
              ref={mapRef}
              provider={PROVIDER_GOOGLE}
              showsCompass
              showsMyLocationButton
              // initialRegion={{
              //   latitude: latitude,
              //   longitude: longitude,
              //   latitudeDelta: 0.00722,
              //   longitudeDelta: 0.00721,
              // }}
              region={{
                latitude: destinationCoordinates?.[1],
                longitude: destinationCoordinates?.[0],
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
              }}
              style={styles.map}
            >
              <Marker
                coordinate={{
                  latitude: destinationCoordinates?.[1],
                  longitude: destinationCoordinates?.[0],
                }}
              />
            </MapView>
          </View>

          <View style={{ marginTop: SH(15) }}>
            <Text style={styles.addressTypeText}>
              {order?.getOneOrderDetail?.address_type || "Home"}
            </Text>
            <Text style={styles.adressText}>
              {order?.getOneOrderDetail?.address}
            </Text>
            <Text style={styles.adressText}>
              {order?.getOneOrderDetail?.city},{" "}
              <Text>{order?.getOneOrderDetail?.state}</Text>,{" "}
              <Text>{order?.getOneOrderDetail?.zip}</Text>
            </Text>

            <Spacer space={SH(7)} />

            <View style={styles.bottomLine}></View>
            <Spacer space={SH(7)} />
            <View style={styles.rowView}>
              <Text style={styles.adressText}>
                {order?.getOneOrderDetail?.address}
              </Text>
              <Image
                source={forward}
                resizeMode="contain"
                style={styles.forwardIcon}
              />
            </View>
          </View>
        </View>

        <Spacer space={SH(15)} />

        <View style={styles.orderedProductsView}>
          <View style={styles.orderDetailsHeader}>
            <Image
              resizeMode="contain"
              source={orderDetails}
              style={styles.ordetDetailsIcon}
            />
            <Text style={styles.orderDetailsText}>
              {strings.reviewAndPayment.orderDetails}
            </Text>
          </View>

          <Spacer space={SH(2)} />
          <View style={{ paddingHorizontal: SW(20) }}>
            <View style={styles.pricesView}>
              <Text style={styles.pricesTextSemi}>{"Order number"}</Text>
              <Text style={styles.pricesTextSemi}>
                {order?.getOneOrderDetail?.id}
              </Text>
            </View>
            {/* 
            <Spacer space={SH(10)} />

            <View style={styles.pricesView}>
              <Text style={styles.pricesTextSemi}>{"Order from"}</Text>
              <Text style={styles.pricesTextSemi}>{"-$6.56"}</Text>
            </View>

            <Spacer space={SH(10)} />

            <View style={styles.pricesView}>
              <Text style={styles.pricesTextSemi}>{"Delivery address"}</Text>
              <Text style={styles.pricesTextSemi}>{"-$6.56"}</Text>
            </View> */}

            <Spacer space={SH(10)} />

            <View style={styles.borderLine}></View>
          </View>

          <Spacer space={SH(10)} />

          <ScrollView
            style={{ paddingHorizontal: SW(20) }}
            showsVerticalScrollIndicator={false}
          >
            <FlatList
              data={order?.getOneOrderDetail?.order_details}
              renderItem={({ item }) => render(item)}
              keyExtractor={(item) => item.id}
            />

            <Spacer space={SH(8)} />

            <View style={styles.borderLine}></View>

            <Spacer space={SH(15)} />

            <View style={styles.pricesView}>
              <Text style={styles.pricesText}>{"Subtotal"}</Text>
              <Text style={styles.pricesText}>
                {order?.getOneOrderDetail?.actual_amount}
              </Text>
            </View>

            <Spacer space={SH(10)} />

            <View style={styles.pricesView}>
              <Text style={styles.pricesText}>{"Discount"}</Text>
              <Text style={styles.pricesText}>
                {"$ " + order?.getOneOrderDetail?.discount}
              </Text>
            </View>

            <Spacer space={SH(10)} />

            <View style={styles.pricesView}>
              <Text style={styles.pricesText}>{"Taxes & Other fees"}</Text>
              <Text style={styles.pricesText}>
                {"$ " + order?.getOneOrderDetail?.tax}
              </Text>
            </View>

            <Spacer space={SH(10)} />

            <View style={styles.pricesView}>
              <Text style={styles.pricesText}>
                {"DHL Standard shipping fees"}
              </Text>
              <Text style={styles.pricesText}>
                {"$ " + order?.getOneOrderDetail?.shipping_charge}
              </Text>
            </View>

            <Spacer space={SH(20)} />

            <View style={styles.pricesView}>
              <Text style={styles.totalPriceText}>{"Total"}</Text>
              <Text style={styles.totalPriceText}>
                {"$ " + order?.getOneOrderDetail?.payable_amount}
              </Text>
            </View>
          </ScrollView>
        </View>

        <Spacer space={SH(30)} />

        {order?.getOneOrderDetail?.status == 0 ? (
          <Button
            onPress={() =>
              dispatch(changeOrderStatus(order?.getOneOrderDetail?.id))
                .then((res) => {
                  goBack();
                  const object = {
                    page: 1,
                    limit: 10,
                    seller_id: user?.user?.payload?.uuid,
                    status: 0,
                  };
                  dispatch(getOrderList(object));
                })
                .catch(() => {})
            }
            title={"Confirm Order"}
            style={styles.trackOrderButton}
          />
        ) : (
          <Button
            onPress={() => navigate(NAVIGATION.trackOrder)}
            title={"Track Order"}
            style={[
              styles.trackOrderButton,
              { backgroundColor: COLORS.darkGrey },
            ]}
          />
        )}

        <Spacer space={SH(20)} />
      </ScrollView>
      {isLoading ? <Loader message="Loading Details ..." /> : null}
      {isStatusChanging ? <Loader message="Confirming order ..." /> : null}
    </ScreenWrapper>
  );
}
