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
  type: TYPES.GET_CATEGORY_ERROR,
  payload: { error },
});

const getServiceCategoryRequest = () => ({
  type: TYPES.GET_SERVICE_CATEGORY_REQUEST,
  payload: null,
});
const getServiceCategorySuccess = (serviceCategoryList) => ({
  type: TYPES.GET_SERVICE_CATEGORY_SUCCESS,
  payload: { serviceCategoryList },
});
const getServiceCategoryError = (error) => ({
  type: TYPES.GET_SERVICE_CATEGORY_ERROR,
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
const getSubCategoryReset = () => ({
  type: TYPES.GET_SUB_CATEGORY_RESET,
  payload: null,
});
const getSubCategoryError = (error) => ({
  type: TYPES.GET_SUB_CATEGORY_ERROR,
  payload: { error },
});

const getBrandsRequest = () => ({
  type: TYPES.GET_BRANDS_REQUEST,
  payload: null,
});
const getBrandsSuccess = (brandsList) => ({
  type: TYPES.GET_BRANDS_SUCCESS,
  payload: { brandsList },
});
const getBrandsError = (error) => ({
  type: TYPES.GET_BRANDS_ERROR,
  payload: { error },
});
const getBrandsReset = () => ({
  type: TYPES.GET_BRANDS_RESET,
  payload: null,
});

export const getCategory = (data) => async (dispatch) => {
  dispatch(getCategoryRequest());
  try {
    const res = await CategoryController.getCategory(data);
    dispatch(getCategorySuccess(res));
  } catch (error) {
    dispatch(getCategoryError(error.message));
  }
};

export const getServiceCategory = (data) => async (dispatch) => {
  dispatch(getServiceCategoryRequest());
  try {
    const res = await CategoryController.getCategory(data);
    dispatch(getServiceCategorySuccess(res));
  } catch (error) {
    dispatch(getServiceCategoryError(error.message));
  }
};

export const getSubCategory = (data) => async (dispatch) => {
  dispatch(getSubCategoryRequest());
  try {
    const res = await CategoryController.getCategory(data);
    dispatch(getSubCategorySuccess(res.payload));
    return;
  } catch (error) {
    if (error?.statusCode === 204) {
      dispatch(getSubCategoryReset());
    } else {
      dispatch(getSubCategoryError(error.message));
    }
    throw error;
  }
};

export const getBrands = (param) => async (dispatch) => {
  dispatch(getBrandsRequest());
  try {
    const res = await CategoryController.getBrands(param);
    dispatch(getBrandsSuccess(res));
  } catch (error) {
    if (error?.statusCode === 204) {
      dispatch(getBrandsReset());
    } else {
      dispatch(getBrandsError(error.message));
    }
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
