import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "@/screens/Products/ProductsInquiry/ProductInquiry.styles";
import { SW } from "@/theme/ScalerDimensions";
import { clock, location, star, yewiCertified, yewiLogo } from "@/assets";

export function CompanyDetailView() {
  return (
    <View style={styles.yewiInnerView}>
      <Image source={yewiLogo} style={styles.logoYewi} />
      <View style={{ paddingHorizontal: SW(10) }}>
        <Text style={styles.yewiHeadingText}>Yiwu Leqi E-Commerce Firm</Text>
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
            <Text style={styles.yewiSmallText}> Miami, USA</Text>
            <Image source={star} resizeMode="contain" style={styles.yewistar} />
            <Text style={styles.yewiSmallText}> 4.5</Text>
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
