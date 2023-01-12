import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import React, { useRef } from "react";
import { styles } from "./Chatting.styles";
import { ScreenWrapper, Spacer } from "@/components";
import { SH, SW } from "@/theme/ScalerDimensions";
import { COLORS } from "@/theme/Colors";
import {
  backArrow,
  addPerson,
  messageSend,
  attachPic,
  addAttachment,
  chat_photo,
  chat_quickMessage,
  chat_videoCall,
  chat_file,
  chat_card,
  chat_latestPrice,
  chat_voiceMessage,
  chat_translator,
  chat_sendCatalogue,
  chat_shipping,
  chat_directOffer,
  cross,
  camera,
  gallery_image,
} from "@/assets";
import {
  GiftedChat,
  Send,
  InputToolbar,
  MessageImage,
} from "react-native-gifted-chat";
import { useCallback } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { goBack } from "@/navigation/NavigationRef";
import { ms } from "react-native-size-matters";
import { strings } from "@/localization";
import RBSheet from "react-native-raw-bottom-sheet";
import {
  BusinessCard,
  File,
  PhotoFunction,
  QuickReply,
  VideoCall,
} from "./BottomSheet";

export function Chatting() {
  const refRBSheet = useRef();

  const BottomOptions = [
    {
      id: 1,
      icon: chat_photo,
      title: strings.chatting.photo,
    },
    {
      id: 2,
      icon: chat_quickMessage,
      title: strings.chatting.quickMessage,
    },
    {
      id: 3,
      icon: chat_videoCall,
      title: strings.chatting.videoCall,
    },
    {
      id: 4,
      icon: chat_file,
      title: strings.chatting.file,
    },
    {
      id: 5,
      icon: chat_card,
      title: strings.chatting.businessCard,
    },
    {
      id: 6,
      icon: chat_latestPrice,
      title: strings.chatting.latestPrice,
    },
    {
      id: 7,
      icon: chat_voiceMessage,
      title: strings.chatting.voiceMessages,
    },
    {
      id: 8,
      icon: chat_translator,
      title: strings.chatting.translator,
    },
    {
      id: 9,
      icon: chat_sendCatalogue,
      title: strings.chatting.sendCatalogues,
    },
    {
      id: 10,
      icon: chat_shipping,
      title: strings.chatting.shippingAddress,
    },
    {
      id: 11,
      icon: chat_directOffer,
      title: strings.chatting.directOffer,
    },
    {
      id: 12,
      icon: "",
      title: "",
    },
  ];
  const [index, setIndex] = useState("");
  const [messages, setMessages] = useState([]);

  const [showView, setShowView] = useState("");

  const bottomSheetHandler = (index) => {
    if (index == 0) {
      setIndex("0");
      refRBSheet.current.open();
    } else if (index == 1) {
      refRBSheet.current.open();
      setIndex("1");
    } else if (index == 2) {
      refRBSheet.current.open();
      setIndex("2");
    } else if (index == 3) {
      refRBSheet.current.open();
      setIndex("3");
    } else if (index == 4) {
      refRBSheet.current.open();
      setIndex("4");
    } else if (index == 5) {
      refRBSheet.current.open();
      setIndex("5");
    } else if (index == 6) {
      refRBSheet.current.open();
      setIndex("6");
    } else if (index == 7) {
      refRBSheet.current.open();
      setIndex("7");
    } else if (index == 8) {
      refRBSheet.current.open();
      setIndex("8");
    } else if (index == 9) {
      refRBSheet.current.open();
      setIndex("9");
    } else if (index == 10) {
      refRBSheet.current.open();
      setIndex("10");
    } else if (index == 11) {
      refRBSheet.current.open();
      setIndex("11");
    }
  };
  const moreOptions = () => {
    setShowView(!showView);
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
            source={addAttachment}
            resizeMode="stretch"
            style={styles.chattingIcon}
          />
        </TouchableOpacity>

        <Send {...props} containerStyle={{ marginTop: SH(12) }}>
          <Image
            source={messageSend}
            resizeMode="stretch"
            style={{
              height: SW(32),
              width: SW(32),
              marginRight: SW(10),
              marginBottom: SH(11),
            }}
          />
        </Send>
      </View>
    );
  };

  const renderOptions = ({ item, index }) => (
    <View
      style={{
        justifyContent: "space-between",
        flex: 1,
      }}
    >
      <TouchableOpacity
        onPress={() => bottomSheetHandler(index)}
        style={{
          alignItems: "center",
        }}
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

        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
        image: "https://facebook.github.io/react/img/logo_og.png",
        sent: true,
        received: true,
        pending: true,
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
      <View style={styles.header}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity onPress={() => goBack()}>
            <Image
              source={backArrow}
              resizeMode="contain"
              style={{ height: 35, width: 35 }}
            />
          </TouchableOpacity>
          <View>
            <Text style={styles.HeaderNameText}>Senia PanFang</Text>
            <Text style={styles.headerCompanyName}>
              Yiwu Leqi E-Commerce Firm
            </Text>
          </View>
        </View>

        <TouchableOpacity>
          <Image
            source={addPerson}
            resizeMode="contain"
            style={{ height: 30, width: 30 }}
          />
        </TouchableOpacity>
      </View>

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
                  containerStyle={{
                    borderWidth: 1,
                    borderRadius: SW(20),
                    borderTopWidth: 1,
                    borderTopColor: "black",
                    height: 50,
                    justifyContent: "center",
                  }}
                ></InputToolbar>
              );
            }}
            renderMessageImage={(props) => {
              return (
                <MessageImage
                  {...props}
                  containerStyle={{
                    height: 100,
                    borderRadius: 20,

                    margin: SH(5),
                  }}
                ></MessageImage>
              );
            }}
          />
        </View>

        {showView ? (
          <View style={styles.bottomOptionsView}>
            <FlatList
              data={BottomOptions}
              renderItem={renderOptions}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              numColumns={4}
            />
          </View>
        ) : null}
      </View>

      <RBSheet
        ref={refRBSheet}
        animationType="fade"
        closeOnDragDown={false}
        closeOnPressMask={true}
        paddingVertical={SH(10)}
        customStyles={{
          wrapper: {
            opacity: 1,
          },
          container: {
            backgroundColor: "#ffffff",
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          },
          draggableIcon: {
            backgroundColor: "#000",
          },
        }}
      >
        {index == 0 ? (
          <PhotoFunction />
        ) : index == 1 ? (
          <QuickReply />
        ) : index == 2 ? (
          <VideoCall />
        ) : index == 3 ? (
          <File />
        ) : index == 4 ? (
          <BusinessCard />
        ) : null}
      </RBSheet>
    </ScreenWrapper>
  );
}
