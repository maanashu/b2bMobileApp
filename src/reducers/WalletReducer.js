import { TYPES } from "@/Types/Types";

const INITIALSTATE = {
  getWalletBalance: {},
  transactions: [],
  reqTransactions: [],
  paymentMethods: [],
  receivers: [],
  walletData: {},
  walletInfo: {},
};

export const walletReducer = (state = { INITIALSTATE }, { payload, type }) => {
  switch (type) {
    case TYPES.GET_WALLET_BALANCE_SUCCESS:
      return {
        ...state,
        getWalletBalance: payload.getWalletBalance.payload,
      };
    case TYPES.GET_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        transactions: payload.transactions.payload.data,
      };
    case TYPES.GET_REQUEST_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        reqTransactions: payload.reqtransactions.payload.data,
      };
    case TYPES.GET_PAYMENT_METHODS_SUCCESS:
      return {
        ...state,
        paymentMethods: payload.pay.payload.payment_methods,
      };
    case TYPES.GET_ALL_RECEIVERS_SUCCESS:
      return {
        ...state,
        receivers: payload.receiver,
      };
    case TYPES.CREATE_WALLET_USER_SUCCESS:
      return {
        ...state,
        walletData: payload.walletData,
      };

    default:
      return state;
  }
};
