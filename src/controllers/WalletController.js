import { NAVIGATION } from "@/constants";
import { navigate } from "@/navigation/NavigationRef";
import { getUser } from "@/selectors/UserSelectors";
import { ApiWalletInventory } from "@/Utils/APIinventory";
import axios from "axios";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { useSelector } from "react-redux";
import { HttpClient } from "./HttpClient";

export class WalletController {
  static async createWallet(data) {
    return new Promise(async (resolve, reject) => {
      const endpoint = ApiWalletInventory.createUser;
      const body = {
        type: data.type,
        first_name: data.first_name,
        last_name: data.last_name,
        address_type: "home",
        address: data.address,
        city: data.city,
        state: data.state,
        zip: data.zip,
        country: data.country,
        phone: data.phone,
        email: data.email,
        dob: data.dob,
        ssn: data.ssn,
      };
      HttpClient.post(endpoint, body)
        .then((response) => {
          // console.log("response====", response);
          if (response?.status_code === 201) {
            console.log("wallet controller sucess====", response);
            navigate(NAVIGATION.checkAndRequestKYC);
            resolve(response);
          } else {
            console.log("rewalletg controller error====", response?.msg);
            navigate(NAVIGATION.checkAndRequestKYC);

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
          console.log("reg error====", error);
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

  static async addWalletBalanceApi(amount, account) {
    return new Promise((resolve, reject) => {
      const endpoint = ApiWalletInventory.addBalance;
      const data = {
        amount: amount,
        account_name: account,
      };
      HttpClient.post(endpoint, data)
        .then((response) => {
          Toast.show({
            text2: response.msg,
            position: "bottom",
            type: "success_toast",
            visibilityTime: 2000,
          });
          resolve(response);
        })
        .catch((error) => {
          Toast.show({
            text2: error.msg,
            position: "bottom",
            type: "error_toast",
            visibilityTime: 2000,
          });
          reject(new Error(error.msg));
        });
    });
  }

  static async getPaymentMethods() {
    return new Promise((resolve, reject) => {
      const endpoint = ApiWalletInventory.getPaymentMethods;
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

  static async redeemMoney(data) {
    return new Promise((resolve, reject) => {
      const endpoint = ApiWalletInventory.redeemMoney;
      const body = {
        amount: data.amount,
        account_name: data.account_name,
      };
      HttpClient.post(endpoint, body)
        .then((response) => {
          if (
            response.msg ===
            "Transaction has officially settled, a process that takes about two business days to complete."
          ) {
            alert(response.msg);
          }
          resolve(response);
        })
        .catch((error) => {
          alert(error.msg);
          reject(new Error(error.msg));
        });
    });
  }

  static async checkBankBalance(data) {
    return new Promise((resolve, reject) => {
      const endpoint = ApiWalletInventory.getBankBalance;
      const body = {
        account_name: data,
      };
      HttpClient.post(endpoint, body)
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
          reject(new Error(error.msg));
        });
    });
  }

  static async acceptMoney(data) {
    return new Promise((resolve, reject) => {
      const endpoint = ApiWalletInventory.acceptMoney;
      const body = {
        transaction_id: data,
      };
      HttpClient.patch(endpoint, body)
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
          reject(new Error(error.msg));
        });
    });
  }

  static async rejectMoney(data, status) {
    return new Promise((resolve, reject) => {
      const endpoint = ApiWalletInventory.rejectMoney;
      const body = {
        transaction_id: data,
        status: status,
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
            visibilityTime: 2000,
          });
          reject(new Error(error.msg));
        });
    });
  }

  static async getWalletBalance() {
    return new Promise((resolve, reject) => {
      const endpoint = ApiWalletInventory.getBalance;
      HttpClient.get(endpoint)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(new Error(error.msg));
        });
    });
  }

  static async getTransactions() {
    return new Promise((resolve, reject) => {
      const endpoint = ApiWalletInventory.getTransactions + `?page=1&limit=10`;
      HttpClient.get(endpoint)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(new Error(error.msg));
        });
    });
  }

  static async getRequestTransactions() {
    return new Promise((resolve, reject) => {
      const endpoint =
        ApiWalletInventory.getTransactions + `?page=1&limit=10&is_request=true`;
      HttpClient.get(endpoint)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(new Error(error.msg));
        });
    });
  }

  static async getAllReceivers() {
    return new Promise((resolve, reject) => {
      const endpoint = ApiWalletInventory.getAllUsers + `?page=1&limit=10`;
      HttpClient.get(endpoint)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(new Error((strings.verify.error = error.msg)));
        });
    });
  }

  static async transferMoney(data) {
    return new Promise((resolve, reject) => {
      const endpoint = ApiWalletInventory.transfermoney;
      const body = {
        amount: data.amount,
        reciever_address: data.walletAddress,
      };
      HttpClient.post(endpoint, body)
        .then((response) => {
          if (response.msg === "Transfer success!") {
            Toast.show({
              text2: response.msg,
              position: "bottom",
              type: "success_toast",
              visibilityTime: 2000,
            });
          }
          resolve(response);
        })
        .catch((error) => {
          Toast.show({
            text2: error.msg,
            position: "bottom",
            type: "error_toast",
            visibilityTime: 2000,
          });
          reject(new Error(error.msg));
        });
    });
  }

  static async requestMoney(data) {
    return new Promise((resolve, reject) => {
      const endpoint = ApiWalletInventory.requestMoney;
      const body = {
        amount: data.amount,
        reciever_address: data.walletAddress,
      };
      HttpClient.post(endpoint, body)
        .then((response) => {
          if (response.msg === "Payment request sent success!") {
            Toast.show({
              text2: response.msg,
              position: "bottom",
              type: "success_toast",
              visibilityTime: 2000,
            });
          }
          resolve(response);
        })
        .catch((error) => {
          Toast.show({
            text2: error.msg,
            position: "bottom",
            type: "error_toast",
            visibilityTime: 2000,
          });
          reject(new Error(error.msg));
        });
    });
  }

  static async removeBankAccount(accountName, token) {
    return new Promise((resolve, reject) => {
      axios
        .delete(ApiWalletInventory.removeBankAccount, {
          headers: {
            Authorization: token,
          },
          data: {
            account_name: accountName,
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
