import React from "react";
import { Image, View, useWindowDimensions } from "react-native";
import { ScreenWrapper } from "@/components";
import { styles } from "./FavouriteList.styles";
import { COLORS, SF, SH, SW } from "@/theme";
import { HeaderCoin } from "../Profile/Wallet/Components/HeaderCoin";
import { strings } from "@/localization";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getFavouritesSeller } from "@/actions/UserActions";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { Fonts, bottomProducts, shopLight } from "@/assets";
import { FavouritesSeller } from "./FavouritesSeller/FavouritesSeller";
import { FavouritesProduct } from "./FavouritesProduct/FavouritesProduct";

export function FavouriteList() {
  const dispatch = useDispatch();
  const data = {
    page: 1,
    limit: 10,
  };
  useEffect(() => {
    dispatch(getFavouritesSeller(data));
  }, []);

  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Seller" },
    { key: "second", title: "Product" },
  ]);

  const FirstRoute = () => <FavouritesSeller />;
  const SecondRoute = () => <FavouritesProduct />;

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });
  const renderTabBar = (props) => {
    return (
      <TabBar
        contentContainerStyle={{
          paddingHorizontal: SW(10),
          paddingVertical: SH(15),
        }}
        {...props}
        renderLabel={({ focused, route }) => {
          return (
            <View
              style={[
                styles.tabButtonView,

                {
                  backgroundColor: focused
                    ? COLORS.primary
                    : COLORS.transparent,
                },
              ]}
            >
              <Image
                source={route.title === "Seller" ? shopLight : bottomProducts}
                resizeMode="contain"
                style={{
                  tintColor: focused ? COLORS.white : COLORS.light_grey,
                  height: SH(20),
                  width: SW(20),
                }}
              />
            </View>
          );
        }}
        indicatorStyle={{ backgroundColor: COLORS.white }}
        style={{
          backgroundColor: COLORS.white,
          elevation: 0,
        }}
        pressColor={COLORS.white}
        tabStyle={{ width: "auto", marginHorizontal: SW(-5) }}
      />
    );
  };
  return (
    <ScreenWrapper>
      <HeaderCoin amount={"0"} title={strings.profile.favouriteList} />
      <View style={{ flex: 1, paddingVertical: SH(5) }}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
          renderTabBar={renderTabBar}
          swipeEnabled={false}
        />
      </View>
    </ScreenWrapper>
  );
}
