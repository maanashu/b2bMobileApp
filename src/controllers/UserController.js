import { NAVIGATION } from "@/constants";
import { strings } from "@/localization";
import { navigate } from "@/navigation/NavigationRef";
import { ApiUserInventory, USER_URL } from "@/Utils/APIinventory";
import Toast from "react-native-toast-message";
import { HttpClient } from "./HttpClient";

export class UserController {
  static async login(username, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username && password) {
          resolve({ username });
        } else {
          reject(new Error(strings.login.invalidCredentials));
        }
      }, 500);
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
            navigate(NAVIGATION.enterPin, { route: "registered" });
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

            // navigate(NAVIGATION.personalInformation);
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
      const endpoint = ApiUserInventory.register;
      const body = {
        username: data.username,
        firstname: data.firstname,
        lastname: data.lastname,
        security_pin: data.pin,
        confirm_security_pin: data.confirmPin,
        role_id: 7,
        phone_code: data.code,
        phone_no: data.phone,
      };
      console.log("endpoint====", endpoint);
      console.log("body====", body);
      const uniqueId = await DeviceInfo.getUniqueId();
      HttpClient.post(endpoint, body, {
        headers: { "device-id": uniqueId },
      })
        .then((response) => {
          console.log("response====", response);
          if (response?.status_code === 201) {
            navigate(NAVIGATION.personalInformation);
            resolve(response);
          } else {
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
          console.log("error====", error);
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
