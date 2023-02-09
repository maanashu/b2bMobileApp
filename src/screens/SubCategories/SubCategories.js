import { Text, View, FlatList, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./SubCategories.styles";
import { NameHeader, ScreenWrapper, Spacer, SubHeader } from "@/components";
import { SF, SH, SW } from "@/theme/ScalerDimensions";
import { COLORS } from "@/theme/Colors";
import { Apparel, backArrow, Fonts } from "@/assets";
import { strings } from "@/localization";
import { Header } from "@/components/Header";
import { useDispatch, useSelector } from "react-redux";
import { getCategorySelector } from "@/selectors/CategorySelectors";
import { getCategory, getSubCategory } from "@/actions/CategoryActions";
import { getProduct } from "@/actions/ProductActions";
import { getProductSelector } from "@/selectors/ProductSelectors";
import FastImage from "react-native-fast-image";

export function SubCategories() {
  const [selectedId, setSelectedId] = useState();
  console.log("selectedId", selectedId);
  const dispatch = useDispatch();
  const categoryData = useSelector(getCategorySelector);
  const categoryArray = categoryData?.categoryList;

  const ProductsData = useSelector(getProductSelector);
  const Products = ProductsData?.product;

  const SUBCATEGORIES = useSelector(getCategorySelector);
  const SubCatArray = SUBCATEGORIES?.subCategoryList;

  useEffect(() => {
    dispatch(getCategory());
    // dispatch(getProduct(1));
    setSelectedId(categoryArray[0]?.id);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      dispatch(getSubCategory(categoryArray[0]?.id));
    }, 1000);
  }, []);

  const getSubCategoryList = (item) => {
    setSelectedId(item.id);
    dispatch(getSubCategory(item.id));
  };

  const renderCategory = ({ item, index }) => (
    <>
      <TouchableOpacity
        style={{
          paddingLeft: SW(10),
          alignItems: "center",
        }}
        onPress={() => {
          // console.log("check selected category", item);
          getSubCategoryList(item);
          // dispatch(getProduct(selectedId));
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

  // const listDetail = ({ item, index }) => (
  //   <>
  //     {index >= 8 ? null : (
  //       <TouchableOpacity
  //         onPress={() => navigate(NAVIGATION.productInquiry, { data: item.id })}
  //         style={[
  //           styles.ShoesStyle,
  //           {
  //             height: dynamicHeight(index),
  //             marginTop: dynamicMarginTop(index),
  //             marginBottom: dynamicMarginBottom(index),
  //           },
  //         ]}
  //       >
  //         <Spacer space={SH(10)} />
  //         <View style={{ alignItems: "center" }}>
  //           <Image
  //             source={{ uri: item.image }}
  //             resizeMode="cover"
  //             style={{
  //               width: SW(153),
  //               height: dynamicImageHeight(index),
  //               borderRadius: SW(10),
  //             }}
  //           />
  //         </View>
  //         <Spacer space={SH(5)} />

  //         <Text numberOfLines={2} style={styles.productsTitle}>
  //           {item.name}
  //           <Text style={styles.productSubTitle}> {item.description}</Text>
  //         </Text>
  //         <Spacer space={SH(5)} />
  //         <Text style={styles.productsQuantity}>{`MOQ:10`}</Text>
  //         <Spacer space={SH(1)} />

  //         <Text style={styles.priceText}>
  //           {item.price}/
  //           {/* <Text style={styles.categoryText}> {item.product_type.name}</Text> */}
  //         </Text>
  //       </TouchableOpacity>
  //     )}
  //   </>
  // );

  const listDetail = ({ item, index }) => (
    <>
      <TouchableOpacity
        // onPress={() => navigate(NAVIGATION.productInquiry, { data: item.id })}
        style={{
          flexDirection: "row",
          paddingVertical: SH(10),
          alignItems: "center",
        }}
      >
        <FastImage
          source={{ uri: item.image }}
          resizeMode="contain"
          style={{ height: SW(30), width: SW(30), borderRadius: SW(15) }}
        />
        <View style={{ marginLeft: SW(10) }}>
          <Text
            style={{
              color: COLORS.text,
              fontFamily: Fonts.Regular,
              fontSize: SF(16),
            }}
          >
            {item.name}
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );

  return (
    <ScreenWrapper style={{ flex: 1, backgroundColor: COLORS.white }}>
      <NameHeader title={"Categories"} back={backArrow} />

      <View style={styles.upperView}>
        <Spacer space={SH(10)} />

        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={categoryArray}
          renderItem={renderCategory}
          keyExtractor={(item) => item.id}
        />
      </View>

      <View style={{ paddingHorizontal: SW(20), flex: 1, marginTop: SH(20) }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={SubCatArray}
          renderItem={listDetail}
          keyExtractor={(item) => item.id}
        />
      </View>
    </ScreenWrapper>
  );
}
