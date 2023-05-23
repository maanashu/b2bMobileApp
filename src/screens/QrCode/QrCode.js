import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  PermissionsAndroid,
} from "react-native";
import { NameHeader, ScreenWrapper, Spacer } from "@/components";
import { strings } from "@/localization";
import { styles } from "./QrCode.styles";
import { SH } from "@/theme";
import { backArrow, shareFull } from "@/assets";
import { ButtonIcon } from "@/components/ButtonIcon";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "@/selectors/UserSelectors";
import { getWalletUserProfile } from "@/actions/UserActions";
import RNFS from "react-native-fs";
import notifee from "@notifee/react-native";
import Share from "react-native-share";

export function QrCode() {
  const dispatch = useDispatch();

  const qr = useSelector(getUser);
  const uuid = qr?.user?.payload?.uuid;
  const [imageUri, setImageUri] = useState("");
  const timestamp = Date.now();
  const downloadUrl = qr?.walletProfile?.qr_code;
  const downloadDest = `${RNFS.DownloadDirectoryPath}/B2B_${timestamp}.jpg`;
  const [inProgress, setInProgress] = useState(false);

  useEffect(() => {
    dispatch(getWalletUserProfile(uuid));
  }, []);

  useEffect(() => {
    const createChannel = async () => {
      await notifee.createChannel({
        id: "downloads",
        name: "Download Channel",
      });
    };
    createChannel();
  }, []);

  const downloadFile = async () => {
    RNFS.downloadFile({
      fromUrl: downloadUrl,
      toFile: downloadDest,
      progress: downloadFileProgress,
    })
      .promise.then((res) => {
        console.log("Image downloaded successfully!");
        console.log("File saved to: ", res);
        if (res.statusCode === 200) {
          handleNotificationPress();
        } else {
          handleFailedNotification();
        }
      })
      .catch((err) => {
        console.log("Error while downloading image.");
        console.log(err);
      });
  };
  const downloadFileProgress = (data) => {
    setInProgress(true);
    console.log("inprogress", inProgress);
    const percentage = ((100 * data.bytesWritten) / data.contentLength) | 0;
    const text = `Progress ${percentage}%`;
    console.log(text);
    if (percentage == 100) {
      console.log("completed");
      setInProgress(true);
    }
  };

  const handleNotificationPress = async () => {
    await notifee.displayNotification({
      title: "Qr code saved",
      body: "File is downloaded",
      ios: {
        sound: "default",
      },
      android: {
        channelId: "default",
        // color: "#FF0000",
        vibrationPattern: [300, 500], // add a vibration pattern
      },
    });
  };
  const handleFailedNotification = async () => {
    await notifee.displayNotification({
      title: "Download Failed",
      body: "The file download failed",
      ios: {
        sound: "default",
      },
      android: {
        channelId: "default",
        // color: "#FF0000",
        vibrationPattern: [300, 500], // add a vibration pattern
      },
    });
  };
  const handleShare = async () => {
    try {
      const shareOptions = {
        title: "Shared Image",
        message: "B2B profile qr code",
        url: imageUri,
        type: "image/jpeg", // Change this to the mime type of your image
      };
      await Share.open(shareOptions);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <ScreenWrapper style={styles.container}>
      <NameHeader title={strings.userInformation.back} back={backArrow} />
      <Spacer space={SH(1)} />

      <ScrollView style={styles.mainContainer}>
        <Spacer space={SH(100)} />

        <View style={styles.imageBackground}>
          <Image
            source={{ uri: qr?.walletProfile?.qr_code }}
            resizeMode="contain"
            style={{ height: 250, width: 250 }}
            onLoad={() => {
              setImageUri(qr?.walletProfile?.qr_code);
            }}
          />
        </View>

        <Spacer space={SH(100)} />

        <View style={styles.textView}>
          <Text style={styles.text}>{strings.qrCode.scan}</Text>
        </View>

        <Spacer space={SH(50)} />

        <ButtonIcon
          title={strings.qrCode.share}
          icon={shareFull}
          style={styles.buttonStyle}
          onPress={handleShare}
        />

        <Spacer space={SH(25)} />

        <ButtonIcon
          title={strings.qrCode.download}
          style={styles.buttonStyle}
          onPress={downloadFile}
        />
      </ScrollView>
    </ScreenWrapper>
  );
}
