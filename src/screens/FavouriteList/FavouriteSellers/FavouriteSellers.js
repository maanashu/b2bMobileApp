import { FlatList, Image, ImageBackground, Text, View } from "react-native";
import React from "react";
import { circleStar, clockTiming, deliveryParcel } from "@/assets";
import { useSelector } from "react-redux";
import { getUser } from "@/selectors/UserSelectors";
import { styles } from "./FavouriteSellers.styles";
import { ScreenWrapper, Spacer } from "@/components";
import { SH } from "@/theme";

export function FavouriteSellers() {
  const sellerList = useSelector(getUser)?.getFavouriteSellers;
  const renderItem = ({ item }) => (
    <>
      <ImageBackground
        source={{ uri: item?.seller?.user_profiles?.banner_image }}
        style={styles.imgBG}
        resizeMode="cover"
      >
        <View style={styles.bottomView}>
          <Text style={styles.name}>
            {item?.seller?.user_profiles?.username}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.rowAlign}>
              <Image
                source={circleStar}
                resizeMode="contain"
                style={styles.iconStyle}
              />
              <Text style={styles.secondaryText}>
                {item?.sellerRating?.rating}
              </Text>
            </View>
            <View style={styles.rowAlign}>
              <Image
                source={clockTiming}
                resizeMode="contain"
                style={styles.iconStyle}
              />
              <Text style={styles.secondaryText}>
                {item?.distance?.time}
                {" min"}
              </Text>
            </View>
            <View style={styles.rowAlign}>
              <Image
                source={deliveryParcel}
                resizeMode="contain"
                style={styles.iconStyle}
              />
              <Text style={styles.secondaryText}>
                {item?.deliveryFee}
                {" Delivery fee"}
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
      <Spacer space={SH(15)} />
    </>
  );
  return (
    <ScreenWrapper containerPropStyle={{ backgroundColor: "#F9F9F9" }}>
      <FlatList
        data={sellerList}
        renderItem={renderItem}
        removeClippedSubviews={true}
        keyExtractor={(item) => item.id}
      />
    </ScreenWrapper>
  );
}
