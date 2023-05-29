import { NAVIGATION } from "@/constants";
import { strings } from "@/localization";
import { navigate } from "@/navigation/NavigationRef";
import {
  ApiUserInventory,
  ApiWalletInventory,
  USER_URL,
} from "@/Utils/APIinventory";
import DeviceInfo from "react-native-device-info";
import Toast from "react-native-toast-message";
import { HttpClient } from "./HttpClient";

export class UserController {
  static async login(value, countryCode, phoneNumber, screenName) {
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
          if (screenName) {
            navigate(screenName);
          } else {
            navigate(NAVIGATION.home);
          }
          // navigate(NAVIGATION.home);
          // navigation.reset({
          //   index: 0,
          //   actions: [navigation.navigate(NAVIGATION.startOrder)],
          // });
          resolve(response);
        })
        .catch((error) => {
          console.log("error in login ", JSON.stringify(error));

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
            navigate(NAVIGATION.enterPin, { route: "registered" });
          } else {
            navigate(NAVIGATION.verify, { id: response.payload.id });
          }

          resolve(response);
        })
        .catch((error) => {
          reject(new Error((strings.verify.error = error.msg)));
        });
    });
  }

  static async sendEmailOtp(email) {
    return new Promise((resolve, reject) => {
      const endpoint = USER_URL + ApiUserInventory.sendEmailOtp;

      const body = {
        type: "email",
        email: email,
      };

      HttpClient.post(endpoint, body)
        .then((response) => {
          resolve(response);
          if (response?.payload?.is_phone_exits) {
            Toast.show({
              text2: "Email already registered",
              position: "bottom",
              type: "error_toast",
              visibilityTime: 1500,
            });
          } else {
            Toast.show({
              text2: "Email verified",
              position: "bottom",
              type: "success_toast",
              visibilityTime: 1500,
            });
          }
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
            resolve(response);

            navigate(NAVIGATION.register);
          } else {
          }
          resolve(response);
        })
        .catch((error) => {
          reject(new Error((strings.verify.error = error.msg)));
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
        email: data.email,
        dob: data.dob,
        security_pin: data.pin,
        confirm_security_pin: data.confirmPin,
        phone_code: data.code,
        phone_no: data.phone,
      };

      const uniqueId = await DeviceInfo.getUniqueId();
      HttpClient.post(endpoint, body, {
        headers: { "device-id": uniqueId },
      })
        .then((response) => {
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
          navigate(NAVIGATION.productInquiry);
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
  static async getWalletUserProfile(uuid) {
    return new Promise((resolve, reject) => {
      const endpoint = ApiWalletInventory.getUserByUuid + `${uuid}`;
      HttpClient.get(endpoint)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(new Error((strings.verify.error = error.msg)));
        });
    });
  }

  static async userLocation(data) {
    return new Promise(async (resolve, reject) => {
      const endpoint = USER_URL + ApiUserInventory.userAddress;
      const body = {
        place_id: data.place_id,
        custom_address: data.custom_address,
        address_type: data.address_type,
        city: data.city,
        district: data.district,
        country: data.country,
        state: data.state,
        // address_line_1: data.address_line_1,
        // address_line_2: data.address_line_2,
        postal_code: data.postal_code,
        formatted_address: data.formatted_address,
        latitude: data.latitude,
        longitude: data.longitude,
      };
      HttpClient.post(endpoint, body)
        .then((response) => {
          resolve(response);
          navigate(NAVIGATION.addresses);
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

  static async getUserLocation() {
    return new Promise((resolve, reject) => {
      const endpoint = USER_URL + ApiUserInventory.getUserLocationsEP;
      HttpClient.get(endpoint)
        .then((response) => {
          resolve(response.payload);
        })
        .catch((error) => {
          if (error.statusCode === 204) {
            Toast.show({
              text2: "You don't have any saved addresses",
              position: "bottom",
              type: "error_toast",
              visibilityTime: 1500,
            });
          } else
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
  static async getSellers(data) {
    return new Promise((resolve, reject) => {
      const params = new URLSearchParams(data).toString();
      const endpoint = `${USER_URL + ApiUserInventory.getSellers}?${params}`;
      HttpClient.get(endpoint)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(new Error((strings.validation.error = error.msg)));
        });
    });
  }
  static async getUserProfile(userUuid) {
    return new Promise((resolve, reject) => {
      const endpoint = USER_URL + ApiUserInventory.getUserProfile(userUuid);
      HttpClient.get(endpoint)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(new Error((strings.validation.error = error.msg)));
        });
    });
  }

  static async patchCurrentAddress(id, data) {
    return new Promise((resolve, reject) => {
      const endpoint = `${USER_URL}${ApiUserInventory.changeCurrentAddress}${id}`;
      const body = {
        place_id: data.place_id,
        custom_address: data.custom_address,
        address_type: data.address_type,
        city: data.city,
        district: data.district,
        country: data.country,
        state: data.state,
        postal_code: data.postal_code,
        formatted_address: data.formatted_address,
        latitude: data.latitude,
        longitude: data.longitude,
      };
      HttpClient.put(endpoint, body)
        .then((response) => {
          resolve(response);
          navigate(NAVIGATION.addresses);
        })
        .catch((error) => {
          Toast.show({
            text2: error.msg,
            position: "bottom",
            type: "error_toast",
            visibilityTime: 2000,
          });
          reject(new Error((strings.verify.error = error.msg)));
        });
    });
  }
}
