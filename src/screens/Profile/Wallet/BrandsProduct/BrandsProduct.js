import React from "react";
import {
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import { Spacer, ScreenWrapper, Header } from "@/components";
import { strings } from "@/localization";
import { styles } from "./BrandsProduct.styles";
import { SH } from "@/theme";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";
import {
  videoPic1,
  videoPic2,
  videoPic3,
  videoPic4,
  backArrow,
} from "@/assets";
import { ms, vs } from "react-native-size-matters";

export function BrandsProduct({ route }) {
  const data = route.params.data || {};
  console.log(data);

  const Bags = [
    {
      id: 1,
      image: videoPic1,
      title: strings.businessProfile.madeWell,
      subTitle: strings.businessProfile.subTitle,
      quantity: strings.businessProfile.moq,
    },
    {
      id: 2,
      image: videoPic2,
      title: strings.businessProfile.madeWell,
      subTitle: strings.businessProfile.subTitle,
      quantity: strings.businessProfile.moq,
    },
    {
      id: 3,
      image: videoPic3,
      title: strings.businessProfile.madeWell,
      subTitle: strings.businessProfile.subTitle,
      quantity: strings.businessProfile.moq,
    },
    {
      id: 4,
      image: videoPic4,
      title: strings.businessProfile.madeWell,
      subTitle: strings.businessProfile.subTitle,
      quantity: strings.businessProfile.moq,
    },
    {
      id: 5,
      image: videoPic2,
      title: strings.businessProfile.madeWell,
      subTitle: strings.businessProfile.subTitle,
      quantity: strings.businessProfile.moq,
    },
    {
      id: 6,
      image: videoPic1,
      title: strings.businessProfile.madeWell,
      subTitle: strings.businessProfile.subTitle,
      quantity: strings.businessProfile.moq,
    },
  ];

  const SecondItem = ({ item }) => (
    <TouchableOpacity
      style={styles.ShoesStyle}
      onPress={() => navigate(NAVIGATION.manufacturers)}
    >
      <Image
        source={item.image}
        resizeMode="contain"
        style={{ height: vs(130), width: ms(140) }}
      />

      <Text style={styles.titleBoldText}>
        {item.title}
        <Text style={styles.titleRegularText}> {item.subTitle}</Text>
      </Text>
      <Text style={styles.bagsQuantityText}>{item.quantity}</Text>
    </TouchableOpacity>
  );

  return (
    <ScreenWrapper>
      <Header back={backArrow} title={data} />
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
    </ScreenWrapper>
  );
}
