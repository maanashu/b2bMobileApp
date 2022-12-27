import React from "react";
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { strings } from "@/localization";
import { styles } from "./ProductInquiry.styles";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants/navigation";
import { useState } from "react";
import { ScreenWrapper, Spacer } from "@/components";
import { COLORS } from "@/theme/Colors";
import { SF, SH, SW } from "@/theme/ScalerDimensions";
import { SliderBox } from "react-native-image-slider-box";
import {
  womenShoes,
  fav,
  starBadge,
  ratingStar,
  chatNow,
  rating,
  sendInquiry,
  buyNow,
  addToBag,
  location,
  forward,
  star,
  clock,
  yewiCertified,
  yewiLogo,
  checkPrice,
  check,
  simpleCheck,
  ratingFull,
  supplierService,
  productQuality,
  viewAll,
  formalShoes,
  wBlackShoes,
  Shoes2,
  whiteShoes,
  plusIcon,
  Fonts,
  bagWhite,
} from "@/assets";
import { ms } from "react-native-size-matters";

export function ProductInquiry() {
  const [favourite, setFavourite] = useState(false);
  const images = [womenShoes];
  const colorChange = () => {
    setFavourite(!favourite);
  };
  const price = [
    {
      id: "1",
      price: "USD 5.60",
      quantity: " 5-50 Pieces ",
    },
    {
      id: "2",
      price: "USD 5.20",
      quantity: " 5-50 Pieces ",
    },
    {
      id: "3",
      price: "USD 5.10",
      quantity: " 5-50 Pieces ",
    },
  ];
  const Data = [
    {
      id: "1",
      Heading: ">1h",
      text: "Response Time",
    },
    {
      id: "2",
      Heading: "100%",
      text: "On-delivery",
    },
    {
      id: "3",
      Heading: "105",
      text: "Order delivery",
    },
  ];
  const ProductRating = [
    {
      id: "1",
      title: "Supplier Service",
      image: supplierService,
      rating: "4.5 Acceptable",
    },
    {
      id: "2",
      title: "On-time Shipment",
      image: ratingFull,
      rating: "5.0 Acceptable",
    },
    {
      id: "3",
      title: "Product Quality",
      image: productQuality,
      rating: "4.5 Acceptable",
    },
  ];
  const ProductDetail = [
    {
      id: "1",
      title: "Sleeve Length",
      productAnswer: "Long Sleeves",
    },
    {
      id: "2",
      title: "Type",
      productAnswer: "Puffer Jacket",
    },
    {
      id: "3",
      title: "Lining Fabric",
      productAnswer: "Polyester",
    },
    {
      id: "4",
      title: "Print or Pattern Type",
      productAnswer: "Solid",
    },
    {
      id: "5",
      title: "Occasion",
      productAnswer: "Casual",
    },
  ];
  const Shoes = [
    {
      id: "1",
      title: "Made well colored cozy short cardigan",
      image: formalShoes,
    },
    {
      id: "2",
      title: "Made well colored cozy short cardigan",
      image: wBlackShoes,
    },
    {
      id: "3",
      title: "Made well colored cozy short cardigan",
      image: Shoes2,
    },
    {
      id: "4",
      title: "Made well colored cozy short cardigan",
      image: whiteShoes,
    },
  ];
  const Item = ({ item, onPress }) => (
    <TouchableOpacity style={styles.item}>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text
          style={{
            color: COLORS.blue,
            fontSize: SF(16),
            fontFamily: Fonts.SemiBold,
          }}
        >
          {item.price}
        </Text>
        <Text
          style={{
            color: COLORS.darkGrey2,
            fontSize: SF(12),
            fontFamily: Fonts.Regular,
          }}
        >
          {item.quantity}
        </Text>
      </View>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
        // onPress={() => setSelectedId(item.id)}
      />
    );
  };
  const SecondItem = ({ item, onPress }) => (
    <TouchableOpacity style={styles.itemS}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: COLORS.blue,
            fontSize: SF(18),
            fontFamily: Fonts.SemiBold,
          }}
        >
          {item.Heading}
        </Text>
        <Text
          style={{
            color: COLORS.darkGrey2,
            fontSize: SF(12),
            fontFamily: Fonts.Regular,
          }}
        >
          {item.text}
        </Text>
      </View>
    </TouchableOpacity>
  );

  const StarProductRating = ({ item, onPress }) => (
    <View
      style={{
        flexDirection: "row",
        flex: 1,
        width: "100%",
      }}
    >
      <Image
        resizeMode="contain"
        source={item.image}
        style={styles.starRating}
      />
    </View>
  );
  const ProductDetails = ({ item, onPress }) => (
    <View>
      <View style={styles.productDetail}>
        <Text style={styles.questions}>{item.title} :</Text>
        <Text style={styles.productAnswer}> {item.productAnswer}</Text>
      </View>
      <Spacer space={SH(5)} />
      <View style={styles.borderTop}></View>
      <Spacer space={SH(10)} />
    </View>
  );
  const ShoesDetail = ({ item, onPress }) => (
    <TouchableOpacity style={styles.ShoesStyle}>
      <Spacer space={SH(10)} />
      <Image
        source={item.image}
        style={{ height: 135, width: SW(160), borderRadius: 5 }}
      />
      <View>
        <Text
          style={{
            paddingRight: 5,
            fontFamily: Fonts.SemiBold,
            color: COLORS.darkGrey,
          }}
        >
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <ScreenWrapper>
      <View style={styles.header}>
        <Text style={styles.headerText}>Product Inquiry</Text>
      </View>
      <Spacer space={SH(10)} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingHorizontal: ms(10) }}
      >
        <View>
          <View style={{ alignItems: "flex-end" }}>
            <TouchableOpacity onPress={colorChange}>
              <Image
                source={fav}
                style={[
                  styles.favIcon,
                  { tintColor: favourite == true ? "red" : "black" },
                ]}
              />
            </TouchableOpacity>
          </View>
          <SliderBox
            images={images}
            resizeMethod={"resize"}
            resizeMode={"cover"}
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
              borderRadius: 15,
              width: "85%",
              marginTop: 5,
            }}
          />
        </View>
        <Spacer space={SH(10)} />
        <View style={{ paddingHorizontal: SW(10) }}>
          <View style={styles.belowImage}>
            <Image
              source={ratingStar}
              style={{ marginHorizontal: SW(5), height: 15, width: 15 }}
            />
            <Text>4.5 </Text>
            <Text style={styles.productSubHeading}>(500+ ratings)</Text>
          </View>
          <Spacer space={SH(40)} />
          <Text style={styles.productHeading}>
            PUMA Men's Tazon 6 Wide Sneaker
          </Text>
          <Text style={styles.productSubHeading}>
            Women Burgundy Waterproof 3 in 1 Travel Trekking Jacket
          </Text>

          <Spacer space={SH(40)} />

          <Spacer space={SH(5)} />
          <FlatList
            data={price}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            // extraData={selectedId}
            numColumns={3}
          />
        </View>
        <Spacer space={SH(20)} />
        <View style={styles.mainView}>
          <View style={styles.queryIcons}>
            <TouchableOpacity style={styles.chatbutton}>
              <Image source={chatNow} style={styles.buttonIcon} />
              <Text style={styles.chatText}>
                {" "}
                {strings.productInquiry.chatNow}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigate(NAVIGATION.sendInquiry);
              }}
              style={styles.buttons}
            >
              <Image source={sendInquiry} style={styles.buttonIcon} />
              <Text style={styles.orderText}>
                {" "}
                {strings.productInquiry.sendInquiry}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigate(NAVIGATION.startOrder);
              }}
              style={styles.buttons}
            >
              <Image source={plusIcon} style={styles.buttonIcon} />
              <Text style={styles.orderText}>
                {" "}
                {strings.productInquiry.startOrder}
              </Text>
            </TouchableOpacity>
          </View>
          <Spacer space={SH(10)} />

          <Text style={{ fontFamily: Fonts.Regular, marginLeft: ms(5) }}>
            Estimated arrival within 7 business days with JOBR shipping
          </Text>
          <Spacer space={SH(12)} />
          <View style={styles.midView}>
            <TouchableOpacity style={styles.addToBagIcon}>
              <Image
                resizeMode="contain"
                source={bagWhite}
                style={styles.bigIcon}
              />
              <Text style={styles.smallIcons}>
                {strings.productInquiry.addToBag}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buyNowIcon}>
              <Image
                resizeMode="contain"
                source={bagWhite}
                style={styles.bigIcon}
              />
              <Text style={styles.smallIcons}>
                {strings.productInquiry.buyNow}
              </Text>
            </TouchableOpacity>
          </View>

          <Spacer space={SH(20)} />

          <View style={styles.yewiView}>
            <View style={styles.yewiInnerView}>
              <Image source={yewiLogo} style={styles.logoYewi} />
              <View style={{ paddingHorizontal: SW(10) }}>
                <Text style={styles.yewiHeadingText}>
                  Yiwu Leqi E-Commerce Firm
                </Text>
                <View style={styles.yewiSmallView}>
                  <Image source={yewiCertified} style={styles.certified} />
                  <View style={styles.yewiDirection}>
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
              data={Data}
              renderItem={SecondItem}
              keyExtractor={(item) => item.id}
              //   extraData={product}
              numColumns={3}
            />
          </View>
          <Spacer space={SH(20)} />
          <TouchableOpacity>
            <View style={styles.iconCenter}>
              <Image
                resizeMode="contain"
                source={starBadge}
                style={styles.sideIcons}
              />

              <View style={styles.starBadge}>
                <Text style={styles.companyServicesText}>
                  Top most popular in Running shoes
                </Text>

                <Image source={forward} style={styles.forward} />
              </View>
            </View>
          </TouchableOpacity>

          <Spacer space={SH(5)} />

          <View style={styles.borderTop}></View>

          <Spacer space={SH(10)} />

          <TouchableOpacity>
            <View style={styles.sideIconView}>
              <Image
                resizeMode="contain"
                source={checkPrice}
                style={styles.claimNowIcon}
              />

              <View style={styles.iconStyling}>
                <View>
                  <Text style={styles.companyServicesText}>Claim now</Text>
                  <Text style={styles.companyServicesBoldText}>
                    Quick refunds on order uder $1000
                  </Text>
                </View>

                <Image source={forward} style={styles.forward} />
              </View>
            </View>
          </TouchableOpacity>

          <Spacer space={SH(5)} />

          <View style={styles.borderTop}></View>

          <Spacer space={SH(15)} />

          <TouchableOpacity>
            <View style={styles.iconView}>
              <Image
                resizeMode="contain"
                source={check}
                style={styles.tradeIcon}
              />

              <View style={styles.trade}>
                <View>
                  <Text style={styles.companyServicesBoldText}>
                    Trade Assurance
                  </Text>

                  <Text
                    style={{
                      fontFamily: Fonts.Regular,
                      fontSize: ms(10),
                      marginLeft: ms(5),
                    }}
                  >
                    Protects your orders
                  </Text>
                </View>

                <Image source={forward} style={styles.forward} />
              </View>
            </View>

            <Spacer space={SH(15)} />

            <View>
              <View style={{ flexDirection: "row" }}>
                <Image
                  resizeMode="contain"
                  source={simpleCheck}
                  style={styles.checks}
                />
                <Text style={styles.companyServicesText}>On-time delivery</Text>
              </View>

              <Spacer space={SH(10)} />

              <View style={{ flexDirection: "row" }}>
                <Image source={simpleCheck} style={styles.checks} />
                <Text style={styles.companyServicesText}>Refund Policy</Text>
              </View>
            </View>

            <Spacer space={SH(10)} />

            <View style={styles.borderTop}></View>
          </TouchableOpacity>

          <Spacer space={SH(25)} />

          <Text style={styles.reviewText}>Reviews</Text>

          <View style={styles.ratingView}>
            <Text
              style={{
                fontFamily: Fonts.Bold,
                color: COLORS.darkGrey,
                fontSize: ms(30),
              }}
            >
              4.5
              <Text
                style={{
                  fontFamily: Fonts.Regular,
                  color: COLORS.darkGrey,
                  fontSize: ms(25),
                }}
              >
                /5.0
              </Text>
            </Text>
            <View style={{ paddingHorizontal: SW(10) }}>
              <Text style={styles.reviewText}>Very Satisfied</Text>

              <Text style={{ fontFamily: Fonts.Regular }}>21 Reviews</Text>
            </View>
          </View>

          <Spacer space={SH(10)} />

          <FlatList
            showsVerticalScrollIndicator={false}
            data={ProductRating}
            renderItem={StarProductRating}
            keyExtractor={(item) => item.id}
            //   extraData={selectedId}
            // numColumns={3}
          />

          <Spacer space={SH(10)} />

          <TouchableOpacity style={styles.viewAll}>
            <Image source={viewAll} style={styles.viewImage} />
          </TouchableOpacity>

          <Spacer space={SH(20)} />

          <Text style={styles.semiBoldtext}>
            {strings.productInquiry.productDetails}
          </Text>
          <Spacer space={SH(5)} />
          <Text style={styles.detailText}>
            A popular type of cigarette from the Marlboro brand due to its
            smooth flavour and it being mid-priced.
          </Text>
          <Spacer space={SH(20)} />

          <FlatList
            data={ProductDetail}
            renderItem={ProductDetails}
            keyExtractor={(item) => item.id}
            // extraData={product}
            // numColumns={4}
          />
          <Spacer space={SH(20)} />
          <Text style={styles.recommended}>
            {strings.productInquiry.recomended}
          </Text>

          <Spacer space={SH(20)} />

          <FlatList
            data={Shoes}
            renderItem={ShoesDetail}
            keyExtractor={(item) => item.id}
            // extraData={product}
            numColumns={2}
          />
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}
