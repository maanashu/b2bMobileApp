import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  LoginModal,
  NameHeader,
  ScreenWrapper,
  Spacer,
  Visibility,
} from "@/components";
import { COLORS } from "@/theme/Colors";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "./SelectServices.styles";
import { SH, SW } from "@/theme";
import Icon from "react-native-vector-icons/FontAwesome5";
import { scale } from "react-native-size-matters";
import { getProductSelector } from "@/selectors/ProductSelectors";
import { getUser } from "@/selectors/UserSelectors";
import { getServices } from "@/actions/ProductActions";
import { createServiceCart, getServiceCart } from "@/actions/OrderAction";
import { orderSelector } from "@/selectors/OrderSelector";
import { forwardArrowWhite } from "@/assets";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";
import { isLoadingSelector } from "@/selectors/StatusSelectors";
import { TYPES } from "@/Types/Types";
import { Loader } from "@/components/Loader";

export function SelectServices(params) {
  const dispatch = useDispatch();
  const productsData = useSelector(getProductSelector);
  const order = useSelector(orderSelector);
  const user = useSelector(getUser);
  const [openModal, setOpenModal] = useState(false);
  const getScreen = () => {
    if (!user?.user?.payload?.token) {
      return 0;
    } else if (user?.getUserProfile?.user_profiles?.wallet_steps === 0) {
      return 3;
    } else if (user?.getUserProfile?.user_profiles?.wallet_steps === 1) {
      return 4;
    } else if (user?.getUserProfile?.user_profiles?.wallet_steps === 1.1) {
      return 5;
    } else if (user?.getUserProfile?.user_profiles?.wallet_steps === 4) {
      return 6;
    }
  };
  const screen = getScreen();
  const serviceObject = {
    page: 1,
    limit: 20,
    app_name: "b2b",
    seller_id:
      params?.route?.params?.sellerId ||
      productsData?.savedProductParams?.sellerId,
    service_type: productsData?.savedProductParams?.service_type,
    sub_category_ids:
      params?.route?.params?.category_id ||
      productsData?.savedProductParams?.category_id,
  };
  const isLoading = useSelector((state) =>
    isLoadingSelector([TYPES.CREATE_SERVICE_CART], state)
  );
  const isLoadingServices = useSelector((state) =>
    isLoadingSelector([TYPES.GET_SERVICES], state)
  );
  useEffect(() => {
    dispatch(getServices(serviceObject));
    dispatch(getServiceCart());
  }, []);

  const servicesCartIds = order?.getServiceCart?.appointment_cart_products?.map(
    (obj) => obj?.product_id
  );

  const addService = (item) => {
    const object = {
      seller_id:
        params?.route?.params?.sellerId ||
        productsData?.savedProductParams?.sellerId,
      supply_id: item.supplies?.[0]?.id,
      supply_price_id: item?.supplies?.[0]?.supply_prices?.[0]?.id,
      product_id: item?.id,
    };
    const shouldOpenModal =
      !user?.user?.payload?.token || [3, 4, 5, 6].includes(screen);
    if (shouldOpenModal) {
      setOpenModal(true);
    } else {
      dispatch(createServiceCart(object));
    }
  };

  const renderServices = ({ item, index }) => {
    const isProductInArray = servicesCartIds?.includes(item?.id);
    return (
      <>
        <View style={styles.rowJustifiedView}>
          <View style={styles.rowView}>
            <TouchableOpacity onPress={() => addService(item)}>
              <Icon
                name={isProductInArray ? "check-square" : "square"}
                color={COLORS.primary}
                size={scale(15)}
                style={styles.checkBoxStyle}
              />
            </TouchableOpacity>
            <Spacer horizontal space={SW(10)} />
            <View>
              <Text style={styles.serviceNameText}>{item.description}</Text>

              <Text style={styles.servicePriceText}>
                USD ${item.supplies?.[0]?.supply_prices?.[0]?.selling_price}
              </Text>
            </View>
          </View>

          <Image
            source={{ uri: item.image }}
            resizeMode="contain"
            style={styles.serviceImageStyle}
          />
        </View>
        <Spacer space={SH(10)} />
      </>
    );
  };
  return (
    <ScreenWrapper style={{ flex: 1, backgroundColor: COLORS.white }}>
      <NameHeader title={"Services"} back />
      <View style={styles.container}>
        {!productsData?.servicesList?.data ? (
          <View style={styles.noDataView}>
            <Text style={styles.noDataText}>{"No services found"}</Text>
          </View>
        ) : (
          <>
            <View style={styles.rowAlignView}>
              <Text style={styles.selectServiceText}>{"Select Service"}</Text>
              <Spacer horizontal space={SW(5)} />
              <Text style={styles.requiredText}>{"Required"}</Text>
            </View>

            <Spacer space={SH(15)} />

            <View style={styles.bottomLine} />

            <Spacer space={SH(15)} />

            <FlatList
              data={productsData?.servicesList?.data}
              extraData={productsData?.servicesList?.data}
              renderItem={renderServices}
            />
          </>
        )}
      </View>
      <Visibility
        visible={
          order?.getServiceCart && Object.keys(order?.getServiceCart).length > 0
        }
      >
        <View style={styles.visibilityViewStyle}>
          <View>
            <Text style={styles.visibilityServiceText}>
              Services:
              <Text style={styles.boldText}>
                {" "}
                {order?.getServiceCart?.appointment_cart_products?.length}
              </Text>
            </Text>
            <Text style={styles.visibilityServiceText}>
              ${" "}
              <Text style={styles.boldText}>
                {order?.getServiceCart?.amout?.total_amount}
              </Text>
            </Text>
          </View>

          <TouchableOpacity
            style={styles.VisibiltyButton}
            onPress={() => navigate(NAVIGATION.serviceCheckout)}
          >
            <Image
              source={forwardArrowWhite}
              style={styles.arrowIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <Spacer space={SH(25)} />
      </Visibility>
      {isLoading && (
        <ActivityIndicator
          size="large"
          color="#0000ff"
          style={styles.loaderStyle}
        />
      )}
      {isLoadingServices && <Loader />}
      <View>
        <LoginModal
          isVisible={openModal}
          closeModal={setOpenModal}
          setScreen={screen}
        />
      </View>
    </ScreenWrapper>
  );
}
