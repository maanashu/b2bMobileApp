import React from "react";
import {
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import { Spacer, ScreenWrapper } from "@/components";
import { strings } from "@/localization";
import { styles } from "./OrderedProducts.styles";
import { SH } from "@/theme";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";
import { videoPic1, videoPic2, videoPic3, videoPic4 } from "@/assets";
import { ms, vs } from "react-native-size-matters";
import { HeaderSubName } from "../Components/HeaderSubName";
import { useSelector } from "react-redux";
import { orderSelector } from "@/selectors/OrderSelector";
import { View } from "react-native";

export function OrderedProducts({ route }) {
  const order = useSelector(orderSelector);

  const renderProducts = ({ item }) => (
    <View style={styles.ShoesStyle}>
      <Image
        source={{ uri: item.image }}
        resizeMode="contain"
        style={{ height: vs(130), width: ms(140) }}
      />
      <Spacer space={SH(5)} />
      <Text style={styles.titleBoldText} numberOfLines={2}>
        {item.name}
        {/* <Text style={styles.titleRegularText}> {item.subTitle}</Text> */}
      </Text>
      {/* <Text style={styles.bagsQuantityText}>{item.quantity}</Text> */}
    </View>
  );

  return (
    <ScreenWrapper>
      <HeaderSubName
        title={"Products"}
        subTitle={
          order?.getBrandsProductsShops?.products?.data?.length + " Products"
        }
      />
      <Spacer space={SH(1)} />

      <View style={styles.mainContainer}>
        <Spacer space={SH(20)} />

        <FlatList
          showsVerticalScrollIndicator={false}
          data={order?.getBrandsProductsShops?.products?.data ?? []}
          renderItem={renderProducts}
          keyExtractor={(item) => item.id}
          extraData={order?.getBrandsProductsShops?.products?.data ?? []}
          numColumns={2}
        />
      </View>
    </ScreenWrapper>
  );
}
