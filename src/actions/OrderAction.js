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

const getShippingServicesRequest = () => ({
  type: TYPES.GET_SHIPPING_SERVICES_REQUEST,
  payload: null,
});

const getShippingServicesError = (error) => ({
  type: TYPES.GET_SHIPPING_SERVICES_ERROR,
  payload: { error },
});

const getShippingServicesSuccess = (shippingServices) => ({
  type: TYPES.GET_SHIPPING_SERVICES_SUCCESS,
  payload: { shippingServices },
});
const getShippingServicesReset = () => ({
  type: TYPES.GET_SHIPPING_SERVICES_RESET,
  payload: null,
});

const removeOneProductfromCartRequest = (error) => ({
  type: TYPES.GET_SHIPPING_SERVICES_ERROR,
  payload: { error },
});

const removeOneProductfromCartSuccess = (removeProductFromCart) => ({
  type: TYPES.REMOVE_PRODUCT_FROM_CART_SUCCESS,
  payload: { removeProductFromCart },
});
const removeOneProductfromCartError = () => ({
  type: TYPES.GET_SHIPPING_SERVICES_RESET,
  payload: null,
});

export const createCartAction = (data, ArrayToRoute) => async (dispatch) => {
  console.log("checkdata", data);
  dispatch(createCartRequest());
  try {
    const res = await OrderController.createCartController(data, ArrayToRoute);
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
export const getShippingServices = () => async (dispatch) => {
  dispatch(getShippingServicesRequest());
  try {
    const res = await OrderController.getShippingServices();
    dispatch(getShippingServicesSuccess(res));
  } catch (error) {
    if (error?.statusCode === 204) {
      dispatch(getShippingServicesReset());
    } else {
      dispatch(getShippingServicesError(error.message));
    }
  }
};
export const removeOneProductfromCart =
  (cartId, cartProductId) => async (dispatch) => {
    dispatch(removeOneProductfromCartRequest());
    try {
      const res = await OrderController.removeOneProductfromCart(
        cartId,
        cartProductId
      );
      dispatch(removeOneProductfromCartSuccess(res));
      dispatch(getCart());
    } catch (error) {
      dispatch(removeOneProductfromCartError(error.message));
    }
  };
