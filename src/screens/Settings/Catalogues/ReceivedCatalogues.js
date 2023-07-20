import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { styles } from "./MyCatalogue.styles";
import { ScreenWrapper, Spacer } from "@/components";
import { useSelector } from "react-redux";
import { getUser } from "@/selectors/UserSelectors";
import { Loader } from "@/components/Loader";
import { isLoadingSelector } from "@/selectors/StatusSelectors";
import { TYPES } from "@/Types/Types";
import { ViewEyeIcon, pdfFileIcon, shareIcon } from "@/assets";
import { SH, SW } from "@/theme";
import Share from "react-native-share";

export function ReceivedCatalogues() {
  const user = useSelector(getUser);
  const isLoading = useSelector((state) =>
    isLoadingSelector([TYPES.GET_CATALOG], state)
  );
  const handleShare = async (uri) => {
    try {
      const shareOptions = {
        title: "Share PDF Link",
        message: "Check out this catalogue pdf link!",
        url: uri, // Use "file://" prefix for local file paths
        type: "application/pdf", // Specify the MIME type of the file
      };
      await Share.open(shareOptions);
    } catch (error) {}
  };
  const renderFiles = ({ item }) => {
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
            <TouchableOpacity>
              <Image
                source={ViewEyeIcon}
                resizeMode="contain"
                style={styles.downloadIconStyle}
              />
            </TouchableOpacity>
            <Spacer space={SW(7)} horizontal />
            <TouchableOpacity onPress={() => handleShare(item?.link)}>
              <Image
                source={shareIcon}
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
      {isLoading && <Loader message="Loading received catalogs" />}
    </ScreenWrapper>
  );
}
