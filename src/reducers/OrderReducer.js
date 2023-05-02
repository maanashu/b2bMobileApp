import { TYPES } from "@/Types/Types";

const INITIALSTATE = {
  createCart: {},
  getCart: {},
  shippingServices: [],
};

export const orderReducer = (state = { INITIALSTATE }, { payload, type }) => {
  switch (type) {
    case TYPES.CREATE_CART_SUCCESS:
      return {
        ...state,
        createCart: payload.createCart,
      };
    case TYPES.GET_CART_SUCCESS:
      return {
        ...state,
        getCart: payload.getCart.payload,
      };
    case TYPES.GET_SHIPPING_SERVICES_SUCCESS:
      return {
        ...state,
        shippingServices: payload.shippingServices.payload,
      };
    default:
      return state;
  }
};
