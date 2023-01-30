import { TYPES } from "@/Types/Types";
const INITIALSTATE = {
  product: [],
};
export const productReducer = (state = { INITIALSTATE }, { payload, type }) => {
  switch (type) {
    case TYPES.GET_PRODUCT_SUCCESS:
      return { ...state, product: payload.productList.payload.data };

    default:
      return state;
  }
};
