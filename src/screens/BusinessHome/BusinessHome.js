import {
  Image,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  FlatList,
} from "react-native";
import React from "react";
import { styles } from "./BusinessHome.style";
import { CustomPagination, ScreenWrapper, Spacer } from "@/components";
import { SF, SH, SW } from "@/theme/ScalerDimensions";
import { COLORS } from "@/theme/Colors";
import { drink, Fonts, forward, girl, shampoo } from "@/assets";
import { ms } from "react-native-size-matters";
import SwiperFlatList from "react-native-swiper-flatlist";
import { Images, Bags } from "./Components";
import { useSelector } from "react-redux";
import { getProductSelector } from "@/selectors/ProductSelectors";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";

export function BusinessHome() {
  const user = useSelector(getProductSelector)?.product?.data;

  const renderRecentItem = ({ item, index }) => (
    <TouchableOpacity style={styles.swiperView}>
      <Image source={item.img} style={styles.storeImg} resizeMode="cover" />
    </TouchableOpacity>
  );

  function dynamicHeight(_index) {
    if (_index === 0 || _index === 2) {
      return SH(250);
    } else if (_index === 1 || _index === 3) {
      return SH(215);
    } else {
      return SH(180);
    }
  }
  function dynamicImageHeight(_index) {
    if (_index === 0 || _index === 2) {
      return SH(170);
    } else if (_index === 1 || _index === 3) {
      return SH(145);
    } else {
      return SH(80);
    }
  }
  function dynamicMarginTop(_index) {
    if (_index === 3) {
      return SH(-25);
    } else {
      return SH(10);
    }
  }
  function dynamicMarginBottom(_index) {
    if (_index === 2) {
      return;
    } else {
      return SH(20);
    }
  }

  const secondData = [
    {
      id: "1",
      title: " MOQ30 ",
      image: girl,
    },
    {
      id: "2",
      title: " MOQ30 ",
      image: drink,
    },
    {
      id: "3",
      title: " MOQ30 ",
      image: shampoo,
    },
  ];

  const SecondItem = ({ item, index }) => (
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
      <Image
        source={{ uri: item.image }}
        resizeMode="contain"
        style={{
          width: ms(145),
          height: dynamicImageHeight(index),
          alignSelf: "center",
        }}
      />

      <Text style={styles.titleText}>
        {item.name}
        <Text style={styles.subTitleText}> {item.subtitle}</Text>
      </Text>
      <Text style={styles.moqText}>{item.quantity}</Text>
    </TouchableOpacity>
  );
  const secondItem = ({ item, onPress }) => (
    <TouchableOpacity style={styles.item}>
      <Image source={{ uri: item.image }} style={styles.secondView} />

      <Spacer space={SH(10)} />

      <Text style={styles.commonFlatlistText}>{item.name}</Text>
    </TouchableOpacity>
  );
  return (
    <ScreenWrapper style={{ flex: 1, backgroundColor: COLORS.white }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.mainContainer}
      >
        <Spacer space={SH(20)} />

        <View style={{ paddingBottom: SH(30) }}>
          <SwiperFlatList
            // autoplay
            autoplayDelay={2}
            showPagination
            data={Images}
            renderItem={renderRecentItem}
            PaginationComponent={CustomPagination}
            paginationActiveColor={COLORS.black}
          />
        </View>

        <Spacer space={SH(20)} />

        <View style={styles.ProductView}>
          <View style={styles.innerView}>
            <Text
              style={{
                color: COLORS.black,
                fontSize: SF(16),
                fontFamily: Fonts.SemiBold,
              }}
            >
              New Products
            </Text>
            <TouchableOpacity
              onPress={() => navigate(NAVIGATION.businessProducts)}
            >
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.smallText}>See all </Text>
                <Image
                  source={forward}
                  style={{ height: SH(10), width: SW(6), marginTop: SH(5) }}
                />
              </View>
            </TouchableOpacity>
          </View>

          <Spacer space={SH(20)} />

          <FlatList
            data={user}
            renderItem={secondItem}
            keyExtractor={(item) => item.id}
            // extraData={product}
            numColumns={3}
            showsVerticalScrollIndicator={false}
          />
        </View>

        <Spacer space={SH(20)} />

        <FlatList
          data={user}
          renderItem={SecondItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
        />
      </ScrollView>

      <Spacer space={SH(10)} />
    </ScreenWrapper>
  );
}
