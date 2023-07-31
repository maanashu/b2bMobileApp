import React, { useCallback } from "react";
import { View, FlatList, Text } from "react-native";
import { PurchaseView, ScreenWrapper } from "@/components";
import { SF, SH, SW } from "@/theme";
import { Fonts } from "@/assets";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "@/selectors/UserSelectors";
import { orderSelector } from "@/selectors/OrderSelector";
import { getMyServicesList } from "@/actions/OrderAction";
import moment from "moment";
import { useFocusEffect } from "@react-navigation/native";
import { isLoadingSelector } from "@/selectors/StatusSelectors";
import { TYPES } from "@/Types/Types";
import { Loader } from "@/components/Loader";

export function Processing() {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const order = useSelector(orderSelector);

  const isLoading = useSelector((state) =>
    isLoadingSelector([TYPES.GET_MY_SERVICES_LIST], state)
  );
  const getOrder = () => {
    const body = {
      status: 1,
    };
    dispatch(getMyServicesList(body));
  };
  useFocusEffect(
    useCallback(() => {
      getOrder();
    }, [])
  );
  const renderItem = ({ item, index }) => (
    <>
      <PurchaseView
        // onPress={() => {
        //   navigate(NAVIGATION.confirmOrder);
        //   dispatch(getOrderDetails(item?.id));
        // }}
        companyLogo={{
          uri:
            item?.seller_details?.profile_photo ||
            item?.seller_details?.banner_image,
        }}
        companyName={
          item?.seller_details?.username ||
          item?.seller_details?.firstname + " " + item?.seller_details?.lastname
        }
        price={item?.order_details?.[0]?.price}
        quantity={item?.order_details?.[0]?.qty}
        orderedAmount={item?.payable_amount}
        productImage={{ uri: item?.appointment_details?.[0]?.product_image }}
        productName={item?.appointment_details?.[0]?.product_name}
        date={moment(item?.created_at).utc().format("DD MMM, HH:mm ")}
      />
    </>
  );

  return (
    <ScreenWrapper>
      <View
        style={{
          paddingHorizontal: SW(20),
          width: "100%",
          marginBottom: SH(10),
        }}
      >
        <FlatList
          showsVerticalScrollIndicator={false}
          data={order?.myServicesList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={(item) => (
            <View style={{ flex: 1, marginTop: SH(250), alignItems: "center" }}>
              <Text style={{ fontFamily: Fonts.Bold, fontSize: SF(20) }}>
                No Processing Service
              </Text>
            </View>
          )}
        />
      </View>
      {isLoading ? <Loader message="Loading your services ..." /> : null}
    </ScreenWrapper>
  );
}
