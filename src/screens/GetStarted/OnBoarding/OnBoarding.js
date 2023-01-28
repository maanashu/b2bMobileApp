import React, { useState } from "react";
import {
  FlatList,
  Image,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./OnBoarding.styles";
import { mainLogo, backStripe } from "@/assets";
import { Button, Spacer } from "@/components";
import { SH, SW } from "@/theme/ScalerDimensions";
import { strings } from "@/localization";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";

export function OnBoarding() {
  const [selectedId, setSelectedId] = useState(null);

  const DATA = [
    {
      id: "1",
      title: "Online Store",
    },
    {
      id: "2",
      title: "Menufacturer/Distro",
    },
    {
      id: "3",
      title: "Retailer",
    },
    {
      id: "4",
      title: "Trading  Company",
    },
    {
      id: "5",
      title: "Other",
    },
  ];
  const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
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
  console.log("state----->", selectedId);
  return (
    <View style={styles.container}>
      <View style={styles.innerView}>
        <TouchableOpacity>
          <View style={styles.skipButton}>
            <Text style={styles.skipText}>Skip</Text>
          </View>
        </TouchableOpacity>

        <View style={{ marginTop: 10 }}>
          <Image source={mainLogo} style={styles.mainImg} />
          <Image source={backStripe} style={styles.backImage} />
        </View>

        <Spacer space={SH(300)} />

        <View style={{ paddingHorizontal: 25 }}>
          <Text style={styles.heading}>{strings.auth.tellBusiness}</Text>
          <Spacer space={SH(15)} />
          <Text style={styles.secondHeading}>{strings.auth.whichOne}</Text>
        </View>
        <View style={styles.flatlistView}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            extraData={selectedId}
            numColumns={2}
          />
          <Spacer space={SH(15)} />
        </View>
        <View style={{ paddingHorizontal: SW(20) }}>
          <Button
            onPress={() => navigate(NAVIGATION.categories)}
            // onPress={() => alert('jkfhegght')}
            title={strings.auth.next}
            style={styles.buttonStyle}
            textStyle={styles.textStyle}
          />
        </View>
        <Spacer space={Platform.OS === "ios" ? SW(20) : SW(20)} />
      </View>
    </View>
  );
}
