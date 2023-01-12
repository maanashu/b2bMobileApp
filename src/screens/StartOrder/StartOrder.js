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
import { cross, puma1, puma2, puma3, puma4, puma5 } from "@/assets";
import { Button, ScreenWrapper, Spacer } from "@/components";
import { SH, SW } from "@/theme/ScalerDimensions";
import { COLORS } from "@/theme/Colors";
import { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { goBack } from "@/navigation/NavigationRef";
import { backArrow } from "@/assets";
import { strings } from "@/localization";
import {
  CountEight,
  CountEightFive,
  CountNine,
  CountNineFive,
  CountSeven,
  CountSevenFive,
  CountSix,
  CountTen,
} from "./Components/CountButton";
export function StartOrder() {
  const [sizeSix, setSizeSix] = useState(0);
  const [sizeSeven, setSizeSeven] = useState(0);
  const [sizeSevenFive, SetSizeSevenFive] = useState(0);
  const [sizeEight, setSizeEight] = useState(0);
  const [sizeEightFive, setSizeEightFive] = useState(0);
  const [sizeNine, setSizeNine] = useState(0);
  const [sizeNineFive, setSizeNineFive] = useState(0);
  const [sizeTen, setSizeTen] = useState(0);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "USA", value: "USA" },
    { label: "EUR", value: "EUR" },
    { label: "U.K", value: "U.K" },
  ]);
  console.log("Country Data", items);

  const setCountry = () => {
    setValue(items[0].value);
    setItems(items[0].value);
  };
  const ProductDetail = [
    {
      id: "1",
      image: puma1,
    },
    {
      id: "2",
      image: puma2,
    },
    {
      id: "3",
      image: puma3,
    },
    {
      id: "4",
      image: puma4,
    },
    {
      id: "5",
      image: puma5,
    },
  ];
  const Item = ({ item, onPress }) => (
    <TouchableOpacity style={styles.item}>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Image resizeMode="contain" source={item.image} style={styles.shoes} />
      </View>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
        // onPress={() => setSelectedId(item.id)}
      />
    );
  };

  const IncrementSix = () => {
    setSizeSix(sizeSix + 1);
  };
  const DecrementSix = () => {
    if (sizeSix > 0) {
      setSizeSix(sizeSix - 1);
    }
  };
  const IncrementSeven = () => {
    setSizeSeven(sizeSeven + 1);
  };
  const DecrementSeven = () => {
    if (sizeSeven > 0) {
      setSizeSeven(sizeSeven - 1);
    }
  };
  const IncrementSevenFive = () => {
    SetSizeSevenFive(sizeSevenFive + 1);
  };
  const DecrementSevenFive = () => {
    if (sizeSevenFive) {
      SetSizeSevenFive(sizeSevenFive - 1);
    }
  };
  const IncrementEight = () => {
    setSizeEight(sizeEight + 1);
  };
  const DecrementEight = () => {
    if (sizeEight > 0) {
      setSizeEight(sizeEight - 1);
    }
  };
  const IncrementEightFive = () => {
    setSizeEightFive(sizeEightFive + 1);
  };
  const DecrementEightFive = () => {
    if (sizeEightFive > 0) {
      setSizeEightFive(sizeEightFive - 1);
    }
  };
  const IncrementNine = () => {
    setSizeNine(sizeNine + 1);
  };
  const DecrementNine = () => {
    if (sizeNine > 0) {
      setSizeNine(sizeNine - 1);
    }
  };
  const IncrementNineFive = () => {
    setSizeNineFive(sizeNineFive + 1);
  };
  const DecrementNineFive = () => {
    if (sizeNineFive > 0) {
      setSizeNineFive(sizeNineFive - 1);
    }
  };
  const IncrementTen = () => {
    setSizeTen(sizeTen + 1);
  };
  const DecrementTen = () => {
    if (sizeTen > 0) {
      setSizeTen(sizeTen - 1);
    }
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
              horizontal={true}
              data={ProductDetail}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              // extraData={product}
              // numColumns={4}
            />
          </View>

          <Spacer space={SH(20)} />

          <View style={{ flex: 1 }}>
            <View style={styles.upperView}>
              <View style={styles.subHeadingView}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    flex: 1,
                  }}
                >
                  <Text style={styles.boldTextHeading}>Size:</Text>
                  <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    placeholder={"Country"}
                    style={{
                      borderWidth: 0,
                      width: SW(100),
                      backgroundColor: COLORS.white,
                    }}
                  />
                </View>

                <View>
                  <Text style={styles.boldTextHeading}>
                    Quantity:<Text style={styles.RegularTextHeading}> USA</Text>
                  </Text>
                </View>
              </View>
            </View>
            <Spacer space={SH(50)} />

            <View style={styles.counterView}>
              <CountSix
                OnPressDecrease={DecrementSix}
                OnPressIncrease={IncrementSix}
                text={sizeSix}
              />
            </View>

            <Spacer space={SH(10)} />

            <View style={styles.counterView}>
              <CountSeven
                OnPressDecrease={DecrementSeven}
                OnPressIncrease={IncrementSeven}
                text={sizeSeven}
              />
            </View>

            <Spacer space={SH(10)} />

            <View style={styles.counterView}>
              <CountSevenFive
                OnPressDecrease={DecrementSevenFive}
                OnPressIncrease={IncrementSevenFive}
                text={sizeSevenFive}
              />
            </View>

            <Spacer space={SH(10)} />

            <View style={styles.counterView}>
              <CountEight
                OnPressDecrease={DecrementEight}
                OnPressIncrease={IncrementEight}
                text={sizeEight}
              />
            </View>

            <Spacer space={SH(10)} />

            <View style={styles.counterView}>
              <CountEightFive
                OnPressDecrease={DecrementEightFive}
                OnPressIncrease={IncrementEightFive}
                text={sizeEightFive}
              />
            </View>

            <Spacer space={SH(10)} />

            <View style={styles.counterView}>
              <CountNine
                OnPressDecrease={DecrementNine}
                OnPressIncrease={IncrementNine}
                text={sizeNine}
              />
            </View>

            <Spacer space={SH(10)} />

            <View style={styles.counterView}>
              <CountNineFive
                OnPressDecrease={DecrementNineFive}
                OnPressIncrease={IncrementNineFive}
                text={sizeNineFive}
              />
            </View>

            <Spacer space={SH(10)} />

            <View style={styles.counterView}>
              <CountTen
                OnPressDecrease={DecrementTen}
                OnPressIncrease={IncrementTen}
                text={sizeTen}
              />
            </View>
          </View>

          <Spacer space={SH(20)} />

          <View style={styles.buttonView}>
            <Button
              title={strings.startOrder.checkout}
              style={styles.checkoutButton}
              textStyle={styles.checkoutButtonText}
              onPress={() => navigate(NAVIGATION.delivery)}
            />
          </View>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}
