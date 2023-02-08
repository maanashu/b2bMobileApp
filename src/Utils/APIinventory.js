export const USER_URL = "https://apiuserservice.jobr.com/api/v1/";
// export const SUPPORT_URL = 'https://apisupport.jobr.com/api/v1/';
export const ORDER_URL = "https://apiorder.jobr.com:8004/api/v1/";
export const PRODUCT_URL = "https://apiproductmgmt.jobr.com/api/v1/";
export const CATEGORY_URL = "https://stgapiproductmgmt.jobr.com/";

export const ApiUserInventory = {
  sendOtp: "user_phones/",
  verifyPhone: "user_phones/verify-phone",
  userRegister: "users",
  login: "login/",
};

export const ApiProductInventory = {
  getCategory: "api/v1/categories/b2b?page=1&limit=20&main_category=true",
  getProduct: (categoryId) =>
    `products/category/get-all/${categoryId}?page=1&limit=10`,
  getBanners: "banners/get-all?page=1&limit=10",
  getProductDetail: (productId) => `products/product-detail/${productId}`,
};

// export const ApiSupportInventory = {

// }

export const ApiOrderInventory = {};
