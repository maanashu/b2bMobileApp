import React from "react";
import { Text, View, Image, ScrollView } from "react-native";
import { NameHeader, ScreenWrapper, Spacer } from "@/components";
import { strings } from "@/localization";
import { styles } from "./QrCode.styles";
import { SH } from "@/theme";
import { backArrow, bigQr, shareFull, download } from "@/assets";
import { ButtonIcon } from "@/components/ButtonIcon";

export function QrCode() {
  return (
    <ScreenWrapper style={styles.container}>
      <NameHeader title={strings.userInformation.back} back={backArrow} />
      <Spacer space={SH(1)} />

      <ScrollView style={styles.mainContainer}>
        <Spacer space={SH(100)} />

        <View style={styles.imageBackground}>
          <Image
            source={bigQr}
            resizeMode="contain"
            style={{ height: 250, width: 250 }}
          />
        </View>

        <Spacer space={SH(100)} />

        <View style={styles.textView}>
          <Text style={styles.text}>{strings.qrCode.scan}</Text>
        </View>

        <Spacer space={SH(50)} />

        <ButtonIcon title={strings.qrCode.share} icon={shareFull} />

        <Spacer space={SH(30)} />

        <ButtonIcon title={strings.qrCode.share} icon={download} />
      </ScrollView>
    </ScreenWrapper>
  );
}
