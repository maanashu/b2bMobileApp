import { Text, View } from "react-native";
import React from "react";
import { styles } from "./PastCoupons.styles";
import { ScreenWrapper, Spacer } from "@/components";
import { SH } from "@/theme/ScalerDimensions";
import { COLORS } from "@/theme/Colors";

export function PastCoupons() {
  return (
    <ScreenWrapper style={{ flex: 1, backgroundColor: COLORS.white }}>
      <Spacer space={SH(10)} />

      <View style={styles.mainContainer}>
        <Text>past</Text>
      </View>
    </ScreenWrapper>
  );
}
