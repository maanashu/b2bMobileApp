import React, { useMemo, useState } from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { styles } from "@/screens/Home/Home.styles";
import { bagGrey, coinStack, dropdownIcon, location } from "@/assets";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "@/selectors/UserSelectors";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";
import { orderSelector } from "@/selectors/OrderSelector";
import { SF, SH, SW } from "@/theme";
import { getWallet } from "@/selectors/WalletSelector";
import { kFormatter } from "@/Utils/GlobalMethods";
import DropDownPicker from "react-native-dropdown-picker";
import { ms } from "react-native-size-matters";
import { Spacer } from "./Spacer";
import { saveUserAddress } from "@/actions/UserActions";
import { LoginModal } from "./LoginModal";

export function HomeHeader({
  onPress,
  userLocation,
  fullAddress,
  onCoinPress,
}) {
  const user = useSelector(getUser);
  const cart = useSelector(orderSelector);
  const wallet = useSelector(getWallet);
  const addressList = user?.getLocation;
  const dispatch = useDispatch();
  // console.log("add list", addressList);
  const [openModal, setOpenModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Add Address", value: "English" },
  ]);

  const checkoutHandler = () => {
    if (cart?.getCart?.cart_products?.length > 0) {
      navigate(NAVIGATION.checkout);
    } else if (cart?.getServiceCart?.appointment_cart_products?.length > 0) {
      navigate(NAVIGATION.serviceCheckout);
    }
  };
  // const dropdownItems = user?.getLocation?.map((item) => ({
  //   label: `${item?.city}, ${item?.state}, ${item?.country}`,
  //   value: item,
  // }));
  const dropdownItems = useMemo(() => {
    return addressList?.map((item) => ({
      label: `${item.city}, ${item.state}, ${item.country}`,
      value: item,
    }));
  }, [addressList]);
  const handleDropdownChange = (itemValue, itemIndex) => {
    setValue(itemValue);
    dispatch(saveUserAddress(itemValue));
  };
  const loginFunction = () => {
    setOpenModal(true);
  };
  const handleOpen = () => {
    if (user?.user?.payload?.token) {
      setOpen(!open);
    } else {
      loginFunction();
    }
  };
  return (
    <>
      <View style={styles.headerStyle}>
        <View style={styles.locationView}>
          <Image
            source={location}
            style={styles.locationIcon}
            resizeMode="contain"
          />
          {/* <TouchableOpacity style={styles.rowView} onPress={onPress}>
             <View>
            <Text style={styles.locationText}>{userLocation}</Text>
            <Text numberOfLines={1} style={styles.fullAddressText}>
              {fullAddress}
            </Text>
          </View>
          <Image
            source={dropdownIcon}
            style={styles.downIcon}
            resizeMode="contain"
          /> 
          </TouchableOpacity> */}
          <View>
            <DropDownPicker
              open={open}
              value={value}
              items={dropdownItems || items}
              setOpen={handleOpen}
              setValue={setValue}
              // setItems={setItems}
              placeholder={userLocation}
              style={styles.dropDownStyle}
              containerStyle={styles.dropDownContainerStyle}
              dropDownContainerStyle={styles.dropDownContainerStyles}
              placeholderStyle={styles.locationText}
              arrowIconStyle={{ height: ms(15), width: ms(15) }}
              onChangeValue={handleDropdownChange}
            />
            {/* <Text style={styles.locationText}>{userLocation}</Text> */}
            {/* <Image
              source={dropdownIcon}
              style={styles.downIcon}
              resizeMode="contain"
            /> */}
            {user?.user?.payload?.token && !open ? (
              <View style={styles.fullAddressView}>
                <Text numberOfLines={1} style={styles.fullAddressText}>
                  {fullAddress}
                </Text>
              </View>
            ) : (
              <View style={styles.fullAddressView}>
                <Text numberOfLines={1} style={styles.fullAddressText}>
                  {""}
                </Text>
              </View>
            )}
          </View>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {cart?.getCart?.cart_products?.length > 0 ||
            (cart?.getServiceCart?.appointment_cart_products?.length > 0 && (
              <TouchableOpacity onPress={checkoutHandler}>
                <Image
                  source={bagGrey}
                  style={styles.bagIcon}
                  resizeMode="contain"
                />
                <View style={styles.cartCountView}>
                  <Text style={{ color: "white", fontSize: SF(10) }}>
                    {cart?.getCart?.cart_products?.length ||
                      cart?.getServiceCart?.appointment_cart_products?.length}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}

          <TouchableOpacity style={styles.coinView} onPress={onCoinPress}>
            <Text style={styles.balanceText}>
              {kFormatter(wallet?.getWalletBalance?.sila_balance) || 0}
            </Text>
            <Image
              source={coinStack}
              style={styles.coinIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <LoginModal isVisible={openModal} closeModal={setOpenModal} />
      </View>
    </>
  );
}
