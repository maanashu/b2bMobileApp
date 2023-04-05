import { Text, View, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import { styles } from "./CurrentCoupons.styles";
import { ScreenWrapper, Spacer } from "@/components";
import { SH, SW } from "@/theme/ScalerDimensions";
import { COLORS } from "@/theme/Colors";
import { ms } from "react-native-size-matters";
import { strings } from "@/localization";
import { useSelector } from "react-redux";
import { getProductSelector } from "@/selectors/ProductSelectors";
import { Fonts } from "@/assets";
import moment from "moment";
export function CurrentCoupons() {
  const Coupons = [
    {
      id: 1,
      couponName: strings.coupons.welcomeCoupon,
      currency: "USD $",
      amount: "2.00",
      couponCode: "jbvrgcu01",
      discountCurrency: "USD $",
      discountAmount: "30",
      minMax: "minimum",
      valid: strings.coupons.valid,
      date: " Jan 14, 2023",
    },
    {
      id: 2,
      couponName: strings.coupons.welcomeCoupon,
      currency: "USD $",
      amount: "2.00",
      couponCode: "jbvrgcu01",
      discountCurrency: "USD $",
      discountAmount: "30",
      minMax: "minimum",
      valid: strings.coupons.valid,
      date: " Jan 14, 2023",
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
      date: " Jan 14, 2023",
    },
  ];

  const coupon = useSelector(getProductSelector);
  // console.log("coupons->", coupon?.coupons);
  const CouponData = ({ item, index }) => {
    const formattedDate = moment(item.end_time).format("MMM DD, yyyy");
    return (
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
              <Text style={[styles.smallText, { fontFamily: Fonts.SemiBold }]}>
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
