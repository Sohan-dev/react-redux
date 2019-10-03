import { combineReducers } from "redux";
import {userDetail} from "./reducer/user";

const rootReducer = combineReducers({
  userDetail
});

export default rootReducer;
