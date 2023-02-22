export const USER_URL = "https://stgapiuserservice.jobr.com/api/v1/";
// export const SUPPORT_URL = 'https://apisupport.jobr.com/api/v1/';
export const ORDER_URL = "https://stgdapiorder.jobr.com:8024/api/v1/";
export const PRODUCT_URL = "https://stgapiproductmgmt.jobr.com/api/v1/";

export const ApiUserInventory = {
  sendOtp: "user_phones/",
  verifyPhone: "user_phones/verify-phone",
  userRegister: "users",
  login: "login/",
};
export const ApiProductInventory = {
  getCategory:
    "categories/b2b?page=1&limit=10&main_category=true&service_type=product",
  getServiceCategory:
    "categories/b2b?page=1&limit=10&main_category=true&service_type=service",
  getSubCategory: (categoryID) =>
    `categories/b2b?page=1&limit=10&category_id=${categoryID}&main_category=true`,
  getBrands: (categoryid) =>
    `brands/b2b?page=1&limit=10&category_id=${categoryid}`,
  getProduct: (selectedId) =>
    `products/b2b?page=1&limit=20&brand_id=${selectedId}`,
  getBanners: "banners/b2b?service_id=2&page=1&limit=10",
  getProductDetail: (productId) => `products/b2b/${productId}`,
  getTrendingSellers: "users/sellers/b2b?page=1&limit=10&need_trending=true",
};

// export const ApiSupportInventory = {

// }

export const ApiOrderInventory = {};
