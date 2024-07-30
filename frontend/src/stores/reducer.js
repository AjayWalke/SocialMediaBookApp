import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import loginStore from "./main_home/login"

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  user: loginStore,
});

export default persistReducer(persistConfig, rootReducer);
