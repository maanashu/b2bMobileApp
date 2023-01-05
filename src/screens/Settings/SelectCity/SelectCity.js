import { View } from "react-native";
import React from "react";
import { styles } from "./SelectCity.styles";
import { Button, Spacer } from "@/components";
import { SH } from "@/theme/ScalerDimensions";
import { navigate } from "@/navigation/NavigationRef";
import { backArrow } from "@/assets";
import { strings } from "@/localization";
import { NAVIGATION } from "@/constants";
import { NameHeader } from "@/components";

import { Search } from "@/components/Search";

export function SelectCity() {
  return (
    <View style={styles.container}>
      <NameHeader title={strings.settings.city} back={backArrow} />
      <Spacer space={SH(20)} />

      <Search />

      <View style={styles.mainView}>
        <Spacer space={SH(30)} />
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <Button
            title={strings.settings.next}
            onPress={() => navigate(NAVIGATION.addShippingLocation)}
          />
        </View>
        <Spacer space={SH(20)} />
      </View>
    </View>
  );
}
