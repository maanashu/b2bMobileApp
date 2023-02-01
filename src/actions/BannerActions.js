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

// export const getProduct =
//   (selectedId, subSelectedId, brandSelectedId, sellerID) =>
//   async (dispatch) => {
//     dispatch(getProductRequest());
//     try {
//       const res = await RetailController.getProduct(
//         selectedId,
//         subSelectedId,
//         brandSelectedId,
//         sellerID
//       );
//       dispatch(getProductSuccess(res));
//     } catch (error) {
//       dispatch(getProductError(error.message));
//     }
//   };
// export const getSearchProduct = (search, sellerID) => async (dispatch) => {
//   dispatch(getSeaProductRequest());
//   try {
//     const res = await RetailController.getSearchProduct(search, sellerID);
//     dispatch(getSeaProductSuccess(res));
//   } catch (error) {
//     dispatch(getSeaProductError(error.message));
//   }
// };
