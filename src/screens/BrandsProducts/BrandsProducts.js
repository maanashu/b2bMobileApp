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
import { Loader } from "@/components/Loader";
import { getUser } from "@/selectors/UserSelectors";

export function BrandsProducts(params) {
  const dispatch = useDispatch();
  const routeId = params?.route?.params?.categoryId;
  const [selectedId, setSelectedId] = useState([0]);

  const brandsData = useSelector(getCategorySelector);
  const productsData = useSelector(getProductSelector);
  const user = useSelector(getUser);

  const brandBody = {
    page: 1,
    limit: 10,
    category_id: params?.route?.params?.categoryId,
  };
  useEffect(() => {
    dispatch(getBrands(brandBody));
  }, []);
  // console.log("brands details", JSON.stringify(brandsData?.brandsList));
  useEffect(() => {
    setSelectedId(brandsData?.brandsList?.[0]?.id);
    const productobject = {
      page: 1,
      limit: 10,
      brand_id: brandsData?.brandsList?.[0]?.id,
      app_name: "b2b",
      delivery_options: "3",
    };
    dispatch(getProduct(productobject));
  }, [brandsData]);

  const getProducts = (item) => {
    setSelectedId(item.id);
    const productobject = {
      page: 1,
      limit: 10,
      brand_id: item.id,
    };
    dispatch(getProduct(productobject));
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
    if (item === item) {
      navigate(NAVIGATION.productInquiry, {
        itemId: item.id,
        seller_id: item?.supplies[0]?.seller_id,
      });
    }
  };

  const renderBrands = ({ item, index }) => (
    <>
      <TouchableOpacity
        style={styles.categoryTouchableView}
        onPress={() => {
          getProducts(item);
        }}
      >
        <View
          style={[
            styles.rowView,
            {
              borderWidth: item.id === selectedId ? 1 : 0,
              borderColor: COLORS.primary,
              backgroundColor:
                item.id === selectedId ? COLORS.white : COLORS.input_bg,
            },
          ]}
        >
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
        {/* <View
          style={{
            borderBottomWidth: item.id === selectedId ? 1 : null,
            borderColor: item.id === selectedId && COLORS.primary,
            width: "100%",
          }}
        ></View> */}
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
        {user?.user?.payload?.token && (
          <Text style={styles.priceText}>
            {item.price}
            {/* <Text style={styles.categoryText}> {item.product_type.name}</Text> */}
          </Text>
        )}
      </TouchableOpacity>
    </>
  );

  return (
    <ScreenWrapper style={{ flex: 1, backgroundColor: COLORS.white }}>
      <Header title={"Products"} back={backArrow} />

      <View style={styles.upperView}>
        <Spacer space={SH(10)} />

        {isLoadingBrands ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : (
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={brandsData?.brandsList ?? []}
            renderItem={renderBrands}
            ListEmptyComponent={renderNoData}
            keyExtractor={(item) => item.id}
            // extraData={selectedId}
          />
        )}
      </View>

      <View style={{ paddingHorizontal: SW(20), flex: 1, marginTop: SH(20) }}>
        {isLoadingProducts ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={productsData?.product?.data ?? []}
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
