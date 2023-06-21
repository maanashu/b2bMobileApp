import React, { useMemo } from "react";
import {
  Image,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SF } from "@/theme/ScalerDimensions";
import { SH } from "@/theme/ScalerDimensions";
import { SW } from "@/theme/ScalerDimensions";
import { COLORS } from "@/theme/Colors";
import { Fonts, cross, search } from "@/assets";
import { moderateScale } from "react-native-size-matters";

export function Search({
  style,
  imgStyle,
  backRequired,
  placeholder,
  styling,
  onSubmitEditing,
  keyword,
  setKeyword,
  icon,
  onPress,
  clearSearch,
}) {
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
      <TouchableOpacity activeOpacity={1} onPress={onPress}>
        <Image source={icon} style={styles.imageStyle} />
      </TouchableOpacity>
      <TextInput
        keyboardType="default"
        returnKeyType="search"
        onSubmitEditing={onSubmitEditing}
        style={[styles.inputStyle, { styling }]}
        placeholder={placeholder}
        placeholderTextColor={"#A7A7A7"}
        onChangeText={setKeyword}
        value={keyword}
      />
      {keyword && (
        <TouchableOpacity
          style={{
            marginRight: SW(15),
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={clearSearch}
        >
          <Image
            source={cross}
            resizeMode="contain"
            style={{ height: SH(20), width: SH(20), tintColor: "black" }}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}
