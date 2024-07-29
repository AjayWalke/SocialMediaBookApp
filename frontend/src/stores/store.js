import { configureStore } from '@reduxjs/toolkit';
import loginStore from "../stores/main_home/login"

const store = configureStore({
  reducer: {
    user: loginStore,
  },
});

export default store;


