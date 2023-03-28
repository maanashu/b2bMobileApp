import {
  BackHandler,
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
import { cross, Fonts, puma1, puma2, puma4, puma5 } from "@/assets";
import { Button, ScreenWrapper, Spacer } from "@/components";
import { SF, SH, SW } from "@/theme/ScalerDimensions";
import { COLORS } from "@/theme/Colors";
import { useState } from "react";
import { backArrow } from "@/assets";
import { strings } from "@/localization";
import { Counter } from "./Components/CountButton";
import { priceData } from "../Products/ProductsInquiry/FlatlistData";
import SelectDropdown from "react-native-select-dropdown";
import { scale } from "react-native-size-matters";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useFocusEffect, useIsFocused } from "@react-navigation/native";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getUser } from "@/selectors/UserSelectors";

export function StartOrder(params) {
  const isFocused = useIsFocused();

  const user = useSelector(getUser);
  // console.log("user", user?.user?.payload?.token);
  const bundle = params?.route?.params?.bundleItems;
  // console.log("bundle", bundle);

  const [selectedItem, setSelectedItem] = useState("");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "USA", value: "USA" },
    { label: "EUR", value: "EUR" },
    { label: "U.K", value: "U.K" },
  ]);
  const SizeData = ["USA", "UK"];

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
    {
      id: 1,
      item: 6,
      qty: 0,
      image: puma1,
      size: "US 6",
      price: "6.56",
      itemName: "PUMA Men's Tazon 6 Wide Sneaker",
      color: "Puma White",
    },
    {
      id: 2,
      item: 7,
      qty: 0,
      image: puma2,
      size: "US 7",
      color: "Puma White",
      price: "6.56",
      itemName: "PUMA Men's Tazon 6 Wide Sneaker",
    },
    {
      id: 3,
      item: 7.5,
      qty: 0,
      image: puma1,
      size: "US 7.5",
      color: "Puma White",
      price: "6.56",
      itemName: "PUMA Men's Tazon 6 Wide Sneaker",
    },
    {
      id: 4,
      item: 8,
      qty: 0,
      image: puma4,
      size: "US 8",
      itemName: "PUMA Men's Tazon 6 Wide Sneaker",
      color: "Puma White",
      price: "6.56",
    },
    {
      id: 5,
      item: 8.5,
      qty: 0,
      image: puma5,
      size: "US 8.5",
      itemName: "PUMA Men's Tazon 6 Wide Sneaker",
      color: "Puma White",
      price: "6.56",
    },
    {
      id: 6,
      item: 9,
      qty: 0,
      image: null,
      itemName: "PUMA Men's Tazon 6 Wide Sneaker",
      size: "US 9",
      color: "Puma White",
      price: "6.56",
    },
    {
      id: 7,
      item: 9.5,
      qty: 0,
      image: null,
      size: "US 9.5",
      itemName: "PUMA Men's Tazon 6 Wide Sneaker",
      color: "Puma White",
      price: "6.56",
    },
    {
      id: 8,
      item: 10,
      qty: 0,
      image: null,
      size: "US 10",
      itemName: "PUMA Men's Tazon 6 Wide Sneaker",
      color: "Puma White",
      price: "6.56",
    },
  ];

  const [SelectedItems, setSelectedItems] = useState(ProductDetail);
  useEffect(() => {
    // setSetBundleArray(bundle?.map((item) => ({ ...item, qty: 0 })) ?? []);
    // setTimeout(() => {
    //   console.log("checking added item", setBundleArray);
    // }, 1000);
    for (let i = 0; i < bundle?.length; i++) {
      bundle[i].qty = 0;
      setSetBundleArray(bundle);
    }
  }, []);

  // const [productArray, setproductArray] = useState(Sizes ?? []);
  // const [setProductArrat, setsetProductArrat] = useState(Sizes ?? []);
  const [ArrayToRoute, setArrayToRoute] = useState([]);

  const [bundleArray, setbundleArray] = useState(bundle ?? []);
  const [setBundleArray, setSetBundleArray] = useState(bundle ?? []);
  const setProductArrat = [...ArrayToRoute];
  const totalStore = [];
  const [storeTotal, setstoreTotal] = useState(0);

  useEffect(() => {}, [isFocused]);

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
  // const cartPlusOnPress = (index, item) => {
  //   try {
  //     const array = [...productArray];
  //     array[index].qty = array[index].qty + 1;
  //     setsetProductArrat(array);
  //     setArrayToRoute(array);
  //     console.log("sending item", ArrayToRoute);
  //     console.log(
  //       "addition success->: " + index + "--->" + setProductArrat[index]?.qty
  //     );
  //   } catch (error) {
  //     console.log("caught error on plus: " + error);
  //   }
  // };

  // const cartMinusOnPress = (index) => {
  //   try {
  //     const array = [...productArray];
  //     array[index].qty =
  //       array[index].qty > 0 ? array[index].qty - 1 : array[index].qty;
  //     setsetProductArrat(array);

  //     console.log(
  //       "addition success->: " + index + "-->" + productArray[index]?.qty
  //     );
  //   } catch (error) {
  //     console.log("caught error on plus: " + error);
  //   }
  // };

  const cartPlus = (index, item) => {
    try {
      const array = [...bundleArray];
      array[index].qty = array[index].qty + 1;
      setSetBundleArray(array);
      setArrayToRoute(array);
      console.log(
        "addition success->: " + index + "--->" + setBundleArray[index]?.qty
      );
    } catch (error) {
      console.log("caught error on plus: " + error);
    }
  };

  const cartMinus = (index) => {
    try {
      const array = [...bundleArray];
      array[index].qty =
        array[index].qty > 0 ? array[index].qty - 1 : array[index].qty;
      setSetBundleArray(array);
      setArrayToRoute(array);

      console.log(
        "addition success->: " + index + "-->" + setBundleArray[index]?.qty
      );
    } catch (error) {
      console.log("caught error on plus: " + error);
    }
  };

  // const SelectItem = (item) => {
  //   const newItem = SelectedItems.map((val) => {
  //     if (val.id === item.id) {
  //       return { ...val, selected: !val.selected };
  //     } else {
  //       return val;
  //     }
  //   });

  //   setSelectedItems(newItem);
  // };

  const SelectItem = (item) => {
    setSelectedItem(item.id);
  };

  const renderItem = ({ item, onPress }) => (
    <>
      <TouchableOpacity
        style={[
          styles.item,
          {
            borderWidth: item.id == selectedItem ? 1 : 0,
            padding: SH(2),
            borderColor:
              item.id == selectedItem ? COLORS.primary : COLORS.light_border,
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

  const renderSizes = ({ item, index }) => {
    return (
      <View style={styles.counterView}>
        <Counter
          OnPressDecrease={() => cartMinus(index, item)}
          OnPressIncrease={() => cartPlus(index, item)}
          text={item.qty}
          size={item.name}
        />
      </View>
    );
  };

  const renderBundle = ({ item }) => (
    <TouchableOpacity style={[styles.bundleItems, { marginTop: SH(30) }]}>
      <View style={styles.upperButtons}>
        <Text style={styles.primaryColorText}>
          {"USD"}{" "}
          <Text>
            {"$$$ "}
            {/* {item.price} */}
          </Text>
        </Text>
        <Text style={styles.smallText}>
          {/* {item.qty} */}
          <Text>{" Pieces"}</Text>
        </Text>
      </View>
    </TouchableOpacity>
  );
  const Checkout = () => {
    navigate(NAVIGATION.checkout, { data: ArrayToRoute });
  };

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        navigate(NAVIGATION.productInquiry);
        return true;
      };
      BackHandler.addEventListener("hardwareBackPress", onBackPress);
      return () =>
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
    }, [])
  );
  return (
    <ScreenWrapper style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={styles.header}>
        <View style={styles.headerInnerView}>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
            onPress={() =>
              // navigation.reset({
              //   index: 1,
              //   routes: [{ name: NAVIGATION.productInquiry }],
              // })

              navigate(NAVIGATION.productInquiry)
            }
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
            <Spacer space={SH(1)} />
            <FlatList
              data={priceData}
              renderItem={renderBundle}
              keyExtractor={(item) => item.id}
              numColumns={3}
            />
            <Spacer space={SH(16)} />
            <View style={styles.headingView}>
              <Text style={styles.itemColorHeading}>{"Color :"}</Text>
              <Text style={styles.itemFullName}>{"Puma White"}</Text>
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
            {/* 
            {Sizes.map((item, index) => {
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
            <View style={{ flex: 1 }}>
              <View style={styles.rowAlign}>
                <Text style={styles.boldTextHeading}>{"Size :"}</Text>

                <SelectDropdown
                  defaultValue={SizeData[0]}
                  buttonTextStyle={{
                    flex: 1,
                    alignSelf: "center",
                    color: COLORS.darkGrey,
                    fontSize: SF(14),
                    fontFamily: Fonts.Regular,
                    backgroundColor: "transparent",
                  }}
                  renderDropdownIcon={() => (
                    <Icon
                      name={"sort-down"}
                      color={COLORS.darkGrey}
                      size={scale(10)}
                      style={{ alignSelf: "center", paddingRight: 5 }}
                    />
                  )}
                  data={SizeData}
                  buttonStyle={{
                    width: SW(80),
                    alignSelf: "center",
                    backgroundColor: COLORS.white,
                  }}
                  render
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                  }}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem;
                  }}
                  rowTextForSelection={(item, index) => {
                    return item;
                  }}
                />
              </View>
              <FlatList
                data={setBundleArray}
                renderItem={renderSizes}
                extraData={setBundleArray}
                keyExtractor={(item) => item.id}
              />
            </View>
            <Spacer space={SH(20)} />
          </View>
        </ScrollView>
        <View style={styles.buttonView}>
          <View style={styles.itemValueView}>
            <Text style={styles.itemvalueText}>
              {strings.startOrder.itemsValue}
            </Text>
            <Text style={styles.itemvalueText}>$ {storeTotal.toFixed(2)}</Text>
          </View>

          <Button
            title={strings.startOrder.checkout}
            style={styles.checkoutButton}
            textStyle={styles.checkoutButtonText}
            onPress={() => Checkout()}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
}
