import React from "react";
import { Text, TouchableOpacity, Image } from "react-native";
import { COLORS } from "@/theme";
import { Fonts } from "@/assets";
import { ms, vs } from "react-native-size-matters";

export function ButtonIcon({ title, icon }) {
  return (
    <TouchableOpacity
      style={{
        marginHorizontal: ms(30),
        borderWidth: 1,
        height: vs(50),
        borderRadius: ms(7),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        source={icon}
        resizeMode="contain"
        style={{ height: ms(25), width: ms(25) }}
      />
      <Text
        style={{
          fontFamily: Fonts.SemiBold,
          color: COLORS.black,
          fontSize: ms(15),
          paddingHorizontal: ms(10),
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
