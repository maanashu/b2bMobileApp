import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { ScreenWrapper, Spacer } from "@/components";
import { styles } from "./FavouriteList.styles";
import { SH } from "@/theme";
import { HeaderCoin } from "../Profile/Wallet/Components/HeaderCoin";
import { strings } from "@/localization";
import { CompanyView } from "../Profile/Wallet/Manufacturers/Components/CompanyView";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";

export function FavouriteList() {
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
    </ScreenWrapper>
  );
}
