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
import { login } from "@/actions/UserActions";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "@/selectors/UserSelectors";
import { Header } from "./Components/Header";
export function ProductInquiry() {
  const [favourite, setFavourite] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const images = [womenShoes];
  const colorChange = () => {
    setFavourite(!favourite);
  };

  const Item = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <View style={styles.upperButtons}>
        <Text style={styles.primaryColorText}>{item.price}</Text>
        <Text style={styles.smallText}>{item.quantity}</Text>
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
  const SecondItem = ({ item }) => (
    <TouchableOpacity style={styles.itemS}>
      <View style={styles.upperButtons}>
        <Text style={styles.primaryColorText}>{item.Heading}</Text>
        <Text style={styles.smallText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );

  const StarProductRating = ({ item }) => (
    <View style={styles.starProduct}>
      <Image
        resizeMode="contain"
        source={item.image}
        style={styles.starRating}
      />
    </View>
  );
  const ProductDetails = ({ item }) => (
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
  const ShoesDetail = ({ item }) => (
    <TouchableOpacity style={styles.ShoesStyle}>
      <Spacer space={SH(10)} />
      <Image
        source={item.image}
        style={{ height: 135, width: SW(160), borderRadius: 5 }}
      />
      <View>
        <Text style={styles.shoesTextTitle}>
          {item.title}
          <Text style={styles.shoesSubTitle}> {item.subTitle}</Text>
        </Text>
        <Spacer space={SH(5)} />

        <Text style={styles.shoeQuantityText}>{item.quantity}</Text>
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
      <Header back={backArrow} bell={bellGrey} bag={bagGrey} />
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
                resizeMode="stretch"
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
            data={priceData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
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
              <Image
                source={sendInquiry}
                resizeMode="stretch"
                style={styles.buttonIcon}
              />

              <Text style={styles.orderText}>
                {" "}
                {strings.productInquiry.sendInquiry}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                handleSubmit();
              }}
              style={styles.buttons}
            >
              <Image
                source={plusIcon}
                resizeMode="stretch"
                style={styles.plusButtonIcon}
              />

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
            <View style={styles.aboutCompanyView}>
              <Text style={styles.aboutCompanyText}>
                {strings.productInquiry.aboutCompany}
              </Text>
            </View>
            <Spacer space={SH(10)} />

            <View style={styles.yewiInnerView}>
              <Image source={yewiLogo} style={styles.logoYewi} />
              <View style={{ paddingHorizontal: SW(10) }}>
                <Text style={styles.yewiHeadingText}>
                  Yiwu Leqi E-Commerce Firm
                </Text>
                <View style={styles.yewiSmallView}>
                  <Image
                    source={yewiCertified}
                    resizeMode="contain"
                    style={styles.certified}
                  />
                  <View style={styles.yewiDirection}>
                    <Image
                      source={location}
                      resizeMode="contain"
                      style={styles.yewiIcons}
                    />
                    <Text style={styles.yewiSmallText}> Miami, USA</Text>
                    <Image
                      source={star}
                      resizeMode="contain"
                      style={styles.yewistar}
                    />
                    <Text style={styles.yewiSmallText}> 4.5</Text>
                    <Image
                      source={clock}
                      resizeMode="contain"
                      style={styles.yewiClock}
                    />
                    <Text style={styles.yewiSmallText}> Since 2022</Text>
                  </View>
                </View>
              </View>
            </View>

            <Spacer space={SH(20)} />

            <FlatList
              data={CompanyData}
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
                resizeMode="stretch"
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
            <Text style={styles.boldTextStyle}>
              4.5
              <Text style={styles.simpleText}>/5.0</Text>
            </Text>
            <View style={{ paddingHorizontal: SW(10) }}>
              <Text style={styles.reviewText}>Very Satisfied</Text>

              <Text style={{ fontFamily: Fonts.Regular }}>21 Reviews</Text>
            </View>
          </View>

          <Spacer space={SH(10)} />

          <FlatList
            showsVerticalScrollIndicator={false}
            data={ProductRatingData}
            renderItem={StarProductRating}
            keyExtractor={(item) => item.id}
          />

          <Spacer space={SH(10)} />

          <TouchableOpacity style={styles.viewAll}>
            <Text style={styles.viewAllText}>View all</Text>
          </TouchableOpacity>

          <Spacer space={SH(20)} />
          <Text style={styles.semiBoldtext}>
            {strings.productInquiry.productDetails}
          </Text>
          <Spacer space={SH(5)} />
          <Text style={styles.detailText}>
            {strings.productInquiry.productDetailText}
          </Text>
          <Spacer space={SH(20)} />

          <FlatList
            data={ProductDetailData}
            renderItem={ProductDetails}
            keyExtractor={(item) => item.id}
          />
          <Spacer space={SH(20)} />
          <Text style={styles.recommended}>
            {strings.productInquiry.recomended}
          </Text>

          <Spacer space={SH(20)} />

          <FlatList
            data={ShoesData}
            renderItem={ShoesDetail}
            keyExtractor={(item) => item.id}
            numColumns={2}
          />
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}
