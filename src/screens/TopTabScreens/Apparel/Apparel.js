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

  const listDetail = ({ item, onPress }) => (
    <TouchableOpacity
      style={styles.ShoesStyle}
      onPress={() => navigate(NAVIGATION.productInquiry)}
    >
      <Spacer space={SH(10)} />
      <View style={{ alignItems: "center" }}>
        <Image
          source={item.image}
          resizeMode="contain"
          style={{ height: vs(140), width: ms(150) }}
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
