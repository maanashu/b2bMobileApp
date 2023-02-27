import { Text, View, FlatList, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./NewProducts.style";
import { ScreenWrapper, Spacer, SubHeader } from "@/components";
import { SH, SW } from "@/theme/ScalerDimensions";
import { COLORS } from "@/theme/Colors";
import { backArrow, Fonts } from "@/assets";
import { strings } from "@/localization";
import { Header } from "@/components/Header";
import { useDispatch, useSelector } from "react-redux";
import { getCategorySelector } from "@/selectors/CategorySelectors";
import { LastData } from "../Products/ProductsInquiry/FlatlistData";
import { getCategory } from "@/actions/CategoryActions";
import { getProduct } from "@/actions/ProductActions";
import { getProductSelector } from "@/selectors/ProductSelectors";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";
import FastImage from "react-native-fast-image";
import { renderNoData } from "@/components/FlatlistStyling";
import { isLoadingSelector } from "@/selectors/StatusSelectors";
import { TYPES } from "@/Types/Types";
import { Loader } from "@/components/Loader";
export function NewProducts() {
  const [selectedId, setSelectedId] = useState(0);

  const dispatch = useDispatch();
  const categoryData = useSelector(getCategorySelector);
  const categoryArray = categoryData?.categoryList?.data;
  const splicedArray = categoryArray?.slice(0, 7);

  const ProductsData = useSelector(getProductSelector);
  const Products = ProductsData?.product;

  useEffect(() => {
    const Object = {
      page: 1,
      limit: 10,
    };
    dispatch(getCategory(Object));
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    const probject = {
      page: 1,
      limit: 10,
    };
    dispatch(getProduct(probject));
  };

  const isLoadingProducts = useSelector((state) =>
    isLoadingSelector([TYPES.GET_PRODUCT], state)
  );

  const getProductsList = (item) => {
    setSelectedId(item.id);
    const probject = {
      page: 1,
      limit: 10,
      category_ids: item.id,
    };
    dispatch(getProduct(probject));
  };

  const renderCategory = ({ item, index }) => (
    <>
      <TouchableOpacity
        style={{
          paddingLeft: SW(10),
          alignItems: "center",
        }}
        onPress={() => {
          getProductsList(item);
        }}
      >
        <Text
          style={{
            marginHorizontal: SW(1),
            fontFamily: item.id === selectedId ? Fonts.Bold : Fonts.Regular,
            color: item.id === selectedId ? COLORS.primary : COLORS.text,
          }}
        >
          {item.name}
        </Text>
        <Spacer space={SH(2)} />
        <View
          style={{
            borderBottomWidth: item.id === selectedId ? 1 : null,
            borderColor: item.id === selectedId && COLORS.primary,
            width: "100%",
          }}
        ></View>
      </TouchableOpacity>
    </>
  );

  function dynamicHeight(_index) {
    if (_index % 2 == 0) {
      return SH(250);
    } else if (_index % 2 !== 0) {
      return SH(245);
    } else {
      return SH(230);
    }
  }
  function dynamicImageHeight(_index) {
    if (_index % 2 == 0) {
      return SH(150);
    } else if (_index % 2 !== 0) {
      return SH(135);
    } else {
      return 100;
    }
  }
  function dynamicMarginTop(_index) {
    if (_index % 2 !== 0) {
      return 0;
    } else {
      return SH(20);
    }
  }
  function dynamicMarginBottom(_index) {
    if (_index % 2 == 0) {
      return SH(10);
    } else {
      return SH(10);
    }
  }

  const listDetail = ({ item, index }) => (
    <>
      <TouchableOpacity
        onPress={() => navigate(NAVIGATION.productInquiry, { itemId: item.id })}
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
          <FastImage
            source={{ uri: item.image }}
            resizeMode="cover"
            style={{
              width: SW(153),
              height: dynamicImageHeight(index),
              borderRadius: SW(10),
            }}
          />
        </View>
        <Spacer space={SH(5)} />

        <Text numberOfLines={2} style={styles.productsTitle}>
          {item.name}
          <Text style={styles.productSubTitle}> {item.description}</Text>
        </Text>

        <Spacer space={SH(5)} />

        <Text style={styles.productsQuantity}>{`MOQ:10`}</Text>

        <Spacer space={SH(1)} />

        <Text style={styles.priceText}>
          {item.price}/
          {/* <Text style={styles.categoryText}> {item.product_type.name}</Text> */}
        </Text>
      </TouchableOpacity>
    </>
  );

  return (
    <ScreenWrapper style={{ flex: 1, backgroundColor: COLORS.white }}>
      <Header title={strings.newProducts.newProducts} back={backArrow} />

      <View style={styles.upperView}>
        <SubHeader
          title={strings.newProducts.newProducts}
          subTitle={strings.newProducts.subText}
        />

        <Spacer space={SH(10)} />
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={{
              paddingLeft: SW(10),
              alignItems: "center",
              borderBottomColor: 0 === selectedId ? COLORS.primary : null,
              borderBottomWidth: 0 === selectedId ? 1 : 0,
            }}
            onPress={() => {
              setSelectedId(0);
              getAllProducts();
            }}
          >
            <Text
              style={{
                marginHorizontal: SW(1),
                fontFamily: 0 === selectedId ? Fonts.Bold : Fonts.Regular,
                color: 0 === selectedId ? COLORS.primary : COLORS.text,
              }}
            >
              All categories
            </Text>
          </TouchableOpacity>

          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={splicedArray}
            renderItem={renderCategory}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>

      <View style={{ paddingHorizontal: SW(20), flex: 1 }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={Products?.data ?? []}
          extraData={Products?.data}
          renderItem={listDetail}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={renderNoData}
          numColumns={2}
        />
        {isLoadingProducts ? <Loader /> : null}
      </View>
    </ScreenWrapper>
  );
}
