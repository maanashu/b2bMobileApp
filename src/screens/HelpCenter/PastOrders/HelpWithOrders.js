import React from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { Spacer, ScreenWrapper } from "@/components";
import { styles } from "./PastOrders.styles";
import { SH } from "@/theme";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";
import { forward } from "@/assets";
import { HeaderCoin } from "@/screens/Profile/Wallet/Components/HeaderCoin";

const helpTypeData = [
  {
    title: "I have requested a refund",
    id: 1,
    img: forward,
  },
  {
    title: "Order was overcharged",
    id: 2,
    img: forward,
  },
  {
    title: "I did not received products",
    id: 3,
    img: forward,
  },
  {
    title: "Need more help",
    id: 4,
    img: forward,
  },
];

export function HelpWithOrders() {
  const navigationHandler = (item) => {
    if (item.title === "How to get verified ?") {
      navigate(NAVIGATION.faqVerified, { data: item.title });
    } else if (item.title === "Update account information") {
      navigate(NAVIGATION.faqVerified, { data: item.title });
    } else if (item.title === "My account") {
      alert("My account");
    } else if (item.title === "Report other issue") {
      alert("Report other issue");
    } else if (item.title === "Need more help") {
      navigate(NAVIGATION.needMoreHelp, {
        data: "refund",
        name: "Need more help",
      });
    }
  };

  const renderdataItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        style={styles.flexRow}
        onPress={() => navigationHandler(item)}
      >
        <View style={styles.contentRow}>
          <Text style={styles.helpText}>{item.title}</Text>
        </View>
        <View style={styles.contentRow}>
          <Image source={forward} style={styles.mask} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScreenWrapper>
      <HeaderCoin title={"Get help with my orders"} amount={0} />

      <View style={styles.bodyContainer}>
        <Spacer space={SH(10)} />
        <FlatList
          data={helpTypeData}
          renderItem={renderdataItem}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          bounces={false}
        />
      </View>
    </ScreenWrapper>
  );
}
