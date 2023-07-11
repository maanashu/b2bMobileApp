import { previousScreen } from "@/actions/GlobalActions";
import { NAVIGATION } from "@/constants";
import { navigate } from "@/navigation/NavigationRef";

export function LoginCommon(dispatch, token, savedScreen, dynamicScreen) {
  if (!token) {
    dispatch(previousScreen(savedScreen));
    navigate(NAVIGATION.splash);
  } else {
    navigate(dynamicScreen);
  }
}
