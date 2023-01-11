import { Image, TouchableOpacity, View } from "react-native";
import React from "react";
import { SH, SW } from "@/theme/ScalerDimensions";
import { cross } from "@/assets";
import RBSheet from "react-native-raw-bottom-sheet";
import { useRef } from "react";
export function ChatBottomSheet({ ref }) {
  const refRBSheet = useRef();
  return (
    <RBSheet
      ref={refRBSheet}
      animationType="fade"
      closeOnDragDown={false}
      closeOnPressMask={true}
      paddingVertical={SH(10)}
      customStyles={{
        wrapper: {
          // backgroundColor: "gray",
          opacity: 1,
        },
        container: {
          backgroundColor: "#ffffff",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        },
        draggableIcon: {
          backgroundColor: "#000",
        },
      }}
    >
      <View>
        <TouchableOpacity
          onPress={() => refRBSheet.current.close()}
          style={{ alignItems: "flex-end", paddingHorizontal: SW(20) }}
        >
          <Image source={cross} />
        </TouchableOpacity>
      </View>
    </RBSheet>
  );
}
