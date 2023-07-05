import React, { useCallback, useMemo, useRef } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  Keyboard,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  TYPES,
  editProfile,
  getUserProfile,
  sendEmailOtp,
  uploadProfileImage,
} from "@/actions/UserActions";
import { Button, ScreenWrapper, Spacer, TextField } from "@/components";
import { strings } from "@/localization";
import { styles } from "./UserInformation.styles";
import { COLORS, SH, SW, ShadowStyles } from "@/theme";
import {
  backArrow,
  camera,
  qrCode,
  forward,
  close,
  userIcon,
  email,
  call,
  calendar,
  pencil,
  rightArrowThin,
  crossBlack,
  roundCheck,
  verifiedCheck,
} from "@/assets";
import { ms, vs } from "react-native-size-matters";
import { goBack, navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";
import Modal from "react-native-modal";
import { useState } from "react";
import ImageCropPicker from "react-native-image-crop-picker";
import { CompanyInfo } from "./Components.js/FlatlistData";
import { getUser } from "@/selectors/UserSelectors";
import { Loader } from "@/components/Loader";
import { isLoadingSelector } from "@/selectors/StatusSelectors";
import BottomSheet from "@gorhom/bottom-sheet";
import RBSheet from "react-native-raw-bottom-sheet";
import {
  CodeField,
  Cursor,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { characterReg } from "@/Utils/validators";
import { width } from "deprecated-react-native-prop-types/DeprecatedImagePropType";

export function UserInformation() {
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  const bottomSheetRef = useRef(null);
  const codeFieldRef = useRef(null);
  const id = user?.user?.payload?.user_profiles?.id;

  const [isModalVisible, setModalVisible] = useState(false);
  const profile_photo = user?.getUserProfile?.user_profiles?.profile_photo;
  const [openModalState, setOpenModalState] = useState("");
  const [userImage, setUserImage] = useState(profile_photo);
  const [newFirstName, setNewFirstName] = useState(
    user?.getUserProfile?.user_profiles?.firstname
  );
  const [newLastName, setNewLastName] = useState(
    user?.getUserProfile?.user_profiles?.lastname
  );

  const uuid = user?.user?.payload?.uuid;
  const [value, setValue] = useState("");
  const CELL_COUNT = 5;
  const [prop, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const ssn =
    user?.getUser?.payload?.user_profiles?.ssn_number ||
    user?.user?.payload?.user_profiles?.ssn_number;
  const maskedSSN = ssn.substring(0, 5).replace(/./g, "_ ") + ssn.substring(5);
  const changeName = () => {
    if (!newFirstName) {
      alert(strings.validation.firstName);
    } else if (newFirstName && characterReg.test(newFirstName) === false) {
      alert(strings.validation.validFirstName);
    } else if (!newLastName) {
      alert(strings.validation.lastNameerror);
    } else if (newLastName && characterReg.test(newLastName) === false) {
      alert(strings.validation.validlastName);
    } else {
      bottomSheetRef.current.close();
      dispatch(
        editProfile(id, { firstname: newFirstName, lastname: newLastName })
      );
    }
  };
  const isLoading = useSelector((state) =>
    isLoadingSelector([TYPES.UPLOAD_PROFILE_IMAGE], state)
  );
  const isLoadingName = useSelector((state) =>
    isLoadingSelector([TYPES.EDIT_PROFILE], state)
  );

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
      setModalVisible(!isModalVisible);
      dispatch(uploadProfileImage(image)).then((res) => {
        if (res?.status_code === 200) {
          setUserImage(res?.payload?.profile_photo);
          const data = {
            profile_photo: res?.payload?.profile_photo,
          };
          dispatch(editProfile(id, data));
        }
      });
    });
  };

  const OpenCamera = () => {
    ImageCropPicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      setModalVisible(!isModalVisible);

      dispatch(uploadProfileImage(image)).then((res) => {
        if (res?.status_code === 200) {
          setUserImage(res?.payload?.profile_photo);
          const data = {
            profile_photo: res?.payload?.profile_photo,
          };
          dispatch(editProfile(id, data));
        }
      });
    });
  };

  const CompanyData = ({ item }) => (
    <View>
      <View style={styles.profileOptions}>
        <Text style={styles.headingText}>{item.heading}</Text>

        <View style={styles.rowView}>
          <View style={styles.rowView}>
            <Image
              source={item.icon}
              style={styles.iconStyle}
              resizeMode="contain"
            />
            <Text style={styles.titleText}>{item.title}</Text>
          </View>

          <TouchableOpacity onPress={() => navigate(NAVIGATION.companyInfo)}>
            <Image
              source={forward}
              style={styles.iconStyle}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        <Spacer space={SH(18)} />
      </View>
      <Spacer space={SH(5)} />
    </View>
  );

  const sendEmail = () => {
    bottomSheetRef.current.open();
    dispatch(sendEmailOtp(user?.getUserProfile?.email))
      .then((res) => {
        setPayloadId(res?.payload?.id);
      })
      .catch((error) => {});
  };

  const submitOtp = () => {
    alert("submitted");
  };

  return (
    <ScreenWrapper style={styles.container}>
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
              {strings.userInformation.back}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigate(NAVIGATION.qrCode)}>
            <Image
              resizeMode="contain"
              source={qrCode}
              style={styles.filterIcon}
            />
          </TouchableOpacity>
        </View>
      </View>

      <Spacer space={SH(1)} />

      <ScrollView style={styles.mainContainer}>
        <Spacer space={SH(25)} />
        {profile_photo ? (
          <View style={styles.UserImageBackground}>
            <Image
              source={{ uri: profile_photo }}
              style={styles.userImageStyle}
            />
            <TouchableOpacity
              style={styles.editProfileView}
              onPress={toggleModal}
            >
              <Image
                source={pencil}
                style={styles.pencilIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.imageBackground}>
            <TouchableOpacity
              onPress={toggleModal}
              style={{
                alignSelf: "center",
                marginBottom: vs(20),
              }}
            >
              <Image
                source={camera}
                resizeMode="stretch"
                style={{ height: 30, width: 36 }}
              />
            </TouchableOpacity>
          </View>
        )}

        <Spacer space={SH(20)} />

        <View style={styles.personalInfoView}>
          <Text style={styles.mainHeadingText}>
            {strings.userInformation.personalInfo}
          </Text>

          <Spacer space={SH(30)} />
          <View style={{ paddingHorizontal: ms(20) }}>
            {/* Name */}
            <View style={styles.profileOptions}>
              <Text style={styles.headingText}>{"Name"}</Text>
              <View
                style={[
                  styles.mainRowView,
                  { justifyContent: "space-between" },
                ]}
              >
                <View style={styles.mainRowView}>
                  <Image
                    source={userIcon}
                    style={[
                      styles.iconStyle,
                      {
                        height: SH(25),
                        width: SH(25),
                        marginRight: ms(2),
                        left: SW(-1.5),
                      },
                    ]}
                    resizeMode="contain"
                  />
                  <Text style={styles.titleText}>
                    {`${user?.getUserProfile?.user_profiles?.firstname}${" "}${
                      user?.getUserProfile?.user_profiles?.lastname
                    }`}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    setOpenModalState("name");
                    bottomSheetRef.current.open();
                  }}
                >
                  <Image
                    source={rightArrowThin}
                    resizeMode="contain"
                    style={styles.iconStyle}
                  />
                </TouchableOpacity>
              </View>

              <Spacer space={SH(18)} />
            </View>
            <Spacer space={SH(5)} />

            {/* Email */}
            <View style={styles.profileOptions}>
              <View style={styles.rowView}>
                <Text style={styles.headingText}>{"Email address"}</Text>
                {/* {user?.getUserProfile?.user_profiles?.is_email_verified ===
                  false && (
                  <TouchableOpacity
                    onPress={() => {
                      setOpenModalState("email");
                      sendEmail();
                    }}
                  >
                    <Text style={styles.verifyEmailText}>{"Verify Email"}</Text>
                  </TouchableOpacity>
                )} */}
              </View>
              <View style={styles.rowView}>
                <View style={{ ...styles.mainRowView, width: "90%" }}>
                  <Image
                    source={email}
                    style={styles.iconStyle}
                    resizeMode="contain"
                  />
                  <Text style={styles.titleText}>
                    {user?.user?.payload?.email}
                  </Text>
                </View>
                {user?.getUserProfile?.user_profiles?.is_email_verified ===
                  true && (
                  <Image
                    source={verifiedCheck}
                    resizeMode="contain"
                    style={{ height: SH(20), marginRight: SW(20) }}
                  />
                )}
              </View>

              <Spacer space={SH(18)} />
            </View>
            <Spacer space={SH(5)} />

            {/* phone number */}
            <View style={styles.profileOptions}>
              <Text style={styles.headingText}>{"Phone number"}</Text>
              <View style={styles.rowView}>
                <View style={styles.mainRowView}>
                  <Image
                    source={call}
                    style={styles.iconStyle}
                    resizeMode="contain"
                  />
                  <Text style={styles.titleText}>
                    {`${user?.user?.payload?.user_profiles?.phone_code} ${user?.user?.payload?.user_profiles?.phone_no}`}
                  </Text>
                </View>
                <Image
                  source={verifiedCheck}
                  style={styles.verifyCheck}
                  resizeMode="contain"
                />
              </View>

              <Spacer space={SH(18)} />
            </View>
            <Spacer space={SH(5)} />

            {/* ssn */}

            <View style={styles.profileOptions}>
              <Text style={styles.headingText}>{"SSN"}</Text>
              <View style={styles.rowView}>
                <View style={styles.mainRowView}>
                  <Image
                    source={calendar}
                    style={styles.iconStyle}
                    resizeMode="contain"
                  />
                  <Text style={styles.titleText}>
                    {`  ${maskedSSN || "_ _ _ _ _ _ _ _ _"}`}
                  </Text>
                </View>
                {user?.getUser?.payload?.user_profiles?.ssn_number != null ||
                  (user?.user?.payload?.user_profiles?.ssn_number != null && (
                    <Image
                      source={verifiedCheck}
                      style={styles.verifyCheck}
                      resizeMode="contain"
                    />
                  ))}
              </View>

              <Spacer space={SH(18)} />
            </View>
            <Spacer space={SH(5)} />

            {/* Date of Birth*/}
            <View style={styles.profileOptions}>
              <Text style={styles.headingText}>{"Date of Birth"}</Text>
              <View style={styles.mainRowView}>
                <Image
                  source={calendar}
                  style={styles.iconStyle}
                  resizeMode="contain"
                />
                <Text style={styles.titleText}>
                  {user?.user?.payload?.user_profiles?.dob}
                </Text>
              </View>

              <Spacer space={SH(18)} />
            </View>
            <Spacer space={SH(5)} />
          </View>
        </View>

        <Spacer space={SH(30)} />

        <View style={styles.personalInfoView}>
          <Text style={styles.mainHeadingText}>
            {strings.userInformation.companyInfo}
          </Text>

          <Spacer space={SH(30)} />

          <View style={{ paddingHorizontal: ms(20) }}>
            <FlatList
              data={CompanyInfo}
              renderItem={CompanyData}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>

        <Spacer space={SH(30)} />
      </ScrollView>

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
      <RBSheet
        animationType="slide"
        ref={bottomSheetRef}
        customStyles={{
          wrapper: styles.wrapperStyle,
          container: styles.containerStyle,
          draggableIcon: styles.containerStyle,
        }}
      >
        <View style={{ padding: SH(20) }}>
          <TouchableOpacity
            style={{ alignSelf: "flex-end" }}
            onPress={() => {
              setOpenModalState("");
              bottomSheetRef.current.close();
            }}
          >
            <Image
              source={crossBlack}
              resizeMode="contain"
              style={{ height: SH(30), width: SH(30) }}
            />
          </TouchableOpacity>

          <Spacer space={SH(15)} />

          {openModalState === "name" && (
            <View>
              <Text>{"First Name"}</Text>
              <TextField
                style={{
                  borderWidth: 0.5,
                  borderRadius: SH(5),
                  height: SH(45),
                  paddingHorizontal: SW(10),
                }}
                onChangeText={setNewFirstName}
                value={newFirstName}
              />
              <Spacer space={SH(15)} />
              <Text>{"Last Name"}</Text>
              <TextField
                style={{
                  borderWidth: 0.5,
                  borderRadius: SH(5),
                  height: SH(45),
                  paddingHorizontal: SW(10),
                }}
                onChangeText={setNewLastName}
                value={newLastName}
              />
              <Spacer space={SH(30)} />

              <Button
                title={strings.buttonText.submit}
                onPress={() => changeName()}
              />
            </View>
          )}

          {openModalState === "email" && (
            <View>
              <Text style={styles.labelTextStyle}>
                {"Verify your Email Address"}
              </Text>
              <Spacer space={SH(10)} backgroundColor={COLORS.transparent} />
              <CodeField
                ref={codeFieldRef}
                {...prop}
                value={value}
                autoFocus={true}
                returnKeyType={"done"}
                cellCount={CELL_COUNT}
                onChangeText={setValue}
                keyboardType={"number-pad"}
                textContentType={"oneTimeCode"}
                onSubmitEditing={Keyboard.dismiss}
                rootStyle={styles.alignSelfCenter}
                renderCell={({ index, symbol, isFocused }) => (
                  <View
                    key={index}
                    style={styles.cellRoot}
                    onLayout={getCellOnLayoutHandler(index)}
                  >
                    <Text style={styles.cellText}>
                      {symbol || (isFocused ? <Cursor /> : null)}
                    </Text>
                  </View>
                )}
              />

              <Spacer space={SH(100)} />
              <View>
                <Button title={"Verify"} onPress={() => submitOtp()} />
              </View>
            </View>
          )}
        </View>
      </RBSheet>
      {isLoading ? <Loader message="Updating Profile photo..." /> : null}
      {isLoadingName ? <Loader message="Updating..." /> : null}
    </ScreenWrapper>
  );
}
