import React, { useEffect } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./Addresses.styles";
import { home, pencil, plusGray, work } from "@/assets";
import { Button, ScreenWrapper, Spacer } from "@/components";
import { SH, SW } from "@/theme/ScalerDimensions";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants/navigation";
import { HeaderCoin } from "@/screens/Profile/Wallet/Components/HeaderCoin";
import { strings } from "@/localization";
import { useDispatch, useSelector } from "react-redux";
import { getUserLocations } from "@/actions/UserActions";
import { getUser } from "@/selectors/UserSelectors";
import { useIsFocused } from "@react-navigation/native";

export function Addresses() {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  useEffect(() => {
    dispatch(getUserLocations());
  }, [isFocused]);

  const locations = useSelector(getUser);

  // console.log("locations: " + JSON.stringify(locations?.getLocation));

  const renderItem = ({ item }) => (
    <View style={styles.container}>
      <View style={[styles.item]}>
        <View style={styles.innerView}>
          <Image
            source={item.address_type == "Home" ? home : work}
            resizeMode="contain"
            style={styles.iconStyle}
          />
          <View>
            <Text style={styles.placeText}>{item.address_type}</Text>

            <View style={{ width: "90%", marginLeft: SW(7) }}>
              <Text>
                {item.formatted_address + ","}
                <Text> {item.postal_code}</Text>
              </Text>
            </View>
          </View>
        </View>

        <TouchableOpacity>
          <Image
            source={pencil}
            resizeMode="contain"
            style={styles.iconStyle}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.bottomLine}></View>
    </View>
  );

  return (
    <ScreenWrapper>
      <HeaderCoin amount={"0"} title={strings.addresses.addresses} />

      <View style={{ paddingHorizontal: SW(10), paddingVertical: SH(10) }}>
        <FlatList
          data={locations?.getLocation}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={locations?.getLocation}
        />
      </View>
      <View style={styles.buttonView}>
        <Button
          title={
            strings.buttonText.addNewAddressNo +
            "(" +
            locations?.getLocation?.length +
            "/" +
            "5" +
            ")"
          }
          onPress={() => navigate(NAVIGATION.addressDetails)}
          disabled={locations?.getLocation?.length === 5 && true}
        />
      </View>

      <Spacer space={SH(20)} />
    </ScreenWrapper>
  );
}
