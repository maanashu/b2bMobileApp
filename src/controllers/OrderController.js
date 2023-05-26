import { NAVIGATION } from "@/constants";
import { navigate } from "@/navigation/NavigationRef";
import { getUser } from "@/selectors/UserSelectors";
import {
  ApiOrderInventory,
  ORDER_URL,
  PRODUCT_URL,
} from "@/Utils/APIinventory";
import axios from "axios";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { HttpClient } from "./HttpClient";
import { strings } from "@/localization";

export class OrderController {
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
            delivery_option: "3",
            app_name: "b2b",
          }
        : {
            seller_id: data.seller_id,
            supply_id: data.supply_id,
            supply_price_id: data.supply_price_id,
            product_id: data.product_id,
            service_id: data.service_id,
            qty: data.qty,
            delivery_option: "3",
            app_name: "b2b",
          };

      HttpClient.post(endpoint, body)
        .then((response) => {
          resolve(response);
          console.log("cart controller success====", response);
          navigate(NAVIGATION.checkout, { data: ArrayToRoute });
        })
        .catch((error) => {
          console.log("cart controller error====", error);
          console.log("body====", body);

          Toast.show({
            text2: error.msg,
            position: "bottom",
            type: "error_toast",
            visibilityTime: 1500,
          });
          reject(new Error((strings.verify.error = error.msg)));
        });
    });
  }

  static async getCart() {
    return new Promise((resolve, reject) => {
      const endpoint = ORDER_URL + ApiOrderInventory.getCart;
      HttpClient.get(endpoint)
        .then((response) => {
          resolve(response);
          // console.log("get cart sucess", response);
        })
        .catch((error) => {
          console.log("get cart controller error", error);
          reject(error);
          Toast.show({
            text2: error.msg,
            position: "bottom",
            type: "error_toast",
            visibilityTime: 1500,
          });

          reject(new Error((strings.validation.error = error.msg)));
        });
    });
  }
  static async getShippingServices() {
    return new Promise((resolve, reject) => {
      const endpoint = ORDER_URL + ApiOrderInventory.getShippingServices;
      HttpClient.get(endpoint)
        .then((response) => {
          resolve(response);
          console.log("get cart sucess", response);
        })
        .catch((error) => {
          console.log("get cart controller error", error);
          reject(error);
          Toast.show({
            text2: error.msg,
            position: "bottom",
            type: "error_toast",
            visibilityTime: 1500,
          });

          reject(new Error((strings.validation.error = error.msg)));
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

          reject(new Error((strings.validation.error = error.msg)));
        });
    });
  }
}
