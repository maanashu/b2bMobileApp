import { View } from "react-native";
import React from "react";
import { styles } from "./NotificationSetting.styles";
import { ScreenWrapper, Spacer } from "@/components";
import { SH } from "@/theme/ScalerDimensions";
import { backArrow } from "@/assets";
import { strings } from "@/localization";
import { NameHeader } from "@/components";

export function NotificationSetting() {
  return (
    <ScreenWrapper>
    <View style={styles.container}>
      <NameHeader
        title={strings.settings.notificationSetting}
        back={backArrow}
      />

      <View style={styles.mainView}>
        <Spacer space={SH(30)} />

        <Spacer space={SH(20)} />
      </View>
    </View>
    </ScreenWrapper>
  );
}
