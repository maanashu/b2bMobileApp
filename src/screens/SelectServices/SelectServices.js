import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { NameHeader, ScreenWrapper, Spacer } from "@/components";
import { COLORS } from "@/theme/Colors";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "./SelectServices.styles";
import { SH, SW } from "@/theme";
import { Shoes2, checkBox } from "@/assets";
import Icon from "react-native-vector-icons/FontAwesome5";
import { scale } from "react-native-size-matters";
import { getProductSelector } from "@/selectors/ProductSelectors";
import { getUser } from "@/selectors/UserSelectors";
import { getProduct } from "@/actions/ProductActions";
import { useIsFocused } from "@react-navigation/native";

export function SelectServices(params) {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const productsData = useSelector(getProductSelector);
  const user = useSelector(getUser);
  const [selectedService, setSelectedService] = useState("");
  const selectServices = () => {
    setSelectedService(!selectedService);
  };
  const serviceObject = {
    page: 1,
    limit: 20,
    app_name: "b2b",
    seller_id:
      params?.route?.params?.sellerId ||
      productsData?.savedProductParams?.sellerId,
    service_type: productsData?.savedProductParams?.service_type,
    sub_category_ids:
      params?.route?.params?.category_id ||
      productsData?.savedProductParams?.category_id,
  };
  useEffect(() => {
    dispatch(getProduct(serviceObject));
  }, [isFocused]);

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
              <Text style={styles.serviceNameText}>{item.description}</Text>

              <Text style={styles.servicePriceText}>
                USD ${item.supplies?.[0]?.supply_prices?.[0]?.selling_price}
              </Text>
            </View>
          </View>

          <Image
            source={{ uri: item.image }}
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

        <FlatList
          data={productsData?.product?.data}
          extraData={productsData?.product?.data}
          renderItem={renderServices}
        />
      </View>
    </ScreenWrapper>
  );
}
