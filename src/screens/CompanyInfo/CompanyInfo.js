import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { Button, ScreenWrapper, Spacer, TextField } from "@/components";
import { strings } from "@/localization";
import { styles } from "./CompanyInfo.styles";
import { SH, COLORS } from "@/theme";
import { backArrow } from "@/assets";
import { ms, vs } from "react-native-size-matters";
import { goBack } from "@/navigation/NavigationRef";

export function CompanyInfo() {
  return (
    <ScreenWrapper style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerInnerView}>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
            onPress={() => goBack()}
          >
            <Image
              resizeMode="contain"
              source={backArrow}
              style={{ height: 30, width: 30 }}
            />
            <Text style={styles.headerText}>
              {strings.userInformation.companyName}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <Spacer space={SH(1)} />

      <View style={styles.mainContainer}>
        <Spacer space={SH(25)} />

        <TextField
          style={{
            backgroundColor: COLORS.inputBorder,
            borderBottomWidth: 0,
            borderRadius: ms(8),
            height: vs(50),
          }}
        />

        <Spacer space={SH(30)} />
      </View>

      <Spacer space={SH(30)} />
    </ScreenWrapper>
  );
}
3;
