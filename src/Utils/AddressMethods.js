import { GOOGLE_MAP } from "@/constants/ApiKeys";

function getAddressFromCoordinates(latitude, longitude) {
  return new Promise((resolve, reject) => {
    fetch(
      "https://maps.googleapis.com/maps/api/geocode/json?address=" +
        latitude +
        "," +
        longitude +
        "&key=" +
        GOOGLE_MAP.API_KEYS
    )
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status === "OK") {
          resolve(responseJson?.results?.[0]);
        } else {
          reject(responseJson.error_message);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export { getAddressFromCoordinates };
