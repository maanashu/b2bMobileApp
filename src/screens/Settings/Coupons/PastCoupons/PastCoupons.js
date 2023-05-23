import { Text, View, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import { styles } from "./PastCoupons.styles";
import { ScreenWrapper, Spacer } from "@/components";
import { SH } from "@/theme/ScalerDimensions";
import { COLORS } from "@/theme/Colors";
import { ms } from "react-native-size-matters";
import { strings } from "@/localization";
import { useSelector } from "react-redux";
import { getProductSelector } from "@/selectors/ProductSelectors";
import moment from "moment";
import { Fonts } from "@/assets";

export function PastCoupons() {
  const Coupons = [
    {
      id: 1,
      couponName: strings.coupons.welcomeCoupon,
      currency: "USD $",
      amount: "2.00",
      code: "jbvrgcu01",
      discountCurrency: "USD $",
      discount_amount: "30",
      minMax: "minimum",
      valid: strings.coupons.valid,
      end_time: " Jan 14, 2023",
      minimum_order_amount: "50",
    },
    {
      id: 2,
      couponName: strings.coupons.welcomeCoupon,
      currency: "USD $",
      discount_amount: "2.00",
      couponCode: "jbvrgcu01",
      discountCurrency: "USD $",
      discountAmount: "30",
      minMax: "minimum",
      valid: strings.coupons.valid,
      end_time: " Jan 12, 2023",
      minimum_order_amount: "50",
    },
    {
      id: 3,
      couponName: strings.coupons.welcomeCoupon,
      currency: "USD $",
      amount: "2.00",
      couponCode: "jbvrgcu01",
      discountCurrency: "USD $",
      discountAmount: "30",
      minMax: "minimum",
      valid: strings.coupons.valid,
      end_time: " Jun 14, 2023",
    },
  ];

  const coupon = useSelector(getProductSelector);

  const CouponData = ({ item, index }) => {
    const formattedDate = moment(item.end_time).format("MMM DD, yyyy");
    const isOldDate = moment(item.end_time).isBefore();
    return (
      <>
        {isOldDate && (
          <View>
            <TouchableOpacity style={styles.couponView}>
              <View style={styles.paddingView}>
                <View style={styles.upperView}>
                  <Text style={styles.upperText}>{item.code}</Text>

                  <Text style={styles.upperText}>
                    {"USD $ "}
                    {item.discount_amount}
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
                    <Text style={styles.smallText}>{" minimum"}</Text>
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
                <Text style={styles.tcText}>{strings.coupons.tc}</Text>
              </View>
            </TouchableOpacity>
            <Spacer space={SH(20)} />
          </View>
        )}
      </>
    );
  };

  const checkCoupon = () => {};
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
