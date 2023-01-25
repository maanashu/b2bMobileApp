import React, { useRef, useEffect, useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./AddressDetails.styles";
import {
  cross,
  crossBlack,
  home,
  invoice,
  location,
  mapView,
  pencil,
  pinMap,
  plusGray,
  workBag,
} from "@/assets";
import { Button, ScreenWrapper, Spacer, TextField } from "@/components";
import { SH, SW } from "@/theme/ScalerDimensions";
import { strings } from "@/localization";
import RBSheet from "react-native-raw-bottom-sheet";
import { COLORS } from "@/theme";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";
import Modal from "react-native-modal";

export function AddressDetails() {
  const bottomSheetRef = useRef(null);

  const [selectedId, setSelectedId] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const DATA = [
    { id: 1, title: strings.addresses.home, icon: home },
    { id: 2, title: strings.addresses.work, icon: workBag },
    { id: 3, title: strings.addresses.billing, icon: invoice },
    { id: 4, title: strings.addresses.other, icon: plusGray },
  ];

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const renderItem = ({ item }) => (
    <>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          onPress={() => setSelectedId(item.title)}
          style={[
            styles.iconsStyle,
            {
              backgroundColor:
                item.title === selectedId ? COLORS.primary : COLORS.white,
            },
          ]}
        >
          <Image
            source={item.icon}
            style={[
              styles.bottomIcons,
              {
                tintColor:
                  item.title === selectedId ? COLORS.white : COLORS.text,
              },
            ]}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text>{item.title}</Text>
      </View>
    </>
  );

  useEffect(() => {
    bottomSheetRef.current.open();
  }, []);

  return (
    <ScreenWrapper>
      <View>
        <Image style={styles.mapView} source={mapView} resizeMode="cover" />

        <Image
          style={styles.pinLocation}
          resizeMode="contain"
          source={pinMap}
        />
      </View>
      <RBSheet
        ref={bottomSheetRef}
        animationType="slide"
        closeOnDragDown={true}
        closeOnPressMask={false}
        height={SH(520)}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent",
          },
          container: {},
          draggableIcon: {
            backgroundColor: COLORS.light_border,
            width: SW(70),
            height: SH(4),
          },
        }}
      >
        <View style={styles.sheetContainer}>
          <Text style={styles.headingText}>
            {strings.addresses.addressDetails}
          </Text>

          <Spacer space={SH(20)} />

          <View style={styles.rowView}>
            <View style={styles.leftView}>
              <Image
                style={styles.addressIcon}
                source={location}
                resizeMod="contain"
              />
              <View>
                <Text style={styles.addressText}>2598 West Street</Text>
                <Text style={styles.addressText}>Holland, MI 49424</Text>
              </View>
            </View>

            <TouchableOpacity style={styles.rightView} onPress={toggleModal}>
              <Image
                style={styles.addressIcon}
                source={pencil}
                resizeMod="contain"
              />
            </TouchableOpacity>
          </View>

          <Spacer space={SH(20)} />

          <TextField
            style={styles.placeholder}
            placeholder={strings.addresses.apartment}
            textStyle={styles.placeholderText}
            placeholderTextColor={COLORS.secondary}
          />

          <Spacer space={SH(15)} />

          <TextField
            style={styles.placeholder}
            placeholder={strings.addresses.floor}
            textStyle={styles.placeholderText}
            placeholderTextColor={COLORS.secondary}
          />

          <Spacer space={SH(20)} />

          <Text style={styles.subHeadingText}>
            {strings.addresses.addLabel}
          </Text>

          <Spacer space={SH(20)} />

          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={4}
          />

          <Spacer space={SH(30)} />

          <Button
            title={strings.buttonText.save}
            onPress={() => navigate(NAVIGATION.addresses)}
          />

          <Spacer space={SH(30)} />
        </View>
      </RBSheet>

      <Modal isVisible={isModalVisible}>
        <>
          <View style={styles.modalHeader}>
            <Text style={styles.modalHeaderText}>Add Address</Text>
            <TouchableOpacity onPress={closeModal}>
              <Image
                source={cross}
                resizeMode="contain"
                style={styles.closeIcon}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.modalBackground}>
            <Text style={styles.lineText}>
              {strings.AddShippingAddress.address1}
            </Text>
            <TextField
              style={styles.topPlaceHolders}
              placeholder={strings.AddShippingAddress.streets}
            />

            <Spacer space={SH(15)} />

            <Text style={styles.lineText}>
              {strings.AddShippingAddress.address2}
            </Text>
            <TextField
              style={styles.topPlaceHolders}
              placeholder={strings.AddShippingAddress.apartment}
            />

            <Spacer space={SH(15)} />

            <View style={styles.nameView}>
              <View style={{ width: "48%" }}>
                <Text style={styles.lineText}>
                  {strings.AddShippingAddress.zipcode}
                </Text>
                <TextField
                  style={styles.topPlaceHolders}
                  keyboardType="numeric"
                  placeholder={"Enter your zip code"}
                  onChangeText={(newText) => setZipCode(newText)}
                />
              </View>

              <View style={{ width: "48%" }}>
                <Text style={styles.lineText}>
                  {" "}
                  {strings.AddShippingAddress.city}
                </Text>
                <TextField
                  style={styles.topPlaceHolders}
                  placeholder={"Enter your city"}
                  onChangeText={(newText) => setCity(newText)}
                />
              </View>
            </View>

            <Spacer space={SH(15)} />

            <Text style={styles.lineText}>
              {strings.AddShippingAddress.note}
            </Text>
            <TextField
              style={styles.topPlaceHolders}
              placeholder={strings.AddShippingAddress.note}
            />

            <Spacer space={SH(25)} />

            <Button title={strings.buttonText.save} onPress={closeModal} />
          </View>
        </>
      </Modal>
    </ScreenWrapper>
  );
}
