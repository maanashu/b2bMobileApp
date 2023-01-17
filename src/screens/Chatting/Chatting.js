import {
  FlatList,
  Image,
  Keyboard,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef, useEffect, useState, useCallback } from "react";
import { styles } from "./Chatting.styles";
import { ScreenWrapper, Spacer } from "@/components";
import { SH } from "@/theme/ScalerDimensions";
import { COLORS } from "@/theme/Colors";
import { messageSend, attachPic, addAttachment, closeX } from "@/assets";
import { MakeAnOffer } from "@/screens";
import {
  GiftedChat,
  Send,
  InputToolbar,
  MessageImage,
} from "react-native-gifted-chat";
import { ms } from "react-native-size-matters";
import RBSheet from "react-native-raw-bottom-sheet";
import ImageCropPicker from "react-native-image-crop-picker";
import {
  BottomOptions,
  ShippingAddress,
  Translation,
  VoiceMessage,
  BusinessCard,
  File,
  PhotoFunction,
  QuickReply,
  VideoCall,
} from "./BottomSheet";

import { ChatHeader } from "@/components";
import { navigate, navigationRef } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";

export function Chatting({ navigation }) {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const refRBSheet = useRef();
  const [index, setIndex] = useState("");
  const [messages, setMessages] = useState([]);
  const [showView, setShowView] = useState("");
  const [userImage, setUserImage] = useState();

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(false);
        setShowView(false);
      }
    );
    return () => {
      keyboardDidShowListener.remove();
    };
  }, []);

  const OpenCamera = () => {
    ImageCropPicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then((image) => {
        setUserImage(image.path);
      })
      .catch((e) => {
        console.log("Error: " + e);
      });
  };

  const OpenGallery = () => {
    ImageCropPicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then((image) => {
        setUserImage(image.path);
      })
      .catch((e) => {
        console.log("Error: " + e);
      });
  };

  const bottomSheetHandler = (index) => {
    if (index == 0) {
      setIndex(index);
      refRBSheet.current.open();
    } else if (index == 1) {
      refRBSheet.current.open();
      setIndex(index);
    } else if (index == 2) {
      refRBSheet.current.open();
      setIndex(index);
    } else if (index == 3) {
      refRBSheet.current.open();
      setIndex(index);
    } else if (index == 4) {
      refRBSheet.current.open();
      setIndex(index);
    } else if (index == 5) {
      navigate(NAVIGATION.sendInquiry);
      setIndex(index);
    } else if (index == 6) {
      refRBSheet.current.open();
      setIndex(index);
    } else if (index == 7) {
      refRBSheet.current.open();
      setIndex(index);
    } else if (index == 8) {
      refRBSheet.current.open();
      setIndex(index);
    } else if (index == 9) {
      refRBSheet.current.open();
      setIndex(index);
    } else if (index == 10) {
      navigate(NAVIGATION.makeAnOffer);
    }
  };

  const AdjustSHeetHeight = () => {
    if (index == 0) {
      return 200;
    } else if (index == 1) {
      return 300;
    } else if (index == 2) {
      return 300;
    } else if (index == 3) {
      return 50;
    } else if (index == 4) {
      return 50;
    } else if (index == 5) {
      return 50;
    } else if (index == 6) {
      return 50;
    } else if (index == 7) {
      return 50;
    } else if (index == 8) {
      return 50;
    } else if (index == 9) {
      return 50;
    } else if (index == 10) {
      return 50;
    }
  };

  const moreOptions = () => {
    setShowView(!showView);
    Keyboard.dismiss();
  };

  const closeSheet = () => {
    refRBSheet.current.close();
  };

  const renderSend = (props) => {
    return (
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity>
          <Image
            source={attachPic}
            resizeMode="stretch"
            style={styles.chattingIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={moreOptions}>
          <Image
            source={showView ? closeX : addAttachment}
            resizeMode="stretch"
            style={styles.chattingIcon}
          />
        </TouchableOpacity>

        <Send {...props} containerStyle={{ marginTop: SH(12) }}>
          <Image
            source={messageSend}
            resizeMode="stretch"
            style={styles.sendIcon}
          />
        </Send>
      </View>
    );
  };

  const renderOptions = ({ item, index }) => (
    <View style={styles.renderOptionsView}>
      <TouchableOpacity
        onPress={() => bottomSheetHandler(index)}
        style={styles.align}
      >
        <Image
          source={item.icon}
          resizeMode="stretch"
          style={{ height: ms(30), width: ms(30) }}
        />
        <Text style={styles.optionText}>{item.title}</Text>
      </TouchableOpacity>

      <Spacer space={SH(20)} />
    </View>
  );

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello developer",
        createdAt: new Date(),
        image: "https://facebook.github.io/react/img/logo_og.png",
        sent: true,
        received: true,
        pending: true,

        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setShowView(false);
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);
  return (
    <ScreenWrapper style={{ flex: 1, backgroundColor: COLORS.white }}>
      <ChatHeader />

      <Spacer space={SH(10)} />

      <View style={styles.mainContainer}>
        <View style={styles.chatViewContainer}>
          <GiftedChat
            showAvatarForEveryMessage={true}
            alwaysShowSend={true}
            scrollToBottom={true}
            messages={messages}
            onSend={(messages) => onSend(messages)}
            user={{
              _id: 1,
            }}
            renderSend={renderSend}
            renderInputToolbar={(props) => {
              return (
                <InputToolbar
                  {...props}
                  containerStyle={styles.inputToolbarStyle}
                ></InputToolbar>
              );
            }}
            renderMessageImage={(props) => {
              return (
                <MessageImage
                  {...props}
                  containerStyle={styles.messageProps}
                ></MessageImage>
              );
            }}
          />
        </View>

        {showView && (
          <View style={styles.bottomOptionsView}>
            <FlatList
              data={BottomOptions}
              renderItem={renderOptions}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              numColumns={4}
            />
          </View>
        )}
      </View>

      <RBSheet
        ref={refRBSheet}
        animationType="fade"
        closeOnDragDown={false}
        closeOnPressMask={true}
        paddingVertical={SH(10)}
        height={150}
        minClosingHeight={100}
        customStyles={{
          wrapper: {
            opacity: 1,
          },
          container: {
            backgroundColor: "#ffffff",
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            flex: 1,
          },
          draggableIcon: {
            backgroundColor: "#000",
          },
        }}
      >
        {index == 0 ? (
          <PhotoFunction
            onClosePress={closeSheet}
            onPressGallery={OpenGallery}
            onPressCamera={OpenCamera}
          />
        ) : index == 1 ? (
          <QuickReply onClosePress={closeSheet} />
        ) : index == 2 ? (
          <VideoCall onClosePress={closeSheet} />
        ) : index == 3 ? (
          <File onClosePress={closeSheet} />
        ) : index == 4 ? (
          <BusinessCard onClosePress={closeSheet} />
        ) : index == 6 ? (
          <VoiceMessage onClosePress={closeSheet} />
        ) : index == 7 ? (
          <Translation onClosePress={closeSheet} />
        ) : index == 9 ? (
          <ShippingAddress onClosePress={closeSheet} />
        ) : index == 9 ? (
          <ShippingAddress onClosePress={closeSheet} />
        ) : index == 10 ? (
          <MakeAnOffer onClosePress={closeSheet} />
        ) : null}
      </RBSheet>
    </ScreenWrapper>
  );
}
