import React from "react";
import { Text, TouchableOpacity, ScrollView, View } from "react-native";
import { Spacer, ScreenWrapper, Header } from "@/components";
import { styles } from "./Manufacturers.styles.";
import { SH } from "@/theme";
import { backArrow } from "@/assets";
import { CompanyView } from "./Components/CompanyView";

export function Manufacturers({ route }) {
  const CompanyData = [
    {
      id: "1",
      Heading: ">1h",
      text: "Response Time",
    },
    {
      id: "2",
      Heading: "100%",
      text: "On-delivery",
    },
    {
      id: "3",
      Heading: "105",
      text: "Order delivery",
    },
  ];
  const SecondItem = ({ item }) => (
    <TouchableOpacity style={styles.itemS}>
      <View style={styles.upperButtons}>
        <Text style={styles.primaryColorText}>{item.Heading}</Text>
        <Text style={styles.smallText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScreenWrapper>
      <Header back={backArrow} title={"Manufacturers"} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.mainContainer}
      >
        <Spacer space={SH(20)} />

        <CompanyView />

        <Spacer space={SH(20)} />

        <CompanyView />

        <Spacer space={SH(20)} />

        <CompanyView />
      </ScrollView>
    </ScreenWrapper>
  );
}
