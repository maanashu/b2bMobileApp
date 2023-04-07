import React, { useEffect, useState } from "react";
import { Text, View, Image, ScrollView } from "react-native";
import { NameHeader, ScreenWrapper, Spacer } from "@/components";
import { strings } from "@/localization";
import { styles } from "./QrCode.styles";
import { SH } from "@/theme";
import { backArrow, bigQr, shareFull, download } from "@/assets";
import { ButtonIcon } from "@/components/ButtonIcon";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "@/selectors/UserSelectors";
import { getWalletUserProfile } from "@/actions/UserActions";
import RNFS from "react-native-fs";

export function QrCode() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWalletUserProfile());
  }, []);

  const qr = useSelector(getUser);
  // console.log("qr===>", qr?.walletProfile);

  const [downloadProgress, setDownloadProgress] = useState(0);
  const image = qr?.walletProfile?.qr_code;
  const fileName = "image.png";
  const downloadDest = `${RNFS.DocumentDirectoryPath}/${fileName}`;

  // const handleDownloadPress = async () => {
  //   try {
  //     const options = {
  //       fromUrl: image,
  //       toFile: downloadDest,
  //       background: true,
  //       begin: (res) => {
  //         console.log("Download has begun");
  //       },
  //       progress: (res) => {
  //         const progress = Math.floor(
  //           (res.bytesWritten / res.contentLength) * 100
  //         );
  //         console.log("Download progress", progress);
  //         setDownloadProgress(progress);
  //       },
  //     };
  //     const result = await RNFS.downloadFile(options).promise;
  //     console.log("Download complete", result);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  const downloadFile = () => {
    const timestamp = Date.now();
    const downloadDest = `${RNFS.DownloadDirectoryPath}/B2B_${timestamp}.jpg`;
    // const downloadDest = `${RNFS.DownloadDirectoryPath}/${
    //   (Math.random() * 1000) | 0
    // }.jpg`;
    const downloadUrl = qr?.walletProfile?.qr_code;

    RNFS.downloadFile({
      fromUrl: downloadUrl,
      toFile: downloadDest,
    })
      .promise.then((res) => {
        console.log("Image downloaded successfully!");
        console.log("File saved to: ", res);
      })
      .catch((err) => {
        console.log("Error while downloading image.");
        console.log(err);
      });
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
        />

        <Spacer space={SH(25)} />

        <ButtonIcon
          title={strings.qrCode.download}
          style={styles.buttonStyle}
          icon={download}
          onPress={downloadFile}
        />
      </ScrollView>
    </ScreenWrapper>
  );
}
