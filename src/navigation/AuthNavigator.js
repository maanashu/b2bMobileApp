import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { NAVIGATION } from '@/constants';
import { Login } from '@/screens';
import { OnBoarding } from '@/screens/OnBoarding/OnBoarding';

const Stack = createNativeStackNavigator();

export function AuthNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={NAVIGATION.onboarding}
      screenOptions={{
        headerShown: false,
      }}
    >
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
    </Stack.Navigator>
  );
}
