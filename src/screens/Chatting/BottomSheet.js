import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
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
  Shoes2,
  toggleOn,
  toggleOff,
} from "@/assets";
import { strings } from "@/localization";
import { ButtonIcon } from "@/components/ButtonIcon";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";
import Icon from "react-native-vector-icons/FontAwesome5";
import { ms, scale, vs } from "react-native-size-matters";
import { COLORS } from "@/theme";

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
    </View>
  );
}

export function VideoCall({ onClosePress }) {
  return (
    <View
      style={{
        paddingHorizontal: SW(20),
        paddingVertical: SH(20),
      }}
    >
      <TouchableOpacity onPress={onClosePress} style={styles.crossIconView}>
        <Image source={cross} resizeMode="contain" style={styles.iconStyle} />
      </TouchableOpacity>

      <Spacer space={SH(20)} />

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
        />
      </View>
    </View>
  );
}
export function File({ onClosePress }) {
  return (
    <View style={{ paddingHorizontal: SW(20), paddingVertical: SH(20) }}>
      <TouchableOpacity onPress={onClosePress} style={styles.crossIconView}>
        <Image source={cross} resizeMode="contain" style={styles.iconStyle} />
      </TouchableOpacity>

      <Spacer space={SH(20)} />

      <TouchableOpacity style={styles.fileView}>
        <Image source={files} resizeMode="contain" style={styles.filesIcon} />
        <Text style={styles.filesText}>{strings.files.localFiles}</Text>
      </TouchableOpacity>
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
    </View>
  );
}

export function VoiceMessage({ onClosePress }) {
  return (
    <View style={{ paddingHorizontal: SW(20), paddingVertical: SH(20) }}>
      <TouchableOpacity onPress={onClosePress} style={styles.crossIconView}>
        <Image source={cross} resizeMode="contain" style={styles.iconStyle} />
      </TouchableOpacity>

      <Spacer space={SH(20)} />

      <Text style={styles.VoiceText}>{strings.voiceMessage.hold}</Text>

      <Spacer space={SH(60)} />

      <TouchableOpacity style={styles.micIcon}>
        <Image
          source={voiceButton}
          resizeMode="contain"
          style={styles.micIcon}
        />
      </TouchableOpacity>
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

        <TouchableOpacity
          style={{}}
          onPress={() => setTranslationText(!translationText)}
        >
          <Image
            resizeMode="contain"
            style={{ height: ms(20), width: ms(20) }}
            source={translationText ? toggleOn : toggleOff}
          />
        </TouchableOpacity>
      </View>
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
