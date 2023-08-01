import React, { useState } from "react";
import { View, Text, useWindowDimensions } from "react-native";
import { NameHeaderCoins, ScreenWrapper } from "@/components";
import { styles } from "./SupportRequest.styles";
import { COLORS, SW } from "@/theme";
import { TabView, TabBar } from "react-native-tab-view";
import { MySupport } from "./MySupport";
import { SupportTicket } from "./SupportTicket";
import { Fonts } from "@/assets";
import { strings } from "@/localization";
import { SupportSelector } from "@/selectors/SupportSelectors";
import { useSelector } from "react-redux";

export function SupportRequest() {
  const layout = useWindowDimensions();
  const supportList = useSelector(SupportSelector);
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    { key: "first", title: `My support (${supportList?.support?.length})` },
    { key: "second", title: "Support" },
  ]);

  const renderScene = ({ route }) => {
    switch (route.key) {
      case "first":
        return <MySupport />;
      case "second":
        return <SupportTicket setIndex={setIndex} />;
      default:
        return null;
    }
  };
  const renderTabBar = (props) => {
    return (
      <TabBar
        {...props}
        renderLabel={({ focused, route }) => {
          return (
            <View
              style={[
                styles.tabButtonView,
                { borderColor: focused ? COLORS.primary : COLORS.light_border },
              ]}
            >
              <Text
                style={{
                  paddingHorizontal: focused ? SW(5) : SW(5),
                  color: focused ? COLORS.primary : COLORS.text,
                  fontFamily: focused ? Fonts.Regular : Fonts.Regular,
                }}
              >
                {route.title}
              </Text>
            </View>
          );
        }}
        indicatorStyle={{ backgroundColor: COLORS.white }}
        style={{
          elevation: 0,
          backgroundColor: COLORS.white,
        }}
        pressColor={COLORS.white}
        tabStyle={{ width: "auto" }}
      />
    );
  };
  return (
    <ScreenWrapper>
      <NameHeaderCoins
        backRequired
        title={strings.helpCenter.mySupportRequest}
      />
      <View style={{ flex: 1, paddingHorizontal: SW(15) }}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
          renderTabBar={renderTabBar}
          style={styles.tabView}
          swipeEnabled={false}
        />
      </View>
    </ScreenWrapper>
  );
}
