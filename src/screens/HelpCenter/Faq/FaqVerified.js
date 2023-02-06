import { useTheme } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useDispatch } from "react-redux";
import { Button, Spacer, ScreenWrapper, Header } from "@/components";
import { strings } from "@/localization";
import { styles } from "./Faq.styles";
import { SH, TextStyles, COLORS, SW } from "@/theme";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";

import {
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { HeaderCoin } from "@/screens/Profile/Wallet/Components/HeaderCoin";
import { backArrow } from "@/assets";

const CELL_COUNT = 4;

export function FaqVerified(props) {
  useEffect(() => {
    console.log(props.route.params.data, "data");
  });
  const { colors } = useTheme();
  const dispatch = useDispatch();

  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [prop, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <ScreenWrapper>
      <HeaderCoin title={props.route.params.data} back={backArrow} amount={0} />
      <ScrollView style={{ paddingHorizontal: SW(20), flex: 1 }}>
        <Spacer space={SH(20)} />

        <Text style={[styles.text]}>{props.route.params.data}</Text>

        <Spacer space={SH(10)} />

        <View style={styles.line} />

        <Spacer space={SH(34)} />

        <Text style={[styles.stext]}>{strings.faq.text1}</Text>

        <Spacer space={SH(20)} />

        <Text style={[styles.stext]}>{strings.faq.text2}</Text>

        <Spacer space={SH(20)} />

        <Text style={[styles.stext]}>{strings.faq.text3}</Text>

        <Spacer space={SH(30)} />

        <View>
          <Button
            onPress={() => navigate(NAVIGATION.helpCenter)}
            title={"Helpful"}
            style={styles.submit}
            textStyle={{ color: COLORS.primary }}
          />
          <Spacer space={SH(10)} />

          <Button
            onPress={() => navigate(NAVIGATION.helpCenter)}
            title={"NO! I need more help"}
            style={[styles.submit, { borderColor: COLORS.light_grey }]}
            textStyle={{ color: COLORS.light_grey }}
          />
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}
