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
import { NameHeader, ScreenWrapper, Spacer, TextField } from "@/components";
import { styles } from "./MyPurchaseMain.styles";
import { COLORS, SF, SH, ShadowStyles, SW } from "@/theme";
import { transactionHistory } from "@/constants/flatlistData";
import { strings } from "@/localization";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";
import {
  backArrow,
  filter,
  Fonts,
  forward,
  loactionPinFilled,
  location,
  manufactureLogo,
  nearMeMap,
  shopLight,
  wareHouseLogo,
} from "@/assets";
import { useFocusEffect } from "@react-navigation/native";
export function Cancelled() {
  useFocusEffect(() => {
    console.log("Cancelled screen is focused!");
  });
  return (
    <ScreenWrapper>
      <Spacer space={SH(20)} />
    </ScreenWrapper>
  );
}
