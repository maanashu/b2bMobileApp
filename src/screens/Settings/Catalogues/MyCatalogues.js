import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { styles } from "./MyCatalogue.styles";
import { Button, ScreenWrapper, Spacer } from "@/components";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "@/selectors/UserSelectors";
import { isLoadingSelector } from "@/selectors/StatusSelectors";
import { TYPES } from "@/Types/Types";
import { Loader } from "@/components/Loader";
import { strings } from "@/localization";
import DocumentPicker from "react-native-document-picker";
import axios from "axios";
import { ApiUserInventory } from "@/Utils/APIinventory";
import { createCatalog, getCatalogs } from "@/actions/UserActions";
import { SH, SW } from "@/theme";
import { ViewEyeIcon, downloadIcon, pdfFileIcon } from "@/assets";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";
import RNFS from "react-native-fs";
import notifee from "@notifee/react-native";

export function MyCatalogue() {
  const user = useSelector(getUser);

  const dispatch = useDispatch();
  const timestamp = Date.now();

  const isLoading = useSelector((state) =>
    isLoadingSelector([TYPES.GET_CATALOG], state)
  );

  const handleDocumentSelection = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
        presentationStyle: "fullScreen",
        allowMultiSelection: true,
      });
      uploadImage(res?.[0]);
    } catch (err) {}
  };
  const showNotification = async () => {
    try {
      const channelId = await notifee.createChannel({
        id: "download_channel",
        name: "Download Channel",
      });

      await notifee.displayNotification({
        title: "Pdf file Downloaded",
        body: "File is downloaded",
        ios: {
          sound: "default",
        },
        android: {
          channelId: channelId,
          // color: "#FF0000",
          vibrationPattern: [300, 500],
        },
      });
    } catch (error) {}
  };

  const handlePdfDownload = async (link) => {
    try {
      const downloadDest = `${RNFS.DownloadDirectoryPath}/B2B_${timestamp}.pdf`;
      const options = {
        fromUrl: link,
        toFile: downloadDest,
      };

      const res = await RNFS.downloadFile(options).promise;
      showNotification();
    } catch (error) {}
  };

  const uploadImage = async (image, uri) => {
    const formData = new FormData();
    formData.append("file", {
      uri: image.uri,
      type: image.type,
      name: image.name,
    });

    const endpoint = ApiUserInventory.uploadCatalog;

    try {
      const response = await axios.post(endpoint, formData, {
        headers: {
          Authorization: user?.user?.payload?.token,
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
          "app-name": "b2b",
        },
      });
      dispatch(
        createCatalog({
          files: response.data?.payload,
          caption: "test",
        })
      ).then(() => dispatch(getCatalogs({ filter_by: "my" })));
    } catch (error) {}
  };

  const renderFiles = ({ item, index }) => {
    return (
      <>
        <View style={styles.myCatalogBackground}>
          <View style={styles.rowView}>
            <Image
              source={pdfFileIcon}
              resizeMode="contain"
              style={styles.pdfIconStyle}
            />
            <Spacer space={SW(7)} horizontal />
            <Text style={styles.pdfNameText}>{item?.caption + ".pdf"}</Text>
          </View>
          <View style={styles.rowView}>
            <TouchableOpacity
              onPress={() =>
                navigate(NAVIGATION.pdfViewer, { pdfUrl: item?.url })
              }
            >
              <Image
                source={ViewEyeIcon}
                resizeMode="contain"
                style={styles.downloadIconStyle}
              />
            </TouchableOpacity>
            <Spacer space={SW(7)} horizontal />
            <TouchableOpacity
              handlePdfDownload
              onPress={() => handlePdfDownload(item?.url)}
            >
              <Image
                source={downloadIcon}
                resizeMode="contain"
                style={styles.downloadIconStyle}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Spacer space={SH(12)} />
      </>
    );
  };
  return (
    <ScreenWrapper>
      <View style={styles.mainView}>
        {user?.getCatalogs?.length == 0 ? (
          <Text style={styles.noCatalogText}>{"No Catalogs found"}</Text>
        ) : (
          <View>
            <FlatList
              data={user?.getCatalogs}
              extraData={user?.getCatalogs}
              renderItem={renderFiles}
            />
          </View>
        )}
      </View>

      <View style={styles.buttonView}>
        <Button
          title={strings.buttonText.uploadCatalog}
          onPress={handleDocumentSelection}
        />
      </View>
      {isLoading && <Loader message="Loading my catalogs" />}
    </ScreenWrapper>
  );
}
