import {
  Image,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  FlatList,
} from "react-native";
import React from "react";
import { styles } from "./TopRankingManufacturers.style";
import { ScreenWrapper, Spacer } from "@/components";
import { SH, SW } from "@/theme/ScalerDimensions";
import { COLORS } from "@/theme/Colors";
import { navigate } from "@/navigation/NavigationRef";
import {
  sendInquiry,
  boxStar,
  yiwuJean1,
  yiwuJean3,
  yiwuJean2,
  yewiLogo,
  yewiCertified,
  location,
  star,
  clock,
  backArrow,
} from "@/assets";
import { strings } from "@/localization";
import { NAVIGATION } from "@/constants";
import { ms, vs } from "react-native-size-matters";
import { Header } from "@/components/Header";

export function TopRankingManufacturers() {
  const Data = [
    {
      id: 1,
      image: yiwuJean1,
    },
    {
      id: 2,
      image: yiwuJean2,
    },
    {
      id: 3,
      image: yiwuJean3,
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.rowMainCard}>
      <Image
        source={item.image}
        style={{
          height: vs(60),
          width: ms(90),
          borderRadius: 10,
        }}
      />
    </View>
  );
  return (
    <ScreenWrapper style={{ flex: 1, backgroundColor: COLORS.white }}>
      <Header
        title={strings.topRankingManufacturers.topManufacturers}
        back={backArrow}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.mainContainer}
      >
        <View style={styles.upperView}>
          <Image
            resizeMode="cover"
            source={boxStar}
            style={{ height: vs(72), width: ms(77) }}
          />
          <Text style={styles.topBoldText}>
            {strings.topRankingManufacturers.topRankingManufacturers}
          </Text>
        </View>

        <Spacer space={SH(20)} />

        <View style={{ paddingHorizontal: ms(20) }}>
          <View style={styles.yewiView}>
            <TouchableOpacity
              style={styles.yewiInnerView}
              onPress={() => navigate(NAVIGATION.aboutBusiness)}
            >
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
            </TouchableOpacity>

            <Spacer space={SH(20)} />

            <FlatList
              data={Data}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              //   extraData={product}
              numColumns={3}
            />

            <TouchableOpacity style={styles.sendInquiryButton}>
              <Image source={sendInquiry} style={styles.sendInquiryIcon} />
              <Text style={styles.sendInquiryText}>
                {strings.productInquiry.sendInquiry}
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
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              //   extraData={product}
              numColumns={3}
            />

            <TouchableOpacity style={styles.sendInquiryButton}>
              <Image source={sendInquiry} style={styles.sendInquiryIcon} />
              <Text style={styles.sendInquiryText}>
                {strings.productInquiry.sendInquiry}
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
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              //   extraData={product}
              numColumns={3}
            />

            <TouchableOpacity style={styles.sendInquiryButton}>
              <Image source={sendInquiry} style={styles.sendInquiryIcon} />
              <Text style={styles.sendInquiryText}>
                {strings.productInquiry.sendInquiry}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <Spacer space={SH(10)} />
    </ScreenWrapper>
  );
}
