import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  useWindowDimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./Messages.styles";
import { ScreenWrapper, Spacer, SubHeader } from "@/components";
import { SF, SH, SW } from "@/theme/ScalerDimensions";
import { COLORS } from "@/theme/Colors";
import { strings } from "@/localization";
import { Fonts, pendingNotiBell, phoneBook } from "@/assets";
import { Search } from "@/components/Search";
import { MessageHeader } from "@/constants/flatlistData";

export function Messages() {
  const [selected, setselected] = useState(1);

  const renderTopItems = ({ item }) => (
    <>
      <View
        style={{
          alignItems: "center",
          width: "23%",
        }}
      >
        <TouchableOpacity
          onPress={() => setselected(item.id)}
          style={{
            backgroundColor:
              item.id === selected ? COLORS.primary : COLORS.termsBorder,
            borderRadius: SW(20),
            alignItems: "center",
            justifyContent: "center",
            width: SW(40),
            height: SW(40),
          }}
        >
          <Image
            source={item.image}
            resizeMode="contain"
            style={{ height: SW(25), width: SW(25) }}
          />
        </TouchableOpacity>
        <Text>{item.title}</Text>
      </View>
    </>
  );

  return (
    <ScreenWrapper style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>Messages</Text>

        <View style={styles.rowView}>
          <TouchableOpacity>
            <Image
              source={pendingNotiBell}
              resizeMode="contain"
              style={styles.headerIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={phoneBook}
              resizeMode="contain"
              style={styles.headerIcon}
            />
          </TouchableOpacity>
        </View>
      </View>

      <Spacer space={SH(20)} />

      <Search placeholder={"Search here"} />

      <Spacer space={SH(30)} />

      <View style={styles.container}>
        <View style={{ alignItems: "center" }}>
          <FlatList
            columnWrapperStyle={{ justifyContent: "space-between" }}
            data={MessageHeader}
            renderItem={renderTopItems}
            keyExtractor={(item) => item.id}
            numColumns={4}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
}
