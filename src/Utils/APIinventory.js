// export const USER_URL = "https://stgapiuserservice.jobr.com/api/v1/";
// export const ORDER_URL = "https://stgdapiorder.jobr.com:8024/api/v1/";
// export const PRODUCT_URL = "https://stgapiproductmgmt.jobr.com/api/v1/";
// export const SUPPORT_URL = "https://stgapisupport.jobr.com/api/v1/";
// export const WALLET_URL = "https://stgbewalletmanagement.jobr.com/api/v1/";

export const USER_URL = "https://apiuserservice.jobr.com/api/v1/";
export const ORDER_URL = "https://apiorder.jobr.com:8004/api/v1/";
export const PRODUCT_URL = "https://apiproductmgmt.jobr.com/api/v1/";
export const SUPPORT_URL = "https://apisupport.jobr.com/api/v1/";
export const WALLET_URL = "https://apiwallet.jobr.com/api/v1/";
export const INVENTORY_URL = "https://apinventory.jobr.com/api/v1/";

export const ApiUserInventory = {
  sendOtp: "user_phones/",
  verifyPhone: "user_phones/verify-phone",
  userRegister: "users",
  login: "users/login/",
  nearMeSellers: "users/sellers/b2b",
  deviceRegister: USER_URL + "users/device/register",
  deviceLogin: "users/device/login",
  settings: "settings",
  uploadDoc: USER_URL + "user_profiles/verification-document",
  userAddress: "user_locations/",
  getUserLocationsEP: "user_locations/user",
  changeCurrentAddress: "user_locations/",
  sendEmailOtp: "users/send-otp",
  getSellers: "users/sellers/b2b",
  getUserProfile: (userUuid) => `users/uuid/${userUuid}`,
  getUserSettings: "user_settings",
  updateUserSettings: "user_settings",
  sendChat: "messages",
  getMessages: USER_URL + `messageheads/`,
  getMessageHeads: `messageheads`,
  deleteMessages: (id) => `messageheads/${id}`,
  getOneManufactureDetails: (id) => `users/${id}`,
  sellerFavourites: "favourites",
  productFavourites: "product_favourites",
  uploadProfileImage: "user_profiles/profile",
  editProfile: "user_profiles",
};

export const SupportInventory = {
  faqs: (type) => `faqs?type=${type}`,
};

export const ApiOrderInventory = {
  createNewCart: "carts",
  removeOneProduct: (cartId, cartProductId) =>
    `carts/${cartId}/${cartProductId}`,
  getCart: "carts/user",
  getShippingServices: "shipping_service",
  createOrder: "orders/",
  emptyCart: "carts",
  getOrderList: "orders",
  getOrderDetails: (id) => `orders/${id}`,
  changeStatus: (id) => `orders/status/${id}`,
};
export const ApiSupportInventory = {
  subjectList: SUPPORT_URL + "subjects",
  uploadSupportDoc: SUPPORT_URL + "supports/document",
  addTicket: SUPPORT_URL + "supports",
  supportList: SUPPORT_URL + "supports/user",
  faqList: SUPPORT_URL + "faqs",
};

export const ApiProductInventory = {
  getCategory: `${PRODUCT_URL}categories/b2b`,
  getSubCategory: (categoryID) =>
    `categories/b2b?page=1&limit=10&category_id=${categoryID}&main_category=true`,
  getBrands: `brands/b2b`,
  getProduct: `${PRODUCT_URL}products/b2b`,
  getTrendingProducts: `${PRODUCT_URL}products/b2b/trending`,
  getBanners: "banners/b2b?service_id=2&page=1&limit=10",
  getProductDetails: (productId) => `${PRODUCT_URL}products/b2b/${productId}`,
  getTrendingSellers: "users/sellers/b2b?page=1&limit=10&need_trending=true",
  getCoupons: PRODUCT_URL + "coupons",
  getCouponsWithCategoryId: `${PRODUCT_URL}coupons/get-coupon-by-categoryId`,
  verifyCoupon: "coupons/verify",
  getSupplyVariant: (values, id) =>
    `supply_variants/by-attribute-value-ids?attribute_value_ids=${values}&supply_id=${id}`,
  getCategoriesWithFewProducts: `categories/b2b/with-few-products`,
  searchProductsSellers: PRODUCT_URL + "global_search/search?",
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
  businessRegistrationURL: WALLET_URL + "wallets/business/register",
  requestBusinessKyc: WALLET_URL + "wallets/business/request-kyc",
  checkBusinessKyc: WALLET_URL + "wallets/business/check-kyc",
  businessDocs: WALLET_URL + "wallets/business/upload-documents",
};

// export const ApiSupportInventory = {

// }
