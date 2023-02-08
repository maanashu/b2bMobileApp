import { TYPES } from "@/Types/Types";
const INITIALSTATE = {
  categoryList: [],
  subCategories: [],
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
    default:
      return state;
  }
};
