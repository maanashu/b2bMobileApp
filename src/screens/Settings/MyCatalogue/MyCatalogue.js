import { Text, View } from "react-native";
import React, { useState } from "react";
import { styles } from "./MyCatalogue.styles";
import { ScreenWrapper, Spacer } from "@/components";
import { SH } from "@/theme/ScalerDimensions";
import { backArrow } from "@/assets";
import { strings } from "@/localization";
import { NameHeader } from "@/components";
import { AirbnbRating, Rating } from "react-native-ratings";

export function MyCatalogue() {
  const [rating, setRating] = useState("");
  const ratingCompleted = (rating) => {};
  return (
    <ScreenWrapper>
      <NameHeader title={strings.profile.myCatalogs} back={backArrow} />

      <View style={styles.mainView}>
        <Spacer space={SH(30)} />
      </View>
    </ScreenWrapper>
  );
}
