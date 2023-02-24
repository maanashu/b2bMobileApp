import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { styles } from "./BrandsProducts.styles";
import { Header, ScreenWrapper, Spacer } from "@/components";
import { SH, SW } from "@/theme/ScalerDimensions";
import { COLORS } from "@/theme/Colors";
import { backArrow, Fonts } from "@/assets";
import { useDispatch, useSelector } from "react-redux";
import { getCategorySelector } from "@/selectors/CategorySelectors";
import { getBrands } from "@/actions/CategoryActions";
import FastImage from "react-native-fast-image";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";
import { getProduct } from "@/actions/ProductActions";
import { getProductSelector } from "@/selectors/ProductSelectors";
import { renderNoData } from "@/components/FlatlistStyling";
import { isLoadingSelector } from "@/selectors/StatusSelectors";
import { TYPES } from "@/Types/Types";

export function BrandsProducts(params) {
  const routeId = params?.route?.params?.categoryId;

  const [selectedId, setSelectedId] = useState([0]);

  const dispatch = useDispatch();

  const brandsData = useSelector(getCategorySelector);

  const productsData = useSelector(getProductSelector);

  // console.log("product details", productsData?.product);

  useEffect(() => {
    dispatch(getBrands(params?.route?.params?.categoryId));
  }, []);

  useEffect(() => {
    setSelectedId(brandsData?.brandsList[0]?.id);

    dispatch(getProduct(brandsData?.brandsList[0]?.id));
  }, [brandsData]);

  const getProducts = (item) => {
    setSelectedId(item.id);
    dispatch(getProduct(item.id));
  };

  const isLoadingBrands = useSelector((state) =>
    isLoadingSelector([TYPES.GET_BRANDS], state)
  );
  const isLoadingProducts = useSelector((state) =>
    isLoadingSelector([TYPES.GET_PRODUCT], state)
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

  const navigationHandler = (item) => {
    // if (item === item) {
    navigate(NAVIGATION.productInquiry, { itemId: item.id });
    // }
  };

  const renderCategory = ({ item, index }) => (
    <>
      <TouchableOpacity
        style={styles.categoryTouchableView}
        onPress={() => {
          getProducts(item);
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
              fontFamily: item.id === selectedId ? Fonts.Bold : Fonts.Regular,
              color: item.id === selectedId ? COLORS.primary : COLORS.text,
            }}
          >
            {item.name}
          </Text>
        </View>
        <Spacer space={SH(5)} />
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
  const listDetail = ({ item, index }) => (
    <>
      <TouchableOpacity
        // onPress={() => navigate(NAVIGATION.productInquiry, { data: item })}
        onPress={() => navigationHandler(item)}
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
          {/* {item.price}/ */}
          {/* <Text style={styles.categoryText}> {item.product_type.name}</Text> */}
        </Text>
      </TouchableOpacity>
    </>
  );
  return (
    <ScreenWrapper style={{ flex: 1, backgroundColor: COLORS.white }}>
      <Header title={"Products"} back={backArrow} />

      <View style={styles.upperView}>
        <Spacer space={SH(10)} />
        {isLoadingBrands ? (
          <View>
            <ActivityIndicator size="large" color={COLORS.primary} />
          </View>
        ) : (
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={brandsData?.brandsList ?? []}
            renderItem={renderCategory}
            ListEmptyComponent={renderNoData}
            keyExtractor={(item) => item.id}
            // extraData={selectedId}
          />
        )}
      </View>

      <View style={{ paddingHorizontal: SW(20), flex: 1, marginTop: SH(20) }}>
        {isLoadingProducts ? (
          <View>
            <ActivityIndicator size="large" color={COLORS.primary} />
          </View>
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={productsData?.product ?? []}
            // extraData={productsArray}
            renderItem={listDetail}
            ListEmptyComponent={renderNoData}
            keyExtractor={(item) => item.id}
            numColumns={2}
          />
        )}
      </View>
    </ScreenWrapper>
  );
}
