import React from "react";
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./Business.style";
import { useState } from "react";
import { ScreenWrapper, Spacer } from "@/components";
import { COLORS } from "@/theme/Colors";
import { SH, SW } from "@/theme/ScalerDimensions";
import { SliderBox } from "react-native-image-slider-box";
import { navigate } from "@/navigation/NavigationRef";
import {
  Fonts,
  forward,
  roundAll,
  roundApparel,
  roundAppliance,
  roundElectronices,
  roundPersonal,
  roundShoes,
  roundSports,
  roundTobbacco,
  slideImage,
  headphones,
  lighter,
  jacket,
  shoesBusiness,
  watch,
  boots,
} from "@/assets";
import { LastData } from "@/screens/Products/ProductsInquiry/FlatlistData";
import { ms, vs } from "react-native-size-matters";
import { NAVIGATION } from "@/constants";
import { Search } from "@/components/Search";
import { strings } from "@/localization";
export function Business() {
  const listData = LastData;

  const [selectedId, setSelectedId] = useState("");

  const [product, setProduct] = useState("");

  const DATA = [
    {
      id: "1",
      title: "Apparel",
      image: roundApparel,
    },
    {
      id: "2",
      title: "Electronics",
      image: roundElectronices,
    },
    {
      id: "3",
      title: "Appliance",
      image: roundAppliance,
    },
    {
      id: "4",
      title: "Personal Care",
      image: roundPersonal,
    },
    {
      id: "5",
      title: "Sports",
      image: roundSports,
    },
    {
      id: "6",
      title: "Shoes",
      image: roundShoes,
    },
    {
      id: "7",
      title: "Tobbacco",
      image: roundTobbacco,
    },
    {
      id: "8",
      title: "All",
      image: roundAll,
    },
  ];
  const secondData = [
    {
      id: "1",
      title: strings.business.trending,
      subtitle: strings.business.electronics,
      image: headphones,
    },
    {
      id: "2",
      title: strings.business.trending,
      subtitle: strings.business.tobacco,
      image: lighter,
    },
    {
      id: "3",
      title: strings.business.trending,
      subtitle: strings.business.apparel,
      image: jacket,
    },
  ];
  const thirdData = [
    {
      id: "1",
      title: strings.business.bestSellers,
      subtitle: strings.business.shoeMan,
      image: shoesBusiness,
    },
    {
      id: "2",
      title: strings.business.bestSellers,
      subtitle: strings.business.electronics,
      image: watch,
    },
    {
      id: "3",
      title: strings.business.bestSellers,
      subtitle: strings.business.shoeMan,
      image: boots,
    },
  ];

  const images = [slideImage, slideImage];

  const Item = ({ item, onPress }) => (
    <TouchableOpacity style={styles.item}>
      <Image source={item.image} style={styles.roundIcons} />

      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => {
    return <Item item={item} onPress={() => setSelectedId(item.id)} />;
  };

  const secondItem = ({ item, onPress }) => (
    <TouchableOpacity style={styles.secondFlatlist}>
      <Spacer space={SH(10)} />
      <Image source={item.image} style={styles.secondView} />

      <Spacer space={SH(10)} />

      <Text style={styles.commonFlatlistTextBold}>{item.title}</Text>
      <Text style={styles.commonFlatlistText}>{item.subtitle}</Text>
    </TouchableOpacity>
  );
  const thirdItem = ({ item, onPress }) => (
    <TouchableOpacity style={styles.secondFlatlist}>
      <Spacer space={SH(10)} />
      <Image source={item.image} style={styles.secondView} />

      <Spacer space={SH(10)} />

      <Text style={styles.commonFlatlistTextBold}>{item.title}</Text>
      <Text style={styles.commonFlatlistText}>{item.subtitle}</Text>
    </TouchableOpacity>
  );

  const FourthItem = ({ item, onPress }) => (
    <TouchableOpacity style={styles.item}>
      <Image source={item.image} style={styles.thirdView} />

      <Spacer space={SH(10)} />
      <Text style={styles.yiwuPriceText}>{item.price}</Text>
      <Text style={styles.yiwuItemTitleText}>{item.title}</Text>
    </TouchableOpacity>
  );

  const renderThirdItem = ({ item }) => {
    return <Item item={item} onPress={() => setProduct(item.id)} />;
  };
  const listDetail = ({ item, onPress }) => (
    <TouchableOpacity style={styles.ShoesStyle}>
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
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingHorizontal: ms(10) }}
      >
        <Spacer space={SH(10)} />

        <Search placeholder={strings.business.searchHere} />

        <Spacer space={SH(10)} />

        <View style={{ paddingHorizontal: SW(0), marginRight: ms(8) }}>
          <Spacer space={SH(18)} />

          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            extraData={selectedId}
            numColumns={4}
          />
        </View>

        <Spacer space={SH(20)} />

        <SliderBox
          images={images}
          autoplay={false}
          circleLoop={false}
          resizeMode={"stretch"}
          autoplayInterval={3000}
          // parentWidth={SW(380)}
          paginationBoxStyle={{
            position: "absolute",
            bottom: 0,
            padding: 0,
            alignItems: "center",
            alignSelf: "center",
            justifyContent: "center",
          }}
          ImageComponentStyle={{
            borderRadius: 10,
            width: "90%",
            height: 130,
            marginTop: 5,
            marginRight: ms(20),
          }}
        />

        <Spacer space={SH(30)} />

        <View style={{ paddingHorizontal: ms(10) }}>
          <View style={styles.horizontalView}>
            <View style={styles.innerViewHorizontal}>
              <View>
                <Text
                  style={{
                    fontFamily: Fonts.Bold,
                    fontSize: ms(14),
                    color: COLORS.darkGrey,
                  }}
                >
                  {strings.business.getSamples}
                </Text>
              </View>
              <TouchableOpacity
                style={{ flexDirection: "row", alignItems: "center" }}
              >
                <Text
                  style={{
                    fontFamily: Fonts.Regular,
                    fontSize: ms(12),
                    color: COLORS.darkGrey2,
                  }}
                >
                  See all
                </Text>
                <Image
                  resizeMode="contain"
                  source={forward}
                  style={{ height: vs(12) }}
                />
              </TouchableOpacity>
            </View>

            <FlatList
              data={secondData}
              renderItem={secondItem}
              keyExtractor={(item) => item.id}
              extraData={product}
              numColumns={3}
            />
          </View>
        </View>

        <Spacer space={SH(30)} />

        <View style={{ paddingHorizontal: ms(10) }}>
          <View style={styles.horizontalView}>
            <View style={styles.innerViewHorizontal}>
              <View>
                <Text
                  style={{
                    fontFamily: Fonts.Bold,
                    fontSize: ms(14),
                    color: COLORS.darkGrey,
                  }}
                >
                  {strings.business.topManufactor}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => navigate(NAVIGATION.topRankingManufacturers)}
                style={{ flexDirection: "row", alignItems: "center" }}
              >
                <Text
                  style={{
                    fontFamily: Fonts.Regular,
                    fontSize: ms(12),
                    color: COLORS.darkGrey2,
                  }}
                >
                  {strings.business.seeAll}
                </Text>
                <Image
                  resizeMode="contain"
                  source={forward}
                  style={{ height: vs(12) }}
                />
              </TouchableOpacity>
            </View>

            <FlatList
              data={thirdData}
              renderItem={thirdItem}
              keyExtractor={(item) => item.id}
              extraData={product}
              numColumns={3}
            />
          </View>
        </View>
        <Spacer space={SH(30)} />
      </ScrollView>
    </ScreenWrapper>
  );
}
