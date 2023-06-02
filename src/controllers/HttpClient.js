import axios from "axios";
import { Config } from "react-native-config";
import { strings } from "@/localization";
import { store } from "@/store";

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
