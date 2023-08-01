import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  Button,
  NameHeaderCoins,
  ScreenWrapper,
  Spacer,
  TextField,
} from "@/components";
import { styles } from "./RateExperience.styles";
import { COLORS, SH, SW } from "@/theme";
import { strings } from "@/localization";
import { Rating } from "react-native-ratings";

export function RateExperience({ route }) {
  const [orderRating, setOrderRating] = useState("");
  const [driverRating, setDriverRating] = useState("");
  const [shopRating, setShopRating] = useState("");

  const Data = [
    {
      id: 1,
      title: strings.trackOrder.overallService,
    },
    {
      id: 2,
      title: strings.trackOrder.speed,
    },
    {
      id: 3,
      title: strings.trackOrder.overallService,
    },
    {
      id: 4,
      title: strings.trackOrder.speed,
    },
    {
      id: 5,
      title: strings.trackOrder.experienced,
    },
    {
      id: 6,
      title: strings.trackOrder.speed,
    },
    {
      id: 7,
      title: strings.trackOrder.speed,
    },
    {
      id: 8,
      title: strings.trackOrder.speed,
    },
    {
      id: 9,
      title: strings.trackOrder.speed,
    },
    {
      id: 10,
      title: strings.trackOrder.speed,
    },
    {
      id: 11,
      title: strings.trackOrder.speed,
    },
    {
      id: 12,
      title: strings.trackOrder.speed,
    },
  ];
  const renderItem = ({ item, index }) => {
    return (
      <>
        <TouchableOpacity
          style={{
            marginHorizontal: SW(5),
            paddingHorizontal: SW(5),
            paddingVertical: SH(5),
            borderRadius: SW(10),
            backgroundColor: COLORS.placeHolder,
            marginBottom: SH(15),
          }}
        >
          <Text>{item.title}</Text>
        </TouchableOpacity>
      </>
    );
  };

  return (
    <ScreenWrapper>
      <NameHeaderCoins backRequired title={strings.trackOrder.trackYourOrder} />
      <ScrollView style={styles.mainContainer}>
        <Spacer space={SH(25)} />

        <Text style={styles.headingText}>
          {strings.trackOrder.rateYourExperience}
        </Text>

        <Spacer space={SH(5)} />

        <Text style={styles.subHeadingText}>{strings.trackOrder.areYou}</Text>

        <Spacer space={SH(30)} />

        <View style={styles.ratingRowView}>
          <Text style={styles.ratingText}>{strings.trackOrder.order}</Text>

          <Rating
            type="star"
            ratingColor="#3498db"
            ratingBackgroundColor="#c8c7c8"
            ratingCount={5}
            imageSize={25}
            style={{ paddingHorizontal: 10 }}
            onFinishRating={(rating) => setOrderRating(rating)}
          />
        </View>

        <Spacer space={SH(8)} />

        <View style={styles.bottomLine}></View>

        <Spacer space={SH(8)} />

        <View style={styles.ratingRowView}>
          <Text style={styles.ratingText}>{strings.trackOrder.driver}</Text>

          <Rating
            type="star"
            ratingColor="#3498db"
            ratingBackgroundColor="#c8c7c8"
            ratingCount={5}
            imageSize={25}
            style={{ paddingHorizontal: 10 }}
            onFinishRating={(rating) => setDriverRating(rating)}
          />
        </View>

        <Spacer space={SH(8)} />

        <View style={styles.bottomLine}></View>

        <Spacer space={SH(8)} />

        <View style={styles.ratingRowView}>
          <Text style={styles.ratingText}>{strings.trackOrder.shop}</Text>

          <Rating
            type="star"
            ratingBackgroundColor="#c8c7c8"
            ratingCount={5}
            imageSize={25}
            style={{ paddingHorizontal: 10 }}
            onFinishRating={(rating) => setShopRating(rating)}
          />
        </View>

        <Spacer space={SH(8)} />

        <View style={styles.bottomLine}></View>

        <Spacer space={SH(25)} />

        <View style={{ alignItems: "center" }}>
          <FlatList
            data={Data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={2}
          />
        </View>

        <Spacer space={SH(25)} />

        <Text style={styles.semiBoldText}>
          {strings.trackOrder.writeAdditional}
        </Text>

        <Spacer space={SH(10)} />

        <TextField style={styles.inputStyle} />

        <Spacer space={SH(15)} />

        <Button
          style={styles.buttonStyle}
          title={strings.buttonText.submit}
          textStyle={{ color: COLORS.light_grey }}
        />
        <Spacer space={SH(15)} />
      </ScrollView>
    </ScreenWrapper>
  );
}
