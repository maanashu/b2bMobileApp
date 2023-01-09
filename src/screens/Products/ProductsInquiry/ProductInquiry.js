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
import { goBack, navigate, navigationRef } from "@/navigation/NavigationRef";
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
  sendInquiry,
  location,
  forward,
  star,
  clock,
  yewiCertified,
  yewiLogo,
  checkPrice,
  check,
  simpleCheck,
  viewAll,
  plusIcon,
  Fonts,
  bagWhite,
  backArrow,
  bellGrey,
  bagGrey,
} from "@/assets";
import { ms } from "react-native-size-matters";
import {
  priceData,
  CompanyData,
  ShoesData,
  ProductRatingData,
  ProductDetailData,
} from "./FlatlistData";
import { AuthNavigator } from "@/navigation/AuthNavigator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { OnBoarding } from "@/screens/GetStarted/OnBoarding/OnBoarding";
import { login } from "@/actions/UserActions";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "@/selectors/UserSelectors";
export function ProductInquiry({ navigation }) {
  const [favourite, setFavourite] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const images = [womenShoes];
  const colorChange = () => {
    setFavourite(!favourite);
  };
  const price = priceData;
  const Data = CompanyData;
  const ProductRating = ProductRatingData;
  const ProductDetail = ProductDetailData;
  const Shoes = ShoesData;

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

  const handleSubmit = () => {
    {
      user ? navigate(NAVIGATION.startOrder) : dispatch(login("test", "test"));
    }
  };
  return (
    <ScreenWrapper>
      <View style={styles.header}>
        <View style={styles.headerInnerView}>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
            onPress={() => goBack()}
          >
            <Image
              resizeMode="contain"
              source={backArrow}
              style={{ height: 30, width: 30 }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity>
            <Image
              resizeMode="contain"
              source={bellGrey}
              style={styles.crossIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              resizeMode="contain"
              source={bagGrey}
              style={styles.crossIcon}
            />
          </TouchableOpacity>
        </View>
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
            paginationBoxStyle={styles.paginationBoxStyle}
            ImageComponentStyle={styles.imageComponentStyle}
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
            <TouchableOpacity
              style={styles.chatbutton}
              onPress={() => navigate(NAVIGATION.chatting)}
            >
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
                handleSubmit();
                // navigation.navigate("HomeScreen");
                // dispatch(login("test", "test"));
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
            {strings.productInquiry.estimated}
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
