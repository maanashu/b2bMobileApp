import React, { useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./SelectedPreferance.styles";
import {
  Apparel,
  Electronices,
  Food,
  onlineStore,
  Sports,
  Tobacco,
} from "@/assets";
import { Button, NameHeaderCoins, ScreenWrapper, Spacer } from "@/components";
import { SH, SW } from "@/theme/ScalerDimensions";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants/navigation";
import { Search } from "@/components/Search";
import { COLORS } from "@/theme";
import { strings } from "@/localization";
export function SelectedPreferance() {
  const [selectedId, setSelectedId] = useState(null);

  const DATA = [
    {
      id: "1",
      title: " Apparel ",
      image: Apparel,
    },
    {
      id: "2",
      title: "Men's Clothing",
      image: Tobacco,
    },
    {
      id: "3",
      title: " Food ",
      image: Food,
    },
    {
      id: "4",
      title: " Electronices ",
      image: Electronices,
    },
    {
      id: "5",
      title: " Sports ",
      image: Sports,
    },
  ];
  const renderItem = ({ item }) => (
    <View style={[styles.item]}>
      <Image source={item.image} style={styles.iconStyle} />
      <Text style={[styles.title]}>{item.title}</Text>
    </View>
  );

  return (
    <ScreenWrapper style={styles.mainContainer}>
      <NameHeaderCoins
        title={strings.profile.searchingPreference}
        backRequired
      />

      <View style={styles.container}>
        <Text style={styles.businessText}>
          {strings.searchingPreferance.yourBusiness}
        </Text>

        <Spacer space={SH(17)} />

        <View style={styles.innerView}>
          <View style={styles.headingView}>
            <Image
              style={styles.onlineStorePic}
              resizeMode="contain"
              source={onlineStore}
            />
            <Text style={styles.headerText}>
              {strings.searchingPreferance.onlineStore}
            </Text>
          </View>

          <Spacer space={SH(10)} />
          <FlatList
            showsVerticalScrollIndicator={false}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            extraData={selectedId}
            numColumns={3}
          />
        </View>
        <Spacer space={SH(15)} />

        <View style={{ justifyContent: "flex-end", flex: 1 }}>
          <Button
            title={strings.buttonText.edit}
            onPress={() => {
              navigate(NAVIGATION.tellAboutBusiness);
            }}
            style={styles.buttonStyle}
            textStyle={{ color: COLORS.light_grey }}
          />
          <Spacer space={SH(20)} />
        </View>
      </View>
    </ScreenWrapper>
  );
}
