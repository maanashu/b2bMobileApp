import { Toast } from "react-native-toast-message/lib/src/Toast";

import { NAVIGATION } from "@/constants";
import { strings } from "@/localization";
import { HttpClient } from "./HttpClient";
import { navigate } from "@/navigation/NavigationRef";
import { ApiWalletInventory } from "@/Utils/APIinventory";
import axios from "axios";

export class KycController {
  static async personalInformation(data) {
    return new Promise(async (resolve, reject) => {
      const endpoint = ApiWalletInventory.createUser;
      const body = data.appartment
        ? {
            first_name: data.first_name,
            last_name: data.last_name,
            address_type: "home",
            address: data.address,
            city: data.city,
            state: data.stateCode,
            zip: data.zip,
            country: data.countryCode,
            phone: data.phone,
            email: data.email,
            dob: data.dob,
            ssn: data.ssn,
            type: data.type,
          }
        : {
            first_name: data.first_name,
            last_name: data.last_name,
            address_type: "home",
            address: data.address,
            city: data.city,
            state: data.stateCode,
            zip: data.zip,
            country: data.countryCode,
            phone: data.phone,
            email: data.email,
            dob: data.dob,
            ssn: data.ssn,
            type: data.type,
          };
      await HttpClient.post(endpoint, body)
        .then((response) => {
          if (response?.msg === "wallet created successfully") {
            // navigate(NAVIGATION.checkReqKyc, { screen: "personal" });
          }
          resolve(response);
        })
        .catch((error) => {
          // Toast.show({
          //   text2: error.payload,
          //   position: "bottom",
          //   type: "error_toast",
          //   visibilityTime: 2000,
          // });
          reject(error);
        });
    });
  }

  static async getBusinessType() {
    return new Promise((resolve, reject) => {
      const endpoint = ApiWalletInventory.businessTypes;
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
          reject(new Error((strings.verify.error = error.msg)));
        });
    });
  }

  static async getNaicsCode() {
    return new Promise((resolve, reject) => {
      const endpoint = ApiWalletInventory.naicsCode;
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
          reject(new Error((strings.verify.error = error.msg)));
        });
    });
  }

  static async businessRegistration(data) {
    return new Promise((resolve, reject) => {
      const endpoint = ApiWalletInventory.businessRegistrationURL;
      const finalData = { ...data, naics_code: "722" };
      HttpClient.post(endpoint, finalData)
        .then((response) => {
          // alert(JSON.stringify(response));
          resolve(response);
          if (response?.msg === "business registered successfully") {
            navigate(NAVIGATION.checkAndRequestKYC, { screen: "business" });
          }
        })
        .catch((error) => {
          // Toast.show({
          //   text2: error.payload,
          //   position: "bottom",
          //   type: "error_toast",
          //   visibilityTime: 2000,
          // });
        });
    });
  }

  static async requestBusinessKyc() {
    return new Promise((resolve, reject) => {
      const endpoint = ApiWalletInventory.requestBusinessKyc;
      HttpClient.get(endpoint)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(new Error((strings.verify.error = error.msg)));
        });
    });
  }

  static async checkBusinessKyc() {
    return new Promise((resolve, reject) => {
      const endpoint = ApiWalletInventory.checkBusinessKyc;
      HttpClient.get(endpoint)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(new Error((strings.verify.error = error.msg)));
        });
    });
  }

  static async requestKyc() {
    return new Promise((resolve, reject) => {
      const endpoint = ApiWalletInventory.request_kyc;
      HttpClient.get(endpoint)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          // Toast.show({
          //   text2: error.msg,
          //   position: "bottom",
          //   type: "error_toast",
          //   visibilityTime: 2000,
          // });
          reject(error.msg);
        });
    });
  }

  static async checkKyc() {
    return new Promise((resolve, reject) => {
      const endpoint = ApiWalletInventory.check_kyc;
      HttpClient.get(endpoint)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(new Error((strings.verify.error = error.msg)));
        });
    });
  }

  static async getDocumentTypes() {
    return new Promise((resolve, reject) => {
      const endpoint = ApiWalletInventory.docTypes + `?page=1&limit=100`;
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
          reject(new Error((strings.verify.error = error.msg)));
        });
    });
  }

  static async documentsUpload(data) {
    return new Promise((resolve, reject) => {
      const endpoint = ApiWalletInventory.docUpload;
      const body = {
        document_type: data.document_type,
        document_1: data.document_1,
        document_2: data.document_2,
      };
      HttpClient.post(endpoint, body)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  static async businessDocumentUpload(data) {
    return new Promise((resolve, reject) => {
      const endpoint = ApiWalletInventory.businessDocs;
      const body = {
        document_type: data.document_type,
        document_1: data.document_1,
        document_2: data.document_2,
      };
      HttpClient.post(endpoint, body)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  static async getPlaidToken() {
    return new Promise((resolve, reject) => {
      const endpoint = ApiWalletInventory.getToken;
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
          reject(new Error((strings.verify.error = error.msg)));
        });
    });
  }

  static async linkBankAccount(plaidToken) {
    return new Promise((resolve, reject) => {
      const endpoint = ApiWalletInventory.linkBankAccount;
      const body = {
        plaid_public_token: plaidToken,
      };
      HttpClient.post(endpoint, body)
        .then((response) => {
          if (response?.msg === "Linked bank account!") {
            Toast.show({
              type: "success_toast",
              text2: response?.msg,
              position: "bottom",
              visibilityTime: 1500,
            });
          }
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  static async getBankAccounts() {
    return new Promise((resolve, reject) => {
      const endpoint = ApiWalletInventory.getBankAccounts;
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

  static async deleteBankAccounts(data) {
    return new Promise((resolve, reject) => {
      axios
        .delete(ApiWalletInventory.removeBankAccount, {
          headers: {
            Authorization: data.token,
            "app-name": "b2b",
          },
          data: {
            account_name: data.account_name,
          },
        })
        .then(function (response) {
          resolve(response);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }
}
