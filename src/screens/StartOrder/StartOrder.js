import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { styles } from "./StartOrder.styles";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants/navigation";
import { cross, puma1, puma2, puma4, puma5 } from "@/assets";
import { Button, ScreenWrapper, Spacer } from "@/components";
import { SH } from "@/theme/ScalerDimensions";
import { COLORS } from "@/theme/Colors";
import { useState } from "react";
import { goBack } from "@/navigation/NavigationRef";
import { backArrow } from "@/assets";
import { strings } from "@/localization";
import { CountSeven } from "./Components/CountButton";
export function StartOrder() {
  const [selectedItem, setSelectedItem] = useState("");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "USA", value: "USA" },
    { label: "EUR", value: "EUR" },
    { label: "U.K", value: "U.K" },
  ]);

  const setCountry = () => {
    setValue(items[0].value);
    setItems(items[0].value);
  };
  const ProductDetail = [
    {
      id: 1,
      image: puma1,
    },
    {
      id: 2,
      image: puma2,
    },
    {
      id: 3,
      image: puma1,
    },
    {
      id: 4,
      image: puma4,
    },
    {
      id: 5,
      image: puma5,
    },
  ];

  const Sizes = [
    { id: 1, item: 6, qty: 0 },
    { id: 2, item: 7, qty: 0 },
    { id: 3, item: 7.5, qty: 0 },
    { id: 4, item: 8, qty: 0 },
    { id: 5, item: 8.5, qty: 0 },
    { id: 6, item: 9, qty: 0 },
    { id: 7, item: 9.5, qty: 0 },
    { id: 8, item: 10, qty: 0 },
  ];

  const [SelectedItems, setSelectedItems] = useState(ProductDetail);

  // useEffect(() => {
  //   setSerProductArray(Sizes.map((item) => ({ ...item, qty: 0 })) ?? []);
  //   setTimeout(() => {
  //     console.log("checking added item", SeaProductList);
  //   }, 1000);
  // }, []);

  const [productArray, setproductArray] = useState(Sizes ?? []);
  const [setProductArrat, setsetProductArrat] = useState(Sizes ?? []);

  const cartPlusOnPress = (index, item) => {
    try {
      const array = [...productArray];
      array[index].qty = array[index].qty + 1;
      setsetProductArrat(array);

      console.log(
        "addition success->: " + index + "--->" + productArray[index]?.qty
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

  const SelectItem = (item) => {
    const newItem = SelectedItems.map((val) => {
      if (val.id === item.id) {
        return { ...val, selected: !val.selected };
      } else {
        return val;
      }
    });

    setSelectedItems(newItem);
  };

  const renderItem = ({ item, onPress }) => (
    <>
      <TouchableOpacity
        style={[
          styles.item,
          {
            borderWidth: item.selected ? 1 : 0,
            padding: SH(2),
            borderColor: item.selected ? COLORS.primary : COLORS.light_border,
          },
        ]}
        onPress={() => SelectItem(item)}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Image
            resizeMode="contain"
            source={item.image}
            style={styles.shoes}
          />
        </View>
      </TouchableOpacity>
      <Spacer horizontal space={SH(5)} />
    </>
  );

  // const IncrementSix = () => {
  //   setSizeSix(sizeSix + 1);
  // };
  // const DecrementSix = () => {
  //   if (sizeSix > 0) {
  //     setSizeSix(sizeSix - 1);
  //   }
  // };
  // const IncrementSeven = () => {
  //   setSizeSeven(sizeSeven + 1);
  // };
  // const DecrementSeven = () => {
  //   if (sizeSeven > 0) {
  //     setSizeSeven(sizeSeven - 1);
  //   }
  // };
  // const IncrementSevenFive = () => {
  //   SetSizeSevenFive(sizeSevenFive + 1);
  // };
  // const DecrementSevenFive = () => {
  //   if (sizeSevenFive) {
  //     SetSizeSevenFive(sizeSevenFive - 1);
  //   }
  // };
  // const IncrementEight = () => {
  //   setSizeEight(sizeEight + 1);
  // };
  // const DecrementEight = () => {
  //   if (sizeEight > 0) {
  //     setSizeEight(sizeEight - 1);
  //   }
  // };
  // const IncrementEightFive = () => {
  //   setSizeEightFive(sizeEightFive + 1);
  // };
  // const DecrementEightFive = () => {
  //   if (sizeEightFive > 0) {
  //     setSizeEightFive(sizeEightFive - 1);
  //   }
  // };
  // const IncrementNine = () => {
  //   setSizeNine(sizeNine + 1);
  // };
  // const DecrementNine = () => {
  //   if (sizeNine > 0) {
  //     setSizeNine(sizeNine - 1);
  //   }
  // };
  // const IncrementNineFive = () => {
  //   setSizeNineFive(sizeNineFive + 1);
  // };
  // const DecrementNineFive = () => {
  //   if (sizeNineFive > 0) {
  //     setSizeNineFive(sizeNineFive - 1);
  //   }
  // };
  // const IncrementTen = () => {
  //   setSizeTen(sizeTen + 1);
  // };
  // const DecrementTen = () => {
  //   if (sizeTen > 0) {
  //     setSizeTen(sizeTen - 1);
  //   }
  // };

  const renderSizes = ({ item, index }) => {
    return (
      <View style={styles.counterView}>
        <CountSeven
          OnPressDecrease={() => cartMinusOnPress(index)}
          OnPressIncrease={() => cartPlusOnPress(index)}
          text={item.qty}
          size={item.item}
        />
      </View>
    );
  };

  return (
    <ScreenWrapper style={{ flex: 1, backgroundColor: COLORS.white }}>
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
            <Text style={styles.headerText}>
              {strings.startOrder.startOrder}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={cross} style={styles.crossIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.mainView}>
            <View style={styles.itemName}>
              <Text style={styles.itemNameText}>MOQ:10</Text>
            </View>

            <Spacer space={SH(16)} />

            <View style={styles.headingView}>
              <Text style={styles.itemColorHeading}>Color :</Text>
              <Text style={styles.itemFullName}>Puma White</Text>
            </View>

            <Spacer space={SH(20)} />

            <View>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={SelectedItems}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                // extraData={product}
                numColumns={5}
              />
            </View>

            <Spacer space={SH(20)} />

            {/* Counter view below */}

            {/* {Sizes.map((item, index) => {
              return (
                <View style={styles.counterView}>
                  <CountSeven
                    OnPressDecrease={() => cartMinusOnPress(item, index)}
                    OnPressIncrease={() => cartPlusOnPress(index)}
                    text={array[index]?.qty}
                    size={item.item}
                  />
                </View>
              );
            })} */}

            <FlatList
              data={setProductArrat}
              renderItem={renderSizes}
              extraData={productArray}
              keyExtractor={(item) => item.id}
            />

            <Spacer space={SH(20)} />
          </View>
        </ScrollView>
        <View style={styles.buttonView}>
          <Button
            title={strings.startOrder.checkout}
            style={styles.checkoutButton}
            textStyle={styles.checkoutButtonText}
            onPress={() => navigate(NAVIGATION.checkout)}
          />
        </View>
        <Spacer space={SH(20)} />
      </View>
    </ScreenWrapper>
  );
}
