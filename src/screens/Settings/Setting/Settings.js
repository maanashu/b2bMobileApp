import {
  Alert,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { styles } from "./Settings.styles";
import { Button, NameHeaderCoins, ScreenWrapper, Spacer } from "@/components";
import { SH } from "@/theme/ScalerDimensions";
import { goBack, navigate } from "@/navigation/NavigationRef";
import { ms, vs } from "react-native-size-matters";
import {
  backArrow,
  coinStack,
  forward,
  shippingBox,
  bellSettings,
  fingerPrint,
  workBag,
  callIcon,
  privacyCheck,
  cookies,
  lock_light,
  Rate,
  cache,
} from "@/assets";
import { strings } from "@/localization";
import { NAVIGATION } from "@/constants";
import { COLORS } from "@/theme";
import { useDispatch } from "react-redux";
import { getBanners } from "@/actions/BannerActions";
import { getSettings } from "@/actions/UserActions";

export function Settings() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSettings());
  }, []);
  const Data = [
    {
      id: 1,
      icon: shippingBox,
      title: strings.settings.shipTo,
      openIcon: forward,
    },
    {
      id: 2,
      icon: bellSettings,
      title: strings.settings.notifications,
      openIcon: forward,
    },
    {
      id: 3,
      icon: fingerPrint,
      title: strings.settings.faceId,
      openIcon: forward,
    },
  ];

  const SecondData = [
    {
      id: 1,
      icon: workBag,
      title: strings.settings.aboutUs,
      openIcon: forward,
    },
    {
      id: 2,
      icon: callIcon,
      title: strings.settings.contactUs,
      openIcon: forward,
    },
    {
      id: 3,
      icon: privacyCheck,
      title: strings.settings.privacyPolicy,
      openIcon: forward,
    },
    {
      id: 4,
      icon: cookies,
      title: strings.settings.cookiePolicy,
      openIcon: forward,
    },
    {
      id: 5,
      icon: lock_light,
      title: strings.settings.terms,
      openIcon: forward,
    },
  ];

  const ThirdData = [
    {
      id: 1,
      icon: Rate,
      title: strings.settings.rateApp,
      openIcon: forward,
    },
    {
      id: 2,
      icon: cache,
      title: strings.settings.clearCache,
      openIcon: forward,
    },
  ];

  const navigationHandler = (item) => {
    if (item.title === strings.settings.shipTo) {
      navigate(NAVIGATION.shipTo);
    } else if (item.title === strings.profile.settings) {
      navigate(NAVIGATION.settings);
    } else if (item.title === strings.settings.notifications) {
      navigate(NAVIGATION.notificationSetting);
    } else if (item.title === strings.settings.aboutUs) {
      navigate(NAVIGATION.aboutUs);
    } else if (item.title === strings.settings.contactUs) {
      navigate(NAVIGATION.contactUs);
    } else if (item.title === strings.settings.privacyPolicy) {
      navigate(NAVIGATION.privacyPolicy);
    } else if (item.title === strings.settings.cookiePolicy) {
      navigate(NAVIGATION.cookiesPolicy);
    } else if (item.title === strings.settings.terms) {
      navigate(NAVIGATION.termsConditions);
    } else if (item.title === strings.settings.faceId) {
      navigate(NAVIGATION.FaceIdPin);
    }
  };
  const FirstData = ({ item, index }) => (
    <View>
      <TouchableOpacity
        onPress={() => navigationHandler(item)}
        style={styles.profileOptions}
      >
        <View style={styles.innerRowView}>
          <Image
            source={item.icon}
            style={styles.iconStyle}
            resizeMode="stretch"
          />
          <View style={{ paddingLeft: ms(10) }}>
            <Text style={styles.titleText}>{item.title}</Text>
          </View>
        </View>

        <Image
          source={item.openIcon}
          style={styles.forwardIcon}
          resizeMode="stretch"
        />
      </TouchableOpacity>
      <Spacer space={SH(5)} />
    </View>
  );

  return (
    <ScreenWrapper>
      <NameHeaderCoins
        title={strings.profile.settings}
        back={backArrow}
        amount={"0"}
      />

      <View style={styles.mainView}>
        <Spacer space={SH(30)} />

        <View style={styles.backgroundView}>
          <FlatList
            data={Data}
            renderItem={FirstData}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
          />
        </View>

        <Spacer space={SH(30)} />

        <View style={styles.backgroundView}>
          <FlatList
            data={SecondData}
            renderItem={FirstData}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
          />
        </View>

        <Spacer space={SH(30)} />

        <FlatList
          data={ThirdData}
          renderItem={FirstData}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </ScreenWrapper>
  );
}
