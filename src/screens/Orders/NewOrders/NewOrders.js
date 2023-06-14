import React, { useEffect } from "react";
import { View, FlatList } from "react-native";
import { PurchaseView, ScreenWrapper, Spacer } from "@/components";
import { SH, SW } from "@/theme";
import { Shoes2, womenShoes, yewiLogo } from "@/assets";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "@/selectors/UserSelectors";
import { getOrderDetails, getOrderList } from "@/actions/OrderAction";
import { orderSelector } from "@/selectors/OrderSelector";
import moment from "moment";
import { isLoadingSelector } from "@/selectors/StatusSelectors";
import { TYPES } from "@/Types/Types";
import { Loader } from "@/components/Loader";

export function NewOrders() {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const order = useSelector(orderSelector);

  // console.log("user>", user?.user?.payload?.uuid);
  // console.log("orders>", JSON.stringify(order?.getAllOrdersList));
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
  const isLoading = useSelector((state) =>
    isLoadingSelector([TYPES.GET_ORDER_LIST], state)
  );
  const renderItem = ({ item, index }) => (
    <>
      <PurchaseView
        onPress={() => {
          navigate(NAVIGATION.myOrders);
          dispatch(getOrderDetails(item?.id));
        }}
        companyLogo={item?.seller_details?.profile_photo}
        companyName={item?.seller_details?.username}
        price={item?.order_details?.[0]?.price}
        quantity={item?.order_details?.[0]?.qty}
        orderedAmount={item?.order_details?.[0]?.price}
        productImage={{ uri: item?.order_details?.[0]?.product_image }}
        productName={item?.order_details?.[0]?.product_name}
        date={moment(item?.order_details?.created_at)
          .utc()
          .format("DD MMM, HH:mm ")}
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
          data={order?.getAllOrdersList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      {isLoading ? <Loader message="Loading your orders ..." /> : null}
    </ScreenWrapper>
  );
}
