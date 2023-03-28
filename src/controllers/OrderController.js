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
        product_id: data.product_id,
        service_id: data.service_id,
        qty: data.qty,
        attribute_ids: data.attribute_ids,
        attribute_value_ids: data.attribute_value_ids,
        service_type: "pickup",
      };
      // console.log("endpoint====", endpoint);
      // console.log("body====", body);
      HttpClient.post(endpoint, body, {
        headers: { "device-id": uniqueId },
      })
        .then((response) => {
          if (response?.status_code === 201) {
            console.log("create cart controller sucess====", response);
            resolve(response);
          } else {
            console.log("create cart response error====", response?.msg);
            Toast.show({
              text2: response.msg,
              position: "bottom",
              type: "error_toast",
              visibilityTime: 1500,
            });
          }
          return;
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
