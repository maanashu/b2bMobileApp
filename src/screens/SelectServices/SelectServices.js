import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { NameHeader, ScreenWrapper, Spacer } from "@/components";
import { COLORS } from "@/theme/Colors";
import { useDispatch } from "react-redux";
import { styles } from "./SelectServices.styles";
import { SH, SW } from "@/theme";
import { Shoes2, checkBox } from "@/assets";
import Icon from "react-native-vector-icons/FontAwesome5";
import { scale } from "react-native-size-matters";

export function SelectServices() {
  const dispatch = useDispatch();
  const [selectedService, setSelectedService] = useState("");
  const selectServices = () => {
    setSelectedService(!selectedService);
  };

  const Data = [
    { id: 1, price: "5.50", title: "Service Here", image: Shoes2 },
    { id: 2, price: "5.50", title: "Service There", image: Shoes2 },
    { id: 3, price: "10.50", title: "Service Here", image: Shoes2 },
  ];
  const renderServices = ({ item, index }) => {
    return (
      <>
        <View style={styles.rowJustifiedView}>
          <View style={styles.rowView}>
            <TouchableOpacity onPress={selectServices}>
              <Icon
                name={selectedService ? "check-square" : "square"}
                color={COLORS.primary}
                size={scale(15)}
                style={styles.checkBoxStyle}
              />
            </TouchableOpacity>
            <Spacer horizontal space={SW(10)} />
            <View>
              <Text style={styles.serviceNameText}>{item.title}</Text>

              <Text style={styles.servicePriceText}>USD ${item.price}</Text>
            </View>
          </View>

          <Image
            source={item.image}
            resizeMode="contain"
            style={styles.serviceImageStyle}
          />
        </View>
        <Spacer space={SH(10)} />
      </>
    );
  };
  return (
    <ScreenWrapper style={{ flex: 1, backgroundColor: COLORS.white }}>
      <NameHeader title={"Services"} back />
      <View style={styles.container}>
        <View style={styles.rowAlignView}>
          <Text style={styles.selectServiceText}>Select Service</Text>
          <Spacer horizontal space={SW(5)} />
          <Text style={styles.requiredText}>Required</Text>
        </View>

        <Spacer space={SH(15)} />

        <View style={styles.bottomLine} />

        <Spacer space={SH(15)} />

        <FlatList data={Data} extraData={Data} renderItem={renderServices} />
      </View>
    </ScreenWrapper>
  );
}
