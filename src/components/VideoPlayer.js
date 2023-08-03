// VideoPlayer.js

import { COLORS } from "@/theme";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { ms } from "react-native-size-matters";
import Video from "react-native-video";
import { Loader } from "./Loader";

const VideoPlayer = ({ uri }) => {
  const [isLoading, setIsLoading] = useState(false);

  console.log(isLoading);
  return (
    <>
      <View
        style={{
          width: "100%",
          alignItems: "center",
          backgroundColor: COLORS.inputBorder,
          padding: ms(10),
          borderRadius: ms(10),
        }}
      >
        <Video
          source={{
            uri: "https://apiuserservice.jobr.com/uploads/messages/media/file-19af3463-d3c9-4bf0-8ce7-49e0947d0374.mp4",
          }}
          style={{
            width: "100%",
            height: ms(180),
            borderRadius: ms(10),
          }}
          controls={true}
          paused={false}
          onLoadStart={() => setIsLoading(true)}
          onLoad={() => setIsLoading(false)}
        />
      </View>
      {isLoading && <Loader message="Loading Video..." />}
    </>
  );
};
const styles = StyleSheet.create({
  loaderStyle: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
});
export default VideoPlayer;
