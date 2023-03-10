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
  shopLight,
  wareHouseLogo,
} from "@/assets";
import { Search } from "@/components/Search";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";
import { COLORS, SH, SW } from "@/theme";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

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
      <MapView
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <View
        style={{
          flex: 1,
          position: "absolute",
          marginTop: SH(20),
          width: "100%",
        }}
      >
        <View style={styles.searchRowView}>
          <Search />
          <TouchableOpacity style={styles.filterView}>
            <Text style={styles.filterText}>Filter</Text>
            <Image
              source={filter}
              resizeMode="contain"
              style={styles.filterIcon}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => navigate(NAVIGATION.nearMeOptions)}
          style={[styles.middleView]}
        >
          <Image
            source={locationNear}
            resizeMode="contain"
            style={styles.locationIcon}
          />
          <Text style={styles.nearMeTextSmall}>
            {" "}
            In your<Text style={styles.nearMeTextBold}> 5 miles</Text>
          </Text>
        </TouchableOpacity>

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
