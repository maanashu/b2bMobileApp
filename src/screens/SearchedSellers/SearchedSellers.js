import React from "react";
import { FlatList, Text, View } from "react-native";
import { ScreenWrapper, Spacer } from "@/components";
import { useSelector } from "react-redux";
import { styles } from "./SearchedSellers.styles";
import { COLORS, SF, SH, SW } from "@/theme";
import { Loader } from "@/components/Loader";
import { isLoadingSelector } from "@/selectors/StatusSelectors";
import { getProductSelector } from "@/selectors/ProductSelectors";
import FastImage from "react-native-fast-image";
import { TYPES } from "@/Types/Types";
import { Fonts } from "@/assets";

export function SearchedSellers() {
  const sellers = useSelector(getProductSelector);

  const isLoading = useSelector((state) =>
    isLoadingSelector([TYPES.GET_PRODUCTS_SELLERS], state)
  );

  const renderItem = ({ item }) => {
    return (
      <>
        <View style={styles.Item}>
          <FastImage
            source={{ uri: item?.user_profiles?.banner_image }}
            style={{ height: SH(187), borderRadius: SW(5) }}
            resizeMode="contain"
          />

          <View
            style={{
              position: "absolute",
              bottom: 0,
              paddingBottom: SH(10),
              paddingHorizontal: SW(10),
            }}
          >
            <Text
              style={{
                color: "white",
                fontFamily: Fonts.SemiBold,
                fontSize: SF(16),
              }}
            >
              {item?.user_profiles?.organization_name ||
                item?.user_profiles?.firstname +
                  " " +
                  item?.user_profiles?.lastname ||
                "Seller"}
            </Text>
          </View>
        </View>

        <Spacer space={SW(10)} />
      </>
    );
  };
  return (
    <ScreenWrapper containerPropStyle={styles.container}>
      <View style={{ paddingHorizontal: SW(20) }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={sellers?.getProductsSellersList?.sellers?.data}
          extraData={sellers?.getProductsSellersList?.sellers?.data}
          renderItem={renderItem}
          ListHeaderComponent={() => (
            <View>
              <Spacer space={SW(10)} />
              <Text style={styles.headerText}>
                {(sellers?.getProductsSellersList?.sellers?.data?.length ||
                  "0") + " Results"}
              </Text>
              <Spacer space={SW(10)} />
            </View>
          )}
        />
      </View>
      {isLoading && <Loader message="Loading Sellers..." />}
    </ScreenWrapper>
  );
}
