import { UserController } from "@/controllers";
import { getWalletBalance } from "./WalletActions";
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

  PREVIOUS_SCREEN: "PREVIOUS_SCREEN",
  PREVIOUS_SCREEN_SUCCESS: "PREVIOUS_SCREEN_SUCCESS",
  PREVIOUS_SCREEN_ERROR: "PREVIOUS_SCREEN_ERROR",
  PREVIOUS_SCREEN_REQUEST: "PREVIOUS_SCREEN_REQUEST",

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

  GET_SELLERS: "GET_SELLERS",
  GET_SELLERS_REQUEST: "GET_SELLERS_REQUEST",
  GET_SELLERS_SUCCESS: "GET_SELLERS_SUCCESS",
  GET_SELLERS_ERROR: "GET_SELLERS_ERROR",

  GET_MANUFACTURERS: "GET_MANUFACTURERS",
  GET_MANUFACTURERS_REQUEST: "GET_MANUFACTURERS_REQUEST",
  GET_MANUFACTURERS_SUCCESS: "GET_MANUFACTURERS_SUCCESS",
  GET_MANUFACTURERS_ERROR: "GET_MANUFACTURERS_ERROR",

  GET_USER_PROFILE: "GET_USER_PROFILE",
  GET_USER_PROFILE_REQUEST: "GET_USER_PROFILE_REQUEST",
  GET_USER_PROFILE_SUCCESS: "GET_USER_PROFILE_SUCCESS",
  GET_USER_PROFILE_ERROR: "GET_USER_PROFILE_ERROR",

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

  GET_USER_SETTINGS: "GET_USER_SETTINGS",
  GET_USER_SETTINGS_REQUEST: "GET_USER_SETTINGS_REQUEST",
  GET_USER_SETTINGS_SUCCESS: "GET_USER_SETTINGS_SUCCESS",
  GET_USER_SETTINGS_ERROR: "GET_USER_SETTINGS_ERROR",

  UPDATE_USER_SETTINGS: "UPDATE_USER_SETTINGS",
  UPDATE_USER_SETTINGS_REQUEST: "UPDATE_USER_SETTINGS_REQUEST",
  UPDATE_USER_SETTINGS_SUCCESS: "UPDATE_USER_SETTINGS_SUCCESS",
  UPDATE_USER_SETTINGS_ERROR: "UPDATE_USER_SETTINGS_ERROR",

  SEND_CHAT: "SEND_CHAT",
  SEND_CHAT_REQUEST: "SEND_CHAT_REQUEST",
  SEND_CHAT_SUCCESS: "SEND_CHAT_SUCCESS",
  SEND_CHAT_ERROR: "SEND_CHAT_ERROR",

  GET_MESSAGES: "GET_MESSAGES",
  GET_MESSAGES_REQUEST: "GET_MESSAGES_REQUEST",
  GET_MESSAGES_SUCCESS: "GET_MESSAGES_SUCCESS",
  GET_MESSAGES_ERROR: "GET_MESSAGES_ERROR",

  GET_MESSAGES_HEADS: "GET_MESSAGES_HEADS",
  GET_MESSAGES_HEADS_REQUEST: "GET_MESSAGES_HEADS_REQUEST",
  GET_MESSAGES_HEADS_SUCCESS: "GET_MESSAGES_HEADS_SUCCESS",
  GET_MESSAGES_HEADS_ERROR: "GET_MESSAGES_HEADS_ERROR",

  DELETE_MESSAGE: "DELETE_MESSAGE",
  DELETE_MESSAGES_REQUEST: "DELETE_MESSAGES_REQUEST",
  DELETE_MESSAGES_SUCCESS: "DELETE_MESSAGES_SUCCESS",
  DELETE_MESSAGES_ERROR: "DELETE_MESSAGES_ERROR",

  GET_ONE_MANUFACTURE_DETAILS: "GET_ONE_MANUFACTURE_DETAILS",
  GET_ONE_MANUFACTURE_DETAILS_REQUEST: "GET_ONE_MANUFACTURE_DETAILS_REQUEST",
  GET_ONE_MANUFACTURE_DETAILS_SUCCESS: "GET_ONE_MANUFACTURE_DETAILS_SUCCESS",
  GET_ONE_MANUFACTURE_DETAILS_ERROR: "GET_ONE_MANUFACTURE_DETAILS_ERROR",

  SELLER_FAVOURITES: "SELLER_FAVOURITES",
  SELLER_FAVOURITES_REQUEST: "SELLER_FAVOURITES_REQUEST",
  SELLER_FAVOURITES_SUCCESS: "SELLER_FAVOURITES_SUCCESS",
  SELLER_FAVOURITES_ERROR: "SELLER_FAVOURITES_ERROR",

  PRODUCT_FAVOURITES: "PRODUCT_FAVOURITES",
  PRODUCT_FAVOURITES_REQUEST: "PRODUCT_FAVOURITES_REQUEST",
  PRODUCT_FAVOURITES_SUCCESS: "PRODUCT_FAVOURITES_SUCCESS",
  PRODUCT_FAVOURITES_ERROR: "PRODUCT_FAVOURITES_ERROR",

  GET_FAVOURITE_PRODUCTS: "GET_FAVOURITE_PRODUCTS",
  GET_FAVOURITE_PRODUCT_REQUEST: "GET_FAVOURITE_PRODUCT_REQUEST",
  GET_FAVOURITE_PRODUCTS_SUCCESS: "GET_FAVOURITE_PRODUCTS_SUCCESS",
  GET_FAVOURITE_PRODUCTS_ERROR: "GET_FAVOURITE_PRODUCTS_ERROR",
  GET_FAVOURITE_PRODUCTS_RESET: "GET_FAVOURITE_PRODUCTS_RESET",

  GET_FAVOURITE_SELLERS: "GET_FAGET_FAVOURITE_SELLERSVOURITE_SELLERS",
  GET_FAVOURITE_SELLERS_REQUEST: "GET_FAVOURITE_SELLERS_REQUEST",
  GET_FAVOURITE_SELLERS_SUCCESS: "GET_FAVOURITE_SELLERS_SUCCESS",
  GET_FAVOURITE_SELLERS_ERROR: "GET_FAVOURITE_SELLERS_ERROR",
  GET_FAVOURITE_SELLERS_RESET: "GET_FAVOURITE_SELLERS_RESET",
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

const getSellersRequest = () => ({
  type: TYPES.GET_SELLERS_REQUEST,
  payload: null,
});

const getSellersSucess = (getSellersList) => ({
  type: TYPES.GET_SELLERS_SUCCESS,
  payload: { getSellersList },
});

const getSellersError = (error) => ({
  type: TYPES.GET_SELLERS_ERROR,
  payload: { error },
});

const getManufacturersRequest = () => ({
  type: TYPES.GET_MANUFACTURERS_REQUEST,
  payload: null,
});

const getManufacturersSucess = (getManufacturersList) => ({
  type: TYPES.GET_MANUFACTURERS_SUCCESS,
  payload: { getManufacturersList },
});

const getManufacturersError = (error) => ({
  type: TYPES.GET_MANUFACTURERS_ERROR,
  payload: { error },
});

const getUserProfileRequest = () => ({
  type: TYPES.GET_USER_PROFILE_REQUEST,
  payload: null,
});

const getUserProfileSucess = (getUserProfile) => ({
  type: TYPES.GET_USER_PROFILE_SUCCESS,
  payload: { getUserProfile },
});

const getUserProfileError = (error) => ({
  type: TYPES.GET_USER_PROFILE_ERROR,
  payload: { error },
});

const updateUserSettingsRequest = () => ({
  type: TYPES.UPDATE_USER_SETTINGS_REQUEST,
  payload: null,
});

const updateUserSettingsSucess = (updateUserSettings) => ({
  type: TYPES.UPDATE_USER_SETTINGS_SUCCESS,
  payload: { updateUserSettings },
});

const updateUserSettingsError = (error) => ({
  type: TYPES.UPDATE_USER_SETTINGS_ERROR,
  payload: { error },
});

const getUserSettingRequest = () => ({
  type: TYPES.GET_USER_SETTINGS_REQUEST,
  payload: null,
});

const getUserSettingSuccess = (getUserSettings) => ({
  type: TYPES.GET_USER_SETTINGS_SUCCESS,
  payload: { getUserSettings },
});

const getUserSettingError = (error) => ({
  type: TYPES.GET_USER_SETTINGS_ERROR,
  payload: { error },
});

const sendChatRequest = () => ({
  type: TYPES.SEND_CHAT_REQUEST,
  payload: null,
});

const sendChatSuccess = (sendChat) => ({
  type: TYPES.SEND_CHAT_SUCCESS,
  payload: { sendChat },
});

const sendChatError = (error) => ({
  type: TYPES.SEND_CHAT_ERROR,
  payload: { error },
});

const getMessagesRequest = () => ({
  type: TYPES.GET_MESSAGES_REQUEST,
  payload: null,
});

const getMessagesSuccess = (getMessages) => ({
  type: TYPES.GET_MESSAGES_SUCCESS,
  payload: { getMessages },
});

const getMessagesError = (error) => ({
  type: TYPES.GET_MESSAGES_ERROR,
  payload: { error },
});

const getMessagesHeadsRequest = () => ({
  type: TYPES.GET_MESSAGES_HEADS_REQUEST,
  payload: null,
});

const getMessagesHeadsSuccess = (getMessageHeads) => ({
  type: TYPES.GET_MESSAGES_HEADS_SUCCESS,
  payload: { getMessageHeads },
});

const getMessagesHeadsError = (error) => ({
  type: TYPES.GET_MESSAGES_HEADS_ERROR,
  payload: { error },
});

const deleteMessagesRequest = () => ({
  type: TYPES.DELETE_MESSAGES_REQUEST,
  payload: null,
});

const deleteMessagesSuccess = (deleteMessages) => ({
  type: TYPES.DELETE_MESSAGES_SUCCESS,
  payload: { deleteMessages },
});

const deleteMessagesError = (error) => ({
  type: TYPES.DELETE_MESSAGES_ERROR,
  payload: { error },
});
const getOneManufactureDetailsRequest = () => ({
  type: TYPES.GET_ONE_MANUFACTURE_DETAILS_REQUEST,
  payload: null,
});

const getOneManufactureDetailsSuccess = (getOneManufactureDetails) => ({
  type: TYPES.GET_ONE_MANUFACTURE_DETAILS_SUCCESS,
  payload: { getOneManufactureDetails },
});

const getOneManufactureDetailsError = (error) => ({
  type: TYPES.GET_ONE_MANUFACTURE_DETAILS_ERROR,
  payload: { error },
});

const sellerFavouritesRequest = () => ({
  type: TYPES.SELLER_FAVOURITES_REQUEST,
  payload: null,
});

const sellerFavouritesSuccess = (sellerFavourites) => ({
  type: TYPES.SELLER_FAVOURITES_SUCCESS,
  payload: { sellerFavourites },
});

const sellerFavouritesError = (error) => ({
  type: TYPES.SELLER_FAVOURITES_ERROR,
  payload: { error },
});

const productFavouritesRequest = () => ({
  type: TYPES.PRODUCT_FAVOURITES_REQUEST,
  payload: null,
});

const productFavouritesSuccess = (productFavourites) => ({
  type: TYPES.PRODUCT_FAVOURITES_SUCCESS,
  payload: { productFavourites },
});

const productFavouritesError = (error) => ({
  type: TYPES.PRODUCT_FAVOURITES_ERROR,
  payload: { error },
});

const getFavouriteProductsRequest = () => ({
  type: TYPES.GET_FAVOURITE_PRODUCT_REQUEST,
  payload: null,
});

const getFavouriteProductsSuccess = (getFavouriteProducts) => ({
  type: TYPES.GET_FAVOURITE_PRODUCTS_SUCCESS,
  payload: { getFavouriteProducts },
});

const getFavouriteProductsError = (error) => ({
  type: TYPES.GET_FAVOURITE_PRODUCTS_ERROR,
  payload: { error },
});
const getFavouriteProductsReset = () => ({
  type: TYPES.GET_FAVOURITE_PRODUCTS_RESET,
  payload: null,
});
//
const getFavouriteSellersRequest = () => ({
  type: TYPES.GET_FAVOURITE_SELLERS_REQUEST,
  payload: null,
});

const getFavouriteSellersSuccess = (getFavouriteSellers) => ({
  type: TYPES.GET_FAVOURITE_SELLERS_SUCCESS,
  payload: { getFavouriteSellers },
});

const getFavouriteSellersError = (error) => ({
  type: TYPES.GET_FAVOURITE_SELLERS_ERROR,
  payload: { error },
});

const getFavouriteSellersReset = () => ({
  type: TYPES.GET_FAVOURITE_SELLERS_RESET,
  payload: null,
});
//
export const login =
  (value, countryCode, phoneNumber, screenName) => async (dispatch) => {
    dispatch(loginRequest());
    try {
      const user = await UserController.login(
        value,
        countryCode,
        phoneNumber,
        screenName
      );
      dispatch(loginSuccess(user));
      dispatch(getUserProfile(user?.payload?.uuid));
      dispatch(getWalletBalance());
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
  }
};
export const sendEmailOtp = (id, value) => async (dispatch) => {
  dispatch(emailOtpRequest());
  try {
    const res = await UserController.sendEmailOtp(id, value);
    dispatch(emailOtpSuccess(res));
  } catch (error) {
    dispatch(emailOtpError(error));
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
  } catch (error) {
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
    console.log("success");
    dispatch(getWalletUserProfileSuccess(res.payload));
  } catch (error) {
    dispatch(getWalletUserProfileError(error.message));
  }
};

export const addUserLocation = (data) => async (dispatch) => {
  dispatch(userLocationRequest());
  try {
    const res = await UserController.userLocation(data);
    dispatch(userLocationSuccess(res));
    dispatch(getUserLocations());
  } catch (error) {
    dispatch(userLocationError(error.message));
  }
};
export const updateUserLocation = (id, data) => async (dispatch) => {
  dispatch(updateLocationRequest());
  try {
    const res = await UserController.patchCurrentAddress(id, data);
    dispatch(updateLocationSuccess(res));
    dispatch(getUserLocations());
  } catch (error) {
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

export const getSellers = (data) => async (dispatch) => {
  dispatch(getSellersRequest());
  try {
    const res = await UserController.getSellers(data);
    dispatch(getSellersSucess(res));
  } catch (error) {
    dispatch(getSellersError(error.message));
  }
};

export const getManufacturers = (data) => async (dispatch) => {
  dispatch(getManufacturersRequest());
  try {
    const res = await UserController.getSellers(data);
    dispatch(getManufacturersSucess(res));
  } catch (error) {
    dispatch(getManufacturersError(error.message));
  }
};

export const getUserProfile = (data) => async (dispatch) => {
  dispatch(getUserProfileRequest());
  try {
    const res = await UserController.getUserProfile(data);
    dispatch(getUserProfileSucess(res));
  } catch (error) {
    dispatch(getUserProfileError(error.message));
  }
};

export const getUserSettings = (data, callback) => async (dispatch) => {
  dispatch(getUserSettingRequest());
  try {
    const res = await UserController.getUserSettings(data);
    dispatch(getUserSettingSuccess(res?.payload));
  } catch (error) {
    dispatch(getUserSettingError(error.message));
  }
};
export const updateUserSettings = (data) => async (dispatch) => {
  console.log("Data", data);
  dispatch(updateUserSettingsRequest());
  try {
    const res = await UserController.patchSettings(data);
    dispatch(getUserSettingSuccess(res?.payload));
  } catch (error) {
    dispatch(updateUserSettingsError(error.message));
  }
};

export const sendChat = (data) => async (dispatch) => {
  console.log("chchcbcch" + JSON.stringify(data));
  dispatch(sendChatRequest());
  return UserController.sendChat(data)
    .then((res) => {
      console.log("dataaaa", res);
      dispatch(sendChatSuccess(res?.payload));
      return res;
    })
    .catch((error) => {
      console.log("errorrrr", JSON.stringify(error));
      dispatch(sendChatError(error.message));
      throw error;
    });
};

export const getMessages = (id) => async (dispatch) => {
  console.log("checkId" + id);
  dispatch(getMessagesRequest());
  try {
    const res = await UserController.getMessages(id);
    dispatch(getMessagesSuccess(res?.payload));
    console.log("getting Messages", res?.payload);
  } catch (error) {
    console.log("gigd", JSON.stringify(error));
    dispatch(getMessagesError(error.message));
  }
};
export const getMessageHeads = (data) => async (dispatch) => {
  dispatch(getMessagesHeadsRequest());
  try {
    const res = await UserController.getMessageHeads(data);
    dispatch(getMessagesHeadsSuccess(res));
  } catch (error) {
    dispatch(getMessagesHeadsError(error.message));
  }
};

export const deleteMessages = (id) => async (dispatch) => {
  console.log("id", id);
  dispatch(deleteMessagesRequest());
  try {
    const res = await UserController.deleteMessages(id);
    console.log("dataaaa", res);
    dispatch(deleteMessagesSuccess(res?.payload));
  } catch (error) {
    console.error("errror", JSON.stringify(error));
    dispatch(deleteMessagesError(error.message));
  }
};

export const getOneManufactureDetails = (id) => async (dispatch) => {
  dispatch(getOneManufactureDetailsRequest());
  try {
    const res = await UserController.getOneManufactureDetails(id);
    dispatch(getOneManufactureDetailsSuccess(res?.payload));
  } catch (error) {
    dispatch(getOneManufactureDetailsError(error.message));
  }
};

export const sellerFavourites = (data) => async (dispatch) => {
  dispatch(sellerFavouritesRequest());
  try {
    const res = await UserController.sellerFavourites(data);
    dispatch(sellerFavouritesSuccess(res?.payload));
  } catch (error) {
    dispatch(sellerFavouritesError(error.message));
  }
};

export const productFavourites = (data) => async (dispatch) => {
  dispatch(productFavouritesRequest());
  try {
    const res = await UserController.productFavourites(data);
    dispatch(productFavouritesSuccess(res?.payload));
  } catch (error) {
    dispatch(productFavouritesError(error.message));
  }
};

export const getFavouriteProducts = (data) => async (dispatch) => {
  dispatch(getFavouriteProductsRequest());
  try {
    const res = await UserController.getFavouriteProducts(data);
    dispatch(getFavouriteProductsSuccess(res?.payload));
  } catch (error) {
    if (error?.statusCode === 204) {
      dispatch(getFavouriteProductsReset());
    } else {
      console.log("error still exist", JSON.stringify(error));
      dispatch(getFavouriteProductsError(error.message));
    }
  }
};

export const getFavouriteSellers = (data) => async (dispatch) => {
  dispatch(getFavouriteSellersRequest());
  try {
    const res = await UserController.getFavouriteSellers(data);
    dispatch(getFavouriteSellersSuccess(res?.payload));
  } catch (error) {
    if (error?.statusCode === 204) {
      dispatch(getFavouriteSellersReset());
    } else {
      console.log("error still exist", JSON.stringify(error));

      // dispatch(getFavouriteSellersError(error.message));
    }
  }
};
