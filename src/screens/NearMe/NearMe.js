import React from "react";
import {
  View,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { ScreenWrapper } from "@/components";
import { styles } from "./NearMe.styles";
import {
  filter,
  manufactureLogo,
  nearMeMap,
  locationNear,
  pinMap,
  shopLight,
  wareHouseLogo,
} from "@/assets";
import { Search } from "@/components/Search";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";
import { COLORS, SH, SW } from "@/theme";

export function NearMe() {
  const Data = [
    { id: 1, icon: manufactureLogo, title: "Manufacturers", count: "18" },
    { id: 2, icon: wareHouseLogo, title: "Wholesalers", count: "31" },
    { id: 3, icon: shopLight, title: "Retailers", count: "109" },
  ];

  const renderItem = ({ item }) => (
    <>
      <View style={styles.bottomView}>
        <View style={styles.innerRowView}>
          <View style={styles.iconView}>
            <Image
              source={item.icon}
              resizeMode="contain"
              style={styles.bottomIcons}
            />
          </View>

          <Text style={styles.quantityText}>{item.count}</Text>
        </View>

        <Text style={styles.typeText}>{item.title}</Text>
      </View>
    </>
  );

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
            <TouchableOpacity
              onPress={() => navigate(NAVIGATION.nearMeOptions)}
              style={styles.filterView}
            >
              <Text style={styles.filterText}>Filter</Text>
              <Image
                source={filter}
                resizeMode="contain"
                style={styles.filterIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.middleView]}>
          <Image
            source={locationNear}
            resizeMode="contain"
            style={styles.locationIcon}
          />
          <Text style={styles.nearMeTextSmall}>
            {" "}
            In your<Text style={styles.nearMeTextBold}> 5 miles</Text>
          </Text>
        </View>

        <View style={styles.bottomAbsoluteView}>
          <FlatList
            data={Data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={3}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
}
