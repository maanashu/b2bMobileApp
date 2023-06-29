import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { styles } from "@/screens/Chatting/Chatting.styles";
import { addPerson, backArrow } from "@/assets";
import { goBack } from "@/navigation/NavigationRef";

export function ChatHeader({ name, organizationName }) {
  return (
    <View style={styles.header}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity onPress={() => goBack()}>
          <Image
            source={backArrow}
            resizeMode="contain"
            style={{ height: 35, width: 35 }}
          />
        </TouchableOpacity>
        <View>
          <Text style={styles.HeaderNameText}>{name}</Text>
          <Text style={styles.headerCompanyName}>{organizationName}</Text>
        </View>
      </View>
      <TouchableOpacity>
        <Image
          source={addPerson}
          resizeMode="contain"
          style={{ height: 30, width: 30 }}
        />
      </TouchableOpacity>
    </View>
  );
}
