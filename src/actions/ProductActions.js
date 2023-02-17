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

export const getProduct = (selectedId) => async (dispatch) => {
  dispatch(getProductRequest());
  try {
    const res = await ProductController.getProduct(selectedId);
    // console.log("check action success", JSON.stringify(res));
    dispatch(getProductSuccess(res));
  } catch (error) {
    // console.log("check action error", error);

    dispatch(getProductError(error.message));
  }
};

const getProductDetailRequest = () => ({
  type: TYPES.GET_PRODUCT_DETAIL_REQUEST,
  payload: null,
});
const getProductDetailSuccess = (productDetails) => ({
  type: TYPES.GET_PRODUCT_DETAIL_SUCCESS,
  payload: { productDetails },
});
const getProductDetailError = (error) => ({
  type: TYPES.GET_PRODUCT_DETAIL_ERROR,
  payload: { error },
});

export const getProductDetail = (selectedId) => async (dispatch) => {
  dispatch(getProductDetailRequest());
  try {
    const res = await ProductController.getProductDetail(selectedId);
    console.log("check action success---> ", JSON.stringify(res));
    dispatch(getProductDetailSuccess(res));
  } catch (error) {
    console.log("check action error---> ", error);
    dispatch(getProductDetailError(error.message));
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
