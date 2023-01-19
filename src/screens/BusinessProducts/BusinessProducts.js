import {
  Image,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  FlatList,
} from "react-native";
import React from "react";
import { styles } from "./BusinessProducts.style";
import { ScreenWrapper, Spacer } from "@/components";
import { SH } from "@/theme/ScalerDimensions";
import { COLORS } from "@/theme/Colors";
import { videoPic2, videoPic1, videoPic3, videoPic4, filter } from "@/assets";
import { strings } from "@/localization";
import { ms, vs } from "react-native-size-matters";

export function BusinessProducts() {
  const Bags = [
    {
      id: 1,
      image: videoPic1,
      title: strings.businessProfile.madeWell,
      subTitle: "colored cozy short cardigan",
      quantity: strings.businessProfile.moq,
    },
    {
      id: 2,
      image: videoPic2,
      title: strings.businessProfile.madeWell,
      subTitle: "colored cozy short cardigan",
      quantity: strings.businessProfile.moq,
    },
    {
      id: 3,
      image: videoPic3,
      title: strings.businessProfile.madeWell,
      subTitle: "colored cozy short cardigan",
      quantity: strings.businessProfile.moq,
    },
    {
      id: 4,
      image: videoPic4,
      title: strings.businessProfile.madeWell,
      subTitle: "colored cozy short cardigan",
      quantity: strings.businessProfile.moq,
    },
  ];

  function dynamicHeight(_index) {
    if (_index === 0 || _index === 2) {
      return SH(230);
    } else if (_index === 1 || _index === 3) {
      return SH(210);
    } else {
      return SH(160);
    }
  }
  function dynamicImageHeight(_index) {
    if (_index === 0 || _index === 2) {
      return SH(150);
    } else if (_index === 1 || _index === 3) {
      return SH(130);
    } else {
      return SH(70);
    }
  }
  function dynamicMarginTop(_index) {
    if (_index === 3) {
      return SH(-20);
    } else {
      return SH(10);
    }
  }
  function dynamicMarginBottom(_index) {
    if (_index === 2) {
      return;
    } else {
      return SH(10);
    }
  }
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
          height: vs(130),
          width: ms(140),
          height: dynamicImageHeight(index),
          alignSelf: "center",
        }}
      />

      <Text style={styles.titleBoldText}>
        {item.title}
        <Text style={styles.subTitleText}> {item.subTitle}</Text>
      </Text>
      <Text style={styles.quantityText}>{item.quantity}</Text>
    </TouchableOpacity>
  );
  return (
    <ScreenWrapper style={{ flex: 1, backgroundColor: COLORS.white }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.mainContainer}
      >
        <Spacer space={SH(5)} />

        <TouchableOpacity style={styles.filerView}>
          <Image
            source={filter}
            resizeMode="contain"
            style={styles.filterIcon}
          />
          <Text style={styles.filterText}>{strings.business.filter}</Text>
        </TouchableOpacity>

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
