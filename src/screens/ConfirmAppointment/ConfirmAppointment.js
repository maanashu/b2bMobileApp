import React, { useMemo, useState } from "react";
import { Button, NameHeader, ScreenWrapper, Spacer } from "@/components";
import { SH, SW } from "@/theme/ScalerDimensions";
import { COLORS } from "@/theme/Colors";
import { useDispatch, useSelector } from "react-redux";
import { orderSelector } from "@/selectors/OrderSelector";
import { getProductSelector } from "@/selectors/ProductSelectors";
import moment from "moment";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./ConfirmAppointment.styles";
import { calendar, clock, rightArrowThin } from "@/assets";
import { createAppointment } from "@/actions/OrderAction";
import { isLoadingSelector } from "@/selectors/StatusSelectors";
import { TYPES } from "@/Types/Types";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";
import Modal from "react-native-modal";
import { Calendar } from "react-native-calendars";
import { ms } from "react-native-size-matters";
import { ServiceBookingTimings } from "../Chatting/BottomSheet";

export function ConfirmAppointment(params) {
  const dispatch = useDispatch();
  const order = useSelector(orderSelector);
  const coupon = useSelector(getProductSelector);

  const [isVisible, setisVisible] = useState(false);
  const [isTimeVisible, setisTimeVisible] = useState(false);
  const [isCalendarVisible, setisCalendarVisible] = useState(false);
  const [isCartLoading, setisCartLoading] = useState(true);
  const [selectedTiming, setselectedTiming] = useState("");
  const [date, setDate] = useState(params.route?.params?.date);
  const [startTime, setStartTime] = useState(params.route?.params?.start_time);
  const [endTime, setEndTime] = useState(params.route?.params?.end_time);
  const [time, setTime] = useState("");
  const currentDate = moment().format("YYYY-MM-DD");
  const tomorrowDate = moment().add(1, "day").format("YYYY-MM-DD");

  const day = () => {
    if (date === currentDate) {
      return "Today, ";
    } else if (date === tomorrowDate) {
      return "Tomorrow, ";
    } else {
      return null;
    }
  };
  const marked = useMemo(() => {
    return {
      [setDate]: {
        dotColor: "red",
        marked: true,
      },
      [date]: {
        selected: true,
        disableTouchEvent: true,
        selectedColor: COLORS.primary,
        selectedTextColor: COLORS.white,
      },
    };
  }, [date]);
  const body = {
    cart_id: params.route?.params?.cart_id,
    start_time: startTime,
    end_time: endTime,
    date: date,
    mode_of_payment: "jbr",
  };

  const bookAppointment = () => {
    dispatch(createAppointment(body)).then(() =>
      setTimeout(() => {
        navigate(NAVIGATION.home);
      }, 1500)
    );
  };
  const isLoading = useSelector((state) =>
    isLoadingSelector([TYPES.CREATE_APPOINTMENT], state)
  );
  const renderTimings = ({ item, index }) => (
    <TouchableOpacity
      style={[
        styles.timingsView,
        {
          borderColor:
            item.title === selectedTiming ? COLORS.primary : COLORS.placeHolder,
        },
      ]}
      onPress={() => {
        setselectedTiming(item.title);
        setStartTime(item?.start_time);
        setEndTime(item?.end_time);
        setisVisible(false);
      }}
    >
      <Text
        style={[
          styles.timingText,
          {
            color:
              item.title === selectedTiming ? COLORS.primary : COLORS.darkGrey,
          },
        ]}
      >
        {item.title}
      </Text>
    </TouchableOpacity>
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
          <TouchableOpacity
            style={styles.rowAlign}
            onPress={() => {
              setisCalendarVisible(true);
              setisVisible(true);
            }}
          >
            <Text style={styles.dateText}>
              {day()}
              {moment(date, "YYYY-MM-DD").format("MMM DD, YYYY")}
            </Text>
            <Spacer horizontal space={SW(5)} />

            <Image
              source={rightArrowThin}
              resizeMode="contain"
              style={styles.rightArrowStyle}
            />
          </TouchableOpacity>
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
          <TouchableOpacity
            style={styles.rowAlign}
            onPress={() => {
              setisTimeVisible(true);
              setisVisible(true);
            }}
          >
            <Text style={styles.dateText}>{startTime}</Text>

            <Spacer horizontal space={SW(5)} />

            <Image
              source={rightArrowThin}
              resizeMode="contain"
              style={styles.rightArrowStyle}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.bottomLine} />

        <View style={styles.buttonView}>
          <Button title={"Reserve"} onPress={bookAppointment} />
        </View>
      </View>

      <Modal
        // ref={ref}
        onBackdropPress={() => setisVisible(false)}
        onBackButtonPress={() => setisVisible(false)}
        isVisible={isVisible}
        backdropColor="FFFFFF"
        style={{
          margin: 0,
          backgroundColor: "white",
          marginHorizontal: SW(20),
        }}
        animationInTiming={1}
        animationOutTiming={1}
      >
        {isCalendarVisible && (
          <>
            <View>
              <Calendar
                style={{}}
                theme={{
                  textMonthFontSize: ms(13),
                  textMonthFontWeight: "bold",
                  arrowColor: COLORS.darkGrey,
                  textDayStyle: styles.dayText,
                  textDayFontSize: ms(13),
                  selectedDayTextColor: COLORS.white,
                  selectedDayBackgroundColor: "red",
                  arrowStyle: "arrow",
                  todayTextColor: COLORS.black,
                }}
                onDayPress={(day) => {
                  setDate(day.dateString);
                  setisVisible(false);
                }}
                markedDates={marked}
              />
            </View>
          </>
        )}
        {isTimeVisible && (
          <>
            <View>
              <FlatList
                columnWrapperStyle={{ justifyContent: "flex-start" }}
                data={ServiceBookingTimings}
                keyExtractor={(item) => item.id}
                renderItem={renderTimings}
                numColumns={3}
              />
            </View>
          </>
        )}
      </Modal>

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
