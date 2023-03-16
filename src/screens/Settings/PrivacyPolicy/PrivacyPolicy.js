import { Text, View, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { styles } from "./PrivacyPolicy.styles";
import { ScreenWrapper, Spacer } from "@/components";
import { SH } from "@/theme/ScalerDimensions";
import { backArrow } from "@/assets";
import { strings } from "@/localization";
import { NameHeader } from "@/components";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "@/selectors/UserSelectors";
import { getSettings } from "@/actions/UserActions";

export function PrivacyPolicy() {
  const dispatch = useDispatch();

  const settingData = useSelector(getUser);

  useEffect(() => {
    dispatch(getSettings());
  }, []);

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <NameHeader title={strings.settings.privacyPolicy} back={backArrow} />

        <ScrollView style={styles.mainView}>
          <Spacer space={SH(30)} />

          <Text style={styles.privacyText}>
            {strings.privacyPolicy.privacyPolicy}
          </Text>
          <View style={styles.borderBottom}></View>

          <Spacer space={SH(20)} />

          <Text style={styles.headingText}>
            {strings.privacyPolicy.welcome}
          </Text>
          <Text style={styles.paraText}>
            {settingData?.settings?.privacy_policy}
          </Text>

          {/* <Text style={styles.paraText}>{strings.privacyPolicy.para1}</Text>

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

          <Text style={styles.paraText}>{strings.privacyPolicy.para6}</Text> */}

          <Spacer space={SH(15)} />

          {/* <Text style={styles.paraText}>{strings.privacyPolicy.licenses}</Text>

          <Text style={styles.paraText}>{strings.privacyPolicy.para7}</Text>

          <Spacer space={SH(0)} />

          <Text style={styles.paraText}>
            {strings.privacyPolicy.youMustNot}
          </Text>

          <Text style={styles.paraText}>{strings.privacyPolicy.para8}</Text>

          <Spacer space={SH(15)} />

          <Text style={styles.paraText}>{strings.privacyPolicy.para9}</Text>

          <Spacer space={SH(0)} />

          <Text style={styles.paraText}>{strings.privacyPolicy.para10}</Text>

          <Spacer space={SH(15)} />

          <Text style={styles.paraText}>
            {strings.privacyPolicy.yourWarrant}
          </Text>

          <Spacer space={SH(5)} />

          <Text style={styles.paraText}>{strings.privacyPolicy.para11}</Text> */}
        </ScrollView>
      </View>
    </ScreenWrapper>
  );
}
