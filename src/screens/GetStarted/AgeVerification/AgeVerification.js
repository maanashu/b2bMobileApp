import React, { useState, useEffect, useRef } from "react";
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
import { Toast } from "react-native-toast-message/lib/src/Toast";

import {
  documentsUpload,
  getDocumentTypes,
  businessDocumentUpload,
} from "@/actions/KycActions";
import { backArrow, conIdentity, cornerBorder, dummyIdCard } from "@/assets";
import { SH, COLORS } from "@/theme";
import { TYPES } from "@/Types/Types";
import { strings } from "@/localization";
import { getWalletUserProfile } from "@/actions/UserActions";
import { isLoadingSelector } from "@/selectors/StatusSelectors";
import { Spacer, ScreenWrapper, Header, Button } from "@/components";

import { styles } from "@/screens/GetStarted/AgeVerification/AgeVerification.styles";
import { getKyc } from "@/selectors/KycSelector";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";
import ActionSheet from "react-native-actionsheet";
import { ApiUserInventory } from "@/Utils/APIinventory";
import { getUser as getuser } from "@/selectors/UserSelectors";
import { Loader } from "@/components/Loader";
import { getWallet } from "@/selectors/WalletSelector";

export function AgeVerification(props) {
  const frontRef = useRef(null);
  const backRef = useRef(null);
  const focus = useIsFocused();
  const dispatch = useDispatch();
  const getUser = useSelector(getuser);
  const getKycData = useSelector(getKyc);
  const screen = props?.route?.params?.screen;
  const uuid = getUser?.user?.payload?.uuid ?? getUser?.registered?.uuid;

  // console.log("uuid", getUser?.registered?.uuid);
  // console.log("uuid" + JSON.stringify(getUser?.user?.payload?.uuid));

  const [key, setKey] = useState("");
  const [open, setOpen] = useState(false);
  const [cardImage, setCardImage] = useState("");
  const [conformCard, setConfromCard] = useState("");
  const [identityData, setIdentityData] = useState([]);
  const [finalBackPhoto, setFinalBackPhoto] = useState("");
  const [filterDropDown, setFilterDropDown] = useState("");
  const [finalFrontPhoto, setFinalFrontPhoto] = useState("");
  const [firstImageLoadStart, setFirstImageLoadStart] = useState(false);
  const [secondImageLoadStart, setSecondImageLoadStart] = useState(false);

  useEffect(() => {
    if (focus) {
      dispatch(getWalletUserProfile(getUser?.userProfile?.unique_uuid));
      dispatch(getDocumentTypes());

      if (getKycData?.docType?.length > 0) {
        const arr = [];
        getKycData?.docType.map((item, index) => {
          arr.push({ key: index, label: item.label, value: item.name });
          setIdentityData(arr);
        });
      }
    }
  }, [open]);
  useEffect(() => {
    dispatch(getDocumentTypes());
  }, []);

  const walletData = useSelector(getWallet);
  console.log("walletData", walletData?.walletData?.payload?.type);

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
      .catch((error) => console.error(error));
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
      .catch((error) => console.error(error));
  };

  const submit = async () => {
    if (!filterDropDown) {
      Toast.show({
        position: "bottom",
        type: "error_toast",
        visibilityTime: 1500,
        text2: strings.ageVerification.chooseType,
      });
    } else if (!finalFrontPhoto) {
      Toast.show({
        position: "bottom",
        type: "error_toast",
        visibilityTime: 1500,
        text2: strings.ageVerification.frontPhoto,
      });
    } else if (!finalBackPhoto) {
      Toast.show({
        position: "bottom",
        type: "error_toast",
        visibilityTime: 1500,
        text2: strings.ageVerification.backPhoto,
      });
    } else {
      const data = {
        document_type: filterDropDown,
        document_1: finalFrontPhoto,
        document_2: finalBackPhoto,
      };
      // if (screen === "business") {
      //   const res = await dispatch(businessDocumentUpload(data, uuid));
      //   if (res?.type === "BUSINESS_DOCUMENTS_UPLOAD_SUCCESS") {
      //     dispatch(getWalletUserProfile(uuid));
      //     // navigate(NAVIGATION.connectBank);
      //     alert("connect bank");
      //   }
      // } else {
      if (screen === "business") {
        const res = await dispatch(businessDocumentUpload(data, uuid));
        if (res?.type === TYPES.BUSINESS_DOCUMENTS_UPLOAD_SUCCESS) {
          dispatch(getWalletUserProfile(uuid));
          navigate(NAVIGATION.connectBank);
        }
      } else {
        const res = await dispatch(documentsUpload(data, uuid));
        console.log("documentsUpload====", res);
        if (res?.type === "DOCUMENTS_UPLOAD_SUCCESS") {
          const walletres = await dispatch(getWalletUserProfile(uuid));
          console.log("getWalletUserProfile====", walletres);
          if (walletres?.type === "GET_WALLET_USER_SUCCESS") {
            if (walletData?.walletData?.payload?.type === "business") {
              navigate(NAVIGATION.businessRegistration);
            } else {
              navigate(NAVIGATION.connectBank);
            }
          }
          // }
        }
      }
    }
  };

  const isLoading = useSelector((state) =>
    isLoadingSelector([TYPES.DOCUMENTS_UPLOAD], state)
  );
  const isLoadingWallet = useSelector((state) =>
    isLoadingSelector([TYPES.GET_WALLET_USER], state)
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
      console.log("image path");
    });
  };

  const cameraFrontOpenPicker = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      uploadFrontDocument(image);
      console.log("image path");
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
      <Header title={strings.ageVerification.headerTitle} enableBackButton/>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Spacer space={SH(20)} />
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
            />
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

          <Button
            onPress={submit}
            pending={isLoading}
            title={strings.ageVerification.button}
          />
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
    </ScreenWrapper>
  );
}
