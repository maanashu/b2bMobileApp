import { ProductController } from "@/controllers";
import { TYPES } from "@/Types/Types";

const getProductRequest = () => ({
  type: TYPES.GET_CATEGORY_REQUEST,
  payload: null,
});
const getProductSuccess = (categoryList) => ({
  type: TYPES.GET_CATEGORY_SUCCESS,
  payload: { categoryList },
});
const getProductError = (error) => ({
  type: TYPES.GET_CATEGORY_ERROR,
  payload: { error },
});

export const getProduct = () => async (dispatch) => {
  dispatch(getProductRequest());
  try {
    const res = await ProductController.getProduct();
    dispatch(getProductSuccess(res));
  } catch (error) {
    dispatch(getProductError(error.message));
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
