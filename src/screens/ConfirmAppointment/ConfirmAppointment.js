import React, { useState } from "react";
import { Button, NameHeader, ScreenWrapper, Spacer } from "@/components";
import { SH, SW } from "@/theme/ScalerDimensions";
import { COLORS } from "@/theme/Colors";
import { strings } from "@/localization";
import { HeaderCoin } from "../Profile/Wallet/Components/HeaderCoin";
import { useDispatch, useSelector } from "react-redux";
import { orderSelector } from "@/selectors/OrderSelector";
import { getProductSelector } from "@/selectors/ProductSelectors";
import moment from "moment";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { ActivityIndicator, Image, Text, View } from "react-native";
import { styles } from "./ConfirmAppointment.styles";
import { calendar, clock } from "@/assets";
import { createAppointment } from "@/actions/OrderAction";
import { isLoadingSelector } from "@/selectors/StatusSelectors";
import { TYPES } from "@/Types/Types";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";

export function ConfirmAppointment(params) {
  const dispatch = useDispatch();
  const order = useSelector(orderSelector);
  const coupon = useSelector(getProductSelector);

  const [isCartLoading, setisCartLoading] = useState(true);
  const [selectedTiming, setselectedTiming] = useState("");
  const [date, setDate] = useState(moment().format("YYYY-MM-DD"));
  const [startTime, setStartTime] = useState(moment().format("YYYY-MM-DD"));
  const [endTime, setEndTime] = useState(moment().format("YYYY-MM-DD"));
  const [time, setTime] = useState("");
  const currentDate = moment().format("YYYY-MM-DD");
  const tomorrowDate = moment().add(1, "day").format("YYYY-MM-DD");

  const body = params.route?.params;
  // console.log("data=>", JSON.stringify(body));

  const day = () => {
    if (body?.date === currentDate) {
      return "Today, ";
    } else if (body?.date === tomorrowDate) {
      return "Tomorrow, ";
    } else {
      return null;
    }
  };

  const bookAppointment = () => {
    dispatch(createAppointment(body)).then(() =>
      setTimeout(() => {
        navigate(NAVIGATION.home);
      }, 1000)
    );
  };
  const isLoading = useSelector((state) =>
    isLoadingSelector([TYPES.CREATE_APPOINTMENT], state)
  );

  return (
    <ScreenWrapper style={{ flex: 1, backgroundColor: COLORS.white }}>
      <NameHeader title={"Confirm Appointment"} back />

      <Spacer space={SH(100)} />

      <View style={styles.container}>
        <Text style={styles.appointmentHeading}>{"Appointment time"}</Text>

        <Spacer space={SH(25)} />

        <Text style={styles.whenText}>{"When do you want to book time?"}</Text>

        <Spacer space={SH(30)} />

        <View style={styles.rowJustified}>
          <View style={styles.rowAlign}>
            <Image
              source={calendar}
              resizeMode="contain"
              style={styles.calenderIcon}
            />
            <Spacer horizontal space={SW(5)} />
            <Text style={styles.infoText}>Appointment</Text>
          </View>
          <Text style={styles.dateText}>
            {day()}
            {moment(body?.date, "YYYY-MM-DD").format("MMM DD, YYYY")}
          </Text>
        </View>

        <View style={styles.bottomLine} />

        <Spacer space={SH(20)} />

        <View style={styles.rowJustified}>
          <View style={styles.rowAlign}>
            <Image
              source={clock}
              resizeMode="contain"
              style={styles.clockIcon}
            />
            <Spacer horizontal space={SW(5)} />
            <Text style={styles.infoText}>Time</Text>
          </View>
          <Text style={styles.dateText}>{body?.start_time}</Text>
        </View>

        <View style={styles.bottomLine} />

        <View style={styles.buttonView}>
          <Button title={"Reserve"} onPress={bookAppointment} />
        </View>
      </View>
      {isLoading && (
        <ActivityIndicator
          size="large"
          color="#0000ff"
          style={styles.loaderStyle}
        />
      )}
    </ScreenWrapper>
  );
}
