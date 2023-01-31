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
  console.log("Rating is: " + rating);
  const ratingCompleted = (rating) => {
    console.log("Rating is: " + rating);
  };
  return (
    <ScreenWrapper>
      <NameHeader title={strings.profile.myCatalogs} back={backArrow} />

      <View style={styles.mainView}>
        <Spacer space={SH(30)} />
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text>gjdpudpjs</Text>
          <Rating
            type="star"
            ratingColor="#3498db"
            ratingBackgroundColor="#c8c7c8"
            ratingCount={5}
            imageSize={25}
            style={{ paddingHorizontal: 10 }}
            onFinishRating={(rating) => setRating(rating)}
          />
        </View>

        {/* <AirbnbRating
          count={5}
          defaultRating={0}
          size={25}
          showRating={false}
          style={styles.starStyle}
          onFinishRating={ratingCompleted}
        /> */}
      </View>
    </ScreenWrapper>
  );
}
