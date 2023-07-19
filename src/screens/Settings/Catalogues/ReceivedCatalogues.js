import { Text, View } from "react-native";
import React from "react";
import { styles } from "./MyCatalogue.styles";
import { ScreenWrapper } from "@/components";
import { useSelector } from "react-redux";
import { getUser } from "@/selectors/UserSelectors";
import { Loader } from "@/components/Loader";
import { isLoadingSelector } from "@/selectors/StatusSelectors";
import { TYPES } from "@/Types/Types";

export function ReceivedCatalogues() {
  const user = useSelector(getUser);
  const isLoading = useSelector((state) =>
    isLoadingSelector([TYPES.GET_CATALOG], state)
  );
  return (
    <ScreenWrapper>
      <View style={styles.mainView}>
        {user?.getCatalogs?.length == 0 ? (
          <Text style={styles.noCatalogText}>No Catalogs found</Text>
        ) : (
          <Text>Received Catalogs</Text>
        )}
      </View>
      {isLoading && <Loader message="Loading received catalogs" />}
    </ScreenWrapper>
  );
}
