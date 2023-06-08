import React, { useEffect } from "react";
import {
  View,
  Image,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  Button,
  CompanyDetailView,
  NameHeader,
  ScreenWrapper,
  Spacer,
} from "@/components";
import { styles } from "@/screens/PlacedOrderStatus/OrderedStatus/OrderedStatus.styles";
import { COLORS, SH, SW } from "@/theme";
import { strings } from "@/localization";
import {
  backArrow,
  chatNow,
  deliveryMap,
  deliveryTruck,
  forward,
  location,
  orderDetails,
  yewiLogo,
} from "@/assets";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";
import { getUser } from "@/selectors/UserSelectors";
import { getWallet } from "@/selectors/WalletSelector";
import { useDispatch, useSelector } from "react-redux";
import { orderSelector } from "@/selectors/OrderSelector";
import { useNavigation } from "@react-navigation/native";

export function OrderedStatus({ route }) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const wallet = useSelector(getWallet);
  const order = useSelector(orderSelector);
  const Details = [
    {
      id: "1",
      quantity: "1",
      itemName: "Marlboro Red Gold",
      type: "packet",
      price: "$6.56",
    },
    {
      id: "2",
      quantity: "1",
      itemName: "Marlboro Red Gold",
      type: "packet",
      price: "$6.56",
    },
    {
      id: "3",
      quantity: "1",
      itemName: "Marlboro Red Gold",
      type: "packet",
      price: "$6.56",
    },
  ];
  console.log("orderDetail====", JSON.stringify(order?.getOneOrderDetail));

  const render = (item) => {
    return (
      <View>
        <View style={styles.flatlistItems}>
          <Text style={styles.quantityText}>
            {item.quantity}
            <Text style={styles.lightText}> x </Text>
            <Text style={styles.quantityText}>{item.itemName}</Text>
            <Text style={styles.lightText}> ({item.type})</Text>
          </Text>

          <Text style={styles.quantityText}>{item.price}</Text>
        </View>
      </View>
    );
  };

  return (
    <ScreenWrapper>
      <NameHeader title={"Home"} back={backArrow} />

      <ScrollView style={styles.mainContainer}>
        <Spacer space={SH(25)} />

        <View style={styles.orderStatus}>
          <View style={styles.statusInnerView}>
            <Text style={styles.statusText}>
              {strings.myPurchase.processing}
            </Text>
            <Spacer space={SH(5)} />

            <View style={styles.bottomStatusBar}></View>
          </View>

          {/*  */}

          <View style={styles.statusInnerView}>
            <Text style={styles.statusText}>{strings.myPurchase.shipped}</Text>
            <Spacer space={SH(5)} />
            <View
              style={[
                styles.bottomStatusBar,
                { borderColor: COLORS.backgroundGrey },
              ]}
            ></View>
          </View>
          <View style={styles.statusInnerView}>
            <Text style={styles.statusText}>
              {strings.myPurchase.delivered}
            </Text>
            <Spacer space={SH(5)} />
            <View
              style={[
                styles.bottomStatusBar,
                { borderColor: COLORS.backgroundGrey },
              ]}
            ></View>
          </View>

          {/*  */}
        </View>

        <Spacer space={SH(20)} />

        <Text style={styles.statusHeading}>
          {strings.myPurchase.processing}
        </Text>

        {/* <Spacer space={SH(15)} />

        <Text style={styles.quoteText}>{strings.myPurchase.quote}</Text> */}

        <Spacer space={SH(20)} />

        <View style={styles.companyBackground}>
          <View style={styles.companyInnerView}>
            <Text>About company</Text>
            <TouchableOpacity>
              <Image
                source={chatNow}
                resizeMode="contain"
                style={styles.chatIcon}
              />
            </TouchableOpacity>
          </View>

          <Spacer space={SH(15)} />
          <CompanyDetailView
            title={"Yiwu Leqi E-Commerce Firm"}
            profilePhoto={yewiLogo}
            locationText={"Miami, USA"}
          />
        </View>

        <Spacer space={SH(20)} />

        <View style={styles.deliveryView}>
          <View style={styles.deliveryViewDirection}>
            <View>
              <Image
                resizeMode="contain"
                style={styles.truckIcon}
                source={deliveryTruck}
              />
            </View>
            <View style={styles.deliveryViewText}>
              <Text style={styles.deliveryTime}>
                {strings.reviewAndPayment.deliveryTime}
              </Text>
              <Text style={styles.deliveryName}>DHL Express</Text>
              <Text style={styles.estimatedDelivery}>
                {strings.reviewAndPayment.estimatedDelivery}{" "}
                <Text style={styles.deliveryDays}>
                  {" "}
                  {strings.reviewAndPayment.workingdays}
                </Text>
              </Text>
            </View>
          </View>
        </View>

        <Spacer space={SH(1)} />

        <TouchableOpacity style={styles.elevatedView}>
          <View style={styles.deliveryViewDirection}>
            <Image
              style={styles.deliveryPinIcon}
              source={location}
              resizeMode="contain"
            />
            <Text style={styles.boldHeading}>Delivery Address</Text>
          </View>

          <Spacer space={SH(5)} />

          <View style={{ height: "50%" }}>
            <Image
              source={deliveryMap}
              resizeMode="cover"
              style={{ width: "100%", height: "120%", borderRadius: SW(8) }}
            />
          </View>

          <View style={{ marginTop: SH(35) }}>
            <Text style={styles.addressTypeText}>{"Home"}</Text>
            <Text style={styles.adressText}>{"2598 West Street"}</Text>
            <Text style={styles.adressText}>{"Holland, MI 49424"}</Text>

            <Spacer space={SH(7)} />

            <View style={styles.bottomLine}></View>
            <Spacer space={SH(7)} />
            <View style={styles.rowView}>
              <Text style={styles.adressText}>{"Apartment 395"}</Text>
              <Image
                source={forward}
                resizeMode="contain"
                style={styles.forwardIcon}
              />
            </View>
          </View>
        </TouchableOpacity>

        <Spacer space={SH(15)} />

        <View style={styles.orderedProductsView}>
          <View style={styles.orderDetailsHeader}>
            <Image
              resizeMode="contain"
              source={orderDetails}
              style={styles.ordetDetailsIcon}
            />
            <Text style={styles.orderDetailsText}>
              {strings.reviewAndPayment.orderDetails}
            </Text>
          </View>

          <Spacer space={SH(2)} />
          <View style={{ paddingHorizontal: SW(20) }}>
            <View style={styles.pricesView}>
              <Text style={styles.pricesTextSemi}>{"Order number"}</Text>
              <Text style={styles.pricesTextSemi}>{"-$6.56"}</Text>
            </View>

            <Spacer space={SH(10)} />

            <View style={styles.pricesView}>
              <Text style={styles.pricesTextSemi}>{"Order from"}</Text>
              <Text style={styles.pricesTextSemi}>{"-$6.56"}</Text>
            </View>

            <Spacer space={SH(10)} />

            <View style={styles.pricesView}>
              <Text style={styles.pricesTextSemi}>{"Delivery address"}</Text>
              <Text style={styles.pricesTextSemi}>{"-$6.56"}</Text>
            </View>

            <Spacer space={SH(10)} />

            <View style={styles.borderLine}></View>
          </View>

          <Spacer space={SH(10)} />

          <ScrollView style={{ paddingHorizontal: SW(20) }}>
            <FlatList
              data={Details}
              renderItem={({ item }) => render(item)}
              keyExtractor={(item) => item.id}
            />

            <Spacer space={SH(8)} />

            <View style={styles.borderLine}></View>

            <Spacer space={SH(15)} />

            <View style={styles.pricesView}>
              <Text style={styles.pricesText}>{"Subtotal"}</Text>
              <Text style={styles.pricesText}>{"$20.56"}</Text>
            </View>

            <Spacer space={SH(10)} />

            <View style={styles.pricesView}>
              <Text style={styles.pricesText}>{"Discount"}</Text>
              <Text style={styles.pricesText}>{"-$5.00"}</Text>
            </View>

            <Spacer space={SH(10)} />

            <View style={styles.pricesView}>
              <Text style={styles.pricesText}>{"Taxes & Other fees"}</Text>
              <Text style={styles.pricesText}>{"$1.00"}</Text>
            </View>

            <Spacer space={SH(10)} />

            <View style={styles.pricesView}>
              <Text style={styles.pricesText}>
                {"DHL Standard shipping fees"}
              </Text>
              <Text style={styles.pricesText}>{"$1.00"}</Text>
            </View>

            <Spacer space={SH(20)} />

            <View style={styles.pricesView}>
              <Text style={styles.totalPriceText}>{"Total"}</Text>
              <Text style={styles.totalPriceText}>{"$19.65"}</Text>
            </View>
          </ScrollView>
        </View>

        <Spacer space={SH(20)} />

        <Button
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{ name: NAVIGATION.home }],
            })
          }
          title={"Go to Home Page"}
          style={styles.trackOrderButton}
        />
        <Spacer space={SH(30)} />
      </ScrollView>
    </ScreenWrapper>
  );
}
