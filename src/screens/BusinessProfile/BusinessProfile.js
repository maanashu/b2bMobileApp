import {
  Image,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useRef } from "react";
import { styles } from "./BusinessProfile.style";
import { Spacer } from "@/components";
import { SH } from "@/theme/ScalerDimensions";
import { COLORS } from "@/theme/Colors";
import RBSheet from "react-native-raw-bottom-sheet";
import {
  Fonts,
  forward,
  videoPic,
  certificate1,
  certificate2,
  certificate3,
  certificate4,
  videoPic1,
  videoPic4,
  videoPic3,
  videoPic2,
  shareBlack,
  crossBlack,
  yewiCertified,
  equip1,
  equip2,
  equip3,
  equip4,
  pdfImage,
  fourRating,
  fullStarRating,
  flagAmerica,
  fiveStarReview,
  purchasedItemPic,
} from "@/assets";
import { strings } from "@/localization";
import {
  ms,
  vs,
  verticalScale,
  moderateScale,
} from "react-native-size-matters";

export function BusinessProfile() {
  const ReviewSheet = useRef();
  const refRBSheet = useRef();

  const Data = [
    {
      id: 1,
      image: certificate1,
    },
    {
      id: 2,
      image: certificate2,
    },
    {
      id: 3,
      image: certificate3,
    },
    {
      id: 4,
      image: certificate4,
    },
  ];
  const Inspection = [
    { id: 1, image: pdfImage },
    { id: 2, image: pdfImage },
  ];

  const Rating = [
    { id: 1, image: fourRating, title: strings.businessProfile.suplierService },
    {
      id: 2,
      image: fullStarRating,
      title: strings.businessProfile.onTimeShipment,
    },
    { id: 3, image: fourRating, title: strings.businessProfile.productQuality },
  ];

  const Bags = [
    {
      id: 1,
      image: videoPic1,
      title: strings.businessProfile.madeWell,
      quantity: strings.businessProfile.moq,
    },
    {
      id: 2,
      image: videoPic2,
      title: strings.businessProfile.madeWell,
      quantity: strings.businessProfile.moq,
    },
    {
      id: 3,
      image: videoPic3,
      title: strings.businessProfile.madeWell,
      quantity: strings.businessProfile.moq,
    },
    {
      id: 4,
      image: videoPic4,
      title: strings.businessProfile.madeWell,
      quantity: strings.businessProfile.moq,
    },
  ];

  const ProductDetails = [
    { id: 1, title: strings.businessProfile.yearestablished, detail: "2013" },
    {
      id: 2,
      title: strings.businessProfile.businessType,
      detail: "Custom manufacturer",
    },
    {
      id: 3,
      title: strings.businessProfile.country,
      detail: "Zhejiang, China",
    },
    {
      id: 4,
      title: strings.businessProfile.mainProducts,
      detail:
        "Baseball Cap/ Snapback Cap/ Bucket Hat/ Truck Cap/ Military Cap/ Ivy Cap",
    },
    {
      id: 5,
      title: strings.businessProfile.revenue,
      detail: "US$1 Million - US$2.5 Million",
    },
    {
      id: 6,
      title: strings.businessProfile.mainMarkets,
      detail: strings.businessProfile.mainMarketDetail,
    },
    {
      id: 7,
      title: strings.businessProfile.patents,
      detail:
        "Xichenqi Shouna Zhijia, Yizhong Wusheng Xichenqi Shouna Zhijia, The utility model relates to a metal lifting bag handle fixing structure, Vacuum cleaner storage bracket",
    },
    {
      id: 8,
      title: strings.businessProfile.productCertification,
      detail: "CE",
    },
  ];

  const ProductionEquipment = [
    { id: 1, image: equip1 },
    { id: 2, image: equip2 },
    { id: 3, image: equip3 },
    { id: 4, image: equip4 },
  ];

  const ReviewDetail = [
    {
      id: 1,
      country: flagAmerica,
      name: "B********h",
      rating: fiveStarReview,
      review: strings.businessProfile.customerReview,
      purchasedProduct: strings.businessProfile.purchasedProducts,
      purchasedItemPic: purchasedItemPic,
      productName: strings.businessProfile.madeWell,
      quantity: strings.businessProfile.itemNo,
    },
    {
      id: 2,
      country: flagAmerica,
      name: "B********h",
      rating: fiveStarReview,
      review: strings.businessProfile.customerReview,
      purchasedProduct: strings.businessProfile.purchasedProducts,
      purchasedItemPic: purchasedItemPic,
      productName: strings.businessProfile.madeWell,
      quantity: strings.businessProfile.itemNo,
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.rowMainCard}>
      <Image
        source={item.image}
        style={{
          height: vs(80),
          width: ms(70),
          borderRadius: 5,
        }}
      />
    </View>
  );

  const SecondItem = ({ item }) => (
    <TouchableOpacity
      style={styles.ShoesStyle}
      // onPress={() => navigate(NAVIGATION.productInquiry)}
    >
      <Image
        source={item.image}
        resizeMode="contain"
        style={{ height: vs(130), width: ms(140) }}
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
        {item.quantity}
      </Text>
    </TouchableOpacity>
  );

  const OverviewItems = ({ item }) => (
    <View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ width: "50%" }}>
          <Text
            style={{
              fontFamily: Fonts.Regular,
              fontSize: ms(11),
              color: COLORS.darkGrey,
            }}
          >
            {item.title}
          </Text>
        </View>
        <View style={{ width: "50%" }}>
          <Text
            style={{
              alignSelf: "flex-start",
              fontFamily: Fonts.Regular,
              fontSize: ms(12),
              color: COLORS.darkGrey2,
              paddingVertical: vs(10),
            }}
          >
            {item.detail}
          </Text>
        </View>
      </View>
      <View
        style={{ borderTopWidth: 0.5, borderColor: COLORS.input_bg }}
      ></View>
    </View>
  );
  const Equipment = ({ item }) => (
    <View style={{ paddingBottom: vs(5), paddingHorizontal: ms(2) }}>
      <Image
        resizeMode="stretch"
        source={item.image}
        style={{ height: vs(145), width: ms(145), margin: 1 }}
      />
    </View>
  );
  const itemRating = ({ item }) => (
    <View
      style={{
        paddingHorizontal: ms(10),
        paddingVertical: vs(10),
      }}
    >
      <View style={styles.reviewsView}>
        <Text style={styles.ratingTextstar}>{item.title}</Text>
        <Image
          resizeMode="stretch"
          source={item.image}
          style={{ height: vs(12), width: ms(150), margin: 1 }}
        />
      </View>
      <View
        style={{ borderTopWidth: 1, borderColor: COLORS.inputBorder }}
      ></View>
    </View>
  );
  const CustomerReviews = ({ item }) => (
    <View style={styles.customerRatingView}>
      <View style={styles.innerView}>
        <Image
          resizeMode="stretch"
          source={item.country}
          style={{ height: vs(20), width: ms(20), marginRight: ms(5) }}
        />
        <Text style={styles.subHeadingText}>{item.name}</Text>
      </View>
      <Image
        resizeMode="stretch"
        source={item.rating}
        style={{ height: vs(12), width: ms(100) }}
      />
      <Spacer space={SH(10)} />

      <Text style={styles.customerReviewText}>{item.review}</Text>

      <Spacer space={SH(10)} />

      <Text style={{ ...styles.subHeadingText, marginLeft: ms(15) }}>
        {item.purchasedProduct}
      </Text>

      <Spacer space={SH(10)} />

      <View style={styles.purchasedProductView}>
        <Image
          resizeMode="stretch"
          source={item.purchasedItemPic}
          style={{ height: vs(50), width: ms(70), marginRight: ms(8) }}
        />
        <View style={{ flex: 1 }}>
          <Text style={styles.customerReviewText}>{item.productName}</Text>
          <Text style={styles.customerReviewText}>{item.quantity}</Text>
        </View>
      </View>
    </View>
  );
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.mainContainer}
      >
        <View style={styles.videoView}>
          <Spacer space={SH(20)} />

          <Image source={videoPic} style={styles.videoStyle} />
        </View>

        <Spacer space={SH(20)} />

        <View style={{ paddingHorizontal: ms(20) }}>
          <View style={styles.businessDetailView}>
            <View style={styles.businessStyle}>
              <View style={styles.businessTab}>
                <Text style={styles.businessDetailsHeading}>
                  {strings.businessProfile.businessDetails}
                </Text>
                <TouchableOpacity onPress={() => refRBSheet.current.open()}>
                  <Image
                    resizeMode="contain"
                    source={forward}
                    style={{ height: 14, width: 14 }}
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.businessText}>
                {strings.businessProfile.text}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => ReviewSheet.current.open()}
              style={styles.ratingView}
            >
              <Text style={styles.ratingText}>
                4.5/<Text style={styles.totalRatingText}>5.00</Text>
              </Text>
              <Text style={styles.companyReviewText}>
                {strings.businessProfile.companyReview}
              </Text>
            </TouchableOpacity>
          </View>

          <Spacer space={SH(20)} />

          <View style={styles.certificationTab}>
            <Spacer space={SH(10)} />

            <View style={styles.certificationHeader}>
              <Text style={styles.businessDetailsHeading}>
                {strings.businessProfile.certification}
              </Text>
              <TouchableOpacity>
                <Image
                  resizeMode="contain"
                  source={forward}
                  style={{ height: 14, width: 14 }}
                />
              </TouchableOpacity>
            </View>

            <Spacer space={SH(10)} />

            <FlatList
              data={Data}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              //   extraData={product}
              numColumns={4}
            />
          </View>

          <Spacer space={SH(20)} />

          <View style={styles.allVideosView}>
            <Text style={styles.allVideosText}>
              {strings.businessProfile.allvideos}
              <Text> (19)</Text>
            </Text>

            <TouchableOpacity>
              <Image
                resizeMode="contain"
                source={forward}
                style={{ height: 14, width: 14 }}
              />
            </TouchableOpacity>
          </View>

          <Spacer space={SH(20)} />
          <FlatList
            data={Bags}
            renderItem={SecondItem}
            keyExtractor={(item) => item.id}
            //   extraData={product}
            numColumns={2}
          />
        </View>

        <Spacer space={SH(20)} />

        <RBSheet
          ref={refRBSheet}
          animationType="fade"
          closeOnDragDown={false}
          closeOnPressMask={false}
          height={vs(600)}
          customStyles={{
            wrapper: {
              // backgroundColor: "gray",
              opacity: 1.0,
            },
            container: {
              backgroundColor: "#999999",
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
            },
            draggableIcon: {
              backgroundColor: "#000",
            },
          }}
        >
          <ScrollView
            bounces={false}
            showsVerticalScrollIndicator={false}
            style={{
              backgroundColor: "white",
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              paddingTop: verticalScale(20),
              paddingHorizontal: moderateScale(20),
            }}
          >
            <View style={styles.bottomsheetHeader}>
              <Text style={styles.headingText}>
                {strings.businessProfile.businessDetails}
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  resizeMode="stretch"
                  source={shareBlack}
                  style={{ height: vs(21), width: ms(21), marginRight: ms(15) }}
                />
                <TouchableOpacity onPress={() => refRBSheet.current.close()}>
                  <Image
                    source={crossBlack}
                    style={{
                      height: vs(25),
                      width: ms(25),
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <Image
              resizeMode="stretch"
              style={{ height: vs(20), width: vs(40) }}
              source={yewiCertified}
            />
            <Spacer space={SH(10)} />

            <View style={styles.detailTextView}>
              <View style={{ paddingHorizontal: ms(5) }}>
                <Text style={styles.subHeadingText}>
                  {strings.businessProfile.basicInformaion}
                </Text>

                <Spacer space={SH(5)} />

                <Text style={styles.detailText}>
                  {strings.businessProfile.bottomSheetText}
                </Text>
              </View>
            </View>

            <Spacer space={SH(20)} />

            <View style={styles.overviewView}>
              <Text style={styles.subHeadingText}>
                {strings.businessProfile.overview}
              </Text>

              <Spacer space={SH(5)} />

              <FlatList
                data={ProductDetails}
                renderItem={OverviewItems}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                // initialNumToRender={2}
                // maxToRenderPerBatch={2}
                // windowSize={1}
                // removeClippedSubviews={true}
              />
            </View>

            <Spacer space={SH(20)} />

            <View style={styles.overviewView}>
              <Text style={styles.subHeadingText}>
                {strings.businessProfile.productionEquipment}
              </Text>

              <Spacer space={SH(5)} />

              <FlatList
                data={ProductionEquipment}
                renderItem={Equipment}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                // initialNumToRender={2}
                // maxToRenderPerBatch={2}
                // windowSize={1}
                // removeClippedSubviews={true}
                numColumns={2}
              />
            </View>

            <Spacer space={SH(20)} />

            <View style={styles.overviewView}>
              <Text style={styles.subHeadingText}>
                {strings.businessProfile.productionCertification}
              </Text>

              <Spacer space={SH(5)} />

              <FlatList
                data={Data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                //   extraData={product}
                numColumns={4}
              />
              <Spacer space={SH(10)} />
            </View>

            <Spacer space={SH(20)} />

            <View style={styles.overviewView}>
              <Text style={styles.subHeadingText}>
                {strings.businessProfile.factoryInspection}
              </Text>

              <Spacer space={SH(5)} />

              <FlatList
                data={Inspection}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                //   extraData={product}
                numColumns={4}
              />
              <Spacer space={SH(10)} />
            </View>

            <Spacer space={SH(40)} />
          </ScrollView>
        </RBSheet>

        <Spacer space={SH(20)} />

        <RBSheet
          ref={ReviewSheet}
          animationType="fade"
          closeOnDragDown={false}
          closeOnPressMask={false}
          height={vs(600)}
          customStyles={{
            wrapper: {
              // backgroundColor: "gray",
              opacity: 1.0,
            },
            container: {
              backgroundColor: "#999999",
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
            },
            draggableIcon: {
              backgroundColor: "#000",
            },
          }}
        >
          <ScrollView
            bounces={false}
            showsVerticalScrollIndicator={false}
            style={{
              backgroundColor: "white",
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              paddingTop: verticalScale(20),
              paddingHorizontal: moderateScale(20),
            }}
          >
            <View style={styles.bottomsheetHeader}>
              <Text style={styles.headingText}>
                {strings.businessProfile.companyReview}
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  resizeMode="stretch"
                  source={shareBlack}
                  style={{ height: vs(21), width: ms(21), marginRight: ms(15) }}
                />
                <TouchableOpacity onPress={() => ReviewSheet.current.close()}>
                  <Image
                    source={crossBlack}
                    style={{
                      height: vs(25),
                      width: ms(25),
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <Spacer space={SH(40)} />

            <View style={styles.detailTextView}>
              <View style={{ paddingHorizontal: ms(5) }}>
                <Text style={styles.subHeadingText}>
                  {strings.businessProfile.overview}
                </Text>

                <Spacer space={SH(5)} />
                <View style={styles.ratingViewSheet}>
                  <Text style={styles.ratingText}>
                    4.5/<Text style={styles.totalRatingText}>5.00</Text>
                  </Text>
                  <View>
                    <Text style={styles.subHeadingText}>
                      {strings.businessProfile.verySatisfied}
                    </Text>
                    <Text
                      style={{
                        fontFamily: Fonts.Regular,
                        fontSize: ms(12),
                        color: COLORS.darkGrey2,
                      }}
                    >
                      {strings.businessProfile.reviews}
                    </Text>
                  </View>
                </View>
              </View>
              <FlatList
                data={Rating}
                renderItem={itemRating}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                // initialNumToRender={2}
                // maxToRenderPerBatch={2}
                // windowSize={1}
                // removeClippedSubviews={true}
              />
            </View>

            <Spacer space={SH(20)} />

            {/* <View style={styles.customerRatingView}>
              <View style={styles.innerView}>
                <Image
                  resizeMode="stretch"
                  source={flagAmerica}
                  style={{ height: vs(20), width: ms(20), marginRight: ms(5) }}
                />
                <Text style={styles.subHeadingText}>B********h</Text>
              </View>
              <Text style={styles.customerReviewText}>
                {strings.businessProfile.customerReview}
              </Text>
            </View> */}
            <FlatList
              data={ReviewDetail}
              renderItem={CustomerReviews}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              // initialNumToRender={2}
              // maxToRenderPerBatch={2}
              // windowSize={1}
              // removeClippedSubviews={true}
            />

            <Spacer space={SH(40)} />
          </ScrollView>
        </RBSheet>
      </ScrollView>
    </View>
  );
}
