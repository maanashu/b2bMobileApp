import { Text, View, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import { styles } from "./CurrentCoupons.styles";
import { ScreenWrapper, Spacer } from "@/components";
import { SH } from "@/theme/ScalerDimensions";
import { COLORS } from "@/theme/Colors";
import { strings } from "@/localization";
import { useDispatch, useSelector } from "react-redux";
import { getProductSelector } from "@/selectors/ProductSelectors";
import { Fonts } from "@/assets";
import moment from "moment";
import { addCoupon } from "@/actions/ProductActions";
import { goBack } from "@/navigation/NavigationRef";
export function CurrentCoupons(params) {
  const coupon = useSelector(getProductSelector);
  const dispatch = useDispatch();
  const applyCoupon = (item) => {
    const data = {
      code: item?.code,
      seller_id: params?.route?.params?.seller_id,
      service_id: params?.route?.params?.service_id,
      order_amount: params?.route?.params?.order_amount,
    };
    dispatch(addCoupon(data)).then((res) => goBack());
  };

  const CouponData = ({ item, index }) => {
    const formattedDate = moment(item.end_time).format("MMM DD, yyyy");
    const isOldDate = moment(item.end_time).isBefore();
    return (
      <>
        {!isOldDate && (
          <View style={styles.couponView}>
            <View style={styles.paddingView}>
              <View style={styles.upperView}>
                <Text style={styles.upperText}>{item.code}</Text>

                <Text style={styles.upperText}>
                  {"Save Upto "}
                  {item?.discount_percentage + " %"}
                </Text>
              </View>

              {/* <Text style={styles.smallText}>{item.code}</Text> */}
              <Spacer space={SH(20)} />

              <View style={styles.upperView}>
                <Text
                  style={[styles.smallText, { fontFamily: Fonts.SemiBold }]}
                >
                  {"USD $ "}
                  {item.minimum_order_amount}
                  <Text style={styles.smallText}>{" min order"}</Text>
                </Text>

                <Text style={styles.smallText}>
                  {"Valid until  "}
                  <Text style={styles.mediumText}>{formattedDate}</Text>
                </Text>
              </View>
            </View>
            <Spacer space={SH(15)} />
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={styles.dashedLine}></View>

              <View style={styles.cutOutView}></View>
            </View>

            <Spacer space={SH(5)} />

            <View style={styles.bottomView}>
              {params?.route?.params?.order_amount >
              item?.minimum_order_amount ? (
                <TouchableOpacity
                  style={styles.applyButton}
                  onPress={() => applyCoupon(item)}
                >
                  <Text style={styles.applyText}>{"Apply"}</Text>
                </TouchableOpacity>
              ) : (
                <View
                  style={[styles.applyButton, { backgroundColor: "#B8B8B8" }]}
                >
                  <Text style={styles.applyText}>{"Apply"}</Text>
                </View>
              )}

              <Text style={styles.tcText}>{strings.coupons.tc}</Text>
            </View>
          </View>
        )}
        <Spacer space={SH(10)} />
      </>
    );
  };
  return (
    <ScreenWrapper style={{ flex: 1, backgroundColor: COLORS.white }}>
      <Spacer space={SH(10)} />

      <View style={styles.mainContainer}>
        <FlatList
          data={coupon?.coupons}
          renderItem={CouponData}
          extradata={coupon?.coupons}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </ScreenWrapper>
  );
}
