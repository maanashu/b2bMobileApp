import {
  Alert,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { styles } from "./Delivery.styles";
import { Button, ScreenWrapper, Spacer } from "@/components";
import { SH } from "@/theme/ScalerDimensions";
import { COLORS } from "@/theme/Colors";
import { useState } from "react";
import { goBack, navigate } from "@/navigation/NavigationRef";
import { backArrow, jobr, dhl, ups, coins, fedEx } from "@/assets";
import { strings } from "@/localization";
import { NAVIGATION } from "@/constants";
import { useDispatch, useSelector } from "react-redux";
import { getShippingServices } from "@/actions/OrderAction";
import { orderSelector } from "@/selectors/OrderSelector";
import FastImage from "react-native-fast-image";
import { Toast } from "react-native-toast-message/lib/src/Toast";

export function Delivery() {
  const dispatch = useDispatch();
  const services = useSelector(orderSelector);
  const [selectedId, setSelectedId] = useState("");

  console.log("services", JSON.stringify(services?.shippingServices));

  const selectDelivery = () => {
    if (selectedId) {
      {
        navigate(NAVIGATION.reviewAndPayment, {
          deliveryService: selectedId,
        });
      }
    } else {
      Toast.show({
        text2: "Please select a Shipping Service",
        position: "bottom",
        type: "error_toast",
        visibilityTime: 1500,
      });
    }
  };
  useEffect(() => {
    dispatch(getShippingServices());
  }, []);
  const renderDeliveryServices = ({ item }) => (
    <>
      <View style={styles.fedexView}>
        <View style={styles.fedEXDeliveryView}>
          <TouchableOpacity
            style={styles.deliveryViewInnerView}
            onPress={() => setSelectedId(item.id)}
          >
            <View style={styles.deliveryViewInnerView}>
              <FastImage
                resizeMode="contain"
                source={{ uri: item?.image }}
                style={styles.fedExIcon}
              />
              <Text style={styles.deliveryText}>{item?.title}</Text>
            </View>

            <View
              style={{
                borderWidth: 1,
                height: 20,
                width: 20,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10,
                borderColor: selectedId == item?.id ? "#275AFF" : "grey",
              }}
            >
              <View
                style={{
                  ...styles.innerDot,
                  backgroundColor: selectedId == item?.id ? "#275AFF" : "white",
                }}
              ></View>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.priceText}>$8.00</Text>
        <Spacer space={SH(5)} />
      </View>

      <View style={{ borderBottomWidth: 1, borderColor: COLORS.grey }}></View>
    </>
  );

  return (
    <ScreenWrapper style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={styles.header}>
        <View style={styles.headerInnerView}>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
            onPress={() => goBack()}
          >
            <Image
              resizeMode="contain"
              source={backArrow}
              style={{ height: 30, width: 30 }}
            />
            <Text style={styles.headerText}>{strings.startOrder.delivery}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              resizeMode="contain"
              source={coins}
              style={styles.crossIcon}
            />
          </TouchableOpacity>
        </View>
      </View>

      <Spacer space={SH(10)} />

      {/* <View style={styles.mainContainer}>
        <Spacer space={SH(5)} />

        <View style={styles.fedexView}>
          <View style={styles.fedEXDeliveryView}>
            <TouchableOpacity
              onPress={() => setSelectedId("Fedex Express shipping")}
              style={styles.deliveryViewInnerView}
            >
              <View style={styles.deliveryViewInnerView}>
                <Image
                  resizeMode="contain"
                  source={fedEx}
                  style={styles.fedExIcon}
                />
                <Text style={styles.deliveryText}>
                  {strings.delivery.fedEx}
                </Text>
              </View>

              <View
                style={{
                  borderWidth: 1,
                  height: 20,
                  width: 20,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 10,
                  borderColor:
                    selectedId == "Fedex Express shipping" ? "#275AFF" : "grey",
                }}
              >
                <View
                  style={{
                    ...styles.innerDot,
                    backgroundColor:
                      selectedId == "Fedex Express shipping"
                        ? "#275AFF"
                        : "white",
                  }}
                ></View>
              </View>
            </TouchableOpacity>
          </View>
          <Text style={styles.priceText}>$8.00</Text>
          <Spacer space={SH(5)} />
        </View>

        <View style={{ borderBottomWidth: 1, borderColor: COLORS.grey }}></View>

        <Spacer space={SH(10)} />

        <View style={styles.upsView}>
          <View style={styles.upsDeliveryView}>
            <TouchableOpacity
              onPress={() => setSelectedId("UPS Proirity shipping")}
              style={styles.deliveryViewInnerView}
            >
              <View style={styles.deliveryViewInnerView}>
                <Image
                  resizeMode="contain"
                  source={ups}
                  style={styles.fedExIcon}
                />
                <Text style={styles.deliveryText}>{strings.delivery.ups}</Text>
              </View>

              <View
                style={{
                  borderWidth: 1,
                  height: 20,
                  width: 20,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 10,
                  borderColor:
                    selectedId == "UPS Proirity shipping" ? "#275AFF" : "grey",
                }}
              >
                <View
                  style={{
                    ...styles.innerDot,
                    backgroundColor:
                      selectedId == "UPS Proirity shipping"
                        ? "#275AFF"
                        : "white",
                  }}
                ></View>
              </View>
            </TouchableOpacity>
          </View>
          <Text style={styles.priceText}>$8.00</Text>
        </View>

        <Spacer space={SH(5)} />
        <View style={{ borderBottomWidth: 1, borderColor: COLORS.grey }}></View>

        <Spacer space={SH(10)} />

        <View style={styles.dhlView}>
          <View style={styles.dhlDeliveryView}>
            <TouchableOpacity
              onPress={() => setSelectedId("DHL Standard shipping")}
              style={styles.deliveryViewInnerView}
            >
              <View style={styles.deliveryViewInnerView}>
                <Image
                  resizeMode="contain"
                  source={dhl}
                  style={styles.fedExIcon}
                />
                <Text style={styles.deliveryText}>{strings.delivery.dhl}</Text>
              </View>

              <View
                style={{
                  borderWidth: 1,
                  height: 20,
                  width: 20,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 10,
                  borderColor:
                    selectedId == "DHL Standard shipping" ? "#275AFF" : "grey",
                }}
              >
                <View
                  style={{
                    ...styles.innerDot,
                    backgroundColor:
                      selectedId == "DHL Standard shipping"
                        ? "#275AFF"
                        : "white",
                  }}
                ></View>
              </View>
            </TouchableOpacity>
          </View>
          <Text style={styles.priceText}>$8.00</Text>
        </View>

        <Spacer space={SH(5)} />

        <View style={{ borderBottomWidth: 1, borderColor: COLORS.grey }}></View>

        <Spacer space={SH(10)} />

        <View style={styles.jobrView}>
          <View style={styles.jobrDeliveryView}>
            <TouchableOpacity
              onPress={() => setSelectedId("JOBR Standard shipping")}
              style={styles.deliveryViewInnerView}
            >
              <View style={styles.deliveryViewInnerView}>
                <Image
                  resizeMode="contain"
                  source={jobr}
                  style={styles.fedExIcon}
                />
                <Text style={styles.deliveryText}>{strings.delivery.jobr}</Text>
              </View>

              <View
                style={{
                  borderWidth: 1,
                  height: 20,
                  width: 20,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 10,
                  borderColor:
                    selectedId == "JOBR Standard shipping" ? "#275AFF" : "grey",
                }}
              >
                <View
                  style={{
                    ...styles.innerDot,
                    backgroundColor:
                      selectedId == "JOBR Standard shipping"
                        ? "#275AFF"
                        : "white",
                  }}
                ></View>
              </View>
            </TouchableOpacity>
          </View>
          <Text style={styles.priceText}>$8.00</Text>
          <Spacer space={SH(5)} />
        </View>

        <View style={{ borderBottomWidth: 1, borderColor: COLORS.grey }}></View>
      </View> */}
      <View style={styles.mainContainer}>
        <FlatList
          data={services?.shippingServices}
          extraData={services?.shippingServices}
          renderItem={renderDeliveryServices}
        />
      </View>

      <View style={styles.buttonView}>
        <Button
          onPress={selectDelivery}
          style={styles.doneButton}
          title={strings.startOrder.done}
          textStyle={styles.buttonTextStyle}
        />
      </View>
    </ScreenWrapper>
  );
}
