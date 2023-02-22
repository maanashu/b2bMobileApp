import React, { useEffect } from "react";
import {
  Dimensions,
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
import {
  CompanyDetailView,
  CustomPagination,
  CustomPaginationWithoutText,
  ScreenWrapper,
  Spacer,
} from "@/components";
import { SH, SW } from "@/theme/ScalerDimensions";
import {
  womenShoes,
  fav,
  starBadge,
  ratingStar,
  chatNow,
  sendInquiry,
  forward,
  checkPrice,
  check,
  simpleCheck,
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
  ProductDetailData,
} from "./FlatlistData";
import { login } from "@/actions/UserActions";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "@/selectors/UserSelectors";
import { Header } from "./Components/Header";
import { getProductSelector } from "@/selectors/ProductSelectors";
import { Rating } from "react-native-ratings";
import { getProductDetail } from "@/actions/ProductActions";
import { isLoadingSelector } from "@/selectors/StatusSelectors";
import { TYPES } from "@/Types/Types";
import SwiperFlatList from "react-native-swiper-flatlist";
import { COLORS } from "@/theme";
import FastImage from "react-native-fast-image";

export function ProductInquiry(params) {
  const [routedData, setroutedData] = useState(ProductDetail?.productDetail);
  // console.log("routed item-->" + ProductDetail?.productDetail?.product_detail);

  const [favourite, setFavourite] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  const colorChange = () => {
    setFavourite(!favourite);
  };
  // console.log("routed id-->", params?.route?.params?.itemId);

  const ProductDetail = useSelector(getProductSelector);
  // const sliderImages = images.push(
  //   ProductDetail?.productDetail?.product_detail?.description
  // );

  const isLoading = useSelector((state) =>
    isLoadingSelector([TYPES.GET_PRODUCT_DETAIL], state)
  );

  useEffect(() => {
    dispatch(getProductDetail(params?.route?.params?.itemId));
    // console.log("user details", user?.user);
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <View style={styles.upperButtons}>
        <Text style={styles.primaryColorText}>{item.price}</Text>
        <Text style={styles.smallText}>{item.quantity}</Text>
      </View>
    </TouchableOpacity>
  );

  const SecondItem = ({ item }) => (
    <TouchableOpacity style={styles.itemS}>
      <View style={styles.upperButtons}>
        <Text style={styles.primaryColorText}>{item.Heading}</Text>
        <Text style={styles.smallText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
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
  const renderSliderImages = ({ item }) => {
    return (
      <>
        <View
          style={{
            width: Dimensions.get("window").width,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 15,
          }}
        >
          <FastImage
            source={{ uri: item?.image }}
            style={styles.storeImg}
            resizeMode="cover"
          />
        </View>
      </>
    );
  };

  // const handleSubmit = () => {
  //   {
  //     user ? navigate(NAVIGATION.startOrder) : dispatch(login("test", "test"));
  //   }
  // };
  const handleSubmit = () => {
    {
      user ? navigate(NAVIGATION.startOrder) : navigate(NAVIGATION.splash);
    }
  };
  return (
    <ScreenWrapper>
      <Header back={backArrow} bell={bellGrey} bag={bagGrey} />
      <Spacer space={SH(10)} />

      <ScrollView showsVerticalScrollIndicator={false} style={{}}>
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

          <Spacer space={SH(10)} />

          <SwiperFlatList
            autoplay
            autoplayDelay={3}
            autoplayLoop={true}
            showPagination
            data={[ProductDetail?.productDetail?.product_detail] ?? []}
            renderItem={renderSliderImages}
            PaginationComponent={CustomPaginationWithoutText}
            paginationActiveColor={COLORS.black}
          />
        </View>

        <Spacer space={SH(25)} />
        <View style={{ paddingHorizontal: SW(10) }}>
          <View style={{ paddingHorizontal: SW(10) }}>
            <View style={styles.belowImage}>
              <Image
                source={ratingStar}
                style={{ marginHorizontal: SW(5), height: 15, width: 15 }}
              />

              <Text>{"4.5"} </Text>
              <Text style={styles.productSubHeading}>{"(500+ ratings)"}</Text>
            </View>
            <Spacer space={SH(40)} />
            <Text style={styles.productHeading}>
              {ProductDetail?.productDetail?.product_detail?.name}
            </Text>
            <Text style={styles.productSubHeading}>
              {ProductDetail?.productDetail?.product_detail?.description}
            </Text>
            <Spacer space={SH(35)} />
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

                <View style={styles.buttonView}>
                  <TouchableOpacity style={styles.followButton}>
                    <Text style={styles.followText}>
                      {strings.productInquiry.follow}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.visitButton}>
                    <Text style={styles.visitText}>
                      {strings.productInquiry.visitStore}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <Spacer space={SH(10)} />

              <CompanyDetailView />

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
                    {"Top most popular in Running shoes"}
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
                    <Text style={styles.companyServicesText}>
                      {"Claim now"}
                    </Text>
                    <Text style={styles.companyServicesBoldText}>
                      {"Quick refunds on order uder $1000"}
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
                      {"Trade Assurance"}
                    </Text>

                    <Text style={styles.tradeText}>
                      {"Protects your orders"}
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
                  <Text style={styles.companyServicesText}>
                    {"On-time delivery"}
                  </Text>
                </View>

                <Spacer space={SH(10)} />

                <View style={{ flexDirection: "row" }}>
                  <Image source={simpleCheck} style={styles.checks} />
                  <Text style={styles.companyServicesText}>
                    {"Refund Policy"}
                  </Text>
                </View>
              </View>

              <Spacer space={SH(10)} />

              <View style={styles.borderTop}></View>
            </TouchableOpacity>

            <Spacer space={SH(25)} />

            <Text style={styles.reviewText}>{"Reviews"}</Text>

            <View style={styles.ratingView}>
              <Text style={styles.boldTextStyle}>
                {"4.5"}
                <Text style={styles.simpleText}>{"/5.0"}</Text>
              </Text>
              <View style={{ paddingHorizontal: SW(10) }}>
                <Text style={styles.reviewText}>{"Very Satisfied<"}</Text>

                <Text style={{ fontFamily: Fonts.Regular }}>
                  {"21 Reviews"}
                </Text>
              </View>
            </View>

            <Spacer space={SH(10)} />

            {/* <FlatList
            showsVerticalScrollIndicator={false}
            data={ProductRatingData}
            renderItem={StarProductRating}
            keyExtractor={(item) => item.id}
          /> */}

            <View
              style={{
                ...styles.ratingRowStyle,
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.ratingQuesText}>{"Supplier Service"}</Text>
              <View style={styles.ratingRowStyle}>
                <Rating
                  type="star"
                  ratingColor="#3498db"
                  ratingBackgroundColor="#c8c7c8"
                  ratingCount={5}
                  imageSize={17}
                  style={{ paddingHorizontal: 10 }}
                  readonly
                  startingValue={4.5}
                  // onFinishRating={(rating) => setOrderRating(rating)}
                />

                <Text style={styles.ratingAnsText}>| {"4.5 Acceptable"}</Text>
              </View>
            </View>

            <View style={styles.bottomLine}></View>

            <Spacer space={SH(20)} />

            <View
              style={{
                ...styles.ratingRowStyle,
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.ratingQuesText}>{"On-time Shipment"}</Text>
              <View style={styles.ratingRowStyle}>
                <Rating
                  type="star"
                  ratingColor="#3498db"
                  ratingBackgroundColor="#c8c7c8"
                  ratingCount={5}
                  imageSize={17}
                  style={{ paddingHorizontal: 10 }}
                  readonly
                  startingValue={5}
                  // onFinishRating={(rating) => setOrderRating(rating)}
                />

                <Text style={styles.ratingAnsText}>| {"5.0 Acceptable"}</Text>
              </View>
            </View>

            <View style={styles.bottomLine}></View>

            <Spacer space={SH(20)} />

            <View
              style={{
                ...styles.ratingRowStyle,
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.ratingQuesText}>{"Product Quality"}</Text>
              <View style={styles.ratingRowStyle}>
                <Rating
                  type="star"
                  ratingColor="#3498db"
                  ratingBackgroundColor="#c8c7c8"
                  ratingCount={5}
                  imageSize={17}
                  style={{ paddingHorizontal: 10 }}
                  readonly
                  startingValue={4.5}
                  // onFinishRating={(rating) => setOrderRating(rating)}
                />

                <Text style={styles.ratingAnsText}>| {"4.5 Acceptable"}</Text>
              </View>
            </View>

            <View style={styles.bottomLine}></View>

            <Spacer space={SH(20)} />

            <TouchableOpacity style={styles.viewAll}>
              <Text style={styles.viewAllText}>{"View all"}</Text>
            </TouchableOpacity>

            <Spacer space={SH(20)} />
            <Text style={styles.semiBoldtext}>
              {strings.productInquiry.productDetails}
            </Text>
            <Spacer space={SH(5)} />
            <Text style={styles.detailText}>
              {ProductDetail?.productDetail?.product_detail?.description}
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
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}
