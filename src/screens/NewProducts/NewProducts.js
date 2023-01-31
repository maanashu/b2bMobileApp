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
export function NewProducts() {
  // const layout = useWindowDimensions();

  // const [index, setIndex] = React.useState(0);

  // const [routes] = React.useState([
  //   { key: "Apparel", title: "Apparel" },
  //   { key: "Tobacco", title: "Tobacco" },
  // ]);

  // const FirstRoute = () => <Apparel />;
  // const SecondRoute = () => <Business />;

  // const renderScene = SceneMap({
  //   Apparel: FirstRoute,
  //   Tobacco: SecondRoute,
  // });
  // const renderTabBar = (props) => {
  //   return (
  //     <TabBar
  //       {...props}
  //       renderLabel={({ focused, route }) => {
  //         return (
  //           <View
  //             style={[
  //               styles.tabButtonView,
  //               {
  //                 borderColor: focused ? COLORS.primary : COLORS.light_border,
  //               },
  //             ]}
  //           >
  //             <Text
  //               style={{
  //                 color: focused ? COLORS.primary : COLORS.text,
  //                 textAlignVertical: "center",
  //                 fontFamily: focused ? Fonts.SemiBold : Fonts.Regular,
  //                 marginLeft: SW(5),
  //               }}
  //             >
  //               {route.title}
  //             </Text>
  //           </View>
  //         );
  //       }}
  //       indicatorStyle={{ backgroundColor: COLORS.primary, width: "0.5%" }}
  //       style={{
  //         elevation: 0,
  //         backgroundColor: COLORS.white,
  //       }}
  //       pressColor={COLORS.white}
  //       tabStyle={{ width: "auto" }}
  //     />
  //   );
  // };

  const [selectedId, setSelectedId] = useState(1);
  console.log("selectedId", selectedId);
  const dispatch = useDispatch();
  const categoryData = useSelector(getCategorySelector);
  const categoryArray = categoryData?.categories;
  const splicedArray = categoryArray?.slice(0, 6);

  const ProductsData = useSelector(getProductSelector);
  const Products = ProductsData?.product;

  useEffect(() => {
    dispatch(getCategory());
  }, []);

  const getProductsList = (item) => {
    setSelectedId(item.id);
    dispatch(getProduct(item.id));
  };

  console.log("product list according to category id-->", Products);

  const renderCategory = ({ item, index }) => (
    <>
      <TouchableOpacity
        style={{ paddingLeft: SW(10), alignItems: "center" }}
        onPress={() => {
          // console.log("check selected category", item);
          getProductsList(item);
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
      return SH(260);
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
          resizeMode="cover"
          style={{
            height: SH(160),
            width: SW(160),
            height: dynamicImageHeight(index),
            borderRadius: 10,
          }}
        />
      </View>
      <Spacer space={SH(5)} />

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

  return (
    <ScreenWrapper style={{ flex: 1, backgroundColor: COLORS.white }}>
      <Header title={strings.newProducts.newProducts} back={backArrow} />

      <View style={styles.upperView}>
        <SubHeader
          title={strings.newProducts.newProducts}
          subTitle={strings.newProducts.subText}
        />

        <Spacer space={SH(10)} />

        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={splicedArray}
          renderItem={renderCategory}
          keyExtractor={(item) => item.id}
        />
      </View>

      <View style={{ paddingHorizontal: SW(20), flex: 1 }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={LastData}
          renderItem={listDetail}
          keyExtractor={(item) => item.id}
          numColumns={2}
          extraData
        />
      </View>
    </ScreenWrapper>
  );
}
