import { combineReducers } from "redux";
import signup from "./signup";
import user from "./user";

const rootReducer = combineReducers({
  signup,
  user
})

export default rootReducer;