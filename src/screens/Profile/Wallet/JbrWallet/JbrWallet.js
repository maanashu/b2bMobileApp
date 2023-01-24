import React from "react";
import { View, Image, Text, TouchableOpacity, FlatList } from "react-native";
import { styles } from "./JbrWallet.styles";
import { ScreenWrapper, Spacer } from "@/components";
import { Header } from "../Components/NameHeader";
import { COLORS, SH, SW } from "@/theme";
import { jbrLogo, downleft, downright, uparrow, backArrow } from "@/assets";
import { strings } from "@/localization";
import { transactionHistory } from "@/constants/flatlistData";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";

const Item = ({ title, date, balance, image }) => (
  <View style={styles.tranHisCon}>
    <View style={{ display: "flex", flexDirection: "row" }}>
      <Image source={image} style={styles.bgEarn} />
      <TouchableOpacity
        onPress={() => navigate(NAVIGATION.transactionHistory)}
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: 6,
        }}
      >
        <Text style={styles.deliveryFeeText}>{title}</Text>
        <Text style={styles.dateTime}>{date}</Text>
      </TouchableOpacity>
    </View>
    <Text style={styles.balanceText}>{balance}</Text>
  </View>
);
export function JbrWallet() {
  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      date={item.date}
      balance={item.balance}
      image={item.image}
    />
  );
  return (
    <ScreenWrapper style={{ flex: 1, backgroundColor: COLORS.white }}>
      <>
        <Header back={backArrow} title={strings.profile.jbrWallet} />
        <View style={styles.balanceCon}>
          <Spacer space={SH(10)} backgroundColor={COLORS.white} />
          <View style={styles.mainBal}>
            <View style={{ flexDirection: "row" }}>
              <Image source={jbrLogo} style={styles.jbrlogo} />
              <View
                style={{
                  flexDirection: "column",
                  marginLeft: 8,
                }}
              >
                <Text style={styles.balanceLabel}>
                  {strings.jbrWallet.availableBalance}
                </Text>
                <Text style={styles.balance}>
                  {strings.jbrWallet.JBR} 150.00
                </Text>
              </View>
            </View>
          </View>
          <Spacer space={SH(30)} />
          <View style={styles.earnView}>
            <TouchableOpacity onPress={() => alert("coming soon")}>
              <View style={styles.earnBtn}>
                <Image source={downleft} style={styles.earnlogo} />
                <Text style={styles.earnText}>{strings.jbrWallet.added}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert("coming soon")}>
              <View style={styles.earnBtn}>
                <Image source={uparrow} style={styles.earnlogo} />
                <Text style={styles.earnText}>
                  {strings.jbrWallet.purchases}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert("coming soon")}>
              <View style={styles.earnBtn}>
                <Image source={downright} style={styles.earnlogo} />
                <Text style={styles.earnText}>{strings.jbrWallet.earn}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <Spacer space={SH(30)} />
        {/* ********DeliveryHistory start********** */}
        <View style={{ paddingHorizontal: SW(20) }}>
          <Text style={styles.delHiStText}>
            {strings.jbrWallet.buyingCapacity}
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              style={[styles.medalCon, styles.bronze]}
              onPress={() => navigate(NAVIGATION.brands)}
            >
              <Text style={[styles.returnCount]}>{"5"}</Text>
              <Text style={styles.medalText}>{strings.jbrWallet.brands}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.medalCon, styles.deliver]}
              onPress={() => navigate(NAVIGATION.brandsProduct)}
            >
              <Text style={[styles.returnCount]}>19</Text>
              <Text style={styles.medalText}>{strings.jbrWallet.products}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.medalCon, styles.return]}
              onPress={() => navigate(NAVIGATION.manufacturers)}
            >
              <Text style={styles.returnCount}>3</Text>
              <Text style={styles.medalText}>
                {strings.jbrWallet.manfacturer}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Spacer space={SH(30)} />
        {/* ********DeliveryHistory end********** */}

        {/* ********TransactionHistory start********** */}
        <View style={{ flex: 1, paddingHorizontal: SW(20) }}>
          <Text style={styles.delHiStText}>
            {strings.jbrWallet.transactionHistory}
          </Text>
          <Spacer space={SH(10)} />

          <FlatList
            data={transactionHistory}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </>
    </ScreenWrapper>
  );
}
