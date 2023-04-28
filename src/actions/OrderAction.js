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

const getCartRequest = () => ({
  type: TYPES.GET_CART_REQUEST,
  payload: null,
});

const getCartError = (error) => ({
  type: TYPES.GET_CART_ERROR,
  payload: { error },
});

const getCartSuccess = (getCart) => ({
  type: TYPES.GET_CART_SUCCESS,
  payload: { getCart },
});
const getCartReset = () => ({
  type: TYPES.GET_CART_RESET,
  payload: null,
});

export const createCartAction = (data) => async (dispatch) => {
  console.log("checkdata", data);
  dispatch(createCartRequest());
  try {
    const res = await OrderController.createCartController(data);
    dispatch(createCartSuccess(res));
  } catch (error) {
    console.log("action error", error);
    dispatch(createCartError(error.message));
  }
};
export const getCart = () => async (dispatch) => {
  dispatch(getCartRequest());
  try {
    const res = await OrderController.getCart();
    dispatch(getCartSuccess(res));
  } catch (error) {
    console.log("action error: " + error.message);
    if (error?.statusCode === 204) {
      dispatch(getCartReset());
    } else {
      dispatch(getCartError(error.message));
    }
  }
};
