import React, { useEffect } from "react";
import { View, Image, Text } from "react-native";

import { useDispatch, useSelector } from "react-redux";

import { strings } from "@/localization";
import { getUser } from "@/selectors/UserSelectors";
import { Button, ScreenWrapper, Spacer } from "@/components";

import { styles } from "@/screens/GetStarted/PersonalInformation/CheckRequestKYC/styles";
import { SH, SW } from "@/theme";
import { alarmClock } from "@/assets";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";
import { checkBusinessKyc, requestBusinessKyc } from "@/actions/KycActions";
import { getKyc } from "@/selectors/KycSelector";

export function BusinessKyc({ handleScreenChange }) {
  const dispatch = useDispatch();

  const getUserData = useSelector(getUser);
  const getKycData = useSelector(getKyc);
  const kycRequest = getKycData?.requestKyc?.payload;
  const kycStatus = getKycData?.checkBusinessKyc?.payload?.status;

  useEffect(() => {
    dispatch(requestBusinessKyc());
  }, []);

  useEffect(() => {
    let interval;
    if (kycStatus !== "passed") {
      interval = setInterval(() => {
        dispatch(checkBusinessKyc());
      }, 5000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [kycStatus !== "passed"]);

  useEffect(() => {
    if (kycStatus === "passed") {
      handleScreenChange(5);
    }
  }, [kycStatus]);

  return (
    <ScreenWrapper>
      <View style={styles.containerStyle}>
        <Spacer space={SH(80)} />
        <Text style={styles.headingTextStyle}>{strings.kyc.heading}</Text>

        <Spacer space={SH(20)} />

        <Text style={styles.descriptionTextStyle}>
          {strings.kyc.description}
        </Text>

        <Spacer space={SH(60)} />
        <Image source={alarmClock} style={styles.verificationImageStyle} />

        <Spacer space={SH(60)} />
        <Text style={styles.messageTextStyle}>
          {strings.kyc.requestMessage}
        </Text>

        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            paddingHorizontal: SW(20),
            paddingVertical: SH(30),
          }}
        >
          <Text style={styles.notifyText}>{strings.kyc.notify}</Text>
          <Spacer space={SH(25)} />
        </View>
      </View>
    </ScreenWrapper>
  );
}
