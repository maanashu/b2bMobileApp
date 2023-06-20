import {
  useWindowDimensions,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useRef } from "react";
import { styles } from "./AddCoupon.styles";
import {
  Button,
  NameHeaderCoins,
  ScreenWrapper,
  Spacer,
  TextField,
} from "@/components";
import { SF, SH, SW } from "@/theme/ScalerDimensions";
import { COLORS } from "@/theme/Colors";
import { useState } from "react";
import { backArrow, bank, coupon, Fonts } from "@/assets";
import { strings } from "@/localization";
import { CurrentCoupons, PastCoupons } from "@/screens";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { useDispatch, useSelector } from "react-redux";
import { addCoupon, getCoupons } from "@/actions/ProductActions";
import { goBack } from "@/navigation/NavigationRef";
import { renderNoData } from "@/components/FlatlistStyling";
import { getCategorySelector } from "@/selectors/CategorySelectors";
import FastImage from "react-native-fast-image";
import { getProductSelector } from "@/selectors/ProductSelectors";

export function AddCoupon(params) {
  const layout = useWindowDimensions();
  const dispatch = useDispatch();
  const [index, setIndex] = React.useState(0);
  const [couponAdd, setcouponAdd] = useState();
  const categoryData = useSelector(getCategorySelector);
  const listRef = useRef();
  const [selectedId, setSelectedId] = useState(
    categoryData?.categoryList?.data?.[0]?.id
  );
  const coupons = useSelector(getProductSelector)?.coupons;

  const data = {
    code: couponAdd,
  };

  const addingCoupons = () => {
    dispatch(addCoupon(data));
  };
  const backHandler = () => {
    // params?.route?.params === "checkout"
    //   ? navigate(NAVIGATION.checkout)
    //   : navigate(NAVIGATION.profile);
    goBack();
  };

  const getSubCategoryList = (item) => {
    setSelectedId(item?.id);
  };

  const renderCategory = ({ item, index }) => (
    <>
      <TouchableOpacity
        style={styles.categoryTouchableView}
        onPress={() => {
          getSubCategoryList(item);
          dispatch(getCoupons({ category_id: item?.id }));
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
  const renderItem = ({ item }) => {
    return (
      <>
        <View style={styles.Item}>
          <Image
            source={{ uri: item?.image }}
            resizeMode="contain"
            style={styles.productImageStyle}
          />

          <Spacer space={SW(10)} />

          <Text numberOfLines={2} style={styles.productName}>
            {item?.name}
          </Text>
        </View>

        <Spacer horizontal space={SW(10)} />
      </>
    );
  };
  return (
    <ScreenWrapper style={{ flex: 1, backgroundColor: "#F9F9F9" }}>
      <NameHeaderCoins
        title={strings.coupons.coupons}
        back={backArrow}
        amount={"0"}
        onPress={backHandler}
      />

      <View style={styles.mainContainer}>
        <View style={styles.subContainer}>
          <View style={styles.flex}>
            <Text style={styles.text}>{"USD $256"}</Text>
            <Text style={styles.text2}>{"Saved this month"}</Text>
          </View>
          <View style={styles.seprator} />
          <TouchableOpacity style={styles.addCouponView}>
            <Image source={coupon} style={styles.coupon} />
            <Text style={styles.addCoupon}>{"Add Coupon"}</Text>
          </TouchableOpacity>
        </View>
        <Spacer space={SH(10)} />

        <View style={styles.upperView}>
          <Spacer space={SH(10)} />

          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={categoryData?.categoryList?.data}
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
        <Spacer space={SH(20)} />
        <View style={styles.couponView}>
          {coupons?.map((item, index) => (
            <View key={index}>
              <Text style={styles.sectionHeaderName}>
                {item?.categoryName}
              </Text>

              <Spacer space={SH(15)} />

              <FlatList
                data={item?.couponData}
                renderItem={renderItem}
                horizontal
                showsHorizontalScrollIndicator={false}
                ListEmptyComponent={renderNoData}
              />

              <Spacer space={SH(15)} />
            </View>
          ))}
        </View>
      </View>
    </ScreenWrapper>
  );
}
