import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { styles } from "./Delivery.styles";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants/navigation";
import { Button, Spacer } from "@/components";
import { SF, SH, SW } from "@/theme/ScalerDimensions";
import { COLORS } from "@/theme/Colors";
import { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { goBack } from "@/navigation/NavigationRef";
import { backArrow, jobr, dhl, ups, coins, fedEx } from "@/assets";
import { strings } from "@/localization";
export function Delivery() {
  const [selectedId, setSelectedId] = useState(null);

  const DATA = [
    {
      id: "1",
      title: " Fedex Standard shipping",
      image: fedEx,
    },
    {
      id: "2",
      title: " Ups Standard shipping",
      image: ups,
    },
    {
      id: "3",
      title: " Dhl Standard shipping ",
      image: dhl,
    },
    {
      id: "4",
      title: "Jobr Standard shipping",
      image: jobr,
    },
  ];
  const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <View>
      <Spacer space={SH(5)} />
      <View style={styles.deliveryView}>
        <TouchableOpacity style={styles.deliveryViewInnerView}>
          <View style={styles.deliveryViewInnerView}>
            <Image
              resizeMode="contain"
              source={item.image}
              style={styles.fedExIcon}
            />
            <Text style={styles.deliveryText}>{item.title}</Text>
          </View>

          <View
            style={{
              borderWidth: 1,
              height: 19,
              width: 19,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 50,
              borderColor: selectedId,
            }}
          >
            <View style={styles.innerDot}></View>
          </View>
        </TouchableOpacity>
      </View>
      <Spacer space={SH(10)} />
      <View style={{ borderBottomWidth: 1, borderColor: COLORS.grey }}></View>
    </View>
  );
  const renderItem = ({ item }) => {
    const color = item.title === selectedId ? "red" : "black";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.title)}
        textColor={{ color }}
      />
    );
  };
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={styles.header}>
        <View style={styles.headerInnerView}>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
            onPress={() => goBack()}
          >
            <Image
              resizeMode="contain"
              source={backArrow}
              style={{ height: 30, width: 30 }}
            />
            <Text>{strings.startOrder.delivery}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              resizeMode="contain"
              source={coins}
              style={styles.crossIcon}
            />
          </TouchableOpacity>
        </View>
      </View>

      <Spacer space={SH(10)} />

      <View style={styles.mainContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
        <View style={{ borderBottomWidth: 1, borderColor: COLORS.grey }}></View>
      </View>
    </View>
  );
}
