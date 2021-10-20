// import { createStore, compose, applyMiddleware } from "redux";
// import { combineReducers } from "redux";
// import reducers from "./reducers";
// import thunk from "redux-thunk";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const rootReducer = combineReducers({
//   ...reducers,
// });

// export default process.env.NODE_ENV === "development"
//   ? createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
//   : createStore(rootReducer, applyMiddleware(thunk));


import { createStore, compose, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";
import { connectRouter, routerMiddleware } from "connected-react-router";
const createHistory= require("history").createBrowserHistory
const history = createHistory();
const routeMiddleware = routerMiddleware(history);
const middlewares = [thunk, routeMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  ...reducers,
  router: connectRouter(history),
});

const store = process.env.NODE_ENV === "development"?
createStore(
  combineReducers({
    ...reducers,
    router: connectRouter(history),
  }),
  composeEnhancers(applyMiddleware(...middlewares))
):createStore(rootReducer, applyMiddleware(thunk))
export { store, history };


