import React, { useEffect } from "react";
import { View, Image, Text, FlatList, useWindowDimensions } from "react-native";
import { NameHeaderCoins, ScreenWrapper, Spacer } from "@/components";
import { styles } from "./TransactionHistory.styles";
import { COLORS, SF, SH, SW } from "@/theme";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { strings } from "@/localization";
import { getWallet } from "@/selectors/WalletSelector";
import { getUser } from "@/selectors/UserSelectors";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { Fonts, downleft, uparrow } from "@/assets";
import { getTransactions } from "@/actions/WalletActions";
import { Loader } from "@/components/Loader";
import { isLoadingSelector } from "@/selectors/StatusSelectors";
import { TYPES } from "@/Types/Types";
export function TransactionHistory(props) {
  const dispatch = useDispatch();
  const wallet = useSelector(getWallet);
  const user = useSelector(getUser);
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(props?.route?.params?.index);

  const isLoading = useSelector((state) =>
    isLoadingSelector([TYPES.GET_TRANSACTIONS], state)
  );

  const [routes] = React.useState([
    { key: "first", title: "Added" },
    { key: "second", title: "Purchases" },
    { key: "third", title: "Earn" },
  ]);

  const firstScreenFunction = React.useCallback(() => {
    const body = {
      page: 1,
      limit: 50,
      transaction_type: "top_ups",
    };
    dispatch(getTransactions(body));
  }, []);

  const secondScreenFunction = React.useCallback(() => {
    const body = {
      page: 1,
      limit: 50,
      flag: "order_payment",
    };
    dispatch(getTransactions(body));
  }, []);

  const thirdScreenFunction = React.useCallback(() => {
    const body = {
      page: 1,
      limit: 50,
      flag: "redeem_reward",
    };
    dispatch(getTransactions(body));
  }, []);

  const FirstRoute = () => <View style={{ backgroundColor: "red" }} />;

  const SecondRoute = () => (
    <View style={{ flex: 1, backgroundColor: COLORS.white }} />
  );
  const ThirdRoute = () => (
    <View style={{ flex: 1, backgroundColor: COLORS.white }} />
  );

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
  const transactionheading = (item) => {
    if (item?.payment_type === "issue_sila") {
      return <Text style={styles.titleText}>{"Top Up"}</Text>;
    } else if (
      item?.receive_wallet_address === user?.walletProfile?.wallet_address
    ) {
      return <Text style={styles.titleText}>{"Received"}</Text>;
    } else if (item?.payment_type === "redeem") {
      return <Text style={styles.titleText}>{"Withdraw (To Bank)"}</Text>;
    } else if (item?.payment_type === "transfer") {
      return <Text style={styles.titleText}>{"Purchased"}</Text>;
    } else {
      return <Text style={styles.titleText}>{"Sent"}</Text>;
    }
  };

  const transactionImage = (item) => {
    if (item?.payment_type === "issue_sila") {
      return <Image source={downleft} style={styles.bgEarn} />;
    } else if (
      item?.receive_wallet_address === user?.walletProfile?.wallet_address
    ) {
      return <Image source={downleft} style={styles.bgEarn} />;
    } else if (item?.payment_type === "redeem") {
      return <Image source={downleft} style={styles.bgEarn} />;
    } else if (item?.payment_type === "transfer") {
      return <Image source={uparrow} style={styles.bgEarn} />;
    } else {
      return <Image source={uparrow} style={styles.bgEarn} />;
    }
  };
  const renderItem = ({ item }) => {
    const date = moment(item.createdAt).format("DD MMM YYYY");
    return (
      <View style={styles.tranHisCon}>
        <View style={{ display: "flex", flexDirection: "row" }}>
          {transactionImage(item)}
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: 6,
            }}
          >
            {transactionheading(item)}
            <Text style={styles.dateTime}>{date}</Text>
          </View>
        </View>
        <Text style={styles.balanceText}>
          {item?.payment_type === "transfer" ? "- " : "+ "}
          JBR {item.amount}
        </Text>
      </View>
    );
  };

  return (
    <ScreenWrapper>
      <NameHeaderCoins
        backRequired
        title={strings.jbrWallet.transactionHistory}
      />

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
      <View>
        {isLoading ? (
          <View
            style={{
              marginTop: SH(150),
              position: "absolute",
              left: 0,
              right: 0,
            }}
          >
            <Loader message="Loading Transactions" />
          </View>
        ) : (
          <FlatList
            data={wallet?.transactions}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
              <View style={{ padding: SW(20) }}>
                <Text style={{ fontFamily: Fonts.SemiBold, fontSize: SF(20) }}>
                  No Transactions Found
                </Text>
              </View>
            )}
          />
        )}
      </View>
    </ScreenWrapper>
  );
}
