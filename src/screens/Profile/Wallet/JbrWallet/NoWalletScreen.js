import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  RefreshControl,
} from "react-native";
import { styles } from "./JbrWallet.styles";
import { Button, ScreenWrapper, Spacer, TextField } from "@/components";
import { Header } from "../Components/NameHeader";
import { COLORS, SH, SW } from "@/theme";
import { jbrLogo, downleft, downright, uparrow, backArrow } from "@/assets";
import { strings } from "@/localization";
import { transactionHistory } from "@/constants/flatlistData";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";
import { useDispatch, useSelector } from "react-redux";
import {
  addWalletBalanceApi,
  getWalletBalance,
  redeemMoney,
} from "@/actions/WalletActions";
import { getWallet } from "@/selectors/WalletSelector";
import { getUser } from "@/selectors/UserSelectors";
import Modal from "react-native-modal";
import { getKyc } from "@/selectors/KycSelector";
import { getBankAccounts } from "@/actions/KycActions";
import { simpleCheck } from "@/assets";
import { isLoadingSelector } from "@/selectors/StatusSelectors";
import { TYPES } from "@/Types/Types";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export function NoWalletScreen() {
  const dispatch = useDispatch();
  const wallet = useSelector(getWallet);
  const user = useSelector(getUser);
  const accounts = useSelector(getKyc);

  return (
    <ScreenWrapper style={{ flex: 1, backgroundColor: COLORS.white }}>
      <>
        <Header back={backArrow} title={strings.profile.jbrWallet} />

        {!user?.user?.payload?.token ? (
          <View>
            <Text>No Login</Text>
          </View>
        ) : (
          <View>
            <Text>No Wallet</Text>
          </View>
        )}
      </>
    </ScreenWrapper>
  );
}
