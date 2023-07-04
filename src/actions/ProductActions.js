import { ProductController } from "@/controllers";
import { TYPES } from "@/Types/Types";

const getProductRequest = () => ({
  type: TYPES.GET_PRODUCT_REQUEST,
  payload: null,
});
const getProductSuccess = (productList) => ({
  type: TYPES.GET_PRODUCT_SUCCESS,
  payload: { productList },
});
const getProductError = (error) => ({
  type: TYPES.GET_PRODUCT_ERROR,
  payload: { error },
});
const getProductReset = () => ({
  type: TYPES.GET_PRODUCT_RESET,
  payload: null,
});

const getProductDetailRequest = () => ({
  type: TYPES.GET_PRODUCT_DETAIL_REQUEST,
  payload: null,
});
const getProductDetailSuccess = (productDetail) => ({
  type: TYPES.GET_PRODUCT_DETAIL_SUCCESS,
  payload: { productDetail },
});
const getProductDetailError = (error) => ({
  type: TYPES.GET_PRODUCT_DETAIL_ERROR,
  payload: { error },
});

const getTrendingProductsRequest = () => ({
  type: TYPES.GET_TRENDING_PRODUCTS_REQUEST,
  payload: null,
});
const getTrendingProductsSuccess = (trendingList) => ({
  type: TYPES.GET_TRENDING_PRODUCTS_SUCCESS,
  payload: { trendingList },
});
const getTrendingProductsError = (error) => ({
  type: TYPES.GET_TRENDING_PRODUCTS_ERROR,
  payload: { error },
});
const getTrendingProductsReset = () => ({
  type: TYPES.GET_TRENDING_PRODUCTS_RESET,
  payload: null,
});

const getTrendingSellersRequest = () => ({
  type: TYPES.GET_TRENDING_SELLERS_REQUEST,
  payload: null,
});
const getTrendingSellersSuccess = (trendingSellers) => ({
  type: TYPES.GET_TRENDING_SELLERS_SUCCESS,
  payload: { trendingSellers },
});
const getTrendingSellersError = (error) => ({
  type: TYPES.GET_TRENDING_SELLERS_ERROR,
  payload: { error },
});

const getCouponsRequest = () => ({
  type: TYPES.GET_COUPONS_REQUEST,
  payload: null,
});
const getCouponsSuccess = (coupons) => ({
  type: TYPES.GET_COUPONS_SUCCESS,
  payload: { coupons },
});
const getCouponsError = (error) => ({
  type: TYPES.GET_COUPONS_ERROR,
  payload: { error },
});
const getCouponsReset = () => ({
  type: TYPES.GET_COUPONS_RESET,
  payload: null,
});
const getCouponsWithCategoryIdRequest = () => ({
  type: TYPES.GET_COUPONS_WITH_CATEGORY_ID_REQUEST,
  payload: null,
});
const getCouponsWithCategoryIdSuccess = (couponsWithCatId) => ({
  type: TYPES.GET_COUPONS_WITH_CATEGORY_ID_SUCCESS,
  payload: { couponsWithCatId },
});
const getCouponsWithCategoryIdError = (error) => ({
  type: TYPES.GET_COUPONS_WITH_CATEGORY_ID_ERROR,
  payload: { error },
});
const getCouponsWithCategoryIdReset = () => ({
  type: TYPES.GET_COUPONS_WITH_CATEGORY_ID_RESET,
  payload: null,
});

const addCouponRequest = () => ({
  type: TYPES.ADD_COUPONS_REQUEST,
  payload: null,
});
export const addCouponSuccess = (addCoupons) => ({
  type: TYPES.ADD_COUPONS_SUCCESS,
  payload: { addCoupons },
});
const addCouponError = (error) => ({
  type: TYPES.ADD_COUPONS_ERROR,
  payload: { error },
});
export const addCouponReset = () => ({
  type: TYPES.ADD_COUPONS_RESET,
  payload: null,
});

const supplyVariantRequest = () => ({
  type: TYPES.SUPPLY_VARIANT_REQUEST,
  payload: null,
});
const supplyVariantSuccess = (variantId) => ({
  type: TYPES.SUPPLY_VARIANT_SUCCESS,
  payload: { variantId },
});
const supplyVariantError = (error) => ({
  type: TYPES.SUPPLY_VARIANT_ERROR,
  payload: { error },
});
const supplyVariantReset = () => ({
  type: TYPES.SUPPLY_VARIANT_RESET,
  payload: null,
});

const catWithProductRequest = () => ({
  type: TYPES.CATEGORY_WITH_PRODUCT_REQUEST,
  payload: null,
});
const catWithProductSuccess = (categoryWithProducts) => ({
  type: TYPES.CATEGORY_WITH_PRODUCT_SUCCESS,
  payload: { categoryWithProducts },
});
const catWithProductError = (error) => ({
  type: TYPES.CATEGORY_WITH_PRODUCT_ERROR,
  payload: { error },
});
const catWithProductReset = () => ({
  type: TYPES.CATEGORY_WITH_PRODUCT_RESET,
  payload: null,
});

const getProductsSellersRequest = () => ({
  type: TYPES.GET_PRODUCTS_SELLERS_REQUEST,
  payload: null,
});
const getProductsSellersSuccess = (getProductsSellersList) => ({
  type: TYPES.GET_PRODUCTS_SELLERS_SUCCESS,
  payload: { getProductsSellersList },
});
const getProductsSellersError = (error) => ({
  type: TYPES.GET_PRODUCTS_SELLERS_ERROR,
  payload: { error },
});
const getProductsSellersReset = () => ({
  type: TYPES.GET_PRODUCTS_SELLERS_RESET,
  payload: null,
});

export const saveManufacturerDetail = (savedManufacturerDetail) => ({
  type: TYPES.SAVED_MANUFACTURER_DETAIL_SUCCESS,
  payload: { savedManufacturerDetail },
});

export const getProduct = (data) => async (dispatch) => {
  dispatch(getProductRequest());
  try {
    const res = await ProductController.getProduct(data);
    dispatch(getProductSuccess(res.payload));
  } catch (error) {
    if (error.statusCode === 204) {
      dispatch(getProductReset());
    } else {
      dispatch(getProductError(error.message));
    }
  }
};

export const getProductDetail = (productId, seller_id) => async (dispatch) => {
  dispatch(getProductDetailRequest());
  try {
    const res = await ProductController.getProductDetail(productId, seller_id);
    dispatch(getProductDetailSuccess(res));
  } catch (error) {
    dispatch(getProductDetailError(error.message));
  }
};

export const getTrendingProducts = (data) => async (dispatch) => {
  dispatch(getTrendingProductsRequest());

  try {
    const res = await ProductController.getTrendingProducts(data);
    dispatch(getTrendingProductsSuccess(res.payload));
  } catch (error) {
    if (error.statusCode === 204) {
      dispatch(getTrendingProductsReset());
    } else {
      dispatch(getTrendingProductsError(error.message));
    }
  }
};

export const getTrendingSellers = () => async (dispatch) => {
  dispatch(getTrendingSellersRequest());
  try {
    const res = await ProductController.getTrendingSellers();

    dispatch(getTrendingSellersSuccess(res));
  } catch (error) {
    dispatch(getTrendingSellersError(error.message));
  }
};
export const getCoupons = (data) => async (dispatch) => {
  dispatch(getCouponsRequest());
  try {
    const res = await ProductController.getCoupons(data);
    dispatch(getCouponsSuccess(res));
  } catch (error) {
    if (error?.statusCode === 204) {
      dispatch(getCouponsReset());
    } else {
      dispatch(getCouponsError(error.message));
    }
  }
};

export const getCouponsWithCategoryId = (data) => async (dispatch) => {
  dispatch(getCouponsWithCategoryIdRequest());
  try {
    const res = await ProductController.getCouponsWithCategoryId(data);

    dispatch(getCouponsWithCategoryIdSuccess(res));
  } catch (error) {
    if (error.statusCode === 204) {
      dispatch(getCouponsWithCategoryIdReset());
    } else {
      dispatch(getCouponsWithCategoryIdError(error.message));
    }
  }
};

export const addCoupon = (data) => async (dispatch) => {
  dispatch(addCouponRequest());
  return ProductController.addCoupon(data)
    .then((res) => {
      dispatch(addCouponSuccess(res));
      return res;
    })
    .catch((error) => {
      dispatch(addCouponError(error.message));
      throw error;
    });
};

export const getSupplyVariantId = (values, id) => async (dispatch) => {
  dispatch(supplyVariantRequest());
  try {
    const res = await ProductController.getVariantId(values, id);
    dispatch(supplyVariantSuccess(res));
  } catch (error) {
    if (error.statusCode === 204) {
      dispatch(supplyVariantReset());
    } else {
      dispatch(supplyVariantError(error.message));
    }
  }
};

export const getCategoriesWithProducts = (data) => async (dispatch) => {
  dispatch(catWithProductRequest());
  try {
    const res = await ProductController.getCategoriesWithProducts(data);
    dispatch(catWithProductSuccess(res));
  } catch (error) {
    if (error.statusCode === 204) {
      dispatch(catWithProductReset());
    } else {
      dispatch(catWithProductError(error.message));
    }
  }
};

export const searchProductsSellers = (data) => async (dispatch) => {
  dispatch(getProductsSellersRequest());
  try {
    const res = await ProductController.searchProductsSellers(data);
    dispatch(getProductsSellersSuccess(res));
  } catch (error) {
    if (error?.statusCode === 204) {
      dispatch(getProductsSellersReset());
    } else {
      dispatch(getProductsSellersError(error.message));
    }
  }
};
