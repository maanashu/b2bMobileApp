import { TYPES } from "@/Types/Types";

const INITIALSTATE = {
  createCart: {},
  getCart: {},
  shippingServices: [],
  removeProductFromCart: {},
  createOrder: {}
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
    case TYPES.REMOVE_PRODUCT_FROM_CART_SUCCESS:
      return {
        ...state,
        removeProductFromCart: payload.removeProductFromCart,
      };
    case TYPES.GET_CART_RESET:
      return {
        ...state,
        getCart: {},
      };
      case TYPES.CREATE_ORDER_SUCCESS:
        return {
          ...state,
          createOrder: payload.createOrder,
        };
    default:
      return state;
  }
};
