import {
  Image,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import React from "react";
import { styles } from "./TopRankingManufacturers.style";
import { Button, Spacer } from "@/components";
import { SH, SW } from "@/theme/ScalerDimensions";
import { COLORS } from "@/theme/Colors";
import { useState } from "react";
import { goBack, navigate } from "@/navigation/NavigationRef";
import { backArrow, filter, Fonts, search, boxStar } from "@/assets";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { strings } from "@/localization";
import { NAVIGATION } from "@/constants";
import { Apparel, Business, Products } from "@/screens";
import { ms, vs } from "react-native-size-matters";

export function TopRankingManufacturers() {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
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
            <Text style={styles.headerText}>
              {strings.topRankingManufacturers.topManufacturers}
            </Text>
          </TouchableOpacity>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity>
              <Image
                resizeMode="contain"
                source={search}
                style={styles.searchIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerIconView}>
              <Image
                resizeMode="contain"
                source={filter}
                style={styles.filterIcon}
              />
              <Text style={styles.filterText}>
                {strings.newProducts.filter}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
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
        <View style={{ paddingHorizontal: ms(20) }}></View>
      </ScrollView>

      <Spacer space={SH(10)} />
    </View>
  );
}
