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

const addCouponRequest = () => ({
  type: TYPES.ADD_COUPONS_REQUEST,
  payload: null,
});
const addCouponSuccess = (addCoupons) => ({
  type: TYPES.ADD_COUPONS_SUCCESS,
  payload: { addCoupons },
});
const addCouponError = (error) => ({
  type: TYPES.ADD_COUPONS_ERROR,
  payload: { error },
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
    console.log(console.log("action success", JSON.stringify(res)));
    dispatch(getTrendingProductsSuccess(res.payload));
  } catch (error) {
    if (error.statusCode === 204) {
      console.log("no content in trending products action");
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
    dispatch(getCouponsError(error.message));
  }
};

export const addCoupon = (data) => async (dispatch) => {
  dispatch(addCouponRequest());
  try {
    const res = await ProductController.addCoupon(data);

    dispatch(addCouponSuccess(res));
  } catch (error) {
    dispatch(addCouponError(error.message));
  }
};

// export const getProduct =
//   (selectedId, subSelectedId, brandSelectedId, sellerID) =>
//   async (dispatch) => {
//     dispatch(getProductRequest());
//     try {
//       const res = await RetailController.getProduct(
//         selectedId,
//         subSelectedId,
//         brandSelectedId,
//         sellerID
//       );
//       dispatch(getProductSuccess(res));
//     } catch (error) {
//       dispatch(getProductError(error.message));
//     }
//   };
// export const getSearchProduct = (search, sellerID) => async (dispatch) => {
//   dispatch(getSeaProductRequest());
//   try {
//     const res = await RetailController.getSearchProduct(search, sellerID);
//     dispatch(getSeaProductSuccess(res));
//   } catch (error) {
//     dispatch(getSeaProductError(error.message));
//   }
// };
