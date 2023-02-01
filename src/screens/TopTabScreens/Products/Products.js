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
import { styles } from "./Products.styles";
import { useState } from "react";
import {
  CompanyDetailView,
  CustomPagination,
  ScreenWrapper,
  Spacer,
} from "@/components";
import { COLORS } from "@/theme/Colors";
import { SH, SW } from "@/theme/ScalerDimensions";
import { navigate } from "@/navigation/NavigationRef";
import { forward, roundAll, slideImage } from "@/assets";
import {
  LastData,
  fourthData,
  thirdData,
  secondData,
} from "./Components/FlatlisitData";
import { ms } from "react-native-size-matters";
import { NAVIGATION } from "@/constants";
import { Search } from "@/components/Search";
import { strings } from "@/localization";
import SwiperFlatList from "react-native-swiper-flatlist";
import { useDispatch, useSelector } from "react-redux";
import { getCategorySelector } from "@/selectors/CategorySelectors";
import { getCategory } from "@/actions/CategoryActions";
import { getBanners } from "@/actions/BannerActions";
import { getBannerSelector } from "@/selectors/BannerSelectors";

export function Products({ navigation }) {
  const dispatch = useDispatch();
  const categoryData = useSelector(getCategorySelector);
  const categoryArray = categoryData?.categories;
  const splicedArray = categoryArray?.slice(0, 8);
  const [viewAll, setviewAll] = useState(splicedArray);
  const [selectedId, setSelectedId] = useState("");
  const [product, setProduct] = useState("");

  const BannerData = useSelector(getBannerSelector);
  const BannerList = BannerData?.banners;

  useEffect(() => {
    dispatch(getCategory());
    dispatch(getBanners());
  }, []);

  function dynamicHeight(_index) {
    if (_index % 2 == 0) {
      return SH(275);
    } else if (_index % 2 !== 0) {
      return SH(255);
    } else {
      return SH(230);
    }
  }
  function dynamicImageHeight(_index) {
    if (_index % 2 == 0) {
      return SH(170);
    } else if (_index % 2 !== 0) {
      return SH(150);
    } else {
      return SH(100);
    }
  }
  function dynamicMarginTop(_index) {
    if (_index === 1) {
      return;
    } else if (_index % 2 !== 0) {
      return SH(-30);
    } else {
      return SH(10);
    }
  }
  function dynamicMarginBottom(_index) {
    if (_index % 2 == 0) {
      return 10;
    } else if (_index % 2 !== 0) {
      return SH(-70);
    } else {
      return SH(37);
    }
  }

  const renderItem = ({ item, index }) => (
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
    <View style={styles.item}>
      <Image source={item.image} style={styles.secondView} />

      <Spacer space={SH(10)} />

      <Text style={styles.commonFlatlistText}>{item.title}</Text>
    </View>
  );

  const thirdItem = ({ item, onPress }) => (
    <TouchableOpacity style={styles.item}>
      <Image source={item.image} style={styles.thirdView} />

      <Spacer space={SH(10)} />
      <Text style={styles.yiwuPriceText}>{item.price}</Text>
      <Text style={styles.yiwuItemTitleText}>{item.title}</Text>
    </TouchableOpacity>
  );

  const listDetail = ({ item, index }) => (
    <TouchableOpacity
      style={[
        styles.ShoesStyle,
        {
          height: dynamicHeight(index),
          marginTop: dynamicMarginTop(index),
          marginBottom: dynamicMarginBottom(index),
        },
      ]}
    >
      <Spacer space={SH(10)} />
      <View style={{ alignItems: "center" }}>
        <Image
          source={item.image}
          resizeMode="contain"
          style={{
            width: ms(150),
            height: dynamicImageHeight(index),
          }}
        />
      </View>
      <Text style={styles.productsTitle}>
        {item.title}
        <Text style={styles.productSubTitle}> {item.subTitle}</Text>
      </Text>
      <Spacer space={SH(2)} />
      <Text style={styles.productsQuantity}>{item.pieces}</Text>
      <Spacer space={SH(5)} />

      <Text style={styles.priceText}>
        {item.price}
        <Text style={styles.categoryText}>{item.category}</Text>
      </Text>
    </TouchableOpacity>
  );

  const renderRecentItem = ({ item, index }) => (
    <TouchableOpacity
      style={{
        width: Dimensions.get("window").width,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
      }}
    >
      <Image
        source={{ uri: item.path }}
        style={styles.storeImg}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );

  return (
    <ScreenWrapper>
      <Spacer space={SH(10)} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Search placeholder={strings.business.searchHere} />

        <Spacer space={SH(10)} />

        <View style={{ paddingHorizontal: SW(16) }}>
          <Spacer space={SH(18)} />

          <FlatList
            data={viewAll}
            renderItem={renderItem}
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
        <Spacer space={SH(20)} />

        <TouchableOpacity
          onPress={() => navigate(NAVIGATION.newProducts)}
          style={styles.ProductView}
        >
          <View style={styles.innerView}>
            <Text style={styles.headingText}>
              {strings.products.newProducts}
            </Text>
            <View>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.smallText}>{strings.products.seeAll} </Text>
                <Image
                  source={forward}
                  style={{ height: SH(15), width: SW(15), marginTop: SH(3) }}
                />
              </View>
            </View>
          </View>

          <Spacer space={SH(20)} />

          <FlatList
            data={secondData}
            renderItem={secondItem}
            keyExtractor={(item) => item.id}
            extraData={product}
            numColumns={3}
          />
        </TouchableOpacity>

        <Spacer space={SH(20)} />

        <TouchableOpacity
          onPress={() => navigate(NAVIGATION.newProducts)}
          style={styles.ProductView}
        >
          <View style={styles.innerView}>
            <Text style={styles.headingText}>
              {strings.products.newProducts}
            </Text>
            <View>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.smallText}>{strings.products.seeAll} </Text>
                <Image source={forward} style={styles.forwardIcon} />
              </View>
            </View>
          </View>

          <Spacer space={SH(15)} />

          <FlatList
            data={thirdData}
            renderItem={secondItem}
            keyExtractor={(item) => item.id}
            extraData={product}
            numColumns={3}
          />
        </TouchableOpacity>

        <Spacer space={SH(25)} />

        <View style={styles.innerView}>
          <Text style={[styles.headingText, { paddingLeft: SW(20) }]}>
            {strings.products.recomendedWholesalers}
          </Text>
          <TouchableOpacity style={{ paddingRight: SW(20) }}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.smallText}>{strings.products.seeAll} </Text>
              <Image source={forward} style={styles.forwardIcon} />
            </View>
          </TouchableOpacity>
        </View>

        <Spacer space={SH(15)} />

        <View style={styles.yewiView}>
          <CompanyDetailView />

          <Spacer space={SH(20)} />

          <FlatList
            data={fourthData}
            renderItem={thirdItem}
            keyExtractor={(item) => item.id}
            extraData={product}
            numColumns={4}
          />
        </View>

        <Spacer space={SH(30)} />
        <View style={styles.bottomListView}>
          <FlatList
            data={LastData}
            renderItem={listDetail}
            keyExtractor={(item) => item.id}
            numColumns={2}
          />
        </View>

        <Spacer space={SH(30)} />
      </ScrollView>
    </ScreenWrapper>
  );
}
