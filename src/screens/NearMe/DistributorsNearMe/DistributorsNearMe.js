import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { ScreenWrapper } from "@/components";
import { styles } from "./DistributorsNearMe.styles";
import { SW, SH } from "@/theme";
import { nearMeData } from "@/constants/flatlistData";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "@/selectors/UserSelectors";
import { forward } from "@/assets";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";
import { saveManufacturerDetail } from "@/actions/ProductActions";

export function DistributorsNearMe() {
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
    const { unique_uuid } = profile;
    if (sellerType[seller_type]) {
      sellerType[seller_type].push({
        username,
        profile_photo,
        unique_uuid,
      });
    }
  });

  const renderItem = ({ item }) => (
    <>
      <TouchableOpacity
        style={styles.touchableView}
        onPress={() => {
          // navigate(NAVIGATION.aboutBusiness);
          // dispatch(saveManufacturerDetail(item));
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
            {sellerTypeCounts.whole_seller} Wholesalers found
          </Text>
        </View>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={sellerType?.whole_seller}
          renderItem={renderItem}
          keyExtractor={(item) => item.username}
        />
      </View>
    </ScreenWrapper>
  );
}
