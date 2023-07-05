import React from "react";
import { View, Text, useWindowDimensions } from "react-native";
import { NameHeader, ScreenWrapper } from "@/components";
import { styles } from "./NearMeOptions.styles";
import { COLORS, SF, SH, SW } from "@/theme";
import { strings } from "@/localization";
import { backArrow, Fonts } from "@/assets";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { ManufacturersNearMe } from "../ManufacturersNearMe/ManufacturersNearMe";
import { DistributorsNearMe } from "../DistributorsNearMe/DistributorsNearMe";
import { RetailersNearMe } from "../RetailersNearMe/RetailersNearMe";
import { goBack } from "@/navigation/NavigationRef";
import { useEffect } from "react";

export function NearMeOptions(props) {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(props?.route?.params?.id);

  const [routes] = React.useState([
    { key: "products", title: "Manufacturers" },
    { key: "business", title: "Distributors" },
    { key: "nearme", title: "Retailers" },
  ]);

  const FirstRoute = () => <ManufacturersNearMe />;
  const SecondRoute = () => <DistributorsNearMe />;
  const ThirdRoute = () => <RetailersNearMe />;

  const renderScene = SceneMap({
    products: FirstRoute,
    business: SecondRoute,
    nearme: ThirdRoute,
  });
  const renderTabBar = (props) => {
    return (
      <TabBar
        contentContainerStyle={{
          paddingHorizontal: SW(10),
          paddingVertical: SH(15),
        }}
        {...props}
        renderLabel={({ focused, route }) => {
          return (
            <View
              style={[
                styles.tabButtonView,

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
                  fontFamily: focused ? Fonts.Regular : Fonts.Regular,
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
          elevation: 0,
        }}
        pressColor={COLORS.white}
        tabStyle={{ width: "auto" }}
      />
    );
  };
  return (
    <ScreenWrapper>
      <NameHeader back title={strings.home.nearMe} backNavi={() => goBack()} />
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
