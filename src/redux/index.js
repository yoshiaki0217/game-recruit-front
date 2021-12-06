import { createStore, combineReducers } from "redux";
import { UsersReducers } from "./users/reducers"

const rootReducer = combineReducers({
  UsersReducers,
});

const store = createStore(rootReducer);

export default store;