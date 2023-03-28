import { TYPES } from "@/Types/Types";

const INITIALSTATE = {
  createCart: {},
};

export const orderReducer = (state = { INITIALSTATE }, { payload, type }) => {
  switch (type) {
    case TYPES.CREATE_CART_REQUEST:
      return {
        ...state,
        createCart: payload.createCart.payload,
      };
    default:
      return state;
  }
};
