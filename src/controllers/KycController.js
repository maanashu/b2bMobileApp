import { Toast } from "react-native-toast-message/lib/src/Toast";

import { NAVIGATION } from "@/constants";
import { strings } from "@/localization";
import { HttpClient } from "./HttpClient";
import { navigate } from "@/navigation/NavigationRef";
import { ApiWalletInventory } from "@/Utils/APIinventory";

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
            console.log("controller success");
          }
          resolve(response);
        })
        .catch((error) => {
          console.log("endpoint: " + endpoint);
          console.log("controller error");
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
    const endpoint = ApiWalletInventory.businessRegistration;
    const body = {
      address_type: data.address_type,
      address: data.address,
      city: data.city,
      state: data.business_registration_state,
      zip: data.zip,
      country: data.country,
      phone: data.phone,
      email: data.email,
      dob: data.dob,
      entity_name: data.entity_name,
      business_type: data.business_type,
      business_type_uuid: data.business_type_uuid,
      business_website: data.business_website,
      naics_code: "722",
      business_registration_state: data.business_registration_state,
      doing_business_as: data.doing_business_as,
      employer_identification_number: data.employer_identification_number,
    };
    await HttpClient.post(endpoint, body)
      .then((response) => {
        if (response?.msg === "business registered successfully") {
          navigate(NAVIGATION.checkReqKyc, { screen: "business" });
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
          console.log("kyc controller success", response);
        })
        .catch((error) => {
          console.log("kyc controller error", error);

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
          console.log("plaid controller success", response);
        })
        .catch((error) => {
          console.log("plaid controller error", error);

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
}
