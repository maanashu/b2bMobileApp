import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";

import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Fonts } from "@/assets";
import { strings } from "@/localization";
import { NAVIGATION } from "@/constants";
import { Products } from "@/screens";

const Tab = createMaterialTopTabNavigator();
export function TopTabNavigator() {
  return (
    <Tab.Navigator
      swipeEnabled={false}
      tabBarOptions={{
        activeTintColor: "#000000",
        inactiveTintColor: "#CECECE",
        labelStyle: {
          fontFamily: Fonts.Bold,
          textTransform: "capitalize",
          fontSize: wp("4.2"),
          marginBottom: -2,
        },
        tabStyle: { paddingHorizontal: wp(3) },
        style: {
          elevation: 0,
          borderBottomWidth: wp(0.3),
          borderBottomColor: "#E1E1E1",
          marginHorizontal: wp("3"),
        },
        indicatorStyle: {
          height: wp("0.7"),
          borderRadius: wp("5"),
          backgroundColor: "#000000",
          marginRight: wp("10"),
          alignSelf: "center",
          width: wp("47"),
        },
      }}
    >
      <Tab.Screen name={NAVIGATION.products} component={Products} />
      {/* <Tab.Screen name="Category" component={Streamingcategory} /> */}
    </Tab.Navigator>
  );
}
