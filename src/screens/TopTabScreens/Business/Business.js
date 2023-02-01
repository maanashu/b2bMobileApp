import React, { useEffect } from "react";
import {
  Dimensions,
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
import { SliderBox } from "react-native-image-slider-box";
import { navigate } from "@/navigation/NavigationRef";
import {
  Fonts,
  forward,
  roundAll,
  roundApparel,
  roundAppliance,
  roundElectronices,
  roundPersonal,
  roundShoes,
  roundSports,
  roundTobbacco,
  slideImage,
  headphones,
  lighter,
  jacket,
  shoesBusiness,
  watch,
  boots,
} from "@/assets";
import { LastData } from "@/screens/Products/ProductsInquiry/FlatlistData";
import { ms, vs } from "react-native-size-matters";
import { NAVIGATION } from "@/constants";
import { Search } from "@/components/Search";
import { strings } from "@/localization";
import SwiperFlatList from "react-native-swiper-flatlist";
import { useDispatch, useSelector } from "react-redux";
import { getBannerSelector } from "@/selectors/BannerSelectors";
import { getBanners } from "@/actions/BannerActions";
import { getCategorySelector } from "@/selectors/CategorySelectors";
import { getCategory } from "@/actions/CategoryActions";
export function Business() {
  const [selectedId, setSelectedId] = useState("");
  const [product, setProduct] = useState("");

  const dispatch = useDispatch();
  const categoryData = useSelector(getCategorySelector);
  const categoryArray = categoryData?.categories;
  const splicedArray = categoryArray?.slice(0, 8);
  const [viewAll, setviewAll] = useState(splicedArray);

  const BannerData = useSelector(getBannerSelector);
  const BannerList = BannerData?.banners;

  useEffect(() => {
    dispatch(getCategory());
    dispatch(getBanners());
  }, []);

  const DATA = [
    {
      id: "1",
      title: "Apparel",
      image: roundApparel,
    },
    {
      id: "2",
      title: "Electronics",
      image: roundElectronices,
    },
    {
      id: "3",
      title: "Appliance",
      image: roundAppliance,
    },
    {
      id: "4",
      title: "Personal Care",
      image: roundPersonal,
    },
    {
      id: "5",
      title: "Sports",
      image: roundSports,
    },
    {
      id: "6",
      title: "Shoes",
      image: roundShoes,
    },
    {
      id: "7",
      title: "Tobbacco",
      image: roundTobbacco,
    },
    {
      id: "8",
      title: "All",
      image: roundAll,
    },
  ];
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

  const Item = ({ item, index }) => (
    <>
      {index == 7 ? (
        <TouchableOpacity
          onPress={() => {
            viewAll === categoryArray
              ? setviewAll(splicedArray)
              : setviewAll(categoryArray);
          }}
          style={{ alignItems: "center" }}
        >
          <Image
            source={roundAll}
            resizeMode="contain"
            style={{ height: SW(85), width: SW(85), marginTop: SH(2) }}
          />
          <Text style={[styles.title, { marginTop: SH(-18) }]}>
            {viewAll === categoryArray ? "Less" : "All"}
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.item}
          onPress={() => setSelectedId(item.name)}
        >
          <Image source={{ uri: item.image }} style={styles.roundIcons} />

          <Text numberOfLines={1} style={styles.title}>
            {item.name}
          </Text>
        </TouchableOpacity>
      )}
    </>
  );

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
            data={viewAll}
            renderItem={Item}
            keyExtractor={(item) => item.id}
            extraData={viewAll}
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
            data={BannerList}
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
