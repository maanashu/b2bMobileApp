import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { NameHeader, ScreenWrapper, Spacer } from "@/components";
import { SF, SH, SW } from "@/theme/ScalerDimensions";
import { backArrow, Fonts } from "@/assets";
import { styles } from "./MakeAnOffer.styles";
import { strings } from "@/localization";
import SelectDropdown from "react-native-select-dropdown";
import Icon from "react-native-vector-icons/FontAwesome5";
import { scale } from "react-native-size-matters";
import { COLORS } from "@/theme";

export function MakeAnOffer() {
  const countries = ["Egypt", "Canada", "Australia", "Ireland"];

  return (
    <ScreenWrapper>
      <NameHeader title={strings.makeAnOffer.makeAnOffer} back={backArrow} />

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
            buttonTextStyle={{
              flex: 1,
              alignSelf: "center",
              color: COLORS.darkGrey2,
              fontSize: SF(14),
              fontFamily: Fonts.Italic,
            }}
            renderDropdownIcon={() => (
              <Icon
                name={"sort-down"}
                color="black"
                size={scale(10)}
                style={{ alignSelf: "center", paddingRight: 5 }}
              />
            )}
            data={countries}
            buttonStyle={{ width: SW(312) }}
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

          <Spacer space={SH(20)} />

          <Text style={styles.headingText}>
            {strings.makeAnOffer.selectSubCategory}
          </Text>
          <Spacer space={SH(5)} />

          <SelectDropdown
            defaultButtonText="Select Sub Category"
            buttonTextStyle={{
              flex: 1,
              alignSelf: "center",
              color: COLORS.darkGrey2,
              fontSize: SF(14),
              fontFamily: Fonts.Italic,
            }}
            renderDropdownIcon={() => (
              <Icon
                name={"sort-down"}
                color={COLORS.darkGrey}
                size={scale(10)}
                style={{ alignSelf: "center", paddingRight: 5 }}
              />
            )}
            data={countries}
            buttonStyle={{ width: SW(312) }}
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

          <Spacer space={SH(20)} />

          <Text style={styles.headingText}>
            {strings.makeAnOffer.selectproduct}
          </Text>
          <Spacer space={SH(5)} />

          <SelectDropdown
            defaultButtonText="Select Product"
            buttonTextStyle={{
              flex: 1,
              alignSelf: "center",
              color: COLORS.darkGrey2,
              fontSize: SF(14),
              fontFamily: Fonts.Italic,
            }}
            renderDropdownIcon={() => (
              <Icon
                name={"sort-down"}
                color={COLORS.darkGrey}
                size={scale(10)}
                style={{ alignSelf: "center", paddingRight: 5 }}
              />
            )}
            data={countries}
            buttonStyle={{ width: SW(312) }}
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

          <Spacer space={SH(20)} />

          <Text style={styles.headingText}>
            {strings.makeAnOffer.selectBrand}
          </Text>
          <Spacer space={SH(5)} />

          <SelectDropdown
            defaultButtonText="Select Brand"
            buttonTextStyle={{
              flex: 1,
              alignSelf: "center",
              color: COLORS.darkGrey2,
              fontSize: SF(14),
              fontFamily: Fonts.Italic,
            }}
            renderDropdownIcon={() => (
              <Icon
                name={"sort-down"}
                color={COLORS.darkGrey}
                size={scale(10)}
                style={{ alignSelf: "center", paddingRight: 5 }}
              />
            )}
            data={countries}
            buttonStyle={{ width: SW(312) }}
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
      </ScrollView>
    </ScreenWrapper>
  );
}
