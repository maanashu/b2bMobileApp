import { Text, View, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { styles } from "./BrandsProducts.styles";
import { Header, ScreenWrapper, Spacer } from "@/components";
import { SH, SW } from "@/theme/ScalerDimensions";
import { COLORS } from "@/theme/Colors";
import { backArrow, Fonts, Tobacco } from "@/assets";
import { useDispatch, useSelector } from "react-redux";
import { getCategorySelector } from "@/selectors/CategorySelectors";
import {
  getBrands,
  getCategory,
  getSubCategory,
} from "@/actions/CategoryActions";
import FastImage from "react-native-fast-image";
import Modal from "react-native-modal";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";

export function BrandsProducts(params) {
  const routeId = params?.route?.params?.categoryId;
  // const getIndex = params?.route?.params?.index;

  const [selectedId, setSelectedId] = useState(
    params?.route?.params?.categoryId
  );

  const dispatch = useDispatch();

  const brandsData = useSelector(getCategorySelector);
  const brandsArray = brandsData?.brandsList;
  // console.log("brands data console", brandsArray[0]?.id);

  useEffect(() => {
    dispatch(getBrands(params?.route?.params?.categoryId));
    setSelectedId(brandsData?.brandsList[0]?.id);
  }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setSelectedId(selectedId || brandsArray[0]?.id);
  //     dispatch(getSubCategory(routeId || brandsArray[0]?.id));
  //   }, 1000);
  // }, []);

  const getSubCategoryList = (item) => {
    setSelectedId(item.id);
    dispatch(getSubCategory(item.id));
  };

  const renderCategory = ({ item, index }) => (
    <>
      <TouchableOpacity
        style={styles.categoryTouchableView}
        onPress={() => {
          getSubCategoryList(item);
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
        style={styles.subCatTouchableView}
        onPress={() =>
          navigate(NAVIGATION.brandsProducts, { categoryId: item.id })
        }
      >
        <FastImage
          source={Tobacco}
          resizeMode="contain"
          style={styles.subCatImages}
        />
        <View style={{ marginLeft: SW(10) }}>
          <Text style={styles.subCategoryTextStyle}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    </>
  );

  return (
    <ScreenWrapper style={{ flex: 1, backgroundColor: COLORS.white }}>
      <Header title={"Products"} back={backArrow} />

      <View style={styles.upperView}>
        <Spacer space={SH(10)} />

        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={brandsArray}
          renderItem={renderCategory}
          keyExtractor={(item) => item.id}
        />
      </View>

      <View style={{ paddingHorizontal: SW(20), flex: 1, marginTop: SH(20) }}>
        {/* <FlatList
          showsVerticalScrollIndicator={false}
          data={SubCatArray}
          renderItem={listDetail}
          keyExtractor={(item) => item.id}
        /> */}
      </View>
    </ScreenWrapper>
  );
}
