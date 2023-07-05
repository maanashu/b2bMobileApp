import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { styles } from "./SelectCountry.styles";
import { Button, Spacer } from "@/components";
import { SH } from "@/theme/ScalerDimensions";
import { useState } from "react";
import { navigate } from "@/navigation/NavigationRef";
import { ms } from "react-native-size-matters";
import { backArrow, flagAmerica, flagCanada, flagMexico } from "@/assets";
import { strings } from "@/localization";
import { NAVIGATION } from "@/constants";
import { NameHeader } from "@/components";

export function SelectCountry() {
  const [country, setCountry] = useState("USA");
  return (
    <View style={styles.container}>
      <NameHeader title={strings.settings.country} back />

      <View style={styles.mainView}>
        <Spacer space={SH(30)} />

        <TouchableOpacity
          onPress={() => setCountry("USA")}
          style={{
            ...styles.backgroundView,
            backgroundColor: country == "USA" ? "#F5F6F7" : "#ffffff",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={flagAmerica}
              resizeMode="contain"
              style={styles.flagIcon}
            />
            <Text style={styles.textStyle}>{strings.settings.usa}</Text>
          </View>

          <View
            style={{
              height: ms(18),
              width: ms(18),
              backgroundColor: country == "USA" ? "#275AFF" : "#F5F6F7",
              borderWidth: 1,
              borderRadius: ms(9),
              borderColor: country == "USA" ? "#275AFF" : "grey",
            }}
          ></View>
        </TouchableOpacity>

        <Spacer space={SH(5)} />

        <TouchableOpacity
          onPress={() => setCountry("canada")}
          style={{
            ...styles.backgroundView,
            backgroundColor: country == "canada" ? "#F5F6F7" : "#ffffff",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={flagCanada}
              resizeMode="contain"
              style={styles.flagIcon}
            />
            <Text style={styles.textStyle}>{strings.settings.canada}</Text>
          </View>

          <View
            style={{
              height: ms(18),
              width: ms(18),
              backgroundColor: country == "canada" ? "#275AFF" : "#F5F6F7",
              borderWidth: 1,
              borderRadius: ms(9),
              borderColor: country == "canada" ? "#275AFF" : "grey",
            }}
          ></View>
        </TouchableOpacity>

        <Spacer space={SH(5)} />

        <TouchableOpacity
          onPress={() => setCountry("mexico")}
          style={{
            ...styles.backgroundView,
            backgroundColor: country == "mexico" ? "#F5F6F7" : "#ffffff",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={flagMexico}
              resizeMode="contain"
              style={styles.flagIcon}
            />
            <Text style={styles.textStyle}>{strings.settings.mexico}</Text>
          </View>

          <View
            style={{
              height: ms(18),
              width: ms(18),
              backgroundColor: country == "mexico" ? "#275AFF" : "#F5F6F7",
              borderWidth: 1,
              borderRadius: ms(9),
              borderColor: country == "mexico" ? "#275AFF" : "grey",
            }}
          ></View>
        </TouchableOpacity>

        <Spacer space={SH(5)} />

        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <Button
            title={strings.settings.next}
            onPress={() => navigate(NAVIGATION.addShippingLocation)}
          />
        </View>

        <Spacer space={SH(10)} />
      </View>
    </View>
  );
}
