import React from "react";
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { NameHeader, ScreenWrapper, Spacer } from "@/components";
import { useSelector } from "react-redux";
import { styles } from "./SellersByProduct.styles";
import { COLORS, SF, SH, SW } from "@/theme";
import { Loader } from "@/components/Loader";
import { isLoadingSelector } from "@/selectors/StatusSelectors";
import { getProductSelector } from "@/selectors/ProductSelectors";
import FastImage from "react-native-fast-image";
import {
  backArrow,
  circleStar,
  clockTiming,
  deliveryParcel,
  staticBackground,
} from "@/assets";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";
import { TYPES } from "@/actions/UserActions";
import { getUser } from "@/selectors/UserSelectors";

export function SellersByProduct(props) {
  const sellers = useSelector(getUser);

  const isLoading = useSelector((state) =>
    isLoadingSelector([TYPES.GET_SELLERS], state)
  );
  const renderItem = ({ item }) => {
    return (
      <>
        <TouchableOpacity
          style={styles.Item}
          onPress={() =>
            navigate(NAVIGATION.productInquiry, {
              itemId: props?.route?.params?.itemId,
              seller_id: item?.unique_uuid,
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
      <NameHeader back title={"Sellers"} />
      <ScrollView style={{ paddingHorizontal: SW(15) }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={sellers?.getSellersList}
          extraData={sellers?.getSellersList}
          renderItem={renderItem}
          ListHeaderComponent={() => (
            <View>
              <Spacer space={SW(10)} />
              <Text style={styles.headerText}>
                {(sellers?.getSellersList?.length || "0") + " Results"}
              </Text>
              <Spacer space={SW(10)} />
            </View>
          )}
        />
      </ScrollView>
      {isLoading && <Loader message="Loading Sellers..." />}
    </ScreenWrapper>
  );
}
