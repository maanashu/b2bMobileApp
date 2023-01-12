import {
  Image,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import React from "react";
import { COLORS } from "@/theme/Colors";
import { SF, SH, SW } from "@/theme/ScalerDimensions";
import { StyleSheet } from "react-native";
import { ms, s, vs } from "react-native-size-matters";
import { NAVIGATION } from "@/constants";
import { goBack, navigate } from "@/navigation/NavigationRef";
import { backArrow, filter, Fonts, search, boxStar } from "@/assets";
import { strings } from "@/localization";
import { Button, Spacer } from "@/components";
import { ShadowStyles } from "@/theme";

export function Header({ title, back }) {
  return (
    <View style={styles.header}>
      <View style={styles.headerInnerView}>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
          onPress={() => goBack()}
        >
          <Image
            resizeMode="contain"
            source={back}
            style={{ height: 30, width: 30 }}
          />
          <Text style={styles.headerText}>{title}</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity>
            <Image
              resizeMode="contain"
              source={search}
              style={styles.searchIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIconView}>
            <Image
              resizeMode="contain"
              source={filter}
              style={styles.filterIcon}
            />
            <Text style={styles.filterText}>{strings.newProducts.filter}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 40,
  },

  header: {
    height: SH(50),
    backgroundColor: COLORS.white,
    ...ShadowStyles.shadow4,
    paddingHorizontal: SW(20),
    justifyContent: "center",
  },
  headerInnerView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontFamily: Fonts.SemiBold,
    color: COLORS.black,
    fontSize: s(12),
  },
  searchIcon: {
    height: vs(20),
  },
  crossIcon: {
    height: SH(35),
    width: SW(40),
  },
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  filterText: {
    fontFamily: Fonts.Regular,
    color: COLORS.white,
  },
  headerIconView: {
    height: SH(28),
    width: SW(65),
    backgroundColor: COLORS.primary,
    borderRadius: ms(20),
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: SW(7),
    justifyContent: "space-between",
  },
  filterIcon: {
    height: vs(18),
    width: ms(14),
  },
  tabButtonView: {
    borderRadius: 20,
    width: ms(65),
  },
  upperView: {
    height: vs(120),
    width: "100%",
    backgroundColor: COLORS.inputBorder,
    paddingHorizontal: ms(20),
    flexDirection: "row",
    alignItems: "center",
  },
  topBoldText: {
    fontFamily: Fonts.Bold,
    color: COLORS.primary,
    fontSize: ms(25),
    marginLeft: ms(20),
  },
});
