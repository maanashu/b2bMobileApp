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

  const categoryData = useSelector(getCategorySelector);
  const SUBCATEGORIES = useSelector(getCategorySelector);
  const subcategoryObject = {
    page: 1,
    limit: 10,
    category_id: routeId,
    service_type:
      params?.route?.params?.serviceType == "product" ? "product" : "service",
    app_name: "b2b",
  };

  const isLoading = useSelector((state) =>
    isLoadingSelector([TYPES.GET_SUB_CATEGORY], state)
  );
  useEffect(() => {
    dispatch(getBrands(1));
    onScrollToSelectItem(getIndex);
  }, []);

  useEffect(() => {
    dispatch(getSubCategory(subcategoryObject));
    setSelectedId(
      params?.route?.params?.idItem ||
        categoryData?.categoryList.data?.[0]?.id ||
        categoryData?.serviceCategoryList.data?.[0]?.id
    );
  }, []);

  const getSubCategoryList = (item) => {
    setSelectedId(item?.id);
    let categoryObject = {
      ...subcategoryObject,
      category_id: item?.id,
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
            borderWidth: item?.id === selectedId ? 1 : null,
            padding: SW(5),
            borderRadius: SW(30),
            borderColor:
              item?.id === selectedId ? COLORS.primary : COLORS.light_grey,

            backgroundColor:
              item?.id === selectedId ? COLORS.white : COLORS.input_bg,
          }}
        >
          <View style={styles.rowView}>
            <FastImage
              source={{ uri: item?.image }}
              resizeMode="cover"
              style={styles.categoryImages}
            />
            <Text
              style={{
                marginHorizontal: SW(2),
                fontFamily: item.id === selectedId ? Fonts.Bold : Fonts.Regular,
                color: item?.id === selectedId ? COLORS.primary : COLORS.text,
              }}
            >
              {item?.name}
            </Text>
          </View>
        </View>
        <Spacer space={SH(5)} />
      </TouchableOpacity>
    </>
  );

  const renderSubcategoryItem = ({ item, index }) => (
    <TouchableOpacity
      style={styles.rowCard}
      onPress={() =>
        navigate(NAVIGATION.brandsSellers, {
          categoryId: item?.id,
        })
      }
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={styles.row}>
          {item?.image ? (
            <FastImage
              source={{ uri: item?.image }}
              resizeMode="cover"
              style={[styles.img, { borderRadius: 35 }]}
            />
          ) : (
            <View style={styles.emptyImg} />
          )}
        </View>
        <View style={{ flex: 1, alignItems: "flex-start" }}>
          <Text style={[styles.subName, { paddingHorizontal: 10 }]}>
            {item?.name}
          </Text>
          <Text style={styles.brandsName}>
            {item?.brands_count}
            {item?.brands_count === 1 ? " Brand" : " Brands"}
          </Text>
          <Spacer space={SH(1)} />
          <Text style={styles.brandsName}>
            {item?.products_count}
            {item?.products_count === 1 ? " Product" : " Products"}
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
      <Header title={"Categories"} back={backArrow} enableBackButton />
      <View style={styles.upperView}>
        <Spacer space={SH(10)} />

        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={
            params?.route?.params?.serviceType === "product"
              ? categoryData?.categoryList?.data
              : categoryData?.serviceCategoryList?.data
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
          data={SUBCATEGORIES?.subCategoryList?.data}
          renderItem={renderSubcategoryItem}
          ListEmptyComponent={renderNoData}
          keyExtractor={(item) => item.id}
          extraData={SUBCATEGORIES?.subCategoryList?.data}
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
