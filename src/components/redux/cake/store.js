import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import { thunk } from "redux-thunk";

import cakeReducer from "./cakeReducer";
import icecreamReducer from "../icecream/icecreamReducer";
import userReducer from "../users/userReducer";

//const store = createStore(cakeReducer)
const store = createStore(
  combineReducers({
    cake: cakeReducer,
    icecream: icecreamReducer,
    users: userReducer,
  }),
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
