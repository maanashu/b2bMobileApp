import { Fonts, forward, headphones } from "@/assets";
import { strings } from "@/localization";
import { COLORS, SF, SH, SW } from "@/theme";
import React from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const HomeCategorySkeleton = ({}) => (
  <View
    style={{
      flex: 1,
      paddingBottom: SH(10),
      top: SH(5),
    }}
  >
    <SkeletonPlaceholder borderRadius={4}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: SW(15),
          top: SH(5),
        }}
      >
        <View style={{ alignItems: "center" }}>
          <SkeletonPlaceholder.Item width={60} height={55} borderRadius={10} />
          <SkeletonPlaceholder.Item
            width={45}
            height={8}
            marginTop={5}
            borderRadius={10}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <SkeletonPlaceholder.Item width={60} height={55} borderRadius={10} />
          <SkeletonPlaceholder.Item
            width={45}
            height={8}
            marginTop={5}
            borderRadius={10}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <SkeletonPlaceholder.Item width={60} height={55} borderRadius={10} />
          <SkeletonPlaceholder.Item
            width={45}
            height={8}
            marginTop={5}
            borderRadius={10}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <SkeletonPlaceholder.Item width={60} height={55} borderRadius={10} />
          <SkeletonPlaceholder.Item
            width={45}
            height={8}
            marginTop={5}
            borderRadius={10}
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: SW(15),
          top: SH(10),
          height: 100,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <SkeletonPlaceholder.Item width={60} height={55} borderRadius={10} />
          <SkeletonPlaceholder.Item
            width={45}
            height={8}
            marginTop={5}
            borderRadius={10}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <SkeletonPlaceholder.Item width={60} height={55} borderRadius={10} />
          <SkeletonPlaceholder.Item
            width={45}
            height={8}
            marginTop={5}
            borderRadius={10}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <SkeletonPlaceholder.Item width={60} height={55} borderRadius={10} />
          <SkeletonPlaceholder.Item
            width={45}
            height={8}
            marginTop={5}
            borderRadius={10}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <SkeletonPlaceholder.Item width={60} height={55} borderRadius={10} />
          <SkeletonPlaceholder.Item
            width={45}
            height={8}
            marginTop={5}
            borderRadius={10}
          />
        </View>
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

  const renderItem = ({ item }) => (
    <SkeletonPlaceholder>
      <View
        style={{
          alignItems: "center",
          flex: 1,
          marginTop: SH(20),
        }}
      >
        <SkeletonPlaceholder.Item
          width={100}
          height={100}
          borderRadius={10}
          marginHorizontal={SW(5)}
        />
      </View>
    </SkeletonPlaceholder>
  );
  return (
    <>
      <View
        style={{
          paddingHorizontal: SW(20),
          borderRadius: 20,
          flex: 1,
          alignItems: "center",
        }}
      >
        <FlatList data={Data} renderItem={renderItem} numColumns={3} />
      </View>
    </>
  );
};
