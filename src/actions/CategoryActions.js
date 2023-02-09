import { CategoryController } from "@/controllers";
import { TYPES } from "@/Types/Types";

const getCategoryRequest = () => ({
  type: TYPES.GET_CATEGORY_REQUEST,
  payload: null,
});
const getCategorySuccess = (categoryList) => ({
  type: TYPES.GET_CATEGORY_SUCCESS,
  payload: { categoryList },
});
const getCategoryError = (error) => ({
  type: TYPES.GET_PRODUCT_ERROR,
  payload: { error },
});

const getSubCategoryRequest = () => ({
  type: TYPES.GET_SUB_CATEGORY_REQUEST,
  payload: null,
});
const getSubCategorySuccess = (subCategoryList) => ({
  type: TYPES.GET_SUB_CATEGORY_SUCCESS,
  payload: { subCategoryList },
});
const getSubCategoryError = (error) => ({
  type: TYPES.GET_SUB_CATEGORY_ERROR,
  payload: { error },
});

export const getCategory = () => async (dispatch) => {
  dispatch(getCategoryRequest());
  try {
    const res = await CategoryController.getCategory();
    dispatch(getCategorySuccess(res));
  } catch (error) {
    dispatch(getCategoryError(error.message));
  }
};

export const getSubCategory = (categoryID) => async (dispatch) => {
  console.log("categoryID", categoryID);
  dispatch(getSubCategoryRequest());
  try {
    const res = await CategoryController.getSubCategory(categoryID);
    dispatch(getSubCategorySuccess(res));
  } catch (error) {
    dispatch(getSubCategoryError(error.message));
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
