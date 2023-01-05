import React, { useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./Categories.styles";
import { Apparel, Electronices, Food, Sports, Tobacco } from "@/assets";
import { Button, ScreenWrapper, Spacer } from "@/components";
import { SH } from "@/theme/ScalerDimensions";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants/navigation";
import { Search } from "@/components/Search";
import { COLORS } from "@/theme";
export function Categories() {
  const [selectedId, setSelectedId] = useState(null);

  const DATA = [
    {
      id: "1",
      title: " Apparel ",
      image: Apparel,
    },
    {
      id: "2",
      title: " Tobacco ",
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
  const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <Image source={item.image} style={styles.iconStyle} />
      <Text style={[styles.title, textColor]}>{item.title}</Text>
    </TouchableOpacity>
  );
  const renderItem = ({ item }) => {
    const color = item.title === selectedId ? "red" : "black";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.title)}
        textColor={{ color }}
      />
    );
  };

  return (
    <ScreenWrapper style={styles.mainContainer}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.skipButton}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>

        <Spacer space={SH(34)} />
        <Text style={styles.mainHeading}>Add your top categories</Text>

        <Spacer space={SH(15)} />
        <Text style={styles.heading}>Lets help you find what you need.</Text>

        <Spacer space={SH(40)} />
        <Search />

        <Spacer space={SH(30)} />
        <Text style={styles.smalltext}>Suggestions</Text>

        <Spacer space={SH(10)} />
        <FlatList
          showsVerticalScrollIndicator={false}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
          numColumns={3}
        />
        <Spacer space={SH(15)} />

        <Button
          title={"Next"}
          onPress={() => {
            navigate(NAVIGATION.login);
          }}
          style={styles.buttonStyle}
          textStyle={{ color: COLORS.black }}
        />
        <Spacer space={SH(15)} />
      </View>
    </ScreenWrapper>
  );
}
