import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { Fonts, Images, rightArrowBlue, whiteJobr } from "@/assets";

import SwipeButton from "rn-swipe-button";

import { COLORS, SF } from "@/theme";

export function SwiperButton(item) {
  const [textUsd, setTextUsd] = useState(true);

  const CheckoutButton = () => (
    <View style={{ justifyContent: "flex-start" }}>
      <View style={styles.rowCenter}>
        <Image source={whiteJobr} style={styles.jobrIconLogo} />
        <Text style={styles.jbrText}>{item?.item?.name}</Text>
      </View>
    </View>
  );

  const swipeButtonEndFun = () => {
    setTimeout(function () {
      setTextUsd(true);
    }, 1500);
  };

  return (
    <View style={styles.ButtonMainView}>
      <SwipeButton
        containerStyles={{ borderRadius: 60, borderWidth: 1 }}
        height={55}
        onSwipeFail={() => setTextUsd(true)}
        onSwipeStart={() => setTextUsd(false)}
        onSwipeSuccess={() => swipeButtonEndFun()}
        thumbIconComponent={CheckoutButton}
        thumbIconStyles={{ borderRadius: 60, width: 300 }}
        thumbIconWidth={130}
        title={""}
        titleStyles={{ color: COLORS.white }}
        disabledRailBackgroundColor={COLORS.black}
        disabledThumbIconBackgroundColor={COLORS.black}
        disabledThumbIconBorderColor={COLORS.black}
        railBackgroundColor={COLORS.white}
        railBorderColor={COLORS.white}
        railFillBackgroundColor={COLORS.white}
        railFillBorderColor={COLORS.white}
        thumbIconBackgroundColor={COLORS.primary}
        thumbIconBorderColor={COLORS.primary}
        shouldResetAfterSuccess={true}
      />
      {textUsd ? (
        <View style={styles.textMainView}>
          <View style={styles.textBodyView}>
            <Text style={styles.ButtonText}>{item?.item?.sub}</Text>
            <Image source={rightArrowBlue} style={styles.ButtonImage} />
          </View>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  ButtonMainView: {
    borderWidth: 1,
    borderRadius: 60,
    borderColor: COLORS.primary,
    backgroundColor: COLORS.white,
    marginVertical: 5,
  },
  textMainView: {
    position: "absolute",
    right: 10,
    top: 25,
  },
  textBodyView: {
    flexDirection: "row",
    alignItems: "center",
  },
  ButtonText: {
    color: COLORS.primary,
    fontFamily: Fonts.Bold,
    fontSize: SF(13),
  },
  ButtonImage: {
    width: 20,
    height: 20,
    tintColor: COLORS.primary,
    resizeMode: "contain",
  },
  jobrIconLogo: {
    width: 25,
    height: 25,
    resizeMode: "contain",
    marginHorizontal: moderateScale(5),
  },
  jbrText: {
    color: COLORS.white,
    fontFamily: Fonts.Bold,
    fontSize: SF(13),
  },
  rowCenter: {
    flexDirection: "row",
    alignItems: "center",
  },
});
