import { TYPES } from "@/Types/Types";
const INITIALSTATE = {
  product: [],
  productDetail: [],
  trendingSellers: [],
};
export const productReducer = (state = { INITIALSTATE }, { payload, type }) => {
  switch (type) {
    case TYPES.GET_PRODUCT_SUCCESS:
      return { ...state, product: payload.productList };

    case TYPES.GET_PRODUCT_DETAIL_SUCCESS:
      return { ...state, productDetail: payload.productDetail.payload };

    case TYPES.GET_TRENDING_SELLERS_SUCCESS:
      return {
        ...state,
        trendingSellers: payload.trendingSellers.payload.sellers,
      };

    default:
      return state;
  }
};
