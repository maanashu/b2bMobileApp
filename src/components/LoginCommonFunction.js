import { previousScreen } from "@/actions/GlobalActions";
import { NAVIGATION } from "@/constants";
import { navigate } from "@/navigation/NavigationRef";

export const LoginCommonFunction = (
  dispatch,
  user,
  token,
  savedScreen,
  dynamicScreen,
  ProductDetail
) => {
  switch (true) {
    case !!token:
      switch (user?.getUserProfile?.user_profiles?.wallet_steps) {
        case 0:
        case undefined:
        case null:
          dispatch(previousScreen(savedScreen));
          navigate(NAVIGATION.personalInformation, {
            route: "kyc",
          });
          break;
        case 1:
          dispatch(previousScreen(savedScreen));
          navigate(NAVIGATION.checkAndRequestKYC);
          break;
        case 1.1:
          dispatch(previousScreen(savedScreen));
          navigate(NAVIGATION.ageVerification);
          break;
        case 4:
          dispatch(previousScreen(savedScreen));
          navigate(NAVIGATION.connectBank);
          break;
        case 5:
          if (ProductDetail) {
            navigate(dynamicScreen, {
              attributes:
                ProductDetail?.productDetail?.product_detail?.supplies,
              product_id: ProductDetail?.productDetail?.product_detail?.id,
              service_id:
                ProductDetail?.productDetail?.product_detail?.service_id,
            });
          } else {
            navigate(dynamicScreen);
          }
          break;
      }
      break;
    default:
      dispatch(previousScreen(savedScreen));
      navigate(NAVIGATION.splash);
      break;
  }
};
