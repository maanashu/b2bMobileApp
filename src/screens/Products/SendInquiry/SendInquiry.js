import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { styles } from "./SendInquiry.styles";
import { strings } from "@/localization";
import { TextField } from "@/components";
import { useState } from "react";
import { ScreenWrapper, Spacer } from "@/components";
import { COLORS } from "@/theme/Colors";
import { SH, SW } from "@/theme/ScalerDimensions";
import ImageCropPicker from "react-native-image-crop-picker";
import Modal from "react-native-modal";
import { goBack } from "@/navigation/NavigationRef";
import { Button } from "@/components";
import {
  productss,
  location,
  star,
  clock,
  yewiCertified,
  yewiLogo,
  import_picture,
  gallery_image,
  close,
  checkBox,
  selectedCheckBox,
  backArrow,
} from "@/assets";
import { ShadowStyles } from "@/theme";

export function SendInquiry() {
  let pictures = [];
  // console.log("stored pictures", pictures);

  const [isModalVisible, setModalVisible] = useState(false);
  const [productImage, setProductImage] = useState();
  const [agree, setagree] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "5-50", value: "5-50" },
    { label: "50-100", value: "50-100" },
  ]);

  // const savePicture = () => {
  //   pictures.push();
  //   console.log("images stored in array-->", pictures);
  // };
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const closeModal = () => {
    setModalVisible(!isModalVisible);
  };

  const OpenGallery = () => {
    ImageCropPicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      setProductImage(image.path);
      setModalVisible(!isModalVisible);
    });
  };

  const OpenCamera = () => {
    ImageCropPicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      setProductImage(image.path);
      setModalVisible(!isModalVisible);
    });
  };

  const CheckBox = () => {
    setagree(!agree);
  };
  // useEffect(() => {
  //   savePicture();
  // }, [productImage]);

  return (
    <ScreenWrapper>
      <View
        style={{
          height: SH(60),
          backgroundColor: COLORS.white,

          ...ShadowStyles.shadow,
          flexDirection: "row",
          paddingHorizontal: 20,
        }}
      >
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
          onPress={() => goBack()}
        >
          <Image
            resizeMode="contain"
            source={backArrow}
            style={{ height: 30, width: 30 }}
          />
          <Text style={styles.headerText}> Send Inquiry</Text>
        </TouchableOpacity>
      </View>

      <Spacer space={SH(5)} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingHorizontal: SW(20) }}
      >
        <Spacer space={SH(5)} />

        <View style={styles.yewiView}>
          <View style={styles.topView}>
            <Text style={styles.agreeText}>About Company</Text>
            <View style={styles.topButtonView}>
              <TouchableOpacity style={styles.topButtonLeft}>
                <Text style={styles.leftButtonText}>
                  {strings.sendInquiry.follow}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.topButtonRight}>
                <Text style={styles.rightButtonText}>
                  {" "}
                  {strings.sendInquiry.visitStore}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <Spacer space={SH(10)} />

          <View style={styles.yewiInnerView}>
            <Image source={yewiLogo} style={styles.logoYewi} />
            <View style={{ paddingHorizontal: SW(10) }}>
              <Text style={styles.yewiHeadingText}>
                Yiwu Leqi E-Commerce Firm
              </Text>
              <View style={styles.yewiSmallView}>
                <Image source={yewiCertified} style={styles.certified} />
                <View style={styles.yewiDirection}>
                  <Image source={location} style={styles.yewiIcons} />
                  <Text style={styles.yewiSmallText}> Miami, USA</Text>
                  <Image source={star} style={styles.yewistar} />
                  <Text style={styles.yewiSmallText}> 4.5</Text>
                  <Image source={clock} style={styles.yewiClock} />
                  <Text style={styles.yewiSmallText}> Since 2022</Text>
                </View>
              </View>
              <Spacer space={SH(5)} />
              <Image source={productss} style={styles.productImage} />
            </View>
          </View>
        </View>

        {/* second view */}

        <View>
          <Spacer space={SH(15)} />

          <View style={styles.QuantityView}>
            <View>
              <Text style={styles.productQuantityText}>
                {strings.sendInquiry.quantity}
              </Text>
              <TextField keyboardType="numeric" style={styles.quantityInput} />
            </View>

            <View>
              <Text style={styles.productQuantityText}>
                {strings.sendInquiry.units}
              </Text>

              <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                placeholder="Pieces"
                style={{
                  borderWidth: 0,
                  width: SW(150),
                  backgroundColor: COLORS.placeholder,
                }}
              />
            </View>
          </View>

          <Spacer space={SH(20)} />

          <TextField
            maxLength={1500}
            multiline={true}
            editable={true}
            scrollEnabled={true}
            style={styles.input}
          />

          <Spacer space={SH(5)} />

          {productImage ? (
            <Image source={{ uri: productImage }} style={styles.storedPic} />
          ) : (
            <View></View>
          )}

          <TouchableOpacity onPress={toggleModal} style={styles.dashedView}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image source={gallery_image} style={styles.galleryImage} />
              <Image source={import_picture} style={styles.importPicture} />
              <Text style={styles.addHereText}>
                {strings.sendInquiry.addHere}
              </Text>
            </View>
          </TouchableOpacity>

          <Modal isVisible={isModalVisible}>
            <View style={styles.modalBackground}>
              <TouchableOpacity onPress={closeModal}>
                <View style={styles.closeView}>
                  <Image source={close} style={styles.closeIcon} />
                </View>
              </TouchableOpacity>
              <Button
                title={"Upload from Camera"}
                textStyle={styles.modalButtonText}
                onPress={OpenCamera}
              />
              <View style={{ marginTop: SH(20) }}>
                <Button title={"Upload from Gallery"} onPress={OpenGallery} />
              </View>
            </View>
          </Modal>

          <Spacer space={SH(25)} />

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity onPress={CheckBox}>
              <Image
                source={agree ? selectedCheckBox : checkBox}
                style={{ height: SH(22), width: SW(20) }}
              />
            </TouchableOpacity>
            <View style={{ flex: 1, marginLeft: SW(5) }}>
              <Text style={styles.agreeText}>
                {" "}
                Also send inquiries to: all 13 certified Suppliers of PUMA Men's
                Tazon 6 Wide Sneaker.
              </Text>
            </View>
          </View>
          <Spacer space={SH(5)} />
          <View style={{ paddingLeft: SW(27) }}>
            <Text style={styles.lastText}>
              You are inquiring to all 13 verified suppliers in the PUMA Men's
              Tazon 6 Wide Sneaker. Make sure your messages applies to all
              suppliers in this category, not an individual supplier.
            </Text>
          </View>
          <Spacer space={SH(25)} />
          <Button
            title={"Send"}
            disabled={productImage == undefined ? true : false}
            style={styles.buttonStyle}
          />
          <Spacer space={SH(25)} />
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}
