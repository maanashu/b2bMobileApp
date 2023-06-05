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

const createOrderRequest = () => ({
  type: TYPES.CREATE_ORDER_REQUEST,
  payload: null,
});
const createOrdertSuccess = (createOrder) => ({
  type: TYPES.CREATE_ORDER_SUCCESS,
  payload: { createOrder },
});
const createOrderError = (error) => ({
  type: TYPES.CREATE_ORDER_ERROR,
  payload: { error },
});

const emptyCartRequest = () => ({
  type: TYPES.EMPTY_CART_REQUEST,
  payload: null,
});
const emptyCartSuccess = (emptyCart) => ({
  type: TYPES.EMPTY_CART_SUCCESS,
  payload: { emptyCart },
});
const emptyCartError = (error) => ({
  type: TYPES.EMPTY_CART_ERROR,
  payload: { error },
});

export const getCart = () => async (dispatch) => {
  dispatch(getCartRequest());
  try {
    const res = await OrderController.getCart();
    dispatch(getCartSuccess(res));
  } catch (error) {
    if (error?.statusCode === 204) {
      dispatch(getCartReset());
    } else {
      dispatch(getCartError(error.message));
    }
  }
};
export const createCartAction = (data, ArrayToRoute) => async (dispatch) => {
  dispatch(createCartRequest());
  try {
    const res = await OrderController.createCartController(data, ArrayToRoute);
    dispatch(createCartSuccess(res));
    dispatch(getCart());
  } catch (error) {
    dispatch(createCartError(error.message));
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
export const emptyCart = () => async (dispatch) => {
  dispatch(emptyCartRequest());
  try {
    const res = await OrderController.emptyCart();
    dispatch(emptyCartSuccess(res));
  } catch (error) {
    dispatch(emptyCartError(error.message));
  }
};

export const createOrder = (data) => async (dispatch) => {
  dispatch(createOrderRequest());
  try {
    const res = await OrderController.createOrderController(data);
    dispatch(createOrdertSuccess(res));
    dispatch(emptyCart());
  } catch (error) {
    dispatch(createOrderError(error.message));
  }
};
