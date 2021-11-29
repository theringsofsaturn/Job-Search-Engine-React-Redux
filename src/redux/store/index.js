import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import favouritesReducer from "../reducers/favourites";
import jobsReducer from "../reducers/jobs";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";

export const initialState = {
  favourites: {
    elements: [],
  },
  jobs: {
    elements: [],
  },
};

const persistConfig = {
  key: "root",
  storage,
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const mainReducer = combineReducers({
  favourites: favouritesReducer,
  jobs: jobsReducer,
});

const persistedReducer = persistReducer(persistConfig, mainReducer);

const configureStore = createStore(
  persistedReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);
const persistor = persistStore(configureStore);

export { configureStore, persistor };
