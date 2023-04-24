import { NAVIGATION } from "@/constants";
import { navigate } from "@/navigation/NavigationRef";
import { getUser } from "@/selectors/UserSelectors";
import { ApiOrderInventory, ORDER_URL } from "@/Utils/APIinventory";
import axios from "axios";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { HttpClient } from "./HttpClient";

export class OrderController {
  static async createCartController(data) {
    return new Promise(async (resolve, reject) => {
      const endpoint = ORDER_URL + ApiOrderInventory.createNewCart;
      const body = {
        seller_id: data.seller_id,
        supply_id: data.supply_id,
        supply_price_id: data.supply_price_id,
        supply_variant_id: data.supply_variant_id,
        product_id: data,
        product_id,
        service_id: data.service_id,
        qty: data.qty,
        delivery_option: "3",
        app_name: "b2b",
      };
      // console.log("endpoint====", endpoint);
      // console.log("body====", body);
      HttpClient.post(endpoint, body)
        .then((response) => {
          resolve(response);
          console.log("cart controller success====", response);
        })
        .catch((error) => {
          console.log("cart controller error====", error);
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
}
