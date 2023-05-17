import { UserController } from "@/controllers";
// import { TYPES } from "@/Types/Types";

export const TYPES = {
  CLEAR_STORE: "CLEAR_STORE",

  LOGIN: "LOGIN",
  LOGIN_REQUEST: "LOGIN_REQUEST",
  LOGIN_ERROR: "LOGIN_ERROR",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  SAVE_PHONE: "SAVE_PHONE",

  SEND_OTP: "SEND_OTP",
  SEND_OTP_REQUEST: "SEND_OTP_REQUEST",
  SEND_OTP_ERROR: "SEND_OTP_ERROR",
  SEND_OTP_SUCCESS: "SEND_OTP_SUCCESS",
  SAVE_OTP: "SAVE_OTP",

  VERIFY_OTP: "VERIFY_OTP",
  VERIFY_OTP_REQUEST: "VERIFY_OTP_REQUEST",
  VERIFY_OTP_ERROR: "VERIFY_OTP_ERROR",
  VERIFY_OTP_SUCCESS: "VERIFY_OTP_SUCCESS",

  EMAIL_VERIFY_OTP: "EMAIL_VERIFY_OTP",
  EMAIL_VERIFY_OTP_REQUEST: "EMAIL_VERIFY_OTP_REQUEST",
  EMAIL_VERIFY_OTP_ERROR: "EMAIL_VERIFY_OTP_ERROR",
  EMAIL_VERIFY_OTP_SUCCESS: "EMAIL_VERIFY_OTP_SUCCESS",

  GET_USER: "GET_USER",
  GET_USER_ERROR: "GET_USER_ERROR",
  GET_USER_SUCCESS: "GET_USER_SUCCESS",
  GET_USER_REQUEST: "GET_USER_REQUEST",

  REGISTER: "REGISTER",
  REGISTER_SUCCESS: "REGISTER_SUCCESS",
  REGISTER_ERROR: "REGISTER_ERROR",
  REGISTER_REQUEST: "REGISTER_REQUEST",

  REGISTER_DATA: "REGISTER_DATA",
  REGISTER_DATA_REQUEST: "REGISTER_DATA_REQUEST",
  REGISTER_DATA_SUCCESS: "REGISTER_DATA_SUCCESS",
  REGISTER_DATA_ERROR: "REGISTER_DATA_ERROR",

  NEAR_ME_SELLERS: "NEAR_ME_SELLERS",
  NEAR_ME_SELLERS_SUCCESS: "NEAR_ME_SELLERS_SUCCESS",
  NEAR_ME_SELLERS_ERROR: "NEAR_ME_SELLERS_ERROR",
  NEAR_ME_SELLERS_REQUEST: "NEAR_ME_SELLERS_REQUEST",

  SETTINGS: "SETTINGS",
  SETTINGS_SUCCESS: "SETTINGS_SUCCESS",
  SETTINGS_ERROR: "SETTINGS_ERROR",
  SETTINGS_REQUEST: "SETTINGS_REQUEST",

  GET_WALLET_USER: "GET_WALLET_USER",
  GET_WALLET_USER_REQUEST: "GET_WALLET_USER_REQUEST",
  GET_WALLET_USER_SUCCESS: "GET_WALLET_USER_SUCCESS",
  GET_WALLET_USER_ERROR: "GET_WALLET_USER_ERROR",

  USER_LOCATION: "USER_LOCATION",
  USER_LOCATION_REQUEST: "USER_LOCATION_REQUEST",
  USER_LOCATION_SUCCESS: "USER_LOCATION_SUCCESS",
  USER_LOCATION_ERROR: "USER_LOCATION_ERROR",

  GET_USER_LOCATION: "GET_USER_LOCATION",
  GET_USER_LOCATION_REQUEST: "GET_USER_LOCATION_REQUEST",
  GET_USER_LOCATION_SUCCESS: "GET_USER_LOCATION_SUCCESS",
  GET_USER_LOCATION_ERROR: "GET_USER_LOCATION_ERROR",

  UPDATE_USER_LOCATION: "UPDATE_USER_LOCATION",
  UPDATE_USER_LOCATION_REQUEST: "UPDATE_USER_LOCATION_REQUEST",
  UPDATE_USER_LOCATION_SUCCESS: "UPDATE_USER_LOCATION_SUCCESS",
  UPDATE_USER_LOCATION_ERROR: "UPDATE_USER_LOCATION_ERROR",

  SAVE_ADDRESS: "SAVE_ADDRESS",
  SAVE_ADDRESS_REQUEST: "SAVE_ADDRESS_REQUEST",
  SAVE_ADDRESS_SUCCESS: "SAVE_ADDRESS_SUCCESS",
  SAVE_ADDRESS_ERROR: "SAVE_ADDRESS_ERROR",

  GET_USER_DETAILS_REQUEST: "GET_USER_DETAILS_REQUEST",
  GET_USER_DETAILS_SUCCESS: "GET_USER_DETAILS_SUCCESS",
  GET_USER_DETAILS_ERROR: "GET_USER_DETAILS_ERROR",

  PERSONALINFORMATION: "PERSONALINFORMATION",
  PERSONALINFORMATION_REQUEST: "PERSONALINFORMATION_REQUEST",
  PERSONALINFORMATION_SUCCESS: "PERSONALINFORMATION_SUCCESS",
  PERSONALINFORMATION_ERROR: "PERSONALINFORMATION_ERROR",

  BIOMETRIC: "BIOMETRIC",
  BIOMETRIC_SUCCESS: "BIOMETRIC_SUCCESS",
  BIOMETRIC_ERROR: "BIOMETRIC_ERROR",
  BIOMETRIC_REQUEST: "BIOMETRIC_REQUEST",

  EDIT_PROFILE: "EDIT_PROFILE",
  EDIT_PROFILE_REQUEST: "EDIT_PROFILE_REQUEST",
  EDIT_PROFILE_SUCCESS: "EDIT_PROFILE_SUCCESS",
  EDIT_PROFILE_ERROR: "EDIT_PROFILE_ERROR",
};

const loginRequest = () => ({
  type: TYPES.LOGIN_REQUEST,
  payload: null,
});

const loginError = (error) => ({
  type: TYPES.LOGIN_ERROR,
  payload: { error },
});

const loginSuccess = (user) => ({
  type: TYPES.LOGIN_SUCCESS,
  payload: { user },
});

const clearStore = () => ({
  type: TYPES.CLEAR_STORE,
  payload: null,
});
const sendOtpRequest = () => ({
  type: TYPES.SEND_OTP_REQUEST,
  payload: null,
});

const savePhone = (phone) => ({
  type: TYPES.SAVE_PHONE,
  payload: { phone },
});

const sendOtpError = (error) => ({
  type: TYPES.SEND_OTP_ERROR,
  payload: { error },
});

const sendOtpSuccess = (otp) => ({
  type: TYPES.SEND_OTP_SUCCESS,
  payload: { otp },
});

const saveOtp = (otpCode) => ({
  type: TYPES.SAVE_OTP,
  payload: otpCode,
});

const verifyOtpRequest = () => ({
  type: TYPES.VERIFY_OTP_REQUEST,
  payload: null,
});

const verifyOtpError = (error) => ({
  type: TYPES.VERIFY_OTP_ERROR,
  payload: { error },
});

const verifyOtpSuccess = (verify) => ({
  type: TYPES.VERIFY_OTP_SUCCESS,
  payload: { verify },
});

const emailOtpRequest = () => ({
  type: TYPES.EMAIL_VERIFY_OTP_REQUEST,
  payload: null,
});

const emailOtpError = (error) => ({
  type: TYPES.EMAIL_VERIFY_OTP_ERROR,
  payload: { error },
});

const emailOtpSuccess = (verifyEmail) => ({
  type: TYPES.EMAIL_VERIFY_OTP_SUCCESS,
  payload: { verifyEmail },
});

const registerRequest = () => ({
  type: TYPES.REGISTER_REQUEST,
  payload: null,
});

const registerError = (error) => ({
  type: TYPES.REGISTER_ERROR,
  payload: { error },
});

const registerSuccess = (register) => ({
  type: TYPES.REGISTER_SUCCESS,
  payload: { register },
});
const registrationData = (registerData) => ({
  type: TYPES.REGISTER_DATA_SUCCESS,
  payload: { registerData },
});

const getUserRequest = () => ({
  type: TYPES.GET_USER_REQUEST,
  payload: null,
});

const getUserSuccess = (getuser) => ({
  type: TYPES.GET_USER_SUCCESS,
  payload: { getuser },
});

const getUserError = (error) => ({
  type: TYPES.GET_USER_ERROR,
  payload: { error },
});

const nearMeSellersRequest = () => ({
  type: TYPES.NEAR_ME_SELLERS_REQUEST,
  payload: null,
});

const nearMeSellersError = (error) => ({
  type: TYPES.NEAR_ME_SELLERS_ERROR,
  payload: { error },
});

const nearMeSellersSuccess = (nearMeSellers) => ({
  type: TYPES.NEAR_ME_SELLERS_SUCCESS,
  payload: { nearMeSellers },
});

const settingsRequest = () => ({
  type: TYPES.SETTINGS_REQUEST,
  payload: null,
});

const settingsError = (error) => ({
  type: TYPES.SETTINGS_ERROR,
  payload: { error },
});

const settingsSuccess = (settings) => ({
  type: TYPES.SETTINGS_SUCCESS,
  payload: { settings },
});

const getWalletUserProfileRequest = () => ({
  type: TYPES.GET_WALLET_USER_REQUEST,
  payload: null,
});

const getWalletUserProfileSuccess = (getwalletuser) => ({
  type: TYPES.GET_WALLET_USER_SUCCESS,
  payload: { getwalletuser },
});

const getWalletUserProfileError = (error) => ({
  type: TYPES.GET_WALLET_USER_ERROR,
  payload: { error },
});
const userLocationRequest = () => ({
  type: TYPES.USER_LOCATION_REQUEST,
  payload: null,
});

const userLocationSuccess = (userLocation) => ({
  type: TYPES.USER_LOCATION_SUCCESS,
  payload: { userLocation },
});

const userLocationError = (error) => ({
  type: TYPES.USER_LOCATION_ERROR,
  payload: { error },
});

const updateLocationRequest = () => ({
  type: TYPES.UPDATE_USER_LOCATION_REQUEST,
  payload: null,
});

const updateLocationSuccess = (updateLocation) => ({
  type: TYPES.UPDATE_USER_LOCATION_SUCCESS,
  payload: { updateLocation },
});

const updateLocationError = (error) => ({
  type: TYPES.UPDATE_USER_LOCATION_ERROR,
  payload: { error },
});

export const saveUserAddress = (savedAddress) => ({
  type: TYPES.SAVE_ADDRESS_SUCCESS,
  payload: { savedAddress },
});

const getUserLocationRequest = () => ({
  type: TYPES.GET_USER_LOCATION_REQUEST,
  payload: null,
});

const getUserLocationSucess = (getLocation) => ({
  type: TYPES.GET_USER_LOCATION_SUCCESS,
  payload: { getLocation },
});

const getUserLocationError = (error) => ({
  type: TYPES.GET_USER_LOCATION_ERROR,
  payload: { error },
});

export const login = (value, countryCode, phoneNumber) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const user = await UserController.login(value, countryCode, phoneNumber);
    dispatch(loginSuccess(user));
  } catch (error) {
    dispatch(loginError(error.message));
  }
};

export const logout = () => async (dispatch) => {
  try {
    await UserController.logout();
  } finally {
    dispatch(clearStore());
  }
};

export const getUser = (data) => async (dispatch) => {
  dispatch(getUserRequest());
  try {
    const res = await UserController.getUser(data);
    dispatch(getUserSuccess(res?.payload?.user_profiles));
  } catch (error) {
    dispatch(getUserError(error.message));
  }
};

export const sendOtp = (phoneNumber, countryCode, flag) => async (dispatch) => {
  dispatch(sendOtpRequest());

  try {
    dispatch(savePhone({ phoneNumber, countryCode, flag }));

    const res = await UserController.sendOtp(phoneNumber, countryCode, flag);
    dispatch(sendOtpSuccess(res));

    dispatch(saveOtp(res.payload.otp));
  } catch (error) {
    dispatch(sendOtpError(error.message));
  }
};

export const verifyOtp = (id, value) => async (dispatch) => {
  dispatch(verifyOtpRequest());
  try {
    dispatch(saveOtp(value));
    const res = await UserController.verifyOtp(id, value);
    dispatch(verifyOtpSuccess(res));
  } catch (error) {
    dispatch(verifyOtpError(error));

    console.log("dispatching error--->", error);
  }
};
export const sendEmailOtp = (id, value) => async (dispatch) => {
  dispatch(emailOtpRequest());
  try {
    const res = await UserController.sendEmailOtp(id, value);
    dispatch(emailOtpSuccess(res));
  } catch (error) {
    dispatch(emailOtpError(error));
    console.log("dispatching error--->", error);
  }
};

export const register = (data) => async (dispatch) => {
  dispatch(registerRequest());
  try {
    const res = await UserController.register(data);

    dispatch(registerSuccess(res));
    dispatch(registrationData(data));
    // dispatch(getUser(res?.payload?.id));
  } catch (error) {
    dispatch(registerError(error.message));
  }
};

export const deviceLogin = () => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const res = await UserController.deviceLogin();
    dispatch(loginSuccess(res));
    dispatch(getUser(res?.payload?.id));
    console.log("action success-->", res);
  } catch (error) {
    console.log("action error-->", error);
    dispatch(loginError(error.message));
  }
};

export const NearMeSellers = (data) => async (dispatch) => {
  dispatch(nearMeSellersRequest());
  try {
    const res = await UserController.getNearSellers(data);
    dispatch(nearMeSellersSuccess(res));
  } catch (error) {
    dispatch(nearMeSellersError(error.message));
  }
};

export const getSettings = () => async (dispatch) => {
  dispatch(settingsRequest());
  try {
    const res = await UserController.getSettings();
    dispatch(settingsSuccess(res));
  } catch (error) {
    dispatch(settingsError(error.message));
  }
};

export const getWalletUserProfile = (uuid) => async (dispatch) => {
  dispatch(getWalletUserProfileRequest());
  try {
    const res = await UserController.getWalletUserProfile(uuid);
    return dispatch(getWalletUserProfileSuccess(res.payload));
  } catch (error) {
    dispatch(getWalletUserProfileError(error.message));
  }
};

export const addUserLocation = (data) => async (dispatch) => {
  dispatch(userLocationRequest());
  try {
    const res = await UserController.userLocation(data);

    dispatch(userLocationSuccess(res));
  } catch (error) {
    dispatch(userLocationError(error.message));
  }
};
export const updateUserLocation = (id, data) => async (dispatch) => {
  // console.log("action body-->", data);

  dispatch(updateLocationRequest());
  try {
    const res = await UserController.patchCurrentAddress(id, data);
    dispatch(updateLocationSuccess(res));
  } catch (error) {
    console.log("action error-->", error);
    dispatch(updateLocationError(error.message));
  }
};

export const getUserLocations = () => async (dispatch) => {
  dispatch(getUserLocationRequest());
  try {
    const res = await UserController.getUserLocation();
    dispatch(getUserLocationSucess(res));
  } catch (error) {
    dispatch(getUserLocationError(error.message));
  }
};
