import { combineReducers } from "redux";
import { errorReducer } from "@/reducers/ErrorReducer";
import { statusReducer } from "@/reducers/StatusReducer";
import { userReducer } from "@/reducers/UserReducer";
import { categoryReducer } from "@/reducers/CategoryReducer";
import { productReducer } from "@/reducers/ProductReducer";
import { bannerReducer } from "./BannerReducer";

export const rootReducer = combineReducers({
  error: errorReducer,
  status: statusReducer,
  user: userReducer,
  category: categoryReducer,
  product: productReducer,
  banner: bannerReducer,
});
