import { TYPES } from "@/Types/Types";

const INITIALSTATE = {
  personalInformation: {},
  businessType: [],
  naicsCode: [],
  requestBusinessKyc: {},
  checkBusinessKyc: {},
  requestKyc: {},
  checkKyc: {},
  docType: [],
  plaidToken: {},
  linkBank: {},
  bankAccounts: [],
};

export const kycReducer = (state = { INITIALSTATE }, { payload, type }) => {
  switch (type) {
    case TYPES.PERSONALINFORMATION_SUCCESS:
      return {
        ...state,
        personalInformation: payload.personalInformation.payload,
      };
    case TYPES.BUSINESS_TYPE_SUCCESS:
      return {
        ...state,
        businessType: payload.type,
      };
    case TYPES.NAICS_CODE_SUCCESS:
      return {
        ...state,
        naicsCode: payload.naics,
      };
    case TYPES.REQUEST_BUSINESS_SUCCESS:
      return {
        ...state,
        requestBusinessKyc: payload,
      };
    case TYPES.CHECK_BUSINESS_SUCCESS:
      return {
        ...state,
        checkBusinessKyc: payload,
      };
    case TYPES.REQUEST_KYC_SUCCESS:
      return {
        ...state,
        requestKyc: payload,
      };
    case TYPES.CHECK_KYC_SUCCESS:
      return {
        ...state,
        checkKyc: payload.checkkyc,
      };
    case TYPES.GET_DOCUMENT_TYPES_SUCCESS:
      return {
        ...state,
        docType: payload.docType,
      };
    case TYPES.GET_PLAID_TOKEN_SUCCESS:
      return {
        ...state,
        plaidToken: payload.plaid.payload.link_token,
      };
    case TYPES.LINK_BANK_ACCOUNT_SUCCESS:
      return {
        ...state,
        linkBank: payload.link.payload,
      };
    case TYPES.GET_BANK_ACCOUNTS_SUCCESS:
      return {
        ...state,
        bankAccounts: payload.accnt.payload,
      };
    case TYPES.CLEAR_STORE:
      return INITIALSTATE;
    default:
      return state;
  }
};
