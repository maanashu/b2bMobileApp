import axios from "axios";
import { Config } from "react-native-config";
import { strings } from "@/localization";
import { store } from "@/store";
import { Alert } from "react-native";
import { logout } from "@/actions/UserActions";
import { logoutOrder } from "@/actions/OrderAction";
import { logoutWallet } from "@/actions/WalletActions";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";

const client = axios.create({
  baseURL: Config.API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

client.interceptors.request.use(function (config) {
  const register = store.getState()?.user?.registered?.token;
  const user = store.getState()?.user?.user?.payload?.token;
  const token = user || register || null;
  config.headers = {
    ...config.headers,
    Authorization: token,
    "app-name": "b2b",
  };
  return config;
});

client.interceptors.response.use(
  (response) =>
    response.status === 204
      ? Promise.reject({ error: "emptyContent", statusCode: 204 })
      : response.data,
  (error) => {
    if (error.response) {
      if (error.response.data.msg === "invalid_token") {
        // Show an alert in React Native
        if (store.getState()?.user?.registered?.token||store.getState()?.user?.user?.payload?.token) {
          
          Alert.alert(
            "Session activated from another device, please login again to continue",
            [
              {
                text: "Ok",
                onPress: () => {
                  navigate(NAVIGATION.home);
                  store.dispatch(logout());
                  store.dispatch(logoutOrder());
                  store.dispatch(logoutWallet());
                },
                style: "Ok",
              },
            ]
          );
        }
      }
      return Promise.reject(error.response.data);
    } else if (error.request) {
      return Promise.reject({ error: strings.common.connectionError });
    } else {
      return Promise.reject(error);
    }
  }
);

const setAuthorization = (token) => {
  client.defaults.headers.common.authorization = token;
};

const clearAuthorization = () => {
  delete client.defaults.headers.common.authorization;
};

export const HttpClient = { ...client, setAuthorization, clearAuthorization };
