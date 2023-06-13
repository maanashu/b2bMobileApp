import React, { useEffect } from "react";
import { View, FlatList } from "react-native";
import { PurchaseView, ScreenWrapper, Spacer } from "@/components";
import { SH, SW } from "@/theme";
import { Shoes2, womenShoes, yewiLogo } from "@/assets";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "@/selectors/UserSelectors";
import { getOrderList } from "@/actions/OrderAction";

export function NewOrders() {
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  console.log("user>", user?.user?.payload?.uuid);
  const object = {
    page: 1,
    limit: 10,
    seller_id: user?.user?.payload?.uuid,
    status: 0,
  };
  useEffect(() => {
    dispatch(getOrderList(object));
  }, []);

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
    {
      id: 2,
      productImage: Shoes2,
      companyLogo: yewiLogo,
      companyName: "Yiwu Leqi E-Commerce Firm",
      productName: "Men Sneakers Men Shoes Lightweight Running Shoes",
      quantity: "5000 Pairs",
      price: "US$ 1.4",
      orderedAmount: "USD $7056.00",
      date: "14 Jun, 21:33",
    },
  ];

  const renderItem = ({ item, index }) => (
    <>
      <PurchaseView
        onPress={() => navigate(NAVIGATION.myOrders, { item: "pending" })}
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
      <Spacer space={SH(20)} />

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
