import { View, ScrollView, Text } from "react-native";
import React, { useEffect } from "react";
import { styles } from "./CookiesPolicy.styles";
import { ScreenWrapper, Spacer } from "@/components";
import { SH } from "@/theme/ScalerDimensions";
import { backArrow } from "@/assets";
import { strings } from "@/localization";
import { NameHeader } from "@/components";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "@/selectors/UserSelectors";
import { getSettings } from "@/actions/UserActions";

export function CookiesPolicy() {
  const dispatch = useDispatch();

  const settingData = useSelector(getUser)?.settings?.cookies_policy;

  useEffect(() => {
    dispatch(getSettings());
  }, []);

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <NameHeader title={strings.settings.cookiePolicy} back />

        <ScrollView style={styles.mainView}>
          <Spacer space={SH(20)} />

          <Text style={styles.headingText}>
            {strings.privacyPolicy.welcome}
          </Text>
          <View style={styles.borderBottom}></View>

          <Spacer space={SH(20)} />

          <Text style={styles.paraText}>{settingData}</Text>

          <Spacer space={SH(15)} />
        </ScrollView>
      </View>
    </ScreenWrapper>
  );
}
