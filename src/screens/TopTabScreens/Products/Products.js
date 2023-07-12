import React, { useEffect, useRef } from "react";
import {
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
import { forward, search, threeDots } from "@/assets";
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
import { getProduct, getTrendingProducts } from "@/actions/ProductActions";
import { getProductSelector } from "@/selectors/ProductSelectors";
import { Loader } from "@/components/Loader";
import HomeCategorySkeleton, {
  HomeNewProductsSkeleton,
  RecomendedWholeSalersSkeleton,
} from "@/components/SkeletonContent";
import { getUser } from "@/selectors/UserSelectors";
import { getSellers } from "@/actions/UserActions";
import { useIsFocused } from "@react-navigation/native";
import { getCart } from "@/actions/OrderAction";

export function Products({ navigation }) {
  const listRef = useRef();
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const categoryData = useSelector(getCategorySelector);
  const BannerData = useSelector(getBannerSelector);
  const ProductsData = useSelector(getProductSelector);
  const [selectedId, setSelectedId] = useState("");
  const [searchedKeyword, setSearchedKeyword] = useState("");

  const isFocused = useIsFocused();
  const categoryObject = {
    page: 1,
    limit: 10,
    service_type: "product",
    main_category: true,
  };

  useEffect(() => {
    LogBox.ignoreAllLogs();
    dispatch(getCart());
    setSearchedKeyword("");
    const sellersObject = {
      page: 1,
      limit: 10,
      need_trending: "true",
    };
    dispatch(getSellers(sellersObject));
    getAllProducts();
  }, [isFocused]);

  useEffect(() => {
    dispatch(getCategory(categoryObject));
    dispatch(getBanners());
    getAllProducts();
    const sellersObject = {
      page: 1,
      limit: 10,
      need_trending: "true",
    };
    dispatch(getSellers(sellersObject));
    dispatch(getTrendingProducts({ app_name: "b2b", limit: 4, page: 1 }));
  }, [user?.user]);
  const getAllProducts = () => {
    const probject = {
      page: 1,
      limit: 10,
      app_name: "b2b",
      delivery_options: "4",
      need_trending: "true",
    };
    dispatch(getProduct(probject));
  };
  const isLoading = useSelector((state) =>
    isLoadingSelector([TYPES.GET_CATEGORY], state)
  );
  const isLoadingProducts = useSelector((state) =>
    isLoadingSelector([TYPES.GET_PRODUCT], state)
  );
  const isLoadingSellers = useSelector((state) =>
    isLoadingSelector([TYPES.GET_PRODUCT], state)
  );
  const LoadingData = () => {
    <>{isLoading ? <Loader message="Loading data ..." /> : null}</>;
  };

  const handleNavigation = (item) => {
    const body = {
      page: 1,
      limit: 20,
      delivery_options: "4",
      product_id: item,
    };
    dispatch(getSellers(body));
    navigate(NAVIGATION.sellersByProduct, { itemId: item });
  };

  const renderCategoryItem = ({ item, index, data }) => {
    const itemCount = categoryData?.categoryList?.data.length;
    return (
      <>
        {(itemCount < 8 && index === itemCount - 1) ||
        (itemCount >= 8 && index === 7) ? (
          <TouchableOpacity
            style={styles.item}
            onPress={() =>
              navigate(NAVIGATION.subCategories, {
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

          <Text numberOfLines={1} style={styles.commonFlatlistText}>
            {item?.name}
          </Text>
        </View>
      )}
    </>
  );

  const thirdItem = ({ item, onPress }) => (
    <View style={styles.item}>
      <FastImage source={{ uri: item?.image }} style={styles.thirdView} />

      <Spacer space={SH(10)} />
      {/* <Text style={styles.yiwuPriceText}>{item.price}</Text>
      <Text style={styles.yiwuItemTitleText}>{item.title}</Text> */}
    </View>
  );

  const listDetail = ({ item, index }) => (
    <>
      <TouchableOpacity
        onPress={() => handleNavigation(item?.id)}
        style={[
          styles.ShoesStyle,
          {
            paddingVertical: index % 2 === 0 ? SH(10) : SH(10),
            marginTop: index === 1 ? SH(40) : index === 0 ? SH(0) : SH(10),
            bottom: index % 2 === 0 ? SH(10) : SH(50),
          },
        ]}
      >
        <Spacer space={SH(10)} />
        <View style={{ alignItems: "center", flex: 1 }}>
          <Image
            source={{ uri: item?.image }}
            // resizeMode="contain"
            style={{
              width: ms(140),
              height: index === 0 ? SH(180) : SH(150),
              borderRadius: SW(5),
            }}
          />
        </View>
        <View style={{ flexDirection: "row" }}></View>
        <Text style={styles.productsTitle} numberOfLines={2}>
          {item?.name}
          <Text style={styles.productSubTitle}> {item?.description}</Text>
        </Text>
        <Spacer space={SH(2)} />
        {/* <Text style={styles.productsQuantity}>{item?.pieces}</Text> */}
        <Spacer space={SH(5)} />

        {user?.user?.payload?.token && (
          <>
            <Text style={styles.priceText}>
              {" "}
              {"$ "}
              {item?.price} /{strings?.business?.carton}
            </Text>
          </>
        )}
      </TouchableOpacity>
      <Spacer space={index % 2 == 0 ? SH(10) : SH(20)} />
    </>
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
      <ScrollView showsVerticalScrollIndicator={false} ref={listRef}>
        <Search
          placeholder={strings.business.searchHere}
          onSubmitEditing={() => {
            if (searchedKeyword) {
              navigate(NAVIGATION.searchResults, { keyword: searchedKeyword });
            }
          }}
          onPress={() => {
            if (searchedKeyword) {
              navigate(NAVIGATION.searchResults, { keyword: searchedKeyword });
            }
          }}
          setKeyword={setSearchedKeyword}
          keyword={searchedKeyword}
          icon={search}
          clearSearch={() => setSearchedKeyword("")}
        />

        <Spacer space={SH(10)} />

        <View style={{ paddingHorizontal: SW(16) }}>
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

        <Spacer space={SH(5)} />

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
        <Spacer space={SH(10)} />
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

                    <Image source={forward} style={styles.forwardIcon} />
                  </View>
                </View>
              </View>

              <Spacer space={SH(20)} />

              <FlatList
                data={ProductsData?.product?.data}
                renderItem={secondItem}
                keyExtractor={(item) => item?.id}
                ListEmptyComponent={renderNoData}
                extraData={ProductsData?.product?.data}
                numColumns={3}
              />
            </TouchableOpacity>
          )}
        </View>

        <Spacer space={SH(25)} />

        <View style={styles.innerView}>
          <Text style={[styles.headingText, { paddingLeft: SW(20) }]}>
            {strings.products.recomendedWholesalers}
          </Text>

          <TouchableOpacity
            style={{ paddingRight: SW(20) }}
            onPress={() => navigate(NAVIGATION.recomendedWholesalers)}
          >
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.smallText}>{strings.products.seeAll} </Text>
              <Image source={forward} style={styles.forwardIcon} />
            </View>
          </TouchableOpacity>
        </View>

        <Spacer space={SH(15)} />
        {isLoadingSellers ? (
          <RecomendedWholeSalersSkeleton />
        ) : (
          <View style={styles.yewiView}>
            <CompanyDetailView
              title={
                user?.getSellersList?.[0]?.user_profiles?.organization_name
              }
              profilePhoto={{
                uri: user?.getSellersList?.[0]?.user_profiles?.profile_photo,
              }}
              locationText={`${
                user?.getSellersList?.[0]?.user_locations?.[0]?.state
              } ${", "}`}
              country={user?.getSellersList?.[0]?.user_locations?.[0]?.country}
              rating={user?.getSellersList?.[0]?.sellerRating?.rating}
            />

            <Spacer space={SH(10)} />

            <FlatList
              data={user?.getSellersList?.[0]?.user_images}
              renderItem={thirdItem}
              keyExtractor={(item) => item.id}
              ListEmptyComponent={renderNoData}
              numColumns={4}
            />
          </View>
        )}
        <Spacer space={SH(10)} />

        <View style={styles.bottomListView}>
          <FlatList
            data={ProductsData?.trendingList ?? []}
            extraData={ProductsData?.trendingList ?? []}
            renderItem={listDetail}
            keyExtractor={(item) => item.id}
            ListEmptyComponent={renderNoData}
            numColumns={2}
            ListHeaderComponent={() => (
              <View>
                <Text style={styles.headerText}>
                  {ProductsData?.trendingList?.length + " " + "Products"}
                </Text>

                <Spacer space={SH(20)} />
              </View>
            )}
          />
        </View>
        {/* {isLoading ? <Loader message="Loading data ..." /> : null} */}
      </ScrollView>
    </ScreenWrapper>
  );
}
