import React from "react";
import {
  Text,
  TouchableOpacity,
  ScrollView,
  View,
  FlatList,
} from "react-native";
import { Spacer, ScreenWrapper, Header } from "@/components";
import { styles } from "./OrderedManufacturers.styles";
import { SH } from "@/theme";
import { CompanyView } from "./Components/CompanyView";
import { strings } from "@/localization";
import { HeaderSubName } from "../Components/HeaderSubName";
import { orderSelector } from "@/selectors/OrderSelector";
import { useSelector } from "react-redux";

export function OrderedManufacturers({ route }) {
  const order = useSelector(orderSelector);

  order?.getBrandsProductsShops?.shops?.data?.length;
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
  const renderShops = ({ item }) => (
    <>
      <CompanyView
        organizationName={item?.user_profiles?.organization_name}
        profilePhoto={{ uri: item?.user_profiles?.profile_photo }}
        userLocation={
          item?.user_locations?.[0]?.state +
          ", " +
          item?.user_locations?.[0]?.country
        }
      />
      <Spacer space={SH(20)} />
    </>
  );

  return (
    <ScreenWrapper>
      <HeaderSubName
        title={strings.jbrWallet.manfacturer}
        subTitle={
          order?.getBrandsProductsShops?.shops?.data?.length +
          strings.STATIC.jbrWallet.manufacturers
        }
      />
      <View style={styles.mainContainer}>
        <Spacer space={SH(20)} />
        <FlatList
          data={order?.getBrandsProductsShops?.shops?.data ?? []}
          extraData={order?.getBrandsProductsShops?.shops?.data}
          renderItem={renderShops}
        />
      </View>
    </ScreenWrapper>
  );
}
