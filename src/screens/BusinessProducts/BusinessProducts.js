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
import { Spacer } from "@/components";
import { SH } from "@/theme/ScalerDimensions";
import { COLORS } from "@/theme/Colors";
import { Fonts, videoPic2, videoPic1, videoPic3, videoPic4 } from "@/assets";
import { strings } from "@/localization";
import { ms, vs } from "react-native-size-matters";

export function BusinessProducts() {
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
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.mainContainer}
      >
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
    </View>
  );
}
