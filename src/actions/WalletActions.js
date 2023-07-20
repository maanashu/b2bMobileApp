import { WalletController } from "@/controllers/WalletController";
import { TYPES } from "@/Types/Types";

const addWalletBalanceApiRequest = () => ({
  type: TYPES.ADD_BALANCE_REQUEST,
  payload: null,
});

const addWalletBalanceApiError = (error) => ({
  type: TYPES.ADD_BALANCE_ERROR,
  payload: { error },
});

const addWalletBalanceApiSuccess = (balance) => ({
  type: TYPES.ADD_BALANCE_SUCCESS,
  payload: { balance },
});

const getPaymentMethodsRequest = () => ({
  type: TYPES.GET_PAYMENT_METHODS_REQUEST,
  payload: null,
});

const getPaymentMethodsError = (error) => ({
  type: TYPES.GET_PAYMENT_METHODS_ERROR,
  payload: { error },
});

const getPaymentMethodsSuccess = (pay) => ({
  type: TYPES.GET_PAYMENT_METHODS_SUCCESS,
  payload: { pay },
});

const checkBankBalanceRequest = () => ({
  type: TYPES.CHECK_BALANCE_REQUEST,
  payload: null,
});

const checkBankBalanceError = (error) => ({
  type: TYPES.CHECK_BALANCE_ERROR,
  payload: { error },
});

const checkBankBalanceSuccess = (bankBalance) => ({
  type: TYPES.CHECK_BALANCE_SUCCESS,
  payload: { bankBalance },
});

const redeemMoneyRequest = () => ({
  type: TYPES.REDEEM_MONEY_REQUEST,
  payload: null,
});

const redeemMoneyError = (error) => ({
  type: TYPES.REDEEM_MONEY_ERROR,
  payload: { error },
});

const redeemMoneySuccess = (redeem) => ({
  type: TYPES.REDEEM_MONEY_SUCCESS,
  payload: { redeem },
});

const getWalletBalanceRequest = () => ({
  type: TYPES.GET_WALLET_BALANCE_REQUEST,
  payload: null,
});

const getWalletBalanceError = (error) => ({
  type: TYPES.GET_WALLET_BALANCE_ERROR,
  payload: { error },
});

const getWalletBalanceSuccess = (getWalletBalance) => ({
  type: TYPES.GET_WALLET_BALANCE_SUCCESS,
  payload: { getWalletBalance },
});

const getTransactionsRequest = () => ({
  type: TYPES.GET_TRANSACTIONS_REQUEST,
  payload: null,
});

const getTransactionsSuccess = (transactions) => ({
  type: TYPES.GET_TRANSACTIONS_SUCCESS,
  payload: { transactions },
});

const getTransactionsError = (error) => ({
  type: TYPES.GET_TRANSACTIONS_ERROR,
  payload: { error },
});
export const getTransactionsReset = () => ({
  type: TYPES.GET_TRANSACTIONS_RESET,
  payload: null,
});

const getRequestTransactionsRequest = () => ({
  type: TYPES.GET_REQUEST_TRANSACTIONS_REQUEST,
  payload: null,
});

const getRequestTransactionsSuccess = (reqtransactions) => ({
  type: TYPES.GET_REQUEST_TRANSACTIONS_SUCCESS,
  payload: { reqtransactions },
});

const getRequestTransactionsError = (error) => ({
  type: TYPES.GET_REQUEST_TRANSACTIONS_ERROR,
  payload: { error },
});

const getAllReceiversRequest = () => ({
  type: TYPES.GET_ALL_RECEIVERS_REQUEST,
  payload: null,
});

const getAllReceiversSuccess = (receiver) => ({
  type: TYPES.GET_ALL_RECEIVERS_SUCCESS,
  payload: { receiver },
});

const getAllReceiversError = (error) => ({
  type: TYPES.GET_ALL_RECEIVERS_ERROR,
  payload: { error },
});

const transferMoneyRequest = () => ({
  type: TYPES.TRANSFER_MONEY_REQUEST,
  payload: null,
});

const transferMoneySuccess = (transfer) => ({
  type: TYPES.TRANSFER_MONEY_SUCCESS,
  payload: { transfer },
});

const transferMoneyError = (error) => ({
  type: TYPES.TRANSFER_MONEY_ERROR,
  payload: { error },
});

const requestMoneyRequest = () => ({
  type: TYPES.REQUEST_MONEY_REQUEST,
  payload: null,
});

const requestMoneySuccess = (req) => ({
  type: TYPES.REQUEST_MONEY_SUCCESS,
  payload: { req },
});

const requestMoneyError = (error) => ({
  type: TYPES.REQUEST_MONEY_ERROR,
  payload: { error },
});

const removeBankAccountRequest = () => ({
  type: TYPES.REMOVE_BANK_ACCOUNT_REQUEST,
  payload: null,
});

const removeBankAccountSuccess = (remove) => ({
  type: TYPES.REMOVE_BANK_ACCOUNT_SUCCESS,
  payload: { remove },
});

const removeBankAccountError = (error) => ({
  type: TYPES.REMOVE_BANK_ACCOUNT_ERROR,
  payload: { error },
});

const acceptMoneyRequest = () => ({
  type: TYPES.ACCEPT_MONEY_REQUEST,
  payload: null,
});

const acceptMoneySuccess = (accept) => ({
  type: TYPES.ACCEPT_MONEY_SUCCESS,
  payload: { accept },
});

const acceptMoneyError = (error) => ({
  type: TYPES.ACCEPT_MONEY_ERROR,
  payload: { error },
});

const rejectMoneyRequest = () => ({
  type: TYPES.REJECT_MONEY_REQUEST,
  payload: null,
});

const rejectMoneySuccess = (reject) => ({
  type: TYPES.REJECT_MONEY_SUCCESS,
  payload: { reject },
});

const rejectMoneyError = (error) => ({
  type: TYPES.REJECT_MONEY_ERROR,
  payload: { error },
});

const createWalletRequest = () => ({
  type: TYPES.CREATE_WALLET_USER_REQUEST,
  payload: null,
});

const createWalletSuccess = (walletData) => ({
  type: TYPES.CREATE_WALLET_USER_SUCCESS,
  payload: { walletData },
});

const createWalletError = (error) => ({
  type: TYPES.CREATE_WALLET_USER_ERROR,
  payload: { error },
});
const clearWalletStore = () => ({
  type: TYPES.CLEAR_WALLET_STORE,
  payload: null,
});

export const logoutWallet = () => async (dispatch) => {
  try {
    await WalletController.logoutWallet();
  } finally {
    dispatch(clearWalletStore());
  }
};

export const addWalletBalanceApi = (amount, account) => async (dispatch) => {
  dispatch(addWalletBalanceApiRequest());
  try {
    const res = await WalletController.addWalletBalanceApi(amount, account);

    dispatch(getWalletBalance());
    dispatch(getTransactions());
    return dispatch(addWalletBalanceApiSuccess(res));
  } catch (error) {
    dispatch(addWalletBalanceApiError(error.message));
  }
};

export const getPaymentMethods = () => async (dispatch) => {
  dispatch(getPaymentMethodsRequest());
  try {
    const res = await WalletController.getPaymentMethods();
    dispatch(getPaymentMethodsSuccess(res));
  } catch (error) {
    dispatch(getPaymentMethodsError(error.message));
  }
};

export const checkBankBalance = (data) => async (dispatch) => {
  dispatch(checkBankBalanceRequest());
  try {
    const res = await WalletController.checkBankBalance(data);
    return dispatch(checkBankBalanceSuccess(res?.payload));
  } catch (error) {
    dispatch(checkBankBalanceError(error.message));
  }
};

export const redeemMoney = (amount, account) => async (dispatch) => {
  dispatch(redeemMoneyRequest());
  try {
    const res = await WalletController.redeemMoney(amount, account);
    dispatch(getWalletBalance());
    dispatch(getTransactions());
    return dispatch(redeemMoneySuccess(res));
  } catch (error) {
    dispatch(redeemMoneyError(error.message));
  }
};

export const getWalletBalance = () => async (dispatch) => {
  dispatch(getWalletBalanceRequest());
  try {
    const res = await WalletController.getWalletBalance();
    dispatch(getWalletBalanceSuccess(res));
    dispatch(getTransactions());
    dispatch(getRequestTransactions());
  } catch (error) {
    dispatch(getWalletBalanceError(error.message));
  }
};

export const getTransactions = (data) => async (dispatch) => {
  dispatch(getTransactionsRequest());
  try {
    const res = await WalletController.getTransactions(data);
    dispatch(getTransactionsSuccess(res));
  } catch (error) {
    if (error?.payload?.status_code === 404 || error?.statusCode === 204) {
      dispatch(getTransactionsReset());
    } else {
      dispatch(getTransactionsError(error.message));
    }
  }
};

export const getRequestTransactions = () => async (dispatch) => {
  dispatch(getRequestTransactionsRequest());
  try {
    const res = await WalletController.getRequestTransactions();
    dispatch(getRequestTransactionsSuccess(res));
  } catch (error) {
    dispatch(getRequestTransactionsError(error.message));
  }
};

export const getAllReceivers = () => async (dispatch) => {
  dispatch(getAllReceiversRequest());
  try {
    const res = await WalletController.getAllReceivers();
    dispatch(getAllReceiversSuccess(res?.payload?.data));
  } catch (error) {
    dispatch(getAllReceiversError(error.message));
  }
};

export const transferMoney = (data) => async (dispatch) => {
  dispatch(transferMoneyRequest());
  try {
    const res = await WalletController.transferMoney(data);
    dispatch(getWalletBalance());
    dispatch(getAllReceivers());
    dispatch(getTransactions());
    dispatch(getRequestTransactions());
    return dispatch(transferMoneySuccess(res));
  } catch (error) {
    dispatch(transferMoneyError(error.message));
  }
};

export const requestMoney = (data) => async (dispatch) => {
  dispatch(requestMoneyRequest());
  try {
    const res = await WalletController.requestMoney(data);
    dispatch(getWalletBalance());
    dispatch(getTransactions());
    dispatch(getRequestTransactions());
    return dispatch(requestMoneySuccess(res));
  } catch (error) {
    dispatch(requestMoneyError(error.message));
  }
};

export const removeBankAccount = (data, token) => async (dispatch) => {
  dispatch(removeBankAccountRequest());
  try {
    const res = await WalletController.removeBankAccount(data, token);
    return dispatch(removeBankAccountSuccess(res));
  } catch (error) {
    dispatch(removeBankAccountError(error.message));
  }
};

export const acceptMoney = (data) => async (dispatch) => {
  dispatch(acceptMoneyRequest());
  try {
    const res = await WalletController.acceptMoney(data);
    dispatch(acceptMoneySuccess(res));
    dispatch(getTransactions());
  } catch (error) {
    dispatch(acceptMoneyError(error.message));
  }
};

export const rejectMoney = (data, status) => async (dispatch) => {
  dispatch(rejectMoneyRequest());
  try {
    const res = await WalletController.rejectMoney(data, status);
    dispatch(rejectMoneySuccess(res));
    dispatch(getTransactions());
  } catch (error) {
    dispatch(rejectMoneyError(error.message));
  }
};

export const createWallet = (data) => async (dispatch) => {
  dispatch(createWalletRequest());
  try {
    const res = await WalletController.createWallet(data);
    dispatch(createWalletSuccess(res));
    return;
  } catch (error) {
    dispatch(createWalletError(error.message));
    throw error;
  }
};
