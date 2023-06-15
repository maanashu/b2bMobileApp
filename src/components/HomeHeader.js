import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { styles } from "@/screens/Home/Home.styles";
import { bagGrey, coinStack, dropdownIcon, location } from "@/assets";
import { useSelector } from "react-redux";
import { getUser } from "@/selectors/UserSelectors";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";
import { orderSelector } from "@/selectors/OrderSelector";
import { SF, SH, SW } from "@/theme";
import { getWallet } from "@/selectors/WalletSelector";
import { kFormatter } from "@/Utils/GlobalMethods";

export function HomeHeader({ onPress, userLocation }) {
  const user = useSelector(getUser);
  const cart = useSelector(orderSelector)?.getCart;
  const wallet = useSelector(getWallet);
  return (
    <View style={styles.headerStyle}>
      <View style={styles.locationView}>
        <Image
          source={location}
          style={styles.locationIcon}
          resizeMode="contain"
        />
        <TouchableOpacity style={styles.rowView} onPress={onPress}>
          <Text style={styles.locationText}>{userLocation}</Text>
          <Image
            source={dropdownIcon}
            style={styles.downIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {cart?.cart_products?.length > 0 && (
          <TouchableOpacity onPress={() => navigate(NAVIGATION.checkout)}>
            <Image
              source={bagGrey}
              style={styles.bagIcon}
              resizeMode="contain"
            />
            <View style={styles.cartCountView}>
              <Text style={{ color: "white", fontSize: SF(10) }}>
                {cart?.cart_products?.length}
              </Text>
            </View>
          </TouchableOpacity>
        )}

        <TouchableOpacity
          style={styles.coinView}
          onPress={() => navigate(NAVIGATION.jbrWallet)}
        >
          <Text style={styles.balanceText}>
            {kFormatter(wallet?.getWalletBalance?.sila_balance) || 0}
          </Text>
          <Image
            source={coinStack}
            style={styles.coinIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
