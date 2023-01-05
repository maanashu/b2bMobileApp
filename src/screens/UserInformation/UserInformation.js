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
import { useDispatch } from "react-redux";
import { logout } from "@/actions/UserActions";
import { Button, ScreenWrapper, Spacer } from "@/components";
import { strings } from "@/localization";
import { styles } from "./UserInformation.styles";
import { SF, SH, SW, TextStyles, COLORS } from "@/theme";
import {
  backArrow,
  building,
  businessBag,
  businessCard,
  buildingLocation,
  calendar,
  call,
  camera,
  cooperation,
  email,
  jobrRound,
  qrCode,
  userFull,
  userIcon,
  businessProfit,
  rocket,
  forward,
  close,
} from "@/assets";
import { ms, vs } from "react-native-size-matters";
import { goBack, navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";
import Modal from "react-native-modal";
import { useState } from "react";
import ImageCropPicker from "react-native-image-crop-picker";

const personalInfo = [
  {
    id: 1,
    heading: strings.userInformation.name,
    title: "Karam Manab Attia",
    icon: userIcon,
  },
  {
    id: 2,
    heading: strings.userInformation.email,
    title: "Flowers@gmail.com",
    icon: email,
  },
  {
    id: 3,
    heading: strings.userInformation.phoneNumber,
    title: "612717070",
    icon: call,
  },
  {
    id: 4,
    heading: strings.userInformation.ssn,
    title: "-------5698",
    icon: calendar,
  },
  {
    id: 5,
    heading: strings.userInformation.dob,
    title: "01/02/1988",
    icon: calendar,
  },
];

const CompanyInfo = [
  {
    id: 1,
    heading: strings.userInformation.companyName,
    title: "ABC Distro",
    icon: building,
  },
  {
    id: 2,
    heading: strings.userInformation.businessType,
    title: strings.userInformation.label,
    icon: cooperation,
  },
  {
    id: 3,
    heading: strings.userInformation.jobFunction,
    title: strings.userInformation.label,
    icon: businessBag,
  },
  {
    id: 4,
    heading: strings.userInformation.jobLevel,
    title: strings.userInformation.label,
    icon: userFull,
  },
  {
    id: 5,
    heading: strings.userInformation.officeAddress,
    title: strings.userInformation.label,
    icon: buildingLocation,
  },
  {
    id: 6,
    heading: strings.userInformation.asv,
    title: strings.userInformation.label,
    icon: businessProfit,
  },
  {
    id: 7,
    heading: strings.userInformation.sellingChannel,
    title: strings.userInformation.label,
    icon: rocket,
  },
];

export function UserInformation() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [userImage, setUserImage] = useState();

  const { colors } = useTheme();
  const dispatch = useDispatch();

  const logoutUser = () => {
    dispatch(logout());
  };

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
      setUserImage(image.path);
      setModalVisible(!isModalVisible);
    });
  };

  const OpenCamera = () => {
    ImageCropPicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      setUserImage(image.path);
      setModalVisible(!isModalVisible);
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
        {userImage ? (
          <View style={styles.UserImageBackground}>
            <Image source={{ uri: userImage }} style={styles.userImageStyle} />
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
            <FlatList
              data={personalInfo}
              renderItem={ProfileData}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
            />
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
    </ScreenWrapper>
  );
}
3;
