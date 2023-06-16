import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS } from "@/theme/Colors";
import { SH, SW } from "@/theme/ScalerDimensions";
import { StyleSheet } from "react-native";
import { s } from "react-native-size-matters";
import { goBack } from "@/navigation/NavigationRef";
import { Fonts } from "@/assets";
import { ShadowStyles } from "@/theme";

export function NameHeader({ title, back, backNavi }) {
  const handleBackpress = () => {
    goBack();
    if (backNavi) {
      backNavi();
    }
  };
  return (
    <View style={styles.header}>
      <View style={styles.headerInnerView}>
        {back && (
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
            onPress={handleBackpress}
          >
            <Image
              resizeMode="contain"
              source={back}
              style={{ height: 25, width: 25 }}
            />
          </TouchableOpacity>
        )}

        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 40,
  },

  header: {
    height: SH(50),
    backgroundColor: COLORS.white,
    ...ShadowStyles.shadow,
    marginBottom: SH(1),
    paddingHorizontal: SW(20),
    justifyContent: "center",
  },
  headerInnerView: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: SW(10),
    justifyContent: "flex-start",
  },
  headerText: {
    fontFamily: Fonts.SemiBold,
    color: COLORS.black,
    fontSize: s(12),
  },
});
