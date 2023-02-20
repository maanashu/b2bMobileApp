import React, { useEffect } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./Business.style";
import { useState } from "react";
import { CustomPagination, ScreenWrapper, Spacer } from "@/components";
import { COLORS } from "@/theme/Colors";
import { SH, SW } from "@/theme/ScalerDimensions";
import { navigate } from "@/navigation/NavigationRef";
import {
  forward,
  roundAll,
  headphones,
  lighter,
  jacket,
  shoesBusiness,
  watch,
  boots,
  threeDots,
} from "@/assets";
import { NAVIGATION } from "@/constants";
import { Search } from "@/components/Search";
import { strings } from "@/localization";
import SwiperFlatList from "react-native-swiper-flatlist";
import { useDispatch, useSelector } from "react-redux";
import { getBannerSelector } from "@/selectors/BannerSelectors";
import { getBanners } from "@/actions/BannerActions";
import { getCategorySelector } from "@/selectors/CategorySelectors";
import { getCategory, getServiceCategory } from "@/actions/CategoryActions";
import FastImage from "react-native-fast-image";
export function Business() {
  const [selectedId, setSelectedId] = useState("");
  const [product, setProduct] = useState("");

  const dispatch = useDispatch();
  const categoryData = useSelector(getCategorySelector);
  const BannerData = useSelector(getBannerSelector);

  useEffect(() => {
    dispatch(getServiceCategory());
    dispatch(getBanners());
  }, []);

  const secondData = [
    {
      id: "1",
      title: strings.business.trending,
      subtitle: strings.business.electronics,
      image: headphones,
    },
    {
      id: "2",
      title: strings.business.trending,
      subtitle: strings.business.tobacco,
      image: lighter,
    },
    {
      id: "3",
      title: strings.business.trending,
      subtitle: strings.business.apparel,
      image: jacket,
    },
  ];
  const thirdData = [
    {
      id: "1",
      title: strings.business.bestSellers,
      subtitle: strings.business.shoeMan,
      image: shoesBusiness,
    },
    {
      id: "2",
      title: strings.business.bestSellers,
      subtitle: strings.business.electronics,
      image: watch,
    },
    {
      id: "3",
      title: strings.business.bestSellers,
      subtitle: strings.business.shoeMan,
      image: boots,
    },
  ];

  const Item = ({ item, index }) => {
    return (
      <>
        {index == 7 ? (
          <TouchableOpacity
            style={styles.item}
            onPress={() =>
              navigate(NAVIGATION.subCategories, { serviceType: "service" })
            }
          >
            <View style={styles.allButton}>
              <Image
                source={threeDots}
                resizeMode="contain"
                style={styles.allIcon}
              />
            </View>
            <Text numberOfLines={1} style={styles.title}>
              {"All"}
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              console.log("item id", item.id);
              setSelectedId(item.name);
              navigate(NAVIGATION.subCategories, {
                idItem: item.id,
                index: index,
                serviceType: "service",
              });
            }}
          >
            <FastImage source={{ uri: item.image }} style={styles.roundIcons} />

            <Text numberOfLines={1} style={styles.title}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      </>
    );
  };
  const secondItem = ({ item, onPress }) => (
    <View style={styles.secondFlatlist}>
      <Spacer space={SH(10)} />
      <Image source={item.image} style={styles.secondView} />

      <Spacer space={SH(10)} />

      <Text style={styles.commonFlatlistTextBold}>{item.title}</Text>
      <Text style={styles.commonFlatlistText}>{item.subtitle}</Text>
    </View>
  );
  const thirdItem = ({ item, onPress }) => (
    <View style={styles.secondFlatlist}>
      <Spacer space={SH(10)} />
      <Image source={item.image} style={styles.secondView} />

      <Spacer space={SH(10)} />

      <Text style={styles.commonFlatlistTextBold}>{item.title}</Text>
      <Text style={styles.commonFlatlistText}>{item.subtitle}</Text>
    </View>
  );
  const renderRecentItem = ({ item, index }) => (
    <TouchableOpacity style={styles.swiperStyle}>
      <Image
        source={{ uri: item.path }}
        style={styles.storeImg}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
  return (
    <ScreenWrapper>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{}}
      >
        <Spacer space={SH(10)} />

        <Search placeholder={strings.business.searchHere} />

        <Spacer space={SH(10)} />

        <View style={{ paddingHorizontal: SW(16) }}>
          <Spacer space={SH(18)} />

          <FlatList
            columnWrapperStyle={{ justifyContent: "flex-start" }}
            data={categoryData?.serviceCategoryList?.slice(0, 8) ?? []}
            renderItem={Item}
            keyExtractor={(item) => item.id}
            extraData={categoryData?.serviceCategoryList?.slice(0, 8) ?? []}
            numColumns={4}
          />
        </View>

        <Spacer space={SH(20)} />

        <View style={styles.swiperView}>
          <SwiperFlatList
            autoplay
            autoplayDelay={3}
            autoplayLoop={true}
            showPagination
            data={BannerData?.banners ?? []}
            renderItem={renderRecentItem}
            PaginationComponent={CustomPagination}
            paginationActiveColor={COLORS.black}
          />
        </View>

        <Spacer space={SH(30)} />

        <View style={styles.paddingView}>
          <View style={styles.horizontalView}>
            <View style={styles.innerViewHorizontal}>
              <View style={{ paddingHorizontal: SW(5) }}>
                <Text style={styles.boldText}>
                  {strings.business.getSamples}
                </Text>
              </View>
              <TouchableOpacity style={styles.rowView}>
                <Text style={styles.regularText}>{"See all"}</Text>
                <Image
                  resizeMode="contain"
                  source={forward}
                  style={styles.iconStyle}
                />
              </TouchableOpacity>
            </View>

            <FlatList
              data={secondData}
              renderItem={secondItem}
              keyExtractor={(item) => item.id}
              extraData={product}
              numColumns={3}
            />
          </View>
        </View>

        <Spacer space={SH(30)} />

        <View style={styles.paddingView}>
          <View style={styles.horizontalView}>
            <View style={styles.innerViewHorizontal}>
              <View style={{ paddingHorizontal: SW(5) }}>
                <Text style={styles.boldText}>
                  {strings.business.topManufactor}
                </Text>
              </View>

              <TouchableOpacity
                onPress={() => navigate(NAVIGATION.topRankingManufacturers)}
                style={styles.rowView}
              >
                <Text style={styles.regularText}>
                  {strings.business.seeAll}
                </Text>

                <Image
                  resizeMode="contain"
                  source={forward}
                  style={styles.iconStyle}
                />
              </TouchableOpacity>
            </View>

            <FlatList
              data={thirdData}
              renderItem={thirdItem}
              keyExtractor={(item) => item.id}
              extraData={product}
              numColumns={3}
            />
          </View>
        </View>

        <Spacer space={SH(30)} />
      </ScrollView>
    </ScreenWrapper>
  );
}
