import React, { useMemo, useState } from "react";
import { Image, StyleSheet, View, TextInput } from "react-native";
import { SF } from "@/theme/ScalerDimensions";
import { SH } from "@/theme/ScalerDimensions";
import { SW } from "@/theme/ScalerDimensions";
import { COLORS } from "@/theme/Colors";
import { searchIcon, Fonts, search } from "@/assets";
import { moderateScale } from "react-native-size-matters";
import { strings } from "@/localization";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";

export function Search({ style, imgStyle, backRequired }) {
  const [code, setCode] = useState("");

  const styles = useMemo(
    () =>
      StyleSheet.create({
        rowCards: {
          borderRadius: moderateScale(5),
          flexDirection: "row",
          alignItems: "center",
          height: SH(50),
          width: "90%",
          alignSelf: "center",

          backgroundColor: COLORS.inputBorder,
        },
        imageStyle: {
          left: moderateScale(12),
          height: 16,
          width: 20,
        },
        inputStyle: {
          marginRight: SW(40),
          color: COLORS.black,
          fontSize: SF(14),
          fontFamily: Fonts.Italic,
          paddingHorizontal: SW(10),
          marginHorizontal: SW(12),
          height: SH(50),
          flex: 1,
        },
      }),
    [style, imgStyle]
  );
  return (
    <View
      style={
        backRequired
          ? [styles.rowCards, { backgroundColor: COLORS.white }]
          : [styles.rowCards]
      }
    >
      <Image source={search} style={styles.imageStyle} />
      <TextInput
        keyboardType="default"
        returnKeyType="search"
        // onSubmitEditing={() => {
        //   navigate(NAVIGATION.search, { code: code });
        //   setCode({ code: "" });
        // }}
        style={styles.inputStyle}
        placeholder={strings.search.search}
        placeholderTextColor={"#A7A7A7"}
        onChangeText={setCode}
        value={code}
      />
    </View>
  );
}
