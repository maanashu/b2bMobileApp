import { Image, Text, View } from "react-native";
import React, { useEffect } from "react";
import { styles } from "./AboutUs.styles";
import { ScreenWrapper, Spacer } from "@/components";
import { SH } from "@/theme/ScalerDimensions";
import { backArrow, jobr_logo_icon } from "@/assets";
import { strings } from "@/localization";
import { NameHeader } from "@/components";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "@/selectors/UserSelectors";
import { getSettings } from "@/actions/UserActions";

export function AboutUs() {
  const dispatch = useDispatch();

  const settingData = useSelector(getUser)?.settings?.about_us;

  useEffect(() => {
    dispatch(getSettings());
  }, []);

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <NameHeader title={strings.settings.aboutUs} back={backArrow} />

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

          <Spacer space={SH(20)} />

          <Text style={styles.paraText}>{settingData}</Text>
        </View>
      </View>
    </ScreenWrapper>
  );
}
