import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { styles } from "./SendInquiry.styles";
import { strings } from "@/localization";
import { CompanyDetailView, TextField } from "@/components";
import { useState } from "react";
import { ScreenWrapper, Spacer } from "@/components";
import { COLORS } from "@/theme/Colors";
import { SH, SW } from "@/theme/ScalerDimensions";
import ImageCropPicker from "react-native-image-crop-picker";
import Modal from "react-native-modal";
import { goBack } from "@/navigation/NavigationRef";
import { Button } from "@/components";
import {
  import_picture,
  gallery_image,
  close,
  checkBox,
  selectedCheckBox,
  backArrow,
} from "@/assets";
import { ShadowStyles } from "@/theme";
import { getProductSelector } from "@/selectors/ProductSelectors";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { ApiSupportInventory } from "@/Utils/APIinventory";
import axios from "axios";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { getUser } from "@/selectors/UserSelectors";
import Icon from "react-native-vector-icons/FontAwesome5";
import { scale } from "react-native-size-matters";
import { sendInquiry } from "@/actions/SupportAction";
import { isLoadingSelector } from "@/selectors/StatusSelectors";
import { TYPES } from "@/Types/Types";
import { Loader } from "@/components/Loader";

export function SendInquiry() {
  const dispatch = useDispatch();
  const ProductDetail = useSelector(getProductSelector);
  const user = useSelector(getUser);
  const [isModalVisible, setModalVisible] = useState(false);
  const [productImage, setProductImage] = useState();
  const [quantity, setQuantity] = useState("");
  const [notes, setNotes] = useState("");
  const [doc, setDoc] = useState("");
  const [agree, setagree] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "5-50", value: "5-50" },
    { label: "50-100", value: "50-100" },
  ]);
  const [textLength, setTextLength] = useState();

  const checkLimit = (limit) => {
    var Value = limit?.length.toString();
    setTextLength(Value);
    setNotes(limit);
  };
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const closeModal = () => {
    setModalVisible(!isModalVisible);
  };
  const isLoading = useSelector((state) =>
    isLoadingSelector([TYPES.ADD_NEW_TICKET], state)
  );

  const OpenGallery = () => {
    ImageCropPicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      uploadImage(image);
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
      uploadImage(image);
      setProductImage(image.path);
      setModalVisible(!isModalVisible);
    });
  };
  const uploadImage = async (image) => {
    const formData = new FormData();
    formData.append("document", {
      uri: image.path,
      type: image.mime,
      name: image.path,
    });
    const endpoint = ApiSupportInventory.uploadSupportDoc;
    await axios({
      url: endpoint,
      method: "POST",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
        "app-name": "b2b",
      },
    })
      .then((resp) => {
        if (resp?.status === 200) {
          setDoc(resp.data.payload.document);
          console.log("uploaded");
        }
      })
      .catch((error) => {});
  };

  const CheckBox = () => {
    setagree(!agree);
  };
  console.log("agree", agree);
  const inquiryBody = {
    subject_id: "5",
    email: user?.user?.payload?.email,
    name: user?.user?.payload?.user_profiles?.firstname,
    notes: notes,
    type: "support",
    product_id: ProductDetail?.productDetail?.product_detail?.id.toString(),
    seller_id:
      ProductDetail?.productDetail?.product_detail?.supplies?.[0]?.seller_id,
    document_url: doc,
  };

  const submitInquiry = () => {
    if (!doc) {
      Toast.show({
        position: "bottom",
        type: "error_toast",
        text2: strings.sendInquiry.addImage,
        visibilityTime: 2000,
      });
    } else if (!notes) {
      Toast.show({
        position: "bottom",
        type: "error_toast",
        text2: strings.sendInquiry.notes,
        visibilityTime: 2000,
      });
    } else if (!quantity) {
      Toast.show({
        position: "bottom",
        type: "error_toast",
        text2: strings.sendInquiry.quantity,
        visibilityTime: 2000,
      });
    } else {
      dispatch(sendInquiry(inquiryBody));
    }
  };
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
          <Text style={styles.headerText}> {"Send Inquiry"}</Text>
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
            <Text style={styles.agreeText}>{"About Company"}</Text>
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
          <CompanyDetailView
            title={
              ProductDetail?.productDetail?.product_detail?.supplies[0]
                ?.seller_details?.user_profiles?.organization_name
            }
            profilePhoto={{
              uri: ProductDetail?.productDetail?.product_detail?.supplies[0]
                ?.seller_details?.user_profiles?.profile_photo,
            }}
            locationText={
              ProductDetail?.productDetail?.product_detail?.supplies[0]
                ?.seller_details?.user_locations[0]?.city +
              ", " +
              ProductDetail?.productDetail?.product_detail?.supplies[0]
                ?.seller_details?.user_locations[0]?.country
            }
            since={moment(
              ProductDetail?.productDetail?.product_detail?.supplies[0]
                ?.seller_details?.created_at,
              "YYYY"
            ).year()}
            rating={
              ProductDetail?.productDetail?.product_detail?.supplies[0]
                ?.seller_details?.rating?.rating
            }
          />
          <Spacer space={SH(10)} />
          <View style={styles.productImage}>
            <Image
              resizeMode="contain"
              source={{
                uri: ProductDetail?.productDetail?.product_detail?.image,
              }}
              style={styles.productImageStyle}
            />
            <Spacer horizontal space={SH(10)} />

            <Text style={styles.productName}>
              {ProductDetail?.productDetail?.product_detail?.name}
            </Text>
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
              <TextField
                keyboardType="numeric"
                style={styles.quantityInput}
                onChangeText={setQuantity}
              />
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

          <View
            style={{
              height: SH(310),
              backgroundColor: COLORS.placeholder,
              flex: 1,
              borderRadius: SW(5),
            }}
          >
            <TextField
              maxLength={500}
              multiline={true}
              editable={true}
              scrollEnabled={true}
              style={styles.input}
              onChangeText={(limit) => checkLimit(limit)}
            />
            <Text style={styles.inputLimitText}>
              {textLength}
              {"/ 500"}
            </Text>
          </View>
          <Spacer space={SH(5)} />

          {productImage && (
            <>
              <Spacer space={SH(10)} />
              <Image source={{ uri: productImage }} style={styles.storedPic} />
            </>
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
              <Icon
                name={agree ? "check-square" : "square"}
                color="black"
                size={scale(15)}
              />
            </TouchableOpacity>
            <View style={{ flex: 1, marginLeft: SW(5) }}>
              <Text style={styles.agreeText}>
                {" "}
                Also send inquiries to: all certified Suppliers of{" "}
                {ProductDetail?.productDetail?.product_detail?.name}.
              </Text>
            </View>
          </View>
          <Spacer space={SH(5)} />
          <View style={{ paddingLeft: SW(27) }}>
            <Text style={styles.lastText}>
              You are inquiring to all verified suppliers in the{" "}
              {ProductDetail?.productDetail?.product_detail?.name}. Make sure
              your messages applies to all suppliers in this category, not an
              individual supplier.
            </Text>
          </View>
          <Spacer space={SH(25)} />
          <Button
            title={"Send"}
            style={styles.buttonStyle}
            onPress={submitInquiry}
          />
          <Spacer space={SH(25)} />
        </View>
      </ScrollView>
      {isLoading && <Loader />}
    </ScreenWrapper>
  );
}
