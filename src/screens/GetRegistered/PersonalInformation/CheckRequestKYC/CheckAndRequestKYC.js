import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import { TYPES } from '@/Types/Types';
import { strings } from '@/localization';
import { checkKyc, requestKyc } from '@/actions/UserActions';
import { getuser } from '@/selectors/UserSelectors';
import { Button, ScreenWrapper, Spacer } from '@/components';
import { isLoadingSelector } from '@/selectors/StatusSelectors';

import { styles } from '@/screens/GetStarted/PersonalInformation/CheckRequestKYC/styles';
import { COLORS, SH } from '@/theme';
import { Images } from '@/assets';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import { navigate } from '@/navigation/NavigationRef';
import { NAVIGATION } from '@/constants';

export function CheckAndRequestKYC() {
  const dispatch = useDispatch();
  const getUserData = useSelector(getuser);
  const kycRequest = getUserData?.requestKyc?.kyc?.payload;
  const kycStatus = getUserData?.checkKyc?.checkkyc?.payload?.status;
  const name = getUserData?.userProfile?.firstname;
  console.log('getUserData=====', JSON.stringify(getUserData));

  const customHeader = () => (
    <View style={styles.headerRowView}>
      <Text style={styles.requestTitleStyle}>{strings.kyc.requestTitle}</Text>
    </View>
  );

  const onPressHandler = () => dispatch(requestKyc());

  const isLoading = useSelector(state =>
    isLoadingSelector([TYPES.REQUEST_KYC], state)
  );

  const isCheckLoading = useSelector(state =>
    isLoadingSelector([TYPES.CHECK_KYC], state)
  );

  const onPressRefreshHandler = () => dispatch(checkKyc());

  const submitKyc = () => {
    navigate(NAVIGATION.ageVerification);
  };

  return (
    <ScreenWrapper>
      {customHeader()}

      <Spacer space={SH(20)} backgroundColor={COLORS.transparent} />
      <View style={styles.container}>
        <Text style={styles.verificationMsgStyle}>
          {strings.kyc.requestMessage}
        </Text>

        <Spacer space={SH(20)} />
        <Button
          pending={isLoading}
          onPress={onPressHandler}
          style={styles.requestKycButton}
          title={strings.kyc.requestTitle}
        />

        <Spacer space={SH(20)} />
        {kycRequest ? (
          <Text style={styles.verificationMsgStyle}>
            {strings.kyc.verificationMsg}
          </Text>
        ) : null}

        <Spacer space={SH(20)} />
        <View style={styles.reviewStatusContainer}>
          <Text style={styles.requestTitleStyle}>
            {strings.kyc.kycReviewStatus}
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
              <Image source={Images.refresh} style={styles.refreshIcon} />
              <Text style={styles.refreshText}>
                {strings.kyc.refreshStatus}
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={onPressRefreshHandler}
              style={styles.refreshView}
            >
              <Image source={Images.refresh} style={styles.refreshIcon} />
              <Text style={styles.refreshText}>
                {strings.kyc.refreshStatus}
              </Text>
            </TouchableOpacity>
          )}
        </View>

        <Spacer space={SH(20)} />
        <View style={styles.statusViewStyle}>
          <Text style={styles.verificationMsgStyle}>{name}</Text>
          <Text style={styles.verificationMsgStyle}>
            {kycStatus !== undefined ? 'Status:  ' + kycStatus : 'Status'}
          </Text>
        </View>

        <View style={{ flex: 1 }} />

        {kycStatus === 'passed' ? (
          <Button
            onPress={submitKyc}
            title={strings.kyc.continue}
            style={{ zIndex: -99 }}
          />
        ) : null}
      </View>
    </ScreenWrapper>
  );
}
