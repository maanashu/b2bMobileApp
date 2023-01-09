import React from "react";
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./Products.styles";
import { useState } from "react";
import { ScreenWrapper, Spacer } from "@/components";
import { COLORS } from "@/theme/Colors";
import { SF, SH, SW } from "@/theme/ScalerDimensions";
import { SliderBox } from "react-native-image-slider-box";
import { navigate } from "@/navigation/NavigationRef";
import {
  cream,
  drink,
  foldScreen,
  Fonts,
  forward,
  girl,
  phone,
  roundAll,
  roundApparel,
  roundAppliance,
  roundElectronices,
  roundPersonal,
  roundShoes,
  roundSports,
  roundTobbacco,
  shampoo,
  slideImage,
  yewi,
  yewiLogo,
  location,
  yewiCertified,
  star,
  clock,
} from "@/assets";
import { LastData } from "@/screens/Products/ProductsInquiry/FlatlistData";
import { ms, vs } from "react-native-size-matters";
import { NAVIGATION } from "@/constants";
import { Search } from "@/components/Search";
export function Products({ onPress }) {
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
  const thirdData = [
    {
      id: "1",
      title: " MOQ30 ",
      image: cream,
    },
    {
      id: "2",
      title: " MOQ30 ",
      image: phone,
    },
    {
      id: "3",
      title: " MOQ30 ",
      image: foldScreen,
    },
  ];
  const fourthData = [
    {
      id: "1",
      price: "$2.20",
      title: " MOQ30 ",
      image: yewi,
    },
    {
      id: "2",
      price: "$2.20",
      title: " MOQ30 ",
      image: yewi,
    },
    {
      id: "3",
      price: "$2.20",
      title: " MOQ30 ",
      image: yewi,
    },
    {
      id: "4",
      price: "$2.20",
      title: " MOQ30 ",
      image: yewi,
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
    <View style={styles.item}>
      <Image source={item.image} style={styles.secondView} />

      <Spacer space={SH(10)} />

      <Text style={styles.commonFlatlistText}>{item.title}</Text>
    </View>
  );

  const renderSecondItem = ({ item }) => {
    return <Item item={item} onPress={() => setProduct(item.id)} />;
  };
  const thirdItem = ({ item, onPress }) => (
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
      <Spacer space={SH(10)} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Search />
        <Spacer space={SH(10)} />

        <View style={{ paddingHorizontal: SW(16) }}>
          {/* <Search /> */}

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
        <View style={{ marginLeft: SW(9) }}>
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
        </View>
        <Spacer space={SH(20)} />

        <TouchableOpacity
          onPress={() => navigate(NAVIGATION.newProducts)}
          style={styles.ProductView}
        >
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
            <View>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.smallText}>See all </Text>
                <Image
                  source={forward}
                  style={{ height: SH(10), width: SW(6), marginTop: SH(5) }}
                />
              </View>
            </View>
          </View>

          <Spacer space={SH(20)} />

          <FlatList
            data={secondData}
            renderItem={secondItem}
            keyExtractor={(item) => item.id}
            extraData={product}
            numColumns={3}
          />
        </TouchableOpacity>

        <Spacer space={SH(20)} />

        <TouchableOpacity
          onPress={() => navigate(NAVIGATION.newProducts)}
          style={styles.ProductView}
        >
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
            <View>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.smallText}>See all </Text>
                <Image source={forward} style={styles.forwardIcon} />
              </View>
            </View>
          </View>

          <Spacer space={SH(15)} />

          <FlatList
            data={thirdData}
            renderItem={secondItem}
            keyExtractor={(item) => item.id}
            extraData={product}
            numColumns={3}
          />
        </TouchableOpacity>

        <Spacer space={SH(25)} />

        <View style={styles.innerView}>
          <Text
            style={{
              color: COLORS.black,
              fontSize: SF(16),
              fontFamily: Fonts.SemiBold,
            }}
          >
            Recomended Wholesalers
          </Text>
          <TouchableOpacity>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.smallText}>See all </Text>
              <Image source={forward} style={styles.forwardIcon} />
            </View>
          </TouchableOpacity>
        </View>

        <Spacer space={SH(15)} />

        <View style={styles.yewiView}>
          <View style={styles.yewiInnerView}>
            <Image source={yewiLogo} style={styles.logoYewi} />
            <View style={{ paddingHorizontal: SW(10) }}>
              <Text style={styles.yewiHeadingText}>
                Yiwu Leqi E-Commerce Firm
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image source={yewiCertified} style={styles.certified} />
                <View
                  style={{
                    paddingHorizontal: SW(5),
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Image source={location} style={styles.yewiIcons} />
                  <Text style={styles.yewiSmallText}> Miami, USA</Text>
                  <Image source={star} style={styles.yewistar} />
                  <Text style={styles.yewiSmallText}> 4.5</Text>
                  <Image source={clock} style={styles.yewiClock} />
                  <Text style={styles.yewiSmallText}> Since 2022</Text>
                </View>
              </View>
            </View>
          </View>

          <Spacer space={SH(20)} />

          <FlatList
            data={fourthData}
            renderItem={thirdItem}
            keyExtractor={(item) => item.id}
            extraData={product}
            numColumns={4}
          />
        </View>

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
