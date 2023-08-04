import React, { useEffect, useRef, useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { Spacer, ScreenWrapper, Header, NameHeader } from "@/components";
import { styles } from "@/screens/SearchPlaces/SearchPlaces.styles";
import { COLORS, SH, ShadowStyles, SW } from "@/theme";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";
import { useDispatch, useSelector } from "react-redux";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAP } from "@/constants/ApiKeys";
import { search } from "@/assets";

export function SearchPlaces(props) {
  const dispatch = useDispatch();
  const googlePlacesRef = useRef();
  return (
    <ScreenWrapper>
      <NameHeader title={"Delivery Location"} back />
      <Spacer space={SH(20)} />
      <View style={{ paddingHorizontal: SW(20) }}>
        <GooglePlacesAutocomplete
          ref={googlePlacesRef}
          placeholder="Search for city, area..."
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            const routes = props.navigation.getState()?.routes;
            const prevRoute = routes[routes.length - 2]; // -2 because -1 is the current route

            if (details && details.geometry) {
              const { lat, lng } = details.geometry.location;

              props.navigation.navigate({
                name: prevRoute.name,
                params: { deliveryLocation: { lat, lng } },
                merge: true,
              });
            }
          }}
          query={{
            key: GOOGLE_MAP.API_KEYS,
            language: "en",
            type: "address",
            // components: "country:us",
          }}
          fetchDetails
          textInputProps={{ placeholderTextColor: "#A7A7A7" }}
          styles={{
            container: {
              padding: 20,
              position: "absolute",
              width: "105%",
            },
            textInputContainer: {
              borderRadius: 5,
              justifyContent: "center",
            },
            description: {
              color: COLORS.darkGrey,
            },
            borderRadius: 0,
            textInput: {
              backgroundColor: COLORS.placeholder,
              height: 44,
              borderRadius: 5,
              paddingVertical: 5,
              paddingHorizontal: 10,
              fontSize: 15,
              flex: 1,
            },
          }}
          renderRow={(rowData) => {
            const title = rowData.structured_formatting.main_text;
            const address = rowData.structured_formatting.secondary_text;
            return (
              <View>
                <Text style={{ fontSize: 14, color: COLORS.black }}>
                  {title}
                </Text>
              </View>
            );
          }}
        />
      </View>
    </ScreenWrapper>
  );
}
