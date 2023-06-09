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
  Button,
  CompanyDetailView,
  ScreenWrapper,
  Spacer,
  SubHeader,
} from "@/components";
import { SH, SW } from "@/theme/ScalerDimensions";
import { COLORS } from "@/theme/Colors";
import { backArrow, messageSend, sendInquiry, yewiLogo } from "@/assets";
import { strings } from "@/localization";
import { Header } from "@/components/Header";
import { useSelector } from "react-redux";
import { getUser } from "@/selectors/UserSelectors";
import { ShadowStyles } from "@/theme";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";

export function TopRankingManufacturers() {
  const user = useSelector(getUser);
  const image = [yewiLogo, yewiLogo, yewiLogo];
  console.log("yoyo", user?.getManufacturersList);
  const renderManufacturers = ({ item }) => (
    <>
      <TouchableOpacity
        style={{
          paddingVertical: SH(15),
          borderRadius: SW(10),
          ...ShadowStyles.shadow2,
        }}
        onPress={() => navigate(NAVIGATION.aboutBusiness)}
      >
        <CompanyDetailView
          profilePhoto={user?.user_profiles?.banner_image}
          title={item?.user_profiles?.organization_name}
          locationText={item?.user_profiles?.overview?.[0]?.country}
          rating={item?.sellerRating?.rating}
        />
        <Spacer space={SW(8)} />
        <FlatList
          data={item?.user_profiles?.manufacturer_images ?? []}
          extraData={item?.user_profiles?.manufacturer_images}
          numColumns={3}
          renderItem={renderImages}
        />

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
    <>
      <View
        style={{
          paddingHorizontal: SW(15),
          justifyContent: "space-between",
          flex: 1 / 3,
          paddingBottom: SH(5),
        }}
      >
        <Image
          source={{ uri: item }}
          style={{ height: SH(65), width: SW(80), borderRadius: SW(5) }}
          resizeMode="cover"
        />
      </View>
    </>
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
