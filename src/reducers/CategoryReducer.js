import { TYPES } from "@/Types/Types";
const INITIALSTATE = {
  categories: [],
};
export const categoryReducer = (
  state = { INITIALSTATE },
  { payload, type }
) => {
  switch (type) {
    case TYPES.GET_CATEGORY_SUCCESS:
      return { ...state, categories: payload.categoryList.payload.data };

    default:
      return state;
  }
};
