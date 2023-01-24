import React, { useState } from "react";
import { View, Image, Text, FlatList, useWindowDimensions } from "react-native";
import { ScreenWrapper, Spacer } from "@/components";
import { styles } from "./TransactionHistory.styles";
import { COLORS, SH, SW } from "@/theme";
import { transactionHistory } from "@/constants/flatlistData";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { HeaderCoin } from "../Components/HeaderCoin";
import { strings } from "@/localization";

const Item = ({ title, date, balance, image }) => (
  <View style={styles.tranHisCon}>
    <View style={{ display: "flex", flexDirection: "row" }}>
      <Image source={image} style={styles.bgEarn} />
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: 8,
        }}
      >
        <Text style={styles.deliveryFeeText}>{title}</Text>
        <Text style={styles.dateTime}>{date}</Text>
      </View>
    </View>
    <Text style={styles.balanceText}>{balance}</Text>
  </View>
);
const FirstRoute = () => <View style={{ backgroundColor: "red" }} />;

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: COLORS.white }} />
);
const ThirdRoute = () => (
  <View style={{ flex: 1, backgroundColor: COLORS.white }} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
});
export function TransactionHistory() {
  const [isActive, setIsActive] = useState(false);
  const [isNext, setIsNext] = useState(false);
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    { key: "first", title: "Added" },
    { key: "second", title: "Purchases" },
    { key: "third", title: "Earn" },
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
  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      date={item.date}
      balance={item.balance}
      image={item.image}
    />
  );

  return (
    <ScreenWrapper>
      <HeaderCoin amount={"0"} title={strings.jbrWallet.transactionHistory} />

      <Spacer space={SH(15)} />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={renderTabBar}
        style={{ flex: 0 }}
      />
      <Spacer space={SH(15)} />

      <FlatList
        data={transactionHistory}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </ScreenWrapper>
  );
}
