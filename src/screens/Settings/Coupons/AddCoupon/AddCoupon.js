import { useWindowDimensions, View, Text } from "react-native";
import React from "react";
import { styles } from "./AddCoupon.styles";
import {
  Button,
  NameHeaderCoins,
  ScreenWrapper,
  TextField,
} from "@/components";
import { SH } from "@/theme/ScalerDimensions";
import { COLORS } from "@/theme/Colors";
import { useState } from "react";
import { backArrow, Fonts } from "@/assets";
import { strings } from "@/localization";
import { CurrentCoupons, PastCoupons } from "@/screens";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

export function AddCoupon() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    { key: "Current", title: "Current" },
    { key: "Past", title: "Past" },
  ]);

  const FirstRoute = () => <CurrentCoupons />;
  const SecondRoute = () => <PastCoupons />;

  const renderScene = SceneMap({
    Current: FirstRoute,
    Past: SecondRoute,
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
                {
                  borderColor: focused ? COLORS.primary : COLORS.light_border,
                },
              ]}
            >
              <Text
                style={{
                  color: focused ? COLORS.primary : COLORS.text,
                  textAlignVertical: "center",
                  fontFamily: focused ? Fonts.SemiBold : Fonts.Regular,
                }}
              >
                {route.title}
              </Text>
            </View>
          );
        }}
        indicatorStyle={{ backgroundColor: COLORS.primary }}
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
    <ScreenWrapper style={{ flex: 1, backgroundColor: COLORS.white }}>
      <NameHeaderCoins
        title={strings.coupons.coupons}
        back={backArrow}
        amount={"0"}
      />

      <View style={styles.mainContainer}>
        <View style={{ marginTop: SH(20), marginBottom: SH(10) }}>
          <TextField
            style={styles.inputCoupon}
            placeholder={strings.coupons.couponCode}
          />
        </View>
        <Button
          style={styles.Button}
          title={strings.coupons.addCoupon}
          textStyle={styles.buttonTextStyle}
        />

        <TabView
          swipeEnabled={true}
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
          renderTabBar={renderTabBar}
        />
      </View>
    </ScreenWrapper>
  );
}
