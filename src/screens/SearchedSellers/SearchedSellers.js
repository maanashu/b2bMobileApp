import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { ScreenWrapper, Spacer } from "@/components";
import { useSelector } from "react-redux";
import { styles } from "./SearchedSellers.styles";
import { SH, SW } from "@/theme";
import { Loader } from "@/components/Loader";
import { isLoadingSelector } from "@/selectors/StatusSelectors";
import { getProductSelector } from "@/selectors/ProductSelectors";
import FastImage from "react-native-fast-image";
import { TYPES } from "@/Types/Types";
import {
  circleStar,
  clockTiming,
  deliveryParcel,
  staticBackground,
} from "@/assets";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";

export function SearchedSellers() {
  const sellers = useSelector(getProductSelector);

  const isLoading = useSelector((state) =>
    isLoadingSelector([TYPES.GET_PRODUCTS_SELLERS], state)
  );

  const renderItem = ({ item }) => {
    return (
      <>
        <TouchableOpacity
          style={styles.Item}
          onPress={() =>
            navigate(NAVIGATION.productsBySeller, {
              sellerId: item?.unique_uuid,
              idSeller: item?.id,
            })
          }
        >
          <FastImage
            source={
              item?.user_profiles?.banner_image
                ? { uri: item?.user_profiles?.banner_image }
                : staticBackground
            }
            style={{ height: SH(187), borderRadius: SW(5) }}
            resizeMode="cover"
          />

          <View style={styles.textView}>
            <Text style={styles.sellerNameText}>
              {item?.user_profiles?.organization_name ||
                item?.user_profiles?.firstname +
                  item?.user_profiles?.lastname ||
                "Seller" ||
                "Seller"}
            </Text>
            <Spacer space={SH(3)} />

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={circleStar}
                resizeMode="contain"
                style={styles.startIcon}
              />
              <Text style={styles.detailText}>
                {item?.sellerRating?.rating}
              </Text>
              <Spacer horizontal />
              <Image
                source={clockTiming}
                resizeMode="contain"
                style={styles.startIcon}
              />
              <Text style={styles.detailText}>
                {item?.distance?.time + " min"}
              </Text>

              <Spacer horizontal />
              <Image
                source={deliveryParcel}
                resizeMode="contain"
                style={styles.startIcon}
              />
              <Text style={styles.detailText}>
                {item?.deliveryFee + " Delivery fee"}
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <Spacer space={SW(10)} />
      </>
    );
  };
  return (
    <ScreenWrapper containerPropStyle={styles.container}>
      <View style={{ paddingHorizontal: SW(15) }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={sellers?.getProductsSellersList?.sellers}
          extraData={sellers?.getProductsSellersList?.sellers}
          renderItem={renderItem}
          ListHeaderComponent={() => (
            <View>
              <Spacer space={SW(10)} />
              <Text style={styles.headerText}>
                {(sellers?.getProductsSellersList?.sellers?.length || "0") +
                  " Results"}
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
