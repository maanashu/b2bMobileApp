import React, { useState } from "react";
import { View, Image, Text, FlatList, useWindowDimensions } from "react-native";
import { ScreenWrapper, Spacer, Header } from "@/components";
import { styles } from "./BusinessCards.styles";
import { COLORS, SH, SW } from "@/theme";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import {
  backArrow,
  building,
  businessCardUser,
  companyBuildings,
  email,
  email_chat,
  filter,
  location,
  phoneCall,
} from "@/assets";
import { strings } from "@/localization";
import { ms, vs } from "react-native-size-matters";
import { style } from "deprecated-react-native-prop-types/DeprecatedViewPropTypes";

const Cards = [
  {
    id: 1,
    pic: businessCardUser,
    company: strings.STATIC.businessCards.companyName,
    address: strings.STATIC.businessCards.address,
    email: strings.STATIC.businessCards.email,
    phone: strings.STATIC.businessCards.phone,
  },
  {
    id: 2,
    pic: businessCardUser,
    company: strings.STATIC.businessCards.companyName,
    address: strings.STATIC.businessCards.address,
    email: strings.STATIC.businessCards.email,
    phone: strings.STATIC.businessCards.phone,
  },
  {
    id: 3,
    pic: businessCardUser,
    company: strings.STATIC.businessCards.companyName,
    address: strings.STATIC.businessCards.address,
    email: strings.STATIC.businessCards.email,
    phone: strings.STATIC.businessCards.phone,
  },
  {
    id: 4,
    pic: businessCardUser,
    company: strings.STATIC.businessCards.companyName,
    address: strings.STATIC.businessCards.address,
    email: strings.STATIC.businessCards.email,
    phone: strings.STATIC.businessCards.phone,
  },
  {
    id: 5,
    pic: businessCardUser,
    company: strings.STATIC.businessCards.companyName,
    address: strings.STATIC.businessCards.address,
    email: strings.STATIC.businessCards.email,
    phone: strings.STATIC.businessCards.phone,
  },
];

const renderItem = ({ item }) => (
  <View style={styles.cardView}>
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image source={item.pic} style={styles.userPic} />
      <Text style={styles.userNameText}>
        {strings.STATIC.businessCards.userName}
      </Text>
    </View>

    <Spacer space={SH(15)} />

    <View style={styles.detailRowView}>
      <Image
        source={companyBuildings}
        style={styles.iconsStyle}
        resizeMode="contain"
      />
      <Text style={styles.detailText}>{item.company}</Text>
    </View>

    <Spacer space={SH(10)} />

    <View style={styles.detailRowView}>
      <Image source={location} style={styles.iconsStyle} resizeMode="contain" />
      <Text style={styles.detailText}>{item.address}</Text>
    </View>

    <Spacer space={SH(10)} />

    <View style={styles.detailRowView}>
      <Image
        source={email_chat}
        style={styles.iconsStyle}
        resizeMode="contain"
      />
      <Text style={styles.detailText}>{item.email}</Text>
    </View>

    <Spacer space={SH(10)} />

    <View style={styles.detailRowView}>
      <Image
        source={phoneCall}
        style={styles.iconsStyle}
        resizeMode="contain"
      />
      <Text style={styles.detailText}>{item.phone}</Text>
    </View>

    <Spacer space={SH(10)} />

    <View style={styles.endButton}>
      <Text style={styles.typeText}>
        {strings.STATIC.businessCards.apparel}
      </Text>
    </View>
  </View>
);
const FirstRoute = () => <View style={{ backgroundColor: "red" }} />;

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: COLORS.white }} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});
export function BusinessCards() {
  const [isActive, setIsActive] = useState(false);
  const [isNext, setIsNext] = useState(false);
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    { key: "first", title: "Received Business Cards" },
    { key: "second", title: "Owned Business Cards" },
  ]);

  const renderTabBar = (props) => {
    return (
      <TabBar
        contentContainerStyle={{ paddingHorizontal: SW(10) }}
        {...props}
        renderLabel={({ focused, route }) => {
          return (
            <Text
              style={[
                styles.tabBtn,
                {
                  color: focused ? COLORS.white : COLORS.text,
                  borderColor: focused ? COLORS.primary : COLORS.inputBorder,
                  backgroundColor: focused
                    ? COLORS.primary
                    : COLORS.inputBorder,
                },
              ]}
            >
              {route.title}
            </Text>
          );
        }}
        indicatorStyle={{ backgroundColor: COLORS.white }}
        style={{
          elevation: 0,
          backgroundColor: COLORS.white,
        }}
        pressColor={COLORS.white}
        tabStyle={{ width: "auto" }}
      />
    );
  };

  return (
    <ScreenWrapper>
      <>
        <Header title={strings.profile.businessCard} back={backArrow} />
      </>
      <Spacer space={SH(15)} />

      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={renderTabBar}
        style={{ flex: 0 }}
      />

      <View style={styles.filter}>
        <Text style={styles.filterText}>Filter</Text>
        <Image
          source={filter}
          resizeMode="contain"
          style={styles.filterIconStyle}
        />
      </View>

      <Spacer space={SH(15)} />

      <FlatList
        data={Cards}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </ScreenWrapper>
  );
}
