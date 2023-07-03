import {
  FlatList,
  Image,
  Modal,
  RefreshControl,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import { styles } from "./ReviewAndPayment.styles";
import { NameHeaderCoins, ScreenWrapper, Spacer } from "@/components";
import { SF, SH, SW } from "@/theme/ScalerDimensions";
import { COLORS } from "@/theme/Colors";
import { useNavigation, useRoute } from "@react-navigation/native";
import { goBack, navigate } from "@/navigation/NavigationRef";
import RBSheet from "react-native-raw-bottom-sheet";
import {
  backArrow,
  coins,
  deliveryTruck,
  addSquareBox,
  addSquare,
  jobrRound,
  walletIcon,
  orderDetails,
  Fonts,
  forwardArrowWhite,
  referralCorner,
  location,
  locationNear,
  pencil,
  check,
} from "@/assets";
import { strings } from "@/localization";
import { NAVIGATION } from "@/constants";
import { ms, vs } from "react-native-size-matters";
import { SwiperButton } from "@/components/SwiperButton";
import { useDispatch } from "react-redux";
import {
  createOrder,
  getOrderDetails,
  getOrderList,
} from "@/actions/OrderAction";
import { orderSelector } from "@/selectors/OrderSelector";
import { useSelector } from "react-redux";
import { getUser } from "@/selectors/UserSelectors";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Dimensions } from "react-native";
import { getWallet } from "@/selectors/WalletSelector";
import { getWalletBalance } from "@/actions/WalletActions";
import { TYPES } from "@/Types/Types";
import { isLoadingSelector } from "@/selectors/StatusSelectors";
import { Loader } from "@/components/Loader";
import { ImageBackground } from "react-native";
import { ShadowStyles } from "@/theme";

const data = [
  {
    name: "JBR 10",
    sub: "USD $10",
    id: 1,
  },
  {
    name: "JBR 25",
    sub: "USD $25",
    id: 2,
  },
  {
    name: "JBR 50",
    sub: "USD $50",
    id: 3,
  },
  {
    name: "JBR 100",
    sub: "USD $100",
    id: 4,
  },
];

export function ReviewAndPayment(props) {
  const getCartId = useSelector(orderSelector);
  const navigation = useNavigation();

  const renderItem = ({ item }) => <SwiperButton item={item} />;
  const refRBSheet = useRef();
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const wallet = useSelector(getWallet);

  const route = useRoute();
  const mapRef = useRef();
  const { width, height } = Dimensions.get("window");
  const ASPECT_RATIO = width / height;
  const LATITUDE_DELTA = 0.005;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
  const [refreshing, setRefreshing] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const isLoading = useSelector((state) =>
    isLoadingSelector([TYPES.CREATE_ORDER], state)
  );
  const placeOrder = () => {
    const data = {
      Cart_id: getCartId?.getCart?.id,
      Address_id: 1,
      Address_type:
        user?.user?.payload?.user_profiles?.current_address?.address_type,
      Address:
        user?.user?.payload?.user_profiles?.current_address?.street_address,
      City: user?.user?.payload?.user_profiles?.current_address?.city,
      State: user?.user?.payload?.user_profiles?.current_address?.state,
      Zip_Code: user?.user?.payload?.user_profiles?.current_address?.zipcode,
      Country: user?.user?.payload?.user_profiles?.current_address?.country,
      Coordinates: [
        user?.user?.payload?.user_profiles?.current_address?.latitude,
        user?.user?.payload?.user_profiles?.current_address?.longitude,
      ],
      delivery_option: "4",
      shipping_service_id: route?.params?.deliveryId,
      mode_of_payment: "jbr",
    };

    dispatch(createOrder(data))
      .then((res) => {
        setOpenModal(true);
      })
      .catch((error) => {
        console.error("error", error);
      });
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
              {/* <Text style={styles.lightText}> ({item.type})</Text> */}
            </Text>
          </View>

          <Text style={styles.quantityText}>
            $ {item.product_details?.supply?.supply_prices?.selling_price}
          </Text>
        </View>
      </View>
    );
  };
  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getWalletBalance());
    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  };
  const handleModal = () => {
    dispatch(getOrderDetails(getCartId?.createOrder?.payload?.id));
    navigation.reset({
      index: 0,
      routes: [{ name: NAVIGATION.orderedStatus }],
    });
    setOpenModal(false);
  };
  return (
    <ScreenWrapper style={{ flex: 1, backgroundColor: COLORS.white }}>
      <NameHeaderCoins backRequired title={strings.delivery.reviewAndPayment} />

      <Spacer space={SH(10)} />

      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        style={styles.mainContainer}
        showsVerticalScrollIndicator={false}
      >
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
                {route?.params?.deliveryService}
              </Text>
              <Text style={styles.estimatedDelivery}>
                {strings.reviewAndPayment.estimatedDelivery}{" "}
                <Text style={styles.deliveryDays}>
                  {" "}
                  {strings.reviewAndPayment.days}
                </Text>
              </Text>
            </View>
          </View>
        </View>
        <Spacer space={SH(15)} />

        {!user?.savedAddress ? (
          <TouchableOpacity
            onPress={() => navigate(NAVIGATION.selectAddress)}
            style={[
              styles.addressView,
              { height: SH(70), backgroundColor: COLORS.inputBorder },
            ]}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                resizeMode="contain"
                source={addSquareBox}
                style={styles.addIcon}
              />
              <Text style={styles.addAddressText}>
                {" "}
                {strings.reviewAndPayment.addShippingAddress}
              </Text>
            </View>
          </TouchableOpacity>
        ) : (
          <View style={[styles.addressView, { ...ShadowStyles.shadow }]}>
            <View style={styles.row}>
              <View style={styles.rowView}>
                <Image
                  source={location}
                  resizeMode="contain"
                  style={styles.locationIcon}
                />
                <Spacer horizontal space={SW(5)} />
                <Text style={styles.shippingAddressTitle}>
                  {"Shipping Address"}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => navigate(NAVIGATION.selectAddress)}
              >
                <Image
                  source={pencil}
                  resizeMode="contain"
                  style={styles.locationIcon}
                />
              </TouchableOpacity>
            </View>

            <Spacer space={SH(10)} />

            <View pointerEvents="none" style={styles.rowView}>
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

              <View style={{ marginLeft: SW(10) }}>
                <Text style={styles.shippingAddressTitle}>
                  {user?.savedAddress?.country}
                </Text>

                <Spacer space={SH(8)} />

                <Text style={styles.addressText}>
                  {user?.savedAddress?.apartment || "Apartment"}
                  <Text>
                    {` ${user?.savedAddress?.address_line_1 || "West Street"} `}
                  </Text>
                </Text>

                <Spacer space={SH(3)} />

                <Text style={styles.addressText}>
                  {`${user?.savedAddress?.city || "City"}, `}
                  <Text>
                    {user?.savedAddress?.state}
                    <Text>{" " + user?.savedAddress?.postal_code}</Text>
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        )}

        <Spacer space={SH(15)} />
        <View style={styles.jobrWalletView}>
          <View style={styles.walletInfoView}>
            <View style={styles.walletInnerView}>
              <Image
                resizeMode="contain"
                source={walletIcon}
                style={styles.walletIcons}
              />
              <Text style={{ fontFamily: Fonts.SemiBold, color: COLORS.black }}>
                Balance
              </Text>
            </View>

            <TouchableOpacity onPress={() => navigate(NAVIGATION.jbrWallet)}>
              <Image
                resizeMode="contain"
                source={addSquare}
                style={{ height: 25, width: 25, marginRight: SW(2) }}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.walletInfoView}>
            <View style={styles.walletInnerView}>
              <Image
                resizeMode="contain"
                source={jobrRound}
                style={{ height: 25, width: 25, marginRight: SW(5) }}
              />
              <Text style={styles.jbrText}>JBR</Text>
            </View>

            <Text style={styles.jbrText}>
              JBR{" "}
              <Text>
                {Math.floor(wallet?.getWalletBalance?.sila_balance || 0)}
              </Text>
            </Text>
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

          <ScrollView style={{ paddingHorizontal: SW(20) }}>
            <FlatList
              data={getCartId?.getCart?.cart_products}
              renderItem={({ item }) => render(item)}
              keyExtractor={(item) => item.id}
            />

            <Spacer space={SH(8)} />

            <View style={styles.borderLine}></View>

            <Spacer space={SH(15)} />

            <View style={styles.pricesView}>
              <Text style={styles.pricesText}>Subtotal</Text>
              <Text style={styles.pricesText}>
                $ {getCartId?.getCart?.amout?.total_amount?.toFixed(2)}
              </Text>
            </View>

            <Spacer space={SH(10)} />

            <View style={styles.pricesView}>
              <Text style={styles.pricesText}>Discount</Text>
              <Text style={styles.pricesText}>
                {"- $ " + getCartId?.subTotalAmount?.discount_amount.toFixed(2)}
              </Text>
            </View>

            <Spacer space={SH(10)} />

            <View style={styles.pricesView}>
              <Text style={styles.pricesText}>Taxes & Other fees</Text>
              <Text style={styles.pricesText}>
                + $ {getCartId?.subTotalAmount?.tax_amount.toFixed(2)}
              </Text>
            </View>

            <Spacer space={SH(10)} />

            <View style={styles.pricesView}>
              <Text style={styles.deliveryPriceText}>Delivery fees</Text>
              <Text style={styles.pricesText}>$0.00</Text>
            </View>

            <Spacer space={SH(20)} />

            <View style={styles.pricesView}>
              <Text style={styles.totalPriceText}>Total</Text>
              <Text style={styles.totalPriceText}>
                $ {getCartId?.subTotalAmount?.total_amount?.toFixed(2)}
              </Text>
            </View>
          </ScrollView>
        </View>
        <Spacer space={SH(10)} />
        <Text style={{ marginHorizontal: 2, fontSize: SF(13) }}>
          {strings.reviewAndPayment.byCompleting} {""}
          <Text style={{ fontSize: SF(13), color: COLORS.activeTab }}>
            {strings.reviewAndPayment.terms}
          </Text>
        </Text>

        <Spacer space={SH(20)} />

        {!user?.savedAddress ? (
          <View style={styles.bottomButtonView}>
            <TouchableOpacity
              disabled={true}
              style={styles.missingAddressButton}
            >
              <View style={styles.missingAddressButtonView}>
                <Text style={styles.placeOrderText}>
                  Place order
                  <Text style={{ fontFamily: Fonts.Regular, fontSize: SF(12) }}>
                    {" "}
                    (Missing address)
                  </Text>
                </Text>
                <View style={styles.box}>
                  <Image
                    resizeMode="stretch"
                    source={forwardArrowWhite}
                    style={{ height: 15, width: SW(25) }}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.bottomButtonView}>
            <TouchableOpacity
              style={[
                styles.missingAddressButton,
                { backgroundColor: COLORS.primary },
              ]}
              onPress={placeOrder}
            >
              <View style={styles.missingAddressButtonView}>
                <Text style={styles.placeOrderText}>
                  Place order
                  <Text style={{ fontFamily: Fonts.Regular, fontSize: SF(12) }}>
                    {" "}
                    (Payment)
                  </Text>
                </Text>
                <View style={styles.box}>
                  <Image
                    resizeMode="stretch"
                    source={forwardArrowWhite}
                    style={{ height: 15, width: SW(25) }}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
      <Modal
        animationType="fade"
        transparent={true}
        visible={openModal}
        statusBarTranslucent
      >
        <ImageBackground
          style={[styles.centeredView, { backgroundColor: "#979A9A" }]}
        >
          <View style={styles.modalFilter}>
            <Spacer space={SH(30)} />
            <View style={styles.formCont}>
              <Text style={styles.subHeading}>
                {strings.reviewAndPayment.placed}
              </Text>
              <Spacer space={SH(10)} />
              <Image
                source={check}
                resizeMode="cover"
                style={styles.vectorImg}
              />
              <Spacer space={SH(14)} />
              <Text style={styles.field}>
                {strings.reviewAndPayment.orderPlaced}
              </Text>
              <Spacer space={SH(14)} />
              <Text style={styles.subfieldHeading}>
                {strings.reviewAndPayment.pending}
              </Text>
            </View>
            <Spacer space={SH(24)} />

            <TouchableOpacity
              style={styles.formContent}
              // onPress={() => {
              //   navigate(NAVIGATION.rating);
              // }}
              onPress={handleModal}
            >
              <Text style={styles.fieldHeading}>
                {strings.reviewAndPayment.track}
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </Modal>
      {isLoading && <Loader message="Placing Order.." />}
    </ScreenWrapper>
  );
}
