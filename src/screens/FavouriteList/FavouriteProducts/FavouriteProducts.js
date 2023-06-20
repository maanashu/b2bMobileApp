import React from "react";
import { FlatList, Image, ScrollView, Text, View } from "react-native";
import { ScreenWrapper, Spacer } from "@/components";
import { useSelector } from "react-redux";
import { getUser } from "@/selectors/UserSelectors";
import { styles } from "./FavouriteProducts.styles";
import { SH, SW } from "@/theme";
import { Loader } from "@/components/Loader";
import { isLoadingSelector } from "@/selectors/StatusSelectors";
import { TYPES } from "@/actions/UserActions";

export function FavouriteProducts() {
  const favouriteProducts = useSelector(getUser);

  const isLoading = useSelector((state) =>
    isLoadingSelector([TYPES.GET_FAVOURITE_PRODUCTS], state)
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
        </View>

        <Spacer horizontal space={SW(10)} />
      </>
    );
  };
  return (
    <ScreenWrapper containerPropStyle={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingHorizontal: SW(20) }}
      >
        {favouriteProducts?.getFavouriteProducts?.map((item, index) => (
          <View key={index}>
            <Text style={styles.sectionHeaderName}>{item?.sellerName} </Text>

            <Spacer space={SH(15)} />

            <FlatList
              data={item?.favourite_product}
              renderItem={renderItem}
              horizontal
              showsHorizontalScrollIndicator={false}
            />

            <Spacer space={SH(15)} />
          </View>
        ))}
      </ScrollView>
      {isLoading && <Loader message="Loading your Favourite Products ..." />}
    </ScreenWrapper>
  );
}
