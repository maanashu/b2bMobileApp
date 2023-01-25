import React, { useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./Addresses.styles";
import {
  Apparel,
  Electronices,
  Food,
  home,
  onlineStore,
  pencil,
  Sports,
  Tobacco,
  work,
} from "@/assets";
import { Button, ScreenWrapper, Spacer } from "@/components";
import { SH, SW } from "@/theme/ScalerDimensions";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants/navigation";
import { Search } from "@/components/Search";
import { COLORS } from "@/theme";
import { HeaderCoin } from "@/screens/Profile/Wallet/Components/HeaderCoin";
import { strings } from "@/localization";
export function Addresses() {
  const Data = [
    {
      id: 1,
      place: strings.addresses.home,
      apartment: "2598",
      street: "West Street",
      city: "Holland",
      pinCode: "49424",
      region: "MI",
      placeIcon: home,
      edit: pencil,
    },
    {
      id: 2,
      place: strings.addresses.work,
      apartment: "2598",
      street: "West Street",
      city: "Holland",
      pinCode: "49424",
      region: "MI",
      placeIcon: work,
      edit: pencil,
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.container}>
      <View style={[styles.item]}>
        <View style={styles.innerView}>
          <Image
            source={item.placeIcon}
            resizeMode="contain"
            style={styles.iconStyle}
          />
          <View>
            <Text style={styles.placeText}>{item.place}</Text>
            <Text style={styles.smallText}>
              {item.apartment}
              <Text> {item.street}</Text>
            </Text>

            <Text style={styles.smallText}>
              {item.city}, <Text>{item.region} </Text>
              <Text>{item.pinCode}</Text>
            </Text>
          </View>
        </View>

        <TouchableOpacity>
          <Image
            source={item.edit}
            resizeMode="contain"
            style={styles.iconStyle}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.bottomLine}></View>
    </View>
  );

  return (
    <ScreenWrapper>
      <HeaderCoin amount={"0"} title={strings.addresses.addresses} />

      <View style={{ paddingHorizontal: SW(10), paddingVertical: SH(10) }}>
        <FlatList
          data={Data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={styles.buttonView}>
        <Button
          title={strings.buttonText.addNewAddressNo}
          onPress={() => navigate(NAVIGATION.addressDetails)}
        />
      </View>

      <Spacer space={SH(20)} />
    </ScreenWrapper>
  );
}
