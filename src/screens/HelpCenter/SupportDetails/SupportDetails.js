import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { ScreenWrapper, Spacer, BackIcon } from "@/components";
// import { CustomHeader } from '@/screens/Support/CustomHeader';
import { strings } from "@/localization";
import { styles } from "./SupportDetails.style";
import {
  responderPic,
  blueMenu,
  roundedEmail,
  call,
  location1,
  Fonts,
  userPhoto,
} from "@/assets";
import { SH } from "@/theme";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export function SupportDetails() {
  const [showModal, setShowModal] = useState(false);

  const supporterPopup = () => {
    if (showModal) {
      return (
        <View style={styles.popupMainView}>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => {
                setShowModal(!showModal);
              }}
            >
              {/* <Image source={responderPic} style={styles.manLogo} /> */}
            </TouchableOpacity>

            <View style={{ paddingHorizontal: 7 }}>
              <Text style={styles.deliverManText}>
                {/* {strings.supportDetails.supporterName} */}
              </Text>
              <Text style={styles.address}>
                {/* {strings.supportDetails.supporterAddr} */}
              </Text>
            </View>
          </View>
          <Spacer space={SH(10)} />
          <View style={styles.aboutSupporter}>
            {/* <Image source={call} style={styles.supporterLogo} /> */}
            <Text style={styles.supporterNum}>
              {/* {strings.supportDetails.supporterNum} */}
            </Text>
          </View>
          <Spacer space={SH(10)} />
          <View style={styles.aboutSupporter}>
            {/* <Image source={roundedEmail} style={styles.supporterLogo} /> */}
            <Text style={styles.supporterNum}>
              {/* {strings.supportDetails.supporterMail} */}
            </Text>
          </View>
          <Spacer space={SH(10)} />
          <View style={styles.aboutSupporter}>
            {/* <Image source={location1} style={styles.supporterLogo} /> */}
            <Text style={styles.supporterNum}>
              {/* {strings.supportDetails.supporteraddress} */}
            </Text>
          </View>
          <View style={styles.modelHr}></View>
          <View style={styles.aboutSupporter}>
            <Text style={styles.totalTicket}>
              {/* {strings.supportDetails.totalTicket} */}
            </Text>
            <Text
              style={[
                styles.supporterNum,
                { color: "#6C63F0", fontFamily: Fonts.SemiBold },
              ]}
            >
              {/* {strings.supportDetails.totalCount} */}
            </Text>
          </View>
          <Spacer space={SH(10)} />
          <View style={styles.aboutTicket}>
            <Text style={styles.ticketText}>
              {/* {strings.supportDetails.solved}{' '} */}
              <Text style={styles.ticketCount}>
                {" "}
                {/* {strings.supportDetails.solvedCount} */}
              </Text>
            </Text>
            <Text style={[styles.ticketText, { marginHorizontal: 30 }]}>
              {strings.supportDetails.cancel}{" "}
              <Text style={styles.ticketCount}>
                {" "}
                {/* {strings.supportDetails.cancelCount} */}
              </Text>
            </Text>
          </View>
          <Spacer space={SH(10)} />
          <View style={styles.aboutTicket}>
            <Text style={styles.ticketText}>
              {/* {strings.supportDetails.open}{' '} */}
              <Text style={styles.ticketCount}>
                {" "}
                {/* {strings.supportDetails.openCount}{' '} */}
              </Text>
            </Text>
            <Text style={[styles.ticketText, { marginHorizontal: 30 }]}>
              {/* {strings.supportDetails.unrespond}{' '} */}
              <Text style={styles.ticketCount}>
                {" "}
                {/* {strings.supportDetails.unrespondCount} */}
              </Text>
            </Text>
          </View>
        </View>
      );
    }
  };
  const agentPopup = () => {
    if (showModal) {
      return (
        <View style={styles.agentpopupMainView}>
          <Text style={styles.asignText}>
            {/* {strings.supportDetails.asignAgent} */}
          </Text>
          <Spacer space={SH(10)} backgroundColor="#F5F6F7" />
          <View style={{ display: "flex", flexDirection: "row" }}>
            {/* <Image source={responderPic} style={styles.agentLogo} /> */}

            <View style={{ paddingHorizontal: 7 }}>
              <Text style={styles.agentName}>
                {/* {strings.supportDetails.asignName} */}
              </Text>
              <Text style={styles.address}>
                {/* {strings.supportDetails.asignDate} */}
              </Text>
            </View>
          </View>
          <Spacer space={SH(10)} backgroundColor="#F5F6F7" />
          <Text style={styles.asignText}>
            {/* {strings.supportDetails.alsoTicket} */}
          </Text>
          <Spacer space={SH(10)} backgroundColor="#F5F6F7" />
          <View style={styles.alsoAgent}>
            {/* <Image source={responderPic} style={styles.agentLogo} /> */}
            <View style={{ paddingHorizontal: 7 }}>
              <Text style={styles.agentTicket}>
                {/* {strings.supportDetails.asignName} */}
              </Text>
            </View>
          </View>
          <View style={styles.alsoAgent}>
            {/* <Image source={responderPic} style={styles.agentLogo} /> */}
            <View style={{ paddingHorizontal: 7 }}>
              <Text style={styles.agentTicket}>
                {/* {strings.supportDetails.asignName} */}
              </Text>
            </View>
          </View>
        </View>
      );
    }
  };
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <View style={styles.maincontainer}>
          <View style={{ flexDirection: "row" }}>
            {/* <BackIcon inner /> */}
            <Text style={styles.headerTitle}>#hhlgkoypglv</Text>
          </View>
          <TouchableOpacity onPress={() => setShowModal(!showModal)}>
            {/* <Image source={blueMenu} resizeMode="cover" style={styles.image} /> */}
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.containers}>
        {/* <CustomHeader
          onPress={() => {
            setShowModal(!showModal)
          }}
        /> */}

        {supporterPopup()}
        {agentPopup()}
        {/* <Spacer space={SH(10)} /> */}
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          style={styles.container}
        >
          <View style={styles.supporterCon}>
            <View style={{ display: "flex", flexDirection: "column" }}>
              <Spacer space={SH(8)} />
              <View style={{ display: "flex", flexDirection: "row" }}>
                <Image source={userPhoto} style={styles.manLogo} />

                <View style={{ paddingHorizontal: 7 }}>
                  <Text style={styles.deliverManText}>
                    {/* {strings.supportDetails.supporterName} */}
                  </Text>
                  <Text style={styles.address}>
                    {/* {strings.supportDetails.supporterAddr} */}
                  </Text>
                </View>
              </View>
            </View>
            <Spacer space={SH(10)} />

            <Text style={styles.supporterText}>
              {/* {strings.supportDetails.supporterMsg} */}
            </Text>
            <Spacer space={SH(10)} />
            <Text style={styles.supporterTime}>
              {/* {strings.supportDetails.supporterTime} */}
            </Text>
            <View style={styles.hr}></View>
          </View>

          <Spacer space={SH(30)} />

          <View style={styles.supporterCon}>
            <View style={{ display: "flex", flexDirection: "column" }}>
              <Spacer space={SH(8)} />

              <View style={{ display: "flex", flexDirection: "row" }}>
                <Image source={userPhoto} style={styles.manLogo} />
                <View style={{ paddingHorizontal: 7 }}>
                  <Text style={styles.deliverManText}>
                    {/* {strings.supportDetails.agentName} */}
                  </Text>
                  <Text style={styles.address}>
                    {/* {strings.supportDetails.agentAddress} */}
                  </Text>
                </View>
              </View>
            </View>
            <Spacer space={SH(10)} />
            <Text style={styles.supporterText}>
              {/* {strings.supportDetails.agentMsg} */}
            </Text>
            <Spacer space={SH(10)} />
            <Text style={styles.supporterText}>--------------</Text>
            <Spacer space={SH(10)} />
            <Text style={styles.supporterText}>Regards,</Text>
            <Spacer space={SH(7)} />
            <Text style={styles.supporterText}>Satomi D.</Text>
            <Spacer space={SH(5)} />
            <Text style={styles.supporterText}>Jobr.com Support Team</Text>
            <Spacer space={SH(10)} />
            <Text style={styles.supporterTime}>
              {/* {strings.supportDetails.agentTime} */}
            </Text>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </ScreenWrapper>
  );
}
