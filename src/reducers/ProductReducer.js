import { TYPES } from "@/Types/Types";
const INITIALSTATE = {
  product: [],
  productDetail: [],
};
export const productReducer = (state = { INITIALSTATE }, { payload, type }) => {
  switch (type) {
    case TYPES.GET_PRODUCT_SUCCESS:
      return { ...state, product: payload.productList.payload.data };

    case TYPES.GET_PRODUCT_DETAIL_SUCCESS:
      return { ...state, productDetail: payload.productDetail.payload };

    default:
      return state;
  }
};
