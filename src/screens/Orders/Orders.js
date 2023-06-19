import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  useWindowDimensions,
} from "react-native";
import { ScreenWrapper } from "@/components";
import { strings } from "@/localization";
import { styles } from "./Orders.styles";
import { COLORS, SF, SH, SW } from "@/theme";

import { coinStack, Fonts, search } from "@/assets";
import { Pending } from "../MyPurchaseMain/Pending/Pending";
import { Processing } from "../MyPurchaseMain/Processing/Processing";
import { Completed } from "../MyPurchaseMain/Completed/Completed";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { getWallet } from "@/selectors/WalletSelector";
import { useDispatch, useSelector } from "react-redux";
import { NewOrders } from "./NewOrders/NewOrders";
import { kFormatter } from "@/Utils/GlobalMethods";
import { getUser } from "@/selectors/UserSelectors";
import { getOrderList } from "@/actions/OrderAction";

export function Orders() {
  const dispatch = useDispatch();
  const wallet = useSelector(getWallet);
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
    // Function logic for the third screen
  }, []);

  const [routes] = React.useState([
    { key: "first", title: "New Orders" },
    { key: "second", title: "Processing orders" },
    { key: "third", title: "Completed orders" },
    // { key: "fifth", title: "Cancelled" },
  ]);

  const FirstRoute = () => <NewOrders />;
  const SecondRoute = () => <Processing />;
  const ThirdRoute = () => <Completed />;
  // const FifthRoute = () => <Cancelled />;

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
                    : COLORS.light_border,
                },
              ]}
            >
              <Text
                style={{
                  color: focused ? COLORS.white : COLORS.text,
                  textAlignVertical: "center",
                  fontFamily: focused ? Fonts.Regular : Fonts.Regular,
                  fontSize: SF(12),
                }}
              >
                {route.title}
              </Text>
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
    <ScreenWrapper style={styles.container}>
      {/* <View style={styles.header}>
        <View style={styles.headerInnerView}>
          <Text style={styles.headerText}>{strings.profile.myJobr}</Text>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity>
              <Image
                resizeMode="contain"
                source={search}
                style={styles.searchIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.headerIconView}
              onPress={() => navigate(NAVIGATION.jbrWallet)}
            >
              <Text style={styles.filterText}>
                {Math.floor(
                  wallet?.getWalletBalance?.sila_balance || 0
                ).toFixed()}
              </Text>
              <Image
                resizeMode="contain"
                source={coinStack}
                style={styles.filterIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View> */}
      <View style={styles.header}>
        <View style={styles.headerInnerView}>
          <Text style={styles.headerText}>{strings.profile.myJobr}</Text>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity>
              <Image
                resizeMode="contain"
                source={search}
                style={styles.searchIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.headerIconView}
              onPress={() => navigate(NAVIGATION.jbrWallet)}
            >
              <Text style={styles.filterText}>
                {kFormatter(wallet?.getWalletBalance?.sila_balance) || 0}
              </Text>
              <Image
                resizeMode="contain"
                source={coinStack}
                style={styles.filterIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

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
