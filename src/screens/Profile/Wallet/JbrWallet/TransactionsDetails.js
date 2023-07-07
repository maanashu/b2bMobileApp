import React from "react";
import { View, Text, Image } from "react-native";
import { Button, NameHeader, ScreenWrapper, Spacer } from "@/components";
import { COLORS, SF, SH, SW } from "@/theme";
import { backArrow, checkMark, Fonts } from "@/assets";
import { goBack } from "@/navigation/NavigationRef";
import { useSelector } from "react-redux";
import { getUser } from "@/selectors/UserSelectors";
import { styles } from "./JbrWallet.styles";
import moment from "moment";

export function TransactionsDetails(params) {
  const user = useSelector(getUser);
  const item = params?.route?.params?.item;
  const headingText = () => {
    if (item?.payment_type == "issue_sila") {
      return "TopUp";
    } else if (
      item?.payment_type == "transfer" &&
      item?.flag == "order_payment"
    ) {
      return "Order Payment";
    } else if (item?.payment_type == "transfer" && item?.flag == "transfer") {
      return "Order Payment";
    } else {
      return "Received";
    }
  };
  const paymentType = () => {
    if (item?.payment_type == "issue_sila") {
      return "TopUp";
    } else if (
      item?.payment_type == "transfer" &&
      item?.flag == "order_payment"
    ) {
      return "Transfer";
    } else if (item?.payment_type == "transfer" && item?.flag == "transfer") {
      return "Transfer";
    } else {
      return "Received";
    }
  };
  const date = moment(item?.createdAt).format("D MMM, YYYY");
  return (
    <ScreenWrapper style={{ flex: 1, backgroundColor: COLORS.white }}>
      <>
        <NameHeader back={backArrow} title={"Transaction Details"} />
        <View style={styles.topViewDetail}>
          <Text style={styles.paymentTypeHeadingText}>{headingText()}</Text>
          <Spacer space={SH(10)} />
        </View>
        <View style={styles.transactionDetailView}>
          <Image
            source={checkMark}
            resizeMode="contain"
            style={styles.checkMarkIcon}
          />
          <Spacer space={SH(10)} />

          <Text style={styles.transactionAmountText}>
            JBR<Text> {"1594"}</Text>
          </Text>
          <Spacer space={SH(10)} />
          <Text style={styles.transferTypeSmallText}>{paymentType()}</Text>
          <Spacer space={SH(8)} />
          <Text style={styles.orderPaymentDateText}>
            {headingText()}
            <Text> {date}</Text>
          </Text>
          <Spacer space={SH(10)} />
          <Text style={styles.transactionIdHeadingText}>
            {"Transaction ID"}
          </Text>
          <Spacer space={SH(10)} />
          <Text style={styles.transactionIdText}>{item?.transaction_id}</Text>

          <Spacer space={SH(30)} />
          <Button
            style={{ width: SW(117) }}
            title={"Done"}
            onPress={() => goBack()}
          />
        </View>
      </>
    </ScreenWrapper>
  );
}
