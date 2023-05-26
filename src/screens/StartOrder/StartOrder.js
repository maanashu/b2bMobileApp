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
import { useFocusEffect, useIsFocused } from "@react-navigation/native";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "@/selectors/UserSelectors";
import tinycolor from "tinycolor2";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { getSupplyVariantId } from "@/actions/ProductActions";
import { createCartAction } from "@/actions/OrderAction";
import { orderSelector } from "@/selectors/OrderSelector";
import { getProductSelector } from "@/selectors/ProductSelectors";
import { successSelector } from "@/selectors/StatusSelectors";
import { TYPES } from "@/Types/Types";

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
  const bundle = params?.route?.params?.attributes;
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const getVariantId = useSelector(getProductSelector);
  const user = useSelector(getUser);
  // console.log("token", user?.user?.payload?.token);

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
  const [firstSupplyPrice, setFirstSupplyPrice] = useState(
    bundle?.[0]?.supply_prices?.[0]
  );
  const arr = bundle?.[0].supply_prices[0];
  const [quantity, setQuantity] = useState(arr);
  const [string, setString] = useState();
  useEffect(() => {}, [isFocused]);

  const SizeData = ["USA", "UK"];
  const withoutVariantObject = {
    seller_id: bundle?.[0]?.seller_id,
    supply_id: bundle?.[0]?.id,
    supply_price_id: quantity?.id,
    product_id: params?.route?.params?.product_id,
    service_id: params?.route?.params?.service_id,
    qty: quantity?.qty,
  };

  const variantObject = {
    seller_id: bundle?.[0]?.seller_id,
    supply_id: bundle?.[0]?.id,
    supply_price_id: quantity?.id,
    supply_variant_id: getVariantId?.variantId?.attribute_variant_id,
    product_id: params?.route?.params?.product_id,
    service_id: params?.route?.params?.service_id,
    qty: quantity?.qty,
  };
  const chechVariantObject = {
    attribute_value_ids: string,
    supply_id: bundle?.[0]?.id,
  };
  useEffect(() => {
    setString(selectedItems.join(","));
  }, [selectedItems]);

  useEffect(() => {
    // setSetBundleArray(bundle?.map((item) => ({ ...item, qty: 0 })) ?? []);
    for (let i = 0; i < bundle?.length; i++) {
      let supplyPrices = bundle[i]?.supply_prices;
      for (let j = 0; j < supplyPrices?.length; j++) {
        supplyPrices[j].qty = 0;
      }
      setSetBundleArray(bundle);
    }
  }, []);
  useEffect(() => {
    const newTotalPrice = quantity?.qty * quantity?.selling_price;
    setstoreTotal(newTotalPrice);
  }, [quantity]);
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
    // navigate(NAVIGATION.checkout, { data: ArrayToRoute });
    if (bundle?.[0]?.attributes?.length == 0) {
      dispatch(createCartAction(withoutVariantObject, ArrayToRoute));
    } else {
      dispatch(createCartAction(variantObject, ArrayToRoute));
    }
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
  const getColorName = (colorCode) => {
    const color = tinycolor(colorCode);
    let colorName = color.toName();
    colorName = colorName.charAt(0).toUpperCase() + colorName.slice(1);
    setColors(colorName);
    return colorName;
  };
  const checkLastIndex = (index) => {
    if (bundle?.[0]?.attributes?.length - 1 === index) {
      if (!selectedSize && !selectColor) {
        Toast.show({
          position: "bottom",
          type: "error_toast",
          text2: "Please select above attributes first",
          visibilityTime: 2000,
        });
      } else {
        dispatch(getSupplyVariantId(string, bundle?.[0]?.id));
      }
    } else {
    }
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

          <TouchableOpacity onPress={() => navigate(NAVIGATION.productInquiry)}>
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
              data={bundle?.[0]?.supply_prices}
              renderItem={renderBundle}
              keyExtractor={(item) => item.id}
              numColumns={3}
            />
            <Spacer space={SH(16)} />

            {bundle?.[0]?.attributes?.map((item, i) => (
              <>
                <View style={{ marginBottom: SH(20) }}>
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
                  </View>
                </View>
              </>
            ))}

            <Spacer space={SH(20)} />

            <Counter
              OnPressDecrease={() => {
                if (quantity?.qty > 0) {
                  const newQty = quantity?.qty - 1;
                  setQuantity({
                    ...quantity,
                    qty: newQty,
                  });
                }
              }}
              OnPressIncrease={() => {
                if (quantity?.price_type === "quantity_base") {
                  if (quantity?.qty === quantity?.max_qty) {
                    Toast.show({
                      text2: "Max quantity reached",
                      position: "bottom",
                      type: "error_toast",
                      visibilityTime: 1500,
                    });
                  } else {
                    const newQty = quantity?.qty + 1;
                    setQuantity({
                      ...quantity,
                      qty: newQty,
                    });
                  }
                } else {
                  const newQty = quantity?.qty + 1;
                  setQuantity({
                    ...quantity,
                    qty: newQty,
                  });
                }
              }}
              text={quantity?.qty}
              size={"Quantity :"}
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
