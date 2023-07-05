import React from "react";
import {
  FlatList,
  Image,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Button, NameHeader, ScreenWrapper, Spacer } from "@/components";
import { SF, SH, SW } from "@/theme/ScalerDimensions";
import { backArrow, Fonts, marlboroPic } from "@/assets";
import { styles } from "./MakeAnOffer.styles";
import { strings } from "@/localization";
import SelectDropdown from "react-native-select-dropdown";
import Icon from "react-native-vector-icons/FontAwesome5";
import { scale } from "react-native-size-matters";
import { COLORS } from "@/theme";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";

export function MakeAnOffer() {
  const countries = ["Egypt", "Canada", "Australia", "Ireland"];
  const Details = [
    {
      id: 1,
      heading: strings.makeAnOffer.productName,
      selectedProduct: strings.STATIC.makeAnOffer.marlboroSilver,
    },
    {
      id: 2,
      heading: strings.makeAnOffer.brand,
      selectedProduct: strings.STATIC.makeAnOffer.marlboro,
    },
    {
      id: 3,
      heading: strings.makeAnOffer.subCategory,
      selectedProduct: strings.STATIC.makeAnOffer.cigarettes,
    },
    {
      id: 4,
      heading: strings.makeAnOffer.category,
      selectedProduct: strings.STATIC.makeAnOffer.tobacco,
    },
  ];

  const renderProductDetails = ({ item, index }) => (
    <View>
      <Text style={styles.maisonProductDetailHeading}>{item.heading}</Text>
      <Text style={styles.ProductDetailHeading}>{item.selectedProduct}</Text>
    </View>
  );

  return (
    <ScreenWrapper>
      <NameHeader title={strings.makeAnOffer.makeAnOffer} back />

      <Spacer space={SH(5)} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingHorizontal: SW(20) }}
      >
        <Spacer space={SH(5)} />

        <View style={styles.outerBorderView}>
          <Text style={styles.headingText}>
            {strings.makeAnOffer.selectCategory}
          </Text>
          <Spacer space={SH(5)} />

          <SelectDropdown
            defaultButtonText="Select Category"
            buttonTextStyle={styles.buttonTextStyle}
            renderDropdownIcon={() => (
              <Icon
                name={"sort-down"}
                color="black"
                size={scale(10)}
                style={{ alignSelf: "center", paddingRight: 5 }}
              />
            )}
            data={countries}
            buttonStyle={styles.dropDownStyle}
            onSelect={(selectedItem, index) => {}}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />

          <Spacer space={SH(20)} />

          <Text style={styles.headingText}>
            {strings.makeAnOffer.selectSubCategory}
          </Text>
          <Spacer space={SH(5)} />

          <SelectDropdown
            defaultButtonText="Select Sub Category"
            buttonTextStyle={styles.buttonTextStyle}
            renderDropdownIcon={() => (
              <Icon
                name={"sort-down"}
                color={COLORS.darkGrey}
                size={scale(10)}
                style={{ alignSelf: "center", paddingRight: 5 }}
              />
            )}
            data={countries}
            buttonStyle={styles.dropDownStyle}
            onSelect={(selectedItem, index) => {}}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />

          <Spacer space={SH(20)} />

          <Text style={styles.headingText}>
            {strings.makeAnOffer.selectproduct}
          </Text>
          <Spacer space={SH(5)} />

          <SelectDropdown
            defaultButtonText="Select Product"
            buttonTextStyle={styles.buttonTextStyle}
            renderDropdownIcon={() => (
              <Icon
                name={"sort-down"}
                color={COLORS.darkGrey}
                size={scale(10)}
                style={{ alignSelf: "center", paddingRight: 5 }}
              />
            )}
            data={countries}
            buttonStyle={styles.dropDownStyle}
            onSelect={(selectedItem, index) => {}}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />

          <Spacer space={SH(20)} />

          <Text style={styles.headingText}>
            {strings.makeAnOffer.selectBrand}
          </Text>
          <Spacer space={SH(5)} />

          <SelectDropdown
            defaultButtonText="Select Brand"
            buttonTextStyle={styles.buttonTextStyle}
            renderDropdownIcon={() => (
              <Icon
                name={"sort-down"}
                color={COLORS.darkGrey}
                size={scale(10)}
                style={{ alignSelf: "center", paddingRight: 5 }}
              />
            )}
            data={countries}
            buttonStyle={styles.dropDownStyle}
            onSelect={(selectedItem, index) => {}}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />
        </View>

        <Spacer space={SH(20)} />

        <View style={styles.outerBorderView}>
          <Text style={styles.headingMaisonText}>
            {strings.makeAnOffer.selectedProduct}
          </Text>
          <Spacer space={SH(5)} />
          <Image
            source={marlboroPic}
            resizeMode="contain"
            style={styles.marlboroPicStyle}
          />

          <Spacer space={SH(15)} />

          <FlatList
            data={Details}
            renderItem={renderProductDetails}
            keyExtractor={(item) => item.id}
          />
        </View>

        <Spacer space={SH(30)} />

        <Button
          title={strings.buttonText.send}
          style={styles.buttonStyle}
          onPress={() => navigate(NAVIGATION.sendAnOffer)}
        />

        <Spacer space={Platform.OS === "ios" ? SW(60) : SW(20)} />
      </ScrollView>
    </ScreenWrapper>
  );
}
