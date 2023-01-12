import { Image, Text, TouchableOpacity, View } from "react-native";
import React, { useRef } from "react";
import { styles } from "./Chatting.styles";
import { Spacer } from "@/components";
import { SH, SW } from "@/theme/ScalerDimensions";
import { cross, camera, gallery_image } from "@/assets";
import { strings } from "@/localization";

export function PhotoFunction({ onPress }) {
  return (
    <View style={{ paddingHorizontal: SW(20), paddingVertical: SH(10) }}>
      {/* <TouchableOpacity onPress={onPress} style={styles.crossIconView}>
        <Image source={cross} resizeMode="contain" style={styles.iconStyle} />
      </TouchableOpacity> */}

      <Spacer space={SH(60)} />

      <TouchableOpacity style={styles.cameraView}>
        <Image
          source={camera}
          resizeMode="stretch"
          style={styles.cameraIcons}
        />
        <Text style={styles.cameraText}>{strings.chatting.takephoto}</Text>
      </TouchableOpacity>

      <Spacer space={SH(40)} />

      <TouchableOpacity style={styles.cameraView}>
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

export function QuickReply({ onPress }) {
  return (
    <View style={{ paddingHorizontal: SW(20), paddingVertical: SH(20) }}>
      {/* <TouchableOpacity onPress={onPress} style={styles.crossIconView}>
        <Image source={cross} resizeMode="contain" style={styles.iconStyle} />
      </TouchableOpacity> */}

      <Spacer space={SH(20)} />

      <TouchableOpacity>
        <Text style={styles.quickReplyText}>
          {strings.quickReplies.bestOffer}
        </Text>
      </TouchableOpacity>

      <View style={styles.borderline}></View>

      <TouchableOpacity>
        <Text style={styles.quickReplyText}>
          Hi, I’m interested on this product. I would like some more detilas.
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

export function VideoCall({ onPress }) {
  return (
    <View style={{ paddingHorizontal: SW(20), paddingVertical: SH(20) }}>
      {/* <TouchableOpacity onPress={onPress} style={styles.crossIconView}>
        <Image source={cross} resizeMode="contain" style={styles.iconStyle} />
      </TouchableOpacity> */}

      <Spacer space={SH(20)} />

      <Text>hello this is video call bottom sheet</Text>
    </View>
  );
}
export function File({ onPress }) {
  return (
    <View style={{ paddingHorizontal: SW(20), paddingVertical: SH(20) }}>
      <TouchableOpacity onPress={onPress} style={styles.crossIconView}>
        <Image source={cross} resizeMode="contain" style={styles.iconStyle} />
      </TouchableOpacity>

      <Spacer space={SH(20)} />

      <Text>hello this is file bottom sheet</Text>
    </View>
  );
}
export function BusinessCard({ onPress }) {
  return (
    <View style={{ paddingHorizontal: SW(20), paddingVertical: SH(20) }}>
      <TouchableOpacity onPress={onPress} style={styles.crossIconView}>
        <Image source={cross} resizeMode="contain" style={styles.iconStyle} />
      </TouchableOpacity>

      <Spacer space={SH(20)} />
      <Text>hello this is business card bottom sheet</Text>
    </View>
  );
}
