import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { ScreenWrapper, Spacer } from "@/components";
import { COLORS } from "@/theme/Colors";
import { SF, SH, SW } from "@/theme/ScalerDimensions";
import { TabBar } from "react-native-tab-view";
import { SearchedProducts, SearchedSellers } from "@/screens";
import { styles } from "./SearchResults.styles";
import { Fonts, leftArrow } from "@/assets";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useDispatch } from "react-redux";
import { searchProductsSellers } from "@/actions/ProductActions";
import { Search } from "@/components/Search";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";

const Tab = createMaterialTopTabNavigator();

export function SearchResults(props) {
  const dispatch = useDispatch();

  const [searchKeyword, setSearchKeyword] = useState(
    props?.route?.params?.keyword
  );
  useEffect(() => {
    const body = {
      page: 1,
      limit: 10,
      search: props?.route?.params?.keyword,
    };
    dispatch(searchProductsSellers(body));
  }, []);

  const hitSearch = () => {
    const searchBody = {
      page: 1,
      limit: 10,
      search: searchKeyword,
    };
    dispatch(searchProductsSellers(searchBody));
  };

  const renderTabBar = (props) => {
    return (
      <TabBar
        contentContainerStyle={{
          paddingHorizontal: SW(10),
        }}
        {...props}
        renderLabel={({ focused, route }) => {
          return (
            <View
              style={[
                styles.tabButtonView,
                {
                  borderColor: focused ? COLORS.primary : COLORS.light_border,
                },
                {
                  backgroundColor: focused
                    ? COLORS.primary
                    : COLORS.light_border,
                },
              ]}
            >
              <Text
                style={{
                  color: focused ? COLORS.white : COLORS.text,
                  textAlignVertical: "center",
                  fontFamily: focused ? Fonts.SemiBold : Fonts.Regular,
                  fontSize: SF(12),
                }}
              >
                {route.name}
              </Text>
            </View>
          );
        }}
        indicatorStyle={{ backgroundColor: COLORS.white }}
        style={{
          backgroundColor: COLORS.white,
          marginBottom: 1,
        }}
        pressColor={COLORS.white}
        tabStyle={{ width: "auto" }}
      />
    );
  };

  return (
    <ScreenWrapper>
      <View style={{ flex: 1 }}>
        <Spacer space={SH(10)} />
        <Search
          icon={leftArrow}
          onPress={() => navigate(NAVIGATION.home)}
          onSubmitEditing={() => {
            if (searchKeyword) {
              hitSearch();
            }
          }}
          setKeyword={setSearchKeyword}
          keyword={searchKeyword}
          clearSearch={() => setSearchKeyword("")}
        />
        <Tab.Navigator
          tabBar={(props) => renderTabBar(props)}
          swipeEnabled={false}
        >
          <Tab.Screen name={"Products"} component={SearchedProducts} />
          <Tab.Screen name={"Sellers"} component={SearchedSellers} />
        </Tab.Navigator>
      </View>
    </ScreenWrapper>
  );
}
