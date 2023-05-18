import React, { useEffect, useRef } from "react";
import {
  BackHandler,
  Dimensions,
  FlatList,
  Image,
  LogBox,
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
import { forward, threeDots, yewiLogo } from "@/assets";

import { LastData, fourthData } from "./Components/FlatlisitData";
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
import FastImage from "react-native-fast-image";
import { isLoadingSelector } from "@/selectors/StatusSelectors";
import { TYPES } from "@/Types/Types";
import { renderNoData } from "@/components/FlatlistStyling";
import { getProduct } from "@/actions/ProductActions";
import { getProductSelector } from "@/selectors/ProductSelectors";
import ReactNativeBiometrics, { BiometryTypes } from "react-native-biometrics";
import { Loader } from "@/components/Loader";
import HomeCategorySkeleton, {
  HomeNewProductsSkeleton,
} from "@/components/SkeletonContent";
import { getUser } from "@/selectors/UserSelectors";

export function Products({ navigation }) {
  const listRef = useRef();
  const dispatch = useDispatch();
  const categoryData = useSelector(getCategorySelector);
  const BannerData = useSelector(getBannerSelector);
  const ProductsData = useSelector(getProductSelector);
  const Products = ProductsData?.product;
  const [selectedId, setSelectedId] = useState("");

  // console.log(
  //   "checking category",
  //   JSON.stringify(categoryData?.categoryList?.categoryResponse)
  // );
  const categoryObject = {
    page: 1,
    limit: 10,
    service_type: "product",
    main_category: true,
  };

  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);

  useEffect(() => {
    dispatch(getCategory(categoryObject));
    dispatch(getBanners());
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    const probject = {
      page: 1,
      limit: 10,
      app_name: "b2b",
      delivery_options: "3",
    };
    dispatch(getProduct(probject));
  };
  const isLoading = useSelector((state) =>
    isLoadingSelector([TYPES.GET_CATEGORY], state)
  );
  const isLoadingProducts = useSelector((state) =>
    isLoadingSelector([TYPES.GET_PRODUCT], state)
  );
  const LoadingData = () => {
    <>{isLoading ? <Loader message="Loading data ..." /> : null}</>;
  };
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

  const renderCategoryItem = ({ item, index, data }) => {
    const itemCount = categoryData?.categoryList?.data.length;
    return (
      <>
        {(itemCount < 8 && index === itemCount - 1) ||
        (itemCount >= 8 && index === 7) ? (
          <TouchableOpacity
            style={styles.item}
            onPress={() =>
              navigate(NAVIGATION.splash, {
                serviceType: "product",
                idItem: categoryData?.categoryList?.data[0]?.id,
              })
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
              setSelectedId(item.name);
              navigate(NAVIGATION.subCategories, {
                idItem: item?.id,
                index: index,
                serviceType: "product",
              });
            }}
          >
            <FastImage
              source={{ uri: item?.image }}
              style={styles.roundIcons}
            />

            <Text numberOfLines={1} style={styles.title}>
              {item?.name}
            </Text>
          </TouchableOpacity>
        )}
      </>
    );
  };

  const secondItem = ({ item, onPress, index }) => (
    <>
      {index <= 2 && (
        <View style={styles.itemS}>
          <Image source={{ uri: item?.image }} style={styles.secondView} />

          <Spacer space={SH(10)} />

          <Text style={styles.commonFlatlistText}>{item?.name}</Text>
        </View>
      )}
    </>
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

      <ScrollView showsVerticalScrollIndicator={false} ref={listRef}>
        <Search placeholder={strings.business.searchHere} />

        <Spacer space={SH(10)} />

        <View style={{ paddingHorizontal: SW(16) }}>
          <Spacer space={SH(18)} />

          {isLoading ? (
            <HomeCategorySkeleton />
          ) : (
            <FlatList
              columnWrapperStyle={{ justifyContent: "space-between" }}
              data={categoryData?.categoryList?.data?.slice(0, 8) ?? []}
              renderItem={renderCategoryItem}
              keyExtractor={(item) => item.id}
              extraData={categoryData?.categoryList?.data?.slice(0, 8) ?? []}
              numColumns={4}
              ListEmptyComponent={LoadingData}
            />
          )}
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
        <Spacer space={SH(20)} />
        <View>
          {isLoadingProducts ? (
            // <Loader message="Loading data ..." />
            <HomeNewProductsSkeleton />
          ) : (
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
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate(NAVIGATION.newProducts)
                      }
                    >
                      <Text style={styles.smallText}>
                        {strings.products.seeAll}{" "}
                      </Text>
                    </TouchableOpacity>

                    <Image
                      source={forward}
                      style={{
                        height: SH(15),
                        width: SW(15),
                        marginTop: SH(3),
                      }}
                    />
                  </View>
                </View>
              </View>

              <Spacer space={SH(20)} />

              <FlatList
                data={ProductsData?.product?.data}
                renderItem={secondItem}
                keyExtractor={(item) => item?.id}
                ListEmptyComponent={renderNoData}
                numColumns={3}
              />
            </TouchableOpacity>
          )}
        </View>

        <Spacer space={SH(20)} />

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
          <CompanyDetailView
            title={"Yiwu Leqi E-Commerce Firm"}
            profilePhoto={yewiLogo}
            locationText={"Miami, USA"}
          />

          <Spacer space={SH(20)} />

          <FlatList
            data={fourthData}
            renderItem={thirdItem}
            keyExtractor={(item) => item.id}
            ListEmptyComponent={renderNoData}
            numColumns={4}
          />
        </View>

        <Spacer space={SH(30)} />

        <View style={styles.bottomListView}>
          <FlatList
            data={LastData}
            renderItem={listDetail}
            keyExtractor={(item) => item.id}
            ListEmptyComponent={renderNoData}
            numColumns={2}
          />
        </View>
        {/* {isLoading ? <Loader message="Loading data ..." /> : null} */}
        <Spacer space={SH(30)} />
      </ScrollView>
    </ScreenWrapper>
  );
}
