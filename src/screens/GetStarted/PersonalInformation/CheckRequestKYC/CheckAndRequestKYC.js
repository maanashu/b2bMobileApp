import React, { useEffect } from "react";
import { View, Image, Text } from "react-native";

import { useDispatch, useSelector } from "react-redux";

import { strings } from "@/localization";
import { getUser } from "@/selectors/UserSelectors";
import { Button, ScreenWrapper, Spacer } from "@/components";

import { styles } from "@/screens/GetStarted/PersonalInformation/CheckRequestKYC/styles";
import { SH, SW } from "@/theme";
import { alarmClock } from "@/assets";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";
import { checkKyc, requestKyc } from "@/actions/KycActions";
import { getKyc } from "@/selectors/KycSelector";
import { useNavigation } from "@react-navigation/native";

export function CheckAndRequestKYC(params) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const screen = params?.route?.params?.screen;

  const getUserData = useSelector(getUser);
  const getKycData = useSelector(getKyc);
  const kycRequest = getKycData?.requestKyc?.payload;
  const kycStatus = getKycData?.checkKyc?.payload?.status;

  useEffect(() => {
    dispatch(requestKyc());
  }, []);

  useEffect(() => {
    let interval;
    if (kycStatus !== "passed") {
      interval = setInterval(() => {
        dispatch(checkKyc());
      }, 5000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [kycStatus !== "passed"]);

  useEffect(() => {
    if (kycStatus === "passed") {
      navigation.reset({
        index: 0,
        routes: [{ name: NAVIGATION.ageVerification }],
      });
    }
  }, [kycStatus]);
  // const name =
  //   getUserData?.user?.payload?.user_profiles?.firstname ??
  //   getUserData?.registerData?.firstname;
  // const businessRequest = getKycData?.requestBusinessKyc?.payload;
  // const kycBusinessStatus = getKycData?.checkBusinessKyc?.payload?.status;

  // const [requestedKyc, setRequestedKyc] = useState(false);
  // const customHeader = () => (
  //   <View style={styles.headerRowView}>
  //     <Text style={styles.requestTitleStyle}>
  //       {" "}
  //       {screen === "business" ? "Request KYB " : strings.kyc.requestTitle}
  //     </Text>
  //   </View>
  // );
  // const onPressHandler = () => {
  //   dispatch(requestKyc());
  //   setRequestedKyc(true);
  // };
  // const isLoading = useSelector((state) =>
  //   isLoadingSelector([TYPES.REQUEST_KYC], state)
  // );
  // const isCheckLoading = useSelector((state) =>
  //   isLoadingSelector([TYPES.CHECK_KYC], state)
  // );
  // const [isBusinessLoading, setIsBusinessLoading] = useState(false);
  // ``;
  // const onPressRefreshHandler = () => dispatch(checkKyc());

  // const submitKyc = () => {
  //   navigate(NAVIGATION.ageVerification, { screen: screen });
  // };
  // const onPressBusinessHandler = async () => {
  //   setIsBusinessLoading(true);
  //   const res = await dispatch(requestBusinessKyc());
  //   if (res?.type === TYPES.REQUEST_BUSINESS_SUCCESS) {
  //     setIsBusinessLoading(false);
  //   }
  //   setIsBusinessLoading(false);
  // };
  // const onPressBusinessRefreshHandler = async () => {
  //   setIsBusinessLoading(true);
  //   const res = await dispatch(checkBusinessKyc());
  //   if (res?.type === TYPES.CHECK_BUSINESS_SUCCESS) {
  //     setIsBusinessLoading(false);
  //   }
  //   setIsBusinessLoading(false);
  // };

  return (
    <ScreenWrapper>
      {/* {customHeader()}

      <Spacer space={SH(1)} backgroundColor={COLORS.transparent} />
      {screen === "business" ? (
        <View style={styles.container}>
          <Text style={styles.verificationMsgStyle}>
            {strings.kyc.requestMessage}
          </Text>

          <Spacer space={SH(20)} />
          {businessRequest ? (
            <TouchableOpacity
              disabled={true}
              style={[
                styles.requestKycButton,
                { backgroundColor: COLORS.secondary },
              ]}
            >
              <Text style={styles.textStyle}>{strings.kyc.requestKyb}</Text>
            </TouchableOpacity>
          ) : (
            <Button
              onPress={onPressBusinessHandler}
              style={styles.requestKycButton}
              title={strings.kyc.requestKyb}
            />
          )}

          <Spacer space={SH(20)} />
          {businessRequest ? (
            <Text style={styles.verificationMsgStyle}>
              {strings.kyc.verificationMsg}
            </Text>
          ) : null}

          {businessRequest ? (
            <View>
              <Spacer space={SH(20)} />
              <View style={styles.reviewStatusContainer}>
                <Text style={styles.requestTitleStyle}>
                  {strings.kyc.reviewStatus}
                </Text>

                <TouchableOpacity
                  style={styles.refreshView}
                  onPress={onPressBusinessRefreshHandler}
                >
                  <Image source={refresh} style={styles.refreshIcon} />
                  <Text style={styles.refreshText}>
                    {strings.kyc.refreshStatus}
                  </Text>
                </TouchableOpacity>
              </View>

              <Spacer space={SH(20)} />
              <View style={styles.statusViewStyle}>
                <View></View>
                <Text
                  style={[
                    styles.verificationMsgStyle,
                    { fontFamily: Fonts.SemiBold },
                  ]}
                >
                  {kycBusinessStatus !== undefined
                    ? strings.kyc.status.toUpperCase() +
                      kycBusinessStatus.toUpperCase()
                    : strings.kyc.pending.toUpperCase()}
                </Text>
              </View>
            </View>
          ) : null}

          <View style={{ flex: 1 }} />

          {kycBusinessStatus === "passed" ? (
            <Button
              onPress={submitKyc}
              style={{ zIndex: -99 }}
              title={strings.kyc.continue}
            />
          ) : (
            <TouchableOpacity
              disabled={true}
              style={styles.continueButtonStyle}
            >
              <Text style={styles.textStyle}>{strings.kyc.continue}</Text>
            </TouchableOpacity>
          )}
        </View>
      ) : (
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

          {kycRequest && (
            <>
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
            </>
          )}
          <View style={{ flex: 1 }} />

          {kycStatus === "passed" ? (
            <Button
              onPress={submitKyc}
              title={strings?.kyc?.continue}
              style={{ zIndex: -99 }}
            />
          ) : null}
        </View>
      )}
      {isBusinessLoading ? (
        <View style={[styles.loader, { backgroundColor: "rgba(0,0,0,0.3)" }]}>
          <ActivityIndicator
            size={"large"}
            color={COLORS.primary}
            style={styles.loader}
          />
        </View>
      ) : null} */}

      <View style={styles.containerStyle}>
        <Spacer space={SH(80)} />
        <Text style={styles.headingTextStyle}>{strings.kyc.heading}</Text>

        <Spacer space={SH(20)} />

        <Text style={styles.descriptionTextStyle}>
          {strings.kyc.description}
        </Text>

        <Spacer space={SH(60)} />
        <Image source={alarmClock} style={styles.verificationImageStyle} />

        <Spacer space={SH(60)} />
        <Text style={styles.messageTextStyle}>
          {strings.kyc.requestMessage}
        </Text>

        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            paddingHorizontal: SW(20),
            paddingVertical: SH(30),
          }}
        >
          <Text style={styles.notifyText}>{strings.kyc.notify}</Text>
          <Spacer space={SH(25)} />
        </View>
      </View>
    </ScreenWrapper>
  );
}
