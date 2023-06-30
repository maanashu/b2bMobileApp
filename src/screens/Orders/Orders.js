import React from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { NameHeaderCoins, ScreenWrapper, Spacer } from "@/components";
import { styles } from "./Orders.styles";
import { COLORS, SF, SH, SW } from "@/theme";
import { Fonts } from "@/assets";
import { Processing } from "../MyPurchaseMain/Processing/Processing";
import { Completed } from "../MyPurchaseMain/Completed/Completed";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { useDispatch, useSelector } from "react-redux";
import { NewOrders } from "./NewOrders/NewOrders";
import { getUser } from "@/selectors/UserSelectors";
import { getOrderList } from "@/actions/OrderAction";

export function Orders() {
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const firstScreenFunction = React.useCallback(() => {
    const object = {
      page: 1,
      limit: 10,
      seller_id: user?.user?.payload?.uuid,
      status: 0,
    };
    dispatch(getOrderList(object));
  }, []);

  const secondScreenFunction = React.useCallback(() => {
    const object = {
      page: 1,
      limit: 10,
      seller_id: user?.user?.payload?.uuid,
      status: 1,
    };
    dispatch(getOrderList(object));
  }, []);

  const thirdScreenFunction = React.useCallback(() => {
    const object = {
      page: 1,
      limit: 10,
      seller_id: user?.user?.payload?.uuid,
      status: 5,
    };
    dispatch(getOrderList(object));
  }, []);

  const [routes] = React.useState([
    { key: "first", title: "New Orders" },
    { key: "second", title: "Processing orders" },
    { key: "third", title: "Completed orders" },
  ]);

  const FirstRoute = () => <NewOrders />;
  const SecondRoute = () => <Processing />;
  const ThirdRoute = () => <Completed />;

  const renderScene = SceneMap({
    first: () => <FirstRoute onScreenChange={firstScreenFunction} />,
    second: () => <SecondRoute onScreenChange={secondScreenFunction} />,
    third: () => <ThirdRoute onScreenChange={thirdScreenFunction} />,
  });
  React.useEffect(() => {
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
      case 2:
        if (thirdScreenFunction) {
          thirdScreenFunction();
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
        <Spacer space={SH(20)} />
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
    <ScreenWrapper style={styles.container}>
      <NameHeaderCoins title={"My Jobr"} searchRequired />

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
