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
      <Image
        source={item.image}
        resizeMode="contain"
        style={{ height: vs(140), width: ms(150) }}
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
        {item.pieces}
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
