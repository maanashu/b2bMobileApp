export const TYPES = {
  GLOBAL_RESET: "GLOBAL_RESET",
};

import { TYPES as TYPE } from "@/Types/Types";

export const globalReset = () => ({
  type: TYPES.GLOBAL_RESET,
  payload: null,
});

export const biometricsSet = (status) => ({
  type: TYPE.BIOMETRIC_SUCCESS,
  payload: { status },
});

export const previousScreen = (screenName) => ({
  type: TYPE.PREVIOUS_SCREEN_SUCCESS,
  payload: { screenName },
});
