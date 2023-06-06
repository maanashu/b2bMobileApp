import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef } from "react";
import { styles } from "./Checkout.styles";
import { ScreenWrapper, Spacer } from "@/components";
import { SF, SH, SW } from "@/theme/ScalerDimensions";
import { COLORS } from "@/theme/Colors";
import { useRoute } from "@react-navigation/native";
import {
  deliveryTruck,
  cross,
  forwardArrowWhite,
  rightArrowThin,
  Fonts,
} from "@/assets";
import { strings } from "@/localization";
import { HeaderCoin } from "../Profile/Wallet/Components/HeaderCoin";
import { useState } from "react";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart, removeOneProductfromCart } from "@/actions/OrderAction";
import { orderSelector } from "@/selectors/OrderSelector";
import { getUser } from "@/selectors/UserSelectors";
import {
  isLoadingSelector,
  successSelector,
} from "@/selectors/StatusSelectors";
import { TYPES } from "@/Types/Types";
import { Loader } from "@/components/Loader";
import { createCartAction } from "@/actions/OrderAction";

export function Checkout() {
  const dispatch = useDispatch();
  const cartList = useSelector(orderSelector);
  const user = useSelector(getUser);
  const route = useRoute();
  let arr = [cartList?.getCart];
  const [storeTotal, setstoreTotal] = useState(0);
  const [setProductArray, setsetProductArrat] = useState(
    cartList?.getCart ?? []
  );
  const totalStore = [];

  useEffect(() => {
    dispatch(getCart());
  }, []);

  const backNavigationHandler = () => {
    if (Object.keys(cartList?.getCart)?.length === 0) {
      alert("noke");
    }
  };
  useEffect(() => {
    try {
      // setProductArray.reduce((sum, i) => {
      //   var sepTotal = i.qty * i.selling_price;
      //   totalStore.push(sepTotal);
      // }, 0);
      // setstoreTotal(totalStore.reduce((a, b) => a + b, 0));
      const calculatedResult =
        setProductArray?.qty * setProductArray?.selling_price;
      setstoreTotal(calculatedResult);
    } catch (error) {}
  }, [setProductArray]);

  const applyCouponHandler = () => {
    navigate(NAVIGATION.addCoupon, { params: "checkout" });
  };

  const removeProduct = (cartId, cartProductId) => {
    dispatch(getCart());
    dispatch(removeOneProductfromCart(cartId, cartProductId));
  };

  const isLoading = useSelector((state) =>
    successSelector([TYPES.REMOVE_PRODUCT_FROM_CART], state)
  );
  const isAddToCartLoading = useSelector((state) =>
    isLoadingSelector([TYPES.GET_CART], state)
  );
  const updateQuantity = (cartId, productId, operation) => {
    const updatedArr = [...arr];

    const cartItem = updatedArr
      .find((item) => item.id === cartId)
      ?.cart_products.find((product) => product.id === productId);

    if (cartItem) {
      if (operation === "+") {
        cartItem.qty += 1;
      } else if (operation === "-") {
        cartItem.qty -= 1;
      }
      const withoutVariantObject = {
        seller_id: cartItem?.product_details?.supply?.seller_id,
        supply_id: cartItem?.supply_id,
        supply_price_id: cartItem?.supply_price_id,
        product_id: cartItem?.product_id,
        service_id: cartItem?.service_id,
        qty: cartItem?.qty,
      };
      // console.log("Updated Cart Item:", JSON.stringify(withoutVariantObject));
      dispatch(createCartAction(withoutVariantObject));
    }
  };

  const renderItem = ({ item, index }) => (
    <>
      {item?.cart_products?.map((data, ind) => {
        return (
          <>
            <View style={styles.productView}>
              <View>
                <Image
                  source={{ uri: data?.product_details?.image }}
                  style={styles.productImageStyle}
                />
              </View>

              <Spacer horizontal space={SH(8)} />

              <View style={{ flex: 1 }}>
                <View style={styles.rowView}>
                  <Text style={styles.productNameText}>
                    {data.product_details?.name}
                  </Text>

                  <TouchableOpacity
                    onPress={() => removeProduct(item?.id, data?.id)}
                  >
                    <Image source={cross} style={styles.crossIcon} />
                  </TouchableOpacity>
                </View>

                <View style={styles.boxStyling}>
                  <TouchableOpacity style={{ justifyContent: "center" }}>
                    <Text
                      style={{ fontFamily: Fonts.Bold, fontSize: SF(20) }}
                      onPress={() => updateQuantity(item?.id, data?.id, "-")}
                    >
                      -
                    </Text>
                  </TouchableOpacity>
                  {isAddToCartLoading ? (
                    <ActivityIndicator size="small" color={COLORS.primary} />
                  ) : (
                    <Text style={{ fontFamily: Fonts.Bold, fontSize: SF(15) }}>
                      {data?.qty}
                    </Text>
                  )}

                  {/* <Text style={{ fontFamily: Fonts.Bold, fontSize: SF(15) }}>
                    {data?.qty}
                  </Text> */}
                  <TouchableOpacity>
                    <Text
                      style={{ fontFamily: Fonts.Bold, fontSize: SF(20) }}
                      onPress={() => updateQuantity(item?.id, data?.id, "+")}
                    >
                      +
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <Spacer space={SH(10)} />
          </>
        );
      })}
    </>
  );

  return (
    <ScreenWrapper style={{ flex: 1, backgroundColor: COLORS.white }}>
      <HeaderCoin title={strings.checkout.checkout} />

      <Spacer space={SH(10)} />

      <View style={styles.mainContainer} showsVerticalScrollIndicator={false}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* <View style={styles.deliveryView}>
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
                <Text style={styles.deliveryName}>{"Express Shipping"}</Text>
                <Text style={styles.estimatedDelivery}>
                  {strings.reviewAndPayment.estimatedDelivery}{" "}
                  <Text style={styles.deliveryDays}>
                    {" "}
                    {strings.reviewAndPayment.days}
                  </Text>
                </Text>
              </View>
            </View>
          </View> */}
          <Spacer space={SH(20)} />
          {/* ////////////////////// */}

          <FlatList
            showsVerticalScrollIndicator={false}
            data={arr}
            renderItem={renderItem}
            keyExtractor={(item) => item?.id}
            extraData={arr}
          />

          <Spacer space={SH(25)} />
          <TouchableOpacity
            style={styles.applyCouponBackground}
            onPress={applyCouponHandler}
          >
            <View style={styles.headerInnerView}>
              <Text style={styles.ApplyCouponHeading}>
                {"Apply coupon here"}
              </Text>
              <Image
                source={rightArrowThin}
                resizeMode="contain"
                style={styles.rightArrowStyle}
              />
            </View>

            <Spacer space={SH(2)} />

            <Text style={styles.ApplyCouponHeadingText}>
              {"Add your coupon here"}
            </Text>
          </TouchableOpacity>

          <Spacer space={SH(25)} />

          <View style={styles.subtotalBackground}>
            <View style={styles.subtotalView}>
              <Text style={styles.feeText}>{"Subtotal"}</Text>
              <Text style={styles.feeText}>
                {"$ "}
                {cartList?.getCart?.amout?.total_amount?.toFixed(2)}
              </Text>
            </View>
            <Spacer space={SH(10)} />

            <View style={styles.borderLine}></View>

            <Spacer space={SH(10)} />

            <View style={styles.subtotalView}>
              <Text style={styles.feeText}>{"Coupon"}</Text>
              <Text style={styles.feeText}>
                {"$ "}
                {"0.00"}
              </Text>
            </View>

            <Spacer space={SH(10)} />

            <View style={styles.borderLine}></View>

            <Spacer space={SH(10)} />

            <View style={styles.subtotalView}>
              <Text style={styles.feeText}>{"Taxes & Other fees "}</Text>
              <Text style={styles.feeText}>
                {"$ "}
                {"0.00"}
              </Text>
            </View>

            <Spacer space={SH(10)} />

            <View style={styles.borderLine}></View>

            <Spacer space={SH(10)} />

            <View style={styles.subtotalView}>
              <Text style={styles.totalText}>{"Total"}</Text>
              <Text style={styles.totalText}>
                {"$ "}
                {cartList?.getCart?.amout?.total_amount?.toFixed(2)}
              </Text>
            </View>
          </View>

          <Spacer space={SH(70)} />
        </ScrollView>

        <View style={styles.bottomButtonView}>
          <TouchableOpacity
            style={styles.missingAddressButton}
            onPress={() => navigate(NAVIGATION.delivery)}
          >
            <View style={styles.missingAddressButtonView}>
              <Text style={styles.placeOrderText}>
                {strings.checkout.continueCheckout}
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

        <Spacer space={SH(15)} />
      </View>
      {/* {isLoading ? <Loader /> : null} */}
    </ScreenWrapper>
  );
}
