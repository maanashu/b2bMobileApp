import { View, Image, Text } from "react-native";
import React from "react";
import { styles } from "./ContactUs.styles";
import { ScreenWrapper, Spacer } from "@/components";
import { SH } from "@/theme/ScalerDimensions";
import { backArrow, call, callIcon, email, jobr_logo_icon } from "@/assets";
import { strings } from "@/localization";
import { NameHeader } from "@/components";
import { ms } from "react-native-size-matters";

export function ContactUs() {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <NameHeader title={strings.settings.contactUs} back />

        <View style={styles.mainView}>
          <Spacer space={SH(30)} />
          <View style={styles.logoView}>
            <Image
              source={jobr_logo_icon}
              resizeMode="contain"
              style={styles.logoStyle}
            />

            <Text style={styles.jobrText}>{strings.aboutUs.jobr}</Text>
          </View>

          <Spacer space={SH(50)} />

          <View style={{ paddingHorizontal: ms(40) }}>
            <Text style={styles.headingText}>{strings.contactUs.email}</Text>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={email}
                style={styles.iconStyle}
                resizeMode="contain"
              />
              <Text style={styles.paraText}>{strings.contactUs.mail}</Text>
            </View>

            <Spacer space={SH(20)} />

            <Spacer space={SH(20)} />

            <Text style={styles.headingText}>
              {strings.contactUs.phoneNumber}
            </Text>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={call}
                style={styles.iconStyle}
                resizeMode="contain"
              />
              <Text style={styles.paraText}>612717070</Text>
            </View>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
}
