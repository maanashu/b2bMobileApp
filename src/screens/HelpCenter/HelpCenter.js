import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { NameHeaderCoins, ScreenWrapper, Spacer } from "@/components";
import { SF, SH, SW } from "@/theme/ScalerDimensions";
import {
  bag,
  Fonts,
  forward,
  infoBlack,
  mailShadow,
  menuDots,
  ProfileUser,
} from "@/assets";
import { strings } from "@/localization";
import { COLORS } from "@/theme";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";

export function HelpCenter() {
  const Details = [
    {
      id: 1,
      title: strings.helpCenter.mySupportRequest,
      selectedProduct: strings.STATIC.makeAnOffer.marlboroSilver,
      open: forward,
      icon: mailShadow,
      pending: "Pending",
    },
    {
      id: 2,
      title: strings.helpCenter.pastorders,
      selectedProduct: strings.STATIC.makeAnOffer.marlboroSilver,
      open: forward,
      icon: bag,
    },
    {
      id: 3,
      title: strings.helpCenter.myAccount,
      selectedProduct: strings.STATIC.makeAnOffer.marlboroSilver,
      open: forward,
      icon: ProfileUser,
    },
    {
      id: 4,
      title: strings.helpCenter.reportIssue,
      selectedProduct: strings.STATIC.makeAnOffer.marlboroSilver,
      open: forward,
      icon: infoBlack,
    },
    {
      id: 5,
      title: strings.helpCenter.faq,
      selectedProduct: strings.STATIC.makeAnOffer.marlboroSilver,
      open: forward,
      icon: menuDots,
    },
  ];
  const navigationHandler = (item) => {
    if (item.title === strings.helpCenter.mySupportRequest) {
      navigate(NAVIGATION.supportRequest);
    } else if (item.title === strings.helpCenter.pastorders) {
      navigate(NAVIGATION.pastOrders);
    } else if (item.title === strings.helpCenter.myAccount) {
      navigate(NAVIGATION.faq, { data: item.title });
    } else if (item.title === strings.helpCenter.reportIssue) {
      navigate(NAVIGATION.needMoreHelp, { data: "support" });
    } else if (item.title === strings.helpCenter.faq) {
      navigate(NAVIGATION.faq, { data: item.title });
    }
  };

  const renderItems = ({ item, index, pending }) => (
    <>
      <TouchableOpacity
        onPress={() => navigationHandler(item)}
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingVertical: SH(20),
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={item.icon}
            resizeMode="contain"
            style={{ height: SW(25), width: SW(25) }}
          />
          <Text
            style={{
              marginLeft: SW(7),
              fontFamily: Fonts.Regular,
              color: COLORS.darkGrey,
              fontSize: SF(15),
            }}
          >
            {item.title}
          </Text>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {index === 0 && (
            <View
              style={{
                paddingHorizontal: SW(10),
                paddingVertical: SH(4),
                backgroundColor: COLORS.light_yellow,
                borderRadius: SW(15),
              }}
            >
              <Text
                style={{
                  fontFamily: Fonts.Regular,
                  color: COLORS.darkGrey,
                  fontSize: SF(8),
                }}
              >
                {item.pending}
              </Text>
            </View>
          )}

          <Image
            source={item.open}
            resizeMode="contain"
            style={{
              height: SW(16),
              width: SW(16),
              marginTop: SH(2.5),
              marginLeft: SW(10),
            }}
          />
        </View>
      </TouchableOpacity>

      <View
        style={{ borderBottomWidth: SH(1), borderColor: COLORS.light_border }}
      ></View>
    </>
  );

  return (
    <ScreenWrapper>
      <NameHeaderCoins backRequired title={strings.profile.howCanWeHelp} />

      <View
        showsVerticalScrollIndicator={false}
        style={{ paddingHorizontal: SW(20) }}
      >
        <Spacer space={SH(20)} />

        <FlatList
          data={Details}
          renderItem={renderItems}
          keyExtractor={(item) => item.id}
        />
        <Spacer space={SH(20)} />
      </View>
    </ScreenWrapper>
  );
}
