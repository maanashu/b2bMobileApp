import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { styles } from "./MyCatalogue.styles";
import { ScreenWrapper, Spacer } from "@/components";
import { SH, SW } from "@/theme/ScalerDimensions";
import { strings } from "@/localization";
import { NameHeader } from "@/components";
import { useDispatch, useSelector } from "react-redux";
import { COLORS } from "@/theme";
import { useWindowDimensions } from "react-native";
import { MyCatalogue } from "./MyCatalogues";
import { ReceivedCatalogues } from "./ReceivedCatalogues";
import { SceneMap, TabView } from "react-native-tab-view";
import { getCatalogs } from "@/actions/UserActions";
import { getUser } from "@/selectors/UserSelectors";

export function Catalogues() {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);

  const firstScreenFunction = useCallback(() => {
    dispatch(getCatalogs({ filter_by: "my" }));
  }, []);

  const secondScreenFunction = useCallback(() => {
    dispatch(getCatalogs({ filter_by: "received" }));
  }, []);

  const [routes] = React.useState([
    { key: "first", title: "My Catelogs" },
    { key: "second", title: "Received Catelogs" },
  ]);

  const FirstRoute = () => <MyCatalogue />;
  const SecondRoute = () => <ReceivedCatalogues />;

  const renderScene = SceneMap({
    first: () => <FirstRoute onScreenChange={firstScreenFunction} />,
    second: () => <SecondRoute onScreenChange={secondScreenFunction} />,
  });
  useEffect(() => {
    switch (index) {
      case 0:
        if (firstScreenFunction) {
          firstScreenFunction();
        }
        break;
      case 1:
        if (secondScreenFunction) {
          secondScreenFunction();
        }
        break;
      default:
        break;
    }
  }, [index]);
  const renderTabBar = (props) => {
    const { navigationState, position } = props;
    return (
      <>
        <Spacer space={SH(8)} />
        <View style={{ height: SH(60) }}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: SW(10),
              height: SH(40),
            }}
          >
            {navigationState.routes.map((route, index) => {
              const isFocused = index === navigationState.index;

              return (
                <TouchableOpacity
                  key={route.key}
                  style={[
                    styles.tabButtonView,
                    {
                      backgroundColor: isFocused
                        ? COLORS.primary
                        : COLORS.light_border,
                    },
                  ]}
                  onPress={() => setIndex(index)}
                >
                  <Text
                    style={[
                      styles.tabButtonText,
                      { color: isFocused ? COLORS.white : COLORS.text },
                    ]}
                  >
                    {route.title}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      </>
    );
  };

  return (
    <ScreenWrapper>
      <NameHeader title={strings.profile.myCatalogs} back />
      <View style={styles.topTabContainer}>
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
