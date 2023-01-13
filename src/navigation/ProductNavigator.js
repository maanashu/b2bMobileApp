import React from "react";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { NAVIGATION } from "@/constants";
import { ProductInquiry } from "@/screens";

const Stack = createNativeStackNavigator();

export function ProductNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={ProductInquiry}
        name={NAVIGATION.productInquiry}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
