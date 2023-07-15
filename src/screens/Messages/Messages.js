import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./Messages.styles";
import { ScreenWrapper, Spacer } from "@/components";
import { SF, SH, SW } from "@/theme/ScalerDimensions";
import { COLORS } from "@/theme/Colors";
import { strings } from "@/localization";
import { Fonts, menuDots, pendingNotiBell, phoneBook } from "@/assets";
import { Search } from "@/components/Search";
import {
  ChatData,
  MessageHeader,
  messageRenderData,
} from "@/constants/flatlistData";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";
import { useDispatch, useSelector } from "react-redux";
import {
  getMessageHeads,
  getMessages,
  getMessagesReset,
} from "@/actions/UserActions";
import { getUser } from "@/selectors/UserSelectors";
import moment from "moment";
import { useIsFocused } from "@react-navigation/native";
import { isLoadingSelector } from "@/selectors/StatusSelectors";
import { Loader } from "@/components/Loader";
import { TYPES } from "@/Types/Types";

export function Messages() {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const [selected, setselected] = useState(1);
  const [messageRender, setmessageRender] = useState(1);
  const user = useSelector(getUser);

  const isLoading = useSelector((state) =>
    isLoadingSelector([TYPES.GET_MESSAGES_HEADS], state)
  );

  useEffect(() => {
    dispatch(getMessageHeads());
    dispatch(getMessagesReset());
  }, [isFocused]);

  const handleChat = (id, seller_id, user_profile) => {
    dispatch(getMessages(id));
    navigate(NAVIGATION.chatting, {
      seller_id: seller_id,
      user_profile: user_profile,
    });
    // alert(id);
  };
  const renderTopItems = ({ item }) => (
    <>
      <View style={styles.topView}>
        <TouchableOpacity
          onPress={() => setselected(item.id)}
          style={[
            styles.touchableStyle,
            {
              backgroundColor:
                item.id === selected ? COLORS.primary : COLORS.termsBorder,
            },
          ]}
        >
          <Image
            source={item.image}
            resizeMode="contain"
            style={styles.topImages}
          />
        </TouchableOpacity>
        <Text style={styles.titleText}>{item.title}</Text>
      </View>
    </>
  );
  const messageRenderTime = ({ item }) => (
    <>
      <View style={styles.rowView}>
        <TouchableOpacity
          style={[
            styles.messageButtonTop,
            {
              backgroundColor:
                item.id === messageRender ? COLORS.primary : COLORS.placeHolder,
            },
          ]}
          onPress={() => setmessageRender(item.id)}
        >
          <Text
            style={[
              styles.messageTimeText,
              {
                color:
                  item.id === messageRender ? COLORS.white : COLORS.darkGrey,
              },
            ]}
          >
            {item.title}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
  const Users = ({ item }) => {
    const formattedTime = moment
      .utc(item?.messages?.[0]?.created_at)
      .local()
      .format("hh:mm A");
    return (
      <>
        <TouchableOpacity
          onPress={() =>
            handleChat(
              item?.messages?.[0]?.messagehead_id,
              item.recipient_id,
              item?.receiver?.user_profiles
            )
          }
        >
          <View style={styles.chatView}>
            <Image
              source={{ uri: item.receiver?.user_profiles?.banner_image }}
              resizeMode="contain"
              style={styles.userPicStyle}
            />

            <View style={{ marginLeft: SW(10), flex: 1 }}>
              <View style={styles.chatinnerView}>
                <Text style={styles.businessText}>
                  {item.receiver?.user_profiles?.organization_name}
                </Text>
                <Text style={styles.timeText}>{formattedTime}</Text>
              </View>

              <Spacer space={SH(3)} />

              <Text style={styles.nameText}>
                {item?.receiver?.user_profiles?.firstname +
                  " " +
                  item?.receiver?.user_profiles?.lastname}
                <Text style={styles.positionText}>{item.position}</Text>
              </Text>

              <Spacer space={SH(4)} />

              <View style={{ flex: 1, paddingRight: SW(5) }}>
                <Text style={styles.timeText} numberOfLines={1}>
                  {item?.messages?.[0]?.content}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <Spacer space={SH(15)} />

        <View style={styles.bottomLine}></View>
      </>
    );
  };

  return (
    <ScreenWrapper style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>Messages</Text>

        <View style={styles.rowView}>
          <TouchableOpacity>
            <Image
              source={pendingNotiBell}
              resizeMode="contain"
              style={styles.headerIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={phoneBook}
              resizeMode="contain"
              style={styles.headerIcon}
            />
          </TouchableOpacity>
        </View>
      </View>

      <Spacer space={SH(20)} />

      <Search placeholder={"Search here"} />

      <Spacer space={SH(30)} />

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={{ alignItems: "center" }}>
          <FlatList
            columnWrapperStyle={{ justifyContent: "space-between" }}
            data={MessageHeader}
            renderItem={renderTopItems}
            keyExtractor={(item) => item.id}
            numColumns={4}
          />
        </View>

        <Spacer space={SH(20)} />

        <View style={[styles.rowAlignView, { paddingHorizontal: SW(5) }]}>
          <FlatList
            data={messageRenderData}
            renderItem={messageRenderTime}
            keyExtractor={(item) => item.id}
            numColumns={4}
          />

          <TouchableOpacity>
            <Image
              source={menuDots}
              resizeMode="contain"
              style={{ height: SW(25), width: SW(25) }}
            />
          </TouchableOpacity>
        </View>

        <Spacer space={SH(30)} />

        <View style={{ paddingHorizontal: SW(10) }}>
          <FlatList
            data={user?.getMessageHeads}
            extraData={user?.getMessageHeads}
            renderItem={Users}
            keyExtractor={(item) => item.id}
            ListEmptyComponent={(item) => (
              <View>
                <Text style={{ fontFamily: Fonts.SemiBold, fontSize: SF(18) }}>
                  {"No New Messages"}
                </Text>
              </View>
            )}
          />
        </View>
      </ScrollView>
      {isLoading && <Loader message="Loading Messages" />}
    </ScreenWrapper>
  );
}
