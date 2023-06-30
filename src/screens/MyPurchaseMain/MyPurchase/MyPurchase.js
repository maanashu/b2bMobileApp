import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { ScrollView, View, Text } from "react-native";
import { Cancelled } from "../Cancelled/Cancelled";
import { Refund } from "../Refund/Refund";
import { Processing } from "../Processing/Processing";
import { Pending } from "../Pending/Pending";
import {
  NameHeader,
  NameHeaderCoins,
  ScreenWrapper,
  Spacer,
} from "@/components";
import { Search } from "@/components/Search";
import { backArrow, Fonts } from "@/assets";
import { strings } from "@/localization";
import { COLORS, SF, SH, SW } from "@/theme";
import { Completed } from "../Completed/Completed";
import { goBack } from "@/navigation/NavigationRef";

const Tab = createMaterialTopTabNavigator();

const ScrollableTabBar = (props) => {
  const { state, navigation } = props;

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{}}
      style={{ flexGrow: 0.01 }}
    >
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: SW(15),
          height: 50,
        }}
      >
        {state.routes.map((route, index) => {
          const label = route.name;
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <View
              key={route.key}
              style={{
                paddingHorizontal: SW(15),
                backgroundColor: isFocused
                  ? COLORS.primary
                  : COLORS.placeHolder,
                height: SH(30),
                borderRadius: SW(20),
                marginHorizontal: SW(5),
                alignItems: "center",
                justifyContent: "center",
                marginTop: SH(20),
              }}
            >
              <Text
                onPress={onPress}
                style={{ color: isFocused ? COLORS.white : COLORS.darkGrey }}
              >
                {label}
              </Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export function MyPurchase() {
  return (
    <>
      <ScreenWrapper>
        <NameHeaderCoins
          backRequired
          title={strings.myPurchase.myPurchase}
          onPress={() => goBack()}
        />
        <Spacer space={SH(20)} />
        <Search
          placeholder={strings.business.searchHere}
          styling={{ fontFamily: Fonts.Regular }}
        />
        <Spacer space={SH(5)} />

        <Tab.Navigator
          // tabBarItemStyle={{ width: 100, backgroundColor: "red" }}
          tabBar={(props) => <ScrollableTabBar {...props} />}

          // screenOptions={{
          //   tabBarScrollEnabled: true,
          //   tabBarActiveTintColor: COLORS.primary,
          //   tabBarInactiveTintColor: COLORS.darkGrey,

          //   tabBarItemStyle: {
          //     borderRadius: SW(20),
          //     paddingVertical: SH(5),
          //     marginBottom: SH(10),
          //     backgroundColor: "red",
          //     paddingHorizontal: 5,
          //     marginHorizontal: 15,
          //   },
          //   tabBarLabelStyle: {
          //     color: "green",

          //   },
          //   tabBarStyle: { paddingHorizontal: SW(10) },
          //   tabBarIndicatorStyle: { height: 0 },
          //   tabBarPressColor: "transparent",
          //   swipeEnabled: false,

          //   // tabBarStyle: {
          //   //   width: 600,
          //   //   backgroundColor: "red",
          //   // },
          // }}
        >
          <Tab.Screen
            name="Pending"
            component={Pending}
            // options={{
            //   headerShown: false,
            //   tabBarLabel: ({ focused, color, size }) => (
            //     // <View
            //     //   style={{
            //     //     backgroundColor: focused
            //     //       ? COLORS.primary
            //     //       : COLORS.placeHolder,
            //     //     borderRadius: 20,
            //     //     alignItems: "center",
            //     //     justifyContent: "center",
            //     //   }}
            //     // >
            //     <Text
            //       style={{
            //         color: focused ? COLORS.white : COLORS.darkGrey,
            //         fontFamily: Fonts.Regular,
            //         paddingHorizontal: SW(15),
            //         paddingVertical: SH(7),
            //       }}
            //     >
            //       {"Pending"}
            //     </Text>
            //     // </View>
            //   ),
            // }}
          />
          <Tab.Screen
            name="Processing"
            component={Processing}
            // options={{
            //   headerShown: false,
            //   tabBarLabel: ({ focused, color, size }) => (
            //     <Text
            //       style={{
            //         color: focused ? COLORS.white : COLORS.darkGrey,
            //         fontFamily: Fonts.Regular,
            //         width: SW(100),
            //         paddingVertical: SH(7),
            //         alignSelf: "center",
            //         marginLeft: SW(20),
            //       }}
            //     >
            //       {"Processing"}
            //     </Text>
            //   ),
            // }}
          />
          <Tab.Screen name="Completed" component={Completed} />
          <Tab.Screen name="Refund" component={Refund} />
          <Tab.Screen name="Cancelled" component={Cancelled} />
        </Tab.Navigator>
      </ScreenWrapper>
    </>
  );
}
