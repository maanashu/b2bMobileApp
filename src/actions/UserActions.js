import { UserController } from "@/controllers";

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

  GET_USER: "GET_USER",
  GET_USER_ERROR: "GET_USER_ERROR",
  GET_USER_SUCCESS: "GET_USER_SUCCESS",
  GET_USER_REQUEST: "GET_USER_REQUEST",

  REGISTER: "REGISTER",
  REGISTER_SUCCESS: "REGISTER_SUCCESS",
  REGISTER_ERROR: "REGISTER_ERROR",
  REGISTER_REQUEST: "REGISTER_REQUEST",

  NEAR_ME_SELLERS: "NEAR_ME_SELLERS",
  NEAR_ME_SELLERS_SUCCESS: "NEAR_ME_SELLERS_SUCCESS",
  NEAR_ME_SELLERS_ERROR: "NEAR_ME_SELLERS_ERROR",
  NEAR_ME_SELLERS_REQUEST: "NEAR_ME_SELLERS_REQUEST",
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
  payload: phone,
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
    console.log("dispatching resp--->", res);
  } catch (error) {
    dispatch(verifyOtpError(error.message));

    console.log("dispatching error--->", error);
  }
};

export const register = (data) => async (dispatch) => {
  dispatch(registerRequest());
  try {
    const res = await UserController.register(data);

    dispatch(registerSuccess(res));
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
