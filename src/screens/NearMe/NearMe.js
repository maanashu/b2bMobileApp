import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  FlatList,
  useWindowDimensions,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { ScreenWrapper, Spacer, TextField } from "@/components";
import { styles } from "./NearMe.styles";
import { COLORS, SH, SW } from "@/theme";
import { transactionHistory } from "@/constants/flatlistData";
import { HeaderCoin } from "../Profile/Wallet/Components/HeaderCoin";
import { strings } from "@/localization";
import { CompanyView } from "../Profile/Wallet/Manufacturers/Components/CompanyView";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";
import { filter, nearMeMap } from "@/assets";
import { Search } from "@/components/Search";

export function NearMe() {
  return (
    <ScreenWrapper>
      <View>
        <ImageBackground
          source={nearMeMap}
          resizeMode="cover"
          style={{ height: "100%" }}
        />

        <View style={styles.absoluteView}>
          <View style={styles.searchRowView}>
            <Search />
            <TouchableOpacity style={styles.filterView}>
              <Text style={styles.filterText}>Filter</Text>
              <Image
                source={filter}
                resizeMode="contain"
                style={styles.filterIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
}
