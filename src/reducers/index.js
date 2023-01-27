import { combineReducers } from "redux";
import { errorReducer } from "@/reducers/ErrorReducer";
import { statusReducer } from "@/reducers/StatusReducer";
import { userReducer } from "@/reducers/UserReducer";
import { categoryReducer } from "@/reducers/CategoryReducer";

export const rootReducer = combineReducers({
  error: errorReducer,
  status: statusReducer,
  user: userReducer,
  category: categoryReducer,
});
