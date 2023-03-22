import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import { Spacer, ScreenWrapper, TextField, Button } from "@/components";
import { strings } from "@/localization";
import { SH, SW, COLORS, SF } from "@/theme";
import SelectDropdown from "react-native-select-dropdown";
import {
  email_chat,
  Fonts,
  gallery_image,
  import_picture,
  ProfileUser,
  uparrow,
  uploadPic,
} from "@/assets";

import { moderateScale, scale, verticalScale } from "react-native-size-matters";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import DocumentPicker from "react-native-document-picker";

import DropDownPicker from "react-native-dropdown-picker";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";
import Icon from "react-native-vector-icons/FontAwesome5";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { string } from "prop-types";
import { useDispatch } from "react-redux";
import { getSubjects } from "@/actions/SupportAction";

export function SupportTicket() {
  const dispatch = useDispatch();

  const getData = useSelector(getSupport);
  const getUserData = useSelector(getuser);
  console.log("getting subjects", getData?.subject);
  const [subjectItems, setSubjectItems] = useState([]);

  const dropdownData = ["abc", "def"];

  const [fileResponse, setFileResponse] = useState([]);
  const [isBottomViewVisible, setisBottomViewVisible] = useState(false);
  useEffect(() => {
    dispatch(getSubjects());
    console.log("dispatch");
  }, []);

  const getSubjectArray = () => {
    if (getData?.subject.length > 0) {
      const arr = [];
      const get = getData?.subject.map((item) => {
        arr.push({ label: item?.name?.trim(), value: item.id });
      });
      setSubjectItems(arr);
    }
  };

  const handleDocumentSelection = useCallback(async () => {
    try {
      const response = await DocumentPicker.pick({
        presentationStyle: "fullScreen",
        allowMultiSelection: true,
      });

      console.log("doc picker resp", response);
      setFileResponse(response);
      setisBottomViewVisible(false);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <ScreenWrapper>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        style={styles.mainContainer}
      >
        <Spacer space={SH(10)} />

        <Text style={styles.heading}>{strings.helpCenter.openNewTicket}</Text>

        <Spacer space={SH(10)} />

        <Text style={styles.subHeading}>{strings.helpCenter.ourGateway}</Text>

        <Spacer space={SH(50)} />

        <View style={styles.imageTextView}>
          <Image
            source={ProfileUser}
            style={styles.userIcon}
            resizeMode="contain"
          />
          <TextInput
            placeholder="Enter your Name here"
            selectTextOnFocus={false}
            style={styles.input}
          />
        </View>

        <Spacer space={SH(20)} />

        <View style={styles.imageTextView}>
          <Image
            source={email_chat}
            style={styles.userIcon}
            resizeMode="contain"
          />
          <TextInput
            placeholder="Enter your email here"
            selectTextOnFocus={false}
            style={styles.input}
          />
        </View>

        <Spacer space={SH(20)} />

        <SelectDropdown
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
          data={dropdownData}
          buttonStyle={{
            width: "100%",
            alignSelf: "center",
            borderRadius: SW(5),
            backgroundColor: COLORS.placeHolder,
          }}
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

        <TextField
          style={styles.descriptionInput}
          placeholder="Write here"
          textStyle={styles.descriptionText}
        />

        <Spacer space={SH(20)} />

        <TouchableOpacity
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
        </TouchableOpacity>

        <Spacer space={SH(50)} />

        <Button
          onPress={() =>
            props.route.params.data == "Need more help"
              ? navigate(NAVIGATION.helpCenter)
              : navigate(NAVIGATION.ageChecked, {
                  data: props.route.params.data,
                })
          }
          style={styles.selectedButton}
          title={strings.buttonText.submit}
          textStyle={styles.selectedText}
        />
        <Spacer space={SH(10)} />
      </KeyboardAwareScrollView>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: SW(20),
    backgroundColor: COLORS.white,
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
  },
  userIcon: {
    width: SW(18),
    height: SH(18),
    tintColor: COLORS.light_grey,
  },
  dropDownIcon: {
    width: SW(5),
    height: SW(5),
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
