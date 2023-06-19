import { useTheme } from "@react-navigation/native";
import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  TYPES,
  editProfile,
  getUserProfile,
  logout,
  uploadProfileImage,
} from "@/actions/UserActions";
import { Button, ScreenWrapper, Spacer } from "@/components";
import { strings } from "@/localization";
import { styles } from "./UserInformation.styles";
import { SH } from "@/theme";
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
} from "@/assets";
import { ms, vs } from "react-native-size-matters";
import { goBack, navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";
import Modal from "react-native-modal";
import { useState } from "react";
import ImageCropPicker from "react-native-image-crop-picker";
import { personalInfo, CompanyInfo } from "./Components.js/FlatlistData";
import { getUser } from "@/selectors/UserSelectors";
import { useEffect } from "react";
import { Loader } from "@/components/Loader";
import { isLoadingSelector } from "@/selectors/StatusSelectors";

export function UserInformation() {
  const user = useSelector(getUser);
  const [isModalVisible, setModalVisible] = useState(false);
  const profile_photo =
    user?.user?.payload?.user_profiles?.profile_photo ||
    user?.getUserProfile?.user_profiles?.profile_photo;

  const [userImage, setUserImage] = useState(profile_photo);
  const id = user?.user?.payload?.user_profiles?.id;
  const uuid = user?.user?.payload?.uuid;

  const isLoading = useSelector((state) =>
    isLoadingSelector([TYPES.UPLOAD_PROFILE_IMAGE], state)
  );

  const dispatch = useDispatch();

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
          dispatch(editProfile(id, data)).then((res) => {
            dispatch(getUserProfile(uuid));
          });
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
          dispatch(editProfile(id, data)).then((res) => {
            dispatch(getUserProfile(uuid));
          });
        }
      });
    });
  };
  const ProfileData = ({ item }) => (
    <View>
      <View style={styles.profileOptions}>
        <Text style={styles.headingText}>{item.heading}</Text>
        <View style={styles.mainRowView}>
          <Image
            source={item.icon}
            style={styles.iconStyle}
            resizeMode="contain"
          />
          <Text style={styles.titleText}>{item.title}</Text>
        </View>

        <Spacer space={SH(18)} />
      </View>
      <Spacer space={SH(5)} />
    </View>
  );

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
        {profile_photo && userImage ? (
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
              <View style={styles.mainRowView}>
                <Image
                  source={userIcon}
                  style={styles.iconStyle}
                  resizeMode="contain"
                />
                <Text style={styles.titleText}>
                  {` ${user?.user?.payload?.user_profiles?.firstname}${" "}${
                    user?.user?.payload?.user_profiles?.lastname
                  }`}
                </Text>
              </View>

              <Spacer space={SH(18)} />
            </View>
            <Spacer space={SH(5)} />

            {/* Email */}
            <View style={styles.profileOptions}>
              <Text style={styles.headingText}>{"Email address"}</Text>
              <View style={styles.mainRowView}>
                <Image
                  source={email}
                  style={styles.iconStyle}
                  resizeMode="contain"
                />
                <Text style={styles.titleText}>
                  {user?.user?.payload?.email}
                </Text>
              </View>

              <Spacer space={SH(18)} />
            </View>
            <Spacer space={SH(5)} />

            {/* phone number */}
            <View style={styles.profileOptions}>
              <Text style={styles.headingText}>{"Phone number"}</Text>
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

              <Spacer space={SH(18)} />
            </View>
            <Spacer space={SH(5)} />

            {/* ssn */}
            {user?.user?.payload?.user_profiles?.ssn_number !== null && (
              <>
                <View style={styles.profileOptions}>
                  <Text style={styles.headingText}>{"SSN"}</Text>
                  <View style={styles.mainRowView}>
                    <Image
                      source={calendar}
                      style={styles.iconStyle}
                      resizeMode="contain"
                    />
                    <Text style={styles.titleText}>
                      {`  ${user?.user?.payload?.user_profiles?.phone_code} ${user?.user?.payload?.user_profiles?.phone_no}`}
                    </Text>
                  </View>

                  <Spacer space={SH(18)} />
                </View>
                <Spacer space={SH(5)} />
              </>
            )}

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
      {isLoading ? <Loader message="Loading profile image..." /> : null}
    </ScreenWrapper>
  );
}
3;
