import React from "react";
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  Button,
  NameHeader,
  ScreenWrapper,
  Spacer,
  TextField,
} from "@/components";
import { SH, SW } from "@/theme/ScalerDimensions";
import { backArrow, calendar, marlboroPic } from "@/assets";
import { styles } from "./SendAnOffer.styles";
import { strings } from "@/localization";
import { COLORS } from "@/theme";

export function SendAnOffer() {
  const countries = ["Egypt", "Canada", "Australia", "Ireland"];
  const Details = [
    {
      id: 1,
      heading: strings.makeAnOffer.productName,
      selectedProduct: strings.STATIC.makeAnOffer.marlboroSilver,
    },
    {
      id: 2,
      heading: strings.makeAnOffer.brand,
      selectedProduct: strings.STATIC.makeAnOffer.marlboro,
    },
    {
      id: 3,
      heading: strings.makeAnOffer.subCategory,
      selectedProduct: strings.STATIC.makeAnOffer.cigarettes,
    },
    {
      id: 4,
      heading: strings.makeAnOffer.category,
      selectedProduct: strings.STATIC.makeAnOffer.tobacco,
    },
  ];

  const renderProductDetails = ({ item, index }) => (
    <View>
      <Text style={styles.maisonProductDetailHeading}>{item.heading}</Text>
      <Text style={styles.ProductDetailHeading}>{item.selectedProduct}</Text>
    </View>
  );

  return (
    <ScreenWrapper>
      <NameHeader title={strings.makeAnOffer.makeAnOffer} back={backArrow} />

      <Spacer space={SH(5)} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingHorizontal: SW(20) }}
      >
        <Spacer space={SH(20)} />

        <View style={styles.outerBorderView}>
          <Text style={styles.headingMaisonText}>
            {strings.makeAnOffer.selectedProduct}
          </Text>
          <Spacer space={SH(5)} />
          <Image
            source={marlboroPic}
            resizeMode="contain"
            style={styles.marlboroPicStyle}
          />

          <Spacer space={SH(15)} />

          <FlatList
            data={Details}
            renderItem={renderProductDetails}
            keyExtractor={(item) => item.id}
          />
        </View>

        <Spacer space={SH(30)} />

        <View style={styles.greyBackView}>
          <>
            <Text style={styles.bigHeadings}>
              {strings.sendAnOffer.offering}
            </Text>

            <Spacer space={SH(15)} />

            <Text style={styles.smallText}>
              {strings.sendAnOffer.currentPrice}
            </Text>
            <Text style={styles.priceText}>$53.79</Text>
            <Text style={styles.cartonText}>
              1<Text> {strings.sendAnOffer.carton}</Text>
            </Text>
          </>
          <Spacer space={SH(18)} />

          <View style={styles.rowView}>
            <View>
              <Text style={styles.smallText}>
                {strings.sendAnOffer.offeringPrice}
              </Text>

              <View style={styles.inputView}>
                <View style={styles.rightLine}>
                  <Text style={styles.dollarPrice}>$</Text>
                </View>
                <TextInput
                  style={styles.offerpriceInput}
                  keyboardType={"numeric"}
                />

                <Text style={styles.cartonText}>
                  1 <Text>{strings.sendAnOffer.carton}</Text>
                </Text>
              </View>
            </View>

            {/* second half */}

            <View>
              <Text style={styles.smallText}>
                {strings.sendAnOffer.minimunOrder}
              </Text>

              <View style={styles.inputView}>
                <TextInput
                  style={styles.minOrderInput}
                  keyboardType={"numeric"}
                />

                <Text style={styles.cartonText}>
                  {strings.sendAnOffer.carton} (s)
                </Text>
              </View>
            </View>
          </View>

          <Spacer space={SH(20)} />

          <View style={styles.bottomLine}></View>

          <Spacer space={SH(20)} />

          <>
            <Text style={styles.bigHeadings}>
              {strings.sendAnOffer.offering}
            </Text>

            <Spacer space={SH(15)} />

            <Text style={styles.smallText}>
              {strings.sendAnOffer.currentPrice}
            </Text>
            <Text style={styles.priceText}>$53.79</Text>
            <Text style={styles.cartonText}>
              1<Text> {strings.sendAnOffer.carton}</Text>
            </Text>
          </>
          <Spacer space={SH(18)} />

          <View style={styles.rowView}>
            <View>
              <Text style={styles.smallText}>
                {strings.sendAnOffer.offeringPrice}
              </Text>

              <View style={styles.inputView}>
                <View style={styles.rightLine}>
                  <Text style={styles.dollarPrice}>$</Text>
                </View>
                <TextInput
                  style={styles.offerpriceInput}
                  keyboardType={"numeric"}
                />

                <Text style={styles.cartonText}>
                  1 <Text>{strings.sendAnOffer.carton}</Text>
                </Text>
              </View>
            </View>

            {/* second half */}

            <View>
              <Text style={styles.smallText}>
                {strings.sendAnOffer.minimunOrder}
              </Text>

              <View style={styles.inputView}>
                <TextInput
                  style={styles.minOrderInput}
                  keyboardType={"numeric"}
                />

                <Text style={styles.cartonText}>
                  {strings.sendAnOffer.carton} (s)
                </Text>
              </View>
            </View>
          </View>

          <Spacer space={SH(20)} />

          <Text style={styles.semiHeader}>
            {strings.sendAnOffer.offerValidity}
          </Text>

          <View style={styles.dateFieldView}>
            <TextField
              style={styles.dateField}
              placeholder={strings.sendAnOffer.datePlaceholder}
              textStyle={{ paddingHorizontal: 20 }}
              keyboardType={"numeric"}
            />
            <TouchableOpacity>
              <Image source={calendar} style={styles.calendarIcon} />
            </TouchableOpacity>
          </View>
        </View>

        <Spacer space={SH(20)} />

        <Button title={strings.buttonText.send} style={styles.buttonStyle} />

        <Spacer space={SH(20)} />
      </ScrollView>
    </ScreenWrapper>
  );
}
