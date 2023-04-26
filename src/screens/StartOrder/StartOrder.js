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
import { cross } from "@/assets";
import { Button, ScreenWrapper, Spacer } from "@/components";
import { SH, SW } from "@/theme/ScalerDimensions";
import { COLORS } from "@/theme/Colors";
import { useState } from "react";
import { strings } from "@/localization";
import { Counter } from "./Components/CountButton";
import { priceData } from "../Products/ProductsInquiry/FlatlistData";
import { useFocusEffect, useIsFocused } from "@react-navigation/native";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getUser } from "@/selectors/UserSelectors";
import tinycolor from "tinycolor2";
import { Toast } from "react-native-toast-message/lib/src/Toast";

const DATA = [
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
      {
        id: "7",
        name: "Material",
        values: [
          { id: "9", name: "Cotton" },
          { id: "2", name: "Polyster" },
        ],
      },
    ],
  },
];

export function StartOrder(params) {
  const isFocused = useIsFocused();

  const user = useSelector(getUser);
  const bundle = params?.route?.params?.attributes;

  const [selectedItem, setSelectedItem] = useState("");
  const [ArrayToRoute, setArrayToRoute] = useState([]);

  const [bundleArray, setbundleArray] = useState(bundle ?? []);
  const [setBundleArray, setSetBundleArray] = useState(bundle ?? []);
  const setProductArrat = [...ArrayToRoute];
  const totalStore = [];
  const [storeTotal, setstoreTotal] = useState(0);
  const [colors, setColors] = useState();
  const [selectColor, setSelectColor] = useState();
  const [selectedSize, setSelectedSize] = useState();
  const [selectedSizeName, setSelectedSizeName] = useState();
  const [selectMaterial, setSelectMaterial] = useState();
  const [selectedItems, setSelectedItems] = useState([]);
  const [pricingData, setPricingData] = useState(
    setBundleArray[0].supply_prices
  );
  const [firstSupplyPrice, setFirstSupplyPrice] = useState(
    bundle[0].supply_prices[0]
  );
  const arr = bundle[0].supply_prices[0];
  const [quantity, setQuantity] = useState(arr);
  useEffect(() => {}, [isFocused]);
  console.log("quantity--->", quantity);

  // console.log("first ob-->", firstSupplyPrice);
  const SizeData = ["USA", "UK"];
  useEffect(() => {
    // setSetBundleArray(bundle?.map((item) => ({ ...item, qty: 0 })) ?? []);
    for (let i = 0; i < bundle.length; i++) {
      let supplyPrices = bundle[i].supply_prices;
      for (let j = 0; j < supplyPrices.length; j++) {
        supplyPrices[j].qty = 0;
      }
      setSetBundleArray(bundle);
    }
    // console.log("qty--->", JSON.stringify(setBundleArray));
  }, []);
  // const [productArray, setproductArray] = useState(Sizes ?? []);
  // const [setProductArrat, setsetProductArrat] = useState(Sizes ?? []);
  useEffect(() => {
    try {
      setProductArrat[0]?.supply_prices?.reduce((sum, i) => {
        var sepTotal = i.qty * i.selling_price;
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
          size={selectedSizeName}
        />
      </View>
    );
  };

  const renderBundle = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.bundleItems,
        {
          marginTop: SH(30),
          borderColor:
            firstSupplyPrice === item ? COLORS.primary : COLORS.darkGrey,
          borderWidth: firstSupplyPrice === item ? SW(2) : SW(1),
        },
      ]}
      onPress={() => setFirstSupplyPrice(item)}
    >
      <View style={styles.upperButtons}>
        <Text style={styles.primaryColorText}>
          {"USD"} <Text>{item.selling_price}</Text>
        </Text>
        <Text style={styles.smallText}>
          {/* {item.qty} */}
          <Text>
            {item.min_qty}
            {" - "}
            {item.max_qty}
          </Text>
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

  // const names = bundle?.map((item, i) => {
  //   return item?.attributes?.map((data) => {
  //     // console.log("item---", data.name);
  //   });
  // });
  // const attributes = bundle[0]?.attributes;
  // const lastIndex = attributes?.length - 1;

  // const colorValues = attributes?.find(
  //   (attr) => attr?.name === "Color"
  // )?.values;
  // const colorIndex = attributes.findIndex((attr) => attr?.name === "Color");

  // const sizeValues = attributes?.find((attr) => attr?.name === "Size")?.values;
  // const sizeIndex = attributes.findIndex((attr) => attr?.name === "Size");
  // console.log("last  index-->", sizeIndex);
  // console.log("size-->", sizeValues);
  const getColorName = (colorCode) => {
    const color = tinycolor(colorCode);
    let colorName = color.toName();
    colorName = colorName.charAt(0).toUpperCase() + colorName.slice(1);
    setColors(colorName);
    return colorName;
  };

  const checkLastIndex = (index) => {
    if (DATA[0]?.attributes?.length - 1 === index) {
      if (!selectedSize && !selectColor) {
        Toast.show({
          position: "bottom",
          type: "error_toast",
          text2: "Please select above attributes first",
          visibilityTime: 2000,
        });
      } else {
        alert("hit api");
      }
    } else {
      alert("not ok");
    }
  };
  // console.log("index----", selectedItems);
  const string = selectedItems.join(",");
  // console.log("string----", string);
  // return (
  //   <View style={{ backgroundColor: "teal", flex: 1 }}>
  // {DATA[0].attributes.map((item, index) => (
  //   <TouchableOpacity
  //     onPress={() => {
  //       if (index === DATA[0].attributes.length - 1) {
  //         alert("send data to server");
  //       } else {
  //         alert("dont send anything");
  //       }
  //     }}
  //   >
  //     <Text>{item.name + " " + index}</Text>
  //     <View style={{ flexDirection: "row", height: 30, borderRadius: 15 }}>
  //       {item.values.map((value, index) => (
  //         <Text style={{ color: item.name === "Size" ? "red" : "yellow" }}>
  //           {value.name + "  "}
  //         </Text>
  //       ))}
  //     </View>
  //   </TouchableOpacity>
  // ))}
  //   </View>
  // );

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
              data={bundle[0]?.supply_prices}
              renderItem={renderBundle}
              keyExtractor={(item) => item.id}
              numColumns={3}
            />
            <Spacer space={SH(16)} />
            {/* {colorValues && (
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
            </View> */}

            {DATA[0]?.attributes?.map((item, i) => (
              <>
                <View
                  style={{ marginBottom: SH(20) }}
                  // onPress={() => {
                  //   if (i === DATA[0].attributes.length - 1) {
                  //     alert("send data to server");
                  //   } else {
                  //     alert("dont send anything");
                  //   }
                  // }}
                >
                  <Text style={styles.boldTextHeading}>{item.name + ":"}</Text>

                  <View style={styles.attributeView}>
                    {item?.name === "Size" && (
                      <View style={{ flexDirection: "row" }}>
                        {item?.values?.map((value, index) => (
                          <>
                            <TouchableOpacity
                              style={[
                                styles.sizeBackground,
                                {
                                  borderColor:
                                    value.id === selectedSize
                                      ? COLORS.primary
                                      : COLORS.darkGrey,
                                },
                              ]}
                              onPress={() => {
                                setSelectedSize(value.id);
                                setSelectedSizeName(value.name);
                                checkLastIndex(i);
                                const newSelectedItems = [...selectedItems];
                                newSelectedItems[i] = value.id;
                                setSelectedItems(newSelectedItems);
                              }}
                            >
                              <Text style={styles.sizeText}>
                                {value?.name + "  "}
                              </Text>
                            </TouchableOpacity>
                            <Spacer horizontal space={SW(10)} />
                          </>
                        ))}
                      </View>
                    )}
                    {item?.name === "Color" && (
                      <View style={{ flexDirection: "row" }}>
                        {item?.values?.map((value, index) => (
                          <>
                            <TouchableOpacity
                              style={{
                                backgroundColor: value.name,
                                height: SW(30),
                                width: SW(30),
                                borderRadius: SW(15),
                                borderWidth:
                                  value.id === selectColor ? 2 : null,
                                borderColor:
                                  value.id === selectColor
                                    ? COLORS.primary
                                    : null,
                              }}
                              onPress={() => {
                                getColorName(item?.name);
                                setSelectColor(value?.id);
                                checkLastIndex(i);
                                const newSelectedItems = [...selectedItems];
                                newSelectedItems[i] = value.id;
                                setSelectedItems(newSelectedItems);
                                // if (i === DATA[0].attributes.length - 1) {
                                //   alert("send data to server");
                                // } else {
                                //   alert("dont send anything");
                                // }
                              }}
                            >
                              <View style={styles.outLine}></View>
                            </TouchableOpacity>
                            <Spacer horizontal space={SW(10)} />
                          </>
                        ))}
                      </View>
                    )}
                    {item?.name === "Material" && (
                      <View style={{ flexDirection: "row" }}>
                        {item?.values?.map((value, index) => (
                          <>
                            <TouchableOpacity
                              style={[
                                styles.materialBackground,
                                {
                                  borderColor:
                                    value.id === selectMaterial
                                      ? COLORS.primary
                                      : COLORS.darkGrey,
                                },
                              ]}
                              onPress={() => {
                                setSelectMaterial(value?.id);
                                checkLastIndex(i);
                                const newSelectedItems = [...selectedItems];
                                newSelectedItems[i] = value.id;
                                setSelectedItems(newSelectedItems);
                              }}
                            >
                              <Text style={styles.materialText}>
                                {value?.name}
                              </Text>
                            </TouchableOpacity>

                            <Spacer horizontal space={SW(10)} />
                          </>
                        ))}
                      </View>
                    )}
                    {/* {item.values.map((value, index) => (
                      <Text
                        style={{
                          color: item.name === "Size" ? "red" : "green",
                        }}
                      >
                        {value.name + "  "}
                      </Text>
                    ))} */}
                  </View>
                </View>
              </>
            ))}

            <Spacer space={SH(20)} />

            {/* <View style={{ flex: 1 }}>
              {sizeValues && (
                <View style={styles.rowAlign}>
                  <Text style={styles.boldTextHeading}>{"Size :"}</Text>

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
                            {index !== sizeValues.length - 1 && ", "}
                          </Text>
                        </TouchableOpacity>
                        <Spacer horizontal space={SW(5)} />
                      </>
                    );
                  })}
                </View>
              )}

            </View> */}

            {/* <FlatList
              data={pricingData}
              renderItem={renderSizes}
              extraData={setBundleArray[0]?.supply_prices}
              keyExtractor={(item) => item.id}
            /> */}
            <Counter
              OnPressDecrease={() => {
                if (quantity.qty > 0) {
                  const newQty = quantity.qty - 1;
                  // update the state with the new qty value
                  setQuantity({
                    ...quantity,
                    qty: newQty,
                  });
                }
              }}
              OnPressIncrease={() => {
                const newQty = quantity.qty + 1;
                // update the state with the new qty value
                setQuantity({
                  ...quantity,
                  qty: newQty,
                });
              }}
              text={quantity.qty}
              size={selectedSizeName}
            />

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
