import React, { useEffect } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { Spacer, ScreenWrapper, Header } from "@/components";
import { styles } from "./Faq.styles";
import { SH } from "@/theme";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";
import {
  mask,
  doubledEmail,
  account,
  bag,
  issue,
  forward,
  backArrow,
} from "@/assets";
import { HeaderCoin } from "@/screens/Profile/Wallet/Components/HeaderCoin";

const helpTypeData = [
  {
    title: "Update account information",
    id: 1,
    img: forward,
  },
  {
    title: "How to get verified ?",
    id: 2,
    img: forward,
  },
  {
    title: "SMS verification not received",
    id: 3,
    img: forward,
  },
  {
    title: "Delete my account",
    id: 4,
    img: forward,
  },
];

export function Faq(props) {
  useEffect(() => {
    console.log(props.route.params.data, "data");
  });
  const navigationHandler = (item) => {
    if (item.title === "How to get verified ?") {
      navigate(NAVIGATION.faqVerified, { data: item.title });
    } else if (item.title === "Update account information") {
      navigate(NAVIGATION.faqVerified, { data: item.title });
    } else if (item.title === "My account") {
      alert("My account");
    } else if (item.title === "Report other issue") {
      alert("Report other issue");
    } else if (item.title === "FAQ") {
      alert("FAQ");
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
      <HeaderCoin title={props.route.params.data} back={backArrow} amount={0} />

      <View style={styles.bodyContainer}>
        <Spacer space={SH(10)} />
        <FlatList
          data={helpTypeData}
          renderItem={renderdataItem}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          bounces={false}
          // horizontal={true}
        />
      </View>
    </ScreenWrapper>
  );
}
