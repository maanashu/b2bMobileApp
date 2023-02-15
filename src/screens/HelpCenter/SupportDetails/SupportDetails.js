import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { ScreenWrapper, Spacer } from "@/components";
// import { CustomHeader } from '@/screens/Support/CustomHeader';
import { strings } from "@/localization";
import { styles } from "./SupportDetails.style";
import {
  Fonts,
  userPhoto,
  callIcon,
  agentPhoto,
  email_chat,
  location,
  infoBlue,
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
              <Image source={userPhoto} style={styles.manLogo} />
            </TouchableOpacity>

            <View style={{ paddingHorizontal: 7 }}>
              <Text style={styles.deliverManText}>{"Florecilla Jonny"}</Text>
              <Text style={styles.address}>{"Me"}</Text>
            </View>
          </View>
          <Spacer space={SH(10)} />
          <View style={styles.aboutSupporter}>
            <Image source={callIcon} style={styles.callIcon} />
            <Text style={styles.supporterNum}>{"4703-515-1193"}</Text>
          </View>
          <Spacer space={SH(5)} />
          <View style={styles.aboutSupporter}>
            <Image source={email_chat} style={styles.supporterLogo} />
            <Text style={styles.supporterNum}>{"vidal.webe2@gmail.com"}</Text>
          </View>
          <Spacer space={SH(5)} />
          <View style={styles.aboutSupporter}>
            <Image source={location} style={styles.supporterLogo} />
            <Text style={styles.supporterNum}>
              {"4318 Daffodil Lane, Savage, Virginia(VA), 20763"}
            </Text>
          </View>
          <View style={styles.modelHr}></View>
          <View style={styles.aboutSupporter}>
            <Text style={styles.totalTicket}>{"Total Tickets:"}</Text>
            <Text
              style={[
                styles.supporterNum,
                { color: "#6C63F0", fontFamily: Fonts.SemiBold },
              ]}
            >
              {"16"}
            </Text>
          </View>
          <Spacer space={SH(10)} />
          <View style={styles.aboutTicket}>
            <Text style={styles.ticketText}>
              {"Solved"}
              <Text style={styles.ticketCount}> {"9"}</Text>
            </Text>
            <Text style={[styles.ticketText, { marginHorizontal: 30 }]}>
              {"cancel"}
              <Text style={styles.ticketCount}> {"1"}</Text>
            </Text>
          </View>
          <Spacer space={SH(10)} />
          <View style={styles.aboutTicket}>
            <Text style={styles.ticketText}>
              {"Open"}
              <Text style={styles.ticketCount}> {"1"}</Text>
            </Text>
            <Text style={[styles.ticketText, { marginHorizontal: 30 }]}>
              {"Unrespond"}
              <Text style={styles.ticketCount}> {"1"}</Text>
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
          <Text style={styles.asignText}>{"Assigned agent:"}</Text>
          <Spacer space={SH(10)} backgroundColor="#F5F6F7" />
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Image source={agentPhoto} style={styles.agentLogo} />

            <View style={{ paddingHorizontal: 7 }}>
              <Text style={styles.agentName}>{"Satomi D."}</Text>
              <Text style={styles.address}>{"13 Jun, 2022  |   12:25p"}</Text>
            </View>
          </View>
          <Spacer space={SH(10)} backgroundColor="#F5F6F7" />
          <Text style={styles.asignText}>
            {strings.STATIC.supportDetails.alsoOnTicket}
          </Text>
          <Spacer space={SH(10)} backgroundColor="#F5F6F7" />
          <View style={styles.alsoAgent}>
            <Image source={agentPhoto} style={styles.agentLogo} />
            <View style={{ paddingHorizontal: 7 }}>
              <Text style={styles.agentTicket}>{"Satomi D."}</Text>
            </View>
          </View>
          <View style={styles.alsoAgent}>
            <Image source={agentPhoto} style={styles.agentLogo} />
            <View style={{ paddingHorizontal: 7 }}>
              <Text style={styles.agentTicket}>{"Satomi D."}</Text>
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
            <Text style={styles.headerTitle}>#XD1256P67</Text>
          </View>
          <TouchableOpacity onPress={() => setShowModal(!showModal)}>
            <Image
              source={infoBlue}
              resizeMode="contain"
              style={styles.image}
            />
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
        <Spacer space={SH(10)} />
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
                    {"Florecilla Jonny"}
                  </Text>
                  <Text style={styles.address}>{"Me"}</Text>
                </View>
              </View>
            </View>
            <Spacer space={SH(10)} />

            <Text style={styles.supporterText}>
              {strings.STATIC.supportDetails.userMessage}
            </Text>
            <Spacer space={SH(10)} />
            <Text style={styles.supporterTime}>
              {"20 May, 2022   | 08:09am"}
            </Text>
            <View style={styles.hr}></View>
          </View>

          <Spacer space={SH(15)} />

          <View style={styles.supporterCon}>
            <View style={{ display: "flex", flexDirection: "column" }}>
              <Spacer space={SH(8)} />

              <View style={{ display: "flex", flexDirection: "row" }}>
                <Image source={agentPhoto} style={styles.manLogo} />
                <View style={{ paddingHorizontal: 7 }}>
                  <Text style={styles.deliverManText}>{"Satomi D."}</Text>
                  <Text style={styles.address}>{"JOBR agent"}</Text>
                </View>
              </View>
            </View>
            <Spacer space={SH(10)} />
            <Text style={styles.supporterText}>
              {strings.STATIC.supportDetails.agentMessage}
            </Text>
            <Spacer space={SH(10)} />
            <Text style={styles.supporterText}>--------------</Text>
            <Spacer space={SH(10)} />
            <Text style={styles.supporterText}>{"Regards,"}</Text>
            <Spacer space={SH(7)} />
            <Text style={styles.supporterText}>{"Satomi D."}</Text>
            <Spacer space={SH(5)} />
            <Text style={styles.supporterText}>{"Jobr.com Support Team"}</Text>
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
