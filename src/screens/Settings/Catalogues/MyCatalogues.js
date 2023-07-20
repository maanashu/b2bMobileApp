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

export function MyCatalogue() {
  const user = useSelector(getUser);

  const dispatch = useDispatch();

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

      console.log("Upload success:", response.data?.payload?.[0]?.filePath);
      dispatch(
        createCatalog({
          link: response.data?.payload?.[0]?.filePath,
          caption: "test",
        })
      ).then(() => dispatch(getCatalogs({ searchType: "my" })));
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
                navigate(NAVIGATION.pdfViewer, { pdfUrl: item?.link })
              }
            >
              <Image
                source={ViewEyeIcon}
                resizeMode="contain"
                style={styles.downloadIconStyle}
              />
            </TouchableOpacity>
            <Spacer space={SW(7)} horizontal />
            <TouchableOpacity>
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
          <Text style={styles.noCatalogText}>No Catalogs found</Text>
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
      {isLoading && <Loader message="Loading my catalogs" />}
      <View style={styles.buttonView}>
        <Button
          title={strings.buttonText.uploadCatalog}
          onPress={handleDocumentSelection}
        />
      </View>
    </ScreenWrapper>
  );
}
