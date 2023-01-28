import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { ScreenWrapper } from "@/components";
import { styles } from "./RetailersNearMe.styles";
import { SW, SH } from "@/theme";
import { nearMeData } from "@/constants/flatlistData";

export function RetailersNearMe() {
  const renderItem = ({ item, index }) => (
    <>
      <TouchableOpacity style={styles.touchableView}>
        <View style={styles.rowView}>
          <View style={styles.imgBackground}>
            <Image
              source={item.icon}
              style={styles.iconStyle}
              resizeMode="contain"
            />
          </View>
          <View style={{ marginLeft: SW(10) }}>
            <Text style={styles.boldText}>{item.title}</Text>
            <Text style={styles.regularText}>{item.distance}</Text>
          </View>
        </View>

        <View>
          <Image
            source={item.forwardIcon}
            resizeMode="contain"
            style={styles.iconStyle}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.bottomLine}></View>
    </>
  );
  return (
    <ScreenWrapper>
      <View style={{ paddingHorizontal: SW(20), flex: 1 }}>
        <View style={{ paddingBottom: SH(15), paddingTop: SH(15) }}>
          <Text style={styles.headingText}>15 Retailers found</Text>
        </View>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={nearMeData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </ScreenWrapper>
  );
}
