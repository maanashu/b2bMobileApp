import React from "react";
import { View, FlatList } from "react-native";
import { PurchaseView, ScreenWrapper } from "@/components";
import { SW } from "@/theme";
import { womenShoes, yewiLogo } from "@/assets";

export function Completed() {
  const data = [
    {
      id: 1,
      productImage: womenShoes,
      companyLogo: yewiLogo,
      companyName: "Yiwu Leqi E-Commerce Firm",
      productName: "PUMA Men's Tazon 6 Wide Sneaker",
      quantity: "5000 Pairs",
      price: "US$ 1.4",
      orderedAmount: "USD $7056.00",
      date: "14 Jun, 21:33",
    },
  ];

  const renderItem = ({ item, index }) => (
    <>
      <PurchaseView
        companyLogo={item.companyLogo}
        companyName={item.companyName}
        price={item.price}
        quantity={item.quantity}
        orderedAmount={item.orderedAmount}
        productImage={item.productImage}
        productName={item.productName}
        date={item.date}
      />
    </>
  );

  return (
    <ScreenWrapper>
      <View
        style={{
          paddingHorizontal: SW(20),
          width: "100%",
        }}
      >
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </ScreenWrapper>
  );
}
