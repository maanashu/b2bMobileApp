import { Text, View, FlatList, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { styles } from "./SubCategories.styles";
import { Header, ScreenWrapper, Spacer } from "@/components";
import { SH, SW } from "@/theme/ScalerDimensions";
import { COLORS } from "@/theme/Colors";
import {
  backArrow,
  Fonts,
  static1,
  static2,
  static3,
  static4,
  static5,
  static6,
} from "@/assets";
import { useDispatch, useSelector } from "react-redux";
import { getCategorySelector } from "@/selectors/CategorySelectors";
import { getBrands, getSubCategory } from "@/actions/CategoryActions";
import FastImage from "react-native-fast-image";
import Modal from "react-native-modal";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";
import { renderNoData } from "@/components/FlatlistStyling";
import { isLoadingSelector } from "@/selectors/StatusSelectors";
import { TYPES } from "@/Types/Types";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Loader } from "@/components/Loader";
import { getProduct } from "@/actions/ProductActions";

export function SubCategories(params) {
  const listRef = useRef();
  const modalRef = useRef();
  const dispatch = useDispatch();

  const routeId = params?.route?.params?.idItem;
  const getIndex = params?.route?.params?.index || 0;

  const [selectedId, setSelectedId] = useState(params?.route?.params?.idItem);
  const [serviceModalisVisible, setserviceModalisVisible] = useState(false);

  const subcategoryObject = {
    page: 1,
    limit: 10,
    category_id: routeId,
    service_type:
      params?.route?.params?.serviceType == "product" ? "product" : "service",
    main_category: true,
    app_name: "b2b",
  };
  const categoryData = useSelector(getCategorySelector);
  const SUBCATEGORIES = useSelector(getCategorySelector);

  const isLoading = useSelector((state) =>
    isLoadingSelector([TYPES.GET_SUB_CATEGORY], state)
  );
  // const productObject = {
  //   page: 1,
  //   limit: 10,
  //   // categoryId: SUBCATEGORIES?.subCategoryList?.data[0]?.id,
  //   app_name: "b2b",
  //   delivery_options: "3",
  // };
  useEffect(() => {
    dispatch(getBrands(1));
    // dispatch(getProduct(productObject));
  }, []);

  useEffect(() => {
    onScrollToSelectItem(getIndex);
  }, []);

  useEffect(() => {
    dispatch(getSubCategory(subcategoryObject));

    setSelectedId(
      params?.route?.params?.idItem ||
        categoryData?.categoryList.categoryResponse?.[0]?.categoryData?.id ||
        categoryData?.serviceCategoryList.categoryResponse?.[0]?.categoryData
          ?.id
    );
  }, []);

  const getSubCategoryList = (item) => {
    setSelectedId(item.categoryData?.id);
    let categoryObject = {
      ...subcategoryObject,
      category_id: item.categoryData?.id,
    };

    dispatch(getSubCategory(categoryObject));
  };

  const onScrollToSelectItem = (index) => {
    if (listRef.current) {
      listRef.current.scrollToIndex({ animated: true, index: index || 0 });
    }
  };

  const renderCategory = ({ item, index }) => (
    <>
      <TouchableOpacity
        style={styles.categoryTouchableView}
        onPress={() => {
          getSubCategoryList(item);
        }}
      >
        <View
          style={{
            borderWidth: item?.categoryData?.id === selectedId ? 1 : null,
            padding: SW(5),
            borderRadius: SW(30),
            borderColor:
              item?.categoryData?.id === selectedId
                ? COLORS.primary
                : COLORS.light_grey,

            backgroundColor:
              item?.categoryData?.id === selectedId
                ? COLORS.white
                : COLORS.input_bg,
          }}
        >
          <View style={styles.rowView}>
            <FastImage
              source={{ uri: item?.categoryData?.image }}
              resizeMode="cover"
              style={styles.categoryImages}
            />
            <Text
              style={{
                marginHorizontal: SW(2),
                fontFamily: item.id === selectedId ? Fonts.Bold : Fonts.Regular,
                color:
                  item?.categoryData?.id === selectedId
                    ? COLORS.primary
                    : COLORS.text,
              }}
            >
              {item?.categoryData?.name}
            </Text>
          </View>
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

  const renderSubcategoryItem = ({ item, index }) => (
    <TouchableOpacity
      style={styles.rowCard}
      onPress={
        () =>
          navigate(NAVIGATION.brandsProducts, {
            categoryId: item.categoryData?.id,
          })
        // console.log("item id", item.id)
      }
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={styles.row}>
          {item?.categoryData?.image ? (
            <Image
              source={{ uri: item?.categoryData?.image }}
              resizeMode="cover"
              style={[styles.img, { borderRadius: 35 }]}
            />
          ) : (
            <View style={styles.emptyImg} />
          )}
        </View>
        <View style={{ flex: 1, alignItems: "flex-start" }}>
          <Text style={[styles.subName, { paddingHorizontal: 10 }]}>
            {item?.categoryData?.name}
          </Text>
          <Text style={styles.brandsName}>
            {item?.brandCount}
            {item?.brandCount === 1 ? " Brand" : " Brands"}
          </Text>
          <Spacer space={SH(1)} />
          <Text style={styles.brandsName}>
            {item?.productCount}
            {item?.productCount === 1 ? " Product" : " Products"}
          </Text>
        </View>
      </View>
      <Spacer space={SH(10)} />
      <View
        style={{
          flexDirection: "row",
          flex: 1,
          justifyContent: "space-between",
        }}
      >
        <Image style={styles.staticStyle} source={static1} />
        <Image style={styles.staticStyle} source={static2} />
        <Image style={styles.staticStyle} source={static3} />
        <Image style={styles.staticStyle} source={static4} />
        <Image style={styles.staticStyle} source={static5} />
        <Image style={styles.staticStyle} source={static6} />
      </View>
      {/* <Ionicons name="chevron-forward" size={20} color="black" /> */}
    </TouchableOpacity>
  );

  const toggleModal = () => {
    setserviceModalisVisible(!serviceModalisVisible);
  };

  return (
    <ScreenWrapper style={{ flex: 1, backgroundColor: COLORS.white }}>
      <Header
        title={"Categories"}
        back={backArrow}
        // onFilterPress={toggleModal}
      />
      <View style={styles.upperView}>
        <Spacer space={SH(10)} />

        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={
            params?.route?.params?.serviceType === "product"
              ? categoryData?.categoryList?.categoryResponse
              : categoryData?.serviceCategoryList?.categoryResponse
          }
          renderItem={renderCategory}
          keyExtractor={(item) => item.id}
          getItemLayout={(data, index) => ({
            length: SH(75),
            offset: SH(85) * index,
            index,
          })}
          ListEmptyComponent={renderNoData}
          ref={listRef}
        />
      </View>

      <View style={{ paddingHorizontal: SW(5), flex: 1, marginTop: SH(20) }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={SUBCATEGORIES?.subCategoryList?.categoryResponse}
          renderItem={renderSubcategoryItem}
          ListEmptyComponent={renderNoData}
          keyExtractor={(item) => item.id}
          extraData={SUBCATEGORIES?.subCategoryList?.categoryResponse}
          // renderScrollComponent={loadMoreFunction}
          // onEndReached={loadMoreFunction}
          // onEndReachedThreshold={0}
        />
        {isLoading ? <Loader message="Loading data..." /> : null}
      </View>

      <Modal
        isVisible={serviceModalisVisible}
        backdropColor="FFFFFF"
        backdropOpacity={0}
        onBackdropPress={toggleModal}
        onBackButtonPress={toggleModal}
        style={{ marginTop: SH(-530), marginLeft: SW(250) }}
        hideModalContentWhileAnimating
        animationInTiming={10}
        animationOutTiming={10}
      >
        <>
          <View style={styles.modalContainer}>
            <TouchableOpacity>
              <Text style={styles.servicesText}>{"Retail"}</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.servicesText}>{"Fashion"}</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.servicesText}>{"All"}</Text>
            </TouchableOpacity>
          </View>
        </>
      </Modal>
    </ScreenWrapper>
  );
}
