import React, { useRef } from "react";
import {
  View,
  Image,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  Button,
  CompanyDetailView,
  NameHeader,
  ScreenWrapper,
  Spacer,
} from "@/components";
import { styles } from "@/screens/PlacedOrderStatus/OrderedStatus/OrderedStatus.styles";
import { COLORS, SH, SW } from "@/theme";
import { strings } from "@/localization";
import {
  backArrow,
  chatNow,
  deliveryTruck,
  forward,
  location,
  orderDetails,
} from "@/assets";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";
import { getUser } from "@/selectors/UserSelectors";
import { useSelector } from "react-redux";
import { orderSelector } from "@/selectors/OrderSelector";
import { useNavigation } from "@react-navigation/native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Dimensions } from "react-native";
import { Loader } from "@/components/Loader";
import { isLoadingSelector } from "@/selectors/StatusSelectors";
import { TYPES } from "@/Types/Types";

export function OrderedStatus() {
  const navigation = useNavigation();
  const order = useSelector(orderSelector);
  const user = useSelector(getUser);
  const mapRef = useRef();
  const { width, height } = Dimensions.get("window");
  const ASPECT_RATIO = width / height;
  const LATITUDE_DELTA = 0.005;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
  const subTotalAmout = order?.subTotalAmount?.total_amount;
  const jobrCoin = order?.getOneOrderDetail?.payable_amount * 100;

  const isLoading = useSelector((state) =>
    isLoadingSelector([TYPES.GET_ORDER_DETAILS], state)
  );

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
  return (
    <ScreenWrapper>
      <NameHeader
        title={"Home"}
        back
        backNavi={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: NAVIGATION.home }],
          })
        }
      />

      <ScrollView
        style={styles.mainContainer}
        showsVerticalScrollIndicator={false}
      >
        <Spacer space={SH(25)} />

        <View style={styles.orderStatus}>
          <View style={styles.statusInnerView}>
            <Text style={styles.statusText}>
              {strings.myPurchase.processing}
            </Text>
            <Spacer space={SH(5)} />

            <View
              style={[
                styles.bottomStatusBar,
                {
                  borderColor:
                    order?.getOneOrderDetail?.status >= 0
                      ? COLORS.primary
                      : COLORS.backgroundGrey,
                },
              ]}
            ></View>
          </View>

          {/*  */}

          <View style={styles.statusInnerView}>
            <Text style={styles.statusText}>{strings.myPurchase.shipped}</Text>
            <Spacer space={SH(5)} />
            <View
              style={[
                styles.bottomStatusBar,
                {
                  borderColor:
                    order?.getOneOrderDetail?.status == 4
                      ? COLORS.primary
                      : COLORS.backgroundGrey,
                },
              ]}
            ></View>
          </View>
          <View style={styles.statusInnerView}>
            <Text style={styles.statusText}>
              {strings.myPurchase.delivered}
            </Text>
            <Spacer space={SH(5)} />
            <View
              style={[
                styles.bottomStatusBar,
                {
                  borderColor:
                    order?.getOneOrderDetail?.status == 5
                      ? COLORS.primary
                      : COLORS.backgroundGrey,
                },
              ]}
            ></View>
          </View>

          {/*  */}
        </View>

        <Spacer space={SH(20)} />

        <Text style={styles.statusHeading}>
          {strings.myPurchase.processing}
        </Text>

        {/* <Spacer space={SH(15)} />

        <Text style={styles.quoteText}>{strings.myPurchase.quote}</Text> */}

        <Spacer space={SH(20)} />

        <View style={styles.companyBackground}>
          <View style={styles.companyInnerView}>
            <Text>About company</Text>
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
            title={
              order?.getOneOrderDetail?.seller_details?.firstname +
              " " +
              order?.getOneOrderDetail?.seller_details?.lastname
            }
            profilePhoto={{
              uri: order?.getOneOrderDetail?.seller_details?.profile_photo,
            }}
            locationText={"Miami, USA"}
            rating={
              order?.getOneOrderDetail?.seller_details?.sellerRating?.rating
            }
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

        <Spacer space={SH(1)} />

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
              region={{
                latitude: user?.savedAddress?.latitude,
                longitude: user?.savedAddress?.longitude,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
              }}
              style={styles.map}
            >
              <Marker
                coordinate={{
                  latitude: user?.savedAddress?.latitude,
                  longitude: user?.savedAddress?.longitude,
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

            <Spacer space={SH(10)} />

            <View style={styles.borderLine}></View>
          </View>

          <Spacer space={SH(10)} />

          <ScrollView style={{ paddingHorizontal: SW(20) }}>
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
                {"$ " + subTotalAmout.toFixed(2)}
              </Text>
            </View>

            <Spacer space={SH(10)} />

            <View style={styles.pricesView}>
              <Text style={styles.pricesText}>{"Discount"}</Text>
              <Text style={styles.pricesText}>
                {order?.getOneOrderDetail?.discount > 0
                  ? "- $ " + order?.getOneOrderDetail?.discount
                  : order?.getOneOrderDetail?.discount}
              </Text>
            </View>

            <Spacer space={SH(10)} />

            <View style={styles.pricesView}>
              <Text style={styles.pricesText}>{"Taxes & Other fees"}</Text>
              <Text style={styles.pricesText}>
                {"+ $ " + order?.getOneOrderDetail?.tax}
              </Text>
            </View>

            <Spacer space={SH(10)} />

            <View style={styles.pricesView}>
              <Text style={styles.pricesText}>
                {deliveryService(order?.getOneOrderDetail)} fees
              </Text>
              <Text style={styles.pricesText}>
                {order?.getOneOrderDetail?.shipping_charge > 0
                  ? "+ $ " + order?.getOneOrderDetail?.shipping_charge
                  : order?.getOneOrderDetail?.shipping_charge}
              </Text>
            </View>

            <Spacer space={SH(20)} />

            <View style={styles.pricesView}>
              <Text style={styles.totalPriceText}>{"Total"}</Text>
              <Text style={styles.totalPriceText}>
                {"$ " + order?.getOneOrderDetail?.payable_amount}
              </Text>
            </View>
            <Text style={styles.totalJbrCoinText}>
              JBR {Math.floor(jobrCoin)}
            </Text>
          </ScrollView>
        </View>

        <Spacer space={SH(20)} />

        <Button
          onPress={() =>
            // navigation.reset({
            //   index: 0,
            //   routes: [{ name: NAVIGATION.home }],
            // })
            navigate(NAVIGATION.trackPlacedOrder)
          }
          title={"Tracking your order"}
          style={styles.trackOrderButton}
        />
        <Spacer space={SH(30)} />
      </ScrollView>

      {isLoading && <Loader message="Loading details" />}
    </ScreenWrapper>
  );
}
