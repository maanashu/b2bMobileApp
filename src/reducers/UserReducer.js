import { TYPES } from "@/Types/Types";

const INITIALSTATE = {
  registered: {},
  registerData: [],
  phone: {},
  user: {},
  getuser: {},
  editProfile: [],
  personalInformation: {},
  userProfile: {},
  otp: {},
  subject: [],
  support: [],
  faq: [],
  editProfile: [],
  getWalletBalance: {},
  transactions: [],
  userDetails: [],
  card: [],
  walletProfile: {},
  requestKyc: {},
  checkKyc: {},
  nearMeSellers: [],
  settings: [],
  isStatus: false,
};

export const userReducer = (state = { INITIALSTATE }, { payload, type }) => {
  switch (type) {
    case TYPES.LOGIN_SUCCESS:
      return { ...state, user: payload.user };

    case TYPES.CLEAR_STORE:
      return {};

    default:
      return state;

    case TYPES.SAVE_PHONE:
      return {
        ...state,
        phone: payload,
      };
    case TYPES.SAVE_OTP:
      return {
        ...state,
        otp: payload,
      };
    case TYPES.REGISTER_SUCCESS:
      return {
        ...state,
        registered: payload.register.payload,
      };
    case TYPES.REGISTER_DATA:
      return {
        ...state,
        registerData: payload.registerData,
      };
    case TYPES.PERSONALINFORMATION_SUCCESS:
      return {
        ...state,
        personalInformation: payload.personalInformation.payload,
      };

    case TYPES.GET_USER_DETAILS_SUCCESS:
      return {
        ...state,
        userDetails: payload.userDetails.payload.data,
      };

    case TYPES.EDIT_PROFILE_SUCCESS:
      return {
        ...state,
        editProfile: payload.editProfile.payload.data,
      };

    case TYPES.GET_USER_SUCCESS:
      return {
        ...state,
        getuser: payload.getuser,
      };

    case TYPES.NEAR_ME_SELLERS_SUCCESS:
      return {
        ...state,
        nearMeSellers: payload?.nearMeSellers?.payload?.sellers?.data,
      };

    case TYPES.SETTINGS_SUCCESS:
      return {
        ...state,
        settings: payload?.settings?.payload,
      };

    case TYPES.BIOMETRIC_SUCCESS:
      return {
        ...state,
        isStatus: payload?.status,
      };
    case TYPES.GET_WALLET_USER_SUCCESS:
      return {
        ...state,
        walletProfile: payload.getwalletuser,
      };
  }
};
