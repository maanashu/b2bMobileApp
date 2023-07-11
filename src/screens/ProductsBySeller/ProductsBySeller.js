import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  BackHandler,
} from "react-native";
import React, { useEffect } from "react";
import { styles } from "./ProductsBySeller.styles";
import { Header, ScreenWrapper, Spacer } from "@/components";
import { SF, SH, SW } from "@/theme/ScalerDimensions";
import { COLORS } from "@/theme/Colors";
import { backArrow, Fonts } from "@/assets";
import { useDispatch, useSelector } from "react-redux";
import FastImage from "react-native-fast-image";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";
import { getProduct } from "@/actions/ProductActions";
import { getProductSelector } from "@/selectors/ProductSelectors";
import { isLoadingSelector } from "@/selectors/StatusSelectors";
import { TYPES } from "@/Types/Types";
import { getUser } from "@/selectors/UserSelectors";
import { Loader } from "@/components/Loader";

export function ProductsBySeller(params) {
  const dispatch = useDispatch();

  const productsData = useSelector(getProductSelector);
  const user = useSelector(getUser);
  console.log("brand_id", brand_id);
  console.log("category_id", category_id);

  const brand_id = params?.route?.params?.brand_id;
  const category_id = params?.route?.params?.category_id;

  const { navigation } = params;
  useEffect(() => {
    const handleBackButton = () => {
      navigation.navigate(NAVIGATION.brandsSellers);
      return true;
    };

    BackHandler.addEventListener("hardwareBackPress", handleBackButton);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackButton);
    };
  }, [navigation]);
  useEffect(() => {
    const productObject = {
      page: 1,
      limit: 20,
      delivery_options: 4,
      app_name: "b2b",
      seller_id: params?.route?.params?.sellerId,
      service_type: "product",
      brand_id: params?.route?.params?.brand_id,
      sub_category_ids: params?.route?.params?.category_id,
    };

    dispatch(getProduct(productObject));
  }, []);

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
        idSeller: params?.route?.params?.idSeller,
      });
    }
  };

  const listDetail = ({ item, index }) => (
    <>
      <TouchableOpacity
        // onPress={() => navigate(NAVIGATION.productInquiry, { data: item })}
        onPress={() => navigationHandler(item)}
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
        <View style={{ alignItems: "center" }}>
          <FastImage
            source={{ uri: item.image }}
            resizeMode="cover"
            style={{
              width: SW(153),
              height: index === 0 ? SH(180) : SH(150),
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
            {" "}
            {"$" + item.price} /
            <Text style={{ fontFamily: Fonts.Regular, fontSize: SF(14) }}>
              {" Carton"}
            </Text>
            {/* <Text style={styles.categoryText}> {item.product_type.name}</Text> */}
          </Text>
        )}
      </TouchableOpacity>
    </>
  );
  const renderNoData = ({ item }) => (
    <>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text
          style={{
            color: COLORS.primary,
            fontFamily: Fonts.Regular,
            fontSize: SF(16),
          }}
        >
          {"No product found"}
        </Text>
      </View>
    </>
  );

  return (
    <ScreenWrapper style={{ flex: 1, backgroundColor: COLORS.white }}>
      <Header
        title={"Products"}
        back={backArrow}
        enableBackButton
        backNavi={() => navigate(NAVIGATION.brandsSellers)}
      />

      <View style={{ paddingHorizontal: SW(20), flex: 1, marginTop: SH(20) }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={productsData?.product?.data ?? []}
          extraData={productsData?.product?.data}
          renderItem={listDetail}
          ListEmptyComponent={renderNoData}
          keyExtractor={(item) => item.id}
          numColumns={2}
        />
      </View>
      {isLoadingProducts && <Loader message="Loading products ..." />}
    </ScreenWrapper>
  );
}
