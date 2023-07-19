import { Text, View } from "react-native";
import React from "react";
import { styles } from "./MyCatalogue.styles";
import { Button, ScreenWrapper } from "@/components";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "@/selectors/UserSelectors";
import { isLoadingSelector } from "@/selectors/StatusSelectors";
import { TYPES } from "@/Types/Types";
import { Loader } from "@/components/Loader";
import { strings } from "@/localization";
import DocumentPicker from "react-native-document-picker";
import axios from "axios";
import { ApiUserInventory } from "@/Utils/APIinventory";
import { createCatalog } from "@/actions/UserActions";

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

  const uploadImage = async (image) => {
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
          content: "test",
        })
      );
    } catch (error) {}
  };

  return (
    <ScreenWrapper>
      <View style={styles.mainView}>
        {user?.getCatalogs?.length == 0 ? (
          <Text style={styles.noCatalogText}>No Catalogs found</Text>
        ) : (
          <Text>My Catalogs</Text>
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
