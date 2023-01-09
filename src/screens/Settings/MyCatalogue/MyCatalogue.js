import { Image, Text, View } from "react-native";
import React from "react";
import { styles } from "./MyCatalogue.styles";
import { Spacer } from "@/components";
import { SH } from "@/theme/ScalerDimensions";
import { backArrow, jobr_logo_icon } from "@/assets";
import { strings } from "@/localization";
import { NameHeader } from "@/components";

export function MyCatalogue() {
  return (
    <View style={styles.container}>
      <NameHeader title={strings.profile.myCatalogs} back={backArrow} />

      <View style={styles.mainView}>
        <Spacer space={SH(30)} />
      </View>
    </View>
  );
}
