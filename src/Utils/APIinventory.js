export const USER_URL = "https://stgapiuserservice.jobr.com/api/v1/";
// export const SUPPORT_URL = 'https://apisupport.jobr.com/api/v1/';
export const ORDER_URL = "https://stgdapiorder.jobr.com:8024/api/v1/";
export const BANNER_URL = "https://apiproductmgmt.jobr.com/api/v1/";
export const PRODUCT_URL = "https://stgapiproductmgmt.jobr.com/api/v1/";

export const ApiUserInventory = {
  sendOtp: "user_phones/",
  verifyPhone: "user_phones/verify-phone",
  userRegister: "users",
  login: "login/",
};

export const ApiProductInventory = {
  getCategory: "categories/b2b?page=1&limit=20&main_category=true",
  getSubCategory: (categoryID) =>
    `categories/b2b?page=1&limit=20&main_category=true&category_id=${categoryID}`,
  getProduct: (categoryId) =>
    `products/category/get-all/${categoryId}?page=1&limit=10`,
  getBanners: "banners/get-all?page=1&limit=10",
  getProductDetail: (productId) => `products/product-detail/${productId}`,
};

// export const ApiSupportInventory = {

// }

export const ApiOrderInventory = {};
