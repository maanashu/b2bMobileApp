import { Image, Text, View } from "react-native";
import React from "react";
import { styles } from "./ShipTo.styles";
import { Button, ScreenWrapper, Spacer } from "@/components";
import { SH } from "@/theme/ScalerDimensions";
import { navigate } from "@/navigation/NavigationRef";
import { backArrow, flagAmerica, forward } from "@/assets";
import { strings } from "@/localization";
import { NAVIGATION } from "@/constants";
import { NameHeader } from "@/components";

export function ShipTo() {
  return (
    <ScreenWrapper>
    <View style={styles.container}>
      <NameHeader title={strings.settings.shipTo} back={backArrow} />

      <View style={styles.mainView}>
        <Spacer space={SH(30)} />

        <View style={styles.backgroundView}>
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
        </View>

        <Spacer space={SH(20)} />

        <View style={styles.nameView}>
          <View style={{ width: "48%" }}>
            <Text style={styles.headingText}>{strings.settings.state}</Text>
            <View style={styles.nameInput}>
              <Text>Florida</Text>
            </View>
          </View>

          <View style={{ width: "48%" }}>
            <Text style={styles.headingText}>{strings.settings.city}</Text>
            <View style={styles.nameInput}>
              <Text>Miami</Text>
            </View>
          </View>
        </View>

        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <Button
            title={strings.settings.addLocations}
            onPress={() => navigate(NAVIGATION.addShippingLocation)}
          />
        </View>

        <Spacer space={SH(20)} />
      </View>
    </View>
    </ScreenWrapper>
  );
}
