import { NAVIGATION } from "@/constants";
import { strings } from "@/localization";
import { navigate } from "@/navigation/NavigationRef";
import { ApiUserInventory } from "@/Utils/APIinventory";

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

  static async sendOtp(phoneNumber, countryCode, key) {
    return new Promise((resolve, reject) => {
      const endpoint = ApiUserInventory.sendOtp;
      const body = key
        ? {
            phone_code: countryCode,
            phone_no: phoneNumber,
            isAlreadyCheck: true,
          }
        : {
            phone_code: countryCode,
            phone_no: phoneNumber,
          };
      HttpClient.post(endpoint, body)
        .then((response) => {
          if (response.status_code === 200) {
            if (response?.payload?.is_phone_exits) {
              navigate(NAVIGATION.enterPin);
            } else {
              Toast.show({
                position: "bottom",
                type: "success_toast",
                text2: "OTP sent successfully !",
                visibilityTime: 2000,
              });
              navigate(NAVIGATION.verify, {
                id: response.payload.id,
                key: key,
              });
            }
          } else {
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
          reject(error);
        });
    });
  }

  static async verifyOtp(id, value, key) {
    const endpoint = ApiUserInventory.verifyOtp;
    const body = key
      ? {
          otp: value,
          id: id,
          role_id: 7,
          isAlreadyCheck: true,
        }
      : {
          otp: value,
          id: id,
          role_id: 7,
        };
    await HttpClient.post(endpoint, body)
      .then((response) => {
        if (response.status_code === 200) {
          Toast.show({
            type: "success_toast",
            text2: strings.successMessages.otpVerified,
            position: "bottom",
            visibilityTime: 1500,
          });
          key ? navigate(NAVIGATION.enterPin) : navigate(NAVIGATION.register);
        } else {
          Toast.show({
            text2: "Invalid OTP",
            position: "bottom",
            type: "error_toast",
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
