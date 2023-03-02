import { Fonts, forward, headphones } from "@/assets";
import { strings } from "@/localization";
import { COLORS, SF, SH, SW } from "@/theme";
import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const HomeCategorySkeleton = ({}) => (
  <View
    style={{
      flex: 1,
      paddingBottom: SH(10),
    }}
  >
    <SkeletonPlaceholder borderRadius={4}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: SW(15),
          top: SH(10),
        }}
      >
        <SkeletonPlaceholder.Item width={60} height={55} borderRadius={10} />
        <SkeletonPlaceholder.Item width={60} height={55} borderRadius={10} />
        <SkeletonPlaceholder.Item width={60} height={55} borderRadius={10} />
        <SkeletonPlaceholder.Item width={60} height={55} borderRadius={10} />
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: SW(15),
          top: SH(8),
          height: 100,
        }}
      >
        <SkeletonPlaceholder.Item width={60} height={55} borderRadius={10} />
        <SkeletonPlaceholder.Item width={60} height={55} borderRadius={10} />
        <SkeletonPlaceholder.Item width={60} height={55} borderRadius={10} />
        <SkeletonPlaceholder.Item width={60} height={55} borderRadius={10} />
      </View>
    </SkeletonPlaceholder>
  </View>
);

HomeCategorySkeleton.propTypes = {};
HomeCategorySkeleton.defaultProps = {};

export default HomeCategorySkeleton;

export const HomeNewProductsSkeleton = ({}) => {
  const Data = [
    { id: 1, title: "Apparel", image: headphones },
    { id: 2, title: "Apparel", image: headphones },
    { id: 3, title: "Apparel", image: headphones },
  ];

  // const renderItem = ({ item }) => (
  //   <SkeletonPlaceholder>
  //     <View
  //       style={{
  //         borderRadius: 10,
  //         paddingVertical: SH(10),
  //         marginHorizontal: SW(20),
  //         backgroundColor: COLORS.placeholder,
  //         flex: 1,
  //         height: SH(180),
  //         paddingHorizontal: SW(10),
  //       }}
  //     >
  //       <View
  //         style={{
  //           flexDirection: "row",
  //           justifyContent: "space-between",
  //           marginHorizontal: SW(5),
  //         }}
  //       >
  //         <Text style={styles.headingText}>{strings.products.newProducts}</Text>
  //         <View>
  //           <View style={{ flexDirection: "row" }}>
  //             <TouchableOpacity>
  //               <Text style={styles.smallText}>{strings.products.seeAll} </Text>
  //             </TouchableOpacity>

  //             <Image
  //               source={forward}
  //               style={{ height: SH(15), width: SW(15), marginTop: SH(3) }}
  //             />
  //           </View>
  //         </View>
  //       </View>
  //     </View>
  //   </SkeletonPlaceholder>
  // );
  return (
    <>
      <View style={{ paddingHorizontal: SW(20), borderRadius: 20, flex: 1 }}>
        <SkeletonPlaceholder
          borderRadius={10}
          shimmerWidth={"100%"}
        ></SkeletonPlaceholder>
      </View>
    </>
  );
};
