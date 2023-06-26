import { NAVIGATION } from "@/constants";
import { strings } from "@/localization";
import { goBack, navigate } from "@/navigation/NavigationRef";
import {
  USER_URL,
  PRODUCT_URL,
  ApiProductInventory,
  ApiUserInventory,
  ORDER_URL,
  ApiOrderInventory,
  SUPPORT_URL,
  SupportInventory,
  ApiSupportInventory,
} from "@/Utils/APIinventory";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { HttpClient } from "./HttpClient";

export class SupportController {
  static async getFaqs(type) {
    return new Promise((resolve, reject) => {
      const endpoint = SUPPORT_URL + SupportInventory.faqs(type);
      HttpClient.get(endpoint)
        .then((response) => {
          console.log("success in gaq", response);

          resolve(response);
        })
        .catch((error) => {
          console.log("error in gaq", error);
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

  static async getSubjects(data) {
    return new Promise((resolve, reject) => {
      const params = new URLSearchParams(data).toString();
      const endpoint = `${ApiSupportInventory.subjectList}?${params} `;
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
          reject(new Error((strings.verify.error = error.msg)));
        });
    });
  }

  static async addNewTicket(data) {
    const getBody = (data) => {
      if (data.document_url === undefined && data.type === "refund") {
        return {
          subject_id: data.subject_id,
          email: data.email,
          name: data.name,
          notes: data.notes,
          type: data.type,
          order_id: data.order_id.toString(),
        };
      } else if (data.document_url !== undefined && data.type === "refund") {
        return {
          subject_id: data.subject_id,
          email: data.email,
          name: data.name,
          notes: data.notes,
          type: data.type,
          order_id: data.order_id.toString(),
          document_url: [{ url: data.document_url }],
        };
      } else if (data.document_url === undefined) {
        return {
          subject_id: data.subject_id,
          email: data.email,
          name: data.name,
          notes: data.notes,
          type: data.type,
        };
      } else {
        return {
          subject_id: data.subject_id,
          email: data.email,
          name: data.name,
          notes: data.notes,
          type: data.type,
          document_url: [{ url: data.document_url }],
        };
      }
    };

    return new Promise(async (resolve, reject) => {
      const endpoint = ApiSupportInventory.addTicket;
      const body = getBody(data);
      await HttpClient.post(endpoint, body)
        .then((response) => {
          if (
            response.msg === "support created successfully" ||
            response.status === 201
          ) {
            {
              data.type === "support"
                ? navigate(NAVIGATION.supportRequest)
                : goBack();
              //   alert("support")
              // : alert("refund");
            }
            Toast.show({
              text2: strings.successMessages.ticketSuccess,
              position: "bottom",
              type: "success_toast",
              visibilityTime: 1500,
            });
          }
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

  static async getSupportList() {
    return new Promise((resolve, reject) => {
      const endpoint = ApiSupportInventory.supportList;
      HttpClient.get(endpoint)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
