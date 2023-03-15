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

export const faq = (data) => async (dispatch) => {
  dispatch(getFaqRequest());
  try {
    const res = await SupportController.getFaqs(data);
    dispatch(getFaqSuccess(res));
  } catch (error) {
    dispatch(getFaqError(error.message));
  }
};
