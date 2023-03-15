import { BannerController, CategoryController } from "@/controllers";
import { TYPES } from "@/Types/Types";

const getBannerRequest = () => ({
  type: TYPES.GET_BANNER_REQUEST,
  payload: null,
});
const getBannerSuccess = (bannerList) => ({
  type: TYPES.GET_BANNER_SUCCESS,
  payload: { bannerList },
});
const getBabberError = (error) => ({
  type: TYPES.GET_BANNER_ERROR,
  payload: { error },
});

export const getBanners = () => async (dispatch) => {
  dispatch(getBannerRequest());
  try {
    const res = await BannerController.getBanners();
    dispatch(getBannerSuccess(res));
  } catch (error) {
    dispatch(getBabberError(error.message));
  }
};
