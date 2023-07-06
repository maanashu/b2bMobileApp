import React from "react";
import { Text, TouchableOpacity, FlatList, View } from "react-native";
import { Spacer, CompanyDetailView } from "@/components";
import { strings } from "@/localization";
import { styles } from "../OrderedManufacturers.styles";
import { SH } from "@/theme";
import { yewiLogo } from "@/assets";

export function CompanyView({
  about,
  organizationName,
  profilePhoto,
  userLocation,
}) {
  const CompanyData = [
    {
      id: "1",
      Heading: ">1h",
      text: "Response Time",
    },
    {
      id: "2",
      Heading: "100%",
      text: "On-delivery",
    },
    {
      id: "3",
      Heading: "105",
      text: "Order delivery",
    },
  ];
  const SecondItem = ({ item }) => (
    <TouchableOpacity style={styles.itemS}>
      <View style={styles.upperButtons}>
        <Text style={styles.primaryColorText}>{item.Heading}</Text>
        <Text style={styles.smallText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.yewiView}>
      <View style={styles.aboutCompanyView}>
        <Text style={styles.aboutCompanyText}>{about}</Text>

        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.followButton}>
            <Text style={styles.followText}>
              {strings.productInquiry.followed}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.visitButton}>
            <Text style={styles.visitText}>
              {strings.productInquiry.visitStore}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Spacer space={SH(10)} />

      <CompanyDetailView
        title={organizationName || "Yiwu Leqi E-Commerce Firm"}
        profilePhoto={profilePhoto || yewiLogo}
        locationText={userLocation || "Miami, USA"}
      />

      <Spacer space={SH(20)} />

      <FlatList
        data={CompanyData}
        renderItem={SecondItem}
        keyExtractor={(item) => item.id}
        //   extraData={product}
        numColumns={3}
      />
    </View>
  );
}
