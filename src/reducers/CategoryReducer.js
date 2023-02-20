import { TYPES } from "@/Types/Types";
const INITIALSTATE = {
  categoryList: [],
  subCategoryList: [],
  brandsList: [],
  serviceCategoryList: [],
};
export const categoryReducer = (
  state = { INITIALSTATE },
  { payload, type }
) => {
  switch (type) {
    case TYPES.GET_CATEGORY_SUCCESS:
      return {
        ...state,
        categoryList: payload.categoryList.payload.data,
      };
    case TYPES.GET_SUB_CATEGORY_SUCCESS:
      return {
        ...state,
        subCategoryList: payload.subCategoryList.payload.data,
      };
    case TYPES.GET_BRANDS_SUCCESS:
      return {
        ...state,
        brandsList: payload.brandsList.payload.data,
      };
    case TYPES.GET_SERVICE_CATEGORY_SUCCESS:
      return {
        ...state,
        serviceCategoryList: payload.serviceCategoryList.payload.data,
      };
    default:
      return state;
  }
};
