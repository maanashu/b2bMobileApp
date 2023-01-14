import React from "react";
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./Apparel.styles";
import { ScreenWrapper, Spacer } from "@/components";
import { COLORS } from "@/theme/Colors";
import { SH } from "@/theme/ScalerDimensions";
import { Fonts } from "@/assets";
import { LastData } from "@/screens/Products/ProductsInquiry/FlatlistData";
import { ms, vs } from "react-native-size-matters";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";

export function Apparel({ onPress }) {
  const listData = LastData;

  function dynamicHeight(_index) {
    if (_index % 2 == 0) {
      return 260;
    } else if (_index % 2 !== 0) {
      return 240;
    } else {
      return 220;
    }
  }
  function dynamicImageHeight(_index) {
    if (_index % 2 == 0) {
      return 150;
    } else if (_index % 2 !== 0) {
      return 130;
    } else {
      return 100;
    }
  }
  function dynamicMarginTop(_index) {
    if (_index % 2 !== 0) {
      return 0;
    } else {
      return 20;
    }
  }
  function dynamicMarginBottom(_index) {
    if (_index % 2 == 0) {
      return 10;
    } else {
      return 10;
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
      onPress={() => navigate(NAVIGATION.productInquiry)}
    >
      <Spacer space={SH(10)} />
      <View style={{ alignItems: "center" }}>
        <Image
          source={item.image}
          resizeMode="contain"
          style={{
            height: vs(140),
            width: ms(150),
            height: dynamicImageHeight(index),
          }}
        />
      </View>
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
    <ScreenWrapper>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Spacer space={SH(30)} />
        <View style={{ paddingHorizontal: ms(20), flex: 1 }}>
          <FlatList
            data={listData}
            renderItem={listDetail}
            keyExtractor={(item) => item.id}
            // extraData={product}
            numColumns={2}
          />
        </View>

        <Spacer space={SH(30)} />
      </ScrollView>
    </ScreenWrapper>
  );
}
