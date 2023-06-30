import { useWindowDimensions, View, Text } from "react-native";
import React, { useEffect } from "react";
import { styles } from "./AddCoupon.styles";
import {
  Button,
  NameHeaderCoins,
  ScreenWrapper,
  Spacer,
  TextField,
} from "@/components";
import { SH } from "@/theme/ScalerDimensions";
import { COLORS } from "@/theme/Colors";
import { useState } from "react";
import { backArrow, Fonts } from "@/assets";
import { strings } from "@/localization";
import { CurrentCoupons, PastCoupons } from "@/screens";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { useDispatch, useSelector } from "react-redux";
import { addCoupon, getCoupons } from "@/actions/ProductActions";
import { goBack, navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";
import { Loader } from "@/components/Loader";
import { isLoadingSelector } from "@/selectors/StatusSelectors";
import { TYPES } from "@/Types/Types";

export function AddCoupon(params) {
  const layout = useWindowDimensions();
  const dispatch = useDispatch();
  const [index, setIndex] = React.useState(0);
  const [couponAdd, setcouponAdd] = useState();

  const isLoading = useSelector((state) =>
    isLoadingSelector([TYPES.GET_COUPONS], state)
  );

  const [routes] = React.useState([
    { key: "Current", title: "Current" },
    { key: "Past", title: "Past" },
  ]);

  const FirstRoute = () => <CurrentCoupons {...params} />;
  const SecondRoute = () => <PastCoupons {...params} />;

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
  const body = {
    seller_id: params?.route?.params?.seller_id,
    page: 1,
    limit: 10,
  };
  const data = {
    code: "SAVE90",
    seller_id: "b169ed4d-be27-44eb-9a08-74f997bc6a2a",
    service_id: "1",
    order_amount: "45",
  };
  useEffect(() => {
    dispatch(getCoupons(body));
  }, []);

  const addingCoupons = () => {
    dispatch(addCoupon(data));
  };
  const backHandler = () => {
    // params?.route?.params === "checkout"
    //   ? navigate(NAVIGATION.checkout)
    //   : navigate(NAVIGATION.profile);
    goBack();
  };
  return (
    <ScreenWrapper style={{ flex: 1, backgroundColor: COLORS.white }}>
      <NameHeaderCoins
        title={strings.coupons.coupons}
        backRequired
        onPress={backHandler}
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
        <Spacer space={SH(10)} />

        <TabView
          swipeEnabled={true}
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
          renderTabBar={renderTabBar}
        />
      </View>
      {isLoading && <Loader message="Loading Coupons..." />}
    </ScreenWrapper>
  );
}
