import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  useWindowDimensions,
} from "react-native";
import { ScreenWrapper } from "@/components";
import { strings } from "@/localization";
import { styles } from "./Orders.styles";
import { COLORS, SF, SH, SW } from "@/theme";

import { coinStack, Fonts, search } from "@/assets";
import { Pending } from "../MyPurchaseMain/Pending/Pending";
import { Processing } from "../MyPurchaseMain/Processing/Processing";
import { Completed } from "../MyPurchaseMain/Completed/Completed";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";

export function Orders() {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    { key: "first", title: "New Orders" },
    { key: "second", title: "Processing orders" },
    { key: "third", title: "Completed orders" },
    // { key: "fifth", title: "Cancelled" },
  ]);

  const FirstRoute = () => <Pending />;
  const SecondRoute = () => <Processing />;
  const ThirdRoute = () => <Completed />;
  // const FifthRoute = () => <Cancelled />;

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
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
    <ScreenWrapper style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerInnerView}>
          <Text style={styles.headerText}>{strings.profile.myJobr}</Text>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity>
              <Image
                resizeMode="contain"
                source={search}
                style={styles.searchIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerIconView}>
              <Text style={styles.filterText}>0</Text>
              <Image
                resizeMode="contain"
                source={coinStack}
                style={styles.filterIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.topTabContainer}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
          renderTabBar={renderTabBar}
          swipeEnabled={false}
        />
      </View>
    </ScreenWrapper>
  );
}
