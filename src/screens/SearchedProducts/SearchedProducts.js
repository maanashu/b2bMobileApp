import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { ScreenWrapper, Spacer } from "@/components";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "./SearchedProducts.styles";
import { SH, SW } from "@/theme";
import { Loader } from "@/components/Loader";
import { isLoadingSelector } from "@/selectors/StatusSelectors";
import { getProductSelector } from "@/selectors/ProductSelectors";
import { TYPES } from "@/Types/Types";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";
import { getSellers } from "@/actions/UserActions";

export function SearchedProducts() {
  const dispatch = useDispatch();
  const products = useSelector(getProductSelector);

  const isLoading = useSelector((state) =>
    isLoadingSelector([TYPES.GET_PRODUCTS_SELLERS], state)
  );
  const handleNavigation = (item) => {
    const body = {
      page: 1,
      limit: 20,
      delivery_options: "4",
      product_id: item,
    };
    dispatch(getSellers(body));
    navigate(NAVIGATION.sellersByProduct, { itemId: item });
  };
  const renderItem = ({ item }) => {
    return (
      <>
        <TouchableOpacity
          style={styles.Item}
          onPress={() => handleNavigation(item?.id)}
        >
          <Image
            source={{ uri: item?.image }}
            resizeMode="contain"
            style={styles.productImageStyle}
          />

          <Spacer space={SW(10)} />

          <Text numberOfLines={2} style={styles.productName}>
            {item?.name}
          </Text>

          <Spacer space={SW(5)} />

          <Text style={styles.priceText}>{"$ " + item?.price}</Text>
        </TouchableOpacity>

        <Spacer space={SW(10)} />
      </>
    );
  };
  return (
    <ScreenWrapper containerPropStyle={styles.container}>
      <View style={{ paddingHorizontal: SW(10), paddingTop: SH(10) }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={products?.getProductsSellersList?.products}
          extraData={products?.getProductsSellersList?.products}
          renderItem={renderItem}
          numColumns={2}
          ListHeaderComponent={() => (
            <View>
              <Text style={styles.headerText}>
                {(products?.getProductsSellersList?.products?.length || "0") +
                  " Results"}
              </Text>
              <Spacer space={SW(10)} />
            </View>
          )}
        />
      </View>
      {isLoading && <Loader message="Loading Products..." />}
    </ScreenWrapper>
  );
}
