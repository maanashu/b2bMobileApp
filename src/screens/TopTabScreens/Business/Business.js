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
import { ScreenWrapper, Spacer } from "@/components";
import { SH, SW } from "@/theme/ScalerDimensions";
import { navigate } from "@/navigation/NavigationRef";
import {
  forward,
  headphones,
  lighter,
  jacket,
  shoesBusiness,
  watch,
  boots,
  threeDots,
  Fonts,
  jeanLogo,
} from "@/assets";
import { NAVIGATION } from "@/constants";
import { Search } from "@/components/Search";
import { strings } from "@/localization";
import { useDispatch, useSelector } from "react-redux";
import { getCategorySelector } from "@/selectors/CategorySelectors";
import { getCategory, getServiceCategory } from "@/actions/CategoryActions";
import FastImage from "react-native-fast-image";
import {
  CategoryManufacturers,
  CategoryManufacturersProducts,
  companies,
  topCategoryManufacturer,
} from "@/constants/flatlistData";
import { renderCompanies } from "@/components/FlatlistStyling";
import { COLORS } from "@/theme";
import { useFocusEffect, useIsFocused } from "@react-navigation/native";
import { isLoadingSelector } from "@/selectors/StatusSelectors";
import { TYPES } from "@/Types/Types";
import { Loader } from "@/components/Loader";

export function Business() {
  const dispatch = useDispatch();

  const [selectedId, setSelectedId] = useState("");
  const [product, setProduct] = useState("");
  const [manufacturersCategoryId, setmanufacturersCategoryId] = useState(1);

  const categoryData = useSelector(getCategorySelector);
  const categoryObject = {
    page: 1,
    limit: 10,
    service_type: "service",
    main_category: true,
  };

  useEffect(() => {
    dispatch(getServiceCategory(categoryObject));
  }, []);

  const categoryHandler = (item) => {
    setmanufacturersCategoryId(item.id);
  };

  const isLoading = useSelector((state) =>
    isLoadingSelector([TYPES.GET_SUB_CATEGORY], state)
  );

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

  const renderCategoryItem = ({ item, index }) => {
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

  const renderHorizontalData = ({ item, index }) => (
    <>
      <TouchableOpacity
        style={styles.categoryTouchableView}
        onPress={() => {
          categoryHandler(item);
        }}
      >
        <View style={styles.rowView}>
          <FastImage
            source={{ uri: item.image }}
            resizeMode="cover"
            style={styles.categoryImages}
          />
          <Text
            style={{
              marginHorizontal: SW(2),
              fontFamily:
                item.id === manufacturersCategoryId
                  ? Fonts.Bold
                  : Fonts.Regular,
              color:
                item.id === manufacturersCategoryId
                  ? COLORS.primary
                  : COLORS.text,
            }}
          >
            {item.title}
          </Text>
        </View>
        <Spacer space={SH(5)} />
        <View
          style={{
            borderBottomWidth: item.id === manufacturersCategoryId ? 1 : null,
            borderColor: item.id === manufacturersCategoryId && COLORS.primary,
            width: "100%",
          }}
        ></View>
      </TouchableOpacity>
    </>
  );

  const rendercategoryManufacturers = ({ item, index }) => {
    return (
      <>
        <View style={[styles.productTypesView]}>
          <View style={styles.rowView}>
            <View style={styles.logoBackGround}>
              <Image
                source={item.logo}
                resizeMode="contain"
                style={styles.productLogosIcon}
              />
            </View>

            <View
              style={[
                styles.rowView,
                { justifyContent: "space-between", flex: 1 },
              ]}
            >
              <View>
                <Text style={styles.productCategoriesText}>{item.title}</Text>
                <Text style={styles.categoryManufacturersText}>
                  {item.manufacturersCount}
                </Text>
              </View>

              <TouchableOpacity style={[styles.rowView, {}]}>
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
          </View>

          <Spacer space={SH(10)} />
          <FlatList
            data={CategoryManufacturersProducts}
            renderItem={renderMAnufacturersProducts}
            numColumns={3}
            keyExtractor={(item) => item.id}
          />
        </View>

        <Spacer space={SH(20)} />
      </>
    );
  };
  const renderMAnufacturersProducts = ({ item, index }) => (
    <>
      <View style={{ flex: 1, alignItems: "center" }}>
        <View style={styles.backgroundViewImage}>
          <Image
            source={item.image}
            resizeMode="cover"
            style={styles.manufacturersProductImages}
          />
          <Spacer space={SH(5)} />

          <Text numberOfLines={1} style={styles.productsTitle}>
            {item.title}
          </Text>

          <Spacer space={SH(4)} />

          <Image
            source={item.certified}
            resizeMode="contain"
            style={styles.certifeidLogo}
          />

          <Spacer space={SH(3)} />

          <Text style={styles.regularText}>{item.orderQauntity}</Text>
        </View>
      </View>
    </>
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

          {/* Categories Below */}
          <FlatList
            columnWrapperStyle={{ justifyContent: "space-between" }}
            data={categoryData?.serviceCategoryList?.data?.slice(0, 8) ?? []}
            renderItem={renderCategoryItem}
            keyExtractor={(item) => item.id}
            extraData={
              categoryData?.serviceCategoryList?.data?.slice(0, 8) ?? []
            }
            numColumns={4}
          />
        </View>

        <Spacer space={SH(20)} />

        {/* Get samples below */}

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

        {/* Top-ranking Manufacturers below */}
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

        {/* Recommended wholesalers below */}

        <View style={styles.rowViewJustify}>
          <Text style={styles.boldText}>{"Recommended Manufacturers"}</Text>
          <TouchableOpacity style={styles.rowView}>
            <Text style={styles.regularText}>{"See all"}</Text>
            <Image
              source={forward}
              resizeMode="contain"
              style={styles.iconStyle}
            />
          </TouchableOpacity>
        </View>
        <Spacer space={SH(20)} />
        <ScrollView
          horizontal
          style={styles.recommendedScrollView}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.marginRightStyle}>
            <FlatList
              data={companies}
              renderItem={renderCompanies}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
            <Spacer space={SH(5)} />
          </View>
        </ScrollView>

        <Spacer space={SH(20)} />

        {/* Top Category manufacturers below */}

        <Text style={[styles.boldText, { paddingHorizontal: SW(20) }]}>
          {"Top Category manufacturers"}
        </Text>

        <Spacer space={SH(20)} />

        <View style={styles.upperView}>
          <FlatList
            data={topCategoryManufacturer}
            renderItem={renderHorizontalData}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {/* top-category Manufacturers starts below */}

        <FlatList
          data={CategoryManufacturers}
          renderItem={rendercategoryManufacturers}
        />

        <Spacer space={SH(20)} />
      </ScrollView>
      {isLoading ? <Loader message="Loading data ..." /> : null}
    </ScreenWrapper>
  );
}
