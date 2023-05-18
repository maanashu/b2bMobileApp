import React, { useState } from "react";
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./TellAboutBusiness.styles";
import { backArrow } from "@/assets";
import {
  Button,
  NameHeader,
  ScreenWrapper,
  Spacer,
} from "@/components";
import { SH, SW } from "@/theme/ScalerDimensions";
import { strings } from "@/localization";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";
import { COLORS } from "@/theme";

export function TellAboutBusiness() {
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
  const renderItem = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity
      onPress={() => setSelectedId(item.title)}
      style={[
        styles.item,
        {
          borderColor:
            item.title === selectedId ? COLORS.primary : COLORS.light_border,
        },
      ]}
    >
      <Text
        style={[
          styles.title,
          {
            color:
              item.title === selectedId ? COLORS.darkGrey : COLORS.light_grey,
          },
        ]}
      >
        {item.title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <ScreenWrapper>
      <NameHeader
        back={backArrow}
        title={strings.searchingPreferance.personalizeBusiness}
      />
      <View style={styles.innerView}>
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
            onPress={() => navigate(NAVIGATION.addCategories)}
            // onPress={() => alert('jkfhegght')}
            title={strings.auth.next}
            style={styles.buttonStyle}
            textStyle={styles.textStyle}
          />
        </View>
        <Spacer space={ SW(20)} />
      </View>
    </ScreenWrapper>
  );
}
