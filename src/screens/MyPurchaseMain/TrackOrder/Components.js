import React from "react";
import {
  Text,
  TouchableOpacity,
  FlatList,
  View,
  StyleSheet,
  Image,
} from "react-native";
import { Spacer, CompanyDetailView } from "@/components";
import { strings } from "@/localization";
import { COLORS, SH, SW } from "@/theme";
import {
  Fonts,
  dashedLineUp,
  roundBlank,
  roundCheck,
  yewiLogo,
} from "@/assets";

export function Components({ title, source, date, tintColor }) {
  return (
    <>
      <View style={{ flexDirection: "row", marginBottom: SW(5) }}>
        <View style={{ alignItems: "center" }}>
          <Image
            source={dashedLineUp}
            resizeMode="contain"
            style={{
              height: SH(45),
              width: SW(20),
              tintColor: tintColor,
            }}
          />

          <Image
            source={source}
            resizeMode="contain"
            style={styles.checkLogo}
          />
        </View>

        <View style={styles.textAlignStyle}>
          <Text style={[styles.titleText, { color: COLORS.darkGrey }]}>
            {title}
          </Text>
          <Text style={[styles.statusText]}>{date}</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  checkLogo: {
    height: SW(22),
    width: SW(22),
  },
  titleText: {
    fontFamily: Fonts.SemiBold,
  },
  statusText: {
    fontFamily: Fonts.Regular,
  },
  textAlignStyle: {
    alignItems: "flex-start",
    justifyContent: "flex-end",
    marginLeft: SW(10),
  },
});
