import React, { useEffect, useRef, useState } from "react";
import { View } from "react-native";
import { ScreenWrapper } from "@/components";
import Modal from "react-native-modal";
import {
  AgeVerification,
  BusinessKyc,
  BusinessRegistration,
  CheckAndRequestKYC,
  ConnectBank,
  EnterPin,
  Login,
  MobileNumber,
  PersonalInformation,
  ReEnterPin,
  Register,
  Splash,
  Verify,
} from "@/screens";
import { useSelector } from "react-redux";
import { getUser } from "@/selectors/UserSelectors";

export function LoginModal({ isVisible, closeModal, setScreen }) {
  const user = useSelector(getUser);

  useEffect(() => {
    if (!user?.user?.payload?.token) {
      return setActiveScreen(0);
    } else if (user?.getUserProfile?.user_profiles?.wallet_steps == 0) {
      return setActiveScreen(3);
    } else if (user?.getUserProfile?.user_profiles?.wallet_steps == 1) {
      return setActiveScreen(4);
    } else if (user?.getUserProfile?.user_profiles?.wallet_steps == 1.1) {
      return setActiveScreen(5);
    } else if (user?.getUserProfile?.user_profiles?.wallet_steps == 4) {
      return setActiveScreen(6);
    }
  }, [isVisible]);
  const [activeScreen, setActiveScreen] = useState(null);
  const getScreen = () => {
    if (!user?.user?.payload?.token) {
      return 0;
    } else if (user?.getUserProfile?.user_profiles?.wallet_steps == 0) {
      return 3;
    } else if (user?.getUserProfile?.user_profiles?.wallet_steps == 1) {
      return 4;
    } else if (user?.getUserProfile?.user_profiles?.wallet_steps == 1.1) {
      return 5;
    } else if (user?.getUserProfile?.user_profiles?.wallet_steps == 4) {
      return 6;
    }
  };
  const screen = getScreen();

  const [data, setData] = useState("");
  const ref = useRef();

  const handleScreenChange = (screen, data) => {
    setActiveScreen(screen);
    setData(data);
  };
  const goBackScreen = (screen) => {
    setActiveScreen(screen);
  };
  const closeModalBackPress = () => {
    const shouldCloseModal = [0, 3, 4, 5, 6, 8, 9, 10].includes(activeScreen);

    if (shouldCloseModal) {
      ref.current.close();
      closeModal(false);
    } else {
      setActiveScreen(activeScreen === 7 ? 1 : activeScreen - 1);
    }
  };
  const disableModal = () => {
    ref.current.close();
    closeModal(false);
  };

  let content;
  switch (activeScreen) {
    case 0:
      content = (
        <Splash
          handleScreenChange={handleScreenChange}
          goBackScreen={goBackScreen}
        />
      );
      break;
    case 1:
      content = (
        <MobileNumber
          handleScreenChange={handleScreenChange}
          goBackScreen={goBackScreen}
          data={data}
        />
      );
      break;
    case 2:
      content = (
        <Login
          handleScreenChange={handleScreenChange}
          disableModal={disableModal}
          goBackScreen={goBackScreen}
        />
      );
      break;
    case 3:
      content = (
        <PersonalInformation
          handleScreenChange={handleScreenChange}
          closeModal={closeModalBackPress}
          goBackScreen={goBackScreen}
        />
      );
      break;
    case 4:
      content = (
        <CheckAndRequestKYC
          handleScreenChange={handleScreenChange}
          closeModal={closeModalBackPress}
          goBackScreen={goBackScreen}
        />
      );
      break;
    case 5:
      content = (
        <AgeVerification
          handleScreenChange={handleScreenChange}
          closeModal={closeModalBackPress}
          goBackScreen={goBackScreen}
        />
      );
      break;
    case 6:
      content = (
        <ConnectBank
          handleScreenChange={handleScreenChange}
          closeModal={closeModalBackPress}
          goBackScreen={goBackScreen}
        />
      );
      break;
    case 7:
      content = (
        <Verify
          handleScreenChange={handleScreenChange}
          closeModal={closeModalBackPress}
          goBackScreen={goBackScreen}
          data={data}
        />
      );
      break;
    case 8:
      content = (
        <Register
          handleScreenChange={handleScreenChange}
          closeModal={closeModalBackPress}
          goBackScreen={goBackScreen}
        />
      );
      break;
    case 9:
      content = (
        <BusinessRegistration
          handleScreenChange={handleScreenChange}
          closeModal={closeModalBackPress}
          goBackScreen={goBackScreen}
        />
      );
      break;
    case 10:
      content = (
        <BusinessKyc
          handleScreenChange={handleScreenChange}
          closeModal={closeModalBackPress}
          goBackScreen={goBackScreen}
        />
      );
      break;
    case 11:
      content = (
        <EnterPin
          handleScreenChange={handleScreenChange}
          closeModal={closeModalBackPress}
          goBackScreen={goBackScreen}
        />
      );
      break;
    case 12:
      content = (
        <ReEnterPin
          handleScreenChange={handleScreenChange}
          closeModal={closeModalBackPress}
          goBackScreen={goBackScreen}
          data={data}
        />
      );
      break;
    default:
      content = null;
  }

  const handleModalPress = () => {
    // Disable modal closing when pressed
  };

  return (
    <ScreenWrapper>
      <Modal
        ref={ref}
        onBackButtonPress={closeModalBackPress}
        isVisible={isVisible}
        style={{
          margin: 0,
          backgroundColor: "white",
          justifyContent: "flex-end",
        }}
        animationInTiming={1}
        animationOutTiming={1}
      >
        <View
          style={{
            flex: 1,
          }}
        >
          {content}
        </View>
      </Modal>
    </ScreenWrapper>
  );
}
