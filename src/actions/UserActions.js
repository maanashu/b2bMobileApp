import { UserController } from "@/controllers";
import { getWalletBalance } from "./WalletActions";
import { storage } from "@/storage";
import DeviceInfo from "react-native-device-info";
import { getBankAccounts } from "./KycActions";
import { TYPES } from "@/Types/Types";
import { getCart, getServiceCart } from "./OrderAction";
// import { TYPES } from "@/Types/Types";

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

const setPinRequest = () => ({
  type: TYPES.SET_PIN_REQUEST,
  payload: null,
});

const setPinSuccess = (pin) => ({
  type: TYPES.SET_PIN_SUCCESS,
  payload: { pin },
});

const setPinError = (error) => ({
  type: TYPES.SET_PIN_ERROR,
  payload: { error },
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
const getSellersReset = () => ({
  type: TYPES.GET_SELLERS_RESET,
  payload: null,
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

export const getMessagesReset = () => ({
  type: TYPES.GET_MESSAGES_RESET,
  payload: null,
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

const uploadProfileImageRequest = () => ({
  type: TYPES.UPLOAD_PROFILE_IMAGE_REQUEST,
  payload: null,
});

const uploadProfileImageSuccess = (uploadProfileImage) => ({
  type: TYPES.UPLOAD_PROFILE_IMAGE_SUCCESS,
  payload: { uploadProfileImage },
});

const uploadProfileImageError = (error) => ({
  type: TYPES.UPLOAD_PROFILE_IMAGE_ERROR,
  payload: { error },
});

const editProfileRequest = () => ({
  type: TYPES.EDIT_PROFILE_REQUEST,
  payload: null,
});

const editProfileSuccess = (editProfile) => ({
  type: TYPES.EDIT_PROFILE_SUCCESS,
  payload: { editProfile },
});

const editProfileError = (error) => ({
  type: TYPES.EDIT_PROFILE_ERROR,
  payload: { error },
});

const deleteAddressRequest = () => ({
  type: TYPES.DELETE_USER_ADDRESS_REQUEST,
  payload: null,
});

const deleteAddressSuccess = (deleteAddress) => ({
  type: TYPES.DELETE_USER_ADDRESS_SUCCESS,
  payload: { deleteAddress },
});

const deleteAddressError = (error) => ({
  type: TYPES.DELETE_USER_ADDRESS_ERROR,
  payload: { error },
});

const deviceRegisterRequest = () => ({
  type: TYPES.DEVICE_REGISTER_REQUEST,
  payload: null,
});

const deviceRegisterSuccess = (deviceRegister) => ({
  type: TYPES.DEVICE_REGISTER_SUCCESS,
  payload: { deviceRegister },
});

const deviceRegisterError = (error) => ({
  type: TYPES.DEVICE_REGISTER_ERROR,
  payload: { error },
});
const getCatalogRequest = () => ({
  type: TYPES.GET_CATALOG_REQUEST,
  payload: null,
});

const getCatalogSuccess = (getCatalogs) => ({
  type: TYPES.GET_CATALOG_SUCCESS,
  payload: { getCatalogs },
});

const getCatalogError = (error) => ({
  type: TYPES.GET_CATALOG_ERROR,
  payload: { error },
});
const getCatalogReset = (error) => ({
  type: TYPES.GET_CATALOG_RESET,
  payload: { error },
});
const createCatalogRequest = () => ({
  type: TYPES.CREATE_CATALOG_REQUEST,
  payload: null,
});

const createCatalogSuccess = (crateCatalog) => ({
  type: TYPES.CREATE_CATALOG_SUCCESS,
  payload: { crateCatalog },
});

const createCatalogError = (error) => ({
  type: TYPES.CREATE_CATALOG_ERROR,
  payload: { error },
});

export const login =
  (value, countryCode, phoneNumber, screenName, token, navigation, skip) =>
  async (dispatch) => {
    dispatch(loginRequest());
    try {
      const user = await UserController.login(
        value,
        countryCode,
        phoneNumber,
        screenName,
        token,
        navigation,
        skip
      );
      dispatch(loginSuccess(user));
      dispatch(getUserProfile(user?.payload?.uuid));
      dispatch(getWalletBalance());
      dispatch(getSettings());
      dispatch(getFavouriteSellers());
      dispatch(getFavouriteProducts());
      dispatch(getBankAccounts());
      dispatch(getCart());
      dispatch(getServiceCart());
      return;
    } catch (error) {
      dispatch(loginError(error.message));
      throw error;
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
    const res = await UserController.getUserProfile(data);
    dispatch(getUserSuccess(res));
  } catch (error) {
    dispatch(getUserError(error.message));
  }
};

export const sendOtp =
  (phoneNumber, countryCode, flag, key) => async (dispatch) => {
    dispatch(sendOtpRequest());

    try {
      dispatch(savePhone({ phoneNumber, countryCode, flag }));
      const res = await UserController.sendOtp(
        phoneNumber,
        countryCode,
        flag,
        key
      );
      dispatch(sendOtpSuccess(res));
      console.log("send otp", JSON.stringify(res));
      dispatch(saveOtp(res.payload.otp));
      return res;
    } catch (error) {
      dispatch(sendOtpError(error.message));
      throw error;
    }
  };

export const verifyOtp = (id, value, navigation) => async (dispatch) => {
  dispatch(verifyOtpRequest());
  try {
    dispatch(saveOtp(value));
    const res = await UserController.verifyOtp(id, value, navigation);
    dispatch(verifyOtpSuccess(res));
    return;
  } catch (error) {
    dispatch(verifyOtpError(error));
    throw error;
  }
};

export const setPin = (data) => async (dispatch) => {
  dispatch(setPinRequest());
  try {
    const res = await UserController.setPin(data);
    dispatch(setPinSuccess(res));
    return res;
  } catch (error) {
    dispatch(setPinError(error.message));
    throw error;
  }
};
export const sendEmailOtp = (email) => async (dispatch) => {
  dispatch(emailOtpRequest());
  return UserController.sendEmailOtp(email)
    .then((res) => {
      dispatch(emailOtpSuccess(res));
      return res;
    })
    .catch((error) => {
      dispatch(emailOtpError(error));
      throw error;
    });
};

export const register = (data, token, navigation) => async (dispatch) => {
  dispatch(registerRequest());
  try {
    const res = await UserController.register(data, token, navigation);

    dispatch(registerSuccess(res));
    dispatch(registrationData(data));
    dispatch(
      updateUserSettings({
        notification_status: true,
        push_notification_status: true,
        chat_notification_status: true,
        promotion_notification_status: true,
        order_notification_status: true,
        feeds_notification_status: true,
        rqf_notification_status: true,
      })
    );
    return;
  } catch (error) {
    dispatch(registerError(error.message));
    throw error;
  }
};

export const deviceRegister = (user) => async (dispatch) => {
  dispatch(deviceRegisterRequest());
  const uniqueId = await DeviceInfo.getUniqueId();
  return UserController.deviceRegister(uniqueId)
    .then(async (res) => {
      dispatch(getUserProfile(user?.uuid));
      const biometricData = {
        uniqueId,
        uuid: user?.uuid,
        phoneNum: user?.user_profiles?.phone_no,
        is_biometric: res?.data?.payload,
      };
      await storage.setMapAsync("biometric-data", biometricData);
      dispatch(deviceRegisterSuccess());
      return res;
    })
    .catch((error) => {
      dispatch(deviceRegisterError(error.message));
      throw error;
    });
};
export const deviceLogin = (screenName) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const res = await UserController.deviceLogin(screenName);
    dispatch(loginSuccess(res));
    dispatch(getUserProfile(res?.payload?.uuid));
    dispatch(getWalletBalance());
    dispatch(getSettings());
    dispatch(getFavouriteSellers());
    dispatch(getFavouriteProducts());
    dispatch(getBankAccounts());
    dispatch(getCart());
    dispatch(getServiceCart());

    return;
  } catch (error) {
    dispatch(loginError(error.message));
    throw error;
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
  return UserController.getWalletUserProfile(uuid)
    .then((res) => {
      dispatch(getWalletUserProfileSuccess(res.payload));
      return res;
    })
    .catch((error) => {
      dispatch(getWalletUserProfileError(error.message));
    });
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
    if (error?.statusCode === 204) {
      dispatch(getSellersReset());
    } else {
      dispatch(getSellersError(error.message));
    }
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
  dispatch(updateUserSettingsRequest());
  try {
    const res = await UserController.patchSettings(data);
    dispatch(getUserSettingSuccess(res?.payload));
  } catch (error) {
    dispatch(updateUserSettingsError(error.message));
  }
};

export const sendChat = (data) => async (dispatch) => {
  dispatch(sendChatRequest());
  return UserController.sendChat(data)
    .then((res) => {
      dispatch(sendChatSuccess(res?.payload));
      return res;
    })
    .catch((error) => {
      dispatch(sendChatError(error.message));
      throw error;
    });
};

export const getMessages = (id) => async (dispatch) => {
  dispatch(getMessagesRequest());
  return await UserController.getMessages(id)
    .then((res) => {
      dispatch(getMessagesSuccess(res));
      return res;
    })
    .catch((error) => {
      if (error?.statusCode === 204) {
        dispatch(getMessagesReset());
      } else {
        dispatch(getMessagesError(error.message));
      }
      throw error;
    });
};
export const getMessageHeads = () => async (dispatch) => {
  dispatch(getMessagesHeadsRequest());
  try {
    const res = await UserController.getMessageHeads();
    dispatch(getMessagesHeadsSuccess(res));
  } catch (error) {
    dispatch(getMessagesHeadsError(error.message));
  }
};

export const deleteMessages = (id) => async (dispatch) => {
  dispatch(deleteMessagesRequest());
  try {
    const res = await UserController.deleteMessages(id);
    dispatch(deleteMessagesSuccess(res?.payload));
  } catch (error) {
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
    dispatch(getFavouriteSellers());
  } catch (error) {
    dispatch(sellerFavouritesError(error.message));
  }
};

export const productFavourites = (data) => async (dispatch) => {
  dispatch(productFavouritesRequest());
  try {
    const res = await UserController.productFavourites(data);
    dispatch(productFavouritesSuccess(res?.payload));
    dispatch(getFavouriteProducts());
    return;
  } catch (error) {
    dispatch(productFavouritesError(error.message));
    throw error;
  }
};

export const getFavouriteProducts = () => async (dispatch) => {
  dispatch(getFavouriteProductsRequest());
  try {
    const res = await UserController.getFavouriteProducts();
    dispatch(getFavouriteProductsSuccess(res?.payload));
  } catch (error) {
    if (error?.statusCode === 204) {
      dispatch(getFavouriteProductsReset());
    } else {
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
      dispatch(getFavouriteSellersError(error.message));
    }
  }
};

export const uploadProfileImage = (data) => async (dispatch) => {
  dispatch(uploadProfileImageRequest());
  return UserController.uploadProfileImage(data)
    .then((res) => {
      dispatch(uploadProfileImageSuccess(res?.payload));
      return res;
    })
    .catch((error) => {
      dispatch(uploadProfileImageError(error.message));
      throw error;
    });
};

export const editProfile = (id, data) => async (dispatch) => {
  dispatch(editProfileRequest());
  return UserController.editProfileController(id, data)
    .then((res) => {
      dispatch(editProfileSuccess(res));
      dispatch(getUserProfile(res?.payload?.user?.unique_uuid));
      return res;
    })
    .catch((error) => {
      dispatch(editProfileError(error.message));
      throw error;
    });
};

export const deleteAddress = (id) => async (dispatch) => {
  dispatch(deleteAddressRequest());
  try {
    const res = await UserController.deleteAddress(id);
    dispatch(deleteAddressSuccess());
    dispatch(getUserLocations());
  } catch (error) {
    dispatch(deleteAddressError(error.message));
  }
};
export const getCatalogs = (data) => async (dispatch) => {
  dispatch(getCatalogRequest());
  try {
    const res = await UserController.getCatalogs(data);

    dispatch(getCatalogSuccess(res));
    return;
  } catch (error) {
    if (error?.statusCode === 204) {
      dispatch(getCatalogReset());
    } else {
      dispatch(getCatalogError(error.message));
    }
    throw error;
  }
};
export const createCatalog = (data) => async (dispatch) => {
  dispatch(createCatalogRequest());
  try {
    const res = await UserController.createCatalog(data);

    dispatch(createCatalogSuccess(res));
    return;
  } catch (error) {
    dispatch(createCatalogError(error.message));
    throw error;
  }
};
