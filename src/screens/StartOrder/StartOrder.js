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
import tinycolor from "tinycolor2";
import { color } from "react-native-reanimated";

export function StartOrder(params) {
  const isFocused = useIsFocused();

  const user = useSelector(getUser);
  // const bundle = params?.route?.params?.attributes;
  const bundle = [
    {
      id: 92,
      seller_id: "b169ed4d-be27-44eb-9a08-74f997bc6a2f",
      rest_quantity: 100,
      delivery_options: "3,1,4",
      supply_prices: [
        {
          id: 277,
          app_name: "b2b",
          price_type: "quantity_base",
          selling_price: 20.5,
          min_qty: 10,
          max_qty: 11,
          margin_percentage: 10,
        },
        {
          id: 278,
          app_name: "b2b",
          price_type: "quantity_base",
          selling_price: 20.5,
          min_qty: 20,
          max_qty: 30,
          margin_percentage: 10,
        },
      ],
      seller_details: null,
      attributes: [
        {
          id: "3",
          name: "Size",
          values: [
            { id: "3", name: "X" },
            { id: "4", name: "L" },
          ],
        },
        {
          id: "6",
          name: "Color",
          values: [
            { id: "9", name: "#808080" },
            { id: "2", name: "#ffc0cb" },
            { id: "10", name: "#FFA500" },
            { id: "11", name: "#FF0000" },
          ],
        },
        // {
        //   id: "12",
        //   name: "Material",
        //   values: [
        //     { id: "43", name: "Cotton" },
        //     { id: "10", name: "Polyster" },
        //   ],
        // },
      ],
    },
  ];
  console.log("bundle--", JSON.stringify(bundle));

  const [selectedItem, setSelectedItem] = useState("");

  const SizeData = ["USA", "UK"];

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
  const [colors, setColors] = useState(colorValues);
  const [selectColor, setSelectColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {}, [isFocused]);

  useEffect(() => {
    try {
      setProductArrat?.reduce((sum, i) => {
        var sepTotal = i.qty * i.price;
        totalStore.push(sepTotal);
      }, 0);
      setstoreTotal(totalStore.reduce((a, b) => a + b, 0));
    } catch (error) {
      console.log("reduce error", error);
    }
  }, [setProductArrat]);

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

  const names = bundle?.map((item, i) => {
    return item?.attributes?.map((data) => {
      // console.log("item---", data.name);
    });
  });
  const attributes = bundle[0]?.attributes;
  const colorValues = attributes?.find(
    (attr) => attr?.name === "Color"
  )?.values;
  const sizeValues = attributes?.find((attr) => attr?.name === "Size")?.values;
  const sizes = sizeValues?.map((item) => item?.name).join(", ");

  const lastIndex = attributes?.length - 1;

  console.log("last  index-->", lastIndex);
  // console.log("size-->", sizeValues);
  const getColorName = (colorCode) => {
    const color = tinycolor(colorCode);
    let colorName = color.toName();
    colorName = colorName.charAt(0).toUpperCase() + colorName.slice(1);
    setColors(colorName);
    return colorName;
  };
  const renderColors = ({ item }) => {
    return (
      <>
        <TouchableOpacity
          style={[
            styles.colorBackground,
            {
              backgroundColor: item.name,
              borderWidth: item.name === selectColor ? 2 : null,
              borderColor: item.name === selectColor ? COLORS.primary : null,
            },
          ]}
          onPress={() => {
            getColorName(item.name);
            setSelectColor(item.name);
          }}
        >
          <View style={styles.outLine}></View>
        </TouchableOpacity>
        <Spacer horizontal space={SW(15)} />
      </>
    );
  };
  const selectSize = (item) => {
    setSelectedSize(item.id);
  };

  return (
    <ScreenWrapper style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={styles.header}>
        <View style={styles.headerInnerView}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.headerText}>
              {strings.startOrder.startOrder}
            </Text>
          </View>

          <TouchableOpacity
            onPress={() =>
              // navigation.reset({
              //   index: 1,
              //   routes: [{ name: NAVIGATION.productInquiry }],
              // })
              navigate(NAVIGATION.productInquiry)
            }
          >
            <Image source={cross} style={styles.crossIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.mainView}>
            <View style={styles.itemName}>
              <Text style={styles.itemNameText}>{"MOQ:10"}</Text>
            </View>
            <Spacer space={SH(1)} />
            <FlatList
              data={priceData}
              renderItem={renderBundle}
              keyExtractor={(item) => item.id}
              numColumns={3}
            />
            <Spacer space={SH(16)} />
            {colorValues && (
              <View style={styles.headingView}>
                <Text style={styles.boldTextHeading}>{"Color :"}</Text>

                <Text style={styles.itemColor}> {colors}</Text>
              </View>
            )}
            <Spacer space={SH(10)} />
            <View>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={colorValues}
                renderItem={renderColors}
                keyExtractor={(item) => item.id}
                horizontal
                extraData={colorValues}
              />
            </View>

            <Spacer space={SH(20)} />

            <View style={{ flex: 1 }}>
              {sizeValues && (
                <View style={styles.rowAlign}>
                  <Text style={styles.boldTextHeading}>{"Size :"}</Text>

                  {/* <SelectDropdown
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
                /> */}

                  {sizeValues?.map((item, index) => {
                    return (
                      <>
                        <Spacer horizontal space={SW(10)} />
                        <TouchableOpacity
                          key={item.id}
                          onPress={() => selectSize(item)}
                          style={[
                            styles.sizeBackground,
                            {
                              borderColor:
                                item.id === selectedSize
                                  ? COLORS.primary
                                  : COLORS.darkGrey,
                            },
                          ]}
                        >
                          <Text
                            style={[
                              styles.sizeText,
                              {
                                color:
                                  item.id === selectedSize
                                    ? COLORS.primary
                                    : COLORS.darkGrey,
                              },
                            ]}
                          >
                            {" " + item.name}
                            {/* {index !== sizeValues.length - 1 && ", "} */}
                          </Text>
                        </TouchableOpacity>
                        <Spacer horizontal space={SW(5)} />
                      </>
                    );
                  })}
                </View>
              )}

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
