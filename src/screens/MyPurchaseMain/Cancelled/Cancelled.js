import React, { useCallback, useState } from "react";
import {
  View,
  Image,
  Text,
  FlatList,
  useWindowDimensions,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import {
  NameHeader,
  PurchaseView,
  ScreenWrapper,
  Spacer,
  TextField,
} from "@/components";
import { styles } from "./MyPurchaseMain.styles";
import { COLORS, SF, SH, ShadowStyles, SW } from "@/theme";
import { transactionHistory } from "@/constants/flatlistData";
import { strings } from "@/localization";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";
import {
  backArrow,
  filter,
  Fonts,
  forward,
  loactionPinFilled,
  location,
  manufactureLogo,
  nearMeMap,
  shopLight,
  wareHouseLogo,
} from "@/assets";
import { useFocusEffect } from "@react-navigation/native";
import { Loader } from "@/components/Loader";
import moment from "moment";
import { getOrderList } from "@/actions/OrderAction";
import { TYPES } from "@/Types/Types";
import { isLoadingSelector } from "@/selectors/StatusSelectors";
import { useDispatch, useSelector } from "react-redux";
import { orderSelector } from "@/selectors/OrderSelector";
import { getUser } from "@/selectors/UserSelectors";
export function Cancelled() {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const order = useSelector(orderSelector);

  const isLoading = useSelector((state) =>
    isLoadingSelector([TYPES.GET_ORDER_LIST], state)
  );
  const getOrder = () => {
    const body = {
      page: 1,
      limit: 10,
      status: 7,
      user_uid: user?.user?.payload?.uuid,
    };
    dispatch(getOrderList(body));
  };
  useFocusEffect(
    useCallback(() => {
      getOrder();
      console.log("Processing screen");
    }, [])
  );
  const renderItem = ({ item, index }) => (
    <>
      <PurchaseView
        // onPress={() => {
        //   navigate(NAVIGATION.confirmOrder);
        //   dispatch(getOrderDetails(item?.id));
        // }}
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
          marginBottom: SH(10),
        }}
      >
        <FlatList
          showsVerticalScrollIndicator={false}
          data={order?.getAllOrdersList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={(item) => (
            <View style={{ flex: 1, marginTop: SH(250), alignItems: "center" }}>
              <Text style={{ fontFamily: Fonts.Bold, fontSize: SF(20) }}>
                No Cancelled Orders
              </Text>
            </View>
          )}
        />
      </View>
      {isLoading && <Loader message="Loading your orders ..." />}
    </ScreenWrapper>
  );
}
