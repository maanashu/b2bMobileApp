import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  FlatList,
  useWindowDimensions,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { NameHeader, ScreenWrapper, Spacer, TextField } from "@/components";
import { styles } from "./MyPurchase.styles";
import { COLORS, SF, SH, ShadowStyles, SW } from "@/theme";
import { HeaderCoin } from "../../Profile/Wallet/Components/HeaderCoin";
import { strings } from "@/localization";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";
import {
  backArrow,
  filter,
  Fonts,
  forward,
  loactionPinFilled,
  location,
  manufactureLogo,
  nearMeMap,
  shopLight,
  wareHouseLogo,
} from "@/assets";
import { Search } from "@/components/Search";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { Pending } from "../Pending/Pending";
import { Processing } from "../Processing/Processing";
import { Completed } from "../Completed/Completed";
import { Refund } from "../Refund/Refund";
import { Cancelled } from "../Cancelled/Cancelled";

export function MyPurchase() {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    { key: "first", title: "Pending" },
    { key: "second", title: "Processing" },
    { key: "third", title: "Completed" },
    { key: "fourth", title: "Refund" },
    // { key: "fifth", title: "Cancelled" },
  ]);

  const FirstRoute = () => <Pending />;
  const SecondRoute = () => <Processing />;
  const ThirdRoute = () => <Completed />;
  const FourthRoute = () => <Refund />;
  // const FifthRoute = () => <Cancelled />;

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
    fourth: FourthRoute,
    // fifth: FifthRoute,
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
        tabStyle={{ width: "auto", marginHorizontal: SW(-5) }}
      />
    );
  };
  return (
    <ScreenWrapper>
      <NameHeader back={backArrow} title={strings.home.nearMe} />
      <Spacer space={SH(20)} />
      <Search
        placeholder={strings.business.searchHere}
        styling={{ fontFamily: Fonts.Regular }}
      />
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
