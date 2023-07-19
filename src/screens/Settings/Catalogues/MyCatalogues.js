import { Text, View } from "react-native";
import React from "react";
import { styles } from "./MyCatalogue.styles";
import { Button, ScreenWrapper } from "@/components";
import { useSelector } from "react-redux";
import { getUser } from "@/selectors/UserSelectors";
import { isLoadingSelector } from "@/selectors/StatusSelectors";
import { TYPES } from "@/Types/Types";
import { Loader } from "@/components/Loader";
import { strings } from "@/localization";

export function MyCatalogue() {
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
          <Text>My Catalogs</Text>
        )}
      </View>
      {isLoading && <Loader message="Loading my catalogs" />}
      <View style={styles.buttonView}>
        <Button title={strings.buttonText.uploadCatalog} />
      </View>
    </ScreenWrapper>
  );
}
