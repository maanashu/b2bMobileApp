import React from "react";
import { FlatList, Image, ScrollView, Text, View } from "react-native";
import { ScreenWrapper, Spacer } from "@/components";
import { useSelector } from "react-redux";
import { getUser } from "@/selectors/UserSelectors";
import { styles } from "./SearchedProducts.styles";
import { COLORS, SF, SH, SW } from "@/theme";
import { Loader } from "@/components/Loader";
import { isLoadingSelector } from "@/selectors/StatusSelectors";
import { getProductSelector } from "@/selectors/ProductSelectors";
import { TYPES } from "@/Types/Types";
import { Fonts } from "@/assets";

export function SearchedProducts() {
  const products = useSelector(getProductSelector);

  const isLoading = useSelector((state) =>
    isLoadingSelector([TYPES.GET_PRODUCTS_SELLERS], state)
  );

  const renderItem = ({ item }) => {
    return (
      <>
        <View style={styles.Item}>
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
        </View>

        <Spacer space={SW(10)} />
      </>
    );
  };
  return (
    <ScreenWrapper containerPropStyle={styles.container}>
      <View style={{ paddingHorizontal: SW(10), paddingTop: SH(10) }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={products?.getProductsSellersList?.products?.data}
          extraData={products?.getProductsSellersList?.products?.data}
          renderItem={renderItem}
          numColumns={2}
          ListHeaderComponent={() => (
            <View>
              <Text style={styles.headerText}>
                {(products?.getProductsSellersList?.products?.data?.length ||
                  "0") + " Results"}
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
