import React, { useEffect, useState } from "react";
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
import { useIsFocused } from "@react-navigation/native";
import { useRef } from "react";
export function NearMe() {
  const isFocus = useIsFocused();
  const mapViewRef = useRef(null);

  const Data = [
    { id: 1, icon: manufactureLogo, title: "Manufacturers", count: "18" },
    { id: 2, icon: wareHouseLogo, title: "Wholesalers", count: "31" },
    { id: 3, icon: shopLight, title: "Retailers", count: "109" },
  ];
  const Longitude = -122.4324;
  const Latitude = 37.78825;

  const [initialLongitude, setinitialLongitude] = useState(Longitude);
  const [intialLatitude, setintialLatitude] = useState(Latitude);

  useEffect(() => {
    console.log("lat--->" + intialLatitude + "long-->", initialLongitude);
  }, [initialLongitude, intialLatitude]);
  const [region, setRegion] = useState();

  const defaultRegion = {
    latitude: 59.9139,
    longitude: 10.7522,
    latitudeDelta: 0.0922 / 1,
    longitudeDelta: 0.0521 / 1,
  };

  const newLocation = {
    latitude: Latitude,
    longitude: Longitude,
    latitudeDelta: 0.0922 / 1,
    longitudeDelta: 0.0521 / 1,
  };

  const renderItem = ({ item, index }) => (
    <>
      <TouchableOpacity
        onPress={() => navigate(NAVIGATION.nearMeOptions)}
        activeOpacity={1}
        style={styles.bottomView}
      >
        <View style={styles.innerRowView}>
          <View style={styles.iconView}>
            <Image
              source={item.icon}
              resizeMode="contain"
              style={styles.bottomIcons}
            />
          </View>

          <Text
            style={[
              styles.quantityText,
              {
                color:
                  index == 1
                    ? COLORS.bright_blue
                    : index == 2
                    ? COLORS.persian_green
                    : COLORS.primary,
              },
            ]}
          >
            {item.count}
          </Text>
        </View>

        <Text style={styles.typeText}>{item.title}</Text>
      </TouchableOpacity>
    </>
  );

  return (
    <ScreenWrapper>
      <MapView
        ref={mapViewRef}
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: intialLatitude,
          longitude: initialLongitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        region={{
          latitude: intialLatitude,
          longitude: initialLongitude,
          latitudeDelta: 3,
          longitudeDelta: 4,
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
          onPress={() => mapViewRef.current.animateToRegion(newLocation, 1000)}
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
