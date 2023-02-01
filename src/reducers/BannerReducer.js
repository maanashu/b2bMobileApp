import { TYPES } from "@/Types/Types";
const INITIALSTATE = {
  banners: [],
};
export const bannerReducer = (state = { INITIALSTATE }, { payload, type }) => {
  switch (type) {
    case TYPES.GET_BANNER_SUCCESS:
      return { ...state, banners: payload.bannerList.payload.data };

    default:
      return state;
  }
};
