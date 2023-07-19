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
import axios from "axios";

export class UserController {
  static async login(value, countryCode, phoneNumber, screenName, token) {
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
        headers: { "device-id": uniqueId, "fcm-token": token },
      })
        .then((response) => {
          // if (screenName) {
          //   navigate(screenName);
          // } else {
          //   navigate(NAVIGATION.home);
          // }
          // navigate(NAVIGATION.home);
          // navigation.reset({
          //   index: 0,
          //   actions: [navigation.navigate(NAVIGATION.startOrder)],
          // });
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
            // navigate(NAVIGATION.enterPin, { route: "registered" });
          } else {
            Toast.show({
              position: "bottom",
              type: "success_toast",
              text2: strings.validation.otpSent,
              visibilityTime: 2000,
            });

            // navigate(NAVIGATION.verify, { id: response.payload.id });
          }

          resolve(response);
        })
        .catch((error) => {
          reject(error);
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
          if (response?.msg == "Email already exist") {
            Toast.show({
              text2: "Email already registered",
              position: "bottom",
              type: "error_toast",
              visibilityTime: 1500,
            });
          } else {
            Toast.show({
              text2: "Otp sent successfully",
              position: "bottom",
              type: "success_toast",
              visibilityTime: 1500,
            });
          }
        })
        .catch((error) => {
          if (error.msg === "Email already exist") {
            alert("Email already registered");
          }
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
  static async verifyOtp(id, value, navigation) {
    return new Promise((resolve, reject) => {
      const endpoint = USER_URL + ApiUserInventory.verifyPhone;

      const body = {
        id: id,
        otp: value,
      };
      HttpClient.post(endpoint, body)
        .then((response) => {
          // if (response.status_code === 200) {
          //   resolve(response);
          //   navigation.reset({
          //     index: 0,
          //     routes: [{ name: NAVIGATION.register }],
          //   });
          // } else {
          // }
          resolve(response);
        })
        .catch((error) => {
          if (error?.msg == "otp not matched") {
            Toast.show({
              text2: "Please enter valid OTP",
              position: "bottom",
              type: "error_toast",
              visibilityTime: 1500,
            });
          } else {
            Toast.show({
              text2: error.msg,
              position: "bottom",
              type: "error_toast",
              visibilityTime: 1500,
            });
          }
          reject(error);
        });
    });
  }

  static async register(data, token, navigation) {
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
        headers: { "device-id": uniqueId, "fcm-token": token },
      })
        .then((response) => {
          // if (response?.status_code === 201) {
          //   navigation.reset({
          //     index: 0,
          //     routes: [{ name: NAVIGATION.personalInformation }],
          //   });
          //   resolve(response);
          // } else {
          //   Toast.show({
          //     text2: response.msg,
          //     position: "bottom",
          //     type: "error_toast",
          //     visibilityTime: 1500,
          //   });
          // }
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
  static async deviceRegister(uniqueId) {
    return new Promise(async (resolve, reject) => {
      const endpoint = ApiUserInventory.deviceRegister;
      const body = {
        device_id: uniqueId,
        app_name: "b2b",
      };
      HttpClient.post(endpoint, body)
        .then((response) => {
          resolve(response);
          Toast.show({
            text2: "Biometric Registered",
            position: "bottom",
            type: "success_toast",
            visibilityTime: 2000,
          });
        })
        .catch((error) => {
          if (error.msg === "biometric_off") {
            alert(
              "Please login with PIN and enable biometric authentication from your application"
            );
          } else {
            alert(error.msg);
          }
          reject(error);
        });
    });
  }

  static async deviceLogin(screenName) {
    return new Promise(async (resolve, reject) => {
      const endpoint = USER_URL + ApiUserInventory.deviceLogin;
      const uniqueId = await DeviceInfo.getUniqueId();
      const body = {
        device_id: uniqueId,
        app_name: "b2b",
      };
      HttpClient.post(endpoint, body)
        .then((response) => {
          resolve(response);
          // navigate(screenName || NAVIGATION.home);
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
          reject(error);
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
          reject(error);
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
          reject(error);
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
          reject(error);
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
          reject(error);
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
          reject(error);
        });
    });
  }

  static async getUserSettings(data) {
    return new Promise((resolve, reject) => {
      const endpoint = `${
        USER_URL + ApiUserInventory.getUserSettings
      }?app_name=b2b`;

      HttpClient.get(endpoint, data)
        .then((response) => {
          resolve(response);
          // navigate(NAVIGATION.settings);
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
  static async patchSettings(data) {
    return new Promise((resolve, reject) => {
      const endpoint = USER_URL + ApiUserInventory.updateUserSettings;
      const body = {
        app_name: "b2b",
        ...data,
      };
      HttpClient.patch(endpoint, body)
        .then((response) => {
          resolve(response);
          // navigate(NAVIGATION.settings);
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

  static async sendChat(data) {
    return new Promise((resolve, reject) => {
      const endpoint = USER_URL + ApiUserInventory.sendChat;
      const body = {
        recipient_id: data,
        media_type: "text",
        ...data,
      };
      HttpClient.post(endpoint, body)
        .then((response) => {
          resolve(response);
          // navigate(NAVIGATION.settings);
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

  static async getMessages(id) {
    return new Promise((resolve, reject) => {
      const params = new URLSearchParams(id).toString();

      let endpoint;

      if (typeof id === "object") {
        endpoint = `${ApiUserInventory.getMessages}get-seller-message?${params}`;
      } else {
        endpoint = `${ApiUserInventory.getMessages}${id}`;
      }

      HttpClient.get(endpoint)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          if (error?.statusCode != 204) {
            Toast.show({
              text2: error.msg,
              position: "bottom",
              type: "error_toast",
              visibilityTime: 2000,
            });
          }

          reject(error);
        });
    });
  }
  static async getMessageHeads() {
    return new Promise((resolve, reject) => {
      const endpoint = USER_URL + ApiUserInventory.getMessageHeads;

      HttpClient.get(endpoint)
        .then((response) => {
          resolve(response);
          // navigate(NAVIGATION.settings);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  static async deleteMessages(id) {
    return new Promise((resolve, reject) => {
      const endpoint = USER_URL + ApiUserInventory.deleteMessages;
      const body = {
        recipient_id: id,
      };
      HttpClient.delete(endpoint, body)
        .then((response) => {
          resolve(response);
          // navigate(NAVIGATION.settings);
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

  static async getOneManufactureDetails(id) {
    return new Promise((resolve, reject) => {
      const endpoint = USER_URL + ApiUserInventory.getOneManufactureDetails(id);
      HttpClient.get(endpoint, id)
        .then((response) => {
          resolve(response);
          // navigate(NAVIGATION.settings);
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

  static async sellerFavourites(data) {
    return new Promise((resolve, reject) => {
      const endpoint = USER_URL + ApiUserInventory.sellerFavourites;
      const body = {
        ...data,
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
          reject(error);
        });
    });
  }

  static async productFavourites(data) {
    return new Promise((resolve, reject) => {
      const endpoint = USER_URL + ApiUserInventory.productFavourites;
      const body = {
        ...data,
      };
      HttpClient.post(endpoint, body)
        .then((response) => {
          resolve(response);
          Toast.show({
            text2: response?.msg,
            position: "bottom",
            type: "success_toast",
            visibilityTime: 2000,
          });
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

  static async getFavouriteProducts() {
    return new Promise((resolve, reject) => {
      const endpoint = USER_URL + ApiUserInventory.productFavourites;

      HttpClient.get(endpoint)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  static async getFavouriteSellers(data) {
    return new Promise((resolve, reject) => {
      const params = new URLSearchParams(data).toString();
      const endpoint = `${
        USER_URL + ApiUserInventory.sellerFavourites
      }?${params}`;

      HttpClient.get(endpoint, data)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  static async getCatalogs(data) {
    return new Promise((resolve, reject) => {
      const params = new URLSearchParams(data).toString();
      const endpoint = `${USER_URL + ApiUserInventory.catalog}?${params}`;

      HttpClient.get(endpoint, data)
        .then((response) => {
          resolve(response);
          console.log("suceess", response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  static async uploadProfileImage(image) {
    return new Promise(async (resolve, reject) => {
      const formData = new FormData();
      formData.append("profile", {
        uri: image.path,
        type: image.mime,
        name: image.path,
      });
      const endpoint = USER_URL + ApiUserInventory.uploadProfileImage;
      await axios({
        url: endpoint,
        method: "POST",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
          "app-name": "b2b",
        },
      })
        .then(async (response) => {
          resolve(response?.data);
        })
        .catch((error) => reject(error));
    });
  }

  static async editProfileController(id, data) {
    return new Promise((resolve, reject) => {
      const endpoint = `${USER_URL}${ApiUserInventory.editProfile}/${id}`;
      const body = data.profile_photo
        ? {
            profile_photo: data?.profile_photo,
          }
        : {
            firstname: data.firstname,
            lastname: data.lastname,
          };
      HttpClient.put(endpoint, body)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  static async deleteAddress(id) {
    return new Promise((resolve, reject) => {
      const endpoint = `${USER_URL + ApiUserInventory.userAddress}${id}`;

      HttpClient.delete(endpoint)
        .then((response) => {
          resolve(response);
          Toast.show({
            text2: "Address deleted",
            position: "bottom",
            type: "success_toast",
            visibilityTime: 2000,
          });
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
}
