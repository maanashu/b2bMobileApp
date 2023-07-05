import { NAVIGATION } from "@/constants";
import { navigate } from "@/navigation/NavigationRef";
import { ApiOrderInventory, ORDER_URL } from "@/Utils/APIinventory";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { HttpClient } from "./HttpClient";
import { strings } from "@/localization";

export class OrderController {
  static async logoutOrder() {
    return new Promise((resolve) => {
      setTimeout(resolve, 500);
    });
  }

  static async createCartController(data, ArrayToRoute) {
    return new Promise(async (resolve, reject) => {
      const endpoint = ORDER_URL + ApiOrderInventory.createNewCart;
      const body = data.supply_variant_id
        ? {
            seller_id: data.seller_id,
            supply_id: data.supply_id,
            supply_price_id: data.supply_price_id,
            product_id: data.product_id,
            service_id: data.service_id,
            supply_variant_id: data.supply_variant_id,
            qty: data.qty,
            delivery_option: "4",
            app_name: "b2b",
          }
        : {
            seller_id: data.seller_id,
            supply_id: data.supply_id,
            supply_price_id: data.supply_price_id,
            product_id: data.product_id,
            service_id: data.service_id,
            qty: data.qty,
            delivery_option: "4",
            app_name: "b2b",
          };

      HttpClient.post(endpoint, body)
        .then((response) => {
          resolve(response);
          navigate(NAVIGATION.checkout, { data: ArrayToRoute });
        })
        .catch((error) => {
          Toast.show({
            text2: error.msg,
            position: "bottom",
            type: "error_toast",
            visibilityTime: 1500,
          });
          reject(error);
        });
    });
  }

  static async getCart() {
    return new Promise((resolve, reject) => {
      const endpoint = ORDER_URL + ApiOrderInventory.getCart;
      HttpClient.get(endpoint)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  static async getShippingServices() {
    return new Promise((resolve, reject) => {
      const endpoint = ORDER_URL + ApiOrderInventory.getShippingServices;
      HttpClient.get(endpoint)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          Toast.show({
            text2: error.msg,
            position: "bottom",
            type: "error_toast",
            visibilityTime: 1500,
          });
          reject(error);
        });
    });
  }
  static async removeOneProductfromCart(cartId, cartProductId) {
    return new Promise((resolve, reject) => {
      const endpoint =
        ORDER_URL + ApiOrderInventory.removeOneProduct(cartId, cartProductId);
      HttpClient.delete(endpoint)
        .then((response) => {
          resolve(response);
          Toast.show({
            text2: response.msg,
            position: "bottom",
            type: "success_toast",
            visibilityTime: 1500,
          });
        })
        .catch((error) => {
          reject(error);
          Toast.show({
            text2: error.msg,
            position: "bottom",
            type: "error_toast",
            visibilityTime: 1500,
          });

          reject(error);
        });
    });
  }

  static async emptyCart() {
    return new Promise((resolve, reject) => {
      const endpoint = ORDER_URL + ApiOrderInventory.emptyCart;
      HttpClient.delete(endpoint)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  static async createOrderController(data) {
    return new Promise(async (resolve, reject) => {
      const endpoint = ORDER_URL + ApiOrderInventory.createOrder;
      const body = {
        cart_id: data.Cart_id,
        address_id: data.Address_id,
        address: data.Address,
        city: data.City,
        state: data.State,
        zip: data.Zip_Code,
        country: data.Country,
        delivery_option: data.delivery_option,
        shipping_service_id: data.shipping_service_id,
        mode_of_payment: data.mode_of_payment,
        coordinates: data.Coordinates,
        ...(data?.coupon_code && { coupon_code: data?.coupon_code }),
      };

      HttpClient.post(endpoint, body)
        .then((response) => {
          Toast.show({
            text2: response.msg,
            position: "bottom",
            type: "success_toast",
            visibilityTime: 1500,
          });
          resolve(response);
        })
        .catch((error) => {
          Toast.show({
            text2: error.msg,
            position: "bottom",
            type: "error_toast",
            visibilityTime: 1500,
          });
          reject(error);
        });
    });
  }

  static async getOrderList(data) {
    return new Promise((resolve, reject) => {
      const params = new URLSearchParams(data).toString();
      const endpoint = `${
        ORDER_URL + ApiOrderInventory.getOrderList
      }?${params}`;
      HttpClient.get(endpoint)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  static async getOrderDetails(id) {
    return new Promise((resolve, reject) => {
      const endpoint = ORDER_URL + ApiOrderInventory.getOrderDetails(id);
      HttpClient.get(endpoint)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
          Toast.show({
            text2: error.msg,
            position: "bottom",
            type: "error_toast",
            visibilityTime: 1500,
          });

          reject(error);
        });
    });
  }
  static async changeOrderStatus(id) {
    return new Promise((resolve, reject) => {
      const endpoint = ORDER_URL + ApiOrderInventory.changeStatus(id);
      const body = {
        status: 1,
      };
      HttpClient.put(endpoint, body)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          Toast.show({
            text2: error.msg,
            position: "bottom",
            type: "error_toast",
            visibilityTime: 1500,
          });

          reject(error);
        });
    });
  }

  static async getBrandsProductsShops(data) {
    return new Promise((resolve, reject) => {
      const params = new URLSearchParams(data).toString();
      const endpoint =
        ORDER_URL + `${ApiOrderInventory.getBrandsProductsShops}${params}`;
      HttpClient.get(endpoint)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
          Toast.show({
            text2: error.msg,
            position: "bottom",
            type: "error_toast",
            visibilityTime: 1500,
          });

          reject(error);
        });
    });
  }
}
