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
  MobileNumber,
  PersonalInformation,
  Register,
  Splash,
  Verify,
} from "@/screens";
import { useSelector } from "react-redux";
import { getUser } from "@/selectors/UserSelectors";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { BaseToast } from "react-native-toast-message";
import { COLORS, SF, SH, SW } from "@/theme";
import { Fonts, error, success } from "@/assets";

export function LoginModal({ isVisible, closeModal, setScreen }) {
  const user = useSelector(getUser);
  const toastPosition = { top: 50 };
  const toastConfig = {
    success_toast: ({ text1, text2, ...rest }) => (
      <BaseToast
        {...rest}
        style={{
          borderLeftColor: "green",
          zIndex: 999,
          borderLeftColor: "green",
        }}
        contentContainerstyle={{ paddingHorizontal: SW(15) }}
        leadingIcon={success}
        text2Style={{
          fontSize: SF(14),
          color: "green",
          fontFamily: Fonts.SemiBold,
        }}
        text1={text1}
        text2={text2}
        trailingIconStyle={{
          height: SH(15),
          aspectRatio: 1,
          marginRight: SW(16),
        }}
        leadingIconStyle={{ height: SH(26), aspectRatio: 1 }}
        onTrailingIconpress={() => Toast.hide()}
        text2NumberOfLines={2}
      />
    ),
    error_toast: ({ text1, text2, ...rest }) => (
      <BaseToast
        {...rest}
        style={{
          borderLeftColor: COLORS.pinklight,
          zIndex: 999,
          borderLeftColor: "red",
        }}
        contentContainerstyle={{
          paddingHorizontal: SW(15),
        }}
        leadingIcon={error}
        text2Style={{
          fontSize: SF(14),
          color: "red",
          fontFamily: Fonts.SemiBold,
        }}
        text1={text1}
        text2={text2}
        trailingIconStyle={{
          height: SH(15),
          aspectRatio: 1,
          marginRight: SW(16),
        }}
        leadingIconStyle={{ height: SH(26), aspectRatio: 1 }}
        onTrailingIconpress={() => Toast.hide()}
        text2NumberOfLines={2}
      />
    ),
  };

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
        <EnterPin
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
    default:
      content = null;
  }

  const handleModalPress = () => {
    // Disable modal closing when pressed
  };

  return (
    <ScreenWrapper>
      <Toast
        config={toastConfig}
        ref={(ref) => Toast.setRef(ref)}
        position={toastPosition}
      />

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
