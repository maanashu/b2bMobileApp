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
import {
  drink,
  Fonts,
  forward,
  girl,
  shampoo,
  sliderBag,
  videoPic1,
  videoPic2,
  videoPic3,
  videoPic4,
} from "@/assets";
import { strings } from "@/localization";
import { ms, vs } from "react-native-size-matters";
import SwiperFlatList from "react-native-swiper-flatlist";
import { Images, Bags } from "./Components";

export function BusinessHome() {
  const renderRecentItem = ({ item, index }) => (
    <TouchableOpacity style={styles.swiperView}>
      <Image source={item.img} style={styles.storeImg} resizeMode="cover" />
    </TouchableOpacity>
  );

  function dynamicHeight(_index) {
    if (_index === 0 || _index === 2) {
      return 225;
    } else if (_index === 1 || _index === 3) {
      return 205;
    } else {
      return 160;
    }
  }
  function dynamicImageHeight(_index) {
    if (_index === 0 || _index === 2) {
      return 150;
    } else if (_index === 1 || _index === 3) {
      return 130;
    } else {
      return 60;
    }
  }
  function dynamicMarginTop(_index) {
    if (_index === 3) {
      return -20;
    } else {
      return 10;
    }
  }
  function dynamicMarginBottom(_index) {
    if (_index === 2) {
      return;
    } else {
      return 10;
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
        source={item.image}
        resizeMode="contain"
        style={{
          width: ms(145),
          height: dynamicImageHeight(index),
          alignSelf: "center",
        }}
      />

      <Text style={styles.titleText}>
        {item.title}
        <Text style={styles.subTitleText}> {item.subtitle}</Text>
      </Text>
      <Text style={styles.moqText}>{item.quantity}</Text>
    </TouchableOpacity>
  );
  const secondItem = ({ item, onPress }) => (
    <TouchableOpacity style={styles.item}>
      <Image source={item.image} style={styles.secondView} />

      <Spacer space={SH(10)} />

      <Text style={styles.commonFlatlistText}>{item.title}</Text>
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
            autoplay
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
            <TouchableOpacity>
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
            data={secondData}
            renderItem={secondItem}
            keyExtractor={(item) => item.id}
            // extraData={product}
            numColumns={3}
          />
        </View>

        <Spacer space={SH(20)} />

        <FlatList
          data={Bags}
          renderItem={SecondItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
        />
      </ScrollView>

      <Spacer space={SH(10)} />
    </ScreenWrapper>
  );
}
