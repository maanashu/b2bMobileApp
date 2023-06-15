import React from "react";
import { View, FlatList, Text } from "react-native";
import { PurchaseView, ScreenWrapper, Spacer } from "@/components";
import { SF, SH, SW } from "@/theme";
import { Fonts, womenShoes, yewiLogo } from "@/assets";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";
import { getOrderDetails } from "@/actions/OrderAction";
import { isLoadingSelector } from "@/selectors/StatusSelectors";
import { TYPES } from "@/Types/Types";
import { useDispatch, useSelector } from "react-redux";
import { orderSelector } from "@/selectors/OrderSelector";
import { Loader } from "@/components/Loader";
import moment from "moment";

export function Completed() {
  const dispatch = useDispatch();
  const order = useSelector(orderSelector);

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
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={(item) => (
            <View>
              <Text style={{ fontFamily: Fonts.Bold, fontSize: SF(20) }}>
                No Completed Order Yet
              </Text>
            </View>
          )}
        />
      </View>
      {isLoading ? <Loader message="Loading your orders ..." /> : null}
    </ScreenWrapper>
  );
}
