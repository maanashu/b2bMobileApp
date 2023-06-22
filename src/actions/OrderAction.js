import { OrderController } from "@/controllers/OrderController";
import { TYPES } from "@/Types/Types";
import { getWalletBalance } from "./WalletActions";
import { goBack, navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";

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

const getOrderListRequest = () => ({
  type: TYPES.GET_ORDER_LIST_REQUEST,
  payload: null,
});

const getOrderListSuccess = (getAllOrdersList) => ({
  type: TYPES.GET_ORDER_LIST_SUCCESS,
  payload: { getAllOrdersList },
});

const getOrderListError = (error) => ({
  type: TYPES.GET_ORDER_LIST_ERROR,
  payload: { error },
});
export const getOrderListReset = () => ({
  type: TYPES.GET_ORDER_LIST_RESET,
  payload: null,
});

const getOrderDetailsRequest = () => ({
  type: TYPES.GET_ORDER_DETAILS_REQUEST,
  payload: null,
});

const getOrderDetailsSuccess = (getOneOrderDetail) => ({
  type: TYPES.GET_ORDER_DETAILS_SUCCESS,
  payload: { getOneOrderDetail },
});

const getOrderDetailsError = (error) => ({
  type: TYPES.GET_ORDER_DETAILS_ERROR,
  payload: { error },
});

const changeOrderStatusRequest = () => ({
  type: TYPES.CHANGE_ORDER_STATUS_REQUEST,
  payload: null,
});

const changeOrderStatusSuccess = (changeOrderStatus) => ({
  type: TYPES.CHANGE_ORDER_STATUS_SUCCESS,
  payload: { changeOrderStatus },
});

const changeOrderStatusError = (error) => ({
  type: TYPES.CHANGE_ORDER_STATUS_ERROR,
  payload: { error },
});
const clearOrderStore = () => ({
  type: TYPES.CLEAR_ORDER_STORE,
  payload: null,
});

export const saveSubTotalAmount = (subTotalAmount) => ({
  type: TYPES.SAVE_SUBTOTAL_AMOUNT_SUCCESS,
  payload: { subTotalAmount },
});

export const logoutOrder = () => async (dispatch) => {
  try {
    await OrderController.logoutOrder();
  } finally {
    dispatch(clearOrderStore());
  }
};

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
  console.log("check data", JSON.stringify(data));
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
    return OrderController.removeOneProductfromCart(cartId, cartProductId)
      .then((res) => {
        dispatch(removeOneProductfromCartSuccess(res));
        dispatch(getCart());
        return res;
      })
      .catch((error) => {
        dispatch(removeOneProductfromCartError(error.message));
        throw error;
      });
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

// export const createOrder = (data) => async (dispatch) => {
//   dispatch(createOrderRequest());
//   try {
//     const res = await OrderController.createOrderController(data);
//     dispatch(createOrdertSuccess(res));
//     dispatch(emptyCart());
//     dispatch(getCart());
//   } catch (error) {
//     dispatch(createOrderError(error.message));
//   }
// };
export const createOrder = (data) => (dispatch) => {
  dispatch(createOrderRequest());
  return OrderController.createOrderController(data)
    .then((res) => {
      dispatch(createOrdertSuccess(res));
      dispatch(emptyCart());
      dispatch(getCart());
      dispatch(getWalletBalance());
      return res;
    })
    .catch((error) => {
      dispatch(createOrderError(error.message));
      throw error;
    });
};

export const getOrderList = (data) => async (dispatch) => {
  dispatch(getOrderListRequest());
  try {
    const res = await OrderController.getOrderList(data);
    dispatch(getOrderListSuccess(res?.payload));
  } catch (error) {
    if (error?.statusCode === 204) {
      dispatch(getOrderListReset());
    } else {
      dispatch(getOrderListError(error.message));
    }
  }
};

export const getOrderDetails = (id) => async (dispatch) => {
  dispatch(getOrderDetailsRequest());
  try {
    const res = await OrderController.getOrderDetails(id);
    dispatch(getOrderDetailsSuccess(res));
  } catch (error) {
    dispatch(getOrderDetailsError(error.message));
  }
};

export const changeOrderStatus = (id) => async (dispatch) => {
  dispatch(changeOrderStatusRequest());
  return OrderController.changeOrderStatus(id)
    .then((res) => {
      dispatch(changeOrderStatusSuccess(res));
      return res;
    })
    .catch((error) => {
      dispatch(changeOrderStatusError(error.message));
      throw error;
    });
};
