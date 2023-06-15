import React, { useEffect } from "react";
import { View, FlatList, Text } from "react-native";
import { PurchaseView, ScreenWrapper, Spacer } from "@/components";
import { SF, SH, SW } from "@/theme";
import { Fonts, Shoes2, womenShoes, yewiLogo } from "@/assets";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "@/selectors/UserSelectors";
import {
  getOrderDetails,
  getOrderList,
  getOrderListReset,
} from "@/actions/OrderAction";
import { orderSelector } from "@/selectors/OrderSelector";
import moment from "moment";
import { isLoadingSelector } from "@/selectors/StatusSelectors";
import { TYPES } from "@/Types/Types";
import { Loader } from "@/components/Loader";
import { useIsFocused } from "@react-navigation/native";

export function NewOrders() {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const order = useSelector(orderSelector);

  // console.log("user>", user?.user?.payload?.uuid);

  const isLoading = useSelector((state) =>
    isLoadingSelector([TYPES.GET_ORDER_LIST], state)
  );
  const renderItem = ({ item, index }) => (
    <>
      <PurchaseView
        onPress={() => {
          navigate(NAVIGATION.confirmOrder);
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
      <View
        style={{
          paddingHorizontal: SW(20),
          width: "100%",
        }}
      >
        <FlatList
          data={order?.getAllOrdersList}
          extraData={order?.getAllOrdersList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={(item) => (
            <View>
              <Text style={{ fontFamily: Fonts.Bold, fontSize: SF(20) }}>
                No New Order
              </Text>
            </View>
          )}
        />
      </View>
      {isLoading ? <Loader message="Loading your orders ..." /> : null}
    </ScreenWrapper>
  );
}
