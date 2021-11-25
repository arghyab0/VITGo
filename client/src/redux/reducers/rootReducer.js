import { combineReducers } from "redux";

//reducers
import authReducer from "./authReducer";
import requestsReducer from "./requestsReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  requests: requestsReducer,
});

export default rootReducer;
