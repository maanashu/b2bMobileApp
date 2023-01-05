import { useTheme } from "@react-navigation/native";
import React from "react";
import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import { useDispatch } from "react-redux";
import { logout } from "@/actions/UserActions";
import { ScreenWrapper, Spacer } from "@/components";
import { strings } from "@/localization";
import { styles } from "./QrCode.styles";
import { SH } from "@/theme";
import { backArrow, qrCode, bigQr, shareFull, download } from "@/assets";
import { goBack } from "@/navigation/NavigationRef";
import { ButtonIcon } from "@/components/ButtonIcon";

export function QrCode() {
  return (
    <ScreenWrapper style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerInnerView}>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
            onPress={() => goBack()}
          >
            <Image
              resizeMode="contain"
              source={backArrow}
              style={{ height: 30, width: 30 }}
            />
            <Text style={styles.headerText}>
              {strings.userInformation.back}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              resizeMode="contain"
              source={qrCode}
              style={styles.filterIcon}
            />
          </TouchableOpacity>
        </View>
      </View>

      <Spacer space={SH(1)} />

      <ScrollView style={styles.mainContainer}>
        <Spacer space={SH(100)} />

        <View style={styles.imageBackground}>
          <Image
            source={bigQr}
            resizeMode="contain"
            style={{ height: 250, width: 250 }}
          />
        </View>

        <Spacer space={SH(100)} />

        <View style={styles.textView}>
          <Text style={styles.text}>{strings.qrCode.scan}</Text>
        </View>

        <Spacer space={SH(50)} />

        <ButtonIcon title={strings.qrCode.share} icon={shareFull} />

        <Spacer space={SH(30)} />

        <ButtonIcon title={strings.qrCode.share} icon={download} />
      </ScrollView>
    </ScreenWrapper>
  );
}
