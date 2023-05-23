import { Image, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./FaceIdPin.styles";
import { ScreenWrapper, Spacer, Switch } from "@/components";
import { SH } from "@/theme/ScalerDimensions";
import {
  backArrow,
  faceIdIcon,
  rightArrowBlue,
  toggleOff,
  toggleOn,
} from "@/assets";
import { strings } from "@/localization";
import { NameHeader } from "@/components";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "@/selectors/UserSelectors";
import { biometricsSet } from "@/actions/GlobalActions";
import { useIsFocused } from "@react-navigation/native";
import ReactNativeBiometrics, { BiometryTypes } from "react-native-biometrics";
import { Toast } from "react-native-toast-message/lib/src/Toast";

export function FaceIdPin() {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const [pin, setPin] = useState(false);

  const handleBiometrics = () => {
    if (user?.isStatus) {
      dispatch(biometricsSet(false));
    } else {
      // dispatch(biometricsSet(true));
      bioMetricLogin();
    }
  };
  const rnBiometrics = new ReactNativeBiometrics({
    allowDeviceCredentials: true,
  });
  const bioMetricLogin = () => {
    rnBiometrics.isSensorAvailable().then((resultObject) => {
      console.log("BIOMETRICS_RESULT--" + JSON.stringify(resultObject));
      const { available, biometryType } = resultObject;

      if (available && biometryType === BiometryTypes.TouchID) {
        console.log("TouchID is supported");
        dispatch(biometricsSet(true));
      } else if (available && biometryType === BiometryTypes.FaceID) {
        console.log("FaceID is supported");
        dispatch(biometricsSet(true));
      } else if (available && biometryType === BiometryTypes.Biometrics) {
        console.log("Biometrics is supported");
        dispatch(biometricsSet(true));
      } else {
        Toast.show({
          text2: strings.biometric.setupBiometric,
          position: "bottom",
          type: "error_toast",
          visibilityTime: 1500,
        });
      }
    });
  };
  const user = useSelector(getUser);

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
              onPress={handleBiometrics}
              source={user?.isStatus === true ? toggleOn : toggleOff}
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

          {/* <View style={styles.pinButton}>
            <Switch
              TextStyle={styles.bottomTexts}
              resizeMode="contain"
              iconStyle={styles.arrowStyle}
              source={rightArrowBlue}
              title={strings.faceId.setupFaceId}
            />
          </View> */}

          <Spacer space={SH(15)} />
        </View>
      </View>
    </ScreenWrapper>
  );
}
