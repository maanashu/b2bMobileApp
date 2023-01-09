import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { styles } from "./Chatting.styles";
import { ScreenWrapper, Spacer, TextField } from "@/components";
import { SH, SW } from "@/theme/ScalerDimensions";
import { COLORS } from "@/theme/Colors";
import { backArrow, addPerson, messageSend } from "@/assets";
import {
  GiftedChat,
  Send,
  Bubble,
  InputToolbar,
} from "react-native-gifted-chat";
import { useCallback } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { goBack, navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";

export function Chatting() {
  const [messages, setMessages] = useState([]);

  const renderSend = (props) => {
    return (
      <Send {...props}>
        <Image
          source={messageSend}
          resizeMode="stretch"
          style={{
            height: SW(30),
            width: SW(30),
            marginRight: SW(5),
            marginBottom: SH(7),
          }}
        />
      </Send>
    );
  };

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
      },
      {
        _id: 3,
        text: "How are you",
        createdAt: new Date(),

        user: {
          _id: 4,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
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
        <GiftedChat
          showAvatarForEveryMessage={true}
          renderActions={() => <View></View>}
          alwaysShowSend={true}
          scrollToBottom={true}
          messages={messages}
          onSend={(messages) => onSend(messages)}
          user={{
            _id: 1,
          }}
          renderSend={renderSend}
        />
      </View>
    </ScreenWrapper>
  );
}
