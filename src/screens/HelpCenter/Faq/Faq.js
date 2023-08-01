import React, { useEffect } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { Spacer, ScreenWrapper, NameHeaderCoins } from "@/components";
import { styles } from "./Faq.styles";
import { SH } from "@/theme";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";
import { forward } from "@/assets";
import { useDispatch, useSelector } from "react-redux";
import { faq } from "@/actions/SupportAction";
import { SupportSelector } from "@/selectors/SupportSelectors";

export function Faq(props) {
  const dispatch = useDispatch();
  const faqData = useSelector(SupportSelector);
  const Faq = faqData?.faqs;

  const Body = {
    page: 1,
    limit: 10,
    type: "faq",
  };

  useEffect(() => {
    dispatch(faq("faq"));
  }, []);
  const navigationHandler = (item, index) => {
    navigate(NAVIGATION.faqVerified, {
      data: item,
    });
  };

  const renderdataItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        style={styles.flexRow}
        onPress={() => navigationHandler(item, index)}
      >
        <View style={styles.contentRow}>
          <Text style={styles.helpText}>{item.question}</Text>
        </View>
        <View style={styles.contentRow}>
          <Image source={forward} style={styles.mask} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScreenWrapper>
      <NameHeaderCoins title={props?.route?.params?.data} />
      <View style={styles.bodyContainer}>
        <Spacer space={SH(10)} />
        <FlatList
          data={faqData?.faqs}
          renderItem={renderdataItem}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          bounces={false}
          // horizontal={true}
        />
      </View>
    </ScreenWrapper>
  );
}
