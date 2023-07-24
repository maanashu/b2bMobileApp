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
import { Spacer } from "./Spacer";
const width = Dimensions.get("window").width;

const HomeCategorySkeleton = ({}) => (
  <View
    style={{
      flex: 1,
      paddingBottom: SH(10),
      top: SH(5),
      marginBottom: SH(3),
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
            height={8.5}
            marginTop={10}
            borderRadius={10}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <SkeletonPlaceholder.Item width={60} height={55} borderRadius={10} />
          <SkeletonPlaceholder.Item
            width={45}
            height={8.5}
            marginTop={10}
            borderRadius={10}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <SkeletonPlaceholder.Item width={60} height={55} borderRadius={10} />
          <SkeletonPlaceholder.Item
            width={45}
            height={8.5}
            marginTop={10}
            borderRadius={10}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <SkeletonPlaceholder.Item width={60} height={55} borderRadius={10} />
          <SkeletonPlaceholder.Item
            width={45}
            height={8.5}
            marginTop={10}
            borderRadius={10}
          />
        </View>
      </View>
      <Spacer space={SH(5)} />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: SW(15),
          top: SH(20),
          height: 100,
          marginBottom: SH(8),
        }}
      >
        <View style={{ alignItems: "center" }}>
          <SkeletonPlaceholder.Item width={60} height={55} borderRadius={10} />
          <SkeletonPlaceholder.Item
            width={45}
            height={8.5}
            marginTop={10}
            borderRadius={10}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <SkeletonPlaceholder.Item width={60} height={55} borderRadius={10} />
          <SkeletonPlaceholder.Item
            width={45}
            height={8.5}
            marginTop={10}
            borderRadius={10}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <SkeletonPlaceholder.Item width={60} height={55} borderRadius={10} />
          <SkeletonPlaceholder.Item
            width={45}
            height={8.5}
            marginTop={10}
            borderRadius={10}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <SkeletonPlaceholder.Item width={60} height={55} borderRadius={10} />
          <SkeletonPlaceholder.Item
            width={45}
            height={8.5}
            marginTop={10}
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
export const HomeBannerSkeleton = ({}) => {
  const Data = [
    { id: 1, title: "Apparel", image: headphones },
    { id: 2, title: "Apparel", image: headphones },
    { id: 3, title: "Apparel", image: headphones },
  ];

  return (
    <>
      <View
        style={{
          paddingHorizontal: SW(20),
          borderRadius: 20,
          flex: 1,
          alignItems: "center",
          marginTop: SH(4),
        }}
      >
        <SkeletonPlaceholder>
          <SkeletonPlaceholder.Item
            width={width - SW(37)}
            height={SH(181)}
            borderRadius={10}
            marginHorizontal={SW(5)}
          />
        </SkeletonPlaceholder>
      </View>
    </>
  );
};
export const RecomendedWholeSalersSkeleton = ({}) => {
  const Data = [{ id: 1, title: "Apparel", image: headphones }];

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
          width={width - SW(50)}
          height={SH(160)}
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
