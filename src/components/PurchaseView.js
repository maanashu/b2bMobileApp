import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Spacer } from "@/components";
import { COLORS, SF, SH, SW } from "@/theme";
import { Fonts } from "@/assets";

export function PurchaseView({
  companyName,
  companyLogo,
  productImage,
  productName,
  quantity,
  date,
  orderedAmount,
  price,
  onPress,
}) {
  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        style={{
          borderWidth: 1,
          borderColor: COLORS.light_border,
          paddingVertical: SH(10),
          paddingHorizontal: SH(10),
          borderRadius: SH(5),
          marginBottom: SH(15),
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={companyLogo}
            resizeMode="contain"
            style={{ height: SW(25), width: SW(25), marginRight: SW(10) }}
          />
          <Text
            style={{
              fontFamily: Fonts.SemiBold,
              fontSize: SF(14),
              color: COLORS.black,
            }}
          >
            {companyName}
          </Text>
        </View>

        <Spacer space={SH(10)} />
        <View style={styles.bottomLine}></View>
        <Spacer space={SH(10)} />

        <View style={{ flexDirection: "row" }}>
          <Image
            source={productImage}
            resizeMode="contain"
            style={{ height: SW(70), width: SW(70), borderRadius: SW(15) }}
          />

          <View style={{ flex: 1, marginTop: SH(10), marginLeft: SW(5) }}>
            <Text
              style={{
                fontFamily: Fonts.Regular,
                fontSize: SF(13),
                color: COLORS.text,
              }}
            >
              {productName}
            </Text>

            <Spacer space={SH(6)} />

            <Text
              style={{
                fontFamily: Fonts.SemiBold,
                fontSize: SF(12),
                color: COLORS.darkGrey,
              }}
            >
              {"US$ "} {price} x{" "}
              <Text>
                {quantity}
                {" Pieces"}
              </Text>
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: SW(5),
          }}
        >
          <Text
            style={{
              fontFamily: Fonts.Regular,
              fontSize: SF(11),
              color: COLORS.black,
            }}
          >
            {date}
          </Text>
          <Text
            style={{
              fontFamily: Fonts.Regular,
              fontSize: SF(11),
              color: COLORS.black,
            }}
          >
            Ordered amount:{" "}
            <Text
              style={{
                fontFamily: Fonts.SemiBold,
                fontSize: SF(12),
                color: COLORS.darkGrey,
              }}
            >
              {orderedAmount}
            </Text>
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
}
export const styles = StyleSheet.create({
  bottomLine: {
    borderBottomWidth: 1,
    borderColor: COLORS.light_border,
  },
});
