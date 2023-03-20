export const USER_URL = "https://stgapiuserservice.jobr.com/api/v1/";
// export const SUPPORT_URL = 'https://apisupport.jobr.com/api/v1/';
export const ORDER_URL = "https://stgdapiorder.jobr.com:8024/api/v1/";
export const PRODUCT_URL = "https://stgapiproductmgmt.jobr.com/api/v1/";
export const SUPPORT_URL = "https://apisupport.jobr.com/api/v1/";
export const WALLET_URL = "https://stgbewalletmanagement.jobr.com/api/v1/";

export const ApiUserInventory = {
  sendOtp: "user_phones/",
  verifyPhone: "user_phones/verify-phone",
  userRegister: "users",
  login: "users/login/",
  nearMeSellers: "users/sellers/b2b",
  deviceLogin: "users/login/device",
  settings: "settings",
  uploadDoc: USER_URL + "user_profiles/verification-document",
};

export const SupportInventory = {
  faqs: "faqs",
};
export const ApiProductInventory = {
  getCategory: `${PRODUCT_URL}categories/b2b`,
  getSubCategory: (categoryID) =>
    `categories/b2b?page=1&limit=10&category_id=${categoryID}&main_category=true`,
  getBrands: (categoryid) =>
    `brands/b2b?page=1&limit=10&category_id=${categoryid}`,
  getProduct: `${PRODUCT_URL}products/b2b`,
  getTrendingProducts: `${PRODUCT_URL}products/b2b/trending`,
  getBanners: "banners/b2b?service_id=2&page=1&limit=10",
  getProductDetail: (productId) => `products/b2b/${productId}`,
  getTrendingSellers: "users/sellers/b2b?page=1&limit=10&need_trending=true",
};

export const ApiWalletInventory = {
  getBalance: WALLET_URL + "wallets/balance",
  getTransactions: WALLET_URL + "transactions/user",
  getUser: WALLET_URL + "wallets/user-details",
  contactSyncingApi: WALLET_URL + "wallets/contact-sync",
  createUser: WALLET_URL + "wallets/",
  getUserByUuid: WALLET_URL + "wallets/user/",
  request_kyc: WALLET_URL + "wallets/request-kyc",
  check_kyc: WALLET_URL + "wallets/check-kyc",
  docTypes: WALLET_URL + "wallets/document-types",
  docUpload: WALLET_URL + "wallets/upload-documents",
  getToken: WALLET_URL + "wallets/plaid/token",
  linkBankAccount: WALLET_URL + "wallets/link-bank-account",
  getBankAccounts: WALLET_URL + "wallets/bank-accounts",
  getPaymentMethods: WALLET_URL + "wallets/payment-methods",
  getOtherUserBySearch: WALLET_URL + "wallets/other",
  transfermoney: WALLET_URL + "transactions/transfer",
  requestMoney: WALLET_URL + "transactions/request-money",
  removeBankAccount: WALLET_URL + "wallets/bank-account/delete",
  acceptMoney: WALLET_URL + "transactions/request-approved",
  rejectMoney: WALLET_URL + "transactions/change-status",
  getBankBalance: WALLET_URL + "wallets/bank-account/balance",
  redeemMoney: WALLET_URL + "transactions/redeem",
  addBalance: WALLET_URL + "transactions/issue-sila",
  scanQrCode: WALLET_URL + "wallets/scan-qr",
  getAllUsers: WALLET_URL + "wallets/receivers",
  updateNotificationSettings: WALLET_URL + "wallets",
  getGraph: WALLET_URL + "transactions/user/statistics",
  businessTypes: WALLET_URL + "wallets/business-types",
  naicsCode: WALLET_URL + "wallets/naics-categories",
  businessRegistration: WALLET_URL + "wallets/business/register",
  requestBusinessKyc: WALLET_URL + "wallets/business/request-kyc",
  checkBusinessKyc: WALLET_URL + "wallets/business/check-kyc",
  businessDocs: WALLET_URL + "wallets/business/upload-documents",
};

// export const ApiSupportInventory = {

// }

export const ApiOrderInventory = {};
