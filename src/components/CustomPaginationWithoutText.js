import React from "react";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { Pagination } from "react-native-swiper-flatlist";
import { COLORS, SH, ShadowStyles, SW, SF } from "@/theme";
import { Fonts } from "@/assets";

const styles = StyleSheet.create({
  paginationContainer: {},
  active: {
    borderRadius: 4,
    height: 8,
    width: 8,
    backgroundColor: COLORS.darkGrey2,
  },
  inactive: {
    height: SH(8),
    width: SW(8),
    alignSelf: "center",
  },
  pagination: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 4,
    top: 40,
  },
});

export const CustomPaginationWithoutText = (props) => {
  return (
    <Pagination
      {...props}
      paginationStyle={styles.paginationContainer}
      paginationStyleItem={styles.pagination}
      paginationDefaultColor="#E1E3E4"
      paginationStyleItemActive={styles.active}
      paginationStyleItemInactive={styles.inactive}
    >
      {/* <Text
        style={{ color: COLORS.white, fontSize: 9, fontFamily: Fonts.Regular }}
      >{`${props.paginationIndex + 1}/${props.size}`}</Text> */}
    </Pagination>
  );
};
