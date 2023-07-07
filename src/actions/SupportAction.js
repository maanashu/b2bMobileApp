import { BannerController, CategoryController } from "@/controllers";
import { SupportController } from "@/controllers/SupportController";
import { TYPES } from "@/Types/Types";

const getFaqRequest = () => ({
  type: TYPES.FAQ_REQUEST,
  payload: null,
});
const getFaqSuccess = (faqs) => ({
  type: TYPES.FAQ_SUCCESS,
  payload: { faqs },
});
const getFaqError = (error) => ({
  type: TYPES.FAQ_ERROR,
  payload: { error },
});

const getSubjectsRequest = () => ({
  type: TYPES.GET_SUBJECT_REQUEST,
  payload: null,
});

const getSubjectsError = (error) => ({
  type: TYPES.GET_SUBJECT_ERROR,
  payload: { error },
});

const getSubjectsSuccess = (subject) => ({
  type: TYPES.GET_SUBJECT_SUCCESS,
  payload: { subject },
});

const addNewTicketRequest = () => ({
  type: TYPES.ADD_NEW_TICKET_REQUEST,
  payload: null,
});
const getAddNewTicketError = (error) => ({
  type: TYPES.ADD_NEW_TICKET_ERROR,
  payload: { error },
});
const getAddNewTicketSuccess = (ticket) => ({
  type: TYPES.ADD_NEW_TICKET_SUCCESS,
  payload: { ticket },
});

const getSupportListRequest = () => ({
  type: TYPES.GET_SUPPORTLIST_REQUEST,
  payload: null,
});

const getSupportListError = (error) => ({
  type: TYPES.GET_SUPPORTLIST_ERROR,
  payload: { error },
});

const getSupportListSuccess = (support) => ({
  type: TYPES.GET_SUPPORTLIST_SUCCESS,
  payload: { support },
});

export const faq = (type) => async (dispatch) => {
  dispatch(getFaqRequest());
  try {
    const res = await SupportController.getFaqs(type);
    dispatch(getFaqSuccess(res));
  } catch (error) {
    dispatch(getFaqError(error.message));
  }
};

export const getSubjects = (data) => async (dispatch) => {
  dispatch(getSubjectsRequest());
  try {
    const res = await SupportController.getSubjects(data);
    dispatch(getSubjectsSuccess(res));
  } catch (error) {
    dispatch(getSubjectsError(error.message));
  }
};

export const addNewTicket = (data) => async (dispatch) => {
  dispatch(addNewTicketRequest());
  try {
    const res = await SupportController.addNewTicket(data);
    dispatch(getAddNewTicketSuccess(res));
    dispatch(getSupportList());
    return;
  } catch (error) {
    dispatch(getAddNewTicketError(error.message));
    throw error;
  }
};

export const getSupportList = () => async (dispatch) => {
  dispatch(getSupportListRequest());
  try {
    const res = await SupportController.getSupportList();
    dispatch(getSupportListSuccess(res));
  } catch (error) {
    dispatch(getSupportListError(error.message));
  }
};
