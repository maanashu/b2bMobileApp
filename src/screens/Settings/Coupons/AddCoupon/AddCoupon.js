import { useWindowDimensions, View, Text } from "react-native";
import React, { useEffect } from "react";
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
import { useDispatch } from "react-redux";
import { addCoupon, getCoupons } from "@/actions/ProductActions";

export function AddCoupon() {
  const layout = useWindowDimensions();
  const dispatch = useDispatch();
  const [index, setIndex] = React.useState(0);
  const [couponAdd, setcouponAdd] = useState();
  console.log(couponAdd);

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
  const body = {
    page: 1,
    limit: 10,
  };
  const data = {
    code: couponAdd,
  };
  useEffect(() => {
    dispatch(getCoupons(body));
  }, []);

  const addingCoupons = () => {
    dispatch(addCoupon(data));
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
            onChangeText={setcouponAdd}
          />
        </View>
        <Button
          style={styles.Button}
          title={strings.coupons.addCoupon}
          textStyle={styles.buttonTextStyle}
          onPress={addingCoupons}
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
