import React, { useEffect, useRef, useState } from "react";
import { BackHandler, View } from "react-native";
import { Button, ScreenWrapper } from "@/components";
import Modal from "react-native-modal";
import { EnterPin, MobileNumber, Splash } from "@/screens";
import { NAVIGATION } from "@/constants";
import { useNavigation } from "@react-navigation/native";

export function LoginModal({ isVisible, closeModal }) {
  const navigation = useNavigation();
  const [activeScreen, setActiveScreen] = useState(0);
  const ref = useRef();

  const handleScreenChange = (screen) => {
    setActiveScreen(screen);
  };
  const goBackScreen = (screen) => {
    setActiveScreen(screen);
  };
  const closeModalBackPress = () => {
    if (activeScreen == 0) {
      ref.current.close();
      closeModal(false);
    } else {
      setActiveScreen(activeScreen - 1);
    }
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
        />
      );
      break;
    case 2:
      content = (
        <EnterPin closeModal={closeModal} goBackScreen={goBackScreen} />
      );
      break;
    // case "screen3":
    //   content = <Screen3 closeModal={closeModal} />;
    //   break;
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
