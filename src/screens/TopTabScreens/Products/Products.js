import React from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./Products.styles";
import { useState } from "react";
import {
  CompanyDetailView,
  CustomPagination,
  ScreenWrapper,
  Spacer,
  SubHeader,
} from "@/components";
import { COLORS } from "@/theme/Colors";
import { SF, SH, SW } from "@/theme/ScalerDimensions";
import { SliderBox } from "react-native-image-slider-box";
import { navigate, navigationRef } from "@/navigation/NavigationRef";
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
import {
  LastData,
  images,
  fourthData,
  thirdData,
  secondData,
  DATA,
} from "./Components/FlatlisitData";
import { ms, vs } from "react-native-size-matters";
import { NAVIGATION } from "@/constants";
import { Search } from "@/components/Search";
import { strings } from "@/localization";
import SwiperFlatList from "react-native-swiper-flatlist";

export function Products({ navigation }) {
  const [selectedId, setSelectedId] = useState("");

  const [product, setProduct] = useState("");

  function dynamicHeight(_index) {
    if (_index % 2 == 0) {
      return SH(275);
    } else if (_index % 2 !== 0) {
      return SH(255);
    } else {
      return SH(230);
    }
  }
  function dynamicImageHeight(_index) {
    if (_index % 2 == 0) {
      return SH(170);
    } else if (_index % 2 !== 0) {
      return SH(150);
    } else {
      return SH(100);
    }
  }
  function dynamicMarginTop(_index) {
    if (_index === 1) {
      return;
    } else if (_index % 2 !== 0) {
      return SH(-30);
    } else {
      return SH(10);
    }
  }
  function dynamicMarginBottom(_index) {
    if (_index % 2 == 0) {
      return 10;
    } else if (_index % 2 !== 0) {
      return SH(-70);
    } else {
      return SH(37);
    }
  }

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

  const thirdItem = ({ item, onPress }) => (
    <TouchableOpacity style={styles.item}>
      <Image source={item.image} style={styles.thirdView} />

      <Spacer space={SH(10)} />
      <Text style={styles.yiwuPriceText}>{item.price}</Text>
      <Text style={styles.yiwuItemTitleText}>{item.title}</Text>
    </TouchableOpacity>
  );

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
    >
      <Spacer space={SH(10)} />
      <View style={{ alignItems: "center" }}>
        <Image
          source={item.image}
          resizeMode="contain"
          style={{
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

  const renderRecentItem = ({ item, index }) => (
    <TouchableOpacity
      style={{
        width: Dimensions.get("window").width,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
      }}
    >
      <Image source={slideImage} style={styles.storeImg} resizeMode="cover" />
    </TouchableOpacity>
  );

  return (
    <ScreenWrapper>
      <Spacer space={SH(10)} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Search placeholder={strings.business.searchHere} />

        <Spacer space={SH(10)} />

        <View style={{ paddingHorizontal: SW(16) }}>
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
        <View
          style={{
            paddingTop: SH(10),
            paddingBottom: SH(30),
          }}
        >
          <SwiperFlatList
            autoplay
            autoplayDelay={3}
            autoplayLoop={true}
            showPagination
            data={images}
            renderItem={renderRecentItem}
            PaginationComponent={CustomPagination}
            paginationActiveColor={COLORS.black}
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
          <CompanyDetailView />

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
        <View
          style={{
            paddingHorizontal: ms(20),
            paddingVertical: vs(10),
            flex: 1,
          }}
        >
          <FlatList
            data={LastData}
            renderItem={listDetail}
            keyExtractor={(item) => item.id}
            numColumns={2}
          />
        </View>

        <Spacer space={SH(30)} />
      </ScrollView>
    </ScreenWrapper>
  );
}
