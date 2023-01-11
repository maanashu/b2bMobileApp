import { Text, View, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import { styles } from "./PastCoupons.styles";
import { ScreenWrapper, Spacer } from "@/components";
import { SH } from "@/theme/ScalerDimensions";
import { COLORS } from "@/theme/Colors";
import { ms } from "react-native-size-matters";
import { strings } from "@/localization";

export function PastCoupons() {
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

  const CouponData = ({ item, index }) => (
    <View>
      <TouchableOpacity style={styles.couponView}>
        <View style={styles.upperView}>
          <Text style={styles.upperText}>{item.couponName}</Text>

          <Text style={styles.upperText}>
            {item.currency}
            <Text style={styles.upperText}>{item.amount}</Text>
          </Text>
        </View>

        <Text style={styles.smallText}>{item.couponCode}</Text>
        <Spacer space={SH(20)} />

        <View style={styles.upperView}>
          <Text style={styles.mediumText}>
            {item.discountCurrency}
            <Text style={styles.mediumText}>{item.discountAmount} </Text>
            <Text style={styles.smallText}>{item.minMax}</Text>
          </Text>

          <Text style={styles.smallText}>
            {item.valid}
            <Text style={styles.mediumText}>{item.date}</Text>
          </Text>
        </View>
        <Spacer space={SH(15)} />

        <View
          style={{
            borderBottomWidth: 1,
            borderStyle: "dashed",
          }}
        ></View>

        <Spacer space={SH(15)} />

        <View style={styles.upperView}>
          <View
            style={{ backgroundColor: COLORS.light_yellow, borderRadius: 8 }}
          >
            <Text style={{ paddingVertical: ms(3), paddingHorizontal: ms(10) }}>
              Cigar
            </Text>
          </View>
          <Text>{strings.coupons.tc}</Text>
        </View>
      </TouchableOpacity>
      <Spacer space={SH(20)} />
    </View>
  );

  const checkCoupon = () => {};
  return (
    <ScreenWrapper style={{ flex: 1, backgroundColor: COLORS.white }}>
      <Spacer space={SH(10)} />

      <View style={styles.mainContainer}>
        <FlatList
          data={Coupons}
          renderItem={CouponData}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </ScreenWrapper>
  );
}
