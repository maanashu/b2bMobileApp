import React from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { ScreenWrapper } from "@/components";
import { styles } from "./OrderedBrands.styles";
import { SH, SW } from "@/theme";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";
import {
  marlboroLogo,
  vomedoLogo,
  adequateLogo,
  HMLogo,
  forward,
  iJoyLogo,
} from "@/assets";
import { HeaderSubName } from "../Components/HeaderSubName";
import { strings } from "@/localization";
import { orderSelector } from "@/selectors/OrderSelector";
import { useSelector } from "react-redux";

const data = [
  {
    id: 1,
    name: "Marlboro",
    sub: "5 Products purchases",
    forward: forward,
    image: marlboroLogo,
  },
  {
    id: 2,
    name: "Vomedo",
    sub: "1 Products purchases",
    forward: forward,
    image: vomedoLogo,
  },
  {
    id: 3,
    name: "Adequate Fragnance",
    sub: "3 Products purchases",
    forward: forward,
    image: adequateLogo,
  },
  {
    id: 4,
    name: "H&M",
    sub: "7 Products purchases",
    image: HMLogo,
    forward: forward,
  },
  {
    id: 5,
    name: "iJOY",
    sub: "3 Products purchases",
    forward: forward,
    image: iJoyLogo,
  },
];

export function OrderedBrands() {
  const order = useSelector(orderSelector);

  // order?.getBrandsProductsShops?.brands?.data
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigate(NAVIGATION.brandsProduct, { data: item.name })}
      style={styles.rowCard}
    >
      <View style={styles.mainRow}>
        <View style={styles.row}>
          <Image
            source={{ uri: item.image }}
            resizeMode="contain"
            style={{ height: SH(40), width: SH(40), borderRadius: SH(40) }}
          />
          <View
            style={item.id == 4 ? { paddingHorizontal: 20 } : styles.padding}
          >
            <Text style={styles.cardName}>{item.name}</Text>
            {/* <Text style={styles.subName}>{item.sub}</Text> */}
          </View>
        </View>
      </View>

      <Image
        source={forward}
        resizeMode="contain"
        style={{ height: SH(20), alignSelf: "center" }}
      />
    </TouchableOpacity>
  );

  return (
    <ScreenWrapper>
      <HeaderSubName
        title={strings.jbrWallet.brands}
        subTitle={
          order?.getBrandsProductsShops?.brands?.data?.length + " Brands"
        }
      />

      <FlatList
        data={order?.getBrandsProductsShops?.brands?.data ?? []}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        bounces={false}
      />
    </ScreenWrapper>
  );
}
