import { View, ScrollView, Text } from "react-native";
import React from "react";
import { styles } from "./TermsConditions.styles";
import { ScreenWrapper, Spacer } from "@/components";
import { SH } from "@/theme/ScalerDimensions";
import { backArrow } from "@/assets";
import { strings } from "@/localization";
import { NameHeader } from "@/components";

export function TermsConditions() {
  return (
    <ScreenWrapper>
    <View style={styles.container}>
      <NameHeader title={strings.settings.terms} back={backArrow} />

      <ScrollView style={styles.mainView}>
        <Spacer space={SH(30)} />

        <Text style={styles.privacyText}>{strings.settings.terms}</Text>
        <View style={styles.borderBottom}></View>

        <Spacer space={SH(20)} />

        <Text style={styles.headingText}>{strings.privacyPolicy.welcome}</Text>

        <Text style={styles.paraText}>{strings.privacyPolicy.para1}</Text>

        <Spacer space={SH(15)} />

        <Text style={styles.paraText}>{strings.privacyPolicy.para2}</Text>

        <Spacer space={SH(15)} />

        <Text style={styles.paraText}>{strings.privacyPolicy.para3}</Text>

        <Spacer space={SH(15)} />

        <Text style={styles.paraText}>{strings.privacyPolicy.para4}</Text>

        <Spacer space={SH(15)} />

        <Text style={styles.paraText}>{strings.privacyPolicy.cookies}</Text>

        <Text style={styles.paraText}>{strings.privacyPolicy.para5}</Text>

        <Spacer space={SH(15)} />

        <Text style={styles.paraText}>{strings.privacyPolicy.para6}</Text>

        <Spacer space={SH(15)} />

        <Text style={styles.paraText}>{strings.privacyPolicy.licenses}</Text>

        <Text style={styles.paraText}>{strings.privacyPolicy.para7}</Text>

        <Spacer space={SH(0)} />

        <Text style={styles.paraText}>{strings.privacyPolicy.youMustNot}</Text>

        <Text style={styles.paraText}>{strings.privacyPolicy.para8}</Text>

        <Spacer space={SH(15)} />

        <Text style={styles.paraText}>{strings.privacyPolicy.para9}</Text>

        <Spacer space={SH(0)} />

        <Text style={styles.paraText}>{strings.privacyPolicy.para10}</Text>

        <Spacer space={SH(15)} />

        <Text style={styles.paraText}>{strings.privacyPolicy.yourWarrant}</Text>

        <Spacer space={SH(5)} />

        <Text style={styles.paraText}>{strings.privacyPolicy.para11}</Text>
      </ScrollView>
    </View>
    </ScreenWrapper>
  );
}
