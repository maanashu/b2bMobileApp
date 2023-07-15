import { TYPES } from "@/Types/Types";

export const globalReset = () => ({
  type: TYPES.GLOBAL_RESET,
  payload: null,
});

export const biometricsSet = (status) => ({
  type: TYPES.BIOMETRIC_SUCCESS,
  payload: { status },
});

export const previousScreen = (screenName) => ({
  type: TYPES.PREVIOUS_SCREEN_SUCCESS,
  payload: { screenName },
});
