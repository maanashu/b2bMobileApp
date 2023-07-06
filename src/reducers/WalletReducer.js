import { TYPES } from "@/Types/Types";

const INITIALSTATE = {
  getWalletBalance: {},
  transactions: [],
  reqTransactions: [],
  paymentMethods: [],
  receivers: [],
  walletData: {},
  walletInfo: {},
  balance: {},
  redeem: {},
  bankBalance: {},
};

export const walletReducer = (state = { INITIALSTATE }, { payload, type }) => {
  switch (type) {
    case TYPES.CLEAR_WALLET_STORE:
      return INITIALSTATE;

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
    case TYPES.GET_TRANSACTIONS_RESET:
      return {
        ...state,
        transactions: [],
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
    case TYPES.ADD_BALANCE_SUCCESS:
      return {
        ...state,
        balance: payload.balance,
      };
    case TYPES.REDEEM_MONEY_SUCCESS:
      return {
        ...state,
        redeem: payload.redeem,
      };
    case TYPES.CHECK_BALANCE_SUCCESS:
      return {
        ...state,
        bankBalance: payload.bankBalance,
      };

    default:
      return state;
  }
};
