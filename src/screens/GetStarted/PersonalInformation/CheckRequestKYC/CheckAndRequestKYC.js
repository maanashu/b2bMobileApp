import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

import { useDispatch, useSelector } from "react-redux";

import { TYPES } from "@/Types/Types";
import { strings } from "@/localization";
import { getUser, getuser } from "@/selectors/UserSelectors";
import { Button, ScreenWrapper, Spacer } from "@/components";
import { isLoadingSelector } from "@/selectors/StatusSelectors";

import { styles } from "@/screens/GetStarted/PersonalInformation/CheckRequestKYC/styles";
import { COLORS, SH } from "@/theme";
import { refresh } from "@/assets";
import Spinner from "react-native-loading-spinner-overlay/lib";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";
import { checkKyc, requestKyc } from "@/actions/KycActions";
import { getKyc } from "@/selectors/KycSelector";

export function CheckAndRequestKYC() {
  const dispatch = useDispatch();
  const getUserData = useSelector(getUser);
  const getKycData = useSelector(getKyc);
  const kycRequest = getKycData?.requestKyc?.kyc?.payload;
  const kycStatus = getKycData?.checkKyc?.payload?.status;
  const name =
    getUserData?.user?.payload?.user_profiles?.firstname ??
    getUserData?.registerData?.firstname;
  // console.log(
  //   "kyc request" + JSON.stringify(getKycData?.requestKyc?.kyc?.payload)
  // );

  const customHeader = () => (
    <View style={styles.headerRowView}>
      <Text style={styles.requestTitleStyle}>{strings.kyc.requestTitle}</Text>
    </View>
  );

  const onPressHandler = () => dispatch(requestKyc());

  const isLoading = useSelector((state) =>
    isLoadingSelector([TYPES.REQUEST_KYC], state)
  );

  const isCheckLoading = useSelector((state) =>
    isLoadingSelector([TYPES.CHECK_KYC], state)
  );

 
  const onPressRefreshHandler = () => dispatch(checkKyc());

  const submitKyc = () => {
    navigate(NAVIGATION.ageVerification);
  };

  return (
    <ScreenWrapper>
      {customHeader()}

      <Spacer space={SH(1)} backgroundColor={COLORS.transparent} />
      <View style={styles.container}>
        <Text style={styles.verificationMsgStyle}>
          {strings?.kyc?.requestMessage}
        </Text>

        <Spacer space={SH(20)} />
        <View style={{ alignItems: "center" }}>
          <Button
            pending={isLoading}
            onPress={onPressHandler}
            style={styles.requestKycButton}
            title={strings?.kyc?.requestTitle}
          />
        </View>

        <Spacer space={SH(20)} />
        {kycRequest ? (
          <Text style={styles.verificationMsgStyle}>
            {strings?.kyc?.verificationMsg}
          </Text>
        ) : null}

        <Spacer space={SH(20)} />
        <View style={styles.reviewStatusContainer}>
          <Text style={styles.requestTitleStyle}>
            {strings?.kyc?.kycReviewStatus}
          </Text>

          {isCheckLoading ? (
            <TouchableOpacity
              onPress={onPressRefreshHandler}
              style={styles.refreshView}
            >
              <Spinner
                visible={isCheckLoading}
                color={COLORS.primary}
                size="large"
              />
              <Image source={refresh} style={styles.refreshIcon} />
              <Text style={styles.refreshText}>
                {strings?.kyc?.refreshStatus}
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={onPressRefreshHandler}
              style={styles.refreshView}
            >
              <Image source={refresh} style={styles.refreshIcon} />
              <Text style={styles.refreshText}>
                {strings?.kyc?.refreshStatus}
              </Text>
            </TouchableOpacity>
          )}
        </View>

        <Spacer space={SH(20)} />
        <View style={styles.statusViewStyle}>
          <Text style={styles.verificationMsgStyle}>{name}</Text>
          <Text style={styles.verificationMsgStyle}>
            {kycStatus !== undefined ? "Status:  " + kycStatus : "Status"}
          </Text>
        </View>

        <View style={{ flex: 1 }} />

        {kycStatus === "passed" ? (
          <Button
            onPress={submitKyc}
            title={strings?.kyc?.continue}
            style={{ zIndex: -99 }}
          />
        ) : null}
      </View>
    </ScreenWrapper>
  );
}
