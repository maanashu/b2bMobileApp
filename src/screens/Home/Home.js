import React from "react";
import {
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { ScreenWrapper } from "@/components";
import { COLORS } from "@/theme/Colors";
import { SF, SH, SW } from "@/theme/ScalerDimensions";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { Business, Products } from "@/screens";
import { styles } from "./Home.styles";

import { Fonts } from "@/assets";
import { ShadowStyles } from "@/theme";

export function Home() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    { key: "products", title: "Products" },
    { key: "business", title: "Business" },
    { key: "nearme", title: "Near me" },
  ]);

  const FirstRoute = () => <Products />;
  const SecondRoute = () => <Business />;
  const ThirdRoute = () => <Business />;

  const renderScene = SceneMap({
    products: FirstRoute,
    business: SecondRoute,
    nearme: ThirdRoute,
  });
  const renderTabBar = (props) => {
    return (
      <TabBar
        contentContainerStyle={{
          paddingHorizontal: SW(40),
          justifyContent: "center",
        }}
        {...props}
        renderLabel={({ focused, route }) => {
          return (
            <View
              style={[
                styles.tabButtonView,
                {
                  borderColor: focused ? COLORS.primary : COLORS.light_border,
                },
                {
                  backgroundColor: focused
                    ? COLORS.primary
                    : COLORS.light_border,
                },
              ]}
            >
              <Text
                style={{
                  color: focused ? COLORS.white : COLORS.text,
                  textAlignVertical: "center",
                  fontFamily: focused ? Fonts.SemiBold : Fonts.Regular,
                  fontSize: SF(12),
                }}
              >
                {route.title}
              </Text>
            </View>
          );
        }}
        indicatorStyle={{ backgroundColor: COLORS.white }}
        style={{
          backgroundColor: COLORS.white,
          marginBottom: 1,
        }}
        pressColor={COLORS.white}
        tabStyle={{ width: "auto" }}
      />
    );
  };

  return (
    <ScreenWrapper>
      <View
        style={{
          height: SH(50),
          backgroundColor: COLORS.white,
          paddingHorizontal: SW(10),
          justifyContent: "center",
        }}
      >
        <TouchableOpacity>
          <Text>Select Your Address</Text>
        </TouchableOpacity>
      </View>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={renderTabBar}
        swipeEnabled={false}
      />
    </ScreenWrapper>
  );
}
