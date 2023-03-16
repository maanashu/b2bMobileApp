import { NAVIGATION } from "@/constants";
import { strings } from "@/localization";
import { navigate } from "@/navigation/NavigationRef";
import { ApiUserInventory, USER_URL } from "@/Utils/APIinventory";
import DeviceInfo from "react-native-device-info";
import Toast from "react-native-toast-message";
import { HttpClient } from "./HttpClient";
export class UserController {
  static async login(value, countryCode, phoneNumber) {
    return new Promise(async (resolve, reject) => {
      const endpoint = USER_URL + ApiUserInventory.login;
      const body = {
        phone_code: countryCode,
        phone_number: phoneNumber,
        password: value,
      };
      // const uniqueId = await DeviceInfo.getUniqueId();
      const uniqueId = await DeviceInfo.getUniqueId();
      HttpClient.post(endpoint, body, {
        headers: { "device-id": uniqueId },
      })
        .then((response) => {
          navigate(NAVIGATION.startOrder);
          resolve(response);
        })
        .catch((error) => {
          Toast.show({
            text2: error.msg,
            position: "bottom",
            type: "error_toast",
            visibilityTime: 2000,
          });
          reject(new Error((strings.login.loginError = error.msg)));
        });
    });
  }

  static async logout() {
    return new Promise((resolve) => {
      setTimeout(resolve, 500);
    });
  }

  static async sendOtp(phoneNumber, countryCode, flag) {
    return new Promise((resolve, reject) => {
      const endpoint = USER_URL + ApiUserInventory.sendOtp;

      const body = {
        phone_code: countryCode,
        phone_no: phoneNumber,
      };

      HttpClient.post(endpoint, body)
        .then((response) => {
          if (response?.payload?.is_phone_exits) {
            console.log("User already Registered", response);
            navigate(NAVIGATION.loginMethod, { route: "registered" });
          } else {
            console.log("New User", response.payload.id);
            navigate(NAVIGATION.verify, { id: response.payload.id });
          }

          resolve(response);
        })
        .catch((error) => {
          console.log("catching error", error);
        });
    });
  }
  static async verifyOtp(id, value, key) {
    return new Promise((resolve, reject) => {
      const endpoint = USER_URL + ApiUserInventory.verifyPhone;

      const body = {
        id: id,
        otp: value,
      };
      HttpClient.post(endpoint, body)
        .then((response) => {
          if (response.status_code === 200) {
            console.log("api success", response);

            navigate(NAVIGATION.personalInformation);
          } else {
            console.log("api failed", response);
          }
          resolve(response);
        })
        .catch((error) => {
          console.log("catching error", error);
        });
    });
  }

  static async register(data) {
    return new Promise(async (resolve, reject) => {
      const endpoint = USER_URL + ApiUserInventory.userRegister;
      const body = {
        username: data.username,
        firstname: data.firstname,
        lastname: data.lastname,
        dob: data.dob,
        security_pin: data.pin,
        confirm_security_pin: data.confirmPin,
        phone_code: data.code,
        phone_no: data.phone,
      };
      // console.log("endpoint====", endpoint);
      // console.log("body====", body);
      // const uniqueId = await DeviceInfo.getUniqueId();
      const uniqueId = await DeviceInfo.getUniqueId();
      HttpClient.post(endpoint, body, {
        headers: { "device-id": uniqueId },
      })
        .then((response) => {
          // console.log("response====", response);
          if (response?.status_code === 201) {
            console.log("reg controller sucess====", response);
            navigate(NAVIGATION.splash);
            resolve(response);
          } else {
            console.log("reg controller error====", response?.msg);
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

  static async deviceLogin() {
    return new Promise(async (resolve, reject) => {
      const endpoint = USER_URL + ApiUserInventory.deviceLogin;
      const uniqueId = await DeviceInfo.getUniqueId();
      const body = {
        device: uniqueId,
      };
      HttpClient.post(endpoint, body)
        .then((response) => {
          resolve(response);
          navigate(NAVIGATION.startOrder);
        })
        .catch((error) => {
          console.log("controller error", error);

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

  static async getNearSellers(data) {
    return new Promise((resolve, reject) => {
      const params = new URLSearchParams(data).toString();
      const endpoint = `${USER_URL}${ApiUserInventory.nearMeSellers}?${params}`;
      HttpClient.get(endpoint)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
          // Toast.show({
          //   text2: error.msg,
          //   position: "bottom",
          //   type: "error_toast",
          //   visibilityTime: 1500,
          // });
          // reject(new Error((strings.validation.error = error.msg)));
        });
    });
  }

  static async getSettings() {
    return new Promise((resolve, reject) => {
      const endpoint = USER_URL + ApiUserInventory.settings;
      HttpClient.get(endpoint)
        .then((response) => {
          resolve(response);
          console.log("controller success", response);
        })
        .catch((error) => {
          console.log("controller error", error);

          reject(error);
          // Toast.show({
          //   text2: error.msg,
          //   position: "bottom",
          //   type: "error_toast",
          //   visibilityTime: 1500,
          // });
          // reject(new Error((strings.validation.error = error.msg)));
        });
    });
  }
}
