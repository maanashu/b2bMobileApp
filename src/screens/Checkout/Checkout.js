import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef } from "react";
import { styles } from "./Checkout.styles";
import { ScreenWrapper, Spacer } from "@/components";
import { SH, SW } from "@/theme/ScalerDimensions";
import { COLORS } from "@/theme/Colors";
import { useRoute } from "@react-navigation/native";
import {
  deliveryTruck,
  puma2,
  puma1,
  cross,
  puma4,
  puma5,
  forwardArrowWhite,
} from "@/assets";
import { strings } from "@/localization";
import { HeaderCoin } from "../Profile/Wallet/Components/HeaderCoin";
import { useState } from "react";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";
import { useEffect } from "react";

export function Checkout(navigation) {
  const refRBSheet = useRef();

  const route = useRoute();
  const quantity = route?.params?.data;
  console.log("checking shoe size", quantity);

  const [productArray, setproductArray] = useState(quantity ?? []);
  const [setProductArrat, setsetProductArrat] = useState(quantity ?? []);
  console.log(quantity);
  const [storeTotal, setstoreTotal] = useState(0);

  const totalStore = [];
  useEffect(() => {
    try {
      setProductArrat.reduce((sum, i) => {
        var sepTotal = i.qty * i.price;
        totalStore.push(sepTotal);
      }, 0);
      setstoreTotal(totalStore.reduce((a, b) => a + b, 0));
    } catch (error) {
      console.log("reduce error", error);
    }
  }, [setProductArrat]);

  const cartPlusOnPress = (index, item) => {
    try {
      const array = [...productArray];
      array[index].qty = array[index].qty + 1;
      setsetProductArrat(array);
      console.log(
        "addition success->: " + index + "--->" + setProductArrat[index]?.qty
      );
    } catch (error) {
      console.log("caught error on plus: " + error);
    }
  };
  const cartMinusOnPress = (index) => {
    try {
      const array = [...productArray];
      array[index].qty =
        array[index].qty > 0 ? array[index].qty - 1 : array[index].qty;
      setsetProductArrat(array);

      console.log("addition success->: " + index + productArray[index]?.qty);
    } catch (error) {
      console.log("caught error on plus: " + error);
    }
  };

  const [counter, setcounter] = useState(0);

  const { deliveryService } = route?.params || {};
  const Details = [
    {
      id: 1,
      itemName: "PUMA Men's Tazon 6 Wide Sneaker",
      color: "Puma White",
      image: puma4,
      size: "US 7.5",
      price: "$6.56",
    },
    {
      id: 2,
      itemName: "PUMA Men's Tazon 6 Wide Sneaker",
      color: "Puma White",
      image: puma5,
      size: "US 7.5",
      price: "$6.56",
    },
    {
      id: 3,
      itemName: "PUMA Men's Tazon 6 Wide Sneaker",
      color: "Puma White",
      size: "US 7.5",
      image: puma1,
      price: "$6.56",
    },
    {
      id: 4,
      itemName: "PUMA Men's Tazon 6 Wide Sneaker",
      color: "Puma White",
      image: puma2,
      size: "US 7.5",
      price: "$6.56",
    },
  ];

  const renderItem = ({ item, index }) => {
    return (
      <>
        {item.qty > 0 ? (
          <View style={styles.productView}>
            <Image
              source={item.image}
              resizeMode="cover"
              style={styles.productImageStyle}
            />

            <View style={styles.productsInnerView}>
              <View>
                <Text style={styles.productNameText}>{item.itemName}</Text>
                <Text style={styles.secondaryDetailText}>
                  Color: <Text>{item.color}</Text>
                </Text>
                <Text style={styles.secondaryDetailText}>
                  Size: <Text>{item.name}</Text>
                </Text>

                <Spacer space={SH(5)} />

                {/* counter */}

                <View style={styles.counterButtonView}>
                  <TouchableOpacity
                    onPress={() => cartMinusOnPress(index)}
                    style={styles.decrementView}
                  >
                    <Text style={styles.decrementButton}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.selectedNumber}>{item.qty}</Text>
                  <TouchableOpacity
                    onPress={() => cartPlusOnPress(index)}
                    style={styles.incrementView}
                  >
                    <Text style={styles.incrementButton}>+</Text>
                  </TouchableOpacity>
                </View>

                {/* counter */}
              </View>
              <View style={styles.crossView}>
                <Image
                  source={cross}
                  resizeMode="contain"
                  style={styles.crossIcon}
                />
                <Text style={styles.secondaryText}>{item.price}</Text>
              </View>
            </View>
          </View>
        ) : null}
      </>
    );
  };
  return (
    <ScreenWrapper style={{ flex: 1, backgroundColor: COLORS.white }}>
      <HeaderCoin title={strings.checkout.checkout} />

      <Spacer space={SH(10)} />

      <View style={styles.mainContainer} showsVerticalScrollIndicator={false}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.deliveryView}>
            <View style={styles.deliveryViewDirection}>
              <View>
                <Image
                  resizeMode="contain"
                  style={styles.truckIcon}
                  source={deliveryTruck}
                />
              </View>
              <View style={styles.deliveryViewText}>
                <Text style={styles.deliveryTime}>
                  {strings.reviewAndPayment.deliveryTime}
                </Text>
                <Text style={styles.deliveryName}>{"Express Shipping"}</Text>
                <Text style={styles.estimatedDelivery}>
                  {strings.reviewAndPayment.estimatedDelivery}{" "}
                  <Text style={styles.deliveryDays}>
                    {" "}
                    {strings.reviewAndPayment.days}
                  </Text>
                </Text>
              </View>
            </View>
          </View>
          <Spacer space={SH(20)} />

          <FlatList
            showsVerticalScrollIndicator={false}
            data={route?.params?.data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />

          <Spacer space={SH(25)} />

          <View style={styles.subtotalBackground}>
            <Text style={{ color: "black" }}>{"Subtotal"}</Text>
            <Text style={{ color: "black" }}>
              {"$ "}
              {storeTotal.toFixed(2)}
            </Text>
          </View>

          <Spacer space={SH(70)} />
        </ScrollView>

        <View style={styles.bottomButtonView}>
          <TouchableOpacity
            style={styles.missingAddressButton}
            onPress={() => navigate(NAVIGATION.delivery)}
          >
            <View style={styles.missingAddressButtonView}>
              <Text style={styles.placeOrderText}>
                {strings.checkout.continueCheckout}
              </Text>
              <View style={styles.box}>
                <Image
                  resizeMode="stretch"
                  source={forwardArrowWhite}
                  style={{ height: 15, width: SW(25) }}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <Spacer space={SH(15)} />
      </View>
    </ScreenWrapper>
  );
}
