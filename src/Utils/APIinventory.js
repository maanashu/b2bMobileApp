export const USER_URL = "https://stgapiuserservice.jobr.com/api/v1/";
// export const SUPPORT_URL = 'https://apisupport.jobr.com/api/v1/';
export const ORDER_URL = "https://stgdapiorder.jobr.com:8024/api/v1/";
export const PRODUCT_URL = "https://stgapiproductmgmt.jobr.com/api/v1/";
export const SUPPORT_URL = "https://apisupport.jobr.com/api/v1/";

export const ApiUserInventory = {
  sendOtp: "user_phones/",
  verifyPhone: "user_phones/verify-phone",
  userRegister: "users",
  login: "users/login/",
  nearMeSellers: "users/sellers/b2b",
  deviceLogin: "users/login/device",
  settings: "settings",
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

// export const ApiSupportInventory = {

// }

export const ApiOrderInventory = {};
