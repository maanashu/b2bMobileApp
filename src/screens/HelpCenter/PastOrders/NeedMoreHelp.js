import React, { useRef, useState } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Spacer, ScreenWrapper, Button, NameHeaderCoins } from "@/components";
import { strings } from "@/localization";
import { SH, SW, COLORS, SF } from "@/theme";
import {
  dropdownIcon,
  email_chat,
  Fonts,
  gallery_image,
  import_picture,
  ProfileUser,
} from "@/assets";

import { moderateScale, scale, verticalScale } from "react-native-size-matters";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "@/selectors/UserSelectors";
import { SupportSelector } from "@/selectors/SupportSelectors";
import { addNewTicket, getSubjects } from "@/actions/SupportAction";
import DropDownPicker from "react-native-dropdown-picker";
import { ApiSupportInventory } from "@/Utils/APIinventory";
import ActionSheet from "react-native-actionsheet";
import ImagePicker from "react-native-image-crop-picker";
import axios from "axios";
import { Toast } from "react-native-toast-message/lib/src/Toast";

export function NeedMoreHelp(props) {
  const dispatch = useDispatch();
  const actionRef = useRef();

  const getData = useSelector(SupportSelector);
  const getUserData = useSelector(getUser);

  const [subjectModalOpen, setSubjectModelOpen] = useState(false);
  const [subjectModalValue, setSubjectModalValue] = useState(null);
  const [firstname, setfirstname] = useState(
    getUserData?.user?.payload?.user_profiles?.firstname
  );
  const [email, setEmail] = useState(getUserData?.user?.payload?.email);
  const [notes, setNotes] = useState("");
  const [supportImage, setSupportImage] = useState("");
  const [doc, setDoc] = useState("");
  const token =
    getUserData?.user?.payload?.token ?? getUserData?.registered?.token;

  const headingName =
    props?.route?.params?.data == "support"
      ? "Report other issues"
      : props?.route?.params?.name;

  const request = props?.route?.params?.data;
  // const subjectData = () => {
  //   const arr = [];
  //   const get = getData?.subject.map((item) => {
  //     arr.push(item?.name?.trim());
  //     setSubjectItems(arr);
  //   });
  // };
  const [subjectItems, setSubjectItems] = useState([]);

  // const handleDocumentSelection = useCallback(async () => {
  //   try {
  //     const response = await DocumentPicker.pick({
  //       presentationStyle: "fullScreen",
  //       allowMultiSelection: true,
  //     });

  //     setFileResponse(response);
  //     setisBottomViewVisible(false);
  //   } catch (err) {
  //   }
  // }, []);

  const SubjectBody = {
    page: 1,
    limit: 10,
  };
  useEffect(() => {
    dispatch(getSubjects(SubjectBody));
    getSubjectArray();
  }, []);

  // submit handler
  const reportIssueHandler = () => {
    if (!email) {
      Toast.show({
        position: "bottom",
        type: "error_toast",
        text2: strings.validation.enterEmail,
        visibilityTime: 1500,
      });
    } else if (!subjectModalValue) {
      Toast.show({
        position: "bottom",
        type: "error_toast",
        text2: strings.validation.subject,
        visibilityTime: 1500,
      });
    } else if (!notes) {
      Toast.show({
        position: "bottom",
        type: "error_toast",
        text2: strings.validation.enterDescription,
        visibilityTime: 1500,
      });
    } else if (!token) {
      Toast.show({
        position: "bottom",
        type: "error_toast",
        text2: strings.validation.token,
        visibilityTime: 1500,
      });
    } else {
      if (request === "refund") {
        const data = {
          subject_id: subjectModalValue,
          email: email,
          name: firstname,
          notes: notes,
          document_url: doc,
          type: "refund",
          order_id: 24,
        };
        dispatch(addNewTicket(data));
      } else {
        const data = {
          subject_id: subjectModalValue,
          email: email,
          name: firstname,
          notes: notes,
          document_url: doc,
          type: "support",
        };
        dispatch(addNewTicket(data));
      }
    }
  };

  // submit handler

  const getSubjectArray = () => {
    if (getData?.subject?.length > 0) {
      const arr = [];
      const get = getData?.subject.map((item) => {
        arr.push({ label: item?.name?.trim(), value: item.id });
      });
      setSubjectItems(arr);
    }
  };

  const openPickerHandler = (index) => {
    if (index === 0) {
      cameraOpenPicker();
    } else if (index === 1) {
      galleryOpenPicker();
    }
  };

  const galleryOpenPicker = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      uploadImage(image);
      setSupportImage(image.path);
    });
  };

  const cameraOpenPicker = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      uploadImage(image);
      setSupportImage(image.path);
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
          // doc = resp.data.payload.document;
          setDoc(resp.data.payload.document);
        }
      })
      .catch((error) => {});
  };

  return (
    <ScreenWrapper>
      <NameHeaderCoins title={headingName} backRequired />
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        style={styles.mainContainer}
      >
        <Spacer space={SH(30)} />

        <Text style={styles.heading}>{headingName}</Text>

        <Spacer space={SH(10)} />

        <Text style={styles.subHeading}>{strings.helpCenter.ourGateway}</Text>

        <Spacer space={SH(50)} />

        {/* <View style={styles.imageTextView}>
          <Image
            source={ProfileUser}
            style={styles.userIcon}
            resizeMode="contain"
          />
          <TextInput
            placeholder="Enter your Name here"
            selectTextOnFocus={false}
            style={styles.input}
            value={firstname}
            placeholderTextColor={COLORS.black}
          />
        </View> */}
        <View style={styles.profileDataCon}>
          <View style={styles.userAddCon}>
            <Image source={ProfileUser} style={styles.userIcon} />
            <Text style={styles.MichaelFlowers}>{firstname}</Text>
          </View>
        </View>

        <Spacer space={SH(20)} />

        <View style={styles.profileDataCon}>
          <View style={styles.imageTextView}>
            <Image source={email_chat} style={styles.userIcon} />
            <TextInput
              value={email}
              style={styles.input}
              onChangeText={setEmail}
              selectTextOnFocus={false}
              placeholder={"abc@gmail.com"}
            />
          </View>
        </View>

        <Spacer space={SH(20)} />

        {/* <SelectDropdown
          defaultButtonText="Select Subject"
          buttonTextStyle={{
            flex: 1,
            alignSelf: "center",
            color: COLORS.darkGrey,
            fontSize: SF(14),
            fontFamily: Fonts.Italic,
            textAlign: "left",
            paddingHorizontal: SW(5),
          }}
          renderDropdownIcon={() => (
            <Icon
              name={"sort-down"}
              color="black"
              size={scale(10)}
              style={{ alignSelf: "center", paddingRight: SW(15) }}
            />
          )}
          data={subjectItems}
          buttonStyle={{
            width: "100%",
            alignSelf: "center",
            borderRadius: SW(5),
            backgroundColor: COLORS.placeHolder,
          }}
          onSelect={(selectedItem, index) => {
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
        /> */}
        <DropDownPicker
          ArrowUpIconComponent={({ style }) => (
            <Image source={dropdownIcon} style={styles.dropDownIcon2} />
          )}
          ArrowDownIconComponent={({ style }) => (
            <Image source={dropdownIcon} style={styles.dropDownIcon} />
          )}
          style={styles.dropdown}
          containerStyle={[
            styles.containerStyle,
            { zIndex: Platform.OS === "ios" ? 100 : 2 },
          ]}
          open={subjectModalOpen}
          value={subjectModalValue}
          items={subjectItems}
          setOpen={() => {
            getSubjectArray();
            setSubjectModelOpen(!subjectModalOpen);
          }}
          setValue={setSubjectModalValue}
          setItems={setSubjectItems}
          placeholder="Select subject"
          placeholderStyle={{
            color: COLORS.secondary,
            fontFamily: Fonts.Italic,
          }}
        />

        <Spacer space={SH(20)} />

        <View style={styles.profileDataCon}>
          <View style={styles.imageTextView}>
            <TextInput
              value={notes}
              onChangeText={setNotes}
              placeholder="Write here"
              style={styles.textArea}
            />
          </View>
        </View>

        <Spacer space={SH(20)} />

        {/* <TouchableOpacity
          style={styles.cameraInput}
          onPress={handleDocumentSelection}
        >
          <View style={styles.iconView}>
            <Image source={gallery_image} style={styles.galleryIcon} />
            <Image source={import_picture} style={styles.uploadIcon} />
            <Text style={styles.uploadText}>
              {strings.helpCenter.uploadYourFilesHere}
            </Text>
          </View>
        </TouchableOpacity> */}

        <View style={styles.cameraInput}>
          <TouchableOpacity onPress={() => actionRef.current.show()}>
            {supportImage ? (
              <View
                style={[
                  styles.cameraInput2,
                  { zIndex: Platform.OS === "ios" ? -20 : 0 },
                ]}
              >
                <TouchableOpacity onPress={() => actionRef.current.show()}>
                  <Image
                    source={{ uri: supportImage }}
                    style={styles.cameraInput2}
                    resizeMode="cover"
                  />
                </TouchableOpacity>
              </View>
            ) : (
              <View style={styles.iconView}>
                <Image source={gallery_image} style={styles.galleryIcon} />
                <Image source={import_picture} style={styles.uploadIcon} />
                <Text style={styles.uploadText}>
                  {strings.supportTicket.uploadFile}
                </Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
        <Spacer space={SH(50)} />

        <Button
          onPress={reportIssueHandler}
          style={styles.selectedButton}
          title={strings.buttonText.submit}
          textStyle={styles.selectedText}
        />
        <Spacer space={SH(10)} />
      </KeyboardAwareScrollView>
      <ActionSheet
        ref={actionRef}
        title={strings.supportTicket.actionTitle}
        options={[
          strings.supportTicket.cameraOption,
          strings.supportTicket.galleryOption,
          strings.supportTicket.cancelOption,
        ]}
        cancelButtonIndex={2}
        destructiveButtonIndex={1}
        onPress={(index) => openPickerHandler(index)}
      />
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: SW(20),
    backgroundColor: COLORS.white,
  },
  profileDataCon: {
    display: "flex",
    flexDirection: "column",
    width: windowWidth * 0.94,
    alignSelf: "center",
  },
  nameText: {
    fontFamily: Fonts.Regular,
    fontSize: SF(12),
    color: COLORS.light_grey,
  },
  MichaelFlowers: {
    fontSize: SF(14),
    fontFamily: Fonts.Regular,
    color: COLORS.dark_gray,
    paddingLeft: moderateScale(5),
  },
  textArea: {
    backgroundColor: COLORS.textInputBackground,
    borderColor: COLORS.transparent,
    borderRadius: 15,
    height: SH(120),
    textAlignVertical: "top",
    fontFamily: Fonts.Italic,
    flex: 1,
  },
  userAddCon: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: moderateScale(20),
    height: SH(55),
    borderRadius: 5,
    backgroundColor: COLORS.placeholder,
  },

  heading: {
    fontSize: SF(18),
    color: COLORS.black,
    fontFamily: Fonts.MaisonMonoBold,
  },
  subHeading: {
    fontSize: SF(13),
    color: COLORS.text,
    fontFamily: Fonts.Regular,
  },
  descriptionInput: {
    borderBottomWidth: 0,
    backgroundColor: COLORS.placeHolder,
    borderRadius: 10,
    height: SH(150),
    paddingHorizontal: SH(20),
    paddingVertical: SH(15),
    textAlignVertical: "top",
    fontSize: SF(14),
  },
  descriptionText: {
    fontFamily: Fonts.Regular,
    fontSize: SF(12),
  },

  cameraInput: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.light_blue,
    borderWidth: 2,
    borderColor: COLORS.primary,
    fontSize: scale(12),
    borderRadius: 10,
    fontStyle: "italic",
    borderStyle: "dashed",
    height: SH(100),
  },
  cameraInput2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: SH(80),
    width: SW(80),
  },
  iconView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  galleryIcon: {
    width: SW(23),
    height: SH(25),
  },
  uploadIcon: {
    width: SW(18),
    height: SH(18),
    marginHorizontal: moderateScale(5),
    marginVertical: moderateScale(2),
  },
  uploadText: {
    fontSize: SF(14),
    color: COLORS.text,
    marginVertical: moderateScale(2),
    fontFamily: Fonts.Regular,
  },
  selectedButton: {
    alignSelf: "center",
    backgroundColor: COLORS.primary,
    height: SH(50),
  },
  selectedText: {
    color: COLORS.white,
  },
  doubledEmailIcon: {
    width: SW(5),
    height: SW(5),
    resizeMode: "contain",
    paddingRight: 30,
  },

  imageTextView: {
    flexDirection: "row",
    paddingHorizontal: SW(16),
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: COLORS.placeholder,
    width: "100%",
  },
  input: {
    paddingLeft: SW(8),
    fontFamily: Fonts.Regular,
    fontSize: SF(13),
    flex: 1,
    height: SH(50),
    color: COLORS.darkGrey,
  },
  userIcon: {
    width: SW(18),
    height: SH(18),
    tintColor: COLORS.light_grey,
  },
  dropDownIcon: {
    width: SW(15),
    height: SW(15),
    resizeMode: "contain",
    paddingRight: 30,
  },
  dropDownIcon2: {
    width: SW(15),
    height: SW(15),
    resizeMode: "contain",
    paddingRight: 30,
  },
  dropdown: {
    width: SW(330),
    alignSelf: "center",
    backgroundColor: COLORS.textInputBackground,
    borderColor: "transparent",
    marginVertical: verticalScale(2),
    zIndex: Platform.OS === "ios" ? 100 : 0,
    fontStyle: "italic",
  },
  containerStyle: {
    alignSelf: "center",
    marginVertical: verticalScale(7),
    backgroundColor: COLORS.placeholder,
    borderRadius: 5,
  },
});
