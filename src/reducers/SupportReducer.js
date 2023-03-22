import { TYPES } from "@/Types/Types";
const INITIALSTATE = {
  faqs: [],
  subject: [],
  support: [],
};
export const supportReducer = (state = { INITIALSTATE }, { payload, type }) => {
  switch (type) {
    case TYPES.FAQ_SUCCESS:
      return { ...state, faqs: payload.faqs.payload.data };

    case TYPES.GET_SUBJECT_SUCCESS:
      return {
        ...state,
        subject: payload.subject.payload.data,
      };
    case TYPES.GET_SUPPORTLIST_SUCCESS:
      return {
        ...state,
        support: payload.support.payload.data,
      };
    default:
      return state;
  }
};
