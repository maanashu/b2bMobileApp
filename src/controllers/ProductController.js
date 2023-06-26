import { strings } from "@/localization";
import {
  USER_URL,
  PRODUCT_URL,
  ApiProductInventory,
  ApiUserInventory,
} from "@/Utils/APIinventory";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { HttpClient } from "./HttpClient";
export class ProductController {
  static async getProduct(data) {
    return new Promise((resolve, reject) => {
      const params = new URLSearchParams(data).toString();
      const endpoint = `${ApiProductInventory.getProduct}?${params}`;

      HttpClient.get(endpoint)
        .then((response) => {
          // if (response.length === 0) {
          //   resolve([]);
          // } else {
          resolve(response);
          // }
        })
        .catch((error) => {
          reject(error);

          // Toast.show({
          //   text2: error.msg,
          //   position: "bottom",
          //   type: "error_toast",
          //   visibilityTime: 1500,
          // });
        });
    });
  }

  static async getProductDetail(productId, data) {
    return new Promise((resolve, reject) => {
      const params = new URLSearchParams(data).toString();
      const endpoint = `${ApiProductInventory.getProductDetails(
        productId
      )}?${params}`;
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
          reject(error);
        });
    });
  }

  static async getTrendingProducts(data) {
    return new Promise((resolve, reject) => {
      const params = new URLSearchParams(data).toString();
      const endpoint = `${ApiProductInventory.getTrendingProducts}?${params}`;

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
          reject(error);
        });
    });
  }

  static async getTrendingSellers() {
    return new Promise((resolve, reject) => {
      const endpoint = PRODUCT_URL + ApiProductInventory.getTrendingSellers;
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
          reject(new Error((strings.validation.error = error.msg)));
        });
    });
  }

  static async getCouponsWithCategoryId(data) {
    return new Promise((resolve, reject) => {
      const params = new URLSearchParams(data).toString();
      const endpoint = `${ApiProductInventory.getCouponsWithCategoryId}?${params}`;

      HttpClient.get(endpoint)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  static async getCoupons(data) {
    return new Promise((resolve, reject) => {
      const params = new URLSearchParams(data).toString();
      const endpoint = `${ApiProductInventory.getCoupons}?${params}`;

      HttpClient.get(endpoint)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  static async addCoupon(data) {
    return new Promise((resolve, reject) => {
      const endpoint = PRODUCT_URL + ApiProductInventory.verifyCoupon;
      const body = {
        ...data,
      };
      HttpClient.post(endpoint, body)
        .then((response) => {
          resolve(response);
          Toast.show({
            text2: "Coupon Applied",
            position: "bottom",
            type: "success_toast",
            visibilityTime: 1500,
          });
        })
        .catch((error) => {
          Toast.show({
            text2: error?.msg,
            position: "bottom",
            type: "error_toast",
            visibilityTime: 1500,
          });
        });
    });
  }

  static async getVariantId(values, id) {
    return new Promise((resolve, reject) => {
      const endpoint =
        PRODUCT_URL + ApiProductInventory.getSupplyVariant(values, id);

      HttpClient.get(endpoint)
        .then((response) => {
          resolve(response);
          Toast.show({
            text2: "Combination found",
            position: "bottom",
            type: "success_toast",
            visibilityTime: 1500,
          });
        })
        .catch((error) => {
          Toast.show({
            text2: "No combination found",
            position: "bottom",
            type: "error_toast",
            visibilityTime: 1500,
          });
          reject(error);
        });
    });
  }
  static async getCategoriesWithProducts(data) {
    return new Promise((resolve, reject) => {
      const params = new URLSearchParams(data).toString();
      const endpoint = `${
        PRODUCT_URL + ApiProductInventory.getCategoriesWithFewProducts
      }?${params}`;
      HttpClient.get(endpoint)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          // Toast.show({
          //   text2: "No product found",
          //   position: "bottom",
          //   type: "error_toast",
          //   visibilityTime: 1500,
          // });
          reject(error);
        });
    });
  }

  static async searchProductsSellers(data) {
    return new Promise((resolve, reject) => {
      const params = new URLSearchParams(data).toString();
      const endpoint = `${ApiProductInventory.searchProductsSellers}${params}`;
      HttpClient.get(endpoint)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          Toast.show({
            text2: error.msg,
            position: "bottom",
            type: "error_toast",
            visibilityTime: 2000,
          });
          reject(error);
        });
    });
  }

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
