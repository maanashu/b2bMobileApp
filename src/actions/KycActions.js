import { KycController } from "@/controllers/KycController";
import { TYPES } from "@/Types/Types";

const personalInformationRequest = () => ({
  type: TYPES.PERSONALINFORMATION_REQUEST,
  payload: null,
});

const personalInformationSuccess = (personalInformation) => ({
  type: TYPES.PERSONALINFORMATION_SUCCESS,
  payload: { personalInformation },
});

const personalInformationError = (error) => ({
  type: TYPES.PERSONALINFORMATION_ERROR,
  payload: { error },
});

const requestKycRequest = () => ({
  type: TYPES.REQUEST_KYC_REQUEST,
  payload: null,
});

const requestKycSuccess = (kyc) => ({
  type: TYPES.REQUEST_KYC_SUCCESS,
  payload: { kyc },
});

const requestKycError = (error) => ({
  type: TYPES.REQUEST_KYC_ERROR,
  payload: { error },
});

const checkKycRequest = () => ({
  type: TYPES.CHECK_KYC_REQUEST,
  payload: null,
});

const checkKycSuccess = (checkkyc) => ({
  type: TYPES.CHECK_KYC_SUCCESS,
  payload: { checkkyc },
});

const checkKycError = (error) => ({
  type: TYPES.CHECK_KYC_ERROR,
  payload: { error },
});

const requestBusinessRequest = () => ({
  type: TYPES.REQUEST_BUSINESS_REQUEST,
  payload: null,
});

const requestBusinessSuccess = (kyc) => ({
  type: TYPES.REQUEST_BUSINESS_SUCCESS,
  payload: { kyc },
});

const requestBusinessError = (error) => ({
  type: TYPES.REQUEST_BUSINESS_ERROR,
  payload: { error },
});

const checkBusinessRequest = () => ({
  type: TYPES.CHECK_BUSINESS_REQUEST,
  payload: null,
});

const checkBusinessSuccess = (checkkyc) => ({
  type: TYPES.CHECK_BUSINESS_SUCCESS,
  payload: { checkkyc },
});

const checkBusinessError = (error) => ({
  type: TYPES.CHECK_BUSINESS_ERROR,
  payload: { error },
});

const getDocumentTypesRequest = () => ({
  type: TYPES.GET_DOCUMENT_TYPES_REQUEST,
  payload: null,
});

const getDocumentTypesError = (error) => ({
  type: TYPES.GET_DOCUMENT_TYPES_ERROR,
  payload: { error },
});

const getDocumentTypesSuccess = (docType) => ({
  type: TYPES.GET_DOCUMENT_TYPES_SUCCESS,
  payload: { docType },
});

const documentsUploadRequest = () => ({
  type: TYPES.DOCUMENTS_UPLOAD_REQUEST,
  payload: null,
});

const documentsUploadSuccess = (doc) => ({
  type: TYPES.DOCUMENTS_UPLOAD_SUCCESS,
  payload: { doc },
});

const documentsUploadError = (error) => ({
  type: TYPES.DOCUMENTS_UPLOAD_ERROR,
  payload: { error },
});

const getBusinessTypeRequest = () => ({
  type: TYPES.BUSINESS_TYPE_REQUEST,
  payload: null,
});

const getBusinessTypeError = (error) => ({
  type: TYPES.BUSINESS_TYPE_ERROR,
  payload: { error },
});

const getBusinessTypeSuccess = (type) => ({
  type: TYPES.BUSINESS_TYPE_SUCCESS,
  payload: { type },
});

const getNaicsCodeRequest = () => ({
  type: TYPES.NAICS_CODE_REQUEST,
  payload: null,
});

const getNaicsCodeError = (error) => ({
  type: TYPES.NAICS_CODE_ERROR,
  payload: { error },
});

const getNaicsCodeSuccess = (naics) => ({
  type: TYPES.NAICS_CODE_SUCCESS,
  payload: { naics },
});

const businessRegistrationRequest = () => ({
  type: TYPES.BUSINESS_REGISTRATION_REQUEST,
  payload: null,
});

const businessRegistrationError = (error) => ({
  type: TYPES.BUSINESS_REGISTRATION_ERROR,
  payload: { error },
});

const businessRegistrationSuccess = (business) => ({
  type: TYPES.BUSINESS_REGISTRATION_SUCCESS,
  payload: { business },
});

const businessDocumentUploadRequest = () => ({
  type: TYPES.BUSINESS_DOCUMENTS_UPLOAD_REQUEST,
  payload: null,
});

const businessDocumentUploadError = (error) => ({
  type: TYPES.BUSINESS_DOCUMENTS_UPLOAD_ERROR,
  payload: { error },
});

const businessDocumentUploadSuccess = (bdu) => ({
  type: TYPES.BUSINESS_DOCUMENTS_UPLOAD_SUCCESS,
  payload: { bdu },
});

const getPlaidTokenRequest = () => ({
  type: TYPES.LINK_BANK_ACCOUNT_REQUEST,
  payload: null,
});

const getPlaidTokenError = (error) => ({
  type: TYPES.GET_PLAID_TOKEN_ERROR,
  payload: { error },
});

const getPlaidTokenSuccess = (plaid) => ({
  type: TYPES.GET_PLAID_TOKEN_SUCCESS,
  payload: { plaid },
});

const linkBankAccountRequest = () => ({
  type: TYPES.LINK_BANK_ACCOUNT_REQUEST,
  payload: null,
});

const linkBankAccountError = (error) => ({
  type: TYPES.LINK_BANK_ACCOUNT_ERROR,
  payload: { error },
});

const linkBankAccountSuccess = (link) => ({
  type: TYPES.LINK_BANK_ACCOUNT_SUCCESS,
  payload: { link },
});

const getBankAccountsRequest = () => ({
  type: TYPES.GET_BANK_ACCOUNTS_REQUEST,
  payload: null,
});

const getBankAccountsError = (error) => ({
  type: TYPES.GET_BANK_ACCOUNTS_ERROR,
  payload: { error },
});

const getBankAccountsSuccess = (accnt) => ({
  type: TYPES.GET_BANK_ACCOUNTS_SUCCESS,
  payload: { accnt },
});

export const personalInformation = (data) => async (dispatch) => {
  dispatch(personalInformationRequest());
  try {
    const res = await KycController.personalInformation(data);
    return dispatch(personalInformationSuccess(res));
  } catch (error) {
    dispatch(personalInformationError(error.message));
  }
};

export const getBusinessType = () => async (dispatch) => {
  dispatch(getBusinessTypeRequest());
  try {
    const res = await KycController.getBusinessType();
    dispatch(getBusinessTypeSuccess(res?.payload));
  } catch (error) {
    dispatch(getBusinessTypeError(error.message));
  }
};

export const getNaicsCode = () => async (dispatch) => {
  dispatch(getNaicsCodeRequest());
  try {
    const res = await KycController.getNaicsCode();
    dispatch(getNaicsCodeSuccess(res?.payload));
  } catch (error) {
    dispatch(getNaicsCodeError(error.message));
  }
};

export const businessRegistration = (data) => async (dispatch) => {
  dispatch(businessRegistrationRequest());
  try {
    const res = await KycController.businessRegistration(data);
    dispatch(businessRegistrationSuccess(res));
  } catch (error) {
    dispatch(businessRegistrationError(error.message));
  }
};

export const requestBusinessKyc = () => async (dispatch) => {
  dispatch(requestBusinessRequest());
  try {
    const res = await KycController.requestBusinessKyc();
    if (res.payload === true && res.msg === "Requested for KYC") {
      dispatch(requestBusinessSuccess(res));
    }
  } catch (error) {
    dispatch(requestBusinessError(error.message));
  }
};

export const checkBusinessKyc = () => async (dispatch) => {
  dispatch(checkBusinessRequest());
  try {
    const res = await KycController.checkBusinessKyc();
    dispatch(checkBusinessSuccess(res));
  } catch (error) {
    dispatch(checkBusinessError(error.message));
  }
};

export const requestKyc = () => async (dispatch) => {
  dispatch(requestKycRequest());
  try {
    const res = await KycController.requestKyc();
    if (res.payload === true && res.msg === "Requested for KYC") {
      dispatch(requestKycSuccess(res));
    }
  } catch (error) {
    dispatch(requestKycError(error.message));
  }
};

export const checkKyc = () => async (dispatch) => {
  dispatch(checkKycRequest());
  try {
    const res = await KycController.checkKyc();
    dispatch(checkKycSuccess(res));
  } catch (error) {
    dispatch(checkKycError(error.message));
  }
};

export const getDocumentTypes = () => async (dispatch) => {
  dispatch(getDocumentTypesRequest());
  try {
    const res = await KycController.getDocumentTypes();
    dispatch(getDocumentTypesSuccess(res?.payload?.document_types));
  } catch (error) {
    dispatch(getDocumentTypesError(error.message));
  }
};

export const documentsUpload = (data, uuid) => async (dispatch) => {
  dispatch(documentsUploadRequest());
  try {
    const res = await KycController.documentsUpload(data, uuid);
    return dispatch(documentsUploadSuccess(res));
  } catch (error) {
    dispatch(documentsUploadError(error.message));
  }
};

export const businessDocumentUpload = (data, uuid) => async (dispatch) => {
  dispatch(businessDocumentUploadRequest());
  try {
    const res = await KycController.businessDocumentUpload(data, uuid);
    return dispatch(businessDocumentUploadSuccess(res));
    // console.log("businessDocumentUpload====",res)
    // if (res) {
    //   const walletres = await dispatch(getWalletUserProfile(uuid));
    //   console.log("walletres====",walletres)
    //   if (walletres?.type === 'GET_WALLET_USER_SUCCESS') {
    //     if (walletres?.payload?.getwalletuser?.type === 'business') {
    //       navigate(NAVIGATION.connectBank);
    //     }
    //   }
    // }
  } catch (error) {
    dispatch(businessDocumentUploadError(error.message));
  }
};

export const getPlaidToken = () => async (dispatch) => {
  dispatch(getPlaidTokenRequest());
  try {
    const res = await KycController.getPlaidToken();
    return dispatch(getPlaidTokenSuccess(res));
  } catch (error) {
    dispatch(getPlaidTokenError(error.message));
  }
};

export const linkBankAccount = (token) => async (dispatch) => {
  dispatch(linkBankAccountRequest());
  try {
    const res = await KycController.linkBankAccount(token);
    return dispatch(linkBankAccountSuccess(res));
  } catch (error) {
    dispatch(linkBankAccountError(error.message));
  }
};

export const getBankAccounts = (key) => async (dispatch) => {
  dispatch(getBankAccountsRequest());
  try {
    const res = await KycController.getBankAccounts();
    if (key === "bankList") {
      dispatch(getBankAccountsSuccess(res));
    } else {
      dispatch(getBankAccountsSuccess(res));
    }
  } catch (error) {
    dispatch(getBankAccountsError(error.message));
  }
};

export const getWalletUserProfile = (uuid) => async (dispatch) => {
  dispatch(getWalletUserProfileRequest());
  try {
    const res = await KycController.getWalletUserProfile(uuid);
    return dispatch(getWalletUserProfileSuccess(res.payload));
  } catch (error) {
    dispatch(getWalletUserProfileError(error.message));
  }
};
