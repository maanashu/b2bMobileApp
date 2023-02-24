import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
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

export function SubCategories(params) {
  const listRef = useRef();
  const modalRef = useRef();

  const routeId = params?.route?.params?.idItem;
  const getIndex = params?.route?.params?.index;

  const [selectedId, setSelectedId] = useState(params?.route?.params?.idItem);

  const [serviceModalisVisible, setserviceModalisVisible] = useState(false);

  const dispatch = useDispatch();
  const categoryData = useSelector(getCategorySelector);
  const categoryArray = categoryData?.categoryList;
  const serviceCategoryArray = categoryData?.categoryList;

  const SUBCATEGORIES = useSelector(getCategorySelector);
  const SubCatArray = SUBCATEGORIES?.subCategoryList;
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
    dispatch(
      getSubCategory(
        routeId ||
          categoryData?.categoryList[0]?.id ||
          categoryData?.categoryList[0]?.id
      )
    );
  }, []);

  const getSubCategoryList = (item) => {
    setSelectedId(item.id);
    dispatch(getSubCategory(item.id));
    // console.log("checking data", SUBCATEGORIES?.subCategoryList);
    // if (item.id === undefined) {
    //   setsubCategoryArray({ ...subCategoryArray });
    // }
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

  const listDetail = ({ item, index }) => (
    <>
      <TouchableOpacity
        style={styles.subCatTouchableView}
        onPress={() =>
          navigate(NAVIGATION.brandsProducts, { categoryId: selectedId })
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
              ? categoryData?.categoryList
              : categoryData?.serviceCategoryList
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
        {isLoading ? (
          <View>
            <ActivityIndicator size="large" color={COLORS.primary} />
          </View>
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={SUBCATEGORIES?.subCategoryList}
            renderItem={listDetail}
            ListEmptyComponent={renderNoData}
            keyExtractor={(item) => item.id}
          />
        )}
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
