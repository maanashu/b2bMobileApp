// VideoPlayer.js

import React from "react";
import { View } from "react-native";
import Video from "react-native-video";

const VideoPlayer = ({ uri }) => {
  //   console.log(uri);
  return (
    <View
      style={{
        width: 300,
        height: 200,
      }}
    >
      <Video
        // source={require("../assets/videos/duji_video.mp4")}
        source={{
          uri: "https://apiuserservice.jobr.com/uploads/messages/media/file-19af3463-d3c9-4bf0-8ce7-49e0947d0374.mp4",
        }}
        style={{
          width: 300,
          height: 200,
        }}
        // controls={true}

        paused={false}
      />
    </View>
  );
};

export default VideoPlayer;
