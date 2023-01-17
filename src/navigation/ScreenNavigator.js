import React from "react";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { NAVIGATION } from "@/constants";
import { MakeAnOffer } from "@/screens";

const Stack = createNativeStackNavigator();

export function ScreenNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={MakeAnOffer}
        name={NAVIGATION.makeAnOffer}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
