import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useIsFocused } from "@react-navigation/native";
import ImagePicker from "react-native-image-crop-picker";
import DropDownPicker from "react-native-dropdown-picker";

import {
  documentsUpload,
  getDocumentTypes,
  businessDocumentUpload,
  getPlaidToken,
} from "@/actions/KycActions";
import { conIdentity, cornerBorder, dummyIdCard } from "@/assets";
import { SH, COLORS } from "@/theme";
import { TYPES } from "@/Types/Types";
import { strings } from "@/localization";
import { getWalletUserProfile } from "@/actions/UserActions";
import { isLoadingSelector } from "@/selectors/StatusSelectors";
import { Spacer, ScreenWrapper, Button, NameHeader } from "@/components";

import { styles } from "@/screens/GetStarted/AgeVerification/AgeVerification.styles";
import { getKyc } from "@/selectors/KycSelector";
import ActionSheet from "react-native-actionsheet";
import { ApiUserInventory } from "@/Utils/APIinventory";
import { getUser as getuser } from "@/selectors/UserSelectors";
import { getWallet } from "@/selectors/WalletSelector";
import CustomToast from "@/components/CustomToast";

export function AgeVerification({ handleScreenChange, ...props }) {
  const { navigation } = props;
  const frontRef = useRef(null);
  const backRef = useRef(null);
  const focus = useIsFocused();
  const walletData = useSelector(getWallet);
  const dispatch = useDispatch();
  const getUser = useSelector(getuser);
  const getKycData = useSelector(getKyc);
  const screen = props?.route?.params?.screen;
  const uuid = getUser?.user?.payload?.uuid || getUser?.registered?.uuid;

  const [key, setKey] = useState("");
  const [open, setOpen] = useState(false);
  const [cardImage, setCardImage] = useState("");
  const [conformCard, setConfromCard] = useState("");
  const [finalBackPhoto, setFinalBackPhoto] = useState("");
  const [filterDropDown, setFilterDropDown] = useState("");
  const [finalFrontPhoto, setFinalFrontPhoto] = useState("");
  const [firstImageLoadStart, setFirstImageLoadStart] = useState(false);
  const [secondImageLoadStart, setSecondImageLoadStart] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("");

  const showToast = (message, type, autoHideDuration) => {
    setToastVisible(true);
    setToastMessage(message);
    setToastType(type);

    setTimeout(() => {
      setToastVisible(false);
    }, autoHideDuration);
  };
  const hideToast = () => {
    setToastVisible(false);
  };
  useEffect(() => {
    dispatch(getDocumentTypes());
  }, []);
  useEffect(() => {
    if (focus) {
      dispatch(getWalletUserProfile(getUser?.userProfile?.unique_uuid));
      dispatch(getDocumentTypes());
    }
  }, [open]);
  const documentNames = ["id_drivers_license", "id_passport", "doc_ssa"];

  const filteredDocuments = useMemo(
    () =>
      getKycData?.docType?.filter((document) =>
        documentNames?.includes(document?.name)
      ),
    [getKycData]
  );

  const identityData = useMemo(
    () =>
      filteredDocuments?.map((item, index) => ({
        key: index,
        label: item?.label,
        value: item?.name,
      })),
    [filteredDocuments]
  );

  const uploadFrontDocument = async (image) => {
    const formData = new FormData();
    formData.append("document", {
      uri: image.path,
      type: image.mime,
      name: image.path,
    });
    const endpoint = ApiUserInventory?.uploadDoc;
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
        if (resp?.data?.status_code === 200) {
          setFinalFrontPhoto(resp.data.payload.profile_photo);
          setCardImage(resp.data.payload.profile_photo);
          setKey("");
        }
      })
      .catch((error) => {});
  };

  const uploadBackDocument = async (image) => {
    const formData = new FormData();
    formData.append("document", {
      uri: image.path,
      type: image.mime,
      name: image.path,
    });
    const endpoint = ApiUserInventory.uploadDoc;
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
        if (resp?.data?.status_code === 200) {
          setFinalBackPhoto(resp.data.payload.profile_photo);
          setConfromCard(resp.data.payload.profile_photo);
          setKey("");
        }
      })
      .catch((error) => {});
  };

  const submit = async () => {
    if (!filterDropDown) {
      showToast(strings.validation.chooseType, "error", 2000);
    } else if (!finalFrontPhoto) {
      showToast(strings.validation.frontPhoto, "error", 2000);
    } else if (!finalBackPhoto) {
      showToast(strings.validation.backPhoto, "error", 2000);
    } else {
      const data = {
        document_type: filterDropDown,
        document_1: finalFrontPhoto,
        document_2: finalBackPhoto,
      };
      if (getUser?.walletProfile.step > 4) {
        dispatch(businessDocumentUpload(data, uuid))
          .then((res) => {
            dispatch(getWalletUserProfile(uuid));
            handleScreenChange(6);
            dispatch(getUserProfile(uuid?.registered?.uuid));
          })
          .catch((error) => console.log("business error: " + error));
      } else {
        dispatch(documentsUpload(data, uuid))
          .then((res) => {
            dispatch(getWalletUserProfile(uuid)).then((res) => {
              if (res?.payload?.type === "business") {
                handleScreenChange(9);
                dispatch(getUserProfile(uuid));
              } else {
                dispatch(getPlaidToken());
                handleScreenChange(6);
                dispatch(getUserProfile(uuid));
              }
            });
          })
          .catch((error) => {});
      }
    }
  };

  const isLoading = useSelector((state) =>
    isLoadingSelector([TYPES.DOCUMENTS_UPLOAD], state)
  );
  const isLoadingDocTypes = useSelector((state) =>
    isLoadingSelector([TYPES.GET_DOCUMENT_TYPES], state)
  );

  const openPickerFrontHandler = (index) => {
    if (index === 0) {
      cameraFrontOpenPicker();
    } else if (index === 1) {
      galleryFrontOpenPicker();
    } else {
    }
  };

  const openPickerBackHandler = (index) => {
    if (index === 0) {
      cameraBackOpenPicker();
    } else if (index === 1) {
      galleryBackOpenPicker();
    } else {
    }
  };

  const galleryFrontOpenPicker = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      uploadFrontDocument(image);
      setCardImage(image.path);
    });
  };

  const cameraFrontOpenPicker = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      uploadFrontDocument(image);
      setCardImage(image.path);
    });
  };

  const galleryBackOpenPicker = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      uploadBackDocument(image);
      setConfromCard(image.path);
    });
  };

  const cameraBackOpenPicker = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      uploadBackDocument(image);
      setConfromCard(image.path);
    });
  };

  return (
    <ScreenWrapper>
      <NameHeader title={strings.ageVerification.headerTitle} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.bodyContainer}>
          <TouchableOpacity>
            <Text style={styles.header}>
              {cardImage
                ? strings.ageVerification.header
                : strings.ageVerification.header1}
            </Text>
          </TouchableOpacity>

          <Spacer space={SH(5)} />
          <Text style={styles.smallLightText}>
            {strings.ageVerification.description}
          </Text>

          <Spacer space={SH(30)} />
          <View>
            <Text style={styles.smallDarkText}>
              {strings.ageVerification.chooseIdentity}
            </Text>
          </View>

          <Spacer space={SH(15)} />
          <View style={styles.flexRowContainer}>
            {Array.isArray(identityData) && identityData?.length > 0 && (
              <DropDownPicker
                open={open}
                setOpen={setOpen}
                items={identityData}
                showTickIcon={false}
                value={filterDropDown}
                style={styles.dropdown}
                setValue={setFilterDropDown}
                labelStyle={styles.listItemStyle}
                arrowIconStyle={styles.arrowIconStyle}
                containerStyle={styles.containerStyle}
                listItemLabelStyle={styles.listItemStyle}
                placeholderStyle={styles.placeholderTextStyle}
                keyExtractor={(item, index) => index.toString()}
                selectedItemLabelStyle={styles.selectedItemStyle}
                placeholder={strings.ageVerification.chooseIdentity}
                dropDownContainerStyle={styles.dropDownContainerStyle}
                listMode={"SCROLLVIEW"}
                scrollViewProps={{
                  nestedScrollEnabled: true,
                  scrollEnabled: true,
                  showsVerticalScrollIndicator: false,
                }}
              />
            )}
          </View>

          <Spacer space={SH(20)} backgroundColor={COLORS.transparent} />

          <View
            style={
              cardImage
                ? [styles.uploadIdCon, { borderColor: COLORS.blue }]
                : styles.uploadIdCon
            }
          >
            <View
              style={[
                styles.flexRowContainer,
                { justifyContent: "space-between", alignItems: "center" },
              ]}
            >
              <View style={styles.flexColumn}>
                {cardImage ? (
                  <Text style={[styles.smallDarkText, { color: COLORS.blue }]}>
                    {strings.ageVerification.upLoadId}
                  </Text>
                ) : (
                  <Text style={[styles.smallDarkText, { color: COLORS.text }]}>
                    {strings.ageVerification.upLoadId}
                  </Text>
                )}
              </View>

              <TouchableOpacity onPress={() => frontRef.current.show()}>
                <Image style={styles.cornerBorder} source={cornerBorder} />
                {cardImage ? (
                  <>
                    <Image
                      style={styles.takenImage}
                      source={{ uri: cardImage }}
                      onLoadEnd={() => setFirstImageLoadStart(false)}
                      onLoadStart={() => setFirstImageLoadStart(true)}
                    />
                    {firstImageLoadStart && (
                      <ActivityIndicator
                        color={COLORS.primary}
                        style={styles.takenImage}
                      />
                    )}
                  </>
                ) : (
                  <Image style={styles.dummyIdCard} source={dummyIdCard} />
                )}
              </TouchableOpacity>
            </View>
          </View>

          <Spacer space={SH(20)} />

          <View
            style={
              conformCard
                ? [styles.uploadIdCon, { borderColor: COLORS.blue }]
                : styles.uploadIdCon
            }
          >
            <View
              style={[
                styles.flexRowContainer,
                { justifyContent: "space-between", alignItems: "center" },
              ]}
            >
              <View style={styles.flexColumn}>
                {conformCard ? (
                  <Text style={[styles.smallDarkText, { color: COLORS.blue }]}>
                    {strings.ageVerification.confirmIdentity}
                  </Text>
                ) : (
                  <Text style={[styles.smallDarkText, { color: COLORS.text }]}>
                    {strings.ageVerification.confirmIdentity}
                  </Text>
                )}
              </View>

              <TouchableOpacity onPress={() => backRef.current.show()}>
                <Image style={styles.cornerBorder} source={cornerBorder} />
                {conformCard ? (
                  <>
                    <Image
                      style={styles.takenImage}
                      source={{ uri: conformCard }}
                      onLoadEnd={() => setSecondImageLoadStart(false)}
                      onLoadStart={() => setSecondImageLoadStart(true)}
                    />
                    {secondImageLoadStart && (
                      <ActivityIndicator
                        color={COLORS.primary}
                        style={styles.takenImage}
                      />
                    )}
                  </>
                ) : (
                  <Image style={styles.dummyIdCard} source={conIdentity} />
                )}
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ flex: 1 }} />

          <Button onPress={submit} title={strings.ageVerification.button} />
        </View>

        <ActionSheet
          ref={frontRef}
          options={[
            strings.supportTicket.cameraOption,
            strings.supportTicket.galleryOption,
            strings.supportTicket.cancelOption,
          ]}
          cancelButtonIndex={2}
          destructiveButtonIndex={1}
          title={strings.supportTicket.actionTitle}
          onPress={(index) => openPickerFrontHandler(index)}
        />

        <ActionSheet
          ref={backRef}
          options={[
            strings.supportTicket.cameraOption,
            strings.supportTicket.galleryOption,
            strings.supportTicket.cancelOption,
          ]}
          cancelButtonIndex={2}
          destructiveButtonIndex={1}
          title={strings.supportTicket.actionTitle}
          onPress={(index) => openPickerBackHandler(index)}
        />
      </ScrollView>
      {/* {isLoading && <Loader />} */}
      {/* {isLoadingDocTypes && <Loader />} */}
      <CustomToast
        visible={toastVisible}
        message={toastMessage}
        type={toastType}
        autoHideDuration={2000}
        onHide={hideToast}
      />
    </ScreenWrapper>
  );
}
