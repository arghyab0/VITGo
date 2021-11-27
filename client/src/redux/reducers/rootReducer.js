import { combineReducers } from "redux";

//reducers
import authReducer from "./authReducer";
import requestsReducer from "./requestsReducer";
import usersReducer from "./usersReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  requests: requestsReducer,
  users: usersReducer,
});

export default rootReducer;
