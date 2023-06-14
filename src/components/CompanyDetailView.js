import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "@/screens/Products/ProductsInquiry/ProductInquiry.styles";
import { SH, SW } from "@/theme/ScalerDimensions";
import { clock, location, star, yewiCertified, yewiLogo } from "@/assets";

export function CompanyDetailView({
  title,
  profilePhoto,
  locationText,
  country,
  rating,
}) {
  return (
    <View style={styles.yewiInnerView}>
      <Image source={profilePhoto} style={styles.logoYewi} />
      <View style={{ paddingHorizontal: SW(5) }}>
        <Text style={styles.yewiHeadingText}>{title}</Text>
        <View style={styles.yewiSmallView}>
          <Image
            source={yewiCertified}
            resizeMode="contain"
            style={styles.certified}
          />
          <View style={styles.yewiDirection}>
            <Image
              source={location}
              resizeMode="contain"
              style={styles.yewiIcons}
            />
            <Text
              style={[
                styles.yewiSmallText,
                { maxWidth: SW(90), maxHeight: SH(15) },
              ]}
            >
              {" "}
              {locationText}
              <Text>{country}</Text>
            </Text>
            {rating ? (
              <>
                <Image
                  source={star}
                  resizeMode="contain"
                  style={styles.yewistar}
                />
                <Text style={styles.yewiSmallText}> {rating}</Text>
              </>
            ) : (
              <></>
            )}
            <Image
              source={clock}
              resizeMode="contain"
              style={styles.yewiClock}
            />
            <Text style={styles.yewiSmallText}> Since 2022</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
