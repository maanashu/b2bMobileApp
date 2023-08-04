import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useMemo, useState } from "react";
import { styles } from "./ServiceCheckout.styles";
import { Button, NameHeaderCoins, ScreenWrapper, Spacer } from "@/components";
import { SH, SW } from "@/theme/ScalerDimensions";
import { COLORS } from "@/theme/Colors";
import {
  cross,
  forwardArrowWhite,
  rightArrowThin,
  Fonts,
  crossBlack,
  pencil,
  calenderClock,
} from "@/assets";
import { strings } from "@/localization";
import { goBack, navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart, removeOneServiceCart } from "@/actions/OrderAction";
import { orderSelector } from "@/selectors/OrderSelector";
import { getProductSelector } from "@/selectors/ProductSelectors";
import { addCouponReset } from "@/actions/ProductActions";
import { Calendar } from "react-native-calendars";
import moment from "moment";
import { ms } from "react-native-size-matters";
import Modal from "react-native-modal";
import { ServiceBookingTimings } from "../Chatting/BottomSheet";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { ActivityIndicator } from "react-native";
import { isLoadingSelector } from "@/selectors/StatusSelectors";
import { TYPES } from "@/Types/Types";

export function ServiceCheckout() {
  const dispatch = useDispatch();
  const [calenderModalRef, setCalenderModalRef] = useState(false);
  const order = useSelector(orderSelector);
  const coupon = useSelector(getProductSelector);
  const [discountAmnt, setdiscountAmnt] = useState(0);
  const [taxAmount, setTaxAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [isCartLoading, setisCartLoading] = useState(true);
  const [selectedTiming, setselectedTiming] = useState("");
  const [date, setDate] = useState(moment().format("YYYY-MM-DD"));
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [time, setTime] = useState("");
  const currentDate = moment().format("YYYY-MM-DD");
  const tomorrowDate = moment().add(1, "day").format("YYYY-MM-DD");

  const isLoading = useSelector((state) =>
    isLoadingSelector([TYPES.REMOVE_ONE_SERVICE_CART], state)
  );
  useEffect(() => {
    dispatch(getCart());
    if (coupon?.addCoupons && Object.entries(coupon?.addCoupons).length != 0) {
      setdiscountAmnt(
        (coupon?.addCoupons?.discount_percentage / 100) *
          order?.getServiceCart?.amout?.total_amount
      );
    } else {
      setdiscountAmnt(0);
    }
    if (coupon?.addCoupons && Object.entries(coupon?.addCoupons).length != 0) {
      setTaxAmount(
        ((order?.getServiceCart?.amout?.total_amount -
          (coupon?.addCoupons?.discount_percentage / 100) *
            order?.getServiceCart?.amout?.total_amount) *
          order?.getServiceCart?.amout?.tax) /
          100
      );
    } else {
      setTaxAmount(
        (order?.getServiceCart?.amout?.total_amount *
          order?.getServiceCart.amout?.tax) /
          100
      );
    }
    setTotalAmount(
      order?.getServiceCart?.amout?.total_amount -
        (discountAmnt || 0) +
        taxAmount
    );
  }, [
    discountAmnt,
    order?.getServiceCart?.amout?.total_amount,
    taxAmount,
    coupon?.addCoupons,
  ]);
  const applyCouponHandler = () => {
    navigate(NAVIGATION.addCoupon, {
      params: "checkout",
      seller_id: order?.getServiceCart?.seller_id,
      order_amount: order?.getServiceCart?.amout?.total_amount,
      // service_id: order?.getCart?.service_id,
    });
  };
  const day = () => {
    if (date === currentDate) {
      return "Today, ";
    } else if (date === tomorrowDate) {
      return "Tomorrow, ";
    } else {
      return null;
    }
  };

  const bookAppointment = () => {
    if (!selectedTiming) {
      Toast.show({
        text2: "Please select time",
        position: "bottom",
        type: "error_toast",
        visibilityTime: 2000,
      });
    } else {
      // navigate(NAVIGATION.confirmAppointment);
      const body = {
        cart_id: order?.getServiceCart?.id,
        start_time: startTime,
        end_time: endTime,
        date: date,
        mode_of_payment: "jbr",
      };
      navigate(NAVIGATION.confirmAppointment, body);
    }
  };

  const removeService = (cartId, serviceId) => {
    dispatch(removeOneServiceCart(cartId, serviceId)).then((res) => {
      if (res?.payload == 0) {
        goBack();
      }
    });
  };

  const renderItem = ({ item, index }) => {
    return (
      <>
        <View style={styles.productView}>
          <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
            <Image
              source={{ uri: item?.product_details?.image }}
              style={styles.productImageStyle}
              resizeMode="contain"
            />
            <Spacer horizontal space={SW(10)} />
            <View style={{ width: "65%" }}>
              <Text style={styles.productNameText}>
                {item.product_details?.name}
              </Text>
              {/* <Text style={styles.productNameText}>
                {item.product_details?.name}
              </Text> */}
            </View>
          </View>

          <View style={{ flex: 1, alignItems: "flex-end" }}>
            <TouchableOpacity
              onPress={() => removeService(order?.getServiceCart?.id, item?.id)}
            >
              <Image
                source={cross}
                style={styles.crossIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <Spacer space={SH(15)} />

            <Text numberOfLines={1} style={styles.productPriceText}>
              $ {item?.product_details?.supply?.supply_prices?.selling_price}
            </Text>
          </View>
        </View>

        <Spacer space={SH(10)} />
      </>
    );
  };

  const renderTimings = ({ item, index }) => (
    <TouchableOpacity
      style={[
        styles.timingsView,
        {
          borderColor:
            item.title === selectedTiming ? COLORS.primary : COLORS.placeHolder,
        },
      ]}
      onPress={() => {
        setselectedTiming(item.title);
        setStartTime(item?.start_time);
        setEndTime(item?.end_time);
      }}
    >
      <Text
        style={[
          styles.timingText,
          {
            color:
              item.title === selectedTiming ? COLORS.primary : COLORS.darkGrey,
          },
        ]}
      >
        {item.title}
      </Text>
    </TouchableOpacity>
  );

  const marked = useMemo(() => {
    return {
      [setDate]: {
        dotColor: "red",
        marked: true,
      },
      [date]: {
        selected: true,
        disableTouchEvent: true,
        selectedColor: COLORS.primary,
        selectedTextColor: COLORS.white,
      },
    };
  }, [date]);
  const handleSelect = () => {
    if (!selectedTiming) {
      alert("Please select timing");
    } else {
      setCalenderModalRef(false);
    }
  };

  return (
    <ScreenWrapper style={{ flex: 1, backgroundColor: COLORS.white }}>
      <NameHeaderCoins title={strings.checkout.checkout} backRequired />

      <Spacer space={SH(10)} />

      <View style={styles.mainContainer} showsVerticalScrollIndicator={false}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* ////////////////////// */}

          <View style={styles.bookingView}>
            <Image
              source={calenderClock}
              resizeMode="contain"
              style={styles.calenderIconStyle}
            />
            <Spacer horizontal space={SH(10)} />
            <View>
              <Text style={styles.appointmentTimeHeading}>
                {"Appointment time"}
              </Text>
              <Text style={styles.dateText}>
                {day()}
                {moment(date, "YYYY-MM-DD").format("MMM DD, YYYY")}
              </Text>
              <View style={styles.rowAlign}>
                {selectedTiming ? (
                  <>
                    <Text style={styles.timeText}>{selectedTiming}</Text>

                    <Spacer horizontal space={SW(10)} />

                    <TouchableOpacity onPress={() => setCalenderModalRef(true)}>
                      <Text style={styles.selectText}>{"change"}</Text>
                    </TouchableOpacity>
                  </>
                ) : (
                  <TouchableOpacity onPress={() => setCalenderModalRef(true)}>
                    <Text style={styles.selectText}>{"Select time"}</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>
          <Spacer space={SH(20)} />

          <FlatList
            showsVerticalScrollIndicator={false}
            data={order?.getServiceCart?.appointment_cart_products ?? []}
            renderItem={renderItem}
            keyExtractor={(item) => item?.id}
            extraData={order?.getServiceCart?.appointment_cart_products ?? []}
          />

          <Spacer space={SH(10)} />
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
                <Spacer space={SH(20)} />
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
                <Spacer space={SH(20)} />
              </>
            )}
          </>

          <View style={styles.subtotalBackground}>
            <View style={styles.subtotalView}>
              <Text style={styles.feeText}>{"Subtotal"}</Text>
              <Text style={styles.feeText}>
                {"$ "}
                {order?.getServiceCart?.amout?.total_amount?.toFixed(2)}
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
                {"$ "}
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
            onPress={bookAppointment}
          >
            <View style={styles.missingAddressButtonView}>
              <Text style={styles.placeOrderText}>
                {strings.checkout.bookAppointment}
              </Text>
              <View style={styles.box}>
                <Image
                  resizeMode="contain"
                  source={forwardArrowWhite}
                  style={{
                    tintColor: COLORS.green,
                    height: SH(15),
                    width: SW(25),
                  }}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <Spacer space={SH(15)} />
      </View>
      <Modal
        isVisible={calenderModalRef}
        backdropColor="FFFFFF"
        backdropOpacity={0}
        onBackdropPress={() => setCalenderModalRef(false)}
        onBackButtonPress={() => setCalenderModalRef(false)}
        transparent={true}
        style={{
          backgroundColor: COLORS.white,
          flex: 1,
          position: "absolute",
          left: 0,
          right: 0,
          top: -20,
          bottom: 0,
          marginHorizontal: SW(-8),
        }}
      >
        <View style={{ paddingHorizontal: SW(20) }}>
          <Calendar
            style={{}}
            theme={{
              textMonthFontSize: ms(13),
              textMonthFontWeight: "bold",
              arrowColor: COLORS.darkGrey,
              textDayStyle: styles.dayText,
              textDayFontSize: ms(13),
              selectedDayTextColor: COLORS.white,
              selectedDayBackgroundColor: "red",
              arrowStyle: "arrow",
              todayTextColor: COLORS.black,
            }}
            onDayPress={(day) => {
              setDate(day.dateString);
            }}
            markedDates={marked}
          />
          <Spacer space={SH(30)} />

          <FlatList
            columnWrapperStyle={{ justifyContent: "flex-start" }}
            data={ServiceBookingTimings}
            keyExtractor={(item) => item.id}
            renderItem={renderTimings}
            numColumns={3}
          />
          <Spacer space={SH(50)} />
          <Button title={"Select"} onPress={handleSelect} />
        </View>
      </Modal>

      {isLoading && (
        <ActivityIndicator
          size="large"
          color="#0000ff"
          style={styles.loaderStyle}
        />
      )}
    </ScreenWrapper>
  );
}
