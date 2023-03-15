import { TYPES } from "@/Types/Types";
const INITIALSTATE = {
  faqs: [],
};
export const supportReducer = (state = { INITIALSTATE }, { payload, type }) => {
  switch (type) {
    case TYPES.FAQ_SUCCESS:
      return { ...state, faqs: payload.faqs.payload.data };

    default:
      return state;
  }
};
