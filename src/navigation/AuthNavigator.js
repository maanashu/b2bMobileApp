import React from "react";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { NAVIGATION } from "@/constants";
import { Splash, OnBoarding, Login, MobileNumber, Verify, EnterPin,ReEnterPin} from "@/screens";

const Stack = createNativeStackNavigator();

export function AuthNavigator() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      
      <Stack.Screen
        component={Splash}
        name={NAVIGATION.splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={OnBoarding}
        name={NAVIGATION.onboarding}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        component={Login}
        name={NAVIGATION.login}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        component={MobileNumber}
        name={NAVIGATION.mobileNumber}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        component={Verify}
        name={NAVIGATION.verify}
        options={{ headerShown: false }}
      /> 
      <Stack.Screen
         component={EnterPin}
        name={NAVIGATION.enterPin}
        options={{ headerShown: false }}
       />
       <Stack.Screen
      component={ReEnterPin}
      name={NAVIGATION.reEnterPin}
      options={{ headerShown: false }}
    />

       
      {/* <Stack.Screen
        component={OnBoarding}
        name={NAVIGATION.onboarding}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={Login}
        name={NAVIGATION.login}
        options={{ headerShown: false }}
      /> */}
    </Stack.Navigator>
  );
}
