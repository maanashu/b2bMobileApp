import React, { useEffect } from "react";
import { View, Text, ScrollView, FlatList } from "react-native";
import { Spacer, ScreenWrapper, Button } from "@/components";
import { styles } from "./Faq.styles";
import { COLORS, SH, SW } from "@/theme";

import { HeaderCoin } from "@/screens/Profile/Wallet/Components/HeaderCoin";
import { backArrow } from "@/assets";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";

export function FaqVerified(props) {
  const RouteData = props?.route?.params?.data;

  useEffect(() => {
    console.log(RouteData?.answer, "data");
  });

  return (
    <ScreenWrapper>
      <HeaderCoin title={RouteData?.question} back={backArrow} amount={0} />
      <View style={{ flex: 1 }}>
        <ScrollView style={{ paddingHorizontal: SW(20), flex: 1 }}>
          <Spacer space={SH(20)} />

          <Text style={[styles.text]}>{RouteData?.question}</Text>

          <Spacer space={SH(10)} />

          <View style={styles.line} />

          <Spacer space={SH(34)} />
          <View style={{ flex: 1 }}>
            <Text style={[styles.stext]}>{RouteData?.answer}</Text>
          </View>

          <Spacer space={SH(30)} />
        </ScrollView>

        <View
          style={{
            justifyContent: "flex-end",
            flex: 1,
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
