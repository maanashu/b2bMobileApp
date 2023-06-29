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
  CustomPaginationWithoutText,
  ScreenWrapper,
  Spacer,
} from "@/components";
import { SF, SH, SW } from "@/theme/ScalerDimensions";
import {
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
  image10,
  heartFilled,
  heartBlank,
} from "@/assets";
import { ms } from "react-native-size-matters";
import { CompanyData, ShoesData } from "./FlatlistData";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "@/selectors/UserSelectors";
import { Header } from "./Components/Header";
import { getProductSelector } from "@/selectors/ProductSelectors";
import { Rating } from "react-native-ratings";
import {
  getProductDetail,
  getTrendingProducts,
} from "@/actions/ProductActions";
import { isLoadingSelector } from "@/selectors/StatusSelectors";
import { TYPES } from "@/Types/Types";
import SwiperFlatList from "react-native-swiper-flatlist";
import { COLORS } from "@/theme";
import FastImage from "react-native-fast-image";
import { renderNoData } from "@/components/FlatlistStyling";
import { Loader } from "@/components/Loader";
import {
  getMessages,
  getUserProfile,
  productFavourites,
} from "@/actions/UserActions";
import { previousScreen } from "@/actions/GlobalActions";

export function ProductInquiry(params) {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const token = user?.user?.payload?.token;
  const [matchedIds, setMatchedIds] = useState(new Set());

  const ProductDetail = useSelector(getProductSelector);
  const isLoadingDetails = useSelector((state) =>
    isLoadingSelector([TYPES.GET_PRODUCT_DETAIL], state)
  );

  const object = {
    service_type: "product",
  };
  const data = {
    app_name: "b2b",
    delivery_options: "4",
    seller_id: params?.route?.params?.seller_id,
  };

  const productData = {
    seller_id: params?.route?.params?.idSeller,
    product_id: ProductDetail?.productDetail?.product_detail?.id,
  };
  useEffect(() => {
    dispatch(getUserProfile(user?.user?.payload?.uuid));
    dispatch(getProductDetail(params?.route?.params?.itemId, data));
    dispatch(getTrendingProducts(object));
  }, []);

  const handleChat = () => {
    // console.log(
    //   "sellerProfile",
    //   JSON.stringify(ProductDetail?.productDetail?.product_detail)
    // );
    dispatch(
      getMessages({
        seller_id:
          ProductDetail?.productDetail?.product_detail?.supplies?.[0]
            ?.seller_id,
      })
    );
    navigate(NAVIGATION.chatting, {
      seller_id:
        ProductDetail?.productDetail?.product_detail?.supplies?.[0]?.seller_id,
      screenName: "productInquiry",
    });
  };

  const colorChange = () => {
    dispatch(productFavourites(productData));
    // dispatch(sellerFavourites({ seller_id: params?.route?.params?.id }));
  };

  useEffect(() => {
    const idSet = new Set(
      user?.getFavouriteProducts?.map((item) => item?.favourite_product[0].id)
    );
    setMatchedIds(idSet);
  }, [user?.getFavouriteProducts]);
  const renderItem = ({ item }) => (
    <TouchableOpacity style={[styles.item, { marginTop: SH(30) }]}>
      <View style={styles.upperButtons}>
        <Text style={styles.primaryColorText}>
          {"USD"} <Text>{token ? item.selling_price : "$$"}</Text>
        </Text>
        <Text style={styles.smallText}>
          {item.qty}
          <Text>
            {" Pieces  "}
            <Text>
              {item.min_qty} - {item.max_qty}
            </Text>
          </Text>
        </Text>
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
        <Text style={styles.questions}>{item?.attributes?.name} :</Text>

        {item?.attributes?.attribute_values.map((item, index) => (
          <Text style={styles.productAnswer}> {`${item?.name}  `}</Text>
        ))}
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
          }}
        >
          <FastImage
            source={item?.image == undefined ? image10 : { uri: item?.image }}
            style={styles.storeImg}
            resizeMode="contain"
          />
        </View>
      </>
    );
  };
  const handleSubmit = () => {
    switch (true) {
      case !!token:
        switch (user?.getUserProfile?.user_profiles?.wallet_steps) {
          case 0:
          case undefined:
          case null:
            dispatch(previousScreen(NAVIGATION.productInquiry));
            navigate(NAVIGATION.personalInformation, {
              route: "kyc",
            });
            break;
          case 1:
            dispatch(previousScreen(NAVIGATION.productInquiry));
            navigate(NAVIGATION.checkAndRequestKYC);
            break;
          case 2:
            dispatch(previousScreen(NAVIGATION.productInquiry));
            navigate(NAVIGATION.ageVerification);
            break;
          case 4:
            dispatch(previousScreen(NAVIGATION.productInquiry));
            navigate(NAVIGATION.connectBank);
            break;
          case 5:
            navigate(NAVIGATION.startOrder, {
              attributes:
                ProductDetail?.productDetail?.product_detail?.supplies,
              product_id: ProductDetail?.productDetail?.product_detail?.id,
              service_id:
                ProductDetail?.productDetail?.product_detail?.service_id,
            });
            break;
        }
        break;
      default:
        dispatch(previousScreen(NAVIGATION.productInquiry));
        navigate(NAVIGATION.splash);
        break;
    }
  };
  const SwiperPaginationHandler = () => {
    if (ProductDetail?.productDetail?.product_detail?.image === null) {
      return null;
    } else {
      return CustomPaginationWithoutText();
    }
  };
  const isMatched = matchedIds?.has(
    ProductDetail?.productDetail?.product_detail?.id
  );
  return (
    <ScreenWrapper>
      <Header back={backArrow} bell={bellGrey} bag={bagGrey} />
      <Spacer space={SH(10)} />

      <ScrollView showsVerticalScrollIndicator={false} style={{}}>
        <View>
          <View style={{ alignItems: "flex-end" }}>
            <TouchableOpacity onPress={colorChange}>
              <Image
                source={isMatched ? heartFilled : heartBlank}
                resizeMode="contain"
                style={[
                  styles.favIcon,
                  { tintColor: isMatched ? "#C70A0A" : "black" },
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
            PaginationComponent={SwiperPaginationHandler}
            paginationActiveColor={COLORS.black}
          />
        </View>

        <Spacer space={SH(25)} />
        <View style={{ paddingHorizontal: SW(10) }}>
          <View style={{ paddingHorizontal: SW(20) }}>
            <View style={styles.belowImage}>
              <Image
                source={ratingStar}
                style={{ marginHorizontal: SW(5), height: 15, width: 15 }}
              />

              <Text style={{ color: COLORS.white }}>
                {ProductDetail?.productDetail?.product_rating?.rating}
              </Text>
              <Text style={[styles.productSubHeading, { color: "white" }]}>
                {"(500+ ratings)"}
              </Text>
            </View>

            <Spacer space={SH(40)} />

            <Text style={styles.productHeading}>
              {ProductDetail?.productDetail?.product_detail?.name}
            </Text>
            <Text style={styles.productSubHeading}>
              {ProductDetail?.productDetail?.product_detail?.description}
            </Text>

            {ProductDetail?.productDetail?.product_detail?.supplies[0]
              ?.supply_prices?.length > 1 && (
              <FlatList
                data={
                  ProductDetail?.productDetail?.product_detail?.supplies[0]
                    ?.supply_prices
                }
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={3}
              />
            )}
          </View>

          <View style={styles.mainView}>
            <View style={styles.queryIcons}>
              <TouchableOpacity style={styles.chatbutton} onPress={handleChat}>
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

            <Text
              style={{
                fontFamily: Fonts.SemiBold,
                marginLeft: ms(5),
                fontSize: SF(10),
                color: "black",
              }}
            >
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

              <CompanyDetailView
                title={
                  ProductDetail?.productDetail?.product_detail?.supplies[0]
                    ?.seller_details?.user_profiles?.organization_name
                }
                profilePhoto={{
                  uri: ProductDetail?.productDetail?.product_detail?.supplies[0]
                    ?.seller_details?.user_profiles?.profile_photo,
                }}
                locationText={
                  ProductDetail?.productDetail?.product_detail?.supplies[0]
                    ?.seller_details?.user_locations[0]?.city +
                  ", " +
                  ProductDetail?.productDetail?.product_detail?.supplies[0]
                    ?.seller_details?.user_locations[0]?.country
                }
              />

              <Spacer space={SH(20)} />

              <FlatList
                data={CompanyData}
                renderItem={SecondItem}
                keyExtractor={(item) => item.id}
                //   extraData={product}
                ListEmptyComponent={renderNoData}
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
                <Text style={styles.reviewText}>{"Very Satisfied"}</Text>

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
                  startingValue={
                    ProductDetail?.productDetail?.seller_rating?.rating
                  }
                  // onFinishRating={(rating) => setOrderRating(rating)}
                />

                <Text style={styles.ratingAnsText}>| {"4.5 Acceptable"}</Text>
              </View>
            </View>

            <View style={styles.bottomLine}></View>

            <Spacer space={SH(20)} />

            {/* <View
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

            <Spacer space={SH(20)} /> */}

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
                  startingValue={
                    ProductDetail?.productDetail?.product_rating?.rating
                  }
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
              data={
                ProductDetail?.productDetail?.product_detail?.product_attribute
              }
              // ListEmptyComponent={renderNoData}
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
              ListEmptyComponent={renderNoData}
              numColumns={2}
            />
          </View>
        </View>
      </ScrollView>
      {isLoadingDetails ? <Loader /> : null}
    </ScreenWrapper>
  );
}
