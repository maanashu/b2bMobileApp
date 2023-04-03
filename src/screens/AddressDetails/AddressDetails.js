import React, { useRef, useEffect, useState, useMemo } from "react";
import {
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";
import { styles } from "./AddressDetails.styles";
import {
  addSquare,
  crossBlack,
  home,
  homeIcon,
  invoice,
  location,
} from "@/assets";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Button, ScreenWrapper, Spacer, TextField } from "@/components";
import { SH } from "@/theme/ScalerDimensions";
import { strings } from "@/localization";
import Geolocation from "@react-native-community/geolocation";
import { addUserLocation, saveUserAddress } from "@/actions/UserActions";
import { COLORS } from "@/theme";
import { goBack, navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";
import Modal from "react-native-modal";
import { getAddressFromCoordinates } from "@/Utils/AddressMethods";
import { NormalAlert } from "@/Utils/GlobalMethods";
import { useDispatch, useSelector } from "react-redux";
import MapView, {
  AnimatedRegion,
  Marker,
  PROVIDER_GOOGLE,
} from "react-native-maps";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Loader } from "@/components/Loader";
import { isLoadingSelector } from "@/selectors/StatusSelectors";
import { TYPES } from "@/Types/Types";
import { useIsFocused } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");
export function AddressDetails(props) {
  const mapRef = useRef();

  const dispatch = useDispatch();
  const [longitude, setLongitude] = useState(
    props?.route?.params?.data?.longitude || 76.5875
  );
  const [latitude, setLatitude] = useState(
    props?.route?.params?.data?.latitude || 30.8685
  );
  const [coordinate, setCoordinate] = useState(
    new AnimatedRegion({
      latitude: props?.route?.params?.data?.latitude || 30.8685,
      longitude: props?.route?.params?.data?.longitude || 76.5875,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    })
  );
  const [openModal, setOpenModal] = useState(false);
  const [apart, setApart] = useState("");
  const [floor, setFloor] = useState("");
  const [placeId, setPlaceId] = useState("");
  const [add1, setAdd1] = useState("");
  const [add2, setAdd2] = useState("");
  const [formattedAddress, setFormattedAddress] = useState(
    props.route.params?.data?.formatted_address ?? ""
  );
  const [district, setDistrict] = useState(
    props.route.params?.data?.district ?? ""
  );
  const [country, setCountry] = useState("");
  const [state, setState] = useState(props.route.params?.data?.state ?? "");
  const [zipCode, setZipCode] = useState("");
  const [city, setCity] = useState("");
  const [note, setNot] = useState("");
  const [isHome, setIsHome] = useState(true);
  const [isWork, setIsWork] = useState(false);
  const [isBilling, setIsBilling] = useState(false);
  const [isOther, setIsOther] = useState(false);
  const ASPECT_RATIO = width / height;
  const LATITUDE_DELTA = 0.0922;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
  const DEFAULT_PADDING = { top: 40, right: 40, bottom: 40, left: 40 };
  const locationMarkerRef = useRef(null);

  // console.log(
  //   "chechking lat-->" + JSON.stringify(props.route.params?.data?.state)
  // );

  const isFocused = useIsFocused();

  const isLoading = useSelector((state) =>
    isLoadingSelector([TYPES.USER_LOCATION], state)
  );
  useEffect(() => {
    // refRBSheet.current.open();
    setTimeout(() => {
      autoZoomOnMarkers();
    }, 1000);

    Geolocation.getCurrentPosition((info) => {
      setLongitude(info.coords.longitude);
      setLatitude(info.coords.latitude);

      const newCoordinate = {
        latitude: info.coords.latitude,
        longitude: info.coords.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      };

      if (Platform.OS === "android") {
        if (locationMarkerRef.current) {
          locationMarkerRef.current.animateMarkerToCoordinate(
            newCoordinate,
            1500
          );
        }
      } else {
        coordinate.timing(newCoordinate).start();
      }

      getAddress(
        props?.route?.params?.data?.latitude || info.coords.latitude,
        props?.route?.params?.data?.longitude || info.coords.longitude
      );
    });
  }, []);

  useMemo(() => {
    setTimeout(() => {
      autoZoomOnMarkers();
    }, 1000);
  });

  useEffect(() => {
    if (props?.route?.params?.deliveryLocation) {
      const { lat, lng } = props?.route?.params?.deliveryLocation;
      setLongitude(lng);
      setLatitude(lat);

      const newCoordinate = {
        latitude: lat,
        longitude: lng,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      };

      if (Platform.OS === "android") {
        if (locationMarkerRef.current) {
          locationMarkerRef.current.animateMarkerToCoordinate(
            newCoordinate,
            1500
          );
        }
      } else {
        coordinate.timing(newCoordinate).start();
      }

      getAddress(lat, lng);
    } else if (props?.route?.params?.data) {
      const latlong = {
        lng: props?.route?.params?.data?.longitude,
        lat: props?.route?.params?.data?.latitude,
      };
      const { lng, lat } = latlong;
      setLongitude(lng);
      setLatitude(lat);

      const newCoordinate = {
        latitude: lat,
        longitude: lng,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      };

      if (Platform.OS === "android") {
        if (locationMarkerRef.current) {
          locationMarkerRef.current.animateMarkerToCoordinate(
            newCoordinate,
            1500
          );
        }
      } else {
        coordinate.timing(newCoordinate).start();
      }
      setCountry(props?.route?.params?.data?.country);
      setCity(props?.route?.params?.data?.city);
    }
  }, [
    props.route.params?.deliveryLocation || props.route.params?.data,
    isFocused,
  ]);
  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log("ceeety-->", city);
  //   }, 3000);
  // }, []);

  const getAddress = (latitude, longitude) => {
    getAddressFromCoordinates(latitude, longitude)
      .then((data) => {
        setPlaceId(data.place_id);
        setFormattedAddress(data?.formatted_address);
        if (props.route.params?.deliveryLocation) {
          for (var i = 0; i < data.address_components?.length; i++) {
            if (data.address_components[i].types[0] == "locality") {
              setCity(data?.address_components?.[i]?.long_name);
              setDistrict(data?.address_components?.[i]?.long_name);
            }

            if (data.address_components[i].types[0] == "country") {
              setCountry(data?.address_components?.[i]?.long_name);
            }

            if (
              data.address_components[i].types[0] ==
              "administrative_area_level_1"
            ) {
              setState(data?.address_components?.[i]?.short_name);
            }

            if (data.address_components[i].types[0] == "postal_code") {
              setZipCode(data?.address_components?.[i]?.long_name);
            }
            if (
              data.address_components[i].types[1] == "sublocality" &&
              data.address_components[i].types[2] === "sublocality_level_3"
            ) {
              setAdd1(data?.address_components?.[i]?.long_name);
            }

            if (
              data.address_components[i].types[1] == "sublocality" &&
              data.address_components[i].types[2] === "sublocality_level_1"
            ) {
              setAdd2(data?.address_components?.[i]?.long_name);
            }
          }
        }
      })
      .catch((err) => console.log("error getting address", err));
  };

  const autoZoomOnMarkers = () => {
    if (mapRef.current) {
      // list of _id's must same that has been provided to the identifier props of the Marker
      mapRef.current.fitToSuppliedMarkers(["mk1"], {
        animated: false,
        edgePadding: DEFAULT_PADDING,
      });
    }
  };
  const saveAddress = () => {
    const addressType = isHome ? "Home" : isWork ? "Work" : "Billing";

    if (!apart) {
      NormalAlert({
        title: strings.validation.alert,
        message: `Please mention your ${strings.address.addressLine1Hint}`,
      });
      return;
    }
    // const body = {
    //   place_id: placeId,
    //   custom_address: apart + " " + floor + " " + add1,
    //   address_type: addressType,
    //   city: city,
    //   district: district,
    //   country: country,
    //   postalCode: zipCode,
    //   formatted_address: formattedAddress,
    //   longitude: longitude,
    //   latitude: latitude,
    // };
    const body = {
      place_id: placeId,
      custom_address: apart + " " + floor + " " + add1,
      address_type: addressType,
      district: district,
      country: country,
      formatted_address: formattedAddress,
      longitude: longitude,
      latitude: latitude,
      state: state,
    };
    if (props?.route?.params?.data) {
      dispatch(saveUserAddress(body));
      navigate(NAVIGATION.addShippingAddress, {
        update: "patch",
        id: props?.route?.params?.id,
      });
    } else {
      dispatch(saveUserAddress(body));
      navigate(NAVIGATION.addShippingAddress);
    }
    // dispatch(addUserLocation(body));

    // navigate(NAVIGATION.addressList);
  };
  // console.log("state: " + state);
  return (
    <ScreenWrapper containerPropStyle={{ paddingHorizontal: 0 }}>
      <KeyboardAwareScrollView
        bounces={false}
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          <MapView
            ref={mapRef}
            provider={PROVIDER_GOOGLE}
            showsCompass
            zoomEnabled
            showsMyLocationButton
            // initialRegion={{
            //   latitude: latitude,
            //   longitude: longitude,
            //   latitudeDelta: 0.00722,
            //   longitudeDelta: 0.00721,
            // }}
            region={{
              latitude: latitude,
              longitude: longitude,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA,
            }}
            style={styles.map}
          >
            <Marker.Animated
              identifier={"mk1"}
              ref={(marker) => {
                locationMarkerRef.current = marker;
              }}
              coordinate={coordinate}
              // pinColor={'purple'} // any color
              title={"title"}
              description={"description"}
              onDragEnd={(e) => {
                getAddress(
                  e.nativeEvent.coordinate.latitude,
                  e.nativeEvent.coordinate.longitude
                );
              }}
              draggable
            ></Marker.Animated>
          </MapView>

          <View style={styles.rowCard}>
            <View style={styles.bottom} />
            <Spacer space={SH(10)} />
            <Text style={styles.cardName}>{strings.address.detail}</Text>
            <Spacer space={SH(20)} />

            <View style={styles.row}>
              <Image source={location} resizeMode="cover" style={styles.img} />
              <Text
                style={[styles.subName, { flex: 1 }]}
              >{`${formattedAddress}`}</Text>
            </View>

            <Spacer space={SH(15)} />

            <View>
              <Button
                style={{ padding: 5, margin: SH(5) }}
                textStyle={{ fontSize: SH(14) }}
                onPress={() => navigate(NAVIGATION.searchPlaces)}
                title={"Change"}
              />
            </View>

            <Spacer space={SH(20)} />

            <TextField
              onChangeText={setApart}
              placeholder={strings.address.addressLine1Hint}
              value={apart}
              keyboardType="default"
              style={styles.textField}
            />
            <Spacer space={SH(10)} />

            <TextField
              onChangeText={setFloor}
              placeholder={strings.address.addressLine2Hint}
              value={floor}
              keyboardType="default"
              style={styles.textField}
            />

            <Spacer space={SH(10)} />
            <Text style={styles.cardName}>{strings.address.label}</Text>
            <Spacer space={SH(10)} />

            <View style={styles.label}>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    setIsHome(!isHome),
                      setIsWork(false),
                      setIsBilling(false),
                      setIsOther(false);
                  }}
                  hitSlop={{ top: 16, left: 16, right: 16, bottom: 16 }}
                  style={isHome ? styles.bluehomeImg : styles.homeImg}
                >
                  <Image
                    source={home}
                    resizeMode="cover"
                    style={
                      !isHome
                        ? [styles.img, { tintColor: "black" }]
                        : [styles.img, { tintColor: "white" }]
                    }
                  />
                </TouchableOpacity>

                <Text style={styles.labelName}>{strings.address.home}</Text>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    setIsWork(!isWork),
                      setIsOther(false),
                      setIsBilling(false),
                      setIsHome(false);
                  }}
                  hitSlop={{ top: 16, left: 16, right: 16, bottom: 16 }}
                  style={isWork ? styles.bluehomeImg : styles.homeImg}
                >
                  <Image
                    source={homeIcon}
                    resizeMode="cover"
                    style={
                      isWork ? [styles.img, { tintColor: "white" }] : styles.img
                    }
                  />
                </TouchableOpacity>
                <Text style={styles.labelName}>{strings.address.work}</Text>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    setIsWork(false),
                      setIsOther(false),
                      setIsBilling(!isBilling),
                      setIsHome(false);
                  }}
                  hitSlop={{ top: 16, left: 16, right: 16, bottom: 16 }}
                  style={isBilling ? styles.bluehomeImg : styles.homeImg}
                >
                  <Image
                    source={invoice}
                    resizeMode="cover"
                    style={
                      isBilling
                        ? [styles.img, { tintColor: "white" }]
                        : styles.img
                    }
                  />
                </TouchableOpacity>

                <Text style={styles.labelName}>{strings.address.billing}</Text>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    setIsWork(false),
                      setIsOther(!isOther),
                      setIsBilling(false),
                      setIsHome(false);
                  }}
                  hitSlop={{ top: 16, left: 16, right: 16, bottom: 16 }}
                  style={isOther ? styles.bluehomeImg : styles.homeImg}
                >
                  <Image
                    source={addSquare}
                    resizeMode="cover"
                    style={
                      isOther
                        ? [styles.img, { tintColor: "white" }]
                        : styles.img
                    }
                  />
                </TouchableOpacity>
                <Text style={styles.labelName}>{strings.address.other}</Text>
              </View>
            </View>
            <Spacer space={SH(20)} />
            <Button
              onPress={() => saveAddress()}
              title={strings.address.button}
            />
          </View>

          <Modal
            animationType="fade"
            transparent={true}
            visible={openModal}
            statusBarTranslucent
          >
            <ImageBackground style={styles.centeredView}>
              <View style={styles.modalFilter}>
                <View style={styles.formContent}>
                  <Text style={styles.fieldHeading}>
                    {strings.address.address}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      setOpenModal(!openModal);
                    }}
                  >
                    <Image source={crossBlack} style={styles.img} />
                  </TouchableOpacity>
                </View>
                <Spacer space={SH(20)} />
                <Text style={styles.loginText}>{strings.address.add1}</Text>
                <Spacer space={SH(6)} />
                <TextField
                  onChangeText={setAdd1}
                  label={strings.address.street}
                  value={add1}
                  keyboardType="default"
                  style={styles.textField}
                />
                <Spacer space={SH(14)} />

                <Text style={styles.loginText}>{strings.address.add2}</Text>
                <Spacer space={SH(6)} />
                <TextField
                  onChangeText={setAdd2}
                  label={strings.address.aptOp}
                  value={add2}
                  keyboardType="default"
                  style={styles.textField}
                />
                <Spacer space={SH(14)} />

                <View style={styles.row}>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.loginText}>{strings.address.zip}</Text>
                    <Spacer space={SH(6)} />

                    <TextField
                      onChangeText={setZipCode}
                      label={strings.address.code}
                      value={zipCode}
                      keyboardType="default"
                      style={[styles.textField]}
                    />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.loginText}>{strings.address.city}</Text>
                    <Spacer space={SH(6)} />

                    <TextField
                      onChangeText={setCity}
                      label={strings.address.cityNm}
                      value={city}
                      keyboardType="default"
                      style={styles.textField}
                    />
                  </View>
                </View>
                <Spacer space={SH(14)} />

                <Text style={styles.loginText}>{strings.address.note}</Text>
                <Spacer space={SH(6)} />
                <TextField
                  onChangeText={setNot}
                  label={strings.address.note}
                  value={note}
                  keyboardType="default"
                  style={styles.textField}
                />
                <Spacer space={SH(30)} />
                <Button
                  onPress={() => {
                    setOpenModal(!openModal);
                  }}
                  title={strings.address.button}
                  style={styles.submit}
                />
                <Spacer space={SH(30)} />
              </View>
            </ImageBackground>
          </Modal>
          {/* </RBSheet> */}
        </View>
      </KeyboardAwareScrollView>
      <AntDesign
        name="closecircleo"
        size={SH(32)}
        color={COLORS.black}
        style={{
          position: "absolute",
          top: SH(24),
          left: SH(16),
          paddingTop: SH(16),
        }}
        onPress={() => goBack()}
      />
      {isLoading ? <Loader message="Loading data ..." /> : null}
    </ScreenWrapper>
  );
}
