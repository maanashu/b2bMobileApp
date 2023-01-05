import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { styles } from "./AddShippingLocation.styles";
import { Button, Spacer } from "@/components";
import { SH } from "@/theme/ScalerDimensions";
import { navigate } from "@/navigation/NavigationRef";
import { backArrow, flagAmerica, forward } from "@/assets";
import { strings } from "@/localization";
import { NAVIGATION } from "@/constants";
import { NameHeader } from "@/components";

export function AddShippingLocation() {
  return (
    <View style={styles.container}>
      <NameHeader
        title={strings.settings.addShippingLocation}
        back={backArrow}
      />

      <View style={styles.mainView}>
        <Spacer space={SH(30)} />

        <TouchableOpacity
          onPress={() => navigate(NAVIGATION.selectCountry)}
          style={styles.backgroundView}
        >
          <View style={styles.innerView}>
            <Image
              resizeMode="contain"
              style={styles.flagStyle}
              source={flagAmerica}
            />
            <Text style={styles.inputText}>{strings.settings.usa}</Text>
          </View>
          <Image
            source={forward}
            resizeMode="contain"
            style={styles.forwardIcon}
          />
        </TouchableOpacity>

        <Spacer space={SH(20)} />

        <View style={styles.nameView}>
          <TouchableOpacity
            onPress={() => navigate(NAVIGATION.selectState)}
            style={{ width: "48%" }}
          >
            <Text style={styles.headingText}>{strings.settings.state}</Text>
            <View style={styles.nameInput}>
              <Text>Florida</Text>
              <Image
                source={forward}
                resizeMode="contain"
                style={styles.forwardIcon}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigate(NAVIGATION.selectCity)}
            style={{ width: "48%" }}
          >
            <Text style={styles.headingText}>{strings.settings.city}</Text>
            <View style={styles.nameInput}>
              <Text>Miami</Text>
              <Image
                source={forward}
                resizeMode="contain"
                style={styles.forwardIcon}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <Button title={strings.settings.add} />
        </View>

        <Spacer space={SH(20)} />
      </View>
    </View>
  );
}
