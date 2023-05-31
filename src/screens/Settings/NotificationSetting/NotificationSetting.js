import { FlatList, View } from "react-native";
import React, { useState } from "react";
import { styles } from "./NotificationSetting.styles";
import { ScreenWrapper, Spacer } from "@/components";
import { SH, SW } from "@/theme/ScalerDimensions";
import { backArrow, notiToggle, toggleOff } from "@/assets";
import { strings } from "@/localization";
import { NameHeader } from "@/components";
import { Switch } from "@/components";
import { useDispatch } from "react-redux";
import { updateUserSettings } from "@/actions/UserActions";

export function NotificationSetting() {
  const [allowNoti, setallowNoti] = useState(true);
  const [allowPopup, setallowPopup] = useState(true);
  const [messages, setMessages] = useState(true);
  const [promotions, setPromotions] = useState(true);
  const [orders, setOrders] = useState(true);
  const [feeds, setFeeds] = useState(true);
  const [rqf, setRqf] = useState(true);

  const dispatch = useDispatch();

  const data = [
    {
      id: 1,
      name: "Allow Notification",
      status: allowNoti,
      setter: setallowNoti,
      value: "notification_status",
    },
    {
      id: 2,
      name: "Allow Notification popup",
      status: allowPopup,
      setter: setallowPopup,
      value: "push_notification_status",
    },
    {
      id: 3,
      name: "Chat Messages",
      status: messages,
      setter: setMessages,
      value: "chat_notification_status",
    },
    {
      id: 4,
      name: "Promotions",
      status: promotions,
      setter: setPromotions,
      value: "promotion_notification_status",
    },
    {
      id: 5,
      name: "Orders",
      status: orders,
      setter: setOrders,
      value: "order_notification_status",
    },
    {
      id: 6,
      name: "Feed",
      status: feeds,
      setter: setFeeds,
      value: "feeds_notification_status",
    },
    {
      id: 7,
      name: "RQF",
      status: rqf,
      setter: setRqf,
      value: "rqf_notification_status",
    },
  ];

  const toggleSwitch = (index) => {
    const item = data[index];
    item.setter(!item.status);
    const updatedItem = { ...item, status: !item.status };
    updateSettings(updatedItem.value, updatedItem.status);
  };
  const updateSettings = (value, status) => {
    const body = {
      app_name: "b2b",
      [value]: status,
    };
    dispatch(updateUserSettings(body));
  };

  const renderNotifications = ({ item, index }) => {
    return (
      <>
        {index <= 1 ? (
          <View style={styles.topNotiView}>
            <Switch
              title={item.name}
              source={item.status ? notiToggle : toggleOff}
              onPress={() => toggleSwitch(index)}
            />

            <Spacer space={SH(12)} />

            {index == 0 && <View style={styles.bottomLine} />}
            <Spacer space={SH(12)} />
          </View>
        ) : (
          <>
            {index === 2 && <Spacer space={SH(30)} />}
            <View style={{ paddingHorizontal: SW(35) }}>
              <Switch
                title={item.name}
                source={item.status ? notiToggle : toggleOff}
                onPress={() => toggleSwitch(index)}
              />

              <Spacer space={SH(12)} />

              <Spacer space={SH(12)} />
            </View>
          </>
        )}
      </>
    );
  };

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <NameHeader
          title={strings.settings.notificationSetting}
          back={backArrow}
        />

        <View>
          <Spacer space={SH(30)} />
          <FlatList
            data={data}
            renderItem={renderNotifications}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
}
{
  /* <View style={styles.mainView}>
          <Spacer space={SH(30)} />

          <View style={styles.topNotiView}>
            <Switch
              title={strings.notifications.allowNoti}
              source={allowNoti ? toggleOn : toggleOff}
              onPress={() => setallowNoti(!allowNoti)}
            />

            <Spacer space={SH(12)} />

            <View style={styles.bottomLine} />

            <Spacer space={SH(12)} />

            <Switch
              title={strings.notifications.allowNotiPopup}
              source={allowPopup ? toggleOn : toggleOff}
              onPress={() => setallowPopup(!allowPopup)}
            />
          </View>

          <Spacer space={SH(30)} />
          <View style={{ paddingHorizontal: SW(20) }}>
            <Switch
              title={strings.notifications.chatMessages}
              source={messages ? toggleOn : toggleOff}
              onPress={() => setMessages(!messages)}
            />

            <Spacer space={SH(25)} />

            <Switch
              title={strings.notifications.promotions}
              source={promotions ? toggleOn : toggleOff}
              onPress={() => setPromotions(!promotions)}
            />

            <Spacer space={SH(25)} />

            <Switch
              title={strings.notifications.orders}
              source={orders ? toggleOn : toggleOff}
              onPress={() => setOrders(!orders)}
            />

            <Spacer space={SH(25)} />

            <Switch
              title={strings.notifications.feeds}
              source={feeds ? toggleOn : toggleOff}
              onPress={() => setFeeds(!feeds)}
            />

            <Spacer space={SH(25)} />

            <Switch
              title={strings.notifications.rqf}
              source={rqf ? toggleOn : toggleOff}
              onPress={() => setRqf(!rqf)}
            />

            <Spacer space={SH(25)} />
          </View>
          <Spacer space={SH(20)} />
        </View> */
}
