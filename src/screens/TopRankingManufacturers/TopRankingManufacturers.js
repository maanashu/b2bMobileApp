import {
  View,
  ScrollView,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { styles } from "./TopRankingManufacturers.style";
import {
  CompanyDetailView,
  ScreenWrapper,
  Spacer,
  SubHeader,
} from "@/components";
import { SH, SW } from "@/theme/ScalerDimensions";
import { COLORS } from "@/theme/Colors";
import { ProfileUser, backArrow, sendInquiry, yewiLogo } from "@/assets";
import { strings } from "@/localization";
import { Header } from "@/components/Header";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "@/selectors/UserSelectors";
import { ShadowStyles } from "@/theme";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";
import { getProduct } from "@/actions/ProductActions";
import { getOneManufactureDetails } from "@/actions/UserActions";

export function TopRankingManufacturers() {
  const user = useSelector(getUser);
  const image = [yewiLogo, yewiLogo, yewiLogo];
  const dispatch = useDispatch();

  const getProducts = (id) => {
    const data = {
      app_name: "b2b",
      delivery_options: "4",
      page: 1,
      limit: 10,
      seller_id: id,
    };
    dispatch(getProduct(data));
  };

  const renderManufacturers = ({ item }) => (
    <>
      <TouchableOpacity
        style={{
          paddingVertical: SH(15),
          borderRadius: SW(10),
          ...ShadowStyles.shadow2,
        }}
        onPress={() => {
          navigate(NAVIGATION.aboutBusiness, {
            sellerDetails: item,
          });
          getProducts(item?.unique_uuid);
          dispatch(getOneManufactureDetails(item.id));
        }}
      >
        <CompanyDetailView
          profilePhoto={
            item.user_profiles?.profile_photo
              ? { uri: item.user_profiles?.profile_photo }
              : ProfileUser
          }
          title={
            item?.user_profiles?.organization_name
              ? item?.user_profiles?.organization_name
              : "Seller"
          }
          locationText={`${item?.user_profiles?.current_address?.city}, `}
          rating={item?.sellerRating?.rating}
          country={item?.user_profiles?.current_address?.country}
        />
        <Spacer space={SW(8)} />
        <View style={{ marginHorizontal: SW(15), paddingBottom: SH(5) }}>
          <FlatList
            data={item?.user_profiles?.manufacturer_images ?? []}
            extraData={item?.user_profiles?.manufacturer_images}
            numColumns={3}
            renderItem={renderImages}
          />
        </View>

        <Spacer space={SW(8)} />

        <TouchableOpacity style={styles.sendInquiryButton}>
          <Image
            source={sendInquiry}
            resizeMode="contain"
            style={styles.sendInquiryIcon}
          />
          <Text style={styles.sendInquiryText}>
            {strings.productInquiry.sendInquiry}
          </Text>
        </TouchableOpacity>
      </TouchableOpacity>
      <Spacer space={SH(15)} />
    </>
  );
  const renderImages = ({ item }) => (
    <View
      style={{
        justifyContent: "space-between",
        flex: 1 / 3,
        marginHorizontal: SW(4),
      }}
    >
      <Image
        source={{ uri: item }}
        style={{
          height: SH(65),
          borderRadius: SW(10),
        }}
        resizeMode="cover"
      />
    </View>
  );
  return (
    <ScreenWrapper style={{ flex: 1, backgroundColor: COLORS.white }}>
      <Header
        title={strings.topRankingManufacturers.topManufacturers}
        back={backArrow}
        enableBackButton
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.mainContainer}
      >
        <View style={styles.upperView}>
          <SubHeader
            title={strings.topRankingManufacturers.topManufacturers}
            subTitle={strings.topRankingManufacturers.subText}
          />
        </View>

        <Spacer space={SH(20)} />

        <View style={{ paddingHorizontal: SW(20) }}>
          <FlatList
            data={user?.getManufacturersList ?? []}
            extraData={user?.getManufacturersList ?? []}
            renderItem={renderManufacturers}
          />
        </View>
      </ScrollView>

      <Spacer space={SH(10)} />
    </ScreenWrapper>
  );
}
