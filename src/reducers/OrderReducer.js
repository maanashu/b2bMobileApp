import { TYPES } from "@/Types/Types";

const INITIALSTATE = {
  createCart: {},
  getCart: {},
  shippingServices: [],
  removeProductFromCart: {},
  createOrder: {},
  emptyCart: {},
  getAllOrdersList: [],
  getOneOrderDetail: {},
  subTotalAmount: {},
  changeOrderStatus: {},
  getBrandsProductsShops: {},
  getServiceCart: {},
};

export const orderReducer = (state = { INITIALSTATE }, { payload, type }) => {
  switch (type) {
    case TYPES.CLEAR_ORDER_STORE:
      return INITIALSTATE;

    case TYPES.CREATE_CART_SUCCESS:
      return {
        ...state,
        createCart: payload.createCart,
      };
    case TYPES.SAVE_SUBTOTAL_AMOUNT_SUCCESS:
      return {
        ...state,
        subTotalAmount: payload.subTotalAmount,
      };
    case TYPES.GET_CART_SUCCESS:
      return {
        ...state,
        getCart: payload.getCart.payload,
      };
    case TYPES.GET_SERVICE_CART_SUCCESS:
      return {
        ...state,
        getServiceCart: payload.getServiceCart.payload,
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
    case TYPES.GET_SERVICE_CART_RESET:
      return {
        ...state,
        getServiceCart: {},
      };

    case TYPES.CREATE_ORDER_SUCCESS:
      return {
        ...state,
        createOrder: payload.createOrder,
      };
    case TYPES.EMPTY_CART_SUCCESS:
      return {
        ...state,
        emptyCart: payload.emptyCart,
      };
    case TYPES.GET_ORDER_LIST_SUCCESS:
      return {
        ...state,
        getAllOrdersList: payload.getAllOrdersList?.data,
      };
    case TYPES.GET_ORDER_LIST_RESET:
      return {
        ...state,
        getAllOrdersList: [],
      };

    case TYPES.GET_ORDER_DETAILS_SUCCESS:
      return {
        ...state,
        getOneOrderDetail: payload.getOneOrderDetail.payload,
      };
    case TYPES.CHANGE_ORDER_STATUS_SUCCESS:
      return {
        ...state,
        changeOrderStatus: payload.changeOrderStatus,
      };
    case TYPES.BRANDS_PRODUCTS_SHOPS_SUCCESS:
      return {
        ...state,
        getBrandsProductsShops: payload.getBrandsProductsShops,
      };
    default:
      return state;
  }
};
