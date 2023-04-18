import React from "react";
import { FlatList, ScrollView, TouchableOpacity, View } from "react-native";
import { ScreenWrapper, Spacer } from "@/components";
import { styles } from "./FavouriteList.styles";
import { COLORS, SH } from "@/theme";
import { HeaderCoin } from "../Profile/Wallet/Components/HeaderCoin";
import { strings } from "@/localization";
import { CompanyView } from "../Profile/Wallet/Manufacturers/Components/CompanyView";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";
import { SwiperButton } from "@/components/SwiperButton";

export function FavouriteList() {
  const coinPlans = [
    {
      name: "JBR 10",
      sub: "USD $10",
      key: 1,
    },
    {
      name: "JBR 25",
      sub: "USD $25",
      key: 2,
    },
    {
      name: "JBR 50",
      sub: "USD $50",
      key: 3,
    },
    {
      name: "JBR 100",
      sub: "USD $100",
      key: 4,
    },
  ];
  const renderItem = ({ item }) => <SwiperButton item={item} />;

  return (
    <ScreenWrapper>
      <HeaderCoin amount={"0"} title={strings.profile.favouriteList} />

      <Spacer space={SH(15)} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.mainContainer}
      >
        <Spacer space={SH(20)} />

        <TouchableOpacity onPress={() => navigate(NAVIGATION.aboutBusiness)}>
          <CompanyView about={"About Company"} />
        </TouchableOpacity>

        <Spacer space={SH(20)} />
      </ScrollView>

      {/* <View>
        <FlatList
          windowSize={1}
          data={coinPlans}
          renderItem={renderItem}
          removeClippedSubviews={true}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View> */}
    </ScreenWrapper>
  );
}
