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
  Bubble,
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
import DocumentPicker from "react-native-document-picker";
import { useDispatch, useSelector } from "react-redux";
import { getMessages, sendChat } from "@/actions/UserActions";
import { getUser } from "@/selectors/UserSelectors";
let allMessages = [];

export function Chatting(props) {
  const myId = "43";
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [index, setIndex] = useState("");
  const [messages, setMessages] = useState([]);
  const [showView, setShowView] = useState("");
  const [userImage, setUserImage] = useState();
  const [fileResponse, setFileResponse] = useState([]);
  const [isBottomViewVisible, setisBottomViewVisible] = useState(false);
  const [message, setMessage] = useState("");

  const user = useSelector(getUser);
  const allMessages = user?.getMessages?.messages;
  const dispatch = useDispatch();
  console.log("token", user.user.payload.token);
  console.log("jhfd", props?.route?.params?.seller_id);
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
      console.warn(err);
    }
  }, []);
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

  useEffect(() => {
    setMessages(allMessages?.map(convertMessage));
  }, []);

  const convertMessage = (message) => {
    return {
      _id: message.id.toString(),
      text: message.content,
      createdAt: new Date(message.created_at),
      user: {
        _id: message.sender_id.toString(),
      },
    };
  };
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
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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

        <Send {...props} containerStyle={{ justifyContent: "center" }}>
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
  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            // Styling for sender's bubble
            backgroundColor: "#007AFF",
          },
          left: {
            // Styling for recipient's bubble
            backgroundColor: "#7C7C7C",
          },
        }}
        textStyle={{
          right: {
            // Styling for sender's text
            color: "#FFFFFF",
          },
          left: {
            // Styling for recipient's text
            color: "#FFFFFF",
          },
        }}
      />
    );
  };
  const recipientId =
    props?.route?.params?.screenName === "productInquiry"
      ? props?.route?.params?.seller_id
      : JSON.stringify(props?.route?.params?.seller_id);

  const onSend = useCallback((messages = []) => {
    setShowView(false);
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
    const latestMessage = messages[messages.length - 1];
    const typedMessage = latestMessage && latestMessage.text;

    console.log("message:", typedMessage);
    dispatch(
      sendChat({
        recipient_id: recipientId,
        content: typedMessage,
      })
    )
      .then((res) => {
        // setOpenModal(true); dispatch(
        console.log("checl respppp", JSON.stringify(res));
        dispatch(getMessages(props?.route?.params?.seller_id));
      })
      .catch((error) => {
        console.log("errorafter catch " + error);
      });
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
              _id: myId,
            }}
            renderBubble={renderBubble}
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
            <File onClosePress={closeSheet} onPress={handleDocumentSelection} />
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
