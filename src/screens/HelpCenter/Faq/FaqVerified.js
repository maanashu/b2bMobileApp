import React from "react";
import { View, Text, ScrollView, useWindowDimensions } from "react-native";
import { Spacer, ScreenWrapper, Button, NameHeaderCoins } from "@/components";
import { styles } from "./Faq.styles";
import { COLORS, SH, SW } from "@/theme";

import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";
import WebView from "react-native-webview";

export function FaqVerified(props) {
  const { height } = useWindowDimensions();

  const RouteData = props?.route?.params?.data;
  return (
    <ScreenWrapper>
      <NameHeaderCoins title={RouteData?.question} backRequired />
      <View style={{ flex: 1 }}>
        <ScrollView
          style={{ paddingHorizontal: SW(20), flex: 1 }}
          showsVerticalScrollIndicator={false}
        >
          <Spacer space={SH(20)} />

          <Text style={[styles.text]}>{RouteData?.question}</Text>

          <Spacer space={SH(10)} />

          <View style={styles.line} />

          <Spacer space={SH(34)} />
          <View style={{ flex: 1 }}>
            {/* <Text style={[styles.stext]}>{RouteData?.answer}</Text> */}
            <WebView
              showsVerticalScrollIndicator={false}
              source={{
                html: `<html><head><meta name="viewport" content="width=device-width, initial-scale=1.0"></head><body>${RouteData?.answer}</body></html>`,
              }}
              style={{
                height: height - SH(125),
                backgroundColor: "transparent",
                flex: 1,
              }}
            />
          </View>

          <Spacer space={SH(30)} />
        </ScrollView>

        <View
          style={{
            justifyContent: "flex-end",
            padding: SW(20),
          }}
        >
          <Button
            onPress={() => navigate(NAVIGATION.helpCenter)}
            title={"Helpful"}
            style={styles.submit}
            textStyle={{ color: COLORS.primary }}
          />
          <Spacer space={SH(10)} />

          <Button
            onPress={() => navigate(NAVIGATION.helpCenter)}
            title={"NO! I need more help"}
            style={[styles.submit, { borderColor: COLORS.light_grey }]}
            textStyle={{ color: COLORS.light_grey }}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
}
