import { TYPES } from "@/Types/Types";

const INITIALSTATE = {
  createCart: {},
};

export const orderReducer = (state = { INITIALSTATE }, { payload, type }) => {
  switch (type) {
    case TYPES.CREATE_CART_SUCCESS:
      return {
        ...state,
        createCart: payload.createCart,
      };
    default:
      return state;
  }
};
