import React, { useEffect, useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { ScreenWrapper } from "@/components";
import { styles } from "./NearMe.styles";
import {
  filter,
  manufactureLogo,
  locationNear,
  shopLight,
  wareHouseLogo,
  search,
} from "@/assets";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";
import { COLORS, SH, SW } from "@/theme";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { useRef } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAP } from "@/constants/ApiKeys";
import { useDispatch, useSelector } from "react-redux";
import { NearMeSellers } from "@/actions/UserActions";
import { getUser } from "@/selectors/UserSelectors";
import Component from "./Component";

export function NearMe() {
  const dispatch = useDispatch();

  const mapViewRef = useRef(null);
  const googlePlacesRef = useRef(null);

  const sellers = useSelector(getUser);

  const store = sellers?.nearMeSellers;

  const Longitude =
    sellers?.user?.payload?.user_profiles?.current_address?.longitude;
  const Latitude =
    sellers?.user?.payload?.user_profiles?.current_address?.latitude;
  // const Longitude = -122.4324;
  // const Latitude = 37.78825;

  const [initialLongitude, setinitialLongitude] = useState(Longitude);
  const [intialLatitude, setintialLatitude] = useState(Latitude);

  const newLocation = {
    latitude: sellers?.user?.payload?.user_profiles?.current_address?.latitude,
    longitude:
      sellers?.user?.payload?.user_profiles?.current_address?.longitude,
    latitudeDelta: 0.0922 / 1,
    longitudeDelta: 0.0521 / 1,
  };

  const nearMeObject = {
    page: 1,
    limit: 10,
    lat: intialLatitude,
    long: initialLongitude,
  };

  useEffect(() => {
    dispatch(NearMeSellers(nearMeObject));
  }, [intialLatitude, initialLongitude]);

  const sellerTypeCounts = {
    retailer: 0,
    manufacturer: 0,
    null: 0,
    whole_seller: 0,
  };

  store?.forEach((profile) => {
    const { seller_type } = profile.user_profiles;
    sellerTypeCounts[seller_type] += 1;
  });

  return (
    <ScreenWrapper>
      <MapView
        ref={mapViewRef}
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        initialRegion={newLocation}
        region={{
          latitude: intialLatitude,
          longitude: initialLongitude,
          latitudeDelta: 0.0922 / 1,
          longitudeDelta: 0.0521 / 1,
        }}
      >
        {store?.map((val) => {
          return (
            <Marker
              coordinate={{
                latitude: val?.user_locations[0]?.latitude,
                longitude: val?.user_locations[0]?.longitude,
              }}
              pinColor={"red"} // any color
              title={val?.user_profiles?.username}
              // description={"description"}
            />
          );
        })}
      </MapView>

      <View
        style={{
          flex: 1,
          position: "absolute",
          marginTop: SH(20),
          width: "100%",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {/* <Search /> */}

          <View style={{ width: SW(250), top: SH(-48) }}>
            <GooglePlacesAutocomplete
              renderLeftButton={() => (
                <TouchableOpacity
                  onPress={() => googlePlacesRef.current.focus()}
                  style={styles.searchButtonView}
                >
                  <Image
                    source={search}
                    resizeMode="contain"
                    style={styles.searchIcon}
                  />
                </TouchableOpacity>
              )}
              ref={googlePlacesRef}
              fetchDetails
              autoFocus={false}
              returnKeyType={"search"}
              placeholder={"Street Address"}
              enablePoweredByContainer={false}
              query={{
                key: GOOGLE_MAP.API_KEYS,
                language: "en",
                type: "address",
                // components: "country:ca",
              }}
              textInputProps={{
                placeholderTextColor: COLORS.secondary,
                returnKeyType: "search",
              }}
              onPress={(data, details) => {
                setintialLatitude(details?.geometry?.location?.lat);
                setinitialLongitude(details?.geometry?.location?.lng);
              }}
              listViewDisplayed={true}
              styles={{
                container: {
                  padding: 20,
                  position: "absolute",
                  width: "105%",
                },
                textInputContainer: {
                  backgroundColor: COLORS.white,
                  borderRadius: 5,
                  justifyContent: "center",
                },
                description: {
                  color: COLORS.darkGrey,
                },

                borderRadius: 0,
                textInput: styles.googlePlacesTextField,
                predefinedPlacesDescription: {
                  color: COLORS.light_blue,
                },
              }}
              renderRightButton={() => (
                <TouchableOpacity
                  onPress={() => googlePlacesRef.current.clear()}
                  style={styles.searchButtonView}
                >
                  <Text
                    style={[
                      styles.searchIcon,
                      { top: SH(3), color: COLORS.secondary },
                    ]}
                  >
                    X
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>

          {/*  */}

          <TouchableOpacity style={styles.filterView}>
            <Text style={styles.filterText}>{"Filter"}</Text>
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
            {"In your"}
            <Text style={styles.nearMeTextBold}> {"5 miles"}</Text>
          </Text>
        </TouchableOpacity>

        <View style={styles.bottomAbsoluteView}>
          <Component
            source={manufactureLogo}
            style={{ color: COLORS.primary }}
            title={"Manufacturers"}
            count={sellerTypeCounts.manufacturer}
            onPress={() => navigate(NAVIGATION.nearMeOptions, { id: 0 })}
          />
          <Component
            source={wareHouseLogo}
            style={{ color: COLORS.persian_green }}
            title={"Wholesalers"}
            count={sellerTypeCounts.whole_seller}
            onPress={() => navigate(NAVIGATION.nearMeOptions, { id: 1 })}
          />
          <Component
            source={shopLight}
            style={{ color: COLORS.bright_blue }}
            title={"Retailers"}
            count={sellerTypeCounts.retailer + sellerTypeCounts.null}
            onPress={() => navigate(NAVIGATION.nearMeOptions, { id: 2 })}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
}
