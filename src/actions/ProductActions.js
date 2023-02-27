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

export const getProductDetail = (selectedId) => async (dispatch) => {
  dispatch(getProductDetailRequest());
  try {
    const res = await ProductController.getProductDetail(selectedId);
    dispatch(getProductDetailSuccess(res));
  } catch (error) {
    dispatch(getProductDetailError(error.message));
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
