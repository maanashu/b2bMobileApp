import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { ScreenWrapper } from "@/components";
import { styles } from "./RetailersNearMe.styles";
import { SW, SH } from "@/theme";
import { nearMeData } from "@/constants/flatlistData";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "@/selectors/UserSelectors";
import { forward } from "@/assets";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";
import { saveManufacturerDetail } from "@/actions/ProductActions";
import { getOneManufactureDetails } from "@/actions/UserActions";

export function RetailersNearMe() {
  const sellers = useSelector(getUser);
  const dispatch = useDispatch();

  const store = sellers?.nearMeSellers;

  const sellerTypeCounts = {
    retailer: 0,
    manufacturer: 0,
    null: 0,
    whole_seller: 0,
  };

  store.forEach((profile) => {
    const { seller_type } = profile.user_profiles;
    sellerTypeCounts[seller_type] += 1;
  });

  const sellerType = {
    retailer: [],
    manufacturer: [],
    null: [],
    whole_seller: [],
  };

  store.forEach((profile) => {
    const { seller_type } = profile.user_profiles;
    const { username, profile_photo } = profile.user_profiles;
    const { id } = profile;
    if (sellerType[seller_type] && username) {
      sellerType[
        seller_type === "retailer" || !seller_type ? "retailer" : "null"
      ].push({ username, profile_photo, id });
    }
  });

  const renderItem = ({ item }) => (
    <>
      <TouchableOpacity
        style={styles.touchableView}
        onPress={() => {
          navigate(NAVIGATION.aboutBusiness);
          dispatch(getOneManufactureDetails(item?.id));
        }}
      >
        <View style={styles.rowView}>
          <View style={styles.imgBackground}>
            <Image
              source={{ uri: item?.profile_photo }}
              style={styles.iconStyle}
              resizeMode="contain"
            />
          </View>
          <View style={{ marginLeft: SW(10) }}>
            <Text style={styles.boldText}>{item?.username}</Text>
            {/* <Text style={styles.regularText}>{item.distance}</Text> */}
          </View>
        </View>

        <View>
          <Image
            source={forward}
            resizeMode="contain"
            style={styles.iconStyle}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.bottomLine}></View>
    </>
  );
  return (
    <ScreenWrapper>
      <View style={{ paddingHorizontal: SW(20), flex: 1 }}>
        <View style={{ paddingBottom: SH(15), paddingTop: SH(15) }}>
          <Text style={styles.headingText}>
            {sellerTypeCounts.retailer + sellerTypeCounts?.null} Retailers found
          </Text>
        </View>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={[...sellerType?.retailer, ...sellerType?.null]}
          renderItem={renderItem}
          keyExtractor={(item) => item.username}
        />
      </View>
    </ScreenWrapper>
  );
}
