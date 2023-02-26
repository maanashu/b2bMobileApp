import { strings } from "@/localization";
import {
  USER_URL,
  PRODUCT_URL,
  ApiProductInventory,
  ApiUserInventory,
  ORDER_URL,
  ApiOrderInventory,
  CATEGORY_URL,
} from "@/Utils/APIinventory";
import { emptyListDataResponseTemplate } from "@/Utils/EmptyResponseTemplates";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { HttpClient } from "./HttpClient";
export class CategoryController {
  static async getCategory(data) {
    return new Promise((resolve, reject) => {
      const params = new URLSearchParams(data).toString();
      const endpoint = `${ApiProductInventory.getCategory}?${params}`;
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
          reject(new Error((strings.valiadtion.error = error.msg)));
        });
    });
  }

  static async getSubCategory(categoryID) {
    return new Promise((resolve, reject) => {
      const endpoint =
        PRODUCT_URL + ApiProductInventory.getSubCategory(categoryID);
      HttpClient.get(endpoint)
        .then((response) => {
          resolve(response);

          // console.log(
          //   "checking controller response-->",
          //   JSON.stringify(response)
          // );
        })
        .catch((error) => {
          Toast.show({
            text2: error.msg,
            position: "bottom",
            type: "error_toast",
            visibilityTime: 1500,
          });
          reject(new Error((strings.valiadtion.error = error.msg)));
        });
    });
  }

  static async getBrands(categoryid) {
    return new Promise((resolve, reject) => {
      const endpoint = PRODUCT_URL + ApiProductInventory.getBrands(categoryid);
      HttpClient.get(endpoint)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          // Toast.show({
          //   text2: error.msg,
          //   position: "bottom",
          //   type: "error_toast",
          //   visibilityTime: 1500,
          // });
          reject(new Error((strings.valiadtion.error = error.msg)));
        });
    });
  }
  // static async getSubCategory(selectedId) {
  //   return new Promise((resolve, reject) => {
  //     const endpoint =
  //       PRODUCT_URL +
  //       ApiProductInventory.getSubCategory +
  //       `?category_id=` +
  //       `${selectedId}`;
  //     HttpClient.get(endpoint)
  //       .then((response) => {
  //         if (response === "") {
  //           resolve([]);
  //         }
  //         resolve(response);
  //       })
  //       .catch((error) => {
  //         Toast.show({
  //           text2: error.msg,
  //           position: "bottom",
  //           type: "error_toast",
  //           visibilityTime: 1500,
  //         });
  //         reject(new Error((strings.valiadtion.error = error.msg)));
  //       });
  //   });
  // }
  // static async getBrand(selectedId) {
  //   return new Promise((resolve, reject) => {
  //     const endpoint =
  //       PRODUCT_URL +
  //       ApiProductInventory.getBrand +
  //       `?page=1&limit=10&category_id=` +
  //       `${selectedId}`;
  //     HttpClient.get(endpoint)
  //       .then((response) => {
  //         if (response.status === 204) {
  //           resolve([]);
  //         }
  //         resolve(response);
  //       })
  //       .catch((error) => {
  //         Toast.show({
  //           text2: error.msg,
  //           position: "bottom",
  //           type: "error_toast",
  //           visibilityTime: 1500,
  //         });
  //         reject(new Error((strings.valiadtion.error = error.msg)));
  //       });
  //   });
  // }
  // static async getProduct(
  //   selectedId,
  //   subSelectedId,
  //   brandSelectedId,
  //   sellerID
  // ) {
  //   const urlAccCat = (
  //     selectedId,
  //     subSelectedId,
  //     brandSelectedId,
  //     sellerID
  //   ) => {
  //     if (selectedId && sellerID && !subSelectedId && !brandSelectedId) {
  //       return (
  //         PRODUCT_URL +
  //         ApiProductInventory.getProduct +
  //         `/${sellerID}?page=1&limit=10&category_id=${selectedId}`
  //       );
  //     } else if (selectedId && subSelectedId && sellerID && !brandSelectedId) {
  //       return (
  //         PRODUCT_URL +
  //         ApiProductInventory.getProduct +
  //         `/${sellerID}?page=1&limit=10&category_id=${selectedId}&sub_category_id=${subSelectedId}`
  //       );
  //     } else if (selectedId && subSelectedId && brandSelectedId && sellerID) {
  //       return (
  //         PRODUCT_URL +
  //         ApiProductInventory.getProduct +
  //         `/${sellerID}?page=1&limit=10&category_id=${selectedId}&sub_category_id=${subSelectedId}&brand_id=${brandSelectedId}`
  //       );
  //     }
  //   };
  //   return new Promise((resolve, reject) => {
  //     const endpoint = urlAccCat(
  //       selectedId,
  //       subSelectedId,
  //       brandSelectedId,
  //       sellerID
  //     );
  //     HttpClient.get(endpoint)
  //       .then((response) => {
  //         if (response.status === 204) {
  //           console.log("no content");
  //           resolve([]);
  //         }
  //         resolve(response);
  //       })
  //       .catch((error) => {
  //         Toast.show({
  //           text2: error.msg,
  //           position: "bottom",
  //           type: "error_toast",
  //           visibilityTime: 1500,
  //         });
  //         reject(new Error((strings.valiadtion.error = error.msg)));
  //       });
  //   });
  // }
  // static async getSearchProduct(search, sellerID) {
  //   return new Promise((resolve, reject) => {
  //     const endpoint =
  //       PRODUCT_URL +
  //       ApiProductInventory.getProduct +
  //       `/${sellerID}?page=1&limit=10&search=${search}`;
  //     HttpClient.get(endpoint)
  //       .then((response) => {
  //         if (response.status === 204) {
  //           resolve([]);
  //         }
  //         resolve(response);
  //       })
  //       .catch((error) => {
  //         Toast.show({
  //           text2: error.msg,
  //           position: "bottom",
  //           type: "error_toast",
  //           visibilityTime: 1500,
  //         });
  //         reject(new Error((strings.valiadtion.error = error.msg)));
  //       });
  //   });
  // }
}
