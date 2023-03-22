import React, { useEffect } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { Spacer, ScreenWrapper, Header } from "@/components";
import { styles } from "./Faq.styles";
import { SH } from "@/theme";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";
import { forward, backArrow } from "@/assets";
import { HeaderCoin } from "@/screens/Profile/Wallet/Components/HeaderCoin";
import { useDispatch, useSelector } from "react-redux";
import { faq } from "@/actions/SupportAction";
import { SupportSelector } from "@/selectors/SupportSelectors";

export function Faq(props) {
  const dispatch = useDispatch();
  const faqData = useSelector(SupportSelector);
  console.log("faqs", faqData);
  const Faq = faqData?.faqs;

  const Body = {
    page: 1,
    limit: 10,
  };

  useEffect(() => {
    dispatch(faq(Body));
  }, []);
  const navigationHandler = (item, index) => {
    navigate(NAVIGATION.faqVerified, {
      data: item,
    });
    // console.log("item-->", JSON.stringify(item));
  };

  const renderdataItem = ({ item, index }) => {
    // console.log("checking item", item[index]);

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
      <HeaderCoin title={props.route.params.data} back={backArrow} amount={0} />

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
