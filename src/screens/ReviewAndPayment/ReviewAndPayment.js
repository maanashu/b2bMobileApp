import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef } from "react";
import { styles } from "./ReviewAndPayment.styles";
import { Button, Spacer } from "@/components";
import { SF, SH, SW } from "@/theme/ScalerDimensions";
import { COLORS } from "@/theme/Colors";
import { useRoute } from "@react-navigation/native";
import { goBack, navigate } from "@/navigation/NavigationRef";
import RBSheet from "react-native-raw-bottom-sheet";
import {
  backArrow,
  coins,
  deliveryTruck,
  addSquareBox,
  addSquare,
  jobrRound,
  walletIcon,
  orderDetails,
  Fonts,
  forwardArrowWhite,
  whiteJobr,
  rightArrowBlue,
  referralCorner,
} from "@/assets";
import { strings } from "@/localization";
import { NAVIGATION } from "@/constants";
import { ms, verticalScale, vs } from "react-native-size-matters";

const data = [
  {
    name: "JBR 10",
    sub: "USD $10",
    id: 1,
  },
  {
    name: "JBR 25",
    sub: "USD $25",
    id: 2,
  },
  {
    name: "JBR 50",
    sub: "USD $50",
    id: 3,
  },
  {
    name: "JBR 100",
    sub: "USD $100",
    id: 4,
  },
];

export function ReviewAndPayment({ navigation }) {
  const renderItem = ({ item }) => (
    <View style={styles.rowMainCard}>
      <View style={styles.renderinput}>
        <Image source={whiteJobr} resizeMode="contain" style={styles.img} />
        <Text
          style={[
            styles.getName,
            { alignSelf: "center", paddingHorizontal: 10 },
          ]}
        >
          {item.name}
        </Text>
      </View>

      <TouchableOpacity
        // onPress={() => navigate(NAVIGATION.paymentMethod, { data: "wallet" })}
        onPress={() => {
          refRBSheet.current.close();
          navigate(NAVIGATION.paymentMethod);
        }}
        style={styles.row}
      >
        <Text style={styles.formText}>{item.sub}</Text>
        <Image
          source={rightArrowBlue}
          resizeMode="contain"
          style={styles.mask}
        />
      </TouchableOpacity>
    </View>
  );

  const refRBSheet = useRef();

  const route = useRoute();

  const { countryname } = route.params || {};

  // const [address, setAddress] = useState(countryname);
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
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
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
            <Text style={styles.headerText}>
              {strings.delivery.reviewAndPayment}
            </Text>
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
      <ScrollView style={styles.mainContainer}>
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
              <Text style={styles.deliveryTime}>Delivery time</Text>
              <Text style={styles.deliveryName}>Express shipping</Text>
              <Text style={styles.estimatedDelivery}>
                Estimated Delivery{" "}
                <Text style={styles.deliveryDays}> 3-5 Days</Text>
              </Text>
            </View>
          </View>
        </View>
        <Spacer space={SH(15)} />

        {countryname == undefined ? (
          <TouchableOpacity
            onPress={() => navigate(NAVIGATION.addShippingAddress)}
            style={styles.addressView}
          >
            <View>
              <Image
                resizeMode="contain"
                source={addSquareBox}
                style={styles.addIcon}
              />
            </View>
            <View>
              <Text style={styles.addAddressText}>Add shipping address</Text>
            </View>
          </TouchableOpacity>
        ) : (
          <View style={styles.addressView}>
            <Text>{countryname}</Text>
          </View>
        )}

        <Spacer space={SH(15)} />
        <View style={styles.jobrWalletView}>
          <View style={styles.walletInfoView}>
            <View style={styles.walletInnerView}>
              <Image
                resizeMode="contain"
                source={walletIcon}
                style={styles.walletIcons}
              />
              <Text style={{ fontFamily: Fonts.SemiBold, color: COLORS.black }}>
                Balance
              </Text>
            </View>

            <TouchableOpacity onPress={() => refRBSheet.current.open()}>
              <Image
                resizeMode="contain"
                source={addSquare}
                style={{ height: 25, width: 25, marginRight: SW(2) }}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.walletInfoView}>
            <View style={styles.walletInnerView}>
              <Image
                resizeMode="contain"
                source={jobrRound}
                style={{ height: 25, width: 25, marginRight: SW(5) }}
              />
              <Text style={styles.jbrText}>JBR</Text>
            </View>

            <Text style={styles.jbrText}>
              JBR <Text>0.00</Text>
            </Text>
          </View>
        </View>

        <Spacer space={SH(15)} />

        <View style={styles.orderedProductsView}>
          <View style={styles.orderDetailsHeader}>
            <Image
              resizeMode="contain"
              source={orderDetails}
              style={styles.ordetDetailsIcon}
            />
            <Text style={styles.orderDetailsText}>Order details</Text>
          </View>

          <View style={{ paddingHorizontal: SW(20) }}>
            <FlatList
              data={Details}
              renderItem={({ item }) => render(item)}
              keyExtractor={(item) => item.id}
            />

            <Spacer space={SH(8)} />

            <View style={styles.borderLine}></View>

            <Spacer space={SH(15)} />

            <View style={styles.pricesView}>
              <Text style={styles.pricesText}>Subtotal</Text>
              <Text style={styles.pricesText}>$20.56</Text>
            </View>

            <Spacer space={SH(10)} />

            <View style={styles.pricesView}>
              <Text style={styles.pricesText}>Discount</Text>
              <Text style={styles.pricesText}>-$5.00</Text>
            </View>

            <Spacer space={SH(10)} />

            <View style={styles.pricesView}>
              <Text style={styles.pricesText}>Taxes & Other fees</Text>
              <Text style={styles.pricesText}>$1.00</Text>
            </View>

            <Spacer space={SH(10)} />

            <View style={styles.pricesView}>
              <Text style={styles.deliveryPriceText}>Delivery fees</Text>
              <Text style={styles.pricesText}>$1.00</Text>
            </View>

            <Spacer space={SH(20)} />

            <View style={styles.pricesView}>
              <Text style={styles.totalPriceText}>Total</Text>
              <Text style={styles.totalPriceText}>$19.65</Text>
            </View>
          </View>
        </View>
        <Spacer space={SH(10)} />
        <Text style={{ marginHorizontal: 2, fontSize: SF(13) }}>
          By completing this order, I agree to all {""}
          <Text style={{ fontSize: SF(13), color: COLORS.activeTab }}>
            terms & conditions
          </Text>
        </Text>
      </ScrollView>
      {countryname == undefined ? (
        <View style={styles.bottomButtonView}>
          <TouchableOpacity disabled={true} style={styles.missingAddressButton}>
            <View style={styles.missingAddressButtonView}>
              <Text style={styles.placeOrderText}>
                Place order
                <Text style={{ fontFamily: Fonts.Regular, fontSize: SF(12) }}>
                  {" "}
                  (Missing address)
                </Text>
              </Text>
              <View style={styles.box}>
                <Image
                  source={forwardArrowWhite}
                  style={{ height: 25, width: SW(39) }}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.bottomButtonView}>
          <TouchableOpacity style={styles.missingAddressButton}>
            <View style={styles.missingAddressButtonView}>
              <Text style={styles.placeOrderText}>
                Place order
                <Text style={{ fontFamily: Fonts.Regular, fontSize: SF(12) }}>
                  {" "}
                  (Payment)
                </Text>
              </Text>
              <View style={styles.box}>
                <Image
                  source={forwardArrowWhite}
                  style={{ height: 25, width: SW(39) }}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      )}

      <RBSheet
        ref={refRBSheet}
        animationType="fade"
        closeOnDragDown={false}
        closeOnPressMask={false}
        height={vs(630)}
        customStyles={{
          wrapper: {
            backgroundColor: "#999999",
          },
          container: {
            backgroundColor: "#999999",
          },
          draggableIcon: {
            backgroundColor: "#000",
          },
        }}
      >
        <View
          style={{
            backgroundColor: "#999999",
            paddingBottom: vs(10),
            paddingHorizontal: ms(20),
            alignItems: "flex-end",
          }}
        >
          <TouchableOpacity onPress={() => refRBSheet.current.close()}>
            <Text
              style={{
                fontFamily: Fonts.SemiBold,
                fontSize: ms(14),
                color: COLORS.white,
              }}
            >
              {strings.wallet.close}
            </Text>
          </TouchableOpacity>
        </View>
        {/* <View
          style={{
            backgroundColor: COLORS.white,
            flex: 1,
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            paddingHorizontal: ms(20),
            paddingTop: verticalScale(10),
          }}
        >
          <Text>{strings.wallet.close}</Text>
        </View> */}
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          style={{
            backgroundColor: "white",
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            paddingTop: verticalScale(20),
          }}
        >
          <View style={styles.headingRowView}>
            <Text style={styles.walletText}>{strings.wallet.wallet}</Text>
            <Image
              source={coins}
              resizeMode="contain"
              style={styles.coinIcon}
            />
          </View>
          <View>
            <Text style={{ textAlign: "center" }}>
              {strings.wallet.useCoin}
            </Text>
          </View>
          <Spacer space={SH(15)} />

          <View style={{ paddingHorizontal: ms(20) }}>
            <View style={styles.referralView}>
              <View style={{ paddingLeft: ms(10) }}>
                <Spacer space={SH(10)} />
                <Text style={styles.refferalBigText}>Get 15.00 JBR</Text>

                <Text style={styles.refferalsmallText}>
                  {strings.wallet.getJbr}
                </Text>
                <Spacer space={SH(17)} />
                <View style={styles.shareButton}>
                  <Text style={styles.shareText}>Share</Text>
                </View>
              </View>
              <Image
                source={referralCorner}
                resizeMode="cover"
                style={styles.cornerImage}
              />
            </View>
          </View>

          <Spacer space={SH(15)} />
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            // initialNumToRender={2}
            // maxToRenderPerBatch={2}
            // windowSize={1}
            removeClippedSubviews={true}
          />
          <Spacer space={SH(15)} />
          <View style={{ paddingHorizontal: ms(20), alignItems: "center" }}>
            <Text style={styles.agreementText}>{strings.wallet.agreement}</Text>
          </View>
          <Spacer space={SH(40)} />
        </ScrollView>
      </RBSheet>
    </View>
  );
}
