import {
  Dimensions,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useState } from "react";
import { styles } from "./Chatting.styles";
import { Button, CompanyDetailView, Spacer } from "@/components";
import { SH, SW } from "@/theme/ScalerDimensions";
import DropDownPicker from "react-native-dropdown-picker";

import {
  cross,
  camera,
  gallery_image,
  chat_photo,
  chat_quickMessage,
  chat_videoCall,
  chat_file,
  chat_card,
  chat_latestPrice,
  chat_voiceMessage,
  chat_translator,
  chat_sendCatalogue,
  chat_shipping,
  chat_directOffer,
  calendarDate,
  files,
  userPhoto,
  companyBuildings,
  email_chat,
  phoneCall,
  voiceButton,
  pdfDocImage,
  addLocation,
  toggleOn,
  toggleOff,
} from "@/assets";
import { strings } from "@/localization";
import { ButtonIcon } from "@/components/ButtonIcon";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";
import Icon from "react-native-vector-icons/FontAwesome5";
import { ms, scale } from "react-native-size-matters";
import { COLORS } from "@/theme";
import { Calendar } from "react-native-calendars";
import moment from "moment";
import AudioRecorderPlayer from "react-native-audio-recorder-player";

export function PhotoFunction({ onClosePress, onPressCamera, onPressGallery }) {
  return (
    <View style={{ paddingHorizontal: SW(20), paddingVertical: SH(10) }}>
      <TouchableOpacity onPress={onClosePress} style={styles.crossIconView}>
        <Image source={cross} resizeMode="contain" style={styles.iconStyle} />
      </TouchableOpacity>

      <Spacer space={SH(20)} />

      <TouchableOpacity style={styles.cameraView} onPress={onPressCamera}>
        <Image
          source={camera}
          resizeMode="stretch"
          style={styles.cameraIcons}
        />
        <Text style={styles.cameraText}>{strings.chatting.takephoto}</Text>
      </TouchableOpacity>

      <Spacer space={SH(40)} />

      <TouchableOpacity style={styles.cameraView} onPress={onPressGallery}>
        <Image
          source={gallery_image}
          resizeMode="stretch"
          style={styles.cameraIcons}
        />
        <Text style={styles.cameraText}>{strings.chatting.sendLocalPhoto}</Text>
      </TouchableOpacity>
      <Spacer space={SH(20)} />
    </View>
  );
}

export function QuickReply({ onClosePress }) {
  return (
    <View style={{ paddingHorizontal: SW(20), paddingVertical: SH(10) }}>
      <TouchableOpacity onPress={onClosePress} style={styles.crossIconView}>
        <Image source={cross} resizeMode="contain" style={styles.iconStyle} />
      </TouchableOpacity>

      <Spacer space={SH(20)} />

      <TouchableOpacity>
        <Text style={styles.quickReplyText}>
          {strings.quickReplies.bestOffer}
        </Text>
      </TouchableOpacity>

      <View style={styles.borderline}></View>

      <TouchableOpacity>
        <Text style={styles.quickReplyText}>
          Hi, I’m interested on this product. I would like some more details.
        </Text>
      </TouchableOpacity>

      <View style={styles.borderline}></View>

      <TouchableOpacity>
        <Text style={styles.quickReplyText}>
          Hi, Would you send me a product sample before I place an order?
        </Text>
      </TouchableOpacity>

      <View style={styles.borderline}></View>

      <TouchableOpacity>
        <Text style={styles.quickReplyText}>
          What is your min. oder quantity?
        </Text>
      </TouchableOpacity>
      <Spacer space={SH(20)} />
    </View>
  );
}

export function VideoCall({ onClosePress }) {
  const [isVisible, setisVisible] = useState(false);

  const [selectedTiming, setselectedTiming] = useState("");
  console.log("selected timings", selectedTiming);

  const [date, setDate] = useState(new Date());
  console.log("selected date", date);

  const renderTimings = ({ item, index }) => (
    <TouchableOpacity
      style={[
        styles.timingsView,
        {
          borderColor:
            item.title === selectedTiming ? COLORS.primary : COLORS.placeHolder,
        },
      ]}
      onPress={() => setselectedTiming(item.title)}
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
    <View
      style={{
        paddingHorizontal: SW(20),
        paddingVertical: SH(20),
      }}
    >
      {!isVisible ? (
        <TouchableOpacity onPress={onClosePress} style={styles.crossIconView}>
          <Image source={cross} resizeMode="contain" style={styles.iconStyle} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => setisVisible(false)}
          style={styles.crossIconViewCalendar}
        >
          <Text style={styles.calendarTopHeader}>
            {strings.videoCall.chooseTime}
          </Text>
          <Image source={cross} resizeMode="contain" style={styles.iconStyle} />
        </TouchableOpacity>
      )}
      <Spacer space={SH(20)} />

      {!isVisible && (
        <View style={{ alignItems: "center" }}>
          <CompanyDetailView />

          <Spacer space={SH(40)} />

          <Text style={styles.waitingText}>{strings.videoCall.notOnline}</Text>

          <Spacer space={SH(30)} />

          <ButtonIcon
            icon={calendarDate}
            iconStyle={{ height: 20, width: 20 }}
            title={strings.videoCall.schedule}
            style={styles.scheduleButton}
            textStyle={styles.buttonText}
            onPress={() => setisVisible(true)}
          />
        </View>
      )}
      {isVisible && (
        <View
          style={{
            flex: 1,
            height: Dimensions.get("window").height * 0.8,
          }}
        >
          <Text style={styles.calendarHeading}>
            {strings.videoCall.fifteenMin}
            <Text style={styles.userNameCalendar}>
              {" "}
              {strings.STATIC.videoCall.userName}
            </Text>
          </Text>

          <Spacer space={SH(20)} />

          <Calendar
            style={{}}
            theme={{
              textMonthFontSize: ms(13),
              textMonthFontWeight: "bold",
              arrowColor: COLORS.darkGrey,
              textDayStyle: styles.dayText,
              textDayFontSize: ms(13),
              selectedDayTextColor: COLORS.white,
              selectedDayBackgroundColor: COLORS.primary,
              arrowStyle: "arrow",
              todayTextColor: COLORS.black,
            }}
            onDayPress={(day) => {
              const date = day.day;
              const month = moment(day).subtract(1, "months").format("MMM");
              const year = day.year;
              const fullYear = month + " " + date + "," + year;
              setDate(fullYear);
            }}
          />
          <Spacer space={SH(30)} />

          <FlatList
            data={VideoCallTimings}
            keyExtractor={(item) => item.id}
            renderItem={renderTimings}
            numColumns={3}
          />
        </View>
      )}
      <Spacer space={SH(20)} />
    </View>
  );
}
export function File({ onClosePress, onPress }) {
  const [fileResponse, setFileResponse] = useState([]);

  return (
    <View style={{ paddingHorizontal: SW(20), paddingVertical: SH(20) }}>
      <TouchableOpacity onPress={onClosePress} style={styles.crossIconView}>
        <Image source={cross} resizeMode="contain" style={styles.iconStyle} />
      </TouchableOpacity>

      <Spacer space={SH(20)} />

      <TouchableOpacity style={styles.fileView} onPress={onPress}>
        <Image source={files} resizeMode="contain" style={styles.filesIcon} />
        <Text style={styles.filesText}>{strings.files.localFiles}</Text>
      </TouchableOpacity>
      <Spacer space={SH(20)} />
    </View>
  );
}
export function BusinessCard({ onClosePress }) {
  return (
    <View style={{ paddingHorizontal: SW(20), paddingVertical: SH(20) }}>
      <TouchableOpacity onPress={onClosePress} style={styles.crossIconView}>
        <Image source={cross} resizeMode="contain" style={styles.iconStyle} />
      </TouchableOpacity>

      <Spacer space={SH(20)} />

      <View style={styles.cardView}>
        <Image source={userPhoto} resizeMode="contain" style={styles.userPic} />

        <View style={styles.userDetailView}>
          <Text style={styles.userNameText}>
            {strings.STATIC.cardDetails.userName}
          </Text>

          <View style={styles.rowView}>
            <Image
              source={companyBuildings}
              resizeMode="contain"
              style={styles.cardIcons}
            />
            <Text style={styles.cardDetailText}>
              {strings.STATIC.cardDetails.companyName}
            </Text>
          </View>

          <View style={styles.rowView}>
            <Image
              source={email_chat}
              resizeMode="contain"
              style={styles.cardIcons}
            />

            <Text style={styles.cardDetailText}>
              {strings.STATIC.cardDetails.email}
            </Text>
          </View>

          <View style={styles.rowView}>
            <Image
              source={phoneCall}
              resizeMode="contain"
              style={styles.cardIcons}
            />

            <Text style={styles.cardDetailText}>
              {strings.STATIC.cardDetails.phoneNo}
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          alignItems: "flex-end",
          justifyContent: "flex-end",
        }}
      >
        <Button
          style={styles.SendButtonStyle}
          textStyle={styles.sendButtonText}
          title={strings.cardDetails.send}
        />
      </View>
      <Spacer space={SH(20)} />
    </View>
  );
}

export function VoiceMessage({ onClosePress }) {
  const [recordingTime, setrecordingTime] = useState(0);
  const audioRecorderPlayer = new AudioRecorderPlayer();
  const onStartRecord = async () => {
    try {
      const result = await audioRecorderPlayer.startRecorder();
      audioRecorderPlayer.addRecordBackListener((e) => {
        console.log(
          "on play timing",
          audioRecorderPlayer.mmssss(Math.floor(e.currentPosition))
        );
        // setrecordingTime(
        //   audioRecorderPlayer.mmssss(Math.floor(e.currentPosition / 100))
        // );
        // return;
      });
    } catch (error) {
      error;
    }
  };

  const onStopRecord = async () => {
    const result = await audioRecorderPlayer.stopRecorder();
    audioRecorderPlayer.removeRecordBackListener();
    setrecordingTime(0);
    console.log(result);
    console.log("saved timings", recordingTime);
  };
  return (
    <View style={{ paddingHorizontal: SW(20), paddingVertical: SH(20) }}>
      <TouchableOpacity onPress={onClosePress} style={styles.crossIconView}>
        <Image source={cross} resizeMode="contain" style={styles.iconStyle} />
      </TouchableOpacity>

      <Spacer space={SH(20)} />

      <Text style={styles.VoiceText}>{strings.voiceMessage.hold}</Text>

      <Spacer space={SH(60)} />

      <TouchableOpacity
        style={styles.micIcon}
        onPressIn={onStartRecord}
        onPressOut={onStopRecord}
      >
        <Image
          source={voiceButton}
          resizeMode="contain"
          style={styles.micIcon}
        />
      </TouchableOpacity>
      <Spacer space={SH(20)} />
    </View>
  );
}

export function Catalogue({ onClosePress }) {
  const PDFDATA = [
    { id: 1, icon: pdfDocImage, title: "Apparel_catelog_children.pdf" },
    { id: 2, icon: pdfDocImage, title: "Apparel_catelog_children.pdf" },
  ];

  const renderPdf = ({ item, index }) => (
    <TouchableOpacity style={styles.pdfBackView}>
      <View style={styles.pdfRowView}>
        <Image source={item.icon} resizeMode="contain" style={styles.pdfIcon} />
        <Text>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={{ paddingHorizontal: SW(20), paddingVertical: SH(20) }}>
      <TouchableOpacity onPress={onClosePress} style={styles.crossIconView}>
        <Image source={cross} resizeMode="contain" style={styles.iconStyle} />
      </TouchableOpacity>

      <Spacer space={SH(40)} />

      <FlatList
        renderItem={renderPdf}
        data={PDFDATA}
        keyExtractor={(item) => item.id}
      />
      <Spacer space={SH(20)} />
    </View>
  );
}

export function ShippingAddress({ onClosePress }) {
  return (
    <View style={{ paddingHorizontal: SW(20), paddingVertical: SH(20) }}>
      <TouchableOpacity onPress={onClosePress} style={styles.crossIconView}>
        <Image source={cross} resizeMode="contain" style={styles.iconStyle} />
      </TouchableOpacity>

      <Spacer space={SH(40)} />

      <TouchableOpacity
        style={styles.addLocationView}
        onPress={() => navigate(NAVIGATION.addShippingAddress)}
      >
        <Image
          source={addLocation}
          resizeMode="contain"
          style={styles.addLocationIcon}
        />
        <Text style={styles.addLocationText}>
          {strings.chatShippingAddress.addAddress}
        </Text>
        <Text style={styles.addLocationText}>(0/5)</Text>
      </TouchableOpacity>
      <Spacer space={SH(20)} />
    </View>
  );
}

export function Translation({ onClosePress }) {
  const [translationText, setTranslationText] = useState();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "English", value: "English" },
    { label: "Spanish", value: "Spanish" },
  ]);
  const [open2, setOpen2] = useState(false);
  const [value2, setValue2] = useState(null);
  const [items2, setItems2] = useState([
    { label: "Spanish", value: "Spanish" },
    { label: "Dutch", value: "Dutch" },
  ]);
  return (
    <View style={{ paddingHorizontal: SW(20), paddingVertical: SH(20) }}>
      <TouchableOpacity onPress={onClosePress} style={styles.crossIconView}>
        <Image source={cross} resizeMode="contain" style={styles.iconStyle} />
      </TouchableOpacity>

      <Spacer space={SH(30)} />
      <Text style={styles.translationHeadingText}>
        {strings.translation.longPress}
      </Text>
      <View style={styles.autoDetectView}>
        <Text style={styles.translationText}>
          {strings.translation.autoDetect}
        </Text>
        <Icon
          name={"arrow-right"}
          color="black"
          size={scale(10)}
          style={{ marginLeft: SW(40), marginRight: SW(15) }}
        />
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder="English(US)"
          style={{
            borderWidth: 0,
            width: SW(120),
          }}
          // containerStyle={{ zIndex: 100 }}
          // dropDownContainerStyle={{ zIndex: 999 }}
        />
      </View>

      <View
        style={{ borderBottomWidth: 1, borderColor: COLORS.termsBorder }}
      ></View>

      <View style={styles.outgoingMessageview}>
        <Text style={styles.translationText}>English(US)</Text>
        <Icon
          name={"arrow-right"}
          color="black"
          size={scale(10)}
          style={{ marginLeft: SW(43), marginRight: SW(15) }}
        />
        <DropDownPicker
          open={open2}
          value={value2}
          items={items2}
          setOpen={setOpen2}
          setValue={setValue2}
          setItems={setItems2}
          placeholder="Spanish"
          style={{
            borderWidth: 0,
            width: SW(120),
          }}
        />
        <View style={{ backgroundColor: "red" }}></View>
        {/* <TouchableOpacity
          style={{ flex: 1, backgroundColor: "red" }}
          onPress={() => setTranslationText(!translationText)}
        >
          <Image
            resizeMode="contain"
            style={{ height: ms(20), width: ms(20) }}
            source={translationText ? toggleOn : toggleOff}
          />
        </TouchableOpacity> */}
      </View>
      <Spacer space={SH(20)} />
    </View>
  );
}
export const BottomOptions = [
  {
    id: 1,
    icon: chat_photo,
    title: strings.chatting.photo,
  },
  {
    id: 2,
    icon: chat_quickMessage,
    title: strings.chatting.quickMessage,
  },
  {
    id: 3,
    icon: chat_videoCall,
    title: strings.chatting.videoCall,
  },
  {
    id: 4,
    icon: chat_file,
    title: strings.chatting.file,
  },
  {
    id: 5,
    icon: chat_card,
    title: strings.chatting.businessCard,
  },
  {
    id: 6,
    icon: chat_latestPrice,
    title: strings.chatting.latestPrice,
  },
  {
    id: 7,
    icon: chat_voiceMessage,
    title: strings.chatting.voiceMessages,
  },
  {
    id: 8,
    icon: chat_translator,
    title: strings.chatting.translator,
  },
  {
    id: 9,
    icon: chat_sendCatalogue,
    title: strings.chatting.sendCatalogues,
  },
  {
    id: 10,
    icon: chat_shipping,
    title: strings.chatting.shippingAddress,
  },
  {
    id: 11,
    icon: chat_directOffer,
    title: strings.chatting.directOffer,
  },
  {
    id: 12,
    icon: "",
    title: "",
  },
];

export const VideoCallTimings = [
  { id: 1, title: "9:00a-10:00a" },
  { id: 2, title: "10:00a-11:00a" },
  { id: 3, title: "11:00a-12:00p" },
  { id: 4, title: "12:00p-1:00p" },
  { id: 5, title: "1:00p-2:00p" },
  { id: 6, title: "2:00p-3:00p" },
  { id: 7, title: "3:00p-4:00p" },
  { id: 8, title: "4:00p-5:00p" },
  { id: 9, title: "5:00p-6:00p" },
  { id: 10, title: "6:00p-7:00p" },
  { id: 11, title: "7:00p-8:00p" },
  { id: 12, title: "8:00p-9:00p" },
  { id: 13, title: "9:00p-10:00p" },
  { id: 14, title: "10:00p-11:00p" },
  { id: 15, title: "11:00p-12:00a" },
];
