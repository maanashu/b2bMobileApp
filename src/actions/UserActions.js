import { UserController } from "@/controllers";

export const TYPES = {
  CLEAR_STORE: "CLEAR_STORE",
  LOGIN: "LOGIN",
  LOGIN_REQUEST: "LOGIN_REQUEST",
  LOGIN_ERROR: "LOGIN_ERROR",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  SEND_OTP_REQUEST: "SEND_OTP_REQUEST",
  SAVE_PHONE: "SAVE_PHONE",
  SEND_OTP_ERROR: "SEND_OTP_ERROR",
  SEND_OTP_SUCCESS: "SEND_OTP_SUCCESS",
  SAVE_OTP: "SAVE_OTP",
  VERIFY_OTP_REQUEST: "VERIFY_OTP_REQUEST",
  VERIFY_OTP_ERROR: "VERIFY_OTP_ERROR",
  VERIFY_OTP_SUCCESS: "VERIFY_OTP_SUCCESS",
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

export const login = (username, password) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const user = await UserController.login(username, password);
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

export const sendOtp = (phoneNumber, countryCode) => async (dispatch) => {
  dispatch(sendOtpRequest());

  try {
    dispatch(savePhone({ phoneNumber, countryCode }));
    const res = await UserController.sendOtp(phoneNumber, countryCode);
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
    console.log("checking responce of id and value", res);
  } catch (error) {
    dispatch(verifyOtpError(error.message));
  }
};

export const register = (data) => async (dispatch) => {
  dispatch(registerRequest());
  try {
    const res = await UserController.register(data);
    dispatch(registerSuccess(res));
    dispatch(getUser(res?.payload?.id));
  } catch (error) {
    dispatch(registerError(error.message));
  }
};
