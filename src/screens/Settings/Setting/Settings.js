import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import { styles } from "./Settings.styles";
import { NameHeaderCoins, ScreenWrapper, Spacer } from "@/components";
import { SH } from "@/theme/ScalerDimensions";
import { goBack, navigate } from "@/navigation/NavigationRef";
import { ms } from "react-native-size-matters";
import {
  backArrow,
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
import { useDispatch, useSelector } from "react-redux";
import { getSettings, getUserSettings } from "@/actions/UserActions";
import { getOrderList } from "@/actions/OrderAction";
import { getUser } from "@/selectors/UserSelectors";

export function Settings() {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  useEffect(() => {
    dispatch(getSettings());
  }, []);

  const Data = [
    {
      id: 1,
      icon: shippingBox,
      title: strings.settings.shipTo,
      openIcon: forward,
      navigation: NAVIGATION.selectAddress,
    },
    {
      id: 2,
      icon: bellSettings,
      title: strings.settings.notifications,
      openIcon: forward,
      navigation: NAVIGATION.notificationSetting,
    },
    {
      id: 3,
      icon: fingerPrint,
      title: strings.settings.faceId,
      openIcon: forward,
      navigation: NAVIGATION.FaceIdPin,
    },
  ];

  const SecondData = [
    {
      id: 1,
      icon: workBag,
      title: strings.settings.aboutUs,
      openIcon: forward,
      navigation: NAVIGATION.aboutUs,
    },
    {
      id: 2,
      icon: callIcon,
      title: strings.settings.contactUs,
      openIcon: forward,
      navigation: NAVIGATION.contactUs,
    },
    {
      id: 3,
      icon: privacyCheck,
      title: strings.settings.privacyPolicy,
      openIcon: forward,
      navigation: NAVIGATION.privacyPolicy,
    },
    {
      id: 4,
      icon: cookies,
      title: strings.settings.cookiePolicy,
      openIcon: forward,
      navigation: NAVIGATION.cookiesPolicy,
    },
    {
      id: 5,
      icon: lock_light,
      title: strings.settings.terms,
      openIcon: forward,
      navigation: NAVIGATION.termsConditions,
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
    if (item?.navigation) {
      if (item?.navigation === NAVIGATION.notificationSetting) {
        dispatch(getUserSettings({}));
      }
      navigate(item?.navigation);
    }
  };
  useEffect(() => {
    dispatch(getOrderList({ page: 1, limit: 10 }));
  }, []);
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
        backRequired
        onPress={() => goBack()}
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
