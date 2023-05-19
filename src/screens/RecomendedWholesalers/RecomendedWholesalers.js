import {
  Image,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  FlatList,
} from "react-native";
import React from "react";
import { styles } from "./RecomendedWholesalers.styles";
import { ScreenWrapper, Spacer, SubHeader } from "@/components";
import { SH, SW } from "@/theme/ScalerDimensions";
import { COLORS } from "@/theme/Colors";
import { navigate } from "@/navigation/NavigationRef";
import {
  sendInquiry,
  boxStar,
  yiwuJean1,
  yiwuJean3,
  yiwuJean2,
  yewiLogo,
  yewiCertified,
  location,
  star,
  clock,
  backArrow,
  starBadge,
  circleStar,
  deliveryParcel,
  clockTiming,
} from "@/assets";
import { strings } from "@/localization";
import { NAVIGATION } from "@/constants";
import { ms, vs } from "react-native-size-matters";
import { Header } from "@/components/Header";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "@/selectors/UserSelectors";

export function RecomendedWholesalers() {
  const dispatch = useDispatch();

  const wholesalers = useSelector(getUser);

  const capitalizeWords = (str) => {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const renderWholeSalers = ({ item }) => {
    const inputString = item?.user_profiles?.organization_name;
    const capitalizedString = capitalizeWords(inputString);
    return (
      <>
        <TouchableOpacity style={styles.backgroundView}>
          <View style={styles.rowView}>
            <Image
              source={{ uri: item?.user_profiles?.profile_photo }}
              style={styles.imageStyle}
              resizeMode="cover"
            />
            <Spacer horizontal space={SH(15)} />
            <View>
              <Text style={styles.organizationText}>{capitalizedString}</Text>

              <Spacer space={SH(5)} />

              <View style={styles.rowView}>
                <Image
                  source={circleStar}
                  resizeMode="contain"
                  style={styles.Icons}
                />
                <Spacer horizontal space={SH(5)} />
                <Text style={styles.secondaryText}>
                  {item?.sellerRating?.rating}
                </Text>
              </View>
              <Spacer space={SH(2)} />

              <View style={styles.rowView}>
                <Image
                  source={clockTiming}
                  resizeMode="contain"
                  style={styles.Icons}
                />
                <Spacer horizontal space={SH(5)} />
                <Text style={styles.secondaryText}>{"25-30 Min"}</Text>
              </View>
              <Spacer space={SH(2)} />

              <View style={styles.rowView}>
                <Image
                  source={deliveryParcel}
                  resizeMode="contain"
                  style={styles.Icons}
                />
                <Spacer horizontal space={SH(5)} />

                <Text style={styles.secondaryText}>
                  {item?.deliveryFee}
                  {" Delivery Fee"}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <Spacer space={SH(20)} />
      </>
    );
  };
  return (
    <ScreenWrapper style={{ flex: 1, backgroundColor: COLORS.white }}>
      <Header
        title={"Recommended Wholesalers"}
        back={backArrow}
        enableBackButton
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.mainContainer}
      >
        <View style={styles.upperView}>
          <SubHeader
            title={"Recommended Wholesalers"}
            subTitle={strings.topRankingManufacturers.subText}
          />
        </View>

        <Spacer space={SH(20)} />

        <View style={{ flex: 1, paddingHorizontal: SW(20) }}>
          <FlatList
            data={wholesalers?.getSellersList}
            extraData={wholesalers?.getSellersList}
            renderItem={renderWholeSalers}
          />
        </View>
      </ScrollView>

      <Spacer space={SH(10)} />
    </ScreenWrapper>
  );
}
