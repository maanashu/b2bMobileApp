import React from "react";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { NAVIGATION } from "@/constants";
import { Chatting, MakeAnOffer, ProductInquiry } from "@/screens";

const Stack = createNativeStackNavigator();

export function ProductNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={ProductInquiry}
        name={NAVIGATION.productInquiry}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        component={Chatting}
        name={NAVIGATION.chatting}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={MakeAnOffer}
        name={NAVIGATION.makeAnOffer}
        options={{ headerShown: false }}
      /> */}
    </Stack.Navigator>
  );
}
