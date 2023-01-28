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
import { HeaderCoin } from "../../Profile/Wallet/Components/HeaderCoin";
import { strings } from "@/localization";
import { CompanyView } from "../../Profile/Wallet/Manufacturers/Components/CompanyView";
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

export function Processing() {
  return <ScreenWrapper></ScreenWrapper>;
}
