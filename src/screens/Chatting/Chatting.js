import {
  FlatList,
  Image,
  Keyboard,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState, useCallback, useRef } from "react";
import { styles } from "./Chatting.styles";
import { ScreenWrapper, Spacer } from "@/components";
import { SH } from "@/theme/ScalerDimensions";
import { COLORS } from "@/theme/Colors";
import { messageSend, attachPic, addAttachment, closeX } from "@/assets";
import {
  GiftedChat,
  Send,
  InputToolbar,
  MessageImage,
  Bubble,
} from "react-native-gifted-chat";
import { ms } from "react-native-size-matters";
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
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";
import DocumentPicker from "react-native-document-picker";
import { useDispatch, useSelector } from "react-redux";
import { TYPES, getMessages, sendChat } from "@/actions/UserActions";
import { getUser } from "@/selectors/UserSelectors";
import { Loader } from "@/components/Loader";
import { isLoadingSelector } from "@/selectors/StatusSelectors";
let allMessages = [];

export function Chatting(props) {
  const user = useSelector(getUser);
  const scrollViewRef = useRef();
  const myId = user?.user?.payload?.id;
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [index, setIndex] = useState("");
  const [messages, setMessages] = useState([]);
  const [showView, setShowView] = useState("");
  const [userImage, setUserImage] = useState();
  const [fileResponse, setFileResponse] = useState([]);
  const [isBottomViewVisible, setisBottomViewVisible] = useState(false);
  const [message, setMessage] = useState([]);
  // const allMessages = useSelector((state) => state.user.getMessages?.messages);
  const allMessages = useSelector(
    (state) => state?.user?.getMessages?.messages
  );

  const dispatch = useDispatch();
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
  const isLoadingMessages = useSelector((state) =>
    isLoadingSelector([TYPES.GET_MESSAGES], state)
  );
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
    const formattedMessages = formatMessages(allMessages)?.reverse();
    setMessages(formattedMessages);
  }, [user?.getMessages?.messages]);

  const formatMessages = (messages) => {
    return messages?.map((message) => {
      return {
        _id: message.recipient_id,
        text: message.content,
        createdAt: new Date(message.created_at),
        user: {
          _id: message.sender_id,
          avatar: null,

          // You can add more user properties if needed, like name, avatar, etc.
        },
      };
    });
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
      <View style={styles.sendView}>
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

  const onSend = useCallback((newMessages) => {
    dispatch(
      sendChat({
        recipient_id: recipientId,
        content: newMessages[0]?.text,
      })
    )
      .then((res) => {
        dispatch(getMessages(res?.payload?.messagehead_id));
      })
      .catch((error) => {});
  }, []);
  const renderAvatar = () => null; // Return null to disable avatars
  const scrollToBottom = () => {
    scrollViewRef.current?.scrollToEnd({ animated: false });
  };
  return (
    <ScreenWrapper style={{ flex: 1, backgroundColor: COLORS.white }}>
      <ChatHeader
        name={
          props?.route?.params?.user_profile?.firstname +
          " " +
          props?.route?.params?.user_profile?.lastname
        }
        organizationName={props?.route?.params?.user_profile?.organization_name}
      />

      <Spacer space={SH(10)} />

      <View style={styles.mainContainer}>
        <View style={styles.chatViewContainer}>
          <GiftedChat
            alwaysShowSend={true}
            scrollToBottom={true}
            messages={messages}
            onSend={(messages) => onSend(messages)}
            user={{
              _id: myId,
            }}
            renderSystemMessage={null}
            messagesContainerStyle={styles.containerStyle}
            renderBubble={renderBubble}
            renderSend={renderSend}
            renderAvatar={renderAvatar}
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
            listViewProps={{
              scrollEventThrottle: 400,
              onScroll: () => {},
              // Customize the ScrollView component
              renderScrollComponent: (props) => (
                <ScrollView
                  {...props}
                  ref={scrollViewRef}
                  showsVerticalScrollIndicator={false}
                  onContentSizeChange={scrollToBottom}
                />
              ),
            }}
          />
        </View>

        {showView && (
          <View style={styles.bottomOptionsView}>
            <FlatList
              data={BottomOptions}
              renderItem={renderOptions}
              keyExtractor={(item) => item?.id}
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
      {/* {isLoadingMessages && <Loader message="Loading Messages..." />} */}
    </ScreenWrapper>
  );
}
