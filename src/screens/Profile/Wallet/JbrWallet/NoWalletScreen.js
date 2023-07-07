import React from "react";
import { View, Text } from "react-native";
import { Button, ScreenWrapper, Spacer } from "@/components";
import { Header } from "../Components/NameHeader";
import { COLORS, SF, SH, SW } from "@/theme";
import { backArrow, Fonts } from "@/assets";
import { strings } from "@/localization";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";
import { useDispatch, useSelector } from "react-redux";
import { getWallet } from "@/selectors/WalletSelector";
import { getUser } from "@/selectors/UserSelectors";
import { getKyc } from "@/selectors/KycSelector";
import { previousScreen } from "@/actions/GlobalActions";

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
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              paddingHorizontal: SW(20),
            }}
          >
            <Text
              style={{
                fontFamily: Fonts.SemiBold,
                color: COLORS.darkGrey,
                fontSize: SF(15),
              }}
            >
              {"Please login to access JOBR wallet"}
            </Text>
            <Spacer space={SH(20)} />
            <Button
              title={"Login"}
              onPress={() => {
                navigate(NAVIGATION.splash);
              }}
            />
          </View>
        ) : (
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              paddingHorizontal: SW(20),
            }}
          >
            <Text
              style={{
                fontFamily: Fonts.SemiBold,
                color: COLORS.darkGrey,
                fontSize: SF(15),
              }}
            >
              {"Please create wallet"}
            </Text>
            <Spacer space={SH(20)} />
            <Button
              title={"Create Wallet"}
              onPress={() => navigate(NAVIGATION.personalInformation)}
            />
          </View>
        )}
      </>
    </ScreenWrapper>
  );
}
