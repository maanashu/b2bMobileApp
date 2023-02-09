import React from "react";
import { Text, View, Image } from "react-native";
import { styles } from "./Splash.styles";
import { ScreenWrapper, Spacer, Button } from "@/components";
import { SH, SF, SW } from "@/theme";
import { Fonts, jobrSplash } from "@/assets";
import { strings } from "@/localization";
import LinearGradient from "react-native-linear-gradient";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";

export function Splash() {
  return (
    <LinearGradient
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 2, y: 1 }}
      colors={["#275AFF", "#1CD3FF"]}
    >
      <Spacer space={SH(90)} />
      <Image source={jobrSplash} style={styles.jobrSplash} />
      <View style={styles.flexOne} />
      <Button
        title={strings.splash.signIn}
        style={styles.signIn}
        textStyle={styles.signtextStyle}
        onPress={() => navigate(NAVIGATION.mobileNumber)}
      />
      <Spacer space={SH(10)} />
      <Button
        title={strings.splash.register}
        style={styles.register}
        textStyle={styles.textStyle}
        onPress={() => navigate(NAVIGATION.mobileNumber)}
      />
      <Spacer space={SH(30)} />
    </LinearGradient>
  );
}
