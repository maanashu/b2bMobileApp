import React, { useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./AddCategories.styles";
import {
  Apparel,
  backArrow,
  cross,
  Electronices,
  Food,
  Sports,
  Tobacco,
} from "@/assets";
import { Button, NameHeader, ScreenWrapper, Spacer } from "@/components";
import { SH } from "@/theme/ScalerDimensions";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants/navigation";
import { Search } from "@/components/Search";
import { COLORS } from "@/theme";
import { strings } from "@/localization";

export function AddCategories() {
  const DATA = [
    {
      id: "1",
      title: " Apparel ",
      image: Apparel,
      selected: false,
    },
    {
      id: "2",
      title: " Tobacco ",
      image: Tobacco,
      selected: false,
    },
    {
      id: "3",
      title: " Food ",
      image: Food,
      selected: false,
    },
    {
      id: "4",
      title: " Electronices ",
      image: Electronices,
      selected: false,
    },
    {
      id: "5",
      title: " Sports ",
      image: Sports,
      selected: false,
    },
  ];
  const [select, setSelect] = useState(DATA);

  // setTimeout(() => {
  //   console.log("selected Data---->", select);
  // }, 1000);

  const SelectCategory = (item) => {
    const newItem = select.map((val) => {
      if (val.id === item.id) {
        return { ...val, selected: !val.selected };
      } else {
        return val;
      }
    });

    setSelect(newItem);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => SelectCategory(item)}
      style={[
        styles.item,
        { borderColor: item.selected ? COLORS.primary : COLORS.light_border },
      ]}
    >
      <Image source={item.image} style={styles.iconStyle} />
      <Text style={[styles.title]}>{item.title}</Text>

      <Image
        source={item.selected && cross}
        style={styles.crossIcon}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );

  return (
    <ScreenWrapper>
      <NameHeader
        title={strings.searchingPreferance.personalizeBusiness}
        back={backArrow}
      />

      <Spacer space={SH(20)} />

      <View style={styles.container}>
        <Text style={styles.mainHeading}>{strings.categories.addtopCat}</Text>

        <Spacer space={SH(15)} />
        <Text style={styles.heading}>{strings.categories.letsHelp}</Text>

        <Spacer space={SH(40)} />
        <Search placeholder={strings.categories.seatchHere} />

        <Spacer space={SH(30)} />
        <Text style={styles.smalltext}>{strings.categories.suggestion}</Text>

        <Spacer space={SH(10)} />

        <FlatList
          showsVerticalScrollIndicator={false}
          data={select}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={3}
        />
        <Spacer space={SH(15)} />

        <Button
          title={strings.buttonText.save}
          onPress={() => {
            navigate(NAVIGATION.selectedPreferance);
          }}
          style={styles.buttonStyle}
          textStyle={{ color: COLORS.white }}
        />
        <Spacer space={SH(20)} />
      </View>
    </ScreenWrapper>
  );
}
