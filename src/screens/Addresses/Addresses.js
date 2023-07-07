import React, { useEffect } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./Addresses.styles";
import { deleteIcon, home, pencil, work } from "@/assets";
import { Button, NameHeaderCoins, ScreenWrapper, Spacer } from "@/components";
import { SH, SW } from "@/theme/ScalerDimensions";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants/navigation";
import { strings } from "@/localization";
import { useDispatch, useSelector } from "react-redux";
import { TYPES, deleteAddress, getUserLocations } from "@/actions/UserActions";
import { getUser } from "@/selectors/UserSelectors";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { Loader } from "@/components/Loader";
import { isLoadingSelector } from "@/selectors/StatusSelectors";
import { SwipeListView } from "react-native-swipe-list-view";

export function Addresses() {
  const dispatch = useDispatch();
  const locations = useSelector(getUser);
  const token = locations?.registered?.token ?? locations?.user?.payload?.token;
  useEffect(() => {
    dispatch(getUserLocations());
  }, []);

  const isLoading = useSelector((state) =>
    isLoadingSelector([TYPES.GET_USER_LOCATION], state)
  );

  const navigationHandler = () => {
    if (token) {
      navigate(NAVIGATION.addressDetails);
    } else {
      Toast.show({
        text2: "Login to add address",
        position: "bottom",
        type: "error_toast",
        visibilityTime: 1500,
      });
    }
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.container}>
      <View style={[styles.item]}>
        <View style={styles.innerView}>
          <Image
            source={item.address_type == "Home" || "home" ? home : work}
            resizeMode="contain"
            style={styles.iconStyle}
          />
          <View>
            <Text style={styles.placeText}>{item.address_type}</Text>

            <View style={{ width: "85%", marginLeft: SW(7) }}>
              <Text>
                {item.custom_address}
                {/* <Text> {item.postal_code}</Text> */}
              </Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={{ flex: 1, alignItems: "flex-end" }}
          onPress={() =>
            navigate(NAVIGATION.addressDetails, {
              type: "update",
              data: locations?.getLocation[index],
              id: locations?.getLocation[index]?.id,
            })
          }
        >
          <Image
            source={pencil}
            resizeMode="contain"
            style={styles.iconStyle}
          />
        </TouchableOpacity>
      </View>
      <Spacer space={SH(10)} />
      <View style={styles.bottomLine} />
    </View>
  );

  return (
    <ScreenWrapper>
      <NameHeaderCoins title={strings.addresses.addresses} backRequired />

      <View style={{ paddingHorizontal: SW(10), paddingVertical: SH(10) }}>
        <SwipeListView
          data={locations?.getLocation}
          renderItem={renderItem}
          renderHiddenItem={({ item }) => (
            <View style={[styles.hiddenItem, { right: 0 }]}>
              <TouchableOpacity
                onPress={() => dispatch(deleteAddress(item?.id))}
                style={{ justifyContent: "center" }}
              >
                <Image
                  source={deleteIcon}
                  style={styles.deleteIcon}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          )}
          rightOpenValue={-65} // Adjust this value based on your design
          disableRightSwipe // Disable swiping to the right
          keyExtractor={(item) => item.id.toString()} // Replace with your unique item identifier
          stopRightSwipe={-65}
        />
        {/* <FlatList
          data={locations?.getLocation}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={locations?.getLocation}
        /> */}
      </View>
      <View style={styles.buttonView}>
        <Button
          title={
            strings.buttonText.addNewAddressNo +
            "(" +
            (locations?.getLocation?.length || 0) +
            "/" +
            "5" +
            ")"
          }
          onPress={navigationHandler}
          disabled={locations?.getLocation?.length === 5 && true}
        />
      </View>

      <Spacer space={SH(20)} />

      {isLoading ? <Loader message="Loading addresses ..." /> : null}
    </ScreenWrapper>
  );
}
