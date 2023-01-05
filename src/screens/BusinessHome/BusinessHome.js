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
import { ScreenWrapper, Spacer } from "@/components";
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
import { SliderBox } from "react-native-image-slider-box";

export function BusinessHome() {
  const images = [sliderBag, sliderBag];

  const Bags = [
    {
      id: 1,
      image: videoPic1,
      title: strings.businessProfile.madeWell,
      quantity: strings.businessProfile.moq,
    },
    {
      id: 2,
      image: videoPic2,
      title: strings.businessProfile.madeWell,
      quantity: strings.businessProfile.moq,
    },
    {
      id: 3,
      image: videoPic3,
      title: strings.businessProfile.madeWell,
      quantity: strings.businessProfile.moq,
    },
    {
      id: 4,
      image: videoPic4,
      title: strings.businessProfile.madeWell,
      quantity: strings.businessProfile.moq,
    },
  ];

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

  const SecondItem = ({ item }) => (
    <TouchableOpacity
      style={styles.ShoesStyle}
      // onPress={() => navigate(NAVIGATION.productInquiry)}
    >
      <Image
        source={item.image}
        resizeMode="contain"
        style={{ height: vs(130), width: ms(140) }}
      />

      <Text
        style={{
          fontFamily: Fonts.SemiBold,
          fontSize: ms(12),
          color: COLORS.darkGrey,
          paddingHorizontal: ms(10),
        }}
      >
        {item.title}
      </Text>
      <Text
        style={{
          alignSelf: "flex-start",
          fontFamily: Fonts.Regular,
          paddingLeft: ms(18),
          fontSize: ms(10),
          color: COLORS.darkGrey,
          marginTop: vs(2),
        }}
      >
        {item.quantity}
      </Text>
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

        <View>
          <SliderBox
            images={images}
            autoplay={false}
            circleLoop={false}
            resizeMode={"stretch"}
            autoplayInterval={3000}
            // parentWidth={SW(380)}
            paginationBoxStyle={{
              // position: "absolute",
              bottom: 0,
              padding: 0,
              alignItems: "center",
              alignSelf: "center",
              justifyContent: "center",
            }}
            ImageComponentStyle={{
              borderRadius: 10,
              width: 280,
              height: 100,
              marginTop: 5,
              marginRight: 22,
            }}
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
          //   extraData={product}
          numColumns={2}
        />
      </ScrollView>

      <Spacer space={SH(10)} />
    </ScreenWrapper>
  );
}
