import { TYPES } from "@/Types/Types";

const INITIALSTATE = {
  registered: {},
  phoneData: {},
  user: {},
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
};

export const userReducer = (state = { INITIALSTATE }, { payload, type }) => {
  switch (type) {
    case TYPES.LOGIN_SUCCESS:
      return { ...state, ...payload.user };

    case TYPES.CLEAR_STORE:
      return {};

    default:
      return state;

    case TYPES.SAVE_PHONE:
      return {
        ...state,
        phoneData: payload,
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
        userProfile: payload.getuser,
      };
  }
};
