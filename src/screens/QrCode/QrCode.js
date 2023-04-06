import React, { useEffect } from "react";
import { Text, View, Image, ScrollView } from "react-native";
import { NameHeader, ScreenWrapper, Spacer } from "@/components";
import { strings } from "@/localization";
import { styles } from "./QrCode.styles";
import { SH } from "@/theme";
import { backArrow, bigQr, shareFull, download } from "@/assets";
import { ButtonIcon } from "@/components/ButtonIcon";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "@/selectors/UserSelectors";
import { getWalletUserProfile } from "@/actions/UserActions";

export function QrCode() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWalletUserProfile());
  }, []);

  const qr = useSelector(getUser);
  console.log("qr===>", qr?.walletProfile);
  return (
    <ScreenWrapper style={styles.container}>
      <NameHeader title={strings.userInformation.back} back={backArrow} />
      <Spacer space={SH(1)} />

      <ScrollView style={styles.mainContainer}>
        <Spacer space={SH(100)} />

        <View style={styles.imageBackground}>
          <Image
            source={{ uri: qr?.walletProfile?.qr_code }}
            resizeMode="contain"
            style={{ height: 250, width: 250 }}
          />
        </View>

        <Spacer space={SH(100)} />

        <View style={styles.textView}>
          <Text style={styles.text}>{strings.qrCode.scan}</Text>
        </View>

        <Spacer space={SH(50)} />

        <ButtonIcon
          title={strings.qrCode.share}
          icon={shareFull}
          style={styles.buttonStyle}
        />

        <Spacer space={SH(25)} />

        <ButtonIcon
          title={strings.qrCode.download}
          style={styles.buttonStyle}
          icon={download}
        />
      </ScrollView>
    </ScreenWrapper>
  );
}
