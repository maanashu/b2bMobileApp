import React from "react";
import { View, Text, useWindowDimensions } from "react-native";
import { ScreenWrapper } from "@/components";
import { styles } from "./SupportRequest.styles";
import { COLORS, SF, SW } from "@/theme";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { MySupport } from "./MySupport";
import { SupportTicket } from "./SupportTicket";
import { Fonts } from "@/assets";
import { strings } from "@/localization";
import { HeaderCoin } from "@/screens/Profile/Wallet/Components/HeaderCoin";

export function SupportRequest() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    { key: "first", title: "My support (1)" },
    { key: "second", title: "Support" },
  ]);

  const FirstRoute = () => <MySupport />;
  const SecondRoute = () => <SupportTicket />;

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });
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
                  paddingHorizontal: focused ? SW(5) : SW(6.5),
                  color: focused ? COLORS.primary : COLORS.text,
                  fontFamily: focused ? Fonts.SemiBold : Fonts.Regular,
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
      <HeaderCoin title={strings.helpCenter.mySupportRequest} />
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
