import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { styles } from "./Checkout.styles";
import { ScreenWrapper, Spacer } from "@/components";
import { SF, SH, SW } from "@/theme/ScalerDimensions";
import { COLORS } from "@/theme/Colors";
import {
  cross,
  forwardArrowWhite,
  rightArrowThin,
  Fonts,
  crossBlack,
  pencil,
} from "@/assets";
import { strings } from "@/localization";
import { HeaderCoin } from "../Profile/Wallet/Components/HeaderCoin";
import { goBack, navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCart,
  removeOneProductfromCart,
  saveSubTotalAmount,
} from "@/actions/OrderAction";
import { orderSelector } from "@/selectors/OrderSelector";
import { isLoadingSelector } from "@/selectors/StatusSelectors";
import { TYPES } from "@/Types/Types";
import { createCartAction } from "@/actions/OrderAction";
import { getProductSelector } from "@/selectors/ProductSelectors";
import { addCouponReset } from "@/actions/ProductActions";

export function Checkout() {
  const dispatch = useDispatch();
  const cartList = useSelector(orderSelector);
  const coupon = useSelector(getProductSelector);
  const [discountAmnt, setdiscountAmnt] = useState(0);
  const [taxAmount, setTaxAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  let arr = [cartList?.getCart];
  useEffect(() => {
    dispatch(getCart());
    if (coupon?.addCoupons && Object.entries(coupon?.addCoupons).length != 0) {
      setdiscountAmnt(
        (coupon?.addCoupons?.discount_percentage / 100) *
          cartList?.getCart?.amout?.total_amount
      );
    } else {
      setdiscountAmnt(0);
    }
    if (coupon?.addCoupons && Object.entries(coupon?.addCoupons).length != 0) {
      setTaxAmount(
        ((cartList?.getCart?.amout?.total_amount -
          (coupon?.addCoupons?.discount_percentage / 100) *
            cartList?.getCart?.amout?.total_amount) *
          cartList?.getCart?.amout?.tax_percentage) /
          100
      );
    } else {
      setTaxAmount(
        (cartList?.getCart?.amout?.total_amount *
          cartList?.getCart?.amout?.tax_percentage) /
          100
      );
    }
    setTotalAmount(
      cartList?.getCart?.amout?.total_amount - (discountAmnt || 0) + taxAmount
    );
  }, [
    discountAmnt,
    cartList?.getCart?.amout?.total_amount,
    taxAmount,
    coupon?.addCoupons,
  ]);

  const applyCouponHandler = () => {
    navigate(NAVIGATION.addCoupon, {
      params: "checkout",
      seller_id: cartList?.getCart?.seller_id,
      order_amount: cartList?.getCart?.amout?.total_amount,
      service_id: cartList?.getCart?.service_id,
    });
  };
  const removeProduct = (cartId, cartProductId) => {
    dispatch(removeOneProductfromCart(cartId, cartProductId)).then((res) => {
      if (res?.payload == 0) {
        goBack();
      }
    });
  };
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
        if (cartItem.qty > 1) {
          cartItem.qty -= 1;
        }
      }
      const withoutVariantObject = {
        seller_id: cartItem?.product_details?.supply?.seller_id,
        supply_id: cartItem?.supply_id,
        supply_price_id: cartItem?.supply_price_id,
        product_id: cartItem?.product_id,
        service_id: cartItem?.service_id,
        qty: cartItem?.qty,
      };
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
                  <View style={{ width: "80%" }}>
                    <Text style={styles.productNameText}>
                      {data.product_details?.name}
                    </Text>
                  </View>

                  <TouchableOpacity
                    onPress={() => removeProduct(item?.id, data?.id)}
                  >
                    <Image source={cross} style={styles.crossIcon} />
                  </TouchableOpacity>
                </View>
                <Spacer space={SH(5)} />

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
          {/* ////////////////////// */}

          <FlatList
            showsVerticalScrollIndicator={false}
            data={arr}
            renderItem={renderItem}
            keyExtractor={(item) => item?.id}
            extraData={arr}
          />

          <Spacer space={SH(25)} />
          <>
            {coupon?.addCoupons &&
            Object.entries(coupon?.addCoupons).length != 0 ? (
              <>
                <View style={[styles.appliedCouponBackground]}>
                  <View style={[styles.rowView, { paddingBottom: SH(7) }]}>
                    <TouchableOpacity onPress={applyCouponHandler}>
                      <Image
                        source={pencil}
                        style={styles.couponIcons}
                        resizeMode="contain"
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => dispatch(addCouponReset())}
                    >
                      <Image
                        source={crossBlack}
                        style={styles.couponIcons}
                        resizeMode="contain"
                      />
                    </TouchableOpacity>
                  </View>

                  <Text
                    style={{
                      fontFamily: Fonts.SemiBold,
                      color: COLORS.primary,
                    }}
                  >
                    Coupon Applied !
                  </Text>

                  <Spacer space={SH(5)} />

                  <View style={styles.rowView}>
                    <Text style={styles.couponDataText}>
                      {coupon?.addCoupons?.code}
                    </Text>
                    <Text style={styles.couponDataText}>
                      {"Save upto " +
                        coupon?.addCoupons?.discount_percentage +
                        " %"}
                    </Text>
                  </View>
                </View>
                <Spacer space={SH(25)} />
              </>
            ) : (
              <>
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
              </>
            )}
          </>

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
                {discountAmnt > 0 ? "- " : ""}
                {"$ "}
                {discountAmnt.toFixed(2)}
              </Text>
            </View>

            <Spacer space={SH(10)} />

            <View style={styles.borderLine}></View>

            <Spacer space={SH(10)} />

            <View style={styles.subtotalView}>
              <Text style={styles.feeText}>{"Taxes & Other fees "}</Text>
              <Text style={styles.feeText}>
                {"+ $ "}
                {taxAmount.toFixed(2)}
              </Text>
            </View>

            <Spacer space={SH(10)} />

            <View style={styles.borderLine}></View>

            <Spacer space={SH(10)} />

            <View style={styles.subtotalView}>
              <Text style={styles.totalText}>{"Total"}</Text>
              <Text style={styles.totalText}>
                {"$ "}
                {totalAmount.toFixed(2)}
              </Text>
            </View>
          </View>

          <Spacer space={SH(70)} />
        </ScrollView>

        <View style={styles.bottomButtonView}>
          <TouchableOpacity
            style={styles.missingAddressButton}
            onPress={() => {
              dispatch(
                saveSubTotalAmount({
                  subTotalAmount: cartList?.getCart?.amout?.total_amount,
                  discount_amount: discountAmnt,
                  tax_amount: taxAmount,
                  total_amount: totalAmount,
                })
              );
              navigate(NAVIGATION.delivery);
            }}
          >
            <View style={styles.missingAddressButtonView}>
              <Text style={styles.placeOrderText}>
                {strings.checkout.continueCheckout}
              </Text>
              <View style={styles.box}>
                <Image
                  resizeMode="stretch"
                  source={forwardArrowWhite}
                  style={{ height: 15, width: SW(25), tintColor: COLORS.green }}
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
