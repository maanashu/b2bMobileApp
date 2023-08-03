// VideoPlayer.js

import { COLORS } from "@/theme";
import React, { useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import { ms } from "react-native-size-matters";
import Video from "react-native-video";
import { Loader } from "./Loader";
import YoutubePlayer from "react-native-youtube-iframe";

const VideoPlayer = ({ uri }) => {
  const webViewRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [playing, setPlaying] = useState(false);
  const regExp = /^https:\/\/youtu.be\/([a-zA-Z0-9_-]+)$/;

  const extractVideoId = () => {
    const match = uri?.match(regExp);
    return match ? match[1] : null;
  };
  //   console.log(isLoading);
  const videoId = extractVideoId();
  //   console.log("id", videoId);

  const youtubeIFrameAPI = `
  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  }

  function onPlayerReady(event) {
    window.ReactNativeWebView.postMessage(JSON.stringify({ event: 'onReady' }));
  }

  function onPlayerStateChange(event) {
    window.ReactNativeWebView.postMessage(JSON.stringify({ event: 'onStateChange', state: event.data }));
  }
`;

  const youtubePlayerHTML = `
  <!DOCTYPE html>
  <head>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
          </head>
  <html>
    <body style="margin:0px;padding:0px;overflow:hidden">
      <script src="https://www.youtube.com/iframe_api"></script>
      <iframe
        id="player"
        width="100%"
        height="${ms(180)}"
        src="https://www.youtube.com/embed/${videoId}?controls=0&showinfo=0&modestbranding=1&rel=0"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </body>
  </html>
`;
  const handleStateChange = (state) => {
    if (state === "ended") {
      webViewRef.current?.seekTo(0); // Seek to the beginning of the video
    }
  };
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
        <View
          style={{
            height: ms(180),
            width: "100%",
            borderRadius: 10,
            overflow: "hidden",
          }}
        >
          {/* <WebView
            style={styles.videoContainer}
            javaScriptEnabled={true}
            source={{
              html: `
          <!DOCTYPE html>
          <head>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
          </head>
          <html>
            <body style="margin:0px;padding:0px;overflow:hidden;height:${ms(
              180
            )};border-radius: 10px" >
              <iframe
                style="height:${ms(
                  180
                )}; object-fit: center;border-radius: 10px"
                width="100%"
                height="${ms(180)}"
                src="https://www.youtube.com/embed/${videoId}?controls=0&showinfo=0&modestbranding=1&rel=0"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </body>
          </html>
        `,
            }}
          /> */}
          {/* <WebView
            ref={webViewRef}
            style={styles.videoContainer}
            javaScriptEnabled={true}
            injectedJavaScript={youtubeIFrameAPI}
            source={{ html: youtubePlayerHTML }}
          /> */}
          {regExp.test(uri) ? (
            <YoutubePlayer
              ref={webViewRef}
              height={"100%"}
              play={playing}
              videoId={videoId}
              initialPlayerParams={{
                controls: 0,
                modestbranding: 1,
                showinfo: 0,
                rel: 0,
                loop: 0,
              }}
              webViewStyle={{ borderRadius: 10, backgroundColor: "red" }}
              // onReady={handleOnReady}
              onChangeState={handleStateChange}
            />
          ) : (
            <Video
              source={{
                uri: uri,
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
          )}
        </View>
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
  videoContainer: {
    height: ms(180),
    backgroundColor: COLORS.inputBorder,
  },
});
export default VideoPlayer;
{
  /* <Video
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
          onError={(error) => console.log("error", error)}
        /> */
}
