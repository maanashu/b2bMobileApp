import { View, ScrollView, Text, useWindowDimensions } from "react-native";
import React, { useEffect } from "react";
import { styles } from "./TermsConditions.styles";
import { ScreenWrapper, Spacer } from "@/components";
import { SH } from "@/theme/ScalerDimensions";
import { backArrow } from "@/assets";
import { strings } from "@/localization";
import { NameHeader } from "@/components";
import { useDispatch, useSelector } from "react-redux";
import { getSettings } from "@/actions/UserActions";
import { getUser } from "@/selectors/UserSelectors";
import WebView from "react-native-webview";

export function TermsConditions() {
  const { height } = useWindowDimensions();
  const dispatch = useDispatch();

  const settingData = useSelector(getUser);

  useEffect(() => {
    dispatch(getSettings());
  }, []);

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <NameHeader title={strings.settings.terms} back={backArrow} />

        <ScrollView style={styles.mainView}>
          <Spacer space={SH(20)} />

          <Text style={styles.headingText}>
            {strings.privacyPolicy.welcome}
          </Text>

          <View style={styles.borderBottom}></View>

          <WebView
            showsVerticalScrollIndicator={false}
            source={{
              html: `<html><head><meta name="viewport" content="width=device-width, initial-scale=1.0"></head><body>${settingData?.settings?.terms_and_conditons}</body></html>`,
            }}
            style={{
              height: height - SH(125),
              backgroundColor: "transparent",
              flex: 1,
            }}
          />
        </ScrollView>
      </View>
    </ScreenWrapper>
  );
}
