import { OrderController } from "@/controllers/OrderController";
import { TYPES } from "@/Types/Types";

const createCartRequest = () => ({
  type: TYPES.CREATE_CART_REQUEST,
  payload: null,
});

const createCartError = (error) => ({
  type: TYPES.CREATE_CART_ERROR,
  payload: { error },
});

const createCartSuccess = (createCart) => ({
  type: TYPES.CREATE_CART_SUCCESS,
  payload: { createCart },
});

export const createCartAction = (data) => async (dispatch) => {
  dispatch(createCartRequest());
  try {
    const res = await OrderController.createCartController(data);
    dispatch(createCartSuccess(res));
  } catch (error) {
    dispatch(createCartError(error.message));
  }
};
