import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import gamesReducer from "./reducers/gamesReducer.js";

// const composeEnhancers =
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(
  gamesReducer,
  applyMiddleware(thunk)
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
