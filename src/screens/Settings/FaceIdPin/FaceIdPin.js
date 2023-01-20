import { Image, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { styles } from "./FaceIdPin.styles";
import { ScreenWrapper, Spacer, Switch } from "@/components";
import { SH, SW } from "@/theme/ScalerDimensions";
import {
  backArrow,
  faceIdIcon,
  rightArrowBlue,
  toggleOff,
  toggleOn,
} from "@/assets";
import { strings } from "@/localization";
import { NameHeader } from "@/components";
import { COLORS } from "@/theme";

export function FaceIdPin() {
  const [faceId, setFaceId] = useState(false);
  const [pin, setPin] = useState(false);

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <NameHeader title={strings.settings.faceId} back={backArrow} />

        <View style={styles.mainView}>
          <Spacer space={SH(60)} />

          <Image
            source={faceIdIcon}
            resizeMode="contain"
            style={styles.faceIconStyle}
          />
          <Spacer space={SH(60)} />

          <View style={styles.topNotiView}>
            <Text style={styles.headingBold}>{strings.faceId.enable}</Text>
            <Switch
              TextStyle={styles.bottomTexts}
              onPress={() => setFaceId(!faceId)}
              source={faceId ? toggleOn : toggleOff}
              title={strings.faceId.faceId}
            />
            <Spacer space={SH(12)} />

            <View style={styles.bottomLine} />

            <Spacer space={SH(12)} />

            <Switch
              TextStyle={styles.bottomTexts}
              onPress={() => setPin(!pin)}
              source={pin ? toggleOn : toggleOff}
              title={strings.faceId.pin}
            />
            <Spacer space={SH(12)} />

            <View style={styles.bottomLine} />

            <Spacer space={SH(12)} />

            <Text style={styles.smallText}>{strings.faceId.text}</Text>
          </View>

          <Spacer space={SH(35)} />
          <View style={styles.pinButton}>
            <Switch
              TextStyle={styles.bottomTexts}
              resizeMode="contain"
              iconStyle={styles.arrowStyle}
              source={rightArrowBlue}
              title={strings.faceId.setupFaceId}
            />
          </View>

          <Spacer space={SH(10)} />

          <View style={styles.pinButton}>
            <Switch
              TextStyle={styles.bottomTexts}
              resizeMode="contain"
              iconStyle={styles.arrowStyle}
              source={rightArrowBlue}
              title={strings.faceId.setupFaceId}
            />
          </View>

          <Spacer space={SH(15)} />
        </View>
      </View>
    </ScreenWrapper>
  );
}
