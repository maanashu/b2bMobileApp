import React, { useRef } from "react";
import RBSheet from "react-native-raw-bottom-sheet";

export const BottomSheetModal = ({ animationType, ref, height }) => {
  const refRBSheet = useRef();
  return (
    <RBSheet
      ref={ref}
      animationType="fade"
      closeOnDragDown={false}
      closeOnPressMask={false}
      height={height}
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
    ></RBSheet>
  );
};
