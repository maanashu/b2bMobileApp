import { Text, View, FlatList, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { styles } from "./SubCategories.styles";
import { Header, ScreenWrapper, Spacer } from "@/components";
import { SH, SW } from "@/theme/ScalerDimensions";
import { COLORS } from "@/theme/Colors";
import { backArrow, Fonts, Tobacco } from "@/assets";
import { useDispatch, useSelector } from "react-redux";
import { getCategorySelector } from "@/selectors/CategorySelectors";
import {
  getBrands,
  getCategory,
  getServiceCategory,
  getSubCategory,
} from "@/actions/CategoryActions";
import FastImage from "react-native-fast-image";
import Modal from "react-native-modal";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";
import { renderNoData } from "@/components/FlatlistStyling";
import { isLoadingSelector } from "@/selectors/StatusSelectors";
import { TYPES } from "@/Types/Types";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Loader } from "@/components/Loader";

export function SubCategories(params) {
  const listRef = useRef();
  const modalRef = useRef();

  const routeId = params?.route?.params?.idItem;
  const getIndex = params?.route?.params?.index;

  const [selectedId, setSelectedId] = useState(params?.route?.params?.idItem);
  const [serviceModalisVisible, setserviceModalisVisible] = useState(false);
  const subcategoryObject = {
    page: 1,
    limit: 10,
    category_id: routeId,
    service_type:
      params?.route?.params?.serviceType == "product" ? "product" : "service",
    main_category: true,
  };
  const dispatch = useDispatch();
  const categoryData = useSelector(getCategorySelector);

  const SUBCATEGORIES = useSelector(getCategorySelector);
  const [subCategoryArray, setsubCategoryArray] = useState(
    SUBCATEGORIES?.subCategoryList
  );
  const isLoading = useSelector((state) =>
    isLoadingSelector([TYPES.GET_SUB_CATEGORY], state)
  );

  useEffect(() => {
    dispatch(getBrands(1));
    if (params?.route?.params?.serviceType == "product") {
      dispatch(getCategory());
    } else if (params?.route?.params?.serviceType == "business") {
      dispatch(getServiceCategory());
    }

    setSelectedId(routeId || categoryData?.categoryList[0]?.id) ||
      categoryData?.categoryList[0]?.id;
  }, []);

  useEffect(() => {
    onScrollToSelectItem(getIndex);
  }, []);

  useEffect(() => {
    setSelectedId(
      selectedId ||
        categoryData?.categoryList[0]?.id ||
        categoryData?.categoryList[0]?.id
    );
    dispatch(getSubCategory(subcategoryObject));
  }, []);

  const getSubCategoryList = (item) => {
    setSelectedId(item.id);
    let categoryObject = {
      ...subcategoryObject,
      category_id: item.id,
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

  const renderSubcategoryItem = ({ item, index }) => (
    <TouchableOpacity
      style={styles.rowCard}
      onPress={() =>
        navigate(NAVIGATION.brandsProducts, { categoryId: item.id })
      }
    >
      <View style={styles.row}>
        {item.image ? (
          <Image
            source={{ uri: item.image }}
            resizeMode="cover"
            style={[styles.img, { borderRadius: 20 }]}
          />
        ) : (
          <View style={styles.emptyImg} />
        )}
        <Text style={[styles.subName, { paddingHorizontal: 10 }]}>
          {item.name}
        </Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color="black" />
    </TouchableOpacity>
  );

  const toggleModal = () => {
    setserviceModalisVisible(!serviceModalisVisible);
  };

  // const loadMoreFunction = () => {
  //   dispatch(getSubCategory(subcategoryObject.page + 1));
  // };

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
              ? categoryData?.categoryList.data
              : categoryData?.serviceCategoryList.data
          }
          renderItem={renderCategory}
          keyExtractor={(item) => item.id}
          getItemLayout={(data, index) => ({
            length: SH(70),
            offset: SH(70) * index,
            index,
          })}
          ListEmptyComponent={renderNoData}
          ref={listRef}
        />
      </View>

      <View style={{ paddingHorizontal: SW(20), flex: 1, marginTop: SH(20) }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={SUBCATEGORIES?.subCategoryList?.data}
          renderItem={renderSubcategoryItem}
          ListEmptyComponent={renderNoData}
          keyExtractor={(item) => item.id}
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
