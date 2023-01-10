import { Text, View } from "react-native";
import React from "react";
import { styles } from "./CurrentCoupons.styles";
import { ScreenWrapper, Spacer } from "@/components";
import { SH } from "@/theme/ScalerDimensions";
import { COLORS } from "@/theme/Colors";

export function CurrentCoupons() {
  return (
    <ScreenWrapper style={{ flex: 1, backgroundColor: COLORS.white }}>
      <Spacer space={SH(10)} />

      <View style={styles.mainContainer}>
        <Text>Current</Text>
      </View>
    </ScreenWrapper>
  );
}
