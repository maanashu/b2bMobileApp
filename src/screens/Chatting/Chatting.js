import {
  FlatList,
  Image,
  Keyboard,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, {
  useRef,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";
import { styles } from "./Chatting.styles";
import { ScreenWrapper, Spacer } from "@/components";
import { SH, SW } from "@/theme/ScalerDimensions";
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
import BottomSheet from "@gorhom/bottom-sheet";
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
import { ShadowStyles } from "@/theme";

export function Chatting({ navigation }) {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [index, setIndex] = useState("");
  const [messages, setMessages] = useState([]);
  const [showView, setShowView] = useState("");
  const [userImage, setUserImage] = useState();

  const [isBottomViewVisible, setisBottomViewVisible] = useState(false);

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

  const moreOptions = () => {
    setShowView(!showView);
    Keyboard.dismiss();
  };

  const closeSheet = () => {
    setisBottomViewVisible(false);
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
        onPress={() => {
          setIndex(index);
          setisBottomViewVisible(true);
        }}
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

      {isBottomViewVisible && (
        <View style={styles.bottomSheetView}>
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
          ) : index == 5 ? (
            (setisBottomViewVisible(false), navigate(NAVIGATION.sendInquiry))
          ) : index == 6 ? (
            <VoiceMessage onClosePress={closeSheet} />
          ) : index == 7 ? (
            <Translation onClosePress={closeSheet} />
          ) : index == 9 ? (
            <ShippingAddress onClosePress={closeSheet} />
          ) : index == 9 ? (
            <ShippingAddress onClosePress={closeSheet} />
          ) : index == 10 ? (
            (console.log("check index: " + index),
            setisBottomViewVisible(false),
            navigate(NAVIGATION.makeAnOffer))
          ) : null}
        </View>
      )}
    </ScreenWrapper>
  );
}
